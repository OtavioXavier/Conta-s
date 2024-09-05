import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/utils/styles';

export default function IndexScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Index View</Text>
			<Link push href="/wallet" style={styles.text}>
				Ir para Wallet
			</Link>
			<Link push href="/transactions" style={styles.text}>
				Ir para Transactions
			</Link>
			<Link push href="/dashboard" style={styles.text}>
				Ir para Profile
			</Link>
		</SafeAreaView>
	);
}
