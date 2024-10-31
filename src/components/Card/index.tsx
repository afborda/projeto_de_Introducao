import { Text, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";
import { styles } from "./styles";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Itask } from "../../types/types";

type CardProps = {
  task: Itask;
  onValueChange: (value: number) => void;
  onRemove: () => void;
};

export default function Card({
  task,
  onRemove,

  onValueChange
}: CardProps) {
  return (
    <>
      <TouchableOpacity
        onPress={() => onValueChange(task.id)}
        style={styles.container}
      >
        <Checkbox
          style={styles.checkbox}
          value={task.completed}
          onValueChange={() => onValueChange(task.id)}
          color={"#5E60CE"}
        />

        <View>
          <Text style={styles.text}>{task.title}</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={onRemove}>
          <EvilIcons name="trash" size={30} color="#808080" />
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
}
