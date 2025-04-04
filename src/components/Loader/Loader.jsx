import css from "./Loader.module.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader({ loading }) {
  return (
    <div className={css.Loading}>
      <ClipLoader color="blue" loading={loading} size={70} />
    </div>
  );
}
