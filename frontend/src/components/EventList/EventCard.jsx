import PropTypes from 'prop-types';

const EventCard = ({ event }) => {
    const handleBookTicket = () => {
        // Implement your ticket booking logic here
        alert(`Booking ticket for ${event.title}`);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4">
            <h2 className="text-2xl font-semibold">{event.title}</h2>
            <p>{event.description}</p>
            <p className="text-gray-600">{event.location}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p className="text-xl font-bold">${event.ticket_price}</p>
            <button 
                className="bg-blue-500 text-white p-2 rounded mt-2" 
                onClick={handleBookTicket}
            >
                Book Ticket
            </button>
        </div>
    );
};

// Add PropTypes for prop validation
EventCard.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,  // Assuming date is a string
        ticket_price: PropTypes.number.isRequired,  // Use `ticket_price` based on backend
    }).isRequired,
};

export default EventCard;
