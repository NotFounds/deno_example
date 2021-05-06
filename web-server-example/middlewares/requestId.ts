import { Context } from "oak";
import { v4 as uuid } from "std/uuid"; // TODO(notfounds): use v6

const requestId = async (ctx: Context, next: () => Promise<void>) => {
  await next();
  const requestId = uuid.generate().toString();
  ctx.response.headers.set("X-Response-Id", requestId);
};

export { requestId };
