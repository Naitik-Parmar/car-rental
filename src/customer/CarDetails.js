// import React from 'react';
// import './CarDetails.css'; // Import CSS for car details

// const CarDetails = ({ car, onClose }) => {
//   return (
//     <div className="car-details">
//       <button className="close-button" onClick={onClose}>Close</button>
//       <img src={car.processedImage} alt={car.name} className="car-image" />
//       <h2>{car.brand} - {car.name}</h2>
//       <p>{car.description}</p>
//       <h5>
//         Price: <b>${car.price}</b> - Color: <b>{car.color}</b> - Transmission: <b>{car.transmission}</b> - Year: <b>{car.year}</b>
//       </h5>
//     </div>
//   );
// };

// export default CarDetails;

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom'; // To get carId and use navigation
// import axios from 'axios';
// import './CarDetails.css';

// const CarDetails = () => {
//   const { carId } = useParams(); // Get carId from URL parameters
//   const [car, setCar] = useState(null);
//   const [isSpinning, setIsSpinning] = useState(false);
//   const navigate = useNavigate(); // For navigation

//   useEffect(() => {
//     fetchCarDetails();
//   }, [carId]);

//   const fetchCarDetails = async () => {
//     setIsSpinning(true);
//     const token = localStorage.getItem('token');

//     try {
//       const response = await axios.get(`http://localhost:8080/api/customer/car/${carId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const carData = {
//         ...response.data,
//         processedImage: `data:image/jpeg;base64,${response.data.returnedImage}`,
//       };
//       setCar(carData);
//     } catch (error) {
//       console.error('Error fetching car details:', error);
//     } finally {
//       setIsSpinning(false);
//     }
//   };

//   const handleBookCar = () => {
//     navigate(`/book-car/${carId}`, { state: { carId, price: car.price } }); // Navigate to BookCar with carId and price
//   };
// const handleOut=()=>
// {
//     navigate(`/customer-menu`)
// }
//   if (isSpinning) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="car-details">
//       {car ? (
//         <div className="car-details-card">
//           <img src={car.processedImage} alt={car.name} className="car-image" />
//           <h2>{car.brand} - {car.name}</h2>
//           <p>{car.description}</p>
//           <h4>Price: ${car.price}</h4>
//           <p>Year: {car.year}</p>
//           <p>Color: {car.color}</p>
//           <p>Transmission: {car.transmission}</p>

//           {/* Add Book Car Button */}
//           <button className="book-button" onClick={handleBookCar}>
//             Book Car
//           </button>
//           <div> </div>
//           <button className='book-button' onClick={handleOut}> Cancel </button>
//         </div>
//       ) : (
//         <p>Car details not found.</p>
//       )}
//     </div>
//   );
// };

// export default CarDetails;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom'; // To get carId and use navigation
import axios from 'axios';
import './CarDetails.css';
import styles from './CustomerMenu1.module.css'; // Import styles for the header

const CarDetails = () => {
  const { carId } = useParams(); // Get carId from URL parameters
  const [car, setCar] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    fetchCarDetails();
  }, [carId]);

  const fetchCarDetails = async () => {
    setIsSpinning(true);
    const token = localStorage.getItem('token');

    try {
      const response = await axios.get(`http://localhost:8080/api/customer/car/${carId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const carData = {
        ...response.data,
        processedImage: `data:image/jpeg;base64,${response.data.returnedImage}`,
      };
      setCar(carData);
    } catch (error) {
      console.error('Error fetching car details:', error);
    } finally {
      setIsSpinning(false);
    }
  };

  const handleBookCar = () => {
    navigate(`/book-car/${carId}`, { state: { carId, price: car.price } }); // Navigate to BookCar with carId and price
  };

  const handleOut = () => {
    navigate(`/customer-menu`); // Change to the appropriate route
  };

  if (isSpinning) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Header Section */}
      <div className={styles.menuContainer}>
        <div className={styles.websiteName}>Car Rental Service</div>
        <nav className={styles.nav}>
        <Link to="/customer-menu" className={styles.navLink}>
            Home
          </Link>

          <Link to={`/customer/bookings/${localStorage.getItem('userId')}`} className={styles.navLink}>
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

      {/* Car Details Section */}
      <div className="car-details">
        {car ? (
          <div className="car-details-card">
            <img src={car.processedImage} alt={car.name} className="car-image" />
            <h2>{car.brand} - {car.name}</h2>
            <p>{car.description}</p>
            <h4>Price: ${car.price}</h4>
            <p>Year: {car.year}</p>
            <p>Color: {car.color}</p>
            <p>Transmission: {car.transmission}</p>

            {/* Button container for horizontal layout */}
            <div className="button-container">
              <button className="book-button" onClick={handleBookCar}>
                Book Car
              </button>
              <button className="cancel-button" onClick={handleOut}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <p>Car details not found.</p>
        )}
      </div>
    </div>
  );
};

export default CarDetails;
