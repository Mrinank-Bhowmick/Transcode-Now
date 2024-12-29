import { createRouteHandler } from "uploadthing/next";
import { env } from "process";

import { ourFileRouter } from "./core";
export const runtime = "nodejs";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: { isDev: env.NODE_ENV === "development" },
  // Apply an (optional) custom config:
  // config: { ... },
});
