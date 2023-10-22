import express, { Express } from "express";
import fs from "node:fs";

import { createRoutes } from "./lib/createRoutes";
import { returnRoutes } from "./lib/getImages";

type Routes = Array<{ imageName: string; hookUrl: string }>;

const app: Express = express();
const port = 3000;

returnRoutes()
  .then((autoRoutes: any) => {
    console.table(autoRoutes);
    const config: { routes: Routes } = { routes: autoRoutes || [] };

    createRoutes(app, config);

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => console.log("Error: ", err));

export type { Routes };
