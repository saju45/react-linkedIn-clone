/* eslint-disable react/prop-types */
import PostStatus from "./common/PostUpdate"

const HomeComponent = ({currentUser}) => {
  return (
    <div className="home-component">
      <PostStatus currentUser={currentUser}/>
    </div>
  )
}

export default HomeComponent