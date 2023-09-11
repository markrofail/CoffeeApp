import { View } from "react-native";

interface DiscountLabelProps {
    width: number;
}

export default function DiscountLabel({ width }: DiscountLabelProps) {
    return (
        <View
            style={{
                position: "absolute",
                transform: [{ rotate: "-17deg" }, { translateX: -6 }, { translateY: 8 }],
                width,
                height: 1,
                borderBottomColor: "rgba(255, 0, 0, 0.5)",
                borderBottomWidth: 2,
            }}
        />
    );
}
