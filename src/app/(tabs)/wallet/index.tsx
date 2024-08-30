import Header from '@/src/components/layout/Header';
import CardQueue from '@/src/components/wallet/CardQueue';
import { styles } from '@/src/utils/style';
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WalletScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Header title='Carteira'/>
			 <CardQueue />
		</SafeAreaView>
	);
}
