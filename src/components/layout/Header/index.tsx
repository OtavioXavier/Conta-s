import { Pressable, StyleSheet, Text, View } from "react-native";
import Logo from "@/components/layout/Logo";
import { Plus } from "lucide-react-native";
import { theme } from '@/theme';
import { styles } from './styles';

interface Props {
	title: string;
	onPressPlus?: () => void;
}

export default function Header({ title, onPressPlus }: Props) {
	return (
		<View style={styles.container}>
			<Logo />
			<Text style={styles.title}>{title}</Text>
			<Pressable onPress={onPressPlus}>
				<Plus color={theme.colors.white}/>
			</Pressable>
		</View>
	);
}
