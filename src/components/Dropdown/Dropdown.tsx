import { Input } from "components/Input/Input";
import { useSelector } from "store/hooks";
import { useState } from "react";
import { selectAllCategories } from "features/categories/selectors";
import down from "../icons/down.svg";
import "./Dropdown.css";

interface Props {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const Dropdown: React.FC<Props> = ({ name, setName, selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false),
    options = useSelector(selectAllCategories);

  return (
    <div className="modal__content_row">
      <Input name={name} setName={setName} />
      <div className="dropdown" onClick={() => setIsActive(!isActive)}>
        <span className="dropdown-label">Категория</span>
        <div className={selected ? "dropdown-btn" : "dropdown-btn placeholder"}>
          {options.find((option) => option.id === selected)?.name || "Выберите категорию"}
          <img src={down} alt="open dropdown" />
        </div>
        {isActive && (
          <div className="dropdown-content">
            <div
              className="dropdown-item"
              onClick={() => {
                setSelected("");
                setIsActive(false);
              }}
            >
              Без категории
            </div>
            {options.map((option) => (
              <div
                className="dropdown-item"
                onClick={() => {
                  setSelected(option.id);
                  setIsActive(false);
                }}
                key={option.id}
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
