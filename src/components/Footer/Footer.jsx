import React from 'react';
import styles from './Footer.module.css';

export const Footer=()=>{
    return(
       <footer className={styles.footer}>
           <div className={styles.container}>
               <p className={styles.footertext}>CopyRight 2020 Covid-19-Tracker Created By <a className={styles.a} href="http://facebook.com/shahidpasruri1">ShahidPasruri</a></p>
               {/* <p>Created By <a href="http://facebook.com/shahidpasruri1">ShahidPasruri</a></p> */}
           </div>
       </footer>
    )
}

export default Footer;