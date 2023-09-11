import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BOLD_TEXT, LIGHT_TEXT } from "../../constants";

interface BranchCardProps {
    branch: string;
    address: string;
    image: string;
    onPress: () => void;
}
export default function BranchCard({ branch, address, image, onPress }: BranchCardProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={require(`../../../assets/images/${image}`)} />
                <View style={styles.textContainer}>
                    <Text style={styles.branchText}>{branch}</Text>
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
        fontSize: 20,
    },

    addressText: {
        ...LIGHT_TEXT,
    },
});
