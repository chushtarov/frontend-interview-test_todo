/* VENDOR */
import { useState } from "react";
import { useDispatch } from "../../../store/hooks";

/* APPLICATION */
import { Modal } from "components/Modal/Modal";
import { ModalHeader } from "components/Modal/ModalHeader";
import { Input } from "components/Input/Input";
import { Textarea } from "components/Textarea/Textarea";
import { ModalFooter } from "components/Modal/ModalFooter";
import { categoriesUpdated } from "../../../features/categories/slice";
import { Category } from "features/categories/types";

export interface Props {
  item: Category;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CategoriesEditItemModal: React.FC<Props> = ({ item, active, setActive }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);

  const handleSubmit = () => {
    dispatch(categoriesUpdated({ id: item.id, name, description }));
    setActive(false);
  };

  return (
    <Modal item={item} active={active} setActive={setActive}>
      <ModalHeader setActive={setActive} title={"Редактирование категории"} />

      <Input name={name} setName={setName} size="large" />

      <Textarea description={description} setDescription={setDescription} />
      <ModalFooter setActive={setActive} submitBtnText="Сохранить" size="large" onSubmit={handleSubmit} />
    </Modal>
  );
};
