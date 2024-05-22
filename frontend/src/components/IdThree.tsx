
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";
import img1 from "../images/kettle1.jpg";
import img2 from "../images/kettle2.webp";
import img3 from "../images/kettle3.webp";
import { Link, useNavigate } from "react-router-dom";

export const IdThree = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div className="py-4">
            <button
               onClick={function(){
                navigate("/receipt");
               }}
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Accept Deal
              </button>
              <button onClick={function(){
                navigate("/bot");
              }} type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">AI Chat Bot</button>
            </div>
            <div className="text-5xl font-extrabold">Electric Kettle</div>
            <div>Rs: 700</div>
            <div className="text-slate-500 pt-2">posted on 4th April 2024</div>
            <div className="pt-4">2 year old kettle, in decent condition.This electric kettle typically boasts a capacity of 1.7 liters, making it ideal for boiling enough water for several cups of tea or coffee at once. It operates with a power consumption of 1500 watts, ensuring rapid boiling within minutes. For user safety and convenience, it features an automatic shut-off function that activates once the water reaches boiling point, preventing overheating.</div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 py-4">
            <img className="w-60 h-60" src={img1} alt="image description" />
            <img className="w-60 h-60" src={img2} alt="image description" />
            <img className="w-60 h-60" src={img3} alt="image description" />
            </div>
          </div>

          <div className="col-span-4">
            <div className="text-slate-600 text-lg">Click below to view profile:</div>
                                <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                      <Link to={"/prof3"} className="flex items-center p-4">
                        <div className="pr-4 flex flex-col justify-center">
                          <Avatar size={"big"} name="Harshit Jaiswal" />
                        </div>
                        <div>
                          <div className="text-xl font-bold">Harshit Jaiswal</div>
                          <div className="pt-2 text-slate-500">
                            Discover the unparalleled experience in every purchase
                          </div>
                        </div>
                      </Link>
                    </div>

            <div className="mt-4">
              <form className="w-full px-5">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-t-lg p-3">
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4h16v12H4V4zm0 12v4h4l4-4H4z"
                      />
                    </svg>
                    <span className="ml-3 text-gray-900 dark:text-gray-200">Make a deal</span>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 space-y-4 h-40 overflow-y-auto">
                  {/* Add any content for the chat window here */}
                </div>
                <div className="flex items-center px-3 py-2 rounded-b-lg bg-gray-50 dark:bg-gray-700">
                  <button
                    type="button"
                    className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 18"
                    >
                      <path
                        fill="currentColor"
                        d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                      />
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                      />
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                      />
                    </svg>
                    <span className="sr-only">Upload image</span>
                  </button>
                  <button
                    type="button"
                    className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
                      />
                    </svg>
                    <span className="sr-only">Add emoji</span>
                  </button>
                  <textarea
                    id="chat"
                    rows={2}
                    className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message..."
                  ></textarea>
                 <button
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                    >
                        <svg
                            className="w-5 h-5 rotate-90 rtl:-rotate-90"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 20"
                        >
                            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                        </svg>
                        <span className="sr-only">Send message</span>
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
