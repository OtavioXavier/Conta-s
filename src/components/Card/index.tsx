import { Pressable, Text, View } from 'react-native';
import type { CardProps } from './card';
import type { PressableProps } from 'react-native';
import { styles } from './styles';
import { Image } from 'expo-image';

export default function Card({ selected, card, ...rest }: PressableProps & CardProps) {
  const { color, id, name, validate, flag, lastNumbers } = card;
  return (
    <Pressable {...rest}>
      <View style={[styles.card, { backgroundColor: color }]}>
        <View style={styles.header}>
          <Image
            style={styles.flag}
            source={require("@/src/assets/images/MasterCard.svg")}
          />
          <Text style={styles.lastNumbers}>. . . . {lastNumbers}</Text>
        </View>
        <View style={styles.containerLogo}>
          <Image
            style={styles.logo}
            source={require("@/src/assets/images/Logo.svg")}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.validate}>{validate}</Text>
        </View>
      </View>
    </Pressable>
  )
}