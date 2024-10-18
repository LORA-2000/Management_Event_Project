// src/services/EventServices.js
import axios from 'axios';

// Define the base URL of your Django API
const API_URL = 'http://127.0.0.1:8000/api/events/';

// Function to fetch all events from the backend
export const getEvents = async () => {
    try {
        const response = await axios.get(API_URL);  // GET request to the events API
        return response.data;  // Return the data from the API
    } catch (error) {
        console.error('Error fetching events:', error);  // Handle any errors
        throw error;
    }
};

// Function to create a new event (only for admin use)
export const createEvent = async (eventData) => {
    try {
        const response = await axios.post(API_URL + 'create/', eventData);  // POST request to create event
        return response.data;
    } catch (error) {
        console.error('Error creating event:', error);
        throw error;
    }
};
