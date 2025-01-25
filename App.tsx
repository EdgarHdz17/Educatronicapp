import { StatusBar, View, Text, TextInput } from "react-native";
import TabNavigator from "./components/Navigation/TabNavigation";
import SVG from "./components/SVG/SVG";
import stylesApp from "./styles/AppStyles";

(Text as any).defaultProps = {
  ...(Text as any).defaultProps,
  allowFontScaling: false,
};

(TextInput as any).defaultProps = {
  ...(TextInput as any).defaultProps,
  allowFontScaling: false,
};

export default function App() {
  return (
    <View style={stylesApp.container}>
      <View style={stylesApp.svgContainer}>
        <SVG />
      </View>
      <TabNavigator />
      <StatusBar barStyle="light-content" />
    </View>
  );
}
