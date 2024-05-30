import { useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddBoutique = () => {
  const userJson = localStorage.getItem('user');
  const user = JSON.parse(userJson);
  const navigate = useNavigate();

  const [formPublication, setFormPublication] = useState({
    name: '',
    phoneNumber: 0,
    address: '',
    email: '',
    user: user._id,
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormPublication((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formPublication);
    await axios.post('http://localhost:3000/api/boutiques', formPublication);
    navigate('/listeBoutique');
  };

  return (
    <DefaultLayout>
      <div className="grid">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add Boutique
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label
                      htmlFor="nomProduit"
                      className="mb-2.5 block text-black dark:text-white"
                    >
                      Nom Boutique
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formPublication.name}
                      onChange={handleInputChange}
                      placeholder="Enter your produit"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label
                      htmlFor="description"
                      className="mb-2.5 block text-black dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formPublication.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your description"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label
                    htmlFor="prix"
                    className="mb-2.5 block text-black dark:text-white"
                  >
                    Address <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formPublication.address}
                    onChange={handleInputChange}
                    placeholder="Enter Prix"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label
                    htmlFor="prix"
                    className="mb-2.5 block text-black dark:text-white"
                  >
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formPublication.email}
                    onChange={handleInputChange}
                    placeholder="Enter Prix"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Add Boutique
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AddBoutique;
