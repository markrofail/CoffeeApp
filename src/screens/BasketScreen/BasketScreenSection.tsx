import React, { FC, PropsWithChildren, ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { PRIMARY_COLOR } from "../../constants";

interface BasketScreenSection extends PropsWithChildren {
    icon: ReactNode;
    title: string;
    subtitle: string;
    button: string;
}
const BasketScreenSection: FC<BasketScreenSection> = ({ icon, title, subtitle, button, children }) => {
    return (
        <View style={styles.border}>
            <View style={styles.container}>
                {icon}
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <Text style={styles.button}>{button}</Text>
            </View>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    border: {
        borderBottomWidth: 1,
        borderBottomColor: PRIMARY_COLOR,
        width: 400,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 12,
        paddingBottom: 12,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        maxHeight: 100,
    },
    contentContainer: {
        paddingRight: 48,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: PRIMARY_COLOR,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "200",
        color: PRIMARY_COLOR,
    },
    button: {
        fontWeight: "bold",
    },
});

export default BasketScreenSection;
