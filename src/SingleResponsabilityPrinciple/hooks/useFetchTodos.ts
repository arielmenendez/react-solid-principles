import { useEffect, useState } from 'react';
import { fetchTodos } from '../services/todos';
import type { TodoType } from '../services/todos';

export const useFetchTodos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]); // guardando los datos del fetch
  const [isFetching, setIsFetching] = useState(true); // si está cargando

  useEffect(() => {
    fetchTodos()
      .then((todos) => setTodos(todos))
      .finally(() => setIsFetching(false));
  }, []);

  return { todos, isFetching };
};
