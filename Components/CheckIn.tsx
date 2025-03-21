import React from "react";
import BranchAdminNav from "./BranchAdminNav";

const CheckIn: React.FC = () => {
  return (
    <div className="bg-white-100 min-h-screen p-6 ">
      <BranchAdminNav />
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-700">Check-In</h2>
          <p className="text-gray-500">Check-In - Create Check-In</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
          Back
        </button>
      </div>
      <div className="bg-white-100 min-h-screen p-6 border rounded-lg  ">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto flex justify-between items-center mb-4  space-y-6 "></div>
        {/* Main Container */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Guest Information
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="text-gray-700">Number of Adults</span>
              <input
                type="number"
                placeholder="Number of Adults"
                className="p-3 border rounded-lg w-full text-gray-700"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Number of Children</span>
              <input
                type="number"
                placeholder="Number of Children"
                className="p-3 border rounded-lg w-full text-gray-700"
              />
            </label>
          </div>
        </section>
        {/* Company Information (Added to Guest Info) */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Company Information
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex gap-4 items-center">
              <label className="flex items-center">
                <input type="radio" name="registration" className="mr-2" /> Self
              </label>
              <label className="flex items-center">
                <input type="radio" name="registration" className="mr-2" />{" "}
                Company
              </label>
            </div>
            <select className="p-3 border rounded-lg w-full text-gray-700">
              <option>Select Room</option>
            </select>
            <input
              type="text"
              placeholder="Rent Per Day"
              className="p-3 border rounded-lg w-full text-gray-700"
              defaultValue="00.00"
              readOnly
            />
            <input
              type="text"
              placeholder="Extra Mattress"
              className="p-3 border rounded-lg w-full text-gray-700"
              defaultValue="00.00"
              readOnly
            />
            <input
              type="text"
              placeholder="Rate Per Mattress"
              className="p-3 border rounded-lg w-full text-gray-700"
              defaultValue="00.00"
              readOnly
            />
            <input
              type="text"
              placeholder="GST (%)"
              className="p-3 border rounded-lg w-full text-gray-700"
              defaultValue="15%"
              readOnly
            />
            <input
              type="date"
              className="p-3 border rounded-lg w-full text-gray-700"
              defaultValue="2025-03-18"
            />
            <input
              type="date"
              className="p-3 border rounded-lg w-full text-gray-700"
              defaultValue="0000-00-00"
            />
            <input
              type="time"
              className="p-3 border rounded-lg w-full text-gray-700"
              defaultValue="16:38"
            />
            <input
              type="time"
              className="p-3 border rounded-lg w-full text-gray-700"
              defaultValue="12:00"
            />
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" checked readOnly /> GST
              Included
            </label>
          </div>
        </section>
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Complementary Information
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Breakfast
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Lunch
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Dinner
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Laundry
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Phone
            </label>
          </div>
        </section>
        <div>
          {/* Payment Information */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Payment Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Method of Payment
                </label>
                <select className="p-3 border rounded-lg w-full text-gray-700">
                  <option>Credit Card</option>
                  <option>Cash</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Purpose of Visit
                </label>
                <select className="p-3 border rounded-lg w-full text-gray-700">
                  <option>Tourism</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Visa Expiry Date
                </label>
                <input
                  type="date"
                  className="p-3 border rounded-lg w-full text-gray-700"
                  defaultValue="0000-00-00"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Advanced Payment
                </label>
                <input
                  type="text"
                  className="p-3 border rounded-lg w-full text-gray-700"
                  placeholder="Enter amount"
                />
              </div>
            </div>
          </section>

          <div className="flex gap-4">
            {/* Remark Section */}
            <section className="w-1/2">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Remark
              </h3>
              <textarea
                className="p-3 border rounded-lg w-full text-gray-700"
                placeholder="Enter any remarks"
                rows={3}
              ></textarea>
            </section>

            {/* Inclusive Section */}
            <section className="w-1/2">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Inclusive
              </h3>
              <textarea
                className="p-3 border rounded-lg w-full text-gray-700"
                placeholder="Enter any remarks"
                rows={3}
              ></textarea>
            </section>
          </div>

          {/* Price Calculation */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Price Calculation
            </h3>
            <div className="space-y-2">
              <div className="flex justify-end gap-5">
                <span>Rent Per Day</span>
                <span>0</span>
              </div>
              <div className="flex justify-end gap-5">
                <span>No Of Days</span>
                <span>0</span>
              </div>
              <div className="flex justify-end gap-5">
                <span>Extra Mattress</span>
                <span>0</span>
              </div>
              <div className="flex justify-end gap-5">
                <span>Rate Per Mattress</span>
                <span>0</span>
              </div>
              <div className="flex justify-end gap-5">
                <span>Total Tax (%)</span>
                <span>0</span>
              </div>
              <div className="flex justify-end gap-5">
                <span>Discount %</span>
                <span>0%</span>
              </div>
              <div className="flex justify-end gap-5">
                <span>Sub Total Price</span>
                <span>0</span>
              </div>
              <div className="flex justify-end gap-5">
                <span>Advance Amount</span>
                <span>0</span>
              </div>
              <div className="flex justify-end text-lg font-bold gap-5">
                <span>Total Price</span>
                <span>0</span>
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex justify-end gap-2">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
              Print
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;
