'use client';
import { ENV } from '@/constants/env';
import { Todo } from '@/types/todo.type';
import { useEffect, useState } from 'react';

const CSRPage = () => {
  const [todoList, setTodoList] = useState<Todo[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ENV.JSON_SERVER);
        if (!response.ok)
          throw new Error('TodoList를 불러오는데 실패했습니다.');

        const todoList: Todo[] = await response.json();

        setTodoList(todoList);
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>로딩 중..</div>;

  return (
    <div>
      {todoList?.map((todo) => {
        return <div key={todo.id}>{todo.content}</div>;
      })}
    </div>
  );
};

export default CSRPage;
