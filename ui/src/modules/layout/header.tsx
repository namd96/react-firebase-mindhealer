import React, { useContext } from 'react';
import DullButton from '../../components/buttons/dull-button';
import globalContext from '../../global-state-manager/global-context';
import styles from '../../../styles/Layout.module.css'
const Header = props => {
  const GlobalContext = useContext(globalContext)
  return <div className={styles.header + "  flex-row-center"}>
   <div className="flex-row-betn width-90">
        <div className="branding">Mind Healer</div>

       {!GlobalContext.loggedIn ?<div></div> : <span className="branding">{GlobalContext.userProfile?.name} 
        &nbsp;({GlobalContext.userProfile?.type.toUpperCase()}) </span>}

      {GlobalContext.loggedIn ? <a href="/">  <DullButton className="outline" onClickHandler={()=>{}}>Logout</DullButton> </a> : <div></div>}
  </div>
    </div>
}
export default Header;