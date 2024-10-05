// import React, { useEffect, useRef } from 'react';
// import './login.css'; 

// const Login = () => {
//   const wrapperRef = useRef(null);

//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     const signInBtnLink = wrapper.querySelector('.signInBtn-link');
//     const signUpBtnLink = wrapper.querySelector('.signUpBtn-link');

//     const toggleForm = () => {
//       wrapper.classList.toggle('active');
//     };

//     signUpBtnLink.addEventListener('click', toggleForm);
//     signInBtnLink.addEventListener('click', toggleForm);

//     // Clean up event listeners on component unmount
//     return () => {
//       signUpBtnLink.removeEventListener('click', toggleForm);
//       signInBtnLink.removeEventListener('click', toggleForm);
//     };
//   }, []);

//   return (
//     <div className="login-page">
//       <div className="wrapper" ref={wrapperRef}>
//         <div className="form-wrapper sign-in">
//           <form action="">
//             <h2>Login</h2>
//             <div className="input-group">
//               <input type="text" required />
//               <label>Username</label>
//             </div>
//             <div className="input-group">
//               <input type="password" required />
//               <label>Password</label>
//             </div>
//             <div className="remember">
//               <label>
//                 <input type="checkbox" /> Remember me
//               </label>
//             </div>
//             <button type="submit">Login</button>
//             <div className="signUp-link">
//               <p>
//                 Don't have an account? <a href="#" className="signUpBtn-link">Sign Up</a>
//               </p>
//             </div>
//           </form>
//         </div>
//         <div className="form-wrapper sign-up">
//           <form action="">
//             <h2>Sign Up</h2>
//             <div className="input-group">
//               <input type="text" required />
//               <label>Username</label>
//             </div>
//             <div className="input-group">
//               <input type="email" required />
//               <label>Email</label>
//             </div>
//             <div className="input-group">
//               <input type="password" required />
//               <label>Password</label>
//             </div>
//             <div className="remember">
//               <label>
//                 <input type="checkbox" /> I agree to the terms & conditions
//               </label>
//             </div>
//             <button type="submit">Sign Up</button>
//             <div className="signUp-link">
//               <p>
//                 Already have an account? <a href="#" className="signInBtn-link">Sign In</a>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useEffect, useState, useRef } from 'react';

// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './login.css'; 

// const Login = () => {
//   const wrapperRef = useRef(null);

//   // States for login and signup
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [signupEmail, setSignupEmail] = useState('');
//   const [signupPassword, setSignupPassword] = useState('');
//   const [name, setName] = useState('');
//   const [userRole, setUserRole] = useState('0'); // Default to Admin (0 for admin, 1 for user)

//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     const signInBtnLink = wrapper.querySelector('.signInBtn-link');
//     const signUpBtnLink = wrapper.querySelector('.signUpBtn-link');

//     const toggleForm = () => {
//       wrapper.classList.toggle('active');
//     };

//     signUpBtnLink.addEventListener('click', toggleForm);
//     signInBtnLink.addEventListener('click', toggleForm);

//     return () => {
//       signUpBtnLink.removeEventListener('click', toggleForm);
//       signInBtnLink.removeEventListener('click', toggleForm);
//     };
//   }, []);

//   // Handle login
//   const loginUser = (e) => {
//     e.preventDefault();
//     const loginData = { email, password };

//     axios
//       .post('http://localhost:8080/api/auth/login', loginData)
//       .then((response) => {
//         const token = response.data.jwt; // Get JWT token from response
//         localStorage.setItem('token', token); // Save token in localStorage
//         alert('Login successful!');
//       })
//       .catch((error) => {
//         console.error('There was an error logging in!', error);
//         alert('Login failed! Please check your credentials.');
//       });
//   };

//   // Handle signup
//   const signupUser = (e) => {
//     e.preventDefault();
//     const signupData = {
//       email: signupEmail,
//       password: signupPassword,
//       name,
//       userRole: parseInt(userRole, 10) // Convert role to number (0 for Admin, 1 for User)
//     };

//     axios
//       .post('http://localhost:8080/api/auth/signup', signupData)
//       .then(() => {
//         alert('Signup successful! You can now log in.');
//       })
//       .catch((error) => {
//         console.error('There was an error signing up!', error);
//         alert('Signup failed! Please try again.');
//       });
//   };

//   return (
//     <div className="login-page">
//       <div className="wrapper" ref={wrapperRef}>
//         {/* Login Form */}
//         <div className="form-wrapper sign-in">
//           <form onSubmit={loginUser}>
//             <h2>Login</h2>
//             <div className="input-group">
//               <input 
//                 type="email" 
//                 placeholder="Email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 required 
//               />
//               <label>Email</label>
//             </div>
//             <div className="input-group">
//               <input 
//                 type="password" 
//                 placeholder="Password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 required 
//               />
//               <label>Password</label>
//             </div>
       
//       <button type="submit">Login</button>
   
   

//             <div className="signUp-link">
//               <p>Don't have an account? <a href="#" className="signUpBtn-link">Sign Up</a></p>
//             </div>
//           </form>
//         </div>

