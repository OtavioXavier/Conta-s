import { Stack, usePathname } from "expo-router";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
	const [loaded, error] = useFonts({
		"Poppins": require("@/src/assets/fonts/Poppins-Regular.ttf"),
		"Poppins-ExtraBold": require("@/src/assets/fonts/Poppins-ExtraBold.ttf"),
		"Poppins-Medium": require("@/src/assets/fonts/Poppins-Medium.ttf"),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<View style={{ flex: 1 }}>
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen name="(tabs)" />
			</Stack>
		</View>
	);
}
