import React from "react";

import styles from "./User.module.css";

export default function Users(users) {
  const { name, job } = users;

  // props is a feature that allows us to pass information between components

  return (
    <div className={styles["userdesc"]}>
      <p>Name:{name}</p>
      <p>Job:{job}</p>
    </div>
  );
}
