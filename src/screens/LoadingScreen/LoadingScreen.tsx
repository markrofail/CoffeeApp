import React, { FC, useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { PRIMARY_COLOR } from "../../constants";

const DELAY_CHANGE_TEXT_MS = 2000;
const DELAY_NEXT_SCREEN_MS = 3000;

interface LoadingScreenProps {}

const LoadingScreen: FC<LoadingScreenProps> = () => {
    const navigation = useNavigation();
    const [loadingText, setLoadingText] = useState("Processing");

    useEffect(() => {
        const intervalID = setInterval(() => {
            setLoadingText("Processed");
        }, DELAY_CHANGE_TEXT_MS);

        return () => clearInterval(intervalID);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(() => {
            navigation.navigate("Receipt");
        }, DELAY_NEXT_SCREEN_MS);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <ActivityIndicator size="large" animating={true} color={PRIMARY_COLOR} />
                <Text style={styles.loadingText}>{loadingText}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    loadingText: {
        marginTop: 25,
        fontSize: 16,
        fontWeight: "bold",
        color: PRIMARY_COLOR,
    },
});

export default LoadingScreen;
