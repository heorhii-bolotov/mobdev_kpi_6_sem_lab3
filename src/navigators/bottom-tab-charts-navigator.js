import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "react-navigation";
import {
    SettingsNavigator,
    ChartNavigator,
    PieChartNavigator
} from "./screen-stack-navigators";

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Ionicons;
    let iconName;
    if (routeName === "Home") {
        iconName = "ios-home";
    } else if (routeName === "Chart") {
        iconName = "bar-chart-outline";
    } else if (routeName === "Pie") {
        iconName = "pie-chart-outline";
    }

    return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const BottomTabChartsNavigator = createBottomTabNavigator(
    {
        Home: SettingsNavigator,
        Chart: ChartNavigator,
        Pie: PieChartNavigator,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor)
        }),
        tabBarOptions: {
            activeTintColor: "black",
            inactiveTintColor: "gray"
        }
    }
);

export default BottomTabChartsNavigator;
