import { useEffect, useState } from 'react';
import { fetchTodos } from '../services/todos';
import type { TodoType } from '../services/todos';

export const useFetchTodo = () => {
  const [todo, setTodo] = useState<TodoType[]>([]); // guardando los datos del fetch
  const [isFetching, setIsFetching] = useState(true); // si está cargando

  useEffect(() => {
    fetchTodos()
      .then((todos) => setTodo(todos))
      .finally(() => setIsFetching(false));
  }, []);

  return { todo, isFetching };
};
