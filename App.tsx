import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import { ROUTES, RootStackParamList } from "./src/routes";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {ROUTES.map(({ name, component }) => (
                        <Stack.Screen key={name} name={name} component={component} />
                    ))}
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
