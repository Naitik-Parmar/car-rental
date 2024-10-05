// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './searchcar.css';

// const CustomerSearchCar = () => {
//   const [brands, setBrands] = useState(['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi', 'Lexus']);
//   const [types, setTypes] = useState(['Sports Car', 'Diesel', 'Crossover', 'Luxury Car']);
//   const [colors, setColors] = useState(['Red', 'Blue', 'Brown', 'Green']);
//   const [transmissions, setTransmissions] = useState(['Manual', 'Automatic']);
//   const [selectedBrand, setSelectedBrand] = useState('');
//   const [selectedType, setSelectedType] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [selectedTransmission, setSelectedTransmission] = useState('');
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Retrieve JWT token from localStorage
//   const token = localStorage.getItem('token'); // Updated to match PostCar token retrieval

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         'http://localhost:8080/api/customer/car/search/cars',
//         {
//           brand: selectedBrand,
//           type: selectedType,
//           color: selectedColor,
//           transmission: selectedTransmission,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Authorization header with Bearer token
//             'Content-Type': 'application/json', // Optional, ensures request is in JSON format
//           },
//         }
//       );
//       setCars(response.data.carDtoList);
//     } catch (error) {
//       console.error('Error searching cars:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="search-car-container">
//       <h1 className="search-title">Search Car</h1>

//       <div className="search-form">
//         <select onChange={(e) => setSelectedBrand(e.target.value)} value={selectedBrand}>
//           <option value="">Select Brand</option>
//           {brands.map((brand) => (
//             <option key={brand} value={brand}>
//               {brand}
//             </option>
//           ))}
//         </select>

//         <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
//           <option value="">Select Type</option>
//           {types.map((type) => (
//             <option key={type} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>

//         <select onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor}>
//           <option value="">Select Color</option>
//           {colors.map((color) => (
//             <option key={color} value={color}>
//               {color}
//             </option>
//           ))}
//         </select>

//         <select onChange={(e) => setSelectedTransmission(e.target.value)} value={selectedTransmission}>
//           <option value="">Select Transmission</option>
//           {transmissions.map((transmission) => (
//             <option key={transmission} value={transmission}>
//               {transmission}
//             </option>
//           ))}
//         </select>

//         <button onClick={handleSearch} className="search-btn">
//           {loading ? 'Searching...' : 'Search'}
//         </button>
//       </div>

//       {cars.length > 0 && (
//         <div className="car-list">
//           {cars.map((car) => (
//             <div key={car.id} className="car-card">
//               <img src={`data:image/jpeg;base64,${car.returnedImage}`} alt={car.name} className="car-img" />
//               <h2>{car.name}</h2>
//               <p>{car.brand}</p>
//               <p>{car.type}</p>
//               <p>{car.color}</p>
//               <p>{car.transmission}</p>
//               <p>{car.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomerSearchCar;














// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './searchcar.css'; // The CSS you provided

// const CustomerSearchCar = () => {
//   const [brands, setBrands] = useState(['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi', 'Lexus']);
//   const [types, setTypes] = useState(['Sports Car', 'Diesel', 'Crossover', 'Luxury Car']);
//   const [colors, setColors] = useState(['Red', 'Blue', 'Brown', 'Green']);
//   const [transmissions, setTransmissions] = useState(['Manual', 'Automatic']);
//   const [selectedBrand, setSelectedBrand] = useState('');
//   const [selectedType, setSelectedType] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [selectedTransmission, setSelectedTransmission] = useState('');
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const token = localStorage.getItem('token'); // Retrieve JWT token from localStorage

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         'http://localhost:8080/api/customer/car/search/cars',
//         {
//           brand: selectedBrand,
//           type: selectedType,
//           color: selectedColor,
//           transmission: selectedTransmission,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           }
//         }
//       );
//       setCars(response.data.carDtoList);
//     } catch (error) {
//       console.error('Error searching cars:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//  <div className='ssbody'>    
//     <div className="search-car-container">
//       <h1 className="search-title">Search Car</h1>

