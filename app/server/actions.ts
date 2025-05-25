import { createServerFn } from "@tanstack/react-start";
import { writeCache, readCache } from "./mtg";
export const postCacheRequest = createServerFn({
  method: "POST",
})
  .validator((data: any) => data)
  .handler(async (ctx) => {
    // TODO call writecache
    // ctx.data.card
    // ctx.data.set
    // ctx.data.number
    writeCache(ctx.data.set, ctx.data.number, ctx.data.card);
    console.log(`writeCache called`);
  });

export const getCacheRequest = createServerFn()
  .validator((data: any) => data)
  .handler(async (ctx) => {
    // TODO call and return stuff from readcache
    console.log(`owo ${ctx.data}`);
  });
