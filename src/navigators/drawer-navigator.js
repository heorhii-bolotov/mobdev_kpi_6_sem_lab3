import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import BottomTabNavigator from "./bottom-tab-navigator";
import { SettingsNavigator } from "./screen-stack-navigators";
import BottomTabChartsNavigator from "./bottom-tab-charts-navigator";

const DrawerNavigator = createDrawerNavigator({
  /*To have a header on the drawer screens,
        there must be a navigator that includes the screen you want to add to the drawer navigator.
        See 'screen-stack-navigator' file*/
  Home: BottomTabNavigator,
  Stats: BottomTabChartsNavigator
});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;
