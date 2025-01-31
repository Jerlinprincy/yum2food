// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./auth.styles.css";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Fake authentication (Replace with backend API call)
//         if (email === "user@example.com" && password === "password") {
//             alert("Login Successful!");
//             navigate("/home"); // Redirect to home page after login
//         } else {
//             alert("Invalid Credentials");
//         }
//     };

//     return (
//         <div className="auth-container">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//             <p>Don't have an account? <a href="/signup">Sign up</a></p>
//         </div>
//     );
// };

// export default Login;












// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./auth.styles.css";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (localStorage.getItem("user")) {
//             navigate("/home"); // Redirect if already logged in
//         }
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         console.log("Entered Email:", email);
//         console.log("Entered Password:", password);

//         // Fake authentication (replace with API call)
//         if (email.trim() === "user@example.com" && password.trim() === "password") {
//             alert("Login Successful!");
//             localStorage.setItem("user", JSON.stringify({ email })); // Store user
//             navigate("/home"); // Redirect to home page
//         } else {
//             alert("Invalid Credentials");
//         }
//     };

//     return (
//         <div className="auth-container">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//             <p>Don't have an account? <a href="/signup">Sign up</a></p>
//         </div>
//     );
// };

// export default Login;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./auth.styles.css";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (localStorage.getItem("user")) {
//             navigate("/home"); // Redirect if already logged in
//         }
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         console.log("Entered Email:", email);
//         console.log("Entered Password:", password);

//         // Fake authentication (replace with API call)
//         if (email.trim() === "user@example.com" && password.trim() === "password") {
//             alert("Login Successful!");
//             localStorage.setItem("user", JSON.stringify({ email })); // Store user
//             navigate("/home"); // Redirect to home page
//         } else {
//             alert("Invalid Credentials");
//         }
//     };

//     return (
//         <div className="auth-container">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//             <p>Don't have an account? <a href="/signup">Sign up</a></p>
//         </div>
//     );
// };

// export default Login;




import "./auth.styles.css";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/home"); // Redirect if already logged in
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://backend-rmdi.onrender.com/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("token", data.token); // Store token
                alert("Login Successful!");
                navigate("/home"); // Redirect to home page
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("Server error. Please try again later.");
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
    );
};

export default Login;
