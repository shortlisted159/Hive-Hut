import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import SearchBar from '../SearchBar/SearchBar'
import ProfileCard from '../ProfileCard/ProfileCard'
import "./ProfileSide.css"

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <SearchBar/>
        <ProfileCard location = "homepage"/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileSide