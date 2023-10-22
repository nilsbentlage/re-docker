import { exec } from "child_process";
import crypto from "crypto";

export async function returnRoutes() {
  let dockerData: any;
  const routes = new Promise((resolve, reject) => {
    exec("docker ps --format json", (err, stdout, stderr) => {
      if (err) {
        console.log("Error searching for Images | ", err);
        return;
      }
      dockerData = JSON.parse(stdout);
      const imageNames = [dockerData.Image];
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
  const test = await routes;
  return await test;
}
