import React, { FC } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PRIMARY_COLOR } from "../../constants";
import BasketScreenSection from "./BasketScreenSection";
import { MaterialIcons, MaterialCommunityIcons, AntDesign, Feather } from "@expo/vector-icons";
import CompleteOrderButton from "./CompleteOrderButton";

const BasketScreen: FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.screenTitleContainer}>
                <AntDesign name="left" size={24} color="black" />
                <Text style={styles.screenTitle}>Take Away Order</Text>
            </View>

            <ScrollView>
                <BasketScreenSection
                    icon={<MaterialCommunityIcons name="calendar-text" size={26} color={PRIMARY_COLOR} />}
                    title="Leave a comment"
                    subtitle="Please let us know your requirements"
                    button="Add"
                />

                <BasketScreenSection
                    icon={<MaterialCommunityIcons name="brightness-percent" size={24} color={PRIMARY_COLOR} />}
                    title="Choose personal offer"
                    subtitle="Personal Offer"
                    button="Choose"
                />

                <BasketScreenSection
                    icon={<MaterialIcons name="credit-card" size={24} color={PRIMARY_COLOR} />}
                    title="Select payment method"
                    subtitle="Payment method"
                    button="Change"
                />

                <BasketScreenSection
                    icon={<Feather name="shopping-bag" size={24} color={PRIMARY_COLOR} />}
                    title="Cart items"
                    subtitle="Products added to the cart"
                    button=""
                >
                    <table>
                        <tr>
                            <td>
                                <Text>1x</Text>
                            </td>
                            <td>
                                <Text>Benugo Flat White 8oz</Text>
                            </td>
                            <td>
                                <Text>£2.35</Text>
                            </td>
                            <td>
                                <Text>£0.00</Text>
                            </td>
                        </tr>
                        <tr>
                            <td />
                            <td>
                                <Text>Subtotal </Text>
                            </td>
                            <td />
                            <td>
                                <Text>£0.00</Text>
                            </td>
                        </tr>
                        <tr>
                            <td />
                            <td>
                                <Text>Total</Text>
                            </td>
                            <td>
                                <Text>£2.35</Text>
                            </td>
                            <td>
                                <Text>£0.00</Text>
                            </td>
                        </tr>
                    </table>
                </BasketScreenSection>
            </ScrollView>
            <CompleteOrderButton onPress={() => navigation.navigate("Loading")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
        paddingLeft: 8,
    },

    screenTitleContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        maxHeight: 100,
    },
    screenTitle: {
        paddingLeft: 16,
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default BasketScreen;
