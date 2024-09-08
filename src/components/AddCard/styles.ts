import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	conteiner: {
		backgroundColor: theme.colors.black[75],
	},
	content: {},
	header: {
		borderBottomWidth: .5,
		borderColor: theme.colors.white,
		flexDirection: "row",
		alignItems: "center",
		padding: 16,
		justifyContent: 'space-between',
	},
	title: {
		color: theme.colors.white,
		fontSize: 16,
		fontFamily: theme.fontFamily.medium,
	},
	externalCircle: {
		backgroundColor: theme.colors.blue[50],
		borderRadius: 100,
		width: 35,
		height: 35,
		justifyContent: "center",
		alignItems: "center",
	},
	internCircle: {
		backgroundColor: theme.colors.blue[100],
		borderRadius: 100,
		width: 25,
		height: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	cardsHeader: {
		alignItems: 'center',
		flexDirection: 'row'
	}
});
