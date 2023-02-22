import { TodosApi } from "@generated-api/api";
import axiosInstance from "./axios";

const basePath = "https://al-todo-api.herokuapp.com";

export const todosApi = new TodosApi(undefined, basePath, axiosInstance);
