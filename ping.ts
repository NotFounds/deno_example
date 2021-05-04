import { serve, Response } from "https://deno.land/std/http/server.ts";

const PORT = 8080;
const server = serve({ port: PORT });
console.log(`🚀 Server is running on http://localhost:${PORT}`);

for await (const req of server) {
  switch (req.url) {
    case "/ping":
      req.respond({ body: "pong" });
      break;
    default:
      req.respond({ body: "404! Page Not Found!" }); // respond response
  }
}
