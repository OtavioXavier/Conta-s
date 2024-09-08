import CardQueue from "@/components/CardQueue";
import { SafeAreaView } from "react-native-safe-area-context";
import { CARDS } from "@/utils/Cards";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "@/theme";
import ConfigLink from "@/components/ConfigLink";
import { bottleToothbrushComb, cardCredit, coinsExchange } from "@lucide/lab";

export default function WalletScreen() {
	const [card, setCard] = useState<Card>(CARDS[0]);
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<CardQueue cards={CARDS} card={card} onChange={setCard} />
				<View style={styles.settingContainer}>
					<Text style={[styles.title, { marginBottom: 24 }]}>
						Configurações
					</Text>
					<ConfigLink
						href={"/transactions"}
						text="Editar Visualização do cartão"
						icon={bottleToothbrushComb}
					/>

					<ConfigLink
						href={"/transactions"}
						text="Adicionar novo cartão"
						icon={cardCredit}
					/>

					<ConfigLink
						href={"/transactions"}
						text="Visualizar débitos do cartão"
						icon={coinsExchange}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.black[100],
		flex: 1,
	},
	content: {
      height: '90%'
	},
	title: {
		color: theme.colors.white,
		fontFamily: theme.fontFamily.bold,
		fontSize: 20,
	},
	settingContainer: {
		flex: 1,
		paddingHorizontal: 24,
		paddingBottom: 60,
	},
});
