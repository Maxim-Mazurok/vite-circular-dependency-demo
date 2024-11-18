import { getRoutes } from "./router";

export const Component = () => {
  const componentUrl = Object.keys(getRoutes())[0];

  return `I am at ${componentUrl}`;
};
