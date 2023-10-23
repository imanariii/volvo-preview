import React, {FC} from "react";
import styles from "./NumberButton.module.css";

interface IProps {
    number: number,
    clickNumber:  void
}
const NumberButton:FC<IProps> = ({number, clickNumber}) => {
    return (
        <button className={styles.button} onClick={() => clickNumber(number)}>
            {number}
        </button>
    )
}

export default NumberButton;