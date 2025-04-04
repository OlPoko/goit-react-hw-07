import { useSelector, useDispatch } from "react-redux";
import { setFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const filterValue = useSelector(selectNameFilter);
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
