import React, { useEffect, useState } from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import * as UserApi from "../../api/UserRequest.js";
import { logout } from "../../actions/AuthAction";

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false)

    const dispatch = useDispatch()
    const params = useParams()

    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})
    const { user } = useSelector((state) => state.authReducer.authData)

    const handleLogOut = ()=> {
        dispatch(logout())
      }
    
    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user);
                // console.log(profileUser)
            }
            else {

                const profileUser = await UserApi.getUser(profileUserId);
                setProfileUser(profileUser);
                console.log(profileUser)
            }
        }
        fetchProfileUser();
    }, [user])

    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Profile Info</h4>
                {user._id === profileUserId ? (<div>
                    <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
                    <ProfileModal
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                        data = {user}
                    />
                </div>) : ""}
            </div>

            <div className="Info">
            <span><b>Lives in </b></span>
            <span>{profileUser.livesin}</span>
        </div>
        <div className="Info">
            <span><b>Works at </b></span>
            <span>{profileUser.worksAt}</span>
        </div>
        <div className="Info">
            <span><b>Designation </b></span>
            <span>{profileUser.designation}</span>
        </div>
        <div className="Info">
            <span><b>Bio </b></span>
            <span>{profileUser.bio}</span>
        </div>

            <button className="button logout-button" onClick={handleLogOut}>Log Out</button>

        </div>
    )
}

export default InfoCard