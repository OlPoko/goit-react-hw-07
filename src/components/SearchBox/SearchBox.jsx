import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const filterValue = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={styles.searchBox}
        type="text"
        placeholder="Search contacts..."
        value={filterValue}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBox;
