import { Image, ImageRequireSource, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BOLD_TEXT, LIGHT_TEXT } from "../../constants";

interface BranchCardProps {
    name: string;
    location: string;
    address: string;
    imageSrc: ImageRequireSource;
    onPress: () => void;
}
export default function BranchCard({ name, location, address, imageSrc, onPress }: BranchCardProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={imageSrc} />
                <View style={styles.textContainer}>
                    <Text style={styles.branchText}>
                        {location} {name}
                    </Text>
                    <Text style={styles.addressText}>{address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        maxHeight: 100,
        paddingTop: 28,
        paddingBottom: 28,
        width: "100%",
    },

    image: {
        width: 64,
        height: 64,
        borderRadius: 8,
    },

    textContainer: {
        marginLeft: 10,
    },

    branchText: {
        ...BOLD_TEXT,
        fontSize: 18,
    },

    addressText: {
        ...LIGHT_TEXT,
    },
});
