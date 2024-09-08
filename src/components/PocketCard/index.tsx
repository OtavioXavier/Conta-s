import { Text, View } from "react-native";
import type { PocketCardProps } from "./PocketCard";
import { styles } from "./styles";

export default function PocketCard({
	color,
	lastNumbers,
}: PocketCardProps) {
	return <View style={[styles.card, {backgroundColor: color}]}>
       <Text style={styles.numbers}>{lastNumbers}</Text>
    </View>;
}
