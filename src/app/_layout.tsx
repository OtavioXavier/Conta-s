import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_600SemiBold,
	Poppins_800ExtraBold
} from "@expo-google-fonts/poppins"

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {

	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_600SemiBold,
		Poppins_800ExtraBold
	})

	if(!fontsLoaded) {
		SplashScreen.hideAsync();
	}


	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<StatusBar />
			<Slot />
		</GestureHandlerRootView>
	);
}
