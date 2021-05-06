import { Application, Context } from "oak";
import * as middlewares from "./middlewares/index.ts";
import { router } from "./routes/index.ts";

const app = new Application<Context>();
app.use(middlewares.logger);
app.use(middlewares.requestId);
app.use(middlewares.responseTime);

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 8000;
console.log(`Listening on http://127.0.0.1:${PORT}`);
console.log(`Use Ctrl-C to stop`);
await app.listen({ port: PORT });
