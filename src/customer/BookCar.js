// import React, { useState } from 'react';
// import { useNavigate, useParams, useLocation } from 'react-router-dom'; // To access carId, price and navigate
// import axios from 'axios';
// import './bookCar.css'; // Add your CSS styles for the booking form

// const BookCar = () => {
//   const { carId } = useParams(); // Get the carId from URL params
//   const location = useLocation(); // Use location to get state passed from AllCars
//   const { price } = location.state; // Get price passed from the previous component
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [days, setDays] = useState(0);
//   const navigate = useNavigate();

//   const userId = localStorage.getItem('userId'); // Get the logged-in user's ID
//   const token = localStorage.getItem('token'); // Get the token for authorization

//   const calculatePrice = () => {
//     if (!fromDate || !toDate) {
//       alert('Please select both From and To dates.');
//       return;
//     }

//     const date1 = new Date(fromDate);
//     const date2 = new Date(toDate);
//     const differenceInTime = date2.getTime() - date1.getTime();
//     const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // Calculate number of days

//     if (differenceInDays > 0) {
//       setDays(differenceInDays);
//       setTotalPrice(price * differenceInDays); // Calculate total price based on passed price
//     } else {
//       alert('Please select valid dates.');
//     }
//   };

//   const handleBooking = async () => {
//     const bookingData = {
//       userId,
//       carId,
//       fromDate,
//       toDate,
//       days,
//       totalPrice,
//     };

//     try {
//       await axios.post('http://localhost:8080/api/customer/car/book', bookingData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       alert('Car booked successfully!');
//       navigate('/customer/bookings'); // Redirect to bookings page
//     } catch (error) {
//       console.error('Error booking car:', error);
//       alert('Failed to book the car. Please try again.');
//     }
//   };

//   return (
//     <div className="book-car-container">
//       <h2>Book Car</h2>
//       <label>
//         From Date:
//         <input
//           type="date"
//           value={fromDate}
//           onChange={(e) => setFromDate(e.target.value)}
//         />
//       </label>
//       <label>
//         To Date:
//         <input
//           type="date"
//           value={toDate}
//           onChange={(e) => setToDate(e.target.value)}
//         />
//       </label>
//       <button onClick={calculatePrice}>Calculate Price</button>
//       {days > 0 && (
//         <div>
//           <p>Number of Days: {days}</p>
//           <p>Total Price: ${totalPrice}</p>
//           <button onClick={handleBooking}>Confirm Booking</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookCar;











// import React, { useState } from 'react';
// import { useNavigate, useParams, useLocation } from 'react-router-dom'; // To access carId, price, and navigate
// import axios from 'axios';
// import './bookCar.css'; // Add your CSS styles for the booking form

// const BookCar = () => {
//   const { carId } = useParams(); 

//   // Get the carId from URL params
//   const location = useLocation(); // Use location to get state passed from AllCars
//   const { price } = location.state; // Get price passed from the previous component
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [days, setDays] = useState(0);
//   const navigate = useNavigate();

//   const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
//   const token = localStorage.getItem('token'); // Get the token for authorization



//   if (!userId) {
//     console.error('User ID is missing! Ensure the user is logged in.');
//   }

//   // Helper function to format the date to match backend format "yyyy-MM-dd HH:mm:ss.SSS"
//   const formatDate = (date) => {
//     const d = new Date(date);
//     return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} 00:00:00.000`;
//   };

//   const calculatePrice = () => {
//     if (!fromDate || !toDate) {
//       alert('Please select both From and To dates.');
//       return;
//     }

//     const date1 = new Date(fromDate);
//     const date2 = new Date(toDate);
//     const differenceInTime = date2.getTime() - date1.getTime();
//     const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // Calculate number of days

//     if (differenceInDays > 0) {
//       setDays(differenceInDays);
//       setTotalPrice(price * differenceInDays); // Calculate total price based on passed price
//     } else {
//       alert('Please select valid dates.');
//     }
//   };

