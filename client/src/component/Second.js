import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  selectEmail,
  setRadioValue,
  selectSelectedDate,
  selectSelectedValue,
  updateField,
  updateSelectedDate,
  reset
} from "../features/formSlice1";
import Input from "./Input";
import RadioButton from "./RadioButton";
import Dropdown from "./Dropdown";
import { DtPicker } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Second() {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const selectedValue = useSelector(selectSelectedValue);
  const form1 = useSelector((state) => state.form);
  const selectedDate = useSelector(selectSelectedDate);
  const navigate = useNavigate();
  const handleChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };
  const handleEmailChange = (e, index) => {
    const updatedEmail = [...email];
    updatedEmail[index] = e.target.value;
    dispatch(setEmail(updatedEmail));
  };
  const handleAddEmail = (e) => {
    e.preventDefault();
    const updatedEmail = [...email, ""];
    dispatch(setEmail(updatedEmail));
  };
  const handleDeleteEmail = (index) => {
    const updatedEmail = email.filter((_, i) => i !== index);
    dispatch(setEmail(updatedEmail));
  };
  const handleRadioChange = (value) => {
    dispatch(setRadioValue(value));
  };
  const handleBackClick = () => {
    navigate("/first");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      ...form1
    };
    try {
      console.log("yes", form);
      if (form._id === "" || form._id === undefined) {
        const res = await axios.post(`http://localhost:5000/api/users/`, form);
        console.log("New user created:", res.data);
        // If user_id is present, it means it's an existing user, so update the user
      } else {
        // If user_id is not present, it means it's a new user, so create a new user
        const _id = form._id;
        const res = await axios.put(
          `http://localhost:5000/api/users/${_id}`,
          form
        );
        console.log("User updated:", res.data);
      }
      dispatch(reset());
      navigate("/");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="mx-auto px-32 m-10">
      <form onSubmit={handleSubmit}>
        <div className="mt-4 flex items-start flex-col">
          {email.map((email, index) => (
            <div className="flex items-center gap-4" key={index}>
              <label className="block text-black-700 text-base font-bold mb-4">
                Email
              </label>
              <Input
                value={email}
                onChange={(e) => handleEmailChange(e, index)}
              />
              {index !== 0 && (
                <button
                  className="flex-row px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleDeleteEmail(index)}
                >
                  Delete Email
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          className="bg-black text-white font-semibold py-2 px-4"
          onClick={handleAddEmail}
        >
          Add Email
        </button>
        <div className="my-6">
          <p className="font-bold">
            Have you ever applied our facility before ?
          </p>
        </div>
        <div>
          <RadioButton
            value="option1"
            label="Yes"
            selectedValue={selectedValue}
            onRadioChange={handleRadioChange}
          />
          <RadioButton
            value="option2"
            label="No"
            selectedValue={selectedValue}
            onRadioChange={handleRadioChange}
          />
        </div>
        <div className="my-3">
          <RadioButton
            value="option3"
            label="Other"
            selectedValue={selectedValue}
            onRadioChange={handleRadioChange}
          />
        </div>
        <div className="my-6 mt-4 flex items-start flex-col">
          <label className="block text-black-700 text-base font-bold mb-4">
            What department would you like to get appointment from ?
          </label>
          <Input
            value={form1.department}
            onChange={(e) => handleChange("department", e.target.value)}
          />
        </div>
        <div className="flex-1 my-6">
          <label className="block text-black-700 text-base font-bold mb-4">
            which product you want to using for your business
          </label>
          <div className="w-96">
            <Dropdown
              value={form1.product}
              options={[
                "Select product",
                "emPower",
                "GenAI",
                "Prism",
                "Drishti"
              ]}
              onChange={(e) => handleChange("product", e.target.value)}
            />
          </div>
        </div>
        <div className="my-6">
          <p className="font-bold">Prefered appointment date</p>
        </div>
        <div className="my-6 w-96">
          <DtPicker
            onChange={(date) => dispatch(updateSelectedDate(date))}
            value={selectedDate}
          />
        </div>
        <div className="flex justify-between pt-14 my-6">
          <button
            className=" bg-black text-white font-semibold py-2 px-4 "
            onClick={handleBackClick}
          >
            Back
          </button>
          <div className="text-center">
            <Link to="/" className="text-center">
              <button className="bg-green-500 text-white font-semibold py-2 px-4 ">
                Home
              </button>
            </Link>
          </div>
          <button className="  bg-black text-white font-semibold py-2 px-4 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default Second;
