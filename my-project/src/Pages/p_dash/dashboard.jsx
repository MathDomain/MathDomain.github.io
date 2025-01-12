import React from 'react';
import Profile from './e_profile/profile';
import Streak from './e_streak/streak';
import Progress from './e_progress/Progress';
import { useState } from 'react';
import ProfilePage from './p_profile/Profile.jsx';

function Dashboard() {

    const [page,setPage] = useState('Profile');

    const changeHandler = (e) => {
        const value = e.target.innerHTML;
        setPage(value);
        console.log(page);
      };

    const renderPage = () => {
        switch (page) {
          case 'Profile':
            return <ProfilePage />;
          case 'History':
            return <Streak />;
          case 'Account':
            return <Progress />;
          default:
            return <Profile />;
        }
      }

    const dot = <section className="h-1 w-1 bg-brand100 rounded-full md:inline hidden"></section>;

  return (
    <div id="dashboard" className="flex w-full h-full">
        <div id="sidebar" className="lg:flex items-center flex-col gap-3 hidden border-r-2 border-red-950 w-2/12 p-2">
        <ul className='flex flex-col gap-4 w-full'>
            {['Profile', 'History','Account'].map((dash) => (<li key={dash} className="text-center 
            text-2xl flex items-center gap-2" onClick={changeHandler}>
                <img src={`./assets/icons/${dash}.png`} className="h-8 w-8"/>
                {dash}
            </li>))}
        </ul>
        </div>
            {renderPage()}
    </div>
  );
}
export default Dashboard;