//   const handleBooking = async () => {
//     const formattedFromDate = formatDate(fromDate); // Format the fromDate
//     const formattedToDate = formatDate(toDate); // Format the toDate

//     const bookingData = {
//       userId, // Pass userId from localStorage
//       carId,  // Pass carId from URL params
//       fromDate: formattedFromDate, // Send formatted date to backend
//       toDate: formattedToDate,     // Send formatted date to backend
//       days,
//       totalPrice,
//     };

//     try {
//       await axios.post('http://localhost:8080/api/customer/car/book', bookingData, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Correct token format
//         },
//       });
//       alert('Car booked successfully!');
//       navigate('/customer/cars'); // Redirect to bookings page
//     } catch (error) {
//       console.error('Error booking car:', error);
//       alert('Failed to book the car. Please try again.');
//     }
//   };

//   return (
//     <div className="book-car-container">
//       <h2>Book Car</h2>
//       <label>
//         From Date:
//         <input
//           type="date"
//           value={fromDate}
//           onChange={(e) => setFromDate(e.target.value)}
//         />
//       </label>
//       <label>
//         To Date:
//         <input
//           type="date"
//           value={toDate}
//           onChange={(e) => setToDate(e.target.value)}
//         />
//       </label>
//       <button onClick={calculatePrice}>Calculate Price</button>
//       {days > 0 && (
//         <div>
//           <p>Number of Days: {days}</p>
//           <p>Total Price: ${totalPrice}</p>
//           <button onClick={handleBooking}>Confirm Booking</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookCar;











// import React, { useState } from 'react';
// import { useNavigate, useParams, useLocation } from 'react-router-dom'; // To access carId, price, and navigate
// import axios from 'axios';
// import './bookCar.css'; // Add your CSS styles for the booking form

// const BookCar = () => {
//   const { carId } = useParams(); 
//   const location = useLocation(); // Use location to get state passed from AllCars
//   const { price } = location.state; // Get price passed from the previous component
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [days, setDays] = useState(0);
//   const navigate = useNavigate();

//   const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
//   const token = localStorage.getItem('token'); // Get the token for authorization

//   if (!userId) {
//     console.error('User ID is missing! Ensure the user is logged in.');
//   }

//   // Helper function to format the date to match backend format "yyyy-MM-dd HH:mm:ss.SSS"
//   const formatDate = (date) => {
//     const d = new Date(date);
//     return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} 00:00:00.000`;
//   };

//   const calculatePrice = () => {
//     if (!fromDate || !toDate) {
//       alert('Please select both From and To dates.');
//       return;
//     }

//     const date1 = new Date(fromDate);
//     const date2 = new Date(toDate);
//     const differenceInTime = date2.getTime() - date1.getTime();
//     const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // Calculate number of days

//     if (differenceInDays > 0) {
//       setDays(differenceInDays);
//       setTotalPrice(price * differenceInDays); // Calculate total price based on passed price
//     } else {
//       alert('Please select valid dates.');
//     }
//   };

//   const handleBooking = async () => {
//     const formattedFromDate = formatDate(fromDate); // Format the fromDate
//     const formattedToDate = formatDate(toDate); // Format the toDate

//     const bookingData = {
//       userId, // Pass userId from localStorage
//       carId,  // Pass carId from URL params
//       fromDate: formattedFromDate, // Send formatted date to backend
//       toDate: formattedToDate,     // Send formatted date to backend
//       days,
//       totalPrice,
//     };

//     try {
//       await axios.post('http://localhost:8080/api/customer/car/book', bookingData, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Correct token format
//         },
//       });
//       alert('Car booked successfully!');
//       navigate('/customer/cars'); // Redirect to bookings page
//     } catch (error) {
//       console.error('Error booking car:', error);
//       alert('Failed to book the car. Please try again.');
//     }
//   };

//   const handleCancelBooking = () => {
//     // Navigate back to the same page or to the AllCars component
//     navigate('/customer/cars'); // Change this if you want to navigate somewhere else
//   };

