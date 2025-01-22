import React, { useState } from 'react';
import ProfilePage from './p_profile/Profile.jsx';
import History from './p_history/history.jsx';
import Progress from './p_profile/e_progress/Progress.jsx';

function Dashboard() {
  const [page, setPage] = useState('Profile'); // Track the active page

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
    <div id="dashboard" className="flex h-full">
      {/* Sidebar */}
      <div
        id="sidebar"
        className="flex flex-col w-2/12 bg-gray-100 border-r shadow-lg"
      >
        <ul className="flex flex-col">
          {['Profile', 'History', 'Account'].map((dash) => (
            <li
              key={dash}
              className={`relative flex items-center gap-3 px-4 py-3 cursor-pointer ${
                page === dash ? 'bg-brand200 text-white' : 'hover:bg-gray-200'
              }`}
              onClick={() => setPage(dash)}
            >
              <div
                className={`absolute left-0 top-0 h-full w-1 rounded ${
                  page === dash ? 'bg-accent' : 'bg-transparent'
                }`}
              ></div>
              <img
                src={`./assets/icons/${dash}.png`}
                alt={`${dash} icon`}
                className="h-6 w-6"
              />
              <span>{dash}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div id="main" className="flex-1 p-6">
        {renderPage()}
      </div>
    </div>
  );
}

export default Dashboard;
