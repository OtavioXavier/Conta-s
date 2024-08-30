import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import { useEffect, useRef, useState } from "react";
import QueueButton from "./QueueButton";
import Card from "./Card";

const data: Card[] = [
	{
		id: 0,
		name: "Otavio X S M Santos",
		validate: "06/2028",
		lastNumbers: "4589",
		flag: "@/src/assets/images/MasterCard.svg",
		color: "#1C2128",
	},
	{
		id: 1,
		name: "Jane Doe",
		validate: "12/2025",
		lastNumbers: "1234",
		flag: "@/src/assets/images/MasterCard.svg",
		color: "#2C3E50",
	},
	{
		id: 2,
		name: "John Smith",
		validate: "11/2024",
		lastNumbers: "9876",
		flag: "@/src/assets/images/MasterCard.svg",
		color: "#34495E",
	},
];

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.7;
const SPACING = 28;

export default function CardQueue() {
	const [currentCard, setCurrentCard] = useState<number>(0);
	const flatListRef = useRef<FlatList<Card> | null>(null);

	useEffect(() => {
		if (flatListRef.current) {
			flatListRef.current.scrollToIndex({
				index: currentCard,
				animated: true,
				viewOffset: (width - CARD_WIDTH) / 2,
			});
		}
	}, [currentCard]);

	const skipTo = (index: number) => {
		setCurrentCard(index);
	};

	const renderItem = ({ item, index }: { item: Card; index: number }) => (
		<View style={[styles.cardContainer, { backgroundColor: item.color }]}>
			<Card card={item} onPress={() => skipTo(index)} />
		</View>
	);

	const renderSeparator = () => <View style={styles.separator} />;

	return (
		<View style={styles.container}>
			<FlatList
				ref={flatListRef}
				keyExtractor={(item) => item.id.toString()}
				data={data}
				renderItem={renderItem}
				horizontal
				showsHorizontalScrollIndicator={false}
				snapToInterval={CARD_WIDTH + SPACING}
				decelerationRate="fast"
				contentContainerStyle={styles.flatListContentContainer}
				ItemSeparatorComponent={renderSeparator}
			/>
			<View style={styles.buttonsContainer}>
				{data.map((item, index) => (
					<QueueButton
						key={item.id}
						currentCard={currentCard}
						index={index}
						onPress={() => skipTo(index)}
					/>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 40,
		alignItems: "center",
	},
	cardContainer: {
		width: CARD_WIDTH,
		height: 200,
		justifyContent: "center",
		alignItems: "center",
	},
	flatListContentContainer: {
		paddingHorizontal: 48,
	},
	separator: {
		width: 48,
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 20,
	},
});
