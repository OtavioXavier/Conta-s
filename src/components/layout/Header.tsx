import { Pressable, StyleSheet, Text, View } from "react-native";
import Logo from "@/src/components/layout/Logo";
import { Plus } from "lucide-react-native";

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
				<Plus color={"#FCFCFC"}/>
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
    alignItems: 'center'
  },
	title: {
		color: "#FCFCFC",
		fontFamily: "Poppins",
		fontWeight: "600",
		fontSize: 20,
	},
});
