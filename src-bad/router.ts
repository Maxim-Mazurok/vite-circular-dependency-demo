import { Component } from "./component";
import { componentsEnum, URLs } from "./urls";

export const routes = {
  [topLevelMenuItems.dashboard]: {
    component: Component,
    name: "Dashboard",
    path: URLs[topLevelMenuItems.dashboard],
  }
  [URLs[componentsEnum.COMPONENT]]: Component,
};
