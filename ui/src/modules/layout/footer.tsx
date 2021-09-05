import React from 'react';
import styles from '../../../styles/Layout.module.css'

const Footer = props => {
    return <><div className={styles.footer + " flex-row-center"}>
        <div className=" width-90">
          <div className="branding">Mind Healer</div>
            <div className={styles.contactUs}>Contact Us | 99XXXXXXXXXX | support@mindheist.co 
        </div>
        </div>
    </div>
    <div className="footer-filler"></div>
    </>
}
export default Footer;