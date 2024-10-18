// src/Context/AuthContext.jsx
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes

// Create the AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // Define the admin state (without setIsAdmin, if not used)
    const [isAdmin] = useState(true);  // Default: Admin is true for testing

    // Function to check if the current user is an admin
    const isAdminUser = () => {
        return isAdmin;
    };

    return (
        <AuthContext.Provider value={{ isAdmin: isAdminUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// PropTypes validation for the 'children' prop
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
