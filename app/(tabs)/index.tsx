import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { Image } from "expo-image";

import { ThemedText } from "@/components/ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowRight } from "lucide-react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          transition={1000}
          contentFit="cover"
          style={styles.imageLogo}
          source={require("@/assets/images/logo.svg")}
        />
        <Text style={styles.titulo}>CONTA'S</Text>
        <ThemedText type="default" style={styles.subtitulo}>
          Cuidar do seu dinheiro não é tão difícil
        </ThemedText>
      </View>
      <TouchableHighlight style={styles.button}>
        <View style={styles.buttonContainer}>
          <Text style={styles.textButton}>Começar</Text>
          <View style={styles.arrowContainer}>
            <ArrowRight color={"#FCFCFC"} size={36} />
          </View>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111418",
    alignItems: "center",
    justifyContent: "center",
  },
  imageLogo: {
    width: 200,
    height: 200,
    objectFit: "cover",
  },
  titulo: {
    fontFamily: "Jomhuria",
    fontSize: 84,
    marginVertical: -20,
    textAlign: "center",
    color: "#FCFCFC",
  },
  subtitulo: {
    textAlign: "center",
    width: 190,
    fontFamily: "Poppins",
  },
  textButton: {
    color: "#111418",
    textAlign: "center",
    flex: 1,
    fontSize: 20,
    fontFamily: "Poppins",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 300,
    height: 80,
    backgroundColor: "#BAFFD8",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 45,
    position: "absolute",
    bottom: 40,
  },
  arrowContainer: {
    backgroundColor: "#111418",
    borderRadius: 100,
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
});
