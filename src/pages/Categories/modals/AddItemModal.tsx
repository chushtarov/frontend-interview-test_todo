/* VENDOR */
import { useState } from "react";
import { useDispatch } from "store/hooks";

/* APPLICATION */
import { Modal } from "components/Modal/Modal";
import { ModalHeader } from "components/Modal/ModalHeader";
import { Input } from "components/Input/Input";
import { Textarea } from "components/Textarea/Textarea";
import { ModalFooter } from "components/Modal/ModalFooter";
import { categoriesAdded } from "features/categories/slice";

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CategoriesAddItemModal: React.FC<Props> = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function clearState() {
    setName("");
    setDescription("");
  }

  const handleOnSubmit = () => {
    if (!name) return;

    dispatch(categoriesAdded({ name, description }));

    clearState();
    setActive(false);
  };

  return (
    <Modal active={active} setActive={setActive} clearState={clearState}>
      <ModalHeader clearState={clearState} setActive={setActive} title={"Создание категории"} />
      <Input name={name} setName={setName} size="large" />

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
