import React, { useState } from 'react';
import Profile from './p_profile/e_profile/profile.jsx';
import Streak from './p_profile/e_streak/streak.jsx';
import Progress from './p_profile/e_progress/Progress.jsx';
import ProfilePage from './p_profile/Profile.jsx';
import History from './p_history/history.jsx';

function Dashboard(props) {
  const [page, setPage] = useState('Profile'); // Initial page is 'Profile'

  const changeHandler = (selectedPage) => {
    setPage(selectedPage); // Update the state with the selected page
    console.log(selectedPage);
  };

  const renderPage = () => {
    switch (page) {
      case 'Profile':
        return <ProfilePage />;
      case 'History':
        return <History />;
      case 'Account':
        return <Progress />;
      default:
        return <ProfilePage />;
    }
  };

  return (
    <div id="dashboard" className="flex w-full h-full">
      <div
        id="sidebar"
        className="lg:flex items-center flex-col gap-3 hidden border-r-2 border-red-950 w-2/12 p-2"
      >
        <ul className="flex flex-col gap-4 w-full cursor-pointer">
          {['Profile', 'History', 'Account'].map((dash) => (
            <li
              key={dash}
              className={`text-center text-xl flex items-center gap-2 hover:invert hover:bg-white p-2 rounded-md ${
                page === dash ? 'font-bold' : ''
              } transition duration-200`}
              onClick={() => changeHandler(dash)}
            >
              <img
                src={`./assets/icons/${dash}.png`}
                className="h-8 w-8"
                alt={`${dash} icon`}
              />
              {dash} {page === dash ? ">" : ""}
            </li>
          ))}
        </ul>
      </div>
      {/* Render Selected Page */}
      {renderPage()}
    </div>
  );
}

export default Dashboard;
