import { Tabs } from "expo-router";
import { ArrowRightLeft, ChartPie, Wallet } from "lucide-react-native";

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: "#111418",
					borderTopColor: '#111418'
				},
				tabBarLabelStyle: {
					display: "none",
				},
			}}
		>
			<Tabs.Screen
				name="wallet"
				options={{
					tabBarIcon: ({ focused, size }) => {
						return (
							<Wallet
								color={"#BAFFD8"}
								opacity={focused ? "100%" : "35%"}
								size={size}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name="transactions"
				options={{
					tabBarIcon: ({ focused, size }) => {
						return (
							<ArrowRightLeft
								color={"#BAFFD8"}
								opacity={focused ? "100%" : "35%"}
								size={size}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name="dashboard"
				options={{
					tabBarIcon: ({ focused, size }) => {
						return (
							<ChartPie
								color={"#BAFFD8"}
								opacity={focused ? "100%" : "35%"}
								size={size}
							/>
						);
					},
				}}
			/>
		</Tabs>
	);
}
