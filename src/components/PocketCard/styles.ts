import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	card: {
		borderRadius: 8,
		width: 50,
		height: 36,
        paddingRight: 4,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
	},
	numbers: { 
        fontFamily: theme.fontFamily.medium, 
        fontSize: 12,
        color: theme.colors.white
    },
});
