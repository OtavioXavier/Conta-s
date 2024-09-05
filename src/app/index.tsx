import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/utils/style';

export default function IndexScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Index View</Text>
			<Link push href="/wallet">
				Ir para Wallet
			</Link>
			<Link push href="/transactions">
				Ir para Transactions
			</Link>
			<Link push href="/dashboard">
				Ir para Profile
			</Link>
		</SafeAreaView>
	);
}
