import React from 'react'
import './RightSide.css'
import Home from "../../img/home.png";
import { Link } from 'react-router-dom'
import { UilBell } from '@iconscout/react-unicons'
import { UilCommentDots } from '@iconscout/react-unicons'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import { useState } from 'react'
import ShareModal from '../ShareModal/ShareModal'


const RightSide = () => {
  const[modalOpened, setModalOpened]=useState(false)
  return (
    <div className="RightSide">
        <div className="navIcons">
          <Link to = '../home'>
            <img src={Home} alt="" />
          </Link>
            <UilSetting/>
            <UilBell/>
            <UilCommentDots/>
        </div>

        <TrendCard/>


        <button className="button r-button" onClick={()=>setModalOpened(true)}>
          Share
        </button>
        <ShareModal
                    modalOpened={modalOpened}
                    setModalOpened={setModalOpened}/>

    </div>
  )
}

export default RightSide