import React from "react";

import styles from "./Destructuring.module.css";

export default function Destructuring() {
  // Destructuring helps you to pick oiut the elements in the array and assign them to your own variables
  const person = ["naveen", 28, "developer"];

  const [name, age, developer] = person;

  console.log(name);

  // Destructuring with objects

  const personobj = {
    nameo: "Naveen Kumar Peddi",
    ageo: 28,
    jobo: "student",
  };

  const { nameo, ageo, jobo } = personobj;

  console.log(ageo);

  return <div className={styles["App"]}>Destructuring</div>;
}
