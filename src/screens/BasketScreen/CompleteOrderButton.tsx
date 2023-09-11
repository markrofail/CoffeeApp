import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FONT_FAMILY, PRIMARY_COLOR } from "../../constants";

interface CompleteOrderButtonProps {
    onPress?: () => void;
}

const CompleteOrderButton: FC<CompleteOrderButtonProps> = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.voucherText}>Remove Voucher</Text>
            <View style={styles.shadowLine} />
            <TouchableOpacity style={styles.completeOrder} onPress={onPress}>
                <Text style={styles.buttonText}>Complete Order £0.00</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    voucherText: {
        textAlign: "center",
        marginBottom: 15,
    },

    shadowLine: {
        marginBottom: 10,
        backgroundColor: "#d9d9d9",
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: {
            height: 0,
            width: 2,
        },
        height: StyleSheet.hairlineWidth,
        width: "200%",
    },

    completeOrder: {
        paddingTop: 16,
        paddingBottom: 16,
        padding: 20,
        borderRadius: 4,
        fontSize: 16,
        backgroundColor: PRIMARY_COLOR,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: FONT_FAMILY,
        color: "white",
    },
});

export default CompleteOrderButton;
