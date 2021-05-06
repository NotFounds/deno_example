import { Context } from "oak";

const responseTime = async (ctx: Context, next: () => Promise<void>) => {
  const start = Date.now();
  await next();
  const diff = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${diff}ms`);
};

export { responseTime };
