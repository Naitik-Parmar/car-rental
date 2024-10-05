// import React from 'react';
// import styles from './CustomerMenu.module.css'; // Import the CSS module

// const CustomerMenu = () => {
//   return (
//     <div className={styles['menu-container']}>
//       <h2>Customer Dashboard</h2>
//       <ul className={styles['menu-list']}>
//         <li><a href="/Customerbookings">My Bookings</a></li>
//         <li><a href="/Searchcars">Browse Cars</a></li>
//         <li><a href="/profile">Profile</a></li>
//       </ul>
//     </div>
//   );
// };

// export default CustomerMenu;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './CustomerMenu.module.css'; // Import the CSS module

// const CustomerMenu = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Clear the JWT token
//     navigate('/login'); // Redirect to the login page
//   };

//   return (
//     <div className={styles['menu-container']}>
//       <h2>Customer Dashboard</h2>
//       <ul className={styles['menu-list']}>
//         <li><a href="/Customer/bookings/:id">My Bookings</a></li>
//         <li><a href="/customer/cars">Browse Cars</a></li>
//         <li><a href="/profile">Profile</a></li>
//         <li><button className={styles['logout-button']} onClick={handleLogout}>Logout</button></li> {/* Logout option */}
//       </ul>
//     </div>
//   );
// };

// export default CustomerMenu;














// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './CustomerMenu.module.css'; // Import the CSS module

// const CustomerMenu = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Clear the JWT token
//     localStorage.removeItem('userId'); // Clear the user ID as well
//     navigate('/login'); // Redirect to the login page
//   };

//   const userId = localStorage.getItem('userId'); // Assuming userId is stored in local storage

//   return (
//     <div className={styles['menu-container']}>
//       <h2>Customer Dashboard</h2>
//       <ul className={styles['menu-list']}>
//         <li><a href={`/customer/bookings/${userId}`}>My Bookings</a></li> {/* Include userId in the URL */}
//         <li><a href="/customer/cars">Browse Cars</a></li>
//         <li><a href="/search/car/cust">Search</a></li>
//         <li><button className={styles['logout-button']} onClick={handleLogout}>Logout</button></li>
//       </ul>
//     </div>
//   );
// };

// export default CustomerMenu;











// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CircularProgress,
//   Button,
// } from '@mui/material';
// import styles from './CustomerMenu.module.css'; // Import the CSS module

// const CustomerMenu = () => {
//   const navigate = useNavigate();
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [slideIndex, setSlideIndex] = useState(0);
//   const slideIntervalTime = 5000; // 5 seconds for slide transition

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//       return;
//     }

//     const fetchCars = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/customer/cars', {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.status === 401) {
//           localStorage.removeItem('token');
//           navigate('/login');
//           return;
//         }

//         const data = await response.json();
//         const processedCars = data.map((car) => ({
//           ...car,
//           processedImage: car.returnedImage
//             ? `data:image/jpeg;base64,${car.returnedImage}`
//             : 'defaultImageURL', // Set a default image if unavailable
//         }));
//         setCars(processedCars);
//       } catch (error) {
//         console.error('Error fetching cars:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, [navigate]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setSlideIndex((prevIndex) => (prevIndex + 1) % cars.length);
//     }, slideIntervalTime);

//     return () => clearInterval(intervalId); // Clear interval on unmount
//   }, [cars]);

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Clear the JWT token
//     localStorage.removeItem('userId'); // Clear the user ID as well
//     navigate('/login'); // Redirect to the login page
//   };

//   const userId = localStorage.getItem('userId'); // Assuming userId is stored in local storage

//   return (
//     <div className={styles['menu-container']}>
//       <h2>Customer Dashboard</h2>
//       <ul className={styles['menu-list']}>
//         <li><a href={`/customer/bookings/${userId}`}>My Bookings</a></li>
//         <li><a href="/customer/cars">Browse Cars</a></li>
//         <li><a href="/search/car/cust">Search</a></li>
//         <li><button className={styles['logout-button']} onClick={handleLogout}>Logout</button></li>
//       </ul>