//   return (
//     <div className="book-car-container">
//       <h2>Book Car</h2>
//       <label>
//         From Date:
//         <input
//           type="date"
//           value={fromDate}
//           onChange={(e) => setFromDate(e.target.value)}
//         />
//       </label>
//       <label>
//         To Date:
//         <input
//           type="date"
//           value={toDate}
//           onChange={(e) => setToDate(e.target.value)}
//         />
//       </label>
//       <button onClick={calculatePrice}>Calculate Price</button>
//       {days > 0 && (
//         <div>
//           <p>Number of Days: {days}</p>
//           <p>Total Price: ${totalPrice}</p>
//           <button onClick={handleBooking}>Confirm Booking</button>
//           <button onClick={handleCancelBooking}>Cancel Booking</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookCar;











import React, { useState } from 'react';
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';
import './bookCar.css'; // Add your CSS styles for the booking form
import styles from './CustomerMenu1.module.css'; // CSS module for AppBar

const BookCar = () => {
  const { carId } = useParams();
  const location = useLocation(); // Use location to get state passed from AllCars
  const { price } = location.state; // Get price passed from the previous component
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [days, setDays] = useState(0);
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
  const token = localStorage.getItem('token'); // Get the token for authorization

  if (!userId) {
    console.error('User ID is missing! Ensure the user is logged in.');
  }

  // Helper function to format the date to match backend format "yyyy-MM-dd HH:mm:ss.SSS"
  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} 00:00:00.000`;
  };

  const calculatePrice = () => {
    if (!fromDate || !toDate) {
      alert('Please select both From and To dates.');
      return;
    }

    const date1 = new Date(fromDate);
    const date2 = new Date(toDate);
    const differenceInTime = date2.getTime() - date1.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // Calculate number of days

    if (differenceInDays > 0) {
      setDays(differenceInDays);
      setTotalPrice(price * differenceInDays); // Calculate total price based on passed price
    } else {
      alert('Please select valid dates.');
    }
  };

  const handleBooking = async () => {
    const formattedFromDate = formatDate(fromDate); // Format the fromDate
    const formattedToDate = formatDate(toDate); // Format the toDate

    const bookingData = {
      userId, // Pass userId from localStorage
      carId,  // Pass carId from URL params
      fromDate: formattedFromDate, // Send formatted date to backend
      toDate: formattedToDate,     // Send formatted date to backend
      days,
      totalPrice,
    };

    try {
      await axios.post('http://localhost:8080/api/customer/car/book', bookingData, {
        headers: {
          Authorization: `Bearer ${token}`, // Correct token format
        },
      });
      alert('Car booked successfully!');
      navigate('/customer/cars'); // Redirect to bookings page
    } catch (error) {
      console.error('Error booking car:', error);
      alert('Failed to book the car. Please try again.');
    }
  };

  const handleCancelBooking = () => {
    navigate('/customer/cars'); // Change this if you want to navigate somewhere else
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
          <button className={styles.logoutButton} onClick={() => {
            localStorage.removeItem('token'); // Clear the JWT token
            localStorage.removeItem('userId'); // Clear the user ID
            navigate('/'); // Redirect to the login page
          }}>
            Logout
          </button>
        </nav>
      </div>

      {/* Booking Form Section */}
      <div className="book-car-container">
        <h2>Book Car</h2>
        <label>
          From Date:
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </label>
        <label>
          To Date:
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </label>
        <button onClick={calculatePrice}>Calculate Price</button>
        {days > 0 && (
          <div>
            <p>Number of Days: {days}</p>
            <p>Total Price: ${totalPrice}</p>
            <div className="button-container">
  <button onClick={handleBooking}>Confirm Booking</button>
  <button onClick={handleCancelBooking}>Cancel Booking</button>
</div>

          </div>
        )}
      </div>
    </div>
  );
};

export default BookCar;
