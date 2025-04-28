import React, { useState } from 'react'
import axiosInstance from '../../utils/axiosinstance';
import { API_PATHS } from '../../utils/apiPaths';

const SelectUsers = ({ selectedUsers, setSelectedUsers }) => {
    const [allUsers, setAllUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempSelectedUsers, setTempSelectedUsers] = useState([]);

  const getAllUsers = async () => {
    try {
        const response = await axiosInstance.get(API_PATHS.USERS.GET_ALL_USERS);
        if (response.data?.length > 0) {
            setAllUsers(response.data);
        }
    } catch (error) {
        console.error("Error fetching users:", error);
    }
  };
  return <div>SelectUsers</div>
};

export default SelectUsers