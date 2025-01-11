import { useCities } from "../contexts/citiesContext";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCallback } from "react";

const formatDate = (date) => {
  const dateObj = new Date(date);
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(dateObj);
};

function CityItem({ city }) {

  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  const handleClick = useCallback((e) => {
    e.preventDefault();
    deleteCity(id);
  }, [deleteCity, id]);

  const formattedDate = formatDate(date);
  const isActive = id === currentCity.id;

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${isActive ? styles['cityItem--active'] : ''}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formattedDate})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
