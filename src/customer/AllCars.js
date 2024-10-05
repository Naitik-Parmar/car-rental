// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AllCars = () => {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:8080/api/customer/cars')
//       .then((response) => {
//         setCars(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching cars:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Available Cars</h2>
//       <ul>
//         {cars.map((car) => (
//           <li key={car.id}>
//             {car.name} - {car.model} ({car.year})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AllCars;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AllCars.module.css'; // Assuming you have a CSS file for styling

// const AllCars = () => {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem('token'); // Retrieve the token from localStorage

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`, // Add the Bearer token
//       },
//     };

//     axios
//       .get('http://localhost:8080/api/customer/cars', config)
//       .then((response) => {
//         console.log(response.data); // Log the API response for debugging
//         setCars(response.data); // Assuming the API returns an array of cars
//       })
//       .catch((error) => {
//         console.error('Error fetching cars:', error);
//       });
//   }, []);

//   return (
//     <div className="car-list-container">
//       <h2>Available Cars</h2>
//       {cars.length > 0 ? ( // Check if there are cars to display
//         <ul className="car-list">
//           {cars.map((car) => (
//             <li key={car.id} className="car-item">
//               <h3>{car.name}</h3>
//               <img
//                 src={car.image} // Display image
//                 alt={car.name}
//                 className="car-image"
//               />
              
//               <p><strong>Brand:</strong> {car.brand}</p>
//               <p><strong>Model:</strong> {car.model}</p>
//               <p><strong>Year:</strong> {car.year}</p>
//               <p><strong>Price:</strong> ${car.price}</p>
//               <p><strong>Transmission:</strong> {car.transmission}</p>
//               <p><strong>Type:</strong> {car.type}</p>
//               <p><strong>Color:</strong> {car.color}</p>
//               <p><strong>Description:</strong> {car.description}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No cars available at the moment.</p>
//       )}
//     </div>
//   );
// };

// // export default AllCars;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styles from './AllCars.module.css'; // Import your CSS module

// const AllCars = () => {
//   const [cars, setCars] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//       fetchCars(token);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const fetchCars = async (token) => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/customer/cars', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const carsData = response.data.map((car) => ({
//         ...car,
//         processedImage: `data:image/jpeg;base64,${car.image}`, // Assuming image is in base64 format
//       }));
//       setCars(carsData);
//     } catch (error) {
//       console.error('Error fetching cars:', error);
//     }
//   };

//   if (!isLoggedIn) {
//     return <p>Please log in to view the available cars.</p>;
//   }

//   return (
//     <div className={styles.carListContainer}>
//       <h2>Available Cars</h2>
//       {cars.length > 0 ? (
//         <ul className={styles.carList}>
//           {cars.map((car) => (
//             <li key={car.id} className={styles.carItem}>
//               <h3>{car.name}</h3>
//               <img
//                 src={car.processedImage}
//                 alt={car.name}
//                 className={styles.carImage}
//               />
//               <p><strong>Brand:</strong> {car.brand}</p>
//               <p><strong>Model:</strong> {car.model}</p>
//               <p><strong>Year:</strong> {car.year}</p>
//               <p><strong>Price:</strong> ${car.price}</p>
//               <p><strong>Transmission:</strong> {car.transmission}</p>
//               <p><strong>Type:</strong> {car.type}</p>
//               <p><strong>Color:</strong> {car.color}</p>
//               <p><strong>Description:</strong> {car.description}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No cars available at the moment.</p>
//       )}
//     </div>
//   );
// };

// export default AllCars;






























// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // For navigation
// import styles from './dashboard.module.css';
// import axios from 'axios';

// const AllCars = () => {
//   const [cars, setCars] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const navigate = useNavigate(); // Hook for navigation

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//       fetchCars(token);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const fetchCars = async (token) => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/customer/cars', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
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


//   if (!isLoggedIn) {
//     return <p>Please log in to view the dashboard</p>;
//   }

//   return (
//     <div className={styles.dashboardContainer}>
//       {cars.map((car) => (
//         <div className={styles.carCard} key={car.id}>
//           <div className={styles.carCardImage}>
//             <img src={car.processedImage} alt="Car" className={styles.profile} />
//           </div>
//           <div className={styles.carCardDetails}>
//             <h2 className={styles.carTitle}>
//               {car.brand} - {car.name}
//             </h2>
//             <p>{car.description}</p>
//             <hr />
//             <h5>
//               Price: <b>${car.price}</b> - Color: <b>{car.color}</b> - Transmission: <b>{car.transmission}</b> - Type: <b>{car.type}</b> - Year: <b>{car.year}</b>
//             </h5>
 
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllCars;

















// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // For navigation
// import styles from './AllCars.module.css';
// import axios from 'axios';

// const AllCars = () => {
//   const [cars, setCars] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate(); // Hook for navigation

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//       fetchCars(token);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const fetchCars = async (token) => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/customer/cars', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
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

//   if (!isLoggedIn) {
//     return <p>Please log in to view the dashboard</p>;
//   }

//   const handleViewCarDetails = (carId) => {
//     navigate(`/car-details/${carId}`); // Navigate to the car details page
//   };

//   return (
//     <div className={styles.dashboardContainer}>
//       {cars.map((car) => (
//         <div className={styles.carCard} key={car.id}>
//           <div className={styles.carCardImage}>
//             <img src={car.processedImage} alt="Car" className={styles.profile} />
//           </div>
//           <div className={styles.carCardDetails}>
//             <h2 className={styles.carTitle}>
//               {car.brand} - {car.name}
//             </h2>
//             {/* <p>{car.description}</p>
//             <hr />
//             <h5>
//               Price: <b>${car.price}</b> - Color: <b>{car.color}</b> - Transmission: <b>{car.transmission}</b> - Type: <b>{car.type}</b> - Year: <b>{car.year}</b>
//             </h5> */}
//             {/* <button className={styles.bookButton} onClick={() => handleBookCar(car.id)}>Book Car</button> Book Car Button */}
//             <button onClick={() => handleBookCar(car.id, car.price)}>Book Car</button>
//             <div> </div>
//             <button onClick={() => handleViewCarDetails(car.id)}>View Car Details</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllCars;


import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // For navigation
import styles from './AllCars.module.css';
import axios from 'axios';
import CustomerMenuStyles from './CustomerMenu1.module.css'; // Import your CSS for AppBar

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      fetchCars(token);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const fetchCars = async (token) => {
    try {
      const response = await axios.get('http://localhost:8080/api/customer/cars', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const carsData = response.data.map((car) => ({
        ...car,
        processedImage: `data:image/jpeg;base64,${car.returnedImage}`,
      }));
      setCars(carsData);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleBookCar = (carId, price) => {
    navigate(`/book-car/${carId}`, { state: { carId, price } });
  };

  if (!isLoggedIn) {
    return <p>Please log in to view the dashboard</p>;
  }

  const handleViewCarDetails = (carId) => {
    navigate(`/car-details/${carId}`); // Navigate to the car details page
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the JWT token
    navigate('/'); // Redirect to the login page
  };

  return (
    <div>
      {/* Header Section */}
      <div className={CustomerMenuStyles.menuContainer}>
        <div className={CustomerMenuStyles.websiteName}>Car Rental Service</div>
        <nav className={CustomerMenuStyles.nav}>
          <Link to="/customer-menu" className={CustomerMenuStyles.navLink}>
            Home
          </Link>
          <Link to={`/customer/bookings/${localStorage.getItem('userId')}`} className={CustomerMenuStyles.navLink}>
            Bookings
          </Link>
          <Link to="/customer/cars" className={CustomerMenuStyles.navLink}>
            Cars
          </Link>
          <Link to="/search/car/cust" className={CustomerMenuStyles.navLink}>
            Search
          </Link>
          <button className={CustomerMenuStyles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </div>

      {/* All Cars Section */}
      <div className={styles.dashboardContainer}>
        {cars.map((car) => (
          <div className={styles.carCard} key={car.id}>
            <div className={styles.carCardImage}>
              <img src={car.processedImage} alt="Car" className={styles.profile} />
            </div>
            <div className={styles.carCardDetails}>
              <h2 className={styles.carTitle}>
                {car.brand} - {car.name}
              </h2>
              <div></div>
              {/* Wrap buttons in a container with flex styles */}
  <div className={styles.buttonContainer}>
    <button onClick={() => handleBookCar(car.id, car.price)} className={styles.bookButton}>
      Book Car
    </button>
    <button onClick={() => handleViewCarDetails(car.id)} className={styles.viewButton}>
      View Car Details
    </button>
  </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCars;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Modal, Button } from 'semantic-ui-react'; // Import Modal and Button from Semantic UI
// import styles from './dashboard.module.css';
// import axios from 'axios';

// const AllCars = () => {
//   const [cars, setCars] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [selectedCar, setSelectedCar] = useState(null); // To store the selected car for booking
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [days, setDays] = useState(0);
//   const [openBookingModal, setOpenBookingModal] = useState(false); // State to control modal
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//       fetchCars(token);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const fetchCars = async (token) => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/customer/cars', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
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

//   const handleBookCar = (car) => {
//     setSelectedCar(car); // Set the selected car
//     setOpenBookingModal(true); // Open the booking modal
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
//       setTotalPrice(selectedCar.price * differenceInDays); // Calculate total price based on passed price
//     } else {
//       alert('Please select valid dates.');
//     }
//   };

//   const handleBooking = async () => {
//     const userId = localStorage.getItem('userId');
//     const token = localStorage.getItem('token');

//     if (!userId) {
//       console.error('User ID is missing! Ensure the user is logged in.');
//       return;
//     }

//     const bookingData = {
//       userId,
//       carId: selectedCar.id,
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
//       setOpenBookingModal(false); // Close the modal after booking
//       navigate('/customer/cars');
//     } catch (error) {
//       console.error('Error booking car:', error);
//       alert('Failed to book the car. Please try again.');
//     }
//   };

//   const handleCancelBooking = () => {
//     setOpenBookingModal(false); // Close the modal without booking
//   };

//   if (!isLoggedIn) {
//     return <p>Please log in to view the dashboard</p>;
//   }

//   return (
//     <div className={styles.dashboardContainer}>
//       {cars.map((car) => (
//         <div className={styles.carCard} key={car.id}>
//           <div className={styles.carCardImage}>
//             <img src={car.processedImage} alt="Car" className={styles.profile} />
//           </div>
//           <div className={styles.carCardDetails}>
//             <h2 className={styles.carTitle}>
//               {car.brand} - {car.name}
//             </h2>
//             <p>{car.description}</p>
//             <hr />
//             <h5>
//               Price: <b>${car.price}</b> - Color: <b>{car.color}</b> - Transmission: <b>{car.transmission}</b> - Type: <b>{car.type}</b> - Year: <b>{car.year}</b>
//             </h5>
//             <Button onClick={() => handleBookCar(car)}>Book Car</Button>
//           </div>
//         </div>
//       ))}

//       {/* Booking Modal */}
//       <Modal open={openBookingModal} onClose={() => setOpenBookingModal(false)}>
//         <Modal.Header>Book Car - {selectedCar?.name}</Modal.Header>
//         <Modal.Content>
//           <label>
//             From Date:
//             <input
//               type="date"
//               value={fromDate}
//               onChange={(e) => setFromDate(e.target.value)}
//             />
//           </label>
//           <label>
//             To Date:
//             <input
//               type="date"
//               value={toDate}
//               onChange={(e) => setToDate(e.target.value)}
//             />
//           </label>
//           <Button onClick={calculatePrice}>Calculate Price</Button>
//           {days > 0 && (
//             <div>
//               <p>Number of Days: {days}</p>
//               <p>Total Price: ${totalPrice}</p>
//             </div>
//           )}
//         </Modal.Content>
//         <Modal.Actions>
//           <Button onClick={handleBooking}>Confirm Booking</Button>
//           <Button onClick={handleCancelBooking}>Cancel</Button>
//         </Modal.Actions>
//       </Modal>
//     </div>
//   );
// };

// export default AllCars;
