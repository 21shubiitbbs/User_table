import React, { useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
import Nv from "./Nv";
import Footer from "./Footer";
import {
  fetchUsers,
  selectAllUsers,
  deleteUser,
  updateField
} from "../features/formSlice1";
import axios from "axios";


const UserList = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const BASE_URL = "http://localhost:5000/api/users/";
  const users = useSelector(selectAllUsers);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const handleDelete = (_id) => {
    dispatch(deleteUser(_id)).then(() => {
      dispatch(fetchUsers());
    });
  };
  const handleEdit = async (_id) => {
    // const edituser=dispatch(updateuser(_id));
    const response = await axios.get(`${BASE_URL}${_id}`);
    console.log("yes", response.data.user);
    for (const key in response.data.user) {
      if (response.data.user.hasOwnProperty(key)) {
        dispatch(updateField({ field: key, value: response.data.user[key] }));
        console.log(`${key}: ${response.data.user[key]}`);
      }
    }
    navigator("/first");
    // response.data.user.forEach(())
  };
  return (
    <>
    <Nv/>
    <div className="flex justify-center mt-20">
      <div className="w-full lg:w-8/12 px-4">
        <div className="relative overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 bg-white border-black rounded-lg">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="px-6 py-3 text-left text-lg font-medium text-blue-500 uppercase tracking-wider">
                <th scope="col" className="px-6 py-3">
                  Serial No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Name
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user, index) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={user._id}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-black">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-black">
                      {user.title} {user.firstName} {user.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-500">
                      {user.phoneNumber}
                    </td>
                    <td className="px-6 py-4 flex items-center">
                    <div onClick={() => handleDelete(user._id)} style={{ cursor: 'pointer' }}>
                      <AiFillDelete className="text-red-500 cursor-pointer mr-4" />
                    </div>
                      <div onClick={() => handleEdit(user._id)}>
                        <div key={user._id}>
                          {/* <button className="bg-amber-400 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded ">
                            Edit
                          </button> */}
                          <AiFillEdit className="cursor-pointer text-amber-400 hover:text-amber-700"size={20} onClick={() => handleEdit(user._id)}/>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="w-full  flex justify-center mt-8">
            <Link to="/first" className="text-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Form
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-32">
    <Footer/>
    </div>
    </>
  );
};

export default UserList;
