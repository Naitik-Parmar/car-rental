// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './myBookings.css';

// const MyBookings = () => {
//   const { id } = useParams(); // Get userId from URL parameters
//   const [bookings, setBookings] = useState([]);
//   const [isSpinning, setIsSpinning] = useState(false);

//   useEffect(() => {
//     getBookingsByUserId();
//   }, [id]);

//   const getBookingsByUserId = async () => {
//     setIsSpinning(true);
//     const token = localStorage.getItem('token'); // Assuming the JWT token is stored in local storage

//     if (!id) {
//       console.error('User ID not found in URL');
//       setIsSpinning(false);
//       return; // Exit the function if userId is not available
//     }

//     const userIdLong = parseInt(id, 10); // Convert userId to a Long (integer)

//     if (isNaN(userIdLong)) {
//       console.error('Invalid User ID:', id);
//       setIsSpinning(false);
//       return; // Exit the function if userId is not a valid number
//     }

//     try {
//       const response = await axios.get(`http://localhost:8080/api/customer/car/bookings/${userIdLong}`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Include JWT token in headers
//         },
//       });
//       setBookings(response.data);
//     } catch (error) {
//       console.error('Error fetching bookings:', error);
//     } finally {
//       setIsSpinning(false);
//     }
//   };

//   return (
//     <div className="my-bookings">
//       {isSpinning ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           {bookings.length > 0 ? (
//             bookings.map(booking => (
//               <div key={booking.id} className="booking-item">
//                 <h4>Booking ID: {booking.id}</h4>
//                 <p>Status: {booking.bookCarStatus}</p>
//               </div>
//             ))
//           ) : (
//             <p>No bookings found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyBookings;




// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import CarDetails from './CarDetails'; // Import the CarDetails component
// import './myBookings.css';
// import { useNavigate } from 'react-router-dom';

// const MyBookings = () => {
//   const navigate =useNavigate();
//   const { id } = useParams(); // Get userId from URL parameters
//   const [bookings, setBookings] = useState([]);
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [selectedCar, setSelectedCar] = useState(null); // State to hold selected car details

//   useEffect(() => {
//     getBookingsByUserId();
//   }, [id]);

//   const getBookingsByUserId = async () => {
//     setIsSpinning(true);
//     const token = localStorage.getItem('token'); // Assuming the JWT token is stored in local storage

//     if (!id) {
//       console.error('User ID not found in URL');
//       setIsSpinning(false);
//       return; // Exit the function if userId is not available
//     }

//     const userIdLong = parseInt(id, 10); // Convert userId to a Long (integer)

//     if (isNaN(userIdLong)) {
//       console.error('Invalid User ID:', id);
//       setIsSpinning(false);
//       return; // Exit the function if userId is not a valid number
//     }

//     try {
//       const response = await axios.get(`http://localhost:8080/api/customer/car/bookings/${userIdLong}`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Include JWT token in headers
//         },
//       });
//       setBookings(response.data);
//     } catch (error) {
//       console.error('Error fetching bookings:', error);
//     } finally {
//       setIsSpinning(false);
//     }
//   };

//   // const handleViewCarDetails = async (carId) => {
//   //   try {
//   //     const token = localStorage.getItem('token'); // Assuming the JWT token is stored in local storage
//   //     const response = await axios.get(`http://localhost:8080/api/customer/car/${carId}`, {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`, // Include JWT token in headers
//   //       },
//   //     });
//   //     setSelectedCar(response.data); // Set the selected car details
//   //   } catch (error) {
//   //     console.error('Error fetching car details:', error);
//   //   }
//   // };

//   const handleViewCarDetails = (carId) => {
//     navigate(`/car-details/${carId}`); // Navigate to the car details page
//   };

//   return (
//     <div className="my-bookings">
//       {isSpinning ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           {bookings.length > 0 ? (
//             bookings.map(booking => (
//               <div key={booking.id} className="booking-item">
//                 <h4>Booking ID: {booking.id}</h4>
//                 <p>Status: {booking.bookCarStatus}</p>
//                 <button onClick={() => handleViewCarDetails(booking.carId)}>View Car Details</button> {/* Button to view car details */}
//               </div>
//             ))
//           ) : (
//             <p>No bookings found.</p>
//           )}
//         </div>
//       )}
//       {selectedCar && <CarDetails car={selectedCar} onClose={() => setSelectedCar(null)} />} {/* Show car details if selected */}
//     </div>
//   );
// };

// export default MyBookings;


// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import CarDetails from './CarDetails'; // Import the CarDetails component
// import './myBookings.css';
// import { useNavigate } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material'; // Import MUI components
// import styles from './CustomerMenu1.module.css'; // CSS module for AppBar

