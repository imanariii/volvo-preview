import React, {FC} from "react";
import styles from "./NumberButton.module.css";

interface IProps {
    number: number,

}
const NumberButton:FC<IProps> = ({number}) => {
    const handleClickButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(event.target)
    }
    return (
        <button className={styles.button} onClick={event => handleClickButton(event)}>
            {number}
        </button>
    )
}

export default NumberButton;