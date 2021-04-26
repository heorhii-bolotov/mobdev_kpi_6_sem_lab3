import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import BottomTabNavigator from "./bottom-tab-navigator";
import { SettingsNavigator } from "./screen-stack-navigators";
import BottomTabChartsNavigator from "./bottom-tab-charts-navigator";

const DrawerNavigator = createDrawerNavigator({
  Home: BottomTabNavigator,
  Stats: BottomTabChartsNavigator
});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;