// const MyBookings = () => {
//   const navigate = useNavigate();
//   const { id } = useParams(); // Get userId from URL parameters
//   const [bookings, setBookings] = useState([]);
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [selectedCar, setSelectedCar] = useState(null); // State to hold selected car details

//   useEffect(() => {
//     getBookingsByUserId();
//   }, [id]);

//   const getBookingsByUserId = async () => {
//     setIsSpinning(true);
//     const token = localStorage.getItem('token'); // Assuming the JWT token is stored in local storage

//     if (!id) {
//       console.error('User ID not found in URL');
//       setIsSpinning(false);
//       return; // Exit the function if userId is not available
//     }

//     const userIdLong = parseInt(id, 10); // Convert userId to a Long (integer)

//     if (isNaN(userIdLong)) {
//       console.error('Invalid User ID:', id);
//       setIsSpinning(false);
//       return; // Exit the function if userId is not a valid number
//     }

//     try {
//       const response = await axios.get(`http://localhost:8080/api/customer/car/bookings/${userIdLong}`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Include JWT token in headers
//         },
//       });
//       setBookings(response.data);
//     } catch (error) {
//       console.error('Error fetching bookings:', error);
//     } finally {
//       setIsSpinning(false);
//     }
//   };

//   const handleViewCarDetails = (carId) => {
//     navigate(`/car-details/${carId}`); // Navigate to the car details page
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Clear the JWT token
//     localStorage.removeItem('userId'); // Clear the user ID as well
//     navigate('/'); // Redirect to the login page
//   };

//   return (
//     <div>
//       {/* Header Section */}
//       <div className={styles.menuContainer}>
//   <div className={styles.websiteName}>Car Rental Service</div>
//   <nav className={styles.nav}>
//     <Link to={`/customer/bookings/${userId}`} className={styles.navLink}>
//       Bookings
//     </Link>
//     <Link to="/customer/cars" className={styles.navLink}>
//       Cars
//     </Link>
//     <Link to="/search/car/cust" className={styles.navLink}>
//       Search
//     </Link>
//     <button className={styles.logoutButton} onClick={handleLogout}>
//       Logout
//     </button>
//   </nav>
// </div>


//       {/* My Bookings Section */}
//       <div className="my-bookings">
//         {isSpinning ? (
//           <p>Loading...</p>
//         ) : (
//           <div>
//             {bookings.length > 0 ? (
//               bookings.map(booking => (
//                 <div key={booking.id} className="booking-item">
//                   <h4>Booking ID: {booking.id}</h4>
//                   <p>Status: {booking.bookCarStatus}</p>
//                   <button onClick={() => handleViewCarDetails(booking.carId)}>View Car Details</button>
//                 </div>
//               ))
//             ) : (
//               <p>No bookings found.</p>
//             )}
//           </div>
//         )}
//         {selectedCar && <CarDetails car={selectedCar} onClose={() => setSelectedCar(null)} />} {/* Show car details if selected */}
//       </div>
//     </div>
//   );
// };

// export default MyBookings;



// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import CarDetails from './CarDetails'; // Import the CarDetails component
// import './myBookings.css';
// import { useNavigate } from 'react-router-dom';
// import styles from './CustomerMenu1.module.css'; // CSS module for AppBar

// const MyBookings = () => {
//   const navigate = useNavigate();
//   const { id } = useParams(); // Get userId from URL parameters
//   const [bookings, setBookings] = useState([]);
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [selectedCar, setSelectedCar] = useState(null); // State to hold selected car details
//   const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

//   useEffect(() => {
//     if (userId) {
//       getBookingsByUserId();
//     } else {
//       console.error('User ID not found in local storage');
//     }
//   }, [userId]);

//   const getBookingsByUserId = async () => {
//     setIsSpinning(true);
//     const token = localStorage.getItem('token'); // Assuming the JWT token is stored in local storage

//     if (!id) {
//       console.error('User ID not found in URL');
//       setIsSpinning(false);
//       return; // Exit the function if userId is not available
//     }

//     const userIdLong = parseInt(id, 10); // Convert userId to a Long (integer)

//     if (isNaN(userIdLong)) {
//       console.error('Invalid User ID:', id);
//       setIsSpinning(false);
//       return; // Exit the function if userId is not a valid number
//     }

//     try {
//       const response = await axios.get(`http://localhost:8080/api/customer/car/bookings/${userIdLong}`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Include JWT token in headers
//         },
//       });
//       setBookings(response.data);
//     } catch (error) {
//       console.error('Error fetching bookings:', error);
//     } finally {
//       setIsSpinning(false);
//     }
//   };

