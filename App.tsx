import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";

import BasketScreen from "./src/screens/BasketScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import ReceiptScreen from "./src/screens/ReceiptScreen";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={BasketScreen} />
                    <Stack.Screen name="Loading" component={LoadingScreen} />
                    <Stack.Screen name="Receipt" component={ReceiptScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
