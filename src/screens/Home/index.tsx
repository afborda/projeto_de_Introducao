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
import { Itask } from "../../types/types";
import EmptyList from "../../components/EmptyList";

export default function Home() {
  const [listTask, setListTask] = useState<Itask[]>([]);
  const [task, setTask] = useState("");
  const [tasksCompleted, setTasksCompleted] = useState(0);

  function tasksCompletedSuccessfully(listTask: Itask[]) {
    const tasksCompleted = listTask.filter((task) => task.completed === true);
    setTasksCompleted(tasksCompleted.length);
  }

  function handleAddTask() {
    if (task === "") {
      return;
    }
    const newTask = {
      id: Math.random(),
      title: task,
      completed: false
    };
    setListTask([...listTask, newTask]);
    setTask("");
  }

  function handleTaskCheck(id: number) {
    const newList = listTask.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    });
    setListTask(newList);
    tasksCompletedSuccessfully(newList);
  }

  function handleTaskRemove(item: Itask) {
    console.log(item);

    const newList = listTask.filter((task) => task.id !== item.id);
    console.log(newList);

    setListTask(newList);
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

        <FeedBack list={listTask} success={tasksCompleted} />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={listTask}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              task={item}
              onValueChange={() => handleTaskCheck(item.id)}
              onRemove={() => handleTaskRemove(item)}
            />
          )}
          ListEmptyComponent={() => <EmptyList />}
        />
      </View>
    </>
  );
}
