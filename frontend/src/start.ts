import {
  createStart,
  createMiddleware,
} from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Manual CSRF protection — replaces createCsrfMiddleware which uses
// createIsomorphicFn().server() and fails to resolve on Vercel.
const csrfMiddleware = createMiddleware().server(async (ctx) => {
  if (ctx.handlerType !== "serverFn") {
    return ctx.next();
  }
  const origin = ctx.request.headers.get("origin");
  const host = ctx.request.headers.get("host");
  if (origin && host) {
    try {
      const originHost = new URL(origin).host;
      if (originHost !== host) {
        return new Response("CSRF validation failed", { status: 403 });
      }
    } catch {
      return new Response("CSRF validation failed", { status: 403 });
    }
  }
  return ctx.next();
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, csrfMiddleware],
}));
