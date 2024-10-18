import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './Context/Authcontext';  // Import AuthProvider
import Navbar from './components/Layout/Navbar/Navber'; // Include Navbar
import Footer from './components/Layout/Footer/Footer'; // Include Footer
import HomePage from './components/Homepage/Homepage';
import EventList from './components/EventList/EventList'; // Add other components
import EventForm from './components/EventList/EventCard'; // Add EventForm

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar /> {/* Include Navbar */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/events" element={<EventList />} /> {/* Add EventList route */}
                    <Route path="/create-event" element={<EventForm />} /> {/* Add EventForm route */}
                    {/* Add other routes as needed */}
                </Routes>
                <Footer /> {/* Include Footer */}
            </Router>
        </AuthProvider>
    );
};

export default App;
