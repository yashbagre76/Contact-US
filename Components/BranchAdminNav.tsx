import React, { useState } from "react";
import { Bell, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Profile from "../assets/user.png";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <nav className="px-6 py-3 flex items-center justify-between fixed top-0 left-0 md:left-64 w-full md:w-[calc(100%-16rem)] bg-white shadow-md z-40">
      {/* Left Side Navigation */}
      <div>
        <ul className="flex items-center gap-20 text-gray-700">
          {/* Booking Dropdown */}
          <li
            className="relative cursor-pointer font-bold hover:text-gray-900 transition"
            onMouseEnter={() => setBookingOpen(true)}
            onMouseLeave={() => setBookingOpen(false)}
          >
            Booking
            {bookingOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg text-gray-700">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate("/check-in")}
                >
                  Check-In
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate("/check-out")}
                >
                  Check-Out
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate("/reservation")}
                >
                  Reservation
                </li>
              </ul>
            )}
          </li>
          <li
            className="cursor-pointer font-bold hover:text-gray-900 transition"
            onClick={() => navigate("/Reports")}
          >
            Reports
          </li>
          <li
            className="cursor-pointer font-bold hover:text-gray-900 transition"
            onClick={() => navigate("/NightPost")}
          >
            Night Post
          </li>
          <li
            className="cursor-pointer font-bold hover:text-gray-900 transition"
            onClick={() => navigate("/RoomTransfer")}
          >
            Room Transfer
          </li>
          <li
            className="cursor-pointer font-bold hover:text-gray-900 transition"
            onClick={() => navigate("/CompanyPayment")}
          >
            Company Payments
          </li>
          <li
            className="cursor-pointer font-bold hover:text-gray-900 transition"
            onClick={() => navigate("AttendenceRegister")}
          >
            Attendance Register
          </li>
        </ul>
      </div>

      {/* Right Side (Bell Icon & Profile) */}
      <div className="relative flex items-center gap-4">
        {/* Bell Icon */}
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800 transition" />

        {/* Profile Image Dropdown */}
        <div className="relative">
          <img
            src={Profile}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer p-1 border-2 border-[#A755F7] transition hover:scale-105"
            onClick={() => setIsOpen(!isOpen)}
          />

          {isOpen && (
            <ul className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg text-gray-700">
              <li
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                onClick={() => {
                  navigate("/my-profile");
                  setIsOpen(false);
                }}
              >
                <User className="w-5 h-5 text-gray-600" /> My Profile
              </li>
              <li
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-red-500 flex items-center gap-2"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5 text-red-500" /> Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
