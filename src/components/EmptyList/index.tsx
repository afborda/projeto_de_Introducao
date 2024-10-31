import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export default function EmptyList() {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/Clipboard.png")}
        />
      </View>
      <Text style={styles.emptyBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.empty}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </>
  );
}
