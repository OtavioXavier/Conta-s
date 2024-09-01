import { Pressable, StyleSheet, Text, View } from "react-native";
import Logo from "@/src/components/layout/Logo";
import { Plus } from "lucide-react-native";
import { theme } from '@/src/theme';

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

const styles = StyleSheet.create({
	container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 36,
    paddingTop: 16,
    alignItems: 'center',
		marginBottom: 44
  },
	title: {
		color: theme.colors.white,
		fontFamily: theme.fontFamily.regular,
		fontWeight: "600",
		fontSize: 20,
	},
});
