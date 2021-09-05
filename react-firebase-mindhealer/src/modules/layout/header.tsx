import React, { useContext } from 'react';
import DullButton from '../../components/buttons/dull-button';
import globalContext from '../../global-state-manager/global-context';
import styles from '../../../styles/Layout.module.css'
const Header = props => {
  const GlobalContext = useContext(globalContext)
  return <div className={styles.header + "  flex-row-center"}>
   <div className="flex-row-betn width-90">
        <div className="branding">Mind Healer</div>

       {!GlobalContext.loggedIn ?<div></div> : <>{GlobalContext.userProfile?.name} 
        &nbsp;({GlobalContext.userProfile?.type.toUpperCase()}) </>}

      <a href="/">  <DullButton onClickHandler={()=>{}}>Logout</DullButton> </a>
  </div>
    </div>
}
export default Header;