//       {/* Slider Section */}
//       <div className={styles['slider']}>
//         {loading ? (
//           <CircularProgress />
//         ) : cars.length > 0 ? (
//           <>
//             <div className={styles['slides']}>
//               {cars.map((car, index) => (
//                 <img
//                   key={index}
//                   className={`${styles['slide']} ${slideIndex === index ? styles['displaySlide'] : ''}`}
//                   src={car.processedImage}
//                   alt={car.name}
//                 />
//               ))}
//             </div>
//             <Button className={styles['prev']} onClick={() => setSlideIndex((slideIndex - 1 + cars.length) % cars.length)}>
//               &#10094;
//             </Button>
//             <Button className={styles['next']} onClick={() => setSlideIndex((slideIndex + 1) % cars.length)}>
//               &#10095;
//             </Button>
//           </>
//         ) : (
//           <Typography variant="body1">No cars available at the moment.</Typography>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomerMenu;














// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './CustomerMenu.module.css'; // Import the CSS module

// const CustomerMenu = () => {
//   const navigate = useNavigate();
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [counter, setCounter] = useState(0);
//   const slideIntervalTime = 5000; // 5 seconds for slide transition

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//       return;
//     }

//     const fetchCars = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/customer/cars', {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.status === 401) {
//           localStorage.removeItem('token');
//           navigate('/login');
//           return;
//         }

//         const data = await response.json();
//         const processedCars = data.map((car) => ({
//           ...car,
//           processedImage: car.returnedImage
//             ? `data:image/jpeg;base64,${car.returnedImage}`
//             : 'defaultImageURL', // Set a default image if unavailable
//         }));
//         setCars(processedCars);
//       } catch (error) {
//         console.error('Error fetching cars:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, [navigate]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCounter((prevCounter) => (prevCounter + 1) % cars.length);
//     }, slideIntervalTime);

//     return () => clearInterval(intervalId); // Clear interval on unmount
//   }, [cars]);

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Clear the JWT token
//     localStorage.removeItem('userId'); // Clear the user ID as well
//     navigate('/login'); // Redirect to the login page
//   };

//   const userId = localStorage.getItem('userId'); // Assuming userId is stored in local storage

//   return (
//     <div className={styles['menu-container']}>
//       <h2>Customer Dashboard</h2>
//       <ul className={styles['menu-list']}>
//         <li><a href={`/customer/bookings/${userId}`}>My Bookings</a></li>
//         <li><a href="/customer/cars">Browse Cars</a></li>
//         <li><a href="/search/car/cust">Search</a></li>
//         <li><button className={styles['logout-button']} onClick={handleLogout}>Logout</button></li>
//       </ul>

//       {/* Slider Section */}
//       <div className={styles['slide-container']}>
//         {loading ? (
//           <div>Loading...</div>
//         ) : cars.length > 0 ? (
//           <>
//             <div className={styles['slides']}>
//               {cars.map((car, index) => (
//                 <img
//                   key={index}
//                   className={`${styles['slide']} ${counter === index ? styles['active'] : ''}`}
//                   src={car.processedImage}
//                   alt={car.name}
//                 />
//               ))}
//             </div>
//             <span className={styles['prev']} onClick={() => setCounter((counter - 1 + cars.length) % cars.length)}>&#10094;</span>
//             <span className={styles['next']} onClick={() => setCounter((counter + 1) % cars.length)}>&#10095;</span>
//           </>
//         ) : (
//           <div>No cars available at the moment.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomerMenu;












// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './CustomerMenu.module.css'; // Import the CSS module
// import { Link } from 'react-router-dom';

// const CustomerMenu = () => {
//   const navigate = useNavigate();
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [counter, setCounter] = useState(0);
//   const slideIntervalTime = 5000; // 5 seconds for slide transition

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//       return;
//     }

//     const fetchCars = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/customer/cars', {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.status === 401) {
//           localStorage.removeItem('token');
//           navigate('/login');
//           return;
//         }

//         const data = await response.json();
//         const processedCars = data.map((car) => ({
//           ...car,
//           processedImage: car.returnedImage
//             ? `data:image/jpeg;base64,${car.returnedImage}`
//             : 'defaultImageURL', // Replace with a valid default image URL
//         }));
//         setCars(processedCars);
//       } catch (error) {
//         console.error('Error fetching cars:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, [navigate]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCounter((prevCounter) => (prevCounter + 1) % cars.length);
//     }, slideIntervalTime);

//     return () => clearInterval(intervalId); // Clear interval on unmount
//   }, [cars]);

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Clear the JWT token
//     localStorage.removeItem('userId'); // Clear the user ID as well
//     navigate('/'); // Redirect to the login page
//   };

