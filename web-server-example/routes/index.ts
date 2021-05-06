import { Context, Router } from "oak";

const router: Router = new Router();

router.get("/", (ctx: Context) => {
  ctx.response.body = "Hello, World!";
});

export { router };
