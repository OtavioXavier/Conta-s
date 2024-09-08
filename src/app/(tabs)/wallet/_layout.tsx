import AddCard from "@/components/AddCard";
import Header from "@/components/layout/Header";
import type BottomSheet  from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WalletLayout() {
	const bottomSheetRef = useRef<BottomSheet>(null);

	const onPressPlus = () => {
		handleOpenAddCard()
	};

	const handleOpenAddCard = () => bottomSheetRef.current?.expand();
	const handleCloseAddCard = () => bottomSheetRef.current?.snapToIndex(0);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header title="Carteira" onPressPlus={onPressPlus} />
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="index" />
			</Stack>
			<AddCard ref={bottomSheetRef} onClose={handleCloseAddCard}/>
		</SafeAreaView>
	);
}
