import { useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import axios from 'axios';
import { useNavigate ,useLocation} from 'react-router-dom';
const AddPublication = () => {

    const navigate = useNavigate();

    const location = useLocation();

    console.log('id',location.state._id)
  const [formPublication, setFormPublication] = useState({
    nomProduit: '',
    description: '',
    prix: 0,
    type: '',
    boutiqueId: location.state._id
    
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
    await axios.post('http://localhost:3000/api/publication', formPublication);
    navigate('/listePublication',{state: location.state._id});
  };

  return (
    <DefaultLayout>
      <div className="grid">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Add Publication
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
                      Nom Produit
                    </label>
                    <input
                      type="text"
                      id="nomProduit"
                      name="nomProduit"
                      value={formPublication.nomProduit}
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
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      value={formPublication.description}
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
                    Prix <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="number"
                    id="prix"
                    name="prix"
                    value={formPublication.prix}
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
                    value={formPublication.type}
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
                  Add Publication
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AddPublication;
