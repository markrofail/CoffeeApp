import { StyleSheet, View } from "react-native";
import { BACKGROUND_COLOR, SCREEN_PADDING } from "../../constants";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import ScreenTitle from "../../components/ScreenTitle";
import data from "./data.json";
import ItemCard from "./ItemCard";
import HorizontalRule from "../../components/HorizontalRule";

type Props = NativeStackScreenProps<RootStackParamList, "Shop">;
export default function ShopScreen({ navigation, route }: Props) {
    const { branch } = route.params;
    const items = data.items;

    return (
        <View style={styles.container}>
            <ScreenTitle>{branch}</ScreenTitle>

            <View style={styles.itemsContainer}>
                {items.map((item) => (
                    <>
                        <ItemCard {...item} onPress={() => navigation.navigate("Basket", { branch, item })} />
                        <HorizontalRule />
                    </>
                ))}
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

    itemsContainer: {
        marginTop: 25,
    },
});
