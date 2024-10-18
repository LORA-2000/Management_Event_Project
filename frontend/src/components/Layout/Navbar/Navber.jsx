
const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left: Title */}
                <div className="text-lg font-bold">
                    <a href="/">Event Manager</a>
                </div>

                {/* Center: Search Bar */}
                <div className="flex-grow mx-4">
                    <input
                        type="text"
                        placeholder="Search events..."
                        className="w-full p-2 rounded-md text-gray-700 focus:outline-none"
                    />
                </div>

                {/* Right: Login Button */}
                <div>
                    <a href="/login" className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                        Log In
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
