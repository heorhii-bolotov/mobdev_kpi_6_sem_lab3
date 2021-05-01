import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import ChartScreen from "../screens/ChartScreen";
import PieChartScreen from "../screens/PieChartScreen";
import ImagesScreen from "../screens/ImagesScreen";

//Add navigators with screens in this file
export const HomeNavigator = createStackNavigator({
  Home: { screen: HomeScreen }
});

export const SettingsNavigator = createStackNavigator({
  Stats: { screen: SettingsScreen }
});

export const ProfileNavigator = createStackNavigator({
  Profile: { screen: ProfileScreen }
});

export const SearchNavigator = createStackNavigator({
  Search: { screen: SearchScreen }
});

export const ImagesNavigator = createStackNavigator({
  Gallery: { screen: ImagesScreen }
});

export const ChartNavigator = createStackNavigator({
  Chart: { screen: ChartScreen }
});

export const PieChartNavigator = createStackNavigator({
  PieChart: { screen: PieChartScreen }
});
