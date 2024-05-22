import { Link, useNavigate, useLocation } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="border-b flex justify-between px-10 py-4 items-center">
            <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
                Ebay@IIT-K
            </Link>
            {location.pathname === '/blogs' && (
                <div className="mx-3">
                    <input
                        type="text"
                        className="w-64 px-2 py-1 border border-gray-300 rounded-md"
                        placeholder="Search for products..."
                    />
                </div>
            )}
            <div className="flex items-center">
                <Link to={'/publish'}>
                    <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none 
                    focus:ring-4 focus:ring-green-300 font-medium rounded-full 
                    text-sm px-5 py-2.5 text-center mb-2">New</button>
                </Link>
                <button onClick={() => navigate("/")} type="button" className="mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log out</button>
                <div className="mr-4">
                    <Avatar size={"big"} name="Harkirat" />
                </div>
            </div>
        </div>
    );
}
