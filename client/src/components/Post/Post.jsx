import React, { useState } from 'react'
import './Post.css'
import { UilCommentDots } from '@iconscout/react-unicons'
import { UilShare } from '@iconscout/react-unicons'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../api/PostRequest'


const Post = ({data}) => {
  // login user
  const {user} = useSelector((state)=>state.authReducer.authData)
  
  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)

  const handleLike = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  };

  return (
    <div className="Post">
      <div className="detail">
            {/* <span><b>{user}</b></span> */}
            <div>
            <span> {data.desc}</span>
            </div>
        </div>
      {/* data.img replaced by data.image */}
        <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image:""} alt="" />


        <div className="postReact">
            <img src={liked?Heart : NotLike} alt="" style={{ cursor: "pointer" }} onClick={handleLike}/>
            <UilCommentDots/>
            <UilShare/>
        </div>

        <span style={{color : "var(--gray)", fontSize:'12px'}}>{likes} Likes</span>

    </div>
  )
}

export default Post