//   const handleViewCarDetails = (carId) => {
//     navigate(`/car-details/${carId}`); // Navigate to the car details page
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Clear the JWT token
//     localStorage.removeItem('userId'); // Clear the user ID as well
//     navigate('/'); // Redirect to the login page
//   };

//   return (
//     <div>
//       {/* Header Section */}
//       <div className={styles.menuContainer}>
//         <div className={styles.websiteName}>Car Rental Service</div>
//         <nav className={styles.nav}>
//           <Link to={`/customer/bookings/${userId}`} className={styles.navLink}>
//             Bookings
//           </Link>
//           <Link to="/customer/cars" className={styles.navLink}>
//             Cars
//           </Link>
//           <Link to="/search/car/cust" className={styles.navLink}>
//             Search
//           </Link>
//           <button className={styles.logoutButton} onClick={handleLogout}>
//             Logout
//           </button>
//         </nav>
//       </div>

//       {/* My Bookings Section */}
//       <div className="my-bookings">
//         {isSpinning ? (
//           <p>Loading...</p>
//         ) : (
//           <div>
//             {bookings.length > 0 ? (
//               bookings.map((booking) => (
//                 <div key={booking.id} className="booking-item">
//                   <h4>Booking ID: {booking.id}</h4>
//                   <p>Status: {booking.bookCarStatus}</p>
//                   <button onClick={() => handleViewCarDetails(booking.carId)}>View Car Details</button>
//                 </div>
//               ))
//             ) : (
//               <p>No bookings found.</p>
//             )}
//           </div>
//         )}
//         {selectedCar && <CarDetails car={selectedCar} onClose={() => setSelectedCar(null)} />} {/* Show car details if selected */}
//       </div>
//     </div>
//   );
// };

// export default MyBookings;




import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CarDetails from './CarDetails'; // Import the CarDetails component
import './myBookings.css';
import { useNavigate } from 'react-router-dom';
import styles from './CustomerMenu1.module.css'; // CSS module for AppBar

const MyBookings = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null); // State to hold selected car details
  const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

  useEffect(() => {
    if (userId) {
      getBookingsByUserId();
    } else {
      console.error('User ID not found in local storage');
    }
  }, [userId]);

  const getBookingsByUserId = async () => {
    setIsSpinning(true);
    const token = localStorage.getItem('token'); // Assuming the JWT token is stored in local storage

    if (!userId) {
      console.error('User ID not found in local storage');
      setIsSpinning(false);
      return; // Exit the function if userId is not available
    }

    const userIdLong = parseInt(userId, 10); // Convert userId to a Long (integer)

    if (isNaN(userIdLong)) {
      console.error('Invalid User ID:', userId);
      setIsSpinning(false);
      return; // Exit the function if userId is not a valid number
    }

    try {
      const response = await axios.get(`http://localhost:8080/api/customer/car/bookings/${userIdLong}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include JWT token in headers
        },
      });
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setIsSpinning(false);
    }
  };

  const handleViewCarDetails = (carId) => {
    navigate(`/car-details/${carId}`); // Navigate to the car details page
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the JWT token
    localStorage.removeItem('userId'); // Clear the user ID as well
    navigate('/'); // Redirect to the login page
  };

  return (
    <div>
      {/* Header Section */}
      <div className={styles.menuContainer}>
        <div className={styles.websiteName}>Car Rental Service</div>
        <nav className={styles.nav}>
        <Link to="/customer-menu" className={styles.navLink}>
            Home
          </Link>

          <Link to={`/customer/bookings/${userId}`} className={styles.navLink}>
            Bookings
          </Link>
          <Link to="/customer/cars" className={styles.navLink}>
            Cars
          </Link>
          <Link to="/search/car/cust" className={styles.navLink}>
            Search
          </Link>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </div>

      {/* My Bookings Section */}
      <div className="my-bookings">
        {isSpinning ? (
          <p>Loading...</p>
        ) : (
          <div className="booking-cards">
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <div key={booking.id} className="booking-card">
                  <h4>Booking ID: {booking.id}</h4>
                  <p>Status: {booking.bookCarStatus}</p>
                  <button onClick={() => handleViewCarDetails(booking.carId)}>View Car Details</button>
                </div>
              ))
            ) : (
              <p>No bookings found.</p>
            )}
          </div>
        )}
        {selectedCar && <CarDetails car={selectedCar} onClose={() => setSelectedCar(null)} />} {/* Show car details if selected */}
      </div>
    </div>
  );
};

export default MyBookings;
