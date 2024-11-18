import { routes } from "./router";

const componentUrl = Object.keys(routes)[0];

export const Component = () => {
  return `I am at ${componentUrl}`;
};
