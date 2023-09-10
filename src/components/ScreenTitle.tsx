import React, { FC, ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FONT_FAMILY } from "../constants";

interface ScreenTitleProps {
    icon?: ReactNode;
    children: ReactNode;
}

export default function ScreenTitle({ icon, children }: ScreenTitleProps) {
    return (
        <View style={styles.container}>
            {icon}
            <Text style={styles.title}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        maxHeight: 50,
    },
    title: {
        paddingLeft: 16,
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: FONT_FAMILY,
    },
});
