import React, { FC, PropsWithChildren, ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FONT_FAMILY, PRIMARY_COLOR } from "../../constants";

interface BasketScreenProps extends PropsWithChildren {
    icon: ReactNode;
    title: string;
    subtitle: string;
    button: string;
}
export default function BasketScreen({ icon, title, subtitle, button, children }: BasketScreenProps) {
    return (
        <View style={styles.border}>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.icon}>{icon}</View>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    </View>
                </View>
                <Text style={styles.button}>{button}</Text>
            </View>
            {children && <View style={styles.childrenContainer}>{children}</View>}
        </View>
    );
}

const styles = StyleSheet.create({
    border: {
        paddingTop: 20,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        maxHeight: 100,
    },

    icon: {
        width: 32,
        height: 32,
        marginRight: 16,
    },

    contentContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: PRIMARY_COLOR,
        fontFamily: FONT_FAMILY,
    },
    subtitle: {
        opacity: 0.6,
        fontSize: 12,
        fontWeight: "200",
        color: PRIMARY_COLOR,
        fontFamily: FONT_FAMILY,
    },
    button: {
        fontWeight: "bold",
    },

    childrenContainer: { marginLeft: 50, marginTop: 10 },
});
