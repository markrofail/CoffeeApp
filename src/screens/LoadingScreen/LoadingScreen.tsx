import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { BACKGROUND_COLOR, BOLD_TEXT, PRIMARY_COLOR, SCREEN_PADDING } from "../../constants";
import { RootStackParamList } from "../../routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import moment from "moment";

const DELAY_CHANGE_TEXT_MS = 2000 / 2;
const DELAY_NEXT_SCREEN_MS = 3000 / 2;

type Props = NativeStackScreenProps<RootStackParamList, "Loading">;
export default function LoadingScreen({ navigation, route }: Props) {
    const { branch, item } = route.params;
    const [loadingText, setLoadingText] = useState("Processing");

    // change text to 'Processed' after DELAY_CHANGE_TEXT_MS
    useEffect(() => {
        const intervalID = setInterval(() => {
            setLoadingText("Processed");
        }, DELAY_CHANGE_TEXT_MS);

        return () => clearInterval(intervalID);
    }, []);

    // go to ReceiptScreen after DELAY_NEXT_SCREEN_MS
    useEffect(() => {
        const intervalID = setInterval(() => {
            const formattedTimestamp = moment().format("D MMM YYYY h:mm:ss a");
            navigation.navigate("Receipt", { branch, item, formattedTimestamp });
        }, DELAY_NEXT_SCREEN_MS);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={PRIMARY_COLOR} animating={true} />
            <Text style={styles.loadingText}>{loadingText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: BACKGROUND_COLOR,
        ...SCREEN_PADDING,
    },
    loadingText: {
        marginTop: 25,
        ...BOLD_TEXT,
    },
});
