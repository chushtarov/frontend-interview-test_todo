/* VENDOR */
import { useSelector } from "../../store/hooks";

/* APPLICATION */
import { ListItem } from "../../components/ListItem/ListItem";
import { selectAllCategories } from "../../features/categories/selectors";

export const Categories = () => {
  const categories = useSelector(selectAllCategories);

  return (
    <>
      <ul>
        {categories.map((category) => (
          <ListItem key={category.id} item={category} type={"categories"} />
        ))}
      </ul>
    </>
  );
};
