import { useEffect, useState } from 'react';
import BrandOne from '../../images/brand/brand-01.svg';
import DefaultLayout from '../../layout/DefaultLayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';


const ListeReclamations = () => {

    const formatDate = (isoDate) => {
        return format(new Date(isoDate), 'HH:mm - dd/MM/yyyy'); // Formatage de la date
      };

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        'http://localhost:3000/api/reclamations',
      );
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="mb-6 flex justify-between items-center">
          <h4 className=" text-xl font-semibold text-black dark:text-white">
            Liste Réclamation
          </h4>
          </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Type
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Description
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Date
              </h5>
            </div>

            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                User name
              </h5>
            </div>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
            Phone Number
            </th>
          </div>

          {users.map((user, key) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === users.length - 1
                  ? ''
                  : 'border-b border-stroke dark:border-strokedark'
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <img src={BrandOne} alt="Brand" />
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {user.type}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{user.description}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">
                  {formatDate(user.dateReclamation)}
                </p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">
                  {user.achat.user.firstName} {user.achat.user.firstName}
                </p>
              </div>
              
              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">
                  {user.achat.user.phoneNumber} 
                </p>
              </div>
              <div className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ListeReclamations;
