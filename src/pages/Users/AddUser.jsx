import { useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddUser = () => {

    const navigate = useNavigate();
    
  const [formUser, setFormUser] = useState({
    firstName: '',

    email: '',
    // Changed type to number
    roles: [],
    password: '', // Changed type to string,
    phoneNumber:0
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name == 'roles') {
      setFormUser((prevState) => ({
        ...prevState,
        [name]: [value],
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formUser);
    await axios.post('http://localhost:3000/api/auth/signup', formUser);
    navigate('/ListeUsers');
  };

  return (
    <DefaultLayout>
      <div className="grid">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add User
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 ">
                    <label
                      htmlFor="firstName"
                      className="mb-2.5 block text-black dark:text-white"
                    >
                       Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formUser.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                

                
                </div>

                <div className="mb-4.5">
                  <label
                    htmlFor="email"
                    className="mb-2.5 block text-black dark:text-white"
                  >
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formUser.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="mb-2.5 block text-black dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formUser.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label
                    htmlFor="roles"
                    className="mb-2.5 block text-black dark:text-white"
                  >
                    roles
                  </label>
                  <select
                    id="roles"
                    name="roles"
                    value={formUser.roles}
                    onChange={handleInputChange}
                    className="w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  >
                    <option value="" disabled>
                      Select roles
                    </option>
                    <option value="Police">Police</option>
                    <option value="Assurance">Assurance</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phoneNumber"
                    className="mb-2.5 block text-black dark:text-white"
                  >
                    phoneNumber
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formUser.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your phoneNumber"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                

                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AddUser;
