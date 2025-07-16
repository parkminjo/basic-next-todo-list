import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { useDeleteTodoMutation } from "@/hooks/use-todo-mutation";
import { ROUTER_PATH } from "@/constants/router-path";
import { Trash2 } from "lucide-react";
import type { Todo } from "@/types/todo.type";

interface Props {
  id: Todo["id"];
}

const TodoDeleteButton = ({ id }: Props) => {
  const router = useRouter();
  const { mutateAsync: deleteTodoMutate } = useDeleteTodoMutation();

  const handleDeleteClick = async () => {
    await deleteTodoMutate(id);
    router.push(ROUTER_PATH.HOME);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>정말로 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            삭제하면 다시 되돌릴 수 없습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteClick}>
            삭제
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TodoDeleteButton;
