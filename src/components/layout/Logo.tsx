import { Image } from 'expo-image';

export default function Logo() {
  return <Image source={require("@/assets/images/Logo.svg")} style={{ width: 36, height: 36, objectFit: 'cover' }} />
}