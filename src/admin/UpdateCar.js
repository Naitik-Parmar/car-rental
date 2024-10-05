import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // For navigation and getting car ID
import axios from 'axios';
import styles from './updatecar.module.css';

const UpdateCar = () => {
  const { id } = useParams(); // Get car ID from URL
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    description: '',
    price: '',
    color: '',
    transmission: '',
    type: '',
    year: '',
  });
  const navigate = useNavigate(); // To navigate after saving
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the current car details to prefill the form
  useEffect(() => {
    const fetchCarDetails = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`http://localhost:8080/api/admin/car/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFormData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching car details:', error);
        setIsLoading(false);
      }
    };
    fetchCarDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.put(`http://localhost:8080/api/admin/car/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Car updated successfully');
      navigate('/menu'); // Redirect back to dashboard after update
    } catch (error) {
      console.error('Error updating car:', error);
      alert('Failed to update the car');
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.updateCarContainer}>
      <h2>Update Car</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Brand:
          <input type="text" name="brand" value={formData.brand} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
        </label>
        <label>
          Color:
          <input type="text" name="color" value={formData.color} onChange={handleInputChange} />
        </label>
        <label>
          Transmission:
          <input type="text" name="transmission" value={formData.transmission} onChange={handleInputChange} />
        </label>
        <label>
          Type:
          <input type="text" name="type" value={formData.type} onChange={handleInputChange} />
        </label>
        <label>
          Year:
          <input type="number" name="year" value={formData.year} onChange={handleInputChange} />
        </label>
        <button type="submit" className={styles.buttonPrimary}>Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateCar;
