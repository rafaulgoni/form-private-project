import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className=" container mx-auto border min-h-screen">
            <div className="text-center pt-20">
                <h1 className="font-extrabold text-2xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">বন্ধু তোমার জন্য একটা কথা...</h1>
                <Link to="/register" className="relative inline-block px-4 py-2 font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">Register</span>
                </Link>
            </div>

        </div>
    );
};

export default Home;