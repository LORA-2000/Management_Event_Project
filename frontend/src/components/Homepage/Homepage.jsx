// src/pages/HomePage.jsx
/* import  { useContext } from 'react'; */
/* import { AuthContext } from '../../Context/Authcontext';  // Import AuthContext */
/* import { useNavigate } from 'react-router-dom';   */
import EventList from '../../components/EventList/EventList';



const HomePage = () => {
    return (
        <div className="home-page mt-5 mb-10">
            <section className="hero-section bg-slate-600 py-20">
                <h1 className="text-6xl font-bold text-center">Discover and Manage Events Easily!</h1>
                <p className="text-center text-2xl mt-2">Find the best events near you!</p>
            </section>

            <section className="event-list-section mt-8 mx-10">
                <h2 className="text-2xl font-semibold text-center">Upcoming Events</h2>
                <EventList />
            </section>
        </div>
    );
};

export default HomePage;















