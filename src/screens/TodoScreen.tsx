import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useTodos } from "@hooks/useTodos";

export default function TodoScreen() {
  const { todos, loading } = useTodos();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {todos?.map((todo) => (
            <View key={todo.id} style={styles.todoWrapper}>
              <View style={styles.textWrapper}>
                <Text>{todo.name}</Text>
                <Text>{todo.description}</Text>
              </View>
              <View style={styles.spacer} />
              <Text>{todo.isCompleted ? "✅" : "❌"}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  todoWrapper: {
    flexDirection: "row",
    backgroundColor: "#eeeeee",
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
  },
  textWrapper: {
    marginRight: 10,
  },
  spacer: {
    flex: 1,
  },
});
