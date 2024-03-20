/* VENDOR */
import { useState } from "react";
import { useSelector } from "../../store/hooks";

/* APPLICATION */
import edit from "../icons/edit.svg";
import remove from "../icons/remove.svg";
import { selectAllCategories } from "../../features/categories/selectors";
import { TaskItem } from "features/tasks/types";
import { CategoriesEditItemModal } from "pages/Categories/modals/EditItemModal";
import { CategoriesRemoveItemModal } from "pages/Categories/modals/RemoveItemModal";
import { TasksEditItemModal } from "pages/Tasks/modals/EditItemModal";
import { TasksRemoveItemModal } from "pages/Tasks/modals/RemoveItemModal";

interface ListItemProps {
  item: TaskItem;
  type: "categories" | "tasks";
}

export const ListItem: React.FC<ListItemProps> = ({ item, type }) => {
  const categories = useSelector(selectAllCategories);
  const [editModalActive, setEditModalActive] = useState(false);
  const [removeModalActive, setRemoveModalActive] = useState(false);
  return (
    <>
      <li className="list-item">
        <div className="list-item-col1">
          <div className="list-item-col1-row1">
            <h3 className="list-item-col1-row1__title">{item.name}</h3>
            {item.category && (
              <span className="list-item-col1-row1__category">
                {categories.find((category) => category.id === item.category)?.name}
              </span>
            )}
          </div>
          <div className="list-item-col1-row2">{item.description}</div>
        </div>
        <div className="list-item-col2">
          <button
            className="list-item-col2__btn"
            onClick={() => {
              setEditModalActive(true);
            }}
          >
            <img src={edit} alt="edit" />
          </button>
          <button
            className="list-item-col2__btn"
            onClick={() => {
              setRemoveModalActive(true);
            }}
          >
            <img src={remove} alt="remove" />
          </button>
        </div>
        {type === "categories" && (
          <>
            <CategoriesEditItemModal item={item} setActive={setEditModalActive} active={editModalActive} />
            <CategoriesRemoveItemModal item={item} setActive={setRemoveModalActive} active={removeModalActive} />
          </>
        )}
        {type === "tasks" && (
          <>
            <TasksEditItemModal item={item} active={editModalActive} setActive={setEditModalActive} />
            <TasksRemoveItemModal item={item} active={removeModalActive} setActive={setRemoveModalActive} />
          </>
        )}
      </li>
    </>
  );
};
