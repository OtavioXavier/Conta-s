import Header from '@/components/layout/Header';
import CardQueue from '@/components/CardQueue';
import { SafeAreaView } from "react-native-safe-area-context";
import { CARDS } from '@/utils/Cards';
import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '@/theme';


export default function WalletScreen() {
	const [card, setCard] = useState<Card>(CARDS[0]);
	return (
		<SafeAreaView style={styles.container}>
			<Header title='Carteira' />
			<CardQueue cards={CARDS} card={card} onChange={setCard} />
			<Text style={styles.title}>Configurações</Text>
			
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.black,
		flex: 1,
	},
	title: {
		color: theme.colors.white,
		fontFamily: theme.fontFamily.bold,
		fontSize: 20
	}
})