import React from 'react';
import Profile from './e_profile/profile';
import Streak from './e_streak/streak';

function Dashboard() {

    const dot = <section className="h-1 w-1 bg-brand100 rounded-full md:inline hidden"></section>;

  return (
    <div id="dashboard" className="flex w-full h-full">
        <div id="sidebar" className="lg:flex items-center flex-col gap-3 hidden border-r-2 border-red-950 w-1/4 p-2">
        <ul>
            {['Profile', 'Statistics'].map((dash) => (<li key={dash} className="text-center text-3xl">
                {dash}
            </li>))}
        </ul>
        </div>
            <div id="dashboard"className="flex items-center flex-col h-full w-full p-4">  
                <Profile dot={dot}/>
                <Streak/>
            </div>
    </div>
  );
}
export default Dashboard;