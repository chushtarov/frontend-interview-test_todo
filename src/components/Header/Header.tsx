/* VENDOR */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

/* APPLICATION */
import "./Header.css";
import { CategoriesAddItemModal } from "pages/Categories/modals/AddItemModal";
import { TasksAddItemModal } from "pages/Tasks/modals/AddItemModal";

export const Header = () => {
  const { pathname } = useLocation();
  const [createModalActive, setCreateModalActive] = useState(false);

  const isCategories = pathname.includes("categories");

  return (
    <header className="header">
      <h1 className="header-title">ToDo List</h1>
      <nav className="header-nav">
        <ul className="header-list">
          <li className={!isCategories ? "header-list-item header-list-item-active" : "header-list-item"}>
            <Link to="/">Задачи</Link>
          </li>
          <li className={isCategories ? "header-list-item header-list-item-active" : "header-list-item"}>
            <Link to="categories">Категории</Link>
          </li>
        </ul>
        <button
          className="header-button"
          onClick={() => {
            setCreateModalActive(true);
          }}
        >
          {isCategories ? "Добавить категорию" : "Добавить задачу"}
        </button>
      </nav>
      {isCategories ? (
        <CategoriesAddItemModal active={createModalActive} setActive={setCreateModalActive} />
      ) : (
        <TasksAddItemModal active={createModalActive} setActive={setCreateModalActive} />
      )}
    </header>
  );
};
