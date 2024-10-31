import { Text, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";
import { styles } from "./styles";
import EvilIcons from "@expo/vector-icons/EvilIcons";

type CardProps = {
  task: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  onRemove: (value: any) => void;
};

export default function Card({
  task,
  onRemove,
  value,
  onValueChange
}: CardProps) {
  return (
    <>
      <TouchableOpacity
        onPress={() => onValueChange(value)}
        style={styles.container}
      >
        <Checkbox
          style={styles.checkbox}
          value={value}
          onValueChange={onValueChange}
          color={"#5E60CE"}
        />

        <View>
          <Text style={styles.text}>{task}</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={onRemove}>
          <EvilIcons name="trash" size={30} color="#808080" />
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
}
