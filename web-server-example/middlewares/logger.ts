import { format } from "std/datetime";
import { cyan, green, red, yellow } from "std/fmt/colors";
import { Context } from "oak";

const logger = async (ctx: Context, next: () => Promise<void>) => {
  await next();
  const requestTime = ctx.response.headers.get("X-Response-Time");
  const requestId = ctx.response.headers.get("X-Response-Id");
  const requestIp = ctx.request.ip;
  const status = ctx.response.status;
  const userAgent = ctx.request.headers.get("User-Agent");
  const datetime = format(new Date(Date.now()), "yyyy-MM-dd hh:mm:ss.SSS");

  logWithColor(
    `${datetime} ${ctx.request.method} ${ctx.request.url} ${status} - ${requestIp} ${requestTime} [${requestId}] ${userAgent}`,
    status,
  );
};

const logWithColor = (log: string, status: number) => {
  if (200 <= status && status < 300) {
    console.log(green(log));
  } else if (300 <= status && status < 400) {
    console.log(cyan(log));
  } else if (400 <= status && status < 500) {
    console.log(yellow(log));
  } else {
    console.log(red(log));
  }
};

export { logger };
