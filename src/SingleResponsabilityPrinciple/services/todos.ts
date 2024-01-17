import axios from 'axios';

export type TodoType = { // sacarlo a un archivo de types
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export const fetchTodos = () => {
  return axios
    .get<TodoType[]>('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.data);
};
