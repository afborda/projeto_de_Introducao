import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Header from "../../components/Header";
import FeedBack from "../../components/Feedback";
import { styles } from "./styles";
import Card from "../../components/Card";
import { useState } from "react";

export default function Home() {
  const [isChecked, setChecked] = useState<boolean>(false);
  const [listTask, setListTask] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  function handleTaskRemove(item: any) {
    console.log("Removendo item", item);
    const newList = listTask.filter((task) => task !== item);
    setListTask(newList);
  }

  function handleTaskCheck(item: any) {
    setChecked(!isChecked);
    console.log(item);
  }

  function handleAddTask() {
    if (task === "") {
      return;
    }

    setListTask([...listTask, task]);
    setTask("");
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            placeholder="Adicionar uma nova tarefa"
            placeholderTextColor="#808080"
            style={styles.input}
            onChangeText={(text) => setTask(text)}
            value={task}
          />
          <TouchableOpacity style={styles.buttom} onPress={handleAddTask}>
            <AntDesign name="pluscircleo" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <FeedBack list={listTask} />
        {/* Inicio da lista  */}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={listTask}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Card
              task={item}
              value={isChecked}
              onValueChange={() => handleTaskCheck(item)}
              onRemove={() => handleTaskRemove(item)}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhum p icipante cadastrado</Text>
          )}
        />
      </View>
    </>
  );
}
