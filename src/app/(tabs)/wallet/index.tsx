import Header from '@/src/components/layout/Header';
import CardQueue from '@/src/components/CardQueue';
import { styles } from '@/src/utils/style';
import { SafeAreaView } from "react-native-safe-area-context";
import { CARDS } from '@/src/utils/Cards';
import { useState } from 'react';


export default function WalletScreen() {
	const [card, setCard] = useState<Card>(CARDS[0]);
	return (
		<SafeAreaView style={styles.container}>
			<Header title='Carteira' />
			<CardQueue cards={CARDS} card={card} onChange={setCard}/>
		</SafeAreaView>
	);
}
