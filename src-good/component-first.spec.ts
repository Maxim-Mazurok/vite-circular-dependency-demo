import { expect, it } from "vitest";
import { Component } from "./component";

it("test", () => {
  /**
  1. Import `Component`
  2. It imports `getRoutes`
  3. We call `Component()`
  4. It calls `getRoutes()`
  5. It returns an object with a key of "/component" and a value of `Component` function
  6. `Component` function returns "I am at /component" as expected
  */
  expect(Component()).toBe("I am at /component");
});
