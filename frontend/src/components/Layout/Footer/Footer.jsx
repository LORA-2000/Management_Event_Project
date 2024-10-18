
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Event Manager. All rights reserved.</p>
                <div className="mt-2">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-400 hover:text-white">
                        LinkedIn
                    </a>
                    <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-400 hover:text-white">
                        GitHub
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-400 hover:text-white">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
