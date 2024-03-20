/* VENDOR */
import { useSelector } from "../../store/hooks";

/* APPLICATION */
import { ListItem } from "../../components/ListItem/ListItem";
import { selectAllTasks } from "../../features/tasks/selectors";

export const Tasks: React.FC = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <ListItem key={task.id} item={task} type={"tasks"} />
      ))}
    </ul>
  );
};

// можно попробовать вынести svg в отдельный файл в виде кода
