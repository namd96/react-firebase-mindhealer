import React from "react";
import styles from '../../../styles/Button.module.css'
interface IHappyButton {
    onClickHandler, children
}
const HappyButton = (props:IHappyButton) => {
    let {onClickHandler} = props;
    return <div onClick={onClickHandler} className={styles.happyButton + " flex-row-center " + styles.buttonContainer }>
        {props.children}
    </div>
}
export default HappyButton;