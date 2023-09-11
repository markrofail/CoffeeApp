import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MaterialIcons, MaterialCommunityIcons, AntDesign, Feather } from "@expo/vector-icons";
import { BACKGROUND_COLOR, LIGHT_TEXT, PRIMARY_COLOR, PRIMARY_TEXT, SCREEN_PADDING } from "../../constants";
import BasketScreenSection from "./BasketSection";
import CompleteOrderButton from "./CompleteOrderButton";
import ScreenTitle from "../../components/ScreenTitle";
import HorizontalRule from "../../components/HorizontalRule";
import DiscountLabel from "../../components/DiscountLabel";
import { RootStackParamList } from "../../routes";

type Props = NativeStackScreenProps<RootStackParamList, "Basket">;

export default function BasketScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <ScreenTitle icon={<AntDesign name="left" size={24} color="black" />}>Take Away Order</ScreenTitle>

            <ScrollView>
                <BasketScreenSection
                    icon={<MaterialCommunityIcons name="calendar-text" size={28} color={PRIMARY_COLOR} />}
                    title="Leave a comment"
                    subtitle="Please let us know your requirements"
                    button="Add"
                />
                <HorizontalRule />

                <BasketScreenSection
                    icon={<MaterialCommunityIcons name="brightness-percent" size={28} color={PRIMARY_COLOR} />}
                    title="Choose personal offer"
                    subtitle="Personal Offer"
                    button="Choose"
                />
                <HorizontalRule />

                <BasketScreenSection
                    icon={<MaterialIcons name="credit-card" size={28} color={PRIMARY_COLOR} />}
                    title="Select payment method"
                    subtitle="Payment method"
                    button="Change"
                />
                <HorizontalRule />

                <BasketScreenSection
                    icon={<Feather name="shopping-bag" size={28} color={PRIMARY_COLOR} />}
                    title="Cart items"
                    subtitle="Products added to the cart"
                    button=""
                >
                    <View style={styles.rowStartEnd}>
                        <View style={styles.row}>
                            <Text style={styles.accentText}>1x </Text>
                            <Text style={{ ...styles.normalText, marginLeft: 5 }}>Benugo Flat White 8oz</Text>
                        </View>
                        <View style={styles.row}>
                            <DiscountLabel />
                            <Text style={{ ...styles.accentText, marginRight: 10 }}>£2.35</Text>
                            <Text style={styles.accentText}>£0.00</Text>
                        </View>
                    </View>

                    <View style={{ ...styles.rowStartEnd, marginTop: 15 }}>
                        <View style={styles.row}>
                            <Text style={{ ...styles.accentText, marginLeft: 25 }}>Subtotal</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.accentText}>£0.00</Text>
                        </View>
                    </View>

                    <View style={{ ...styles.rowStartEnd, marginTop: 10 }}>
                        <View style={styles.row}>
                            <Text style={{ ...styles.accentText, marginLeft: 25 }}>Total</Text>
                        </View>
                        <View style={styles.row}>
                            <DiscountLabel />
                            <Text style={{ ...styles.accentText, marginRight: 10 }}>£2.35</Text>
                            <Text style={styles.accentText}>£0.00</Text>
                        </View>
                    </View>
                </BasketScreenSection>
            </ScrollView>
            <CompleteOrderButton onPress={() => navigation.navigate("Loading")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        ...SCREEN_PADDING,
    },

    normalText: PRIMARY_TEXT,
    accentText: LIGHT_TEXT,

    row: {
        flexDirection: "row",
    },

    rowStartEnd: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
