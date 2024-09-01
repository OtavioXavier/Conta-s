import { FlatList } from 'react-native';
import Card from '../Card';
import { styles } from './styles';
import type { QueueProps } from './queue';
import { useEffect, useRef } from 'react';

export default function CardQueue({ cards, card, onChange }: QueueProps) {
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const index = cards.findIndex((item) => item === card);
    if (index !== -1 && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index, animated: true });
    }
  }, [card, cards]);
  
  return (
    <FlatList
      ref={flatListRef}
      data={cards}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Card card={item} selected={item === card} onPress={() => onChange(item)} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  )
}