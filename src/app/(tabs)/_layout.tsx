import { theme } from '@/theme';
import { Tabs } from "expo-router";
import { ArrowRightLeft, ChartPie, Wallet } from "lucide-react-native";

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: theme.colors.black[100],
					borderTopColor: theme.colors.black[100]
				}
			}}
		>
			<Tabs.Screen
				name="wallet"
				options={{
					tabBarIcon: ({ focused, size }) => {
						return (
							<Wallet
								color={theme.colors.main}
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
								color={theme.colors.main}
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
								color={theme.colors.main}
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
