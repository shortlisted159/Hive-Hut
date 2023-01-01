import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import SearchBar from '../SearchBar/SearchBar'
const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <SearchBar/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft