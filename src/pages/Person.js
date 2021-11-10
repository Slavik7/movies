import React, { useState } from "react";
import PersonDetails from "../components/PersonDetails";
import MovieDetails from "../components/MovieDetails";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useEffect } from "react";
const Person = () => {
  const { movieDetails } = useSelector((state) => state);
  const [personId, setPersonId] = useState("");
  const person_id = useLocation().pathname.split("/")[2];
  useEffect(() => {
    setPersonId(person_id);
  }, [person_id]);

  return (
    <div>
      {movieDetails.active && <MovieDetails />}
      {personId && <PersonDetails person_id={personId} />}
    </div>
  );
};

export default Person;
