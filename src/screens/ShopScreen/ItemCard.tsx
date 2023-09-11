import { Image, ImageRequireSource, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BOLD_TEXT, LIGHT_TEXT } from "../../constants";

interface ItemCardProps {
    item: string;
    imageSrc: ImageRequireSource;
    kcal: number;
    price: number;
    onPress: () => void;
}

export default function ItemCard({ item, imageSrc, kcal, price, onPress }: ItemCardProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.itemText}>{item}</Text>
                    <Text style={styles.infoText}>{kcal} kcal</Text>
                    <Text style={{ ...styles.infoText, marginTop: 15 }}>£{price}</Text>
                </View>
                <Image style={styles.image} source={imageSrc} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        maxHeight: 150,
        paddingTop: 28,
        paddingBottom: 28,
        width: "100%",
    },

    image: {
        width: 96,
        height: 96,
        borderRadius: 100,
    },

    textContainer: {
        marginLeft: 10,
    },

    itemText: {
        ...BOLD_TEXT,
        fontSize: 16,
    },

    infoText: {
        ...LIGHT_TEXT,
    },
});
