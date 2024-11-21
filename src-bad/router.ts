import { Component } from "./component";
import { componentsEnum, URLs } from "./urls";

export const routes = {
  [URLs[componentsEnum.COMPONENT]]: Component,
};
