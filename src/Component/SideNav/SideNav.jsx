    /* eslint-disable react/prop-types */
import React from 'react'
import Css from "./SideNav.module.css"
import img1 from "../../assets/react.svg"

function SideNav({ onNavItemClick }) {

    const handleClick = (component) => {
        onNavItemClick(component);
      };

    return (
        <>
            <div className={Css.SidenavWrapper}>
                <div className={Css.Profile}>
                    <div className={Css.PfImg}>
                        <img src={img1} />
                    </div>
                    <div className={Css.PfName}>
                        <h3>Rohan ukey</h3>
                    </div>
                </div>
                <div className={Css.SideMenu}>
                    <h3>SideMenu</h3>
                    <ul>
                        <li onClick={() => handleClick('dashboard')}><img src={img1} /><span>Dashboard</span></li>
                        <li onClick={() => handleClick('userData')}><img src={img1} /><span>Tasks</span></li>
                        <li onClick={() => handleClick('addEmployee')}><img src={img1} /><span>Add Employee</span></li>
                        <li><img src={img1} /><span>Client</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideNav