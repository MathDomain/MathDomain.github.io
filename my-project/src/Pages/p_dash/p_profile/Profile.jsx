function ProfilePage(){

    return(
            <div id="dashboard"className="flex items-center flex-col h-full w-full p-4">  
                <Profile dot={dot}/>
                <Progress/>
                <Streak/>
            </div>

)
}
export default ProfilePage;