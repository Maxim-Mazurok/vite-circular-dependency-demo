import { componentsEnum, URLs } from "./urls";

const componentUrl = URLs[componentsEnum.COMPONENT];

export const Component = () => {
  return `I am at ${componentUrl}`;
};
