export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 flex-shrink-0 flex justify-center">
            <div className="container mx-auto text-center">
                <p>&copy; 2025 My Store.Vladyslav Petrenko. All rights reserved.</p>
                <p>Follow us on social media:</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="text-white hover:text-gray-400">Facebook</a>
                    <a href="#" className="text-white hover:text-gray-400">Twitter</a>
                    <a href="#" className="text-white hover:text-gray-400">Instagram</a>
                </div>
            </div>
        </footer>
    );
}