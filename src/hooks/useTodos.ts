import { todosApi } from "@api/index";
import QueryKeys from "@api/react-query/QueryKeys";
import { useQuery } from "react-query";

export const useTodos = () => {
  const todosQuery = useQuery(
    QueryKeys.Todos,
    () => {
      return todosApi.getTodos().then((d) => {
        return d.data;
      });
    },
    {
      onError: (error) => {
        // handle error
      },
    }
  );

  return {
    todos: todosQuery.data ?? [],
    loading: todosQuery.isLoading,
  };
};
