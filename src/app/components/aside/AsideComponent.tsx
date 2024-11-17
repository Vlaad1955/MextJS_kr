import React from "react";

const AsideComponent = () =>{

    return(
        <aside className="sidebar">
            <div className="profile">
                <img src="https://t3.ftcdn.net/jpg/05/14/18/46/360_F_514184651_W5rVCabKKRH6H3mVb62jYWfuXio8c8si.jpg" alt="Profile Picture"/>
                    <h3>User1978</h3>
                    <p>Ukraine, Lviv</p>
            </div>
            <nav className="menu">
                <h4>Media</h4>
                <ul>
                    <li>Movies</li>
                    <li>TV Shows</li>
                    <li>Music</li>
                    <li>Audiobooks</li>
                    <li>Games</li>
                    <li>Apps</li>
                    <li>Updates <span className="badge">5</span></li>
                </ul>
                <h4>Account</h4>
                <ul>
                    <li>Library</li>
                    <li>Wishlist</li>
                    <li>Settings</li>
                </ul>
            </nav>
            <button className="sign-out">Sign Out</button>
        </aside>
    );
};

export default AsideComponent;