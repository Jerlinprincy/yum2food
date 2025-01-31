// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./auth.styles.css";

// const Signup = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             alert("Passwords do not match!");
//             return;
//         }
//         alert("Signup Successful!");
//         navigate("/login"); // Redirect to login page after signup
//     };

//     return (
//         <div className="auth-container">
//             <h2>Signup</h2>
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
//                 <input
//                     type="password"
//                     placeholder="Confirm Password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Sign Up</button>
//             </form>
//             <p>Already have an account? <a href="/login">Login</a></p>
//         </div>
//     );
// };

// export default Signup;






import "./auth.styles.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://backend-rmdi.onrender.com/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Signup Successful!");
                navigate("/login"); // Redirect to login page
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("Server error. Please try again later.");
        }
    };

    return (
        <div className="auth-container">
            <h2>Signup</h2>
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
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default Signup;