//       <div className="search-form">
//         <select onChange={(e) => setSelectedBrand(e.target.value)} value={selectedBrand}>
//           <option value="">Select Brand</option>
//           {brands.map((brand) => (
//             <option key={brand} value={brand}>
//               {brand}
//             </option>
//           ))}
//         </select>

//         <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
//           <option value="">Select Type</option>
//           {types.map((type) => (
//             <option key={type} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>

//         <select onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor}>
//           <option value="">Select Color</option>
//           {colors.map((color) => (
//             <option key={color} value={color}>
//               {color}
//             </option>
//           ))}
//         </select>

//         <select onChange={(e) => setSelectedTransmission(e.target.value)} value={selectedTransmission}>
//           <option value="">Select Transmission</option>
//           {transmissions.map((transmission) => (
//             <option key={transmission} value={transmission}>
//               {transmission}
//             </option>
//           ))}
//         </select>

//         <button onClick={handleSearch} className="search-btn">
//           {loading ? 'Searching...' : 'Search'}
//         </button>
//       </div>

//       {cars.length > 0 && (
//         <div className="car-list">
//           {cars.map((car) => (
//             <div key={car.id} className="car-card chocolat-zoomable">
//               <div className="chocolat-wrapper">
//                 <div className="chocolat-image-wrapper">
//                   <img src={`data:image/jpeg;base64,${car.returnedImage}`} alt={car.name} className="chocolat-img car-img" />
//                 </div>
//                 <h2>{car.name}</h2>
//                 <p>Brand: {car.brand}</p>
//                 <p>Type: {car.type}</p>
//                 <p>Color: {car.color}</p>
//                 <p>Transmission: {car.transmission}</p>
//                 <p>Price: {car.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default CustomerSearchCar;









// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // For navigation
// import axios from 'axios';
// import './searchcar.css'; // The CSS you provided

// const CustomerSearchCar = () => {
//   const [brands, setBrands] = useState(['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi', 'Lexus']);
//   const [types, setTypes] = useState(['Sports Car', 'Diesel', 'Crossover', 'Luxury Car']);
//   const [colors, setColors] = useState(['Red', 'Blue', 'Brown', 'Green']);
//   const [transmissions, setTransmissions] = useState(['Manual', 'Automatic']);
//   const [selectedBrand, setSelectedBrand] = useState('');
//   const [selectedType, setSelectedType] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [selectedTransmission, setSelectedTransmission] = useState('');
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const token = localStorage.getItem('token'); // Retrieve JWT token from localStorage
//   const navigate = useNavigate(); // For navigation

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         'http://localhost:8080/api/customer/car/search/cars',
//         {
//           brand: selectedBrand,
//           type: selectedType,
//           color: selectedColor,
//           transmission: selectedTransmission,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           }
//         }
//       );
//       setCars(response.data.carDtoList);
//     } catch (error) {
//       console.error('Error searching cars:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleViewCar = (carId) => {
//     navigate(`/car-details/${carId}`); // Navigate to the CarDetails page with the carId
//   };

//   return (
//     <div className='ssbody'>    
//       <div className="search-car-container">
//         <h1 className="search-title">Search Car</h1>

//         <div className="search-form">
//           <select onChange={(e) => setSelectedBrand(e.target.value)} value={selectedBrand}>
//             <option value="">Select Brand</option>
//             {brands.map((brand) => (
//               <option key={brand} value={brand}>
//                 {brand}
//               </option>
//             ))}
//           </select>

//           <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
//             <option value="">Select Type</option>
//             {types.map((type) => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>

//           <select onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor}>
//             <option value="">Select Color</option>
//             {colors.map((color) => (
//               <option key={color} value={color}>
//                 {color}
//               </option>
//             ))}
//           </select>

