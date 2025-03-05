import React, { useState } from "react";
import styles from "./Option.module.css";

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
      <div className={styles.buttons}>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};
export default Options;
