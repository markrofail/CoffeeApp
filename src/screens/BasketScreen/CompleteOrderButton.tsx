import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { PRIMARY_COLOR } from "../../constants";

interface CompleteOrderButtonProps {
    onPress?: () => void;
}

const CompleteOrderButton: FC<CompleteOrderButtonProps> = ({ onPress }) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.completeOrder} onPress={onPress}>
                Complete Order £0.00
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        shadowColor: "rgba(11, 111, 111, .1)",
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    completeOrder: {
        padding: 20,
        borderRadius: 4,
        fontSize: 16,
        textAlign: "center",
        backgroundColor: PRIMARY_COLOR,
        color: "white",
    },
});

export default CompleteOrderButton;