//   const userId = localStorage.getItem('userId'); // Assuming userId is stored in local storage
//   return (
//     <div className={styles['menu-container']}>
//       {/* Header Section with a different background color */}
//       <div className={styles['header-section']}>
//        <h2  >
        
//       {/* <img src="logo.png" alt="Your Alt Text" className={styles['header-image']} /> */}


//         </h2>
    
//         <ul className={styles['menu-list']}>
        
 

// <div className="menu-container">
      //   <div className="website-name">Car Rental Service</div>
      //   <nav>
      //     {/* <Link to="/dashboard">Dashboard</Link>  */}
      //     <Link to={`/customer/bookings/${userId}`}>Bookings</Link>

      //     <Link to="/customer/cars">Cars</Link> 
      //     <Link to="/search/car/cust">Search</Link>
      //     <button className="logout-button" onClick={handleLogout}>Logout</button>
      //     <span></span>
      //   </nav>
      // </div>
 
       
//         </ul>
//       </div>
//   <div>
//     <div>
      

//     </div>
//   </div>

//   {/* Section above the slider */}
//   <div className={styles['wordings-above-slider']}>
//     <h1>Drive the dream, own the road.</h1>
//     <h2>Discover your next adventure, one rental at a time.</h2>
//     <p>Seamlessly book the car that defines your journey.</p>
//   </div>

//       {/* Slider Section with a different background color */}
//       <div className={styles['slide-section']}>
//         {loading ? (
//           <div>Loading...</div>
//         ) : cars.length > 0 ? (
//           <>
//             <div className={styles['slides']}>
//               {cars.map((car, index) => (
//                 <img
//                   key={index}
//                   className={`${styles['slide']} ${counter === index ? styles['active'] : ''}`}
//                   src={car.processedImage}
//                   alt={car.name}
//                   style={{ display: counter === index ? 'block' : 'none' }} // Only display active slide
//                 />
//               ))}
//             </div>
//             <span className={styles['prev']} onClick={() => setCounter((counter - 1 + cars.length) % cars.length)}>&#10094;</span>
//             <span className={styles['next']} onClick={() => setCounter((counter + 1) % cars.length)}>&#10095;</span>
//           </>
//         ) : (
//           <div>No cars available at the moment.</div>
//         )}
//       </div>
// <div></div>
//         {/* Section below the slider */}
//   <div className={styles['wordings-below-slider']}>
//     <h2>Your perfect ride is just a click away.</h2>
//     <h3>From luxury to everyday drives – we’ve got you covered.</h3>
//     <p>No matter the destination, travel with comfort and style.</p>
//   </div>
//     </div>
//   );
  
  
// };

// export default CustomerMenu;












// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, TextField } from '@mui/material';
// import { Link } from 'react-router-dom';
// import styles from './CustomerMenu1.module.css'; // Assuming you are using a CSS module

// const CustomerMenu = ({ userId, handleLogout }) => {
//   return (
//     <div className={styles.menuContainer}>
//       {/* AppBar for the header */}
//       <AppBar position="static" className={styles.appBar}>
//         <Toolbar className={styles.toolbar}>
//           {/* Website Name */}
//           <Typography variant="h6" className={styles.websiteName}>
//             Car Rental Service
//           </Typography>

//           {/* Navigation Links */}
//           <nav className={styles.nav}>
//             <Link to={`/customer/bookings/${userId}`} className={styles.navLink}>Bookings</Link>
//             <Link to="/customer/cars" className={styles.navLink}>Browse Cars</Link>
//             <Link to="/search/car/cust" className={styles.navLink}>Search</Link>
//             <Button className={styles.logoutButton} onClick={handleLogout}>Logout</Button>
//           </nav>
//         </Toolbar>
//       </AppBar>

