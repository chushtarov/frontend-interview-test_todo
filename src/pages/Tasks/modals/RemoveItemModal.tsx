/* VENDOR */
import { useDispatch } from "store/hooks";

/* APPLICATION */
import { Modal } from "components/Modal/Modal";
import { ModalHeader } from "components/Modal/ModalHeader";
import { Text } from "components/Text/Text";
import { ModalFooter } from "components/Modal/ModalFooter";
import { TaskItem } from "features/tasks/types";
import { tasksRemoved } from "features/tasks/slice";

interface Props {
  item: TaskItem;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TasksRemoveItemModal: React.FC<Props> = ({
  item,
  active,
  setActive,
}) => {
  const dispatch = useDispatch();

  return (
    <Modal item={item} active={active} setActive={setActive}>
      <ModalHeader setActive={setActive} title={"Удаление задачи"} />
      <Text text={`Вы уверены, что хотите удалить задачу "${item.name}"?`} />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Да"
        onSubmit={() => dispatch(tasksRemoved(item.id))}
      />
    </Modal>
  );
};
