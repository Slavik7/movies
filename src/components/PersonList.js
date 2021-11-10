import axios from "axios";
import React, { useEffect, useState } from "react";
import { searchPersonURL, posterURL } from "../api";
import styles from "../styles/PersonList.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAltSlash } from "@fortawesome/free-solid-svg-icons";
const PersonList = ({ searchText, pageNum, setPageNum }) => {
  const [personArr, setPersonArr] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const getPerson = async () => {
      const p = await axios.get(searchPersonURL(pageNum, searchText));
      setPersonArr([...p.data.results]);
      setTotalPages(p.data.total_pages);
    };
    getPerson();
  }, [searchText, pageNum]);
  return (
    <div>
      <div className={styles["person-list-container"]}>
        {personArr.map((person) => {
          return (
            <Link to={`/person/${person.id}`} key={person.id}>
              <div className={styles["person-card"]}>
                <h3 className={styles["person-name"]}>{person.name}</h3>
                {person.profile_path ? (
                  <img
                    className={styles["profile-pic"]}
                    src={posterURL(person.profile_path)}
                    alt={person.name}
                  />
                ) : (
                  <div className={styles["no-image"]}>
                    <FontAwesomeIcon icon={faUserAltSlash} />
                    <p>No Image</p>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
      {personArr && totalPages > 1 && (
        <div className={styles["page-control"]}>
          {personArr && pageNum > 1 && (
            <button
              className={styles["btn-page"]}
              onClick={() => setPageNum((page) => page - 1)}
            >
              {`< Previous Page`}
            </button>
          )}
          {personArr && pageNum < totalPages && (
            <button
              className={styles["btn-page"]}
              onClick={() => setPageNum((page) => page + 1)}
            >
              {`Next Page >`}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PersonList;
