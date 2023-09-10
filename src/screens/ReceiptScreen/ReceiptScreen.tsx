type Props = NativeStackScreenProps<RootStackParamList, "Receipt">;

export default function ReceiptScreen({ navigation, route }: Props) {
    const { timestamp } = route.params;

    return (
        <>
            <Text>ReceiptScreen</Text>
        </>
    );
};

export default ReceiptScreen;
