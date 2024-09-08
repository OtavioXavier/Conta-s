import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import type { ConfigLinkProps } from "./configLink";
import { ChevronRight, Icon } from "lucide-react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ConfigLink({ href, text, icon }: ConfigLinkProps) {
	return (
		<Link href={href} asChild>
			<TouchableOpacity style={styles.container}>
				<View style={styles.containerText}>
					<Icon iconNode={icon} size={28} style={styles.icon} />
					<Text style={styles.text}>{text}</Text>
				</View>
				<ChevronRight size={28} style={styles.icon} />
			</TouchableOpacity>
		</Link>
	);
}
