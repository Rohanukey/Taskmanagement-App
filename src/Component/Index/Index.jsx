import React from 'react'
import Css from "./Index.module.css"
import SideNav from '../SideNav/SideNav';
import GetDate from '../GetDate/GetDate';
import AddTask from '../AddTask/AddTask';

function index() {



  return (
    <>
      <div className={Css.ContentWrapper}>
        {/*<div className={Css.SectionWrapper}>
          <SideNav />
  </div>*/}
        <div className={Css.MainContent}>
          <div className={Css.Title}>
            <h1>Dashboard</h1>
            <h3><GetDate /></h3>
          </div>
          <AddTask />
        </div>
      </div>
    </>
  )
}

export default index;