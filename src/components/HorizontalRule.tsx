import React from "react";
import { StyleSheet, View } from "react-native";
import { PRIMARY_COLOR } from "../constants";

export default function HorizontalRule() {
    return (
        <View
            style={{
                width: "100%",
                opacity: 0.4,
                borderBottomColor: PRIMARY_COLOR,
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}
        />
    );
}
