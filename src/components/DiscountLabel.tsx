import { View } from "react-native";

export default function DiscountLabel() {
    return (
        <View
            style={{
                position: "absolute",
                transform: [{ rotate: "-17deg" }, { translateX: -6 }, { translateY: 8 }],
                width: 45,
                height: 1,
                borderBottomColor: "rgba(255, 0, 0, 0.5)",
                borderBottomWidth: 2,
            }}
        />
    );
}
