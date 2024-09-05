import type { PressableProps } from 'react-native';
import { Pressable } from 'react-native';
import type { DotProps } from './dot';
import { styles } from './styles';

export default function CardDot({ selected, ...rest }: PressableProps & DotProps) {
  return (
    <Pressable style={[styles.dot, selected && styles.selected]} {...rest} />
  )
}