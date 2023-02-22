import "react-native-url-polyfill/auto";
import { queryClient } from "./src/api/react-query/queryClient";
import { QueryClientProvider } from "react-query";
import TodoScreen from "./src/screens/TodoScreen";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoScreen />
    </QueryClientProvider>
  );
}
