import React from "react";
import styles from '../../../styles/Button.module.css'
interface IDullButton {
    onClickHandler, children
}
const DullButton = (props:IDullButton) => {
    let {onClickHandler} = props;
    return <div onClick={onClickHandler} className={styles.dullButton + " flex-row-center " + styles.buttonContainer }>
        {props.children}
    </div>
}
export default DullButton;