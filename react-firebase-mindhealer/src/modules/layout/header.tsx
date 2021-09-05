import React, { useContext } from 'react';
import globalContext from '../../global-state-manager/global-context';
const Header = props => {
  const GlobalContext = useContext(globalContext)
  return <div className="flex-row-betn width-90">
        <div>Mind Healer</div>

        {GlobalContext.userProfile?.name} 
        &nbsp;({GlobalContext.userProfile?.type.toUpperCase()})

      <a href="/login">  <button>Logout</button> </a>
    </div>
}
export default Header;