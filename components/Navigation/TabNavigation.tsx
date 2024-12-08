import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "../Screens/HomeScreen";
import CodingScreen from "../Screens/CodingScreen";
import SimulationScreen from "../Screens/SimulationScreen";
import { GlobalColors } from "../../styles/GlobalColors";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            let iconName: "code" | "home" | "game-controller" = "home";
            let iconColor = focused ? GlobalColors.primary : color;

            if (route.name === "Coding") {
              iconName = "code";
              return (
                <FontAwesome name={iconName} size={size} color={iconColor} />
              );
            } else if (route.name === "Home") {
              iconName = "home";
              return (
                <FontAwesome name={iconName} size={size} color={iconColor} />
              );
            } else if (route.name === "Simulation") {
              iconName = "game-controller";
              return <Ionicons name={iconName} size={size} color={iconColor} />;
            }
          },
        })}
      >
        <Tab.Screen
          name="Coding"
          component={CodingScreen}
          options={{ title: "Código" }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Inicio" }}
        />
        <Tab.Screen
          name="Simulation"
          component={SimulationScreen}
          options={{ title: "Simulación" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
