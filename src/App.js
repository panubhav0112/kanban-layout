import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <header className='header'>
        <div className='logo'>Project M</div>
        <div className='search'>
          <input type='text' placeholder='Search for anything...' />
        </div>
        <div className='user-profile'>
          <div className='user-name'>Anima Agrawal</div>
          <div className='user-location'>U.P, India</div>
        </div>
      </header>
      <div className='sidebar'>
        <nav className='sidebar-nav'>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Mobile App</a>
            </li>
            <li>
              <a href='#'>Invite</a>
            </li>
            {/* Other sidebar navigation items */}
          </ul>
        </nav>
        <div className='sidebar-footer'>{/* Sidebar footer content */}</div>
      </div>
      <div className='content'>
        <div className='header-actions'>
          <div className='messages'>+2 Messages</div>
          <div className='tasks'>Tasks</div>
          <div className='filter'>
            <input type='text' placeholder='Filter' />
          </div>
          <div className='today'>Today</div>
          <div className='share'>Share</div>
          <div className='members'>Members</div>
          <div className='settings'>Settings</div>
        </div>
        <div className='task-board'>
          <div className='column'>
            <h3>To Do</h3>
            <div className='task-count'>4</div>
          </div>
          <div className='column'>
            <h3>On Progress</h3>
            <div className='task-count'>3</div>
          </div>
          <div className='column'>
            <h3>Done</h3>
            <div className='task-count'>2</div>
          </div>
        </div>
        <div className='my-projects'>
          <div className='project'>
            <div className='project-name'>Mobile App</div>
            <div className='project-status'>Low</div>
          </div>
          {/* Other projects */}
        </div>
      </div>
    </div>
  );
};

export default App;
