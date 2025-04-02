import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <div className={styles.name}>
          <FontAwesomeIcon icon={faUser} className={styles.icon} /> {name}
        </div>
        <div className={styles.number}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} /> {number}
        </div>
      </div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
