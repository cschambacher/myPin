import React from "react";
import { Link } from "react-router-dom";


const Greeting = ({currentUser, logout}) => {
    
    const display = currentUser ? (
        <div>
            <h2 className="header-name">Welcome, {currentUser.username}!</h2>
            <button className="header-name" onClick={logout}>Log Out</button>
        </div>
    ): (
        <div>
            <Link className="btn" to="/login">Login</Link>
            <p>or:</p>
            <Link className="btn" to="/signup">Sign up!</Link>
        </div>
    );
    return(
        <header className = "header-bar" >
            <div>
                {display}
            </div>
        </header >
    )
};

export default Greeting;

// //--------------

// export default ({ currentUser, logout }) => {
//     const display = currentUser ? (
//         <div>
//             <h3>Welcome {currentUser.username}!</h3>
//             <button onClick={logout}>Logout</button>
//         </div>
//     ) : (
//             <div>
//                 <Link className="btn" to="/signup">Sign Up</Link>
//                 <Link className="btn" to="/login">Log In</Link>
//             </div>
//         );
//     return (
//         <header className="nav-bar">
//             <h1 className="logo">BLUEBIRD</h1>
//             <div>
//                 {display}
//             </div>
//         </header>
//     )
// }
