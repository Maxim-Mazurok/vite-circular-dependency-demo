import { expect, it } from "vitest";
import { Component } from "./component";
import { routes } from "./router";

it("test", () => {
  /**
  Since we're importing `Component` before `routes`, the following will happen:
  1. Import `Component`
  2. It imports `routes`
  3. `routes` imports `Component` - circular dependency detected, so `Component` will be resolved as `undefined`
  
  export const routes = {
    "/component": undefined,
  };
   */
  expect(routes).toMatchInlineSnapshot(`
    {
      "/component": undefined,
    }
  `);

  // and component will work fine:
  expect(Component()).toMatchInlineSnapshot(`"I am at /component"`);
});
