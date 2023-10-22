import { exec } from "child_process";

export const pullAndRestart = async (imageName: string) => {
  console.log("Pulling Image | ", imageName);
  exec("docker pull " + imageName, (err, stdout, stderr) => {
    if (err) {
      console.log("Error pulling image | ", err);
      return;
    }
    console.log("Image Pulled | ", stdout);
    exec("docker ps -qf ancestor=" + imageName, (err, stdout, stderr) => {
      if (err) {
        console.log("Error finding container | ", err);
        return;
      }
      console.log("Found Container | ", stdout);
      const containerId = stdout;
      console.log("Restarting Container | ", containerId);

      exec("docker restart " + containerId, (err, stdout, stderr) => {
        if (err) {
          console.log("Error restarting container | ", err);
          return;
        }
        console.log("Container Restarted | ", stdout);
      });
    });
  });
};
