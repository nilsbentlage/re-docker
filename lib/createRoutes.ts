import { Routes } from "..";
import { pullAndRestart } from "./pullAndRestart";
import type { Express, Request, Response } from "express";

export function createRoutes(app: Express, config: { routes: Routes }) {
  for (let route of config.routes) {
    app.get("/" + route.hookUrl, async (req: Request, res: Response) => {
      await pullAndRestart(route.imageName);
      res.send(
        `Image ${route.imageName} was pulled and the container restarted`
      );
    });
  }
}
