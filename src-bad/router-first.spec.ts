import { expect, it } from "vitest";
import { routes } from "./router";

it("test", () => {
  // Since we're importing `routes` before the `Component`, it will try to import `Component` which will try to import `routes` which will resolve as `undefined` since it's a circular dependency:
  /**
  Since we're importing `routes` before the `Component`, the following will happen:
  1. Import `routes`
  2. It imports `Component`
  3. `Component` imports `routes` - circular dependency detected, so `routes` will be resolved as `undefined`
  4. We can't call `Object.keys` on `undefined` so it will fail:

    FAIL  src-bad-router/test.spec.ts [ src-bad-router/test.spec.ts ]
    TypeError: Cannot convert undefined or null to object
    ❯ src-bad-router/component.ts:3:29
          1| import { routes } from "./router";
          2| 
          3| const componentUrl = Object.keys(routes)[0];
          |                             ^
          4| 
          5| export const Component = () => {
    ❯ src-bad-router/router.ts:1:1
   */
  expect(routes).toBeDefined();
});
