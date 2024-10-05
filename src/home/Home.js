

// import React, { useState,useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import styles from './AllCars.module.css';
// import axios from "axios"; // Ensure you have axios installed
// import { Modal, Button } from "semantic-ui-react"; // Adjust based on your UI library
// import './home.css'; // Include your CSS file
// import './CarDetails.css';

// const Home = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [open, setOpen] = useState(false); // Modal state for login
//   const [signupOpen, setSignupOpen] = useState(false); // Modal state for signup
//   const [signupEmail, setSignupEmail] = useState(''); // Signup email state
//   const [signupPassword, setSignupPassword] = useState(''); // Signup password state
//   const [name, setName] = useState(''); // Additional field for signup name
//   const navigate = useNavigate();

//   const loginUser = async (e) => {
//     e.preventDefault();
//     const loginData = { email, password };

//     try {
//       const response = await axios.post('http://localhost:8080/api/auth/login', loginData);
//       const { jwt, userId, userRole } = response.data; // Get userId, role, and token from the response
//       localStorage.setItem('token', jwt); // Save token in localStorage
//       localStorage.setItem('userId', userId); // Save userId in localStorage

//       // Redirect based on user role (compare with string values)
//       if (userRole === 'ADMIN') {
//         navigate('/menu'); // Admin menu
//       } else if (userRole === 'CUSTOMER') {
//         navigate('/customer-menu'); // Customer menu
//       } else {
//         alert('Invalid role!');
//       }
//     } catch (error) {
//       console.error('There was an error logging in!', error);
//       alert('Login failed! Please check your credentials.');
//     }
//   };

//   const signupUser = async (e) => {
//     e.preventDefault();
//     const signupData = { name, email: signupEmail, password: signupPassword };

//     try {
//       await axios.post('http://localhost:8080/api/auth/signup', signupData);
//       alert('Signup successful! Please log in.');
//       setSignupOpen(false); // Close the signup modal after successful signup
//     } catch (error) {
//       console.error('There was an error signing up!', error);
//       alert('Signup failed! Please try again.');
//     }
//   };




//   const [cars, setCars] = useState([]);
//   // const [isLoggedIn, setIsLoggedIn] = useState(false);
//   // const navigate = useNavigate(); // Hook for navigation

//   // useEffect(() => {
//   //   const token = localStorage.getItem('token');
//   //   if (token) {
//   //     setIsLoggedIn(true);
//   //     fetchCars(token);
//   //   } else {
//   //     setIsLoggedIn(false);
//   //   }
//   // }, []);

//   const fetchCars = async () => { // Use the arrow function syntax correctly
//     try {
//       const response = await axios.get('http://localhost:8080/api/home/cars', {
//         // headers: {
//         //   Authorization: `Bearer ${token}`,
//         // },
//       });
//       const carsData = response.data.map((car) => ({
//         ...car,
//         processedImage: `data:image/jpeg;base64,${car.returnedImage}`,
//       }));
//       setCars(carsData);
//     } catch (error) {
//       console.error('Error fetching cars:', error);
//     }
//   };
  

// //   const handleBookCar = (carId) => {
// //     navigate(`/book-car/${carId}`); // Redirect to booking page with carId
// //   };
//   const handleBookCar = (carId, price) => {
//     navigate(`/book-car/${carId}`, { state: { carId, price } });
//   };

//   // if (!isLoggedIn) {
//   //   return <p>Please log in to view the dashboard</p>;
//   // }

//   const handleViewCarDetails = (carId) => {
//     navigate(`/car-details/${carId}`); // Navigate to the car details page
//   };




//     return (

// <div className="home-container">
//   <video
//     src="car.mp4"
//     className="background-video"
//     autoPlay
//     muted
//     onEnded={() => {
//       const video = document.querySelector('.background-video');
//       video.pause(); // Pause the video when it ends
//     }}
//   />
//   <div className="overlay">
//     <header className="home-header">
//       {/* <h1>Welcome to the Car Rental Service</h1> */}
//       <div className="auth-buttons">
//         <Button onClick={() => setOpen(true)} className="ui button primary">Login</Button>
//         <Button onClick={() => setSignupOpen(true)} className="ui button secondary">Signup</Button>
//       </div>
//     </header>
//   </div>
//   <div className="slogan-container">
//     <p className="slogan-text">
//       "Unlock the road to unforgettable journeys. <div>

