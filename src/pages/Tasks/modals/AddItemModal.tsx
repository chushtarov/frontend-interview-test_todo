/* VENDOR */
import { useState } from "react";
import { useDispatch } from "store/hooks";

/* APPLICATION */
import { Modal } from "components/Modal/Modal";
import { ModalHeader } from "components/Modal/ModalHeader";
import { Dropdown } from "components/Dropdown/Dropdown";
import { Textarea } from "components/Textarea/Textarea";
import { ModalFooter } from "components/Modal/ModalFooter";
import { tasksAdded } from "features/tasks/slice";

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TasksAddItemModal: React.FC<Props> = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [selected, setSelected] = useState("");
  const [description, setDescription] = useState("");

  function clearState() {
    setName("");
    setDescription("");
    setSelected("");
  }

  const handleOnSubmit = () => {
    if (!name) return;

    dispatch(
      tasksAdded({
        name,
        description,
        category: selected,
      })
    );

    clearState();
    setActive(false);
  };

  return (
    <Modal active={active} setActive={setActive} clearState={clearState}>
      <ModalHeader clearState={clearState} setActive={setActive} title={"Создание задачи"} />
      <Dropdown name={name} setName={setName} selected={selected} setSelected={setSelected} />
      <Textarea description={description} setDescription={setDescription} />
      <ModalFooter
        setActive={setActive}
        clearState={clearState}
        submitBtnText="Создать"
        size="large"
        onSubmit={handleOnSubmit}
      />
    </Modal>
  );
};
