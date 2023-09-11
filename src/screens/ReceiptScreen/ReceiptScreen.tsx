import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ScreenTitle from "../../components/ScreenTitle";
import HorizontalRule from "../../components/HorizontalRule";
import { BACKGROUND_COLOR, FONT_FAMILY, PRIMARY_COLOR, SCREEN_PADDING } from "../../constants";
import DiscountLabel from "../../components/DiscountLabel";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";

type Props = NativeStackScreenProps<RootStackParamList, "Receipt">;
export default function ReceiptScreen({ navigation, route }: Props) {
    const { branch, item, formattedTimestamp } = route.params;

    return (
        <View style={styles.container}>
            <ScreenTitle>Order #903570 / Q62</ScreenTitle>

            <Text style={styles.receiptDate}>{formattedTimestamp}</Text>
            <Text style={styles.receiptTitle}>
                {branch.location} {branch.name}
            </Text>

            <View style={styles.receiptRow}>
                <Text style={styles.receiptText}>Item</Text>
                <Text style={styles.receiptText}>Amount</Text>
            </View>

            <HorizontalRule />
            <View style={{ ...styles.receiptRow, ...styles.receiptItem }}>
                <Text style={{ ...styles.receiptText, color: "black" }}>1 x {item.item}</Text>
                <View style={{ flexDirection: "row" }}>
                    <DiscountLabel width={37.5} />
                    <Text style={{ ...styles.receiptText, color: "black", fontSize: 12, marginTop: 2.5 }}>
                        £{item.price.toFixed(2)}
                    </Text>
                    <Text style={{ ...styles.receiptText, color: "black", marginLeft: 10 }}>£0.00</Text>
                </View>
            </View>

            <HorizontalRule />
            <View style={{ marginTop: 10 }} />

            <View style={styles.receiptRow}>
                <Text style={styles.receiptText}>Subtotal</Text>
                <Text style={styles.receiptText}>£0.00</Text>
            </View>

            <View style={styles.receiptRow}>
                <Text style={styles.receiptText}>TOTAL</Text>
                <Text style={styles.receiptText}>£0.00</Text>
            </View>

            <View style={styles.closeButtonContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate("Branch")}>
                    <Text style={styles.closeButtonText}>Close the Receipt</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        ...SCREEN_PADDING,
    },

    receiptDate: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "200",
        color: PRIMARY_COLOR,
        fontFamily: FONT_FAMILY,
        opacity: 0.5,
        marginTop: 25,
    },
    receiptTitle: {
        marginBottom: 25,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500",
        color: PRIMARY_COLOR,
        fontFamily: FONT_FAMILY,
    },

    receiptRow: {
        flex: 1,
        maxHeight: 25,
        marginBottom: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        color: PRIMARY_COLOR,
        fontFamily: FONT_FAMILY,
    },
    receiptItem: {
        marginTop: 7.5,
        marginBottom: 12.5,
        fontSize: 24,
        backgroundColor: "rgba(0, 0, 0, 0.04)",
    },

    receiptText: {
        fontSize: 16,
        color: PRIMARY_COLOR,
        fontFamily: FONT_FAMILY,
    },

    closeButtonContainer: {
        marginTop: 25,
        alignItems: "center",
        width: "100%",
    },
    closeButton: {
        backgroundColor: "#461e3f",
        borderRadius: 8,
        padding: 30,
        paddingTop: 7.5,
        paddingBottom: 7.5,
    },
    closeButtonText: {
        color: "white",
        fontSize: 18,
        fontFamily: FONT_FAMILY,
    },
});