//     </div>
//             Drive the car of your dreams with ease and style today!"</p>
//     {/* <button onClick={() => setSignupOpen(true)} className="register-link">Register Now</button> */}
//   </div>

// <div>

// </div>
//   {/* Text below the video */}
//   <div className="text-below-video">
//     <p>Choose your dream car and drive with confidence. We offer a variety of vehicles to suit your needs.</p>
//   </div>

//   {/* Car display section */}
//   <div className="dashboard-container">
//     {cars.map((car) => (
//       <div className="car-card" key={car.id}>
//         <div className="car-card-image">
//           <img src={car.processedImage} alt="Car" className="profile" />
//         </div>
//         <div className="car-card-details">
//           <h2 className="car-title">
//             {car.brand} - {car.name}
//           </h2>
//           <button onClick={() => handleBookCar(car.id, car.price)}>Book Car</button>
      
//           <button onClick={() => handleViewCarDetails(car.id)}>View Car Details</button>
//         </div>
//       </div>
//     ))}
//   </div>
//   <div className="text-below-cars">
//   <p>See what our customers say:</p>
// </div>

// <div className="feedback-container">
//   <div className="feedback-card">
//     <h3>John Doe</h3>
//     <p>⭐⭐⭐⭐⭐</p> {/* You can replace this with an icon or image for ratings */}
//     <p>"Great service and amazing cars!"</p>
//   </div>
  
//   <div className="feedback-card">
//     <h3>Jane Smith</h3>
//     <p>⭐⭐⭐⭐</p>
//     <p>"I loved my experience with this rental service."</p>
//   </div>

//   <div className="feedback-card">
//     <h3>Mike Johnson</h3>
//     <p>⭐⭐⭐⭐⭐</p>
//     <p>"The car was in excellent condition and very comfortable."</p>
//   </div>
// </div>


//    {/* Login Modal */}
//         <Modal onClose={() => setOpen(false)} open={open}>
//             <Modal.Header>Login</Modal.Header>
//         <Modal.Content>
//              <form onSubmit={loginUser}>
//               <div className="input-group">
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="input-group">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <Modal.Actions>
//                 <Button type="submit">Sign In</Button>
//                 <Button onClick={() => setOpen(false)}>Cancel</Button>
//               </Modal.Actions>
//             </form>
//             <div className="signUp-link">
//               <p>Don't have an account? <a href="#" onClick={() => { setOpen(false); setSignupOpen(true); }}>Sign Up</a></p>
//             </div>
//           </Modal.Content>
//         </Modal>
  
//    {/* Sign Up Modal */}
//    <Modal onClose={() => setSignupOpen(false)} open={signupOpen}>
//           <Modal.Header>Sign Up</Modal.Header>
//           <Modal.Content>
//             <form onSubmit={signupUser}>
//               <div className="input-group">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="input-group">
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={signupEmail}
//                   onChange={(e) => setSignupEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="input-group">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={signupPassword}
//                   onChange={(e) => setSignupPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <Modal.Actions>
//                 <Button type="submit">Sign Up</Button>
                
//                 <Button onClick={() => setSignupOpen(false)}>Cancel</Button>
//               </Modal.Actions>
//             </form>
//             <div className="signUp-link">
//               <p>Already have an account? <a href="#" onClick={() => { setSignupOpen(false); setOpen(true); }}>Sign In</a></p>
//             </div>
//           </Modal.Content>
//         </Modal>
// </div>

//   )
//   };
  
//   export default Home;
  




























