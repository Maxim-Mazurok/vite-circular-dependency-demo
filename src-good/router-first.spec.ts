import { expect, it } from "vitest";
import { getRoutes } from "./router";

it("test", () => {
  /**
  1. Import `getRoutes`
  2. It imports `Component`
  3. We call `getRoutes()`
  4. It returns an object with a key of "/component" and a value of `Component` function
  */
  expect(getRoutes()).toMatchInlineSnapshot(`
    {
      "/component": [Function],
    }
  `);

  /**
  5. We call `getRoutes()["/component"]()`
  6. It calls `Component` function
  7. `Component` function returns "I am at /component" as expected
  */
  expect(getRoutes()["/component"]()).toBe("I am at /component");
});