//       {/* Hero Section */}
//       <div className={styles.heroSection}>
//         <img src="car2.jpg" alt="Car" className={styles.heroImage} /> {/* Replace with the actual image */}
//         <div className={styles.heroText}>
//           <Typography variant="h4">We Rent the Highest Caliber Automobiles</Typography>
//           <Typography variant="body1">
//             Luxury cars for rent. Enjoy driving the best in class vehicles for your next journey.
//           </Typography>
//           <div className={styles.buttons}>
//             <Button variant="contained" color="primary" className={styles.ctaButton}>
//               Rent Now
//             </Button>
//             <Button variant="outlined" color="primary" className={styles.learnMoreButton}>
//               Learn More
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Search Section */}
//       <div className={styles.searchSection}>
//         <form className={styles.searchForm}>
//           <TextField
//             label="Where to Pick Up"
//             variant="outlined"
//             className={styles.textField}
//           />
//           <TextField
//             label="Pick Up Date"
//             type="date"
//             defaultValue="2024-01-01"
//             InputLabelProps={{ shrink: true }}
//             className={styles.textField}
//           />
//           <TextField
//             label="Return Date"
//             type="date"
//             defaultValue="2024-01-07"
//             InputLabelProps={{ shrink: true }}
//             className={styles.textField}
//           />
//           <Button type="submit" variant="contained" color="primary" className={styles.searchButton}>
//             Search
//           </Button>
//         </form>
//       </div>

//       {/* Car Brands Section */}
//       <div className={styles.carBrands}>
//         <img src="honda_logo_url" alt="Honda" className={styles.brandLogo} />
//         <img src="toyota_logo_url" alt="Toyota" className={styles.brandLogo} />
//         <img src="gmc_logo_url" alt="GMC" className={styles.brandLogo} />
//         <img src="tesla_logo_url" alt="Tesla" className={styles.brandLogo} />
//       </div>
//     </div>
//   );
// };

// export default CustomerMenu;








import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CustomerMenu1.module.css'; // Assuming you're using a CSS module

const CustomerMenu = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const slideIntervalTime = 5000; // 5 seconds for slide transition
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId'); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/customer/cars', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
          return;
        }

        const data = await response.json();
        const processedCars = data.map((car) => ({
          ...car,
          processedImage: car.returnedImage
            ? `data:image/jpeg;base64,${car.returnedImage}`
            : 'defaultImageURL', // Replace with a valid default image URL
        }));
        setCars(processedCars);
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [navigate]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % cars.length);
    }, slideIntervalTime);

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [cars]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the JWT token
    localStorage.removeItem('userId'); // Clear the user ID as well
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className={styles.menuContainer}>
      {/* Header Section */}
 {/* Header Section */}
 
<div className={styles.menuContainer}>
  <div className={styles.websiteName}>Car Rental Service</div>
  <nav className={styles.nav}>
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

      {/* Slider Section (replacing Hero Section) */}
      <div className={styles.heroSection}>
        {loading ? (
          <div>Loading...</div>
        ) : cars.length > 0 ? (
          <div className={styles.sliderContainer}>
            <div className={styles.slides}>
              {cars.map((car, index) => (
                <img
                  key={index}
                  className={`${styles.slide} ${counter === index ? styles.active : ''}`}
                  src={car.processedImage}
                  alt={car.name}
                  style={{
                    display: counter === index ? 'block' : 'none',
                    width: '100%', // Make sure it takes full width of the hero section
                    height: 'auto', // Maintain aspect ratio
                  }}
                />
              ))}
            </div>
            <span
              className={styles.prev}
              onClick={() => setCounter((counter - 1 + cars.length) % cars.length)}
            >
              &#10094;
            </span>
            <span
              className={styles.next}
              onClick={() => setCounter((counter + 1) % cars.length)}
            >
              &#10095;
            </span>
          </div>
        ) : (
          <div>No cars available at the moment.</div>
        )}
      </div>

      <div className={styles.promoSection}>
  <h2>Discover the Best Car Rental Deals!</h2>
  <p>
    Explore our wide range of vehicles, from economy to luxury. Whether you're planning a weekend getaway or a business trip, we have the perfect car for you.
  </p>
  <p>
    Book your ride today and enjoy seamless, reliable, and affordable car rentals with unmatched service. Your journey starts here!
  </p>
</div>



    {/* Car Brands Section */}
<div className={styles.carBrands}>
  <img src="honda.jpg" alt="Honda" className={styles.brandLogo} />
  <img src="toyota.jpg" alt="Toyota" className={styles.brandLogo} />
  <img src="GMC.jpg" alt="GMC" className={styles.brandLogo} />
  <img src="tesla.jpg" alt="Tesla" className={styles.brandLogo} />
</div>

    </div>
  );
};

export default CustomerMenu;
