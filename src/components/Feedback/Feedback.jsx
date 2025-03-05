import React, { useState } from "react";
import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p className={styles.answer}>Good: {good}</p>
      <p className={styles.answer}>Neutral: {neutral}</p>
      <p className={styles.answer}>Bad: {bad}</p>
      <p className={styles.answer}>Total: {total}</p>
      <p className={styles.answer}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};
export default Feedback;
