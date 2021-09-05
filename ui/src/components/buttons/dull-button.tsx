import React from "react";
import styles from '../../../styles/Button.module.css'
interface IDullButton {
    onClickHandler, children, className 
}
const DullButton = (props:IDullButton) => {
    let {onClickHandler,  className = ""} = props;
    return <button onClick={onClickHandler} className={styles.dullButton + " flex-row-center " + className }>
        {props.children}
    </button>
}
export default DullButton;