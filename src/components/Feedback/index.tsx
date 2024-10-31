import { Text, View } from "react-native";
import { styles } from "./styles";
import { Itask } from "../../types/types";
import { useState } from "react";

type FeedBackProps = {
  list: Itask[];
  success: number;
};

export default function FeedBack({ list, success }: FeedBackProps) {
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
            <Text style={styles.number}>{success}</Text>
          </View>
        </View>
      </View>
      <View style={styles.line}></View>
    </>
  );
}
