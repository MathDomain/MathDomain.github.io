import Profile from './e_profile/profile.jsx'
import Progress from './e_progress/Progress.jsx'
import Streak from './e_streak/streak.jsx'

function ProfilePage(props){

    return(
            <div id="dashboard"className="flex items-center flex-col h-full w-full p-4">  
                <Profile dot={props.dot}/>
                <Progress/>
                <Streak/>
            </div>

)
}
export default ProfilePage;