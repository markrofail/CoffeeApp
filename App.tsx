import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import {
    useFonts,
    Roboto_400Regular,
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
} from "@expo-google-fonts/roboto";
import { ROUTES, RootStackParamList } from "./src/routes";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_300Light,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
        Roboto_900Black,
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        animationTypeForReplace: "push",
                        animation: "slide_from_right",
                    }}
                >
                    {ROUTES.map(({ name, component }) => (
                        <Stack.Screen key={name} name={name} component={component} />
                    ))}
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
