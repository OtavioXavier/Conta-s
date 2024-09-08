import { Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import type { AddCardProps } from "./addCard";
import { Plus, X } from "lucide-react-native";
import { theme } from "@/theme";
import { styles } from "./styles";
import PocketCardQueue from "../PocketCardQueue";
import { CARDS } from "@/utils/Cards";

export const AddCard = forwardRef<BottomSheet, AddCardProps>(
	({ onClose }, ref) => {
		return (
			<BottomSheet
				ref={ref}
				index={0}
				snapPoints={[0.001, 550]}
				backgroundStyle={styles.conteiner}
			>
				<View style={styles.content}>
					<View style={styles.header}>
						<Text style={styles.title}>Cards</Text>
						<View style={styles.cardsHeader}>
							<View style={styles.externalCircle}>
								<View style={styles.internCircle}>
									<Plus size={16} color={theme.colors.white} strokeWidth={6} />
								</View>
							</View>
							<PocketCardQueue cards={CARDS} />
						</View>
					</View>
				</View>
			</BottomSheet>
		);
	},
);

export default AddCard;
