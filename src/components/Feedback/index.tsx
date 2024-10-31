import { Text, View } from "react-native";
import { styles } from "./styles";

type FeedBackProps = {
  list: string[];
};

export default function FeedBack({ list }: FeedBackProps) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerTextBlue}>
          <Text style={styles.textBlue}>Criadas</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.number}>{list.length}</Text>
          </View>
        </View>
        <View style={styles.containerTextPurple}>
          <Text style={styles.textPurple}>Concluidas</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.number}>0</Text>
          </View>
        </View>
      </View>
      <View style={styles.line}></View>
    </>
  );
}
