import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
	card: Card;
	onPress: () => void;
}

export default function Card({ card, onPress }: Props) {
	const { id, name, validate, lastNumbers, flag, color } = card;

	return (
		<Pressable onPress={onPress}>
			<View style={[styles.container, { backgroundColor: color }]}>
				<View style={styles.containerHeader}>
					<Image
						style={styles.flag}
						source={require("@/src/assets/images/MasterCard.svg")}
					/>
					<Text style={styles.lastNumbers}>. . . . {lastNumbers}</Text>
				</View>
				<View style={styles.containerLogo}>
					<Image
						style={styles.logo}
						source={require("@/src/assets/images/Logo.svg")}
					/>
				</View>
				<View style={styles.footer}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.validate}>{validate}</Text>
				</View>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 200,
		borderRadius: 16,
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 18,
		},
		shadowOpacity: 0.25,
		shadowRadius: 20.0,
		elevation: 24,
	},
	flag: {
		width: 44,
		height: 44,
		objectFit: "cover",
	},
	lastNumbers: {
		fontFamily: "Poppins-ExtraBold",
		fontSize: 12,
		color: "#FCFCFC",
		paddingRight: 16,
	},
	containerHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	logo: {
		width: 54,
		height: 54,
	},
	containerLogo: {
		width: "100%",
		alignItems: "center",
		marginTop: 20,
	},
	name: {
		color: "#FCFCFc",
		fontFamily: "Poppins",
		fontSize: 12,
	},
	validate: {
		color: "#FCFCFc",
		fontFamily: "Poppins-Medium",
		fontSize: 12,
	},
	footer: {
		marginTop: 28,
		marginLeft: 12,
	},
});
