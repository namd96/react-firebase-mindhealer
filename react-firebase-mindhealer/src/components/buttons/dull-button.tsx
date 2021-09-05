import React from "react";
import styles from '../../../styles/Button.module.css'
interface IDullButton {
    onClickHandler, children
}
const DullButton = (props:IDullButton) => {
    let {onClickHandler} = props;
    return <button onClick={onClickHandler} className={styles.dullButton + " flex-row-center "  }>
        {props.children}
    </button>
}
export default DullButton;