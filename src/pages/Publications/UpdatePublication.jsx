import { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
const UpdatePublication = () => {
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    delete location.state.__v;
    setFormUser(location.state);
  }, [location]);

  const [formUser, setFormUser] = useState({
    nomProduit: '',
    description: '',
    prix: 0,
    type: '',

    
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('aloalo',location.state._id);
    
    await axios.put(
      `http://localhost:3000/api/publication/${location.state._id}`,
      formUser,
    );
    navigate('/listePublication');
  };

  return (
    <DefaultLayout>
      <div className="grid">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Update Publication
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="mb-2.5 block text-black dark:text-white"
                    >
                      Nom Produit
                    </label>
                    <input
                      type="text"
                      id="nomProduit"
                      name="nomProduit"
                      value={formUser.nomProduit}
                      onChange={handleInputChange}
                      placeholder="Enter le nom Produit"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label
                      htmlFor="nomProduit"
                      className="mb-2.5 block text-black dark:text-white"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      value={formUser.description}
                      onChange={handleInputChange}
                      placeholder="Enter description"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label
                    htmlFor="email"
                    className="mb-2.5 block text-black dark:text-white"
                  >
                    Prix <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="number"
                    id="prix"
                    name="prix"
                    value={formUser.prix}
                    onChange={handleInputChange}
                    placeholder="Enter Prix"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label
                    htmlFor="type"
                    className="mb-2.5 block text-black dark:text-white"
                  >
                    Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formUser.type}
                    onChange={handleInputChange}
                    className="w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  >
                    <option value="" disabled>
                      Select Type
                    </option>
                    <option value="Phone">Phone</option>
                    <option value="Ordinateur">Ordinateur</option>
                    <option value="Electromenager">Electromenager</option>
                  </select>
                </div>


                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Update Publication
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default UpdatePublication;