//         {/* Signup Form */}
//         <div className="form-wrapper sign-up">
//           <form onSubmit={signupUser}>
//             <h2>Sign Up</h2>
//             <div className="input-group">
//               <input 
//                 type="text" 
//                 placeholder="Name" 
//                 value={name} 
//                 onChange={(e) => setName(e.target.value)} 
//                 required 
//               />
//               <label>Name</label>
//             </div>
//             <div className="input-group">
//               <input 
//                 type="email" 
//                 placeholder="Email" 
//                 value={signupEmail} 
//                 onChange={(e) => setSignupEmail(e.target.value)} 
//                 required 
//               />
//               <label>Email</label>
//             </div>
//             <div className="input-group">
//               <input 
//                 type="password" 
//                 placeholder="Password" 
//                 value={signupPassword} 
//                 onChange={(e) => setSignupPassword(e.target.value)} 
//                 required 
//               />
//               <label>Password</label>
//             </div>
//             <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
//               <option value="0">Admin</option>
//               <option value="1">User</option>
//             </select>
//             <button type="submit">Sign Up</button>
//             <div className="signUp-link">
//               <p>Already have an account? <a href="#" className="signInBtn-link">Sign In</a></p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;






























// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './login.css'; 

// const Login = () => {
//   const wrapperRef = useRef(null);
//   const navigate = useNavigate(); // Initialize useNavigate

//   // States for login and signup
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [signupEmail, setSignupEmail] = useState('');
//   const [signupPassword, setSignupPassword] = useState('');
//   const [name, setName] = useState('');
//   const [userRole, setUserRole] = useState('0'); // Default to Admin (0 for admin, 1 for user)

//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     const signInBtnLink = wrapper.querySelector('.signInBtn-link');
//     const signUpBtnLink = wrapper.querySelector('.signUpBtn-link');

//     const toggleForm = () => {
//       wrapper.classList.toggle('active');
//     };

//     signUpBtnLink.addEventListener('click', toggleForm);
//     signInBtnLink.addEventListener('click', toggleForm);

//     return () => {
//       signUpBtnLink.removeEventListener('click', toggleForm);
//       signInBtnLink.removeEventListener('click', toggleForm);
//     };
//   }, []);

//   // Handle login
//   const loginUser = (e) => {
//     e.preventDefault();
//     const loginData = { email, password };

//     axios
//       .post('http://localhost:8080/api/auth/login', loginData)
//       .then((response) => {
//         const token = response.data.jwt; // Get JWT token from response
//         localStorage.setItem('token', token); // Save token in localStorage
//         // alert('Login successful!');
//         navigate('/menu'); // Navigate to the /menu route after successful login
//       })
//       .catch((error) => {
//         console.error('There was an error logging in!', error);
//         alert('Login failed! Please check your credentials.');
//       });
//   };

//   // Handle signup
//   const signupUser = (e) => {
//     e.preventDefault();
//     const signupData = {
//       email: signupEmail,
//       password: signupPassword,
//       name,
//       userRole: parseInt(userRole, 10) // Convert role to number (0 for Admin, 1 for User)
//     };

//     axios
//       .post('http://localhost:8080/api/auth/signup', signupData)
//       .then(() => {
//         alert('Signup successful! You can now log in.');
//       })
//       .catch((error) => {
//         console.error('There was an error signing up!', error);
//         alert('Signup failed! Please try again.');
//       });
//   };

//   return (
//     <div className="login-page">
//       <div className="wrapper" ref={wrapperRef}>
//         {/* Login Form */}
//         <div className="form-wrapper sign-in">
//           <form onSubmit={loginUser}>
//             <h2>Login</h2>
//             <div className="input-group">
//               <input 
//                 type="email" 
//                 placeholder="Email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 required 
//               />
//               <label>Email</label>
//             </div>
//             <div className="input-group">
//               <input 
//                 type="password" 
//                 placeholder="Password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 required 
//               />
//               <label>Password</label>
//             </div>
       
//             <button type="submit">Login</button>

//             <div className="signUp-link">
//               <p>Don't have an account? <a href="#" className="signUpBtn-link">Sign Up</a></p>
//             </div>
//           </form>
//         </div>

//         {/* Signup Form */}
//         <div className="form-wrapper sign-up">
//           <form onSubmit={signupUser}>
//             <h2>Sign Up</h2>
//             <div className="input-group">
//               <input 
//                 type="text" 
//                 placeholder="Name" 
//                 value={name} 
//                 onChange={(e) => setName(e.target.value)} 
//                 required 
//               />
//               <label>Name</label>
//             </div>
//             <div className="input-group">
//               <input 
//                 type="email" 
//                 placeholder="Email" 
//                 value={signupEmail} 
//                 onChange={(e) => setSignupEmail(e.target.value)} 
//                 required 
//               />
//               <label>Email</label>
//             </div>
//             <div className="input-group">
//               <input 
//                 type="password" 
//                 placeholder="Password" 
//                 value={signupPassword} 
//                 onChange={(e) => setSignupPassword(e.target.value)} 
//                 required 
//               />
//               <label>Password</label>
//             </div>
//             <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
//               <option value="0">Admin</option>
//               <option value="1">User</option>
//             </select>
//             <button type="submit">Sign Up</button>
//             <div className="signUp-link">
//               <p>Already have an account? <a href="#" className="signInBtn-link">Sign In</a></p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; 
// import './login.css'; 

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); 

