import { exec } from "child_process";
import crypto from "crypto";

export async function returnRoutes() {
  const routes = new Promise((resolve, reject) => {
    exec("docker ps --format json", (err, stdout, stderr) => {
      if (err) {
        console.log("Error searching for Images | ", err);
        return;
      }
      let dockerData: any = JSON.parse("[" + stdout.replace("}", "},") + "]");
      const imageNames = dockerData.map((container: any) => container.Image);
      resolve(
        imageNames.map((image) => {
          return {
            imageName: image,
            hookUrl: crypto.randomUUID(),
          };
        })
      );
    });
  });
  const returnValue = await routes;
  return await returnValue;
}
