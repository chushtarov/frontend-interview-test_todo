/* VENDOR */
import { useState } from "react";
import { useDispatch } from "store/hooks";

/* APPLICATION */
import { Modal } from "components/Modal/Modal";
import { ModalHeader } from "components/Modal/ModalHeader";
import { Dropdown } from "components/Dropdown/Dropdown";
import { Textarea } from "components/Textarea/Textarea";
import { ModalFooter } from "components/Modal/ModalFooter";
import { tasksClearedCategories, tasksUpdated } from "features/tasks/slice";

interface Props {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TasksEditItemModal: React.FC<Props> = ({ item, active, setActive }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(item.name);
  const [selected, setSelected] = useState(item.category || "");
  const [description, setDescription] = useState(item.description);

  const updateTasks = () => {
    dispatch(
      tasksUpdated({
        id: item.id,
        name,
        description,
        category: selected,
      })
    );
    dispatch(tasksClearedCategories());
  };

  return (
    <Modal item={item} active={active} setActive={setActive}>
      <ModalHeader setActive={setActive} title={"Редактирование задачи"} />
      <Dropdown name={name} setName={setName} selected={selected} setSelected={setSelected} />
      <Textarea description={description} setDescription={setDescription} />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Сохранить"
        size="large"
        onSubmit={() => {
          updateTasks();
          setActive(false);
        }}
      />
    </Modal>
  );
};
