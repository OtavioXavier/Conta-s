import { FlatList } from "react-native";
import type { PocketCardQueueProps } from "./pocketCardQueue";
import PocketCard from "../PocketCard";
import { styles } from "./styles";

export default function PocketCardQueue({cards}: PocketCardQueueProps)  {
    return (
        <FlatList 
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PocketCard color={item.color} lastNumbers={item.lastNumbers}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.content}
        />
    )
}