import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from '../customer/AllCars.module.css';
import axios from "axios";
import { Modal, Button } from "semantic-ui-react";
import './home.css';
import '../customer/CarDetails.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  
  const [cars, setCars] = useState([]); // State for car data

  useEffect(() => {
    fetchCars(); // Fetch cars on component mount
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/home/cars');
      const carsData = response.data.map((car) => ({
        ...car,
        processedImage: `data:image/jpeg;base64,${car.returnedImage}`,
      }));
      setCars(carsData);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const loginData = { email, password };

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', loginData);
      const { jwt, userId, userRole } = response.data;
      localStorage.setItem('token', jwt);
      localStorage.setItem('userId', userId);

      if (userRole === 'ADMIN') {
        navigate('/menu');
      } else if (userRole === 'CUSTOMER') {
        navigate('/customer-menu');
      } else {
        alert('Invalid role!');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      alert('Login failed! Please check your credentials.');
    }
  };

  const signupUser = async (e) => {
    e.preventDefault();
    const signupData = { name, email: signupEmail, password: signupPassword };

    try {
      await axios.post('http://localhost:8080/api/auth/signup', signupData);
      alert('Signup successful! Please log in.');
      setSignupOpen(false);
    } catch (error) {
      console.error('There was an error signing up!', error);
      alert('Signup failed! Please try again.');
    }
  };

  const handleBookCar = (carId, price) => {
    navigate(`/book-car/${carId}`, { state: { carId, price } });
  };

  const handleViewCarDetails = (carId) => {
    navigate(`/car-detailsHome/${carId}`);
  };

  return (
    <div className="home-container">
      <video
        src="car.mp4"
        className="background-video"
        autoPlay
        muted
        onEnded={() => {
          const video = document.querySelector('.background-video');
          video.pause();
        }}
      />
      <div className="overlay">
        <header className="home-header">
          <div className="auth-buttons">
            <Button onClick={() => setOpen(true)} className="ui button primary">Login</Button>
            <Button onClick={() => setSignupOpen(true)} className="ui button secondary">Signup</Button>
          </div>
        </header>
      </div>
      <div className="slogan-container">
        <p className="slogan-text">
          "Unlock the road to unforgettable journeys. 
          <div></div>
          <span>Drive the car of your dreams with ease and style today!</span>"
        </p>
      </div>
      <div className="text-below-video">
        <p>Choose your dream car and drive with confidence. We offer a variety of vehicles to suit your needs.</p>
      </div>

      {/* <div className="dashboard-container">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <div className="car-card-image">
              <img src={car.processedImage} alt="Car" className="profile" />
            </div>
            <div className="car-card-details">
              <h2 className="car-title">
                {car.brand} - {car.name}
              </h2>
              <button onClick={() => handleBookCar(car.id, car.price)}>Book Car</button>
              <button onClick={() => handleViewCarDetails(car.id)}>View Car Details</button>
            </div>
          </div>
        ))}
      </div> */}

<div className="dashboard-container">
  {cars.slice(0, 8).map((car) => (
    <div className="car-card" key={car.id}>
      <div className="car-card-image">
        <img src={car.processedImage} alt="Car" className="profile" />
      </div>
      <div className="car-card-details">
        <h2 className="car-title">
          {car.brand} - {car.name}
        </h2>
        <button onClick={() => handleBookCar(car.id, car.price)}>Book Car</button>
        <button onClick={() => handleViewCarDetails(car.id)}>View Car Details</button>
      </div>
    </div>
  ))}
</div>


      <div className="text-below-cars">
        <p>See what our customers say:</p>
      </div>

      <div className="feedback-container">
        <div className="feedback-card">
          <h3>John Doe</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>"Great service and amazing cars!"</p>
        </div>
        <div className="feedback-card">
          <h3>Jane Smith</h3>
          <p>⭐⭐⭐⭐</p>
          <p>"I loved my experience with this rental service."</p>
        </div>
        <div className="feedback-card">
          <h3>Mike Johnson</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>"The car was in excellent condition and very comfortable."</p>
        </div>
      </div>

      {/* Login Modal */}
      <Modal onClose={() => setOpen(false)} open={open}>
        <Modal.Header>Login</Modal.Header>
        <Modal.Content>
          <form onSubmit={loginUser}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Modal.Actions>
              <Button type="submit">Sign In</Button>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
            </Modal.Actions>
          </form>
          <div className="signUp-link">
            <p>Don't have an account? <a href="#" onClick={() => { setOpen(false); setSignupOpen(true); }}>Sign Up</a></p>
          </div>
        </Modal.Content>
      </Modal>

      {/* Sign Up Modal */}
      <Modal onClose={() => setSignupOpen(false)} open={signupOpen}>
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Content>
          <form onSubmit={signupUser}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
            </div>
            <Modal.Actions>
              <Button type="submit">Sign Up</Button>
              <Button onClick={() => setSignupOpen(false)}>Cancel</Button>
            </Modal.Actions>
          </form>
          <div className="signUp-link">
            <p>Already have an account? <a href="#" onClick={() => { setSignupOpen(false); setOpen(true); }}>Sign In</a></p>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default Home;
