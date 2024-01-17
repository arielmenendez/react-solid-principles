import { useFetchTodos } from './hooks/useFetchTodos';

const TodoList = () => {
  const { todos, isFetching } = useFetchTodos();

  if (isFetching) return <p>... loading</p>;

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <span>{todo.id}</span>
            <span>{todo.title}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
