// // import React from "react";

// // const Dashboard  = () =>
// // {


// //     return (<>
    
// //     </>)
// // }
// // export default Dashboard;

// import React, { useEffect, useState } from 'react';
// import styles from './dashboard.module.css';
// import axios from 'axios'; // Assuming you're using axios for HTTP requests

// const Dashboard = () => {
//   const [cars, setCars] = useState([]);

//   // Fetch all cars on component mount
//   useEffect(() => {
//     getAllCars();
//   }, []);

//   const getAllCars = async () => {
//     try {
//       const response = await axios.get('/api/admin/cars'); // Adjust the API endpoint as per your server
//       const carsData = response.data.map((car) => ({
//         ...car,
//         processedImage: `data:image/jpeg;base64,${car.returnedImage}`
//       }));
//       setCars(carsData);
//     } catch (error) {
//       console.error('Error fetching cars:', error);
//     }
//   };

//   const deleteCar = async (id) => {
//     try {
//       await axios.delete(`/api/admin/cars/${id}`);
//       setCars((prevCars) => prevCars.filter((car) => car.id !== id));
//       alert('Car deleted successfully');
//     } catch (error) {
//       console.error('Error deleting car:', error);
//       alert('Failed to delete the car');
//     }
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
//             <p>{car.description}</p>
//             <hr />
//             <h5>
//               Price: <b>${car.price}</b> - Color: <b>{car.color}</b> - Transmission: <b>{car.transmission}</b> - Type: <b>{car.type}</b> - Year: <b>{car.year}</b>
//             </h5>
//             <div className={styles.actionButtons}>
//               <button
//                 className={styles.buttonPrimary}
//                 onClick={() => window.location.href = `/admin/car/${car.id}`}
//               >
//                 Update
//               </button>
//               <button className={styles.buttonDanger} onClick={() => deleteCar(car.id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dashboard;




















// import React, { useEffect, useState } from 'react';
// import styles from './dashboard.module.css';
// import axios from 'axios';

// const Dashboard = () => {
//   const [cars, setCars] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Fetch all cars once the admin logs in
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
//       const response = await axios.get('http://localhost:8080/api/admin/cars', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       const carsData = response.data.map((car) => ({
//         ...car,
//         processedImage: `data:image/jpeg;base64,${car.returnedImage}`
//       }));
//       setCars(carsData);
//     } catch (error) {
//       console.error('Error fetching cars:', error);
//     }
//   };

//   const deleteCar = async (id) => {
//     const token = localStorage.getItem('token');
//     try {
//       await axios.delete(`http://localhost:8080/api/admin/car/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setCars((prevCars) => prevCars.filter((car) => car.id !== id));
//       alert('Car deleted successfully');
//     } catch (error) {
//       console.error('Error deleting car:', error);
//       alert('Failed to delete the car');
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
//             <div className={styles.actionButtons}>
//               <button
//                 className={styles.buttonPrimary}
//                 onClick={() => window.location.href = `/admin/car/${car.id}`}
//               >
//                 Update
//               </button>
//               <button className={styles.buttonDanger} onClick={() => deleteCar(car.id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useEffect, useState } from 'react';
// import styles from './dashboard.module.css';
// import axios from 'axios';

// const Dashboard = () => {
//   const [cars, setCars] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [editingCarId, setEditingCarId] = useState(null); // ID of the car being edited
//   const [formData, setFormData] = useState({
//     name: '',
//     brand: '',
//     description: '',
//     price: '',
//     color: '',
//     transmission: '',
//     type: '',
//     year: '',
//   });

//   // Fetch all cars once the admin logs in
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
//       const response = await axios.get('http://localhost:8080/api/admin/cars', {
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

//   const deleteCar = async (id) => {
//     const token = localStorage.getItem('token');
//     try {
//       await axios.delete(`http://localhost:8080/api/admin/car/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setCars((prevCars) => prevCars.filter((car) => car.id !== id));
//       alert('Car deleted successfully');
//     } catch (error) {
//       console.error('Error deleting car:', error);
//       alert('Failed to delete the car');
//     }
//   };

//   // Start editing a car
//   const editCar = (car) => {
//     setEditingCarId(car.id); // Set the car ID for editing
//     setFormData({
//       name: car.name,
//       brand: car.brand,
//       description: car.description,
//       price: car.price,
//       color: car.color,
//       transmission: car.transmission,
//       type: car.type,
//       year: car.year,
//     });
//   };

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Submit the updated car
//   const updateCar = async () => {
//     const token = localStorage.getItem('token');
//     try {
//       await axios.put(`http://localhost:8080/api/admin/car/${editingCarId}`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       alert('Car updated successfully');
//       // Reset after successful update
//       setEditingCarId(null);
//       fetchCars(token);
//     } catch (error) {
//       console.error('Error updating car:', error);
//       alert('Failed to update the car');
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
//             <div className={styles.actionButtons}>
//               <button className={styles.buttonPrimary} onClick={() => editCar(car)}>
//                 Update
//               </button>
//               <button className={styles.buttonDanger} onClick={() => deleteCar(car.id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Conditionally render the update form */}
//       {editingCarId && (
//         <div className={styles.updateForm}>
//           <h3>Edit Car</h3>
//           <label>
//             Name:
//             <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
//           </label>
//           <label>
//             Brand:
//             <input type="text" name="brand" value={formData.brand} onChange={handleInputChange} />
//           </label>
//           <label>
//             Description:
//             <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
//           </label>
//           <label>
//             Price:
//             <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
//           </label>
//           <label>
//             Color:
//             <input type="text" name="color" value={formData.color} onChange={handleInputChange} />
//           </label>
//           <label>
//             Transmission:
//             <input type="text" name="transmission" value={formData.transmission} onChange={handleInputChange} />
//           </label>
//           <label>
//             Type:
//             <input type="text" name="type" value={formData.type} onChange={handleInputChange} />
//           </label>
//           <label>
//             Year:
//             <input type="number" name="year" value={formData.year} onChange={handleInputChange} />
//           </label>
//           <button className={styles.buttonPrimary} onClick={updateCar}>
//             Save Changes
//           </button>
//           <button className={styles.buttonDanger} onClick={() => setEditingCarId(null)}>
//             Cancel
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import styles from './dashboard.module.css';
import axios from 'axios';

const Dashboard = () => {
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
      const response = await axios.get('http://localhost:8080/api/admin/cars', {
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

  const deleteCar = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:8080/api/admin/car/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
      alert('Car deleted successfully');
    } catch (error) {
      console.error('Error deleting car:', error);
      alert('Failed to delete the car');
    }
  };

  if (!isLoggedIn) {
    return <p>Please log in to view the dashboard</p>;
  }

  return (
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
            <p>{car.description}</p>
            <hr />
            <h5>
              Price: <b>${car.price}</b> - Color: <b>{car.color}</b> - Transmission: <b>{car.transmission}</b> - Type: <b>{car.type}</b> - Year: <b>{car.year}</b>
            </h5>
            <div className={styles.actionButtons}>
              <button
                className={styles.buttonPrimary}
                onClick={() => navigate(`/update-car/${car.id}`)} // Navigate to UpdateCar page
              >
                Update
              </button>
              <button className={styles.buttonDanger} onClick={() => deleteCar(car.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
