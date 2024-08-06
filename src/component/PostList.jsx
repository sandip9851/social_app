import React from 'react'
import Post from './Post'
import { useContext } from 'react'
import { GlobalDataContext } from '../store/context' 
import Spiner from './Spiner'


function PostList() {
  const {storyData,loading} = useContext(GlobalDataContext)
  
  return (
    <div className='storyContainer'>
      {loading && <Spiner/>}
      {!loading && storyData.map((story,i)=>(
        <Post key={`item${i+1}`} story = {story}/>
      ))}
    
    </div>
  )
}

export default PostList