//           <select onChange={(e) => setSelectedTransmission(e.target.value)} value={selectedTransmission}>
//             <option value="">Select Transmission</option>
//             {transmissions.map((transmission) => (
//               <option key={transmission} value={transmission}>
//                 {transmission}
//               </option>
//             ))}
//           </select>

//           <button onClick={handleSearch} className="search-btn">
//             {loading ? 'Searching...' : 'Search'}
//           </button>
//         </div>

//         {cars.length > 0 && (
//           <div className="car-list">
//             {cars.map((car) => (
//               <div key={car.id} className="car-card chocolat-zoomable">
//                 <div className="chocolat-wrapper">
//                   <div className="chocolat-image-wrapper">
//                     <img src={`data:image/jpeg;base64,${car.returnedImage}`} alt={car.name} className="chocolat-img car-img" />
//                   </div>
//                   <h2>{car.name}</h2>
//                   <p>Brand: {car.brand}</p>
//                   <p>Type: {car.type}</p>
//                   <p>Color: {car.color}</p>
//                   <p>Transmission: {car.transmission}</p>
//                   <p>Price: {car.price}</p>

//                   {/* Add View Car Button */}
//                   <button onClick={() => handleViewCar(car.id)} className="view-car-btn">
//                     View Car
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomerSearchCar;





import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';
import '../admin/searchcar.css'; // Your CSS file
import styles from './CustomerMenu1.module.css'; // CSS module for AppBar

const CustomerSearchCar = ({ userId }) => {
  const [brands, setBrands] = useState(['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi', 'Lexus']);
  const [types, setTypes] = useState(['Sports Car', 'Diesel', 'Crossover', 'Luxury Car']);
  const [colors, setColors] = useState(['Red', 'Blue', 'Brown', 'Green']);
  const [transmissions, setTransmissions] = useState(['Manual', 'Automatic']);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedTransmission, setSelectedTransmission] = useState('');
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('token'); // Retrieve JWT token from localStorage
  const navigate = useNavigate(); // For navigation

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:8080/api/customer/car/search/cars',
        {
          brand: selectedBrand,
          type: selectedType,
          color: selectedColor,
          transmission: selectedTransmission,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );
      setCars(response.data.carDtoList);
    } catch (error) {
      console.error('Error searching cars:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewCar = (carId) => {
    navigate(`/car-details/${carId}`); // Navigate to the CarDetails page with the carId
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

      {/* Search Car Section */}
      <div className="ssbody">
        <div className="search-car-container">
          <h1 className="search-title">Search Car</h1>

          <div className="search-form">
            <select onChange={(e) => setSelectedBrand(e.target.value)} value={selectedBrand}>
              <option value="">Select Brand</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>

            <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
              <option value="">Select Type</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <select onChange={(e) => setSelectedColor(e.target.value)} value={selectedColor}>
              <option value="">Select Color</option>
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>

            <select onChange={(e) => setSelectedTransmission(e.target.value)} value={selectedTransmission}>
              <option value="">Select Transmission</option>
              {transmissions.map((transmission) => (
                <option key={transmission} value={transmission}>
                  {transmission}
                </option>
              ))}
            </select>

            <button onClick={handleSearch} className="search-btn">
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>

          {cars.length > 0 && (
            <div className="car-list">
              {cars.map((car) => (
                <div key={car.id} className="car-card chocolat-zoomable">
                  <div className="chocolat-wrapper">
                    <div className="chocolat-image-wrapper">
                      <img src={`data:image/jpeg;base64,${car.returnedImage}`} alt={car.name} className="chocolat-img car-img" />
                    </div>
                    <h2>{car.name}</h2>
                    <p>Brand: {car.brand}</p>
                    <p>Type: {car.type}</p>
                    <p>Color: {car.color}</p>
                    <p>Transmission: {car.transmission}</p>
                    <p>Price: {car.price}</p>

                    {/* Add View Car Button */}
                    <button onClick={() => handleViewCar(car.id)} className="view-car-btn">
                      View Car
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerSearchCar;
