import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { BACKGROUND_COLOR, FONT_FAMILY, PRIMARY_COLOR, SCREEN_PADDING } from "../../constants";
import ScreenTitle from "../../components/ScreenTitle";
import data from "./data.json";
import BranchCard from "./BranchCard";
import HorizontalRule from "../../components/HorizontalRule";

type Props = NativeStackScreenProps<RootStackParamList, "Branch">;
export default function BranchScreen({ navigation }: Props) {
    const branches = data.branches;

    return (
        <View style={styles.container}>
            <ScreenTitle>Where are you?</ScreenTitle>

            <View style={styles.branchList}>
                <HorizontalRule />
                {branches.map(({ branch, address, image }) => (
                    <>
                        <BranchCard
                            branch={branch}
                            address={address}
                            image={image}
                            onPress={() => navigation.navigate("Shop", { branch })}
                        />
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

    branchList: {
        marginTop: 25,
    },
});
