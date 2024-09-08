import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: 380,
        height: 60,
        paddingRight: 16
	},
	containerText: {
        display: 'flex',
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
	},
	text: {
		fontFamily: theme.fontFamily.regular,
		color: theme.colors.white,
        fontSize: 16
	},
	icon: {
		color: theme.colors.white,
	},
});
