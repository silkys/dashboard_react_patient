import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Patient Dashboard</h2>
            <ul>
                <li>Home</li>
                <li>Profile</li>
                <li>Appointments</li>
                <li>Messages</li>
                <li>Settings</li>
            </ul>
        </div>
    );
};

export default Sidebar;