//   const loginUser = (e) => {
//     e.preventDefault();
//     const loginData = { email, password };

//     axios
//       .post('http://localhost:8080/api/auth/login', loginData)
//       .then((response) => {
//         const token = response.data.jwt; 
//         localStorage.setItem('token', token); 
//         navigate('/menu'); 
//       })
//       .catch((error) => {
//         console.error('There was an error logging in!', error);
//         alert('Login failed! Please check your credentials.');
//       });
//   };

//   return (
//     <div className="login-page">
//       <div className="form-wrapper sign-in">
//         <form onSubmit={loginUser}>
//           <h2>Login</h2>
//           <div className="input-group">
//             <input 
//               type="email" 
//               placeholder="Email" 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               required 
//             />
//             <label>Email</label>
//           </div>
//           <div className="input-group">
//             <input 
//               type="password" 
//               placeholder="Password" 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//               required 
//             />
//             <label>Password</label>
//           </div>
//           <button type="submit">Login</button>
//           <div className="signUp-link">
//             <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; 
// import './login.css'; 

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); 

//   const loginUser = (e) => {
//     e.preventDefault();
//     const loginData = { email, password };

//     axios
//       .post('http://localhost:8080/api/auth/login', loginData)
//       .then((response) => {
//         const { jwt, role } = response.data; // Get role and token from the response
//         localStorage.setItem('token', jwt); // Save token in localStorage

//         // Redirect based on user role (compare with numbers)
//         if (role === 0) {
//           navigate('/menu'); // Admin menu
//         } else if (role === 1) {
//           navigate('/customer-menu'); // Customer menu
//         } else {
//           alert('Invalid role!');
//         }
//       })
//       .catch((error) => {
//         console.error('There was an error logging in!', error);
//         alert('Login failed! Please check your credentials.');
//       });
//   };

//   return (
//     <div className="login-page">
//       <div className="form-wrapper sign-in">
//         <form onSubmit={loginUser}>
//           <h2>Login</h2>
//           <div className="input-group">
//             <input 
//               type="email" 
//               placeholder="Email" 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               required 
//             />
//             <label>Email</label>
//           </div>
//           <div className="input-group">
//             <input 
//               type="password" 
//               placeholder="Password" 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//               required 
//             />
//             <label>Password</label>
//           </div>
//           <button type="submit">Login</button>
//           <div className="signUp-link">
//             <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

































// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; 
// import './login.css'; 

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); 

//   const loginUser = (e) => {
//     e.preventDefault();
//     const loginData = { email, password };

//     axios
//       .post('http://localhost:8080/api/auth/login', loginData)
//       .then((response) => {
//         const { jwt, userRole } = response.data; // Get role and token from the response
//         localStorage.setItem('token', jwt); // Save token in localStorage

//         // Redirect based on user role (compare with string values)
//         if (userRole === 'ADMIN') {
//           navigate('/menu'); // Admin menu
//         } else if (userRole === 'CUSTOMER') {
//           navigate('/customer-menu'); // Customer menu
//         } else {
//           alert('Invalid role!');
//         }
//       })
//       .catch((error) => {
//         console.error('There was an error logging in!', error);
//         alert('Login failed! Please check your credentials.');
//       });
//   };

//   return (
//     <div className="login-page">
//       <div className="form-wrapper sign-in">
//         <form onSubmit={loginUser}>
//           <h2>Login</h2>
//           <div className="input-group">
//             <input 
//               type="email" 
//               placeholder="Email" 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               required 
//             />
//             <label>Email</label>
//           </div>
//           <div className="input-group">
//             <input 
//               type="password" 
//               placeholder="Password" 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//               required 
//             />
//             <label>Password</label>
//           </div>
//           <button type="submit">Login</button>
//           <div className="signUp-link">
//             <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const loginUser = async (e) => {
    e.preventDefault();
    const loginData = { email, password };

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', loginData);
      const { jwt, userId, userRole } = response.data; // Get userId, role, and token from the response
      localStorage.setItem('token', jwt); // Save token in localStorage
      localStorage.setItem('userId', userId); // Save userId in localStorage

      // Redirect based on user role (compare with string values)
      if (userRole === 'ADMIN') {
        navigate('/menu'); // Admin menu
      } else if (userRole === 'CUSTOMER') {
        navigate('/customer-menu'); // Customer menu
      } else {
        alert('Invalid role!');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      alert('Login failed! Please check your credentials.');
    }
  };

  return (
    <div className="login-page">
      <div className="form-wrapper sign-in">
        <form onSubmit={loginUser}>
          <h2>Login</h2>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <label>Password</label>
          </div>
          <button type="submit">Login</button>
          <div className="signUp-link">
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
