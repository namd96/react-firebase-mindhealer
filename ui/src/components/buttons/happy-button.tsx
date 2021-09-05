import React from "react";
import styles from '../../../styles/Button.module.css'
interface IHappyButton {
    onClickHandler, children
}
const HappyButton = (props:IHappyButton) => {
    let {onClickHandler} = props;
    return <button onClick={onClickHandler} className={styles.happyButton + " flex-row-center "  }>
        {props.children}
    </button>
}
export default HappyButton;