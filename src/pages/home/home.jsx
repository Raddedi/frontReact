import React from 'react';

import img1 from '../../images/ala.png';
import img2 from '../../images/ph8.jpg';
import img3 from '../../images/ph4.png';
import img4 from '../../images/el10.jpg';
import img5 from '../../images/ph14.jpg';
import img6 from '../../images/assurance4.png';
import img7 from '../../images/facebook.webp';
import img8 from '../../images/assurance4.png';
import img9 from '../../images/assurance4.png';
import omg10 from '../../images/assurance4.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useNavigate } from 'react-router-dom';

const MainBanner = () => {
  const navigate = useNavigate();
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [selectedAchat, setSelectedAchat] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalNdOpen, setIsModalNdOpen] = useState(false);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/publication',
        );
        setPhones(response.data);
        console.log('resultat', response.data);
      } catch (error) {
        console.error('Error fetching phones:', error);
      }
    };

    fetchPhones();
  }, []);

  const handleButtonClick = (phone) => {
    setSelectedPhone(phone);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhone(null);
  };
  // ------------  add Achat ------------------------
  const userJson = localStorage.getItem('user');
  const user = JSON.parse(userJson);

  // Handle form submission
  const handleAchat = async (phone) => {
    console.log('phID', phone._id);
    console.log('UserID', user._id);

    const response = await axios.post('http://localhost:3000/api/achats', {
      publicationId: phone._id,
      userId: user._id, // Assurez-vous que userId est correctement défini
    });
    setIsModalOpen(false);
    setSelectedPhone(null);
  };
  // ----------------- get Achats  ---------------------

  const [Achat, setAchats] = useState([]);

  useEffect(() => {
    const fetchAchat = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/achats/user/${user._id}`,
      );
      setAchats(response.data);
    };
    fetchAchat();
  }, []);
  const formatDate = (isoDate) => {
    return format(new Date(isoDate), 'dd/MM/yyyy HH:mm:ss'); // Formatage de la date
  };
  //----------------------------------------------------------------
  const handleButtonClick2 = (achat) => {
    setIsModalNdOpen(true);
    setSelectedAchat(achat);
  };

  const handleCloseModal2 = () => {
    setIsModalNdOpen(false);
    // setSelectedNdPhone(null);

    // ------------  add Reclamation ------------------------
    const userJson = localStorage.getItem('user');
    const user = JSON.parse(userJson);

    // Handle form submission
    const handleAchat = async (phone) => {
      console.log('phID', phone._id);
      console.log('UserID', user._id);

      const response = await axios.post('http://localhost:3000/api/achats', {
        publicationId: phone._id,
        userId: user._id, // Assurez-vous que userId est correctement défini
      });
      setIsModalOpen(false);
      setSelectedPhone(null);
    };
  };
  useEffect(() => {
    alanBtn({
      key: '63c3447bd5d9c118e40618d98addd17d2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command }) => {
        if (command === 'testCommand') {
        } else if (command === 'signin') {
          navigate('/auth/signin');
        } else if (command === 'signup') {
          navigate('/auth/signup');
        } else if (command === 'publication') {
          navigate('/listePublication');
        } else if (command === 'store') {
          navigate('/listeBoutique');
        } else if (command === 'reclamations') {
          navigate('/ListeReclamations');
        } else if (command === 'profile') {
          navigate('/profile');
        } else if (command === 'users') {
          console.log('nice');
          navigate('/ListeUsers');
        }
      },
    });
  }, []);
  return (
    <body className="overflow-x-hidden">
      <div className="main-banner" id="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-content">
                <div className="thumb">
                  <img src={img1} alt="" style={{ height: '568px' }} />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Smart Phones</h4>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Smart Phone</h4>
                            <p>Achète les derniers smart phones</p>
                            <div className="main-border-button">
                              <a href="#">Aller à la boutique mobile</a>
                            </div>
                          </div>
                        </div>
                        <img src={img2} style={{ height: '270px' }} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Ordinateurs</h4>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Ordinateurs</h4>
                            <p>Achète des pcs performants</p>
                            <div className="main-border-button">
                              <a href="#">Aller à la boutique ordinateurs</a>
                            </div>
                          </div>
                        </div>
                        <img src={img3} style={{ height: '270px' }} />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 ml-55">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Electroménager</h4>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Electroménager</h4>
                            <p>Achète des électroménager</p>
                            <div className="main-border-button">
                              <a href="#">Aller à la boutique électroménager</a>
                            </div>
                          </div>
                        </div>
                        <img
                          src={img4}
                          style={{ height: '270px', width: '730px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex min-h-screen items-center justify-center bg-neutral-800">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-72">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={img2}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Beauty
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolore adipisci placeat.
                </p>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See More
                </button>
              </div>
            </div>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-72">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={img3}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Beyond Builder
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolore adipisci placeat.
                </p>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See More
                </button>
              </div>
            </div>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-72">
                <img
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={img1}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">
                  Shooting Star
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis dolore adipisci placeat.
                </p>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="section" id="explore">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="left-content">
                  <h2>Explore Our Products</h2>
                  <span>
                    Notre application web de gestion de workflow dans le domaine
                    de l'assurance offre une solution complète pour simplifier
                    et optimiser les processus opérationnels. En utilisant notre
                    plateforme, les entreprises d'assurance peuvent rationaliser
                    la gestion des demandes, des réclamations et des
                    transactions, tout en garantissant la conformité
                    réglementaire. Nous permettons aux utilisateurs d'accéder à
                    un ensemble d'outils conviviaux pour suivre et gérer
                    efficacement chaque étape du processus, de la soumission
                    initiale à la résolution finale.
                  </span>
                  <div className="quote">
                    <i className="fa fa-quote-left"></i>
                    <p>
                      Notre application offre également des fonctionnalités
                      d'automatisation pour réduire les délais de traitement et
                      améliorer l'efficacité opérationnelle.
                    </p>
                  </div>
                  <p>
                    Grâce à notre approche centrée sur l'utilisateur et à notre
                    engagement envers l'innovation, nous visons à fournir une
                    solution robuste et adaptable qui répond aux besoins
                    évolutifs du secteur de l'assurance.
                  </p>
                  <div className="main-border-button">
                    <a href="products.html">Discover More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-content">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="leather">
                        <h4>Smart Phone</h4>
                        <span>
                          Le téléphone a été conçu afin de pouvoir communiquer
                          sur des distances lointaines, et permettre ainsi aux
                          personnes de communiquer instantanément lorsqu'une
                          interaction physique n'était pas possible.
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="first-image">
                        <img src={img2} alt="" style={{ height: '255px' }} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="second-image">
                        <img src={img3} alt="" style={{ height: '255px' }} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="types">
                        <h4>Ordinateur</h4>
                        <span>
                          Permet de réaliser, d'exécuter des opérations ou des
                          calculs. Il a la capacité de stocker, récupérer et
                          traiter des données.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="container mx-auto p-4">
              <h1 className="text-2xl font-bold mb-4">Liste des Téléphones</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {phones.map((phone) => (
                  <div
                    key={phone.id}
                    className="bg-white shadow-md rounded-lg p-4"
                  >
                    <img
                      src={phone.image}
                      alt={phone.nomProduit}
                      className="w-full h-80 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold">
                        {phone.nomProduit}
                      </h2>
                      <p className="text-gray-600">{phone.description}</p>
                      <p className="text-gray-600">{phone.prix} DT</p>
                    </div>
                    <button
                      onClick={() => handleButtonClick(phone)}
                      className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-900"
                    >
                      Sélectionner
                    </button>
                  </div>
                ))}
              </div>
              {isModalOpen && selectedPhone && (
                <Modal
                  phone={selectedPhone}
                  onClose={handleCloseModal}
                  onConfirm={() => handleAchat(selectedPhone)}
                />
              )}
            </div>
          </div>
        </div>

        <div class="bg-gray-100 p-6">
          <div class="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Liste des Achats</h1>
            <div class="overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-11/12 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Nom Produit
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Prix
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Date
                    </th>
                  </tr>
                </thead>
                {Achat.map((achat, key) => (
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="px-6 py-4">{achat.publication.nomProduit}</td>
                      <td class="px-6 py-4">{achat.publication.prix} DT</td>

                      <td class="px-6 py-4">{formatDate(achat.achatDate)}</td>
                      <td class="px-6 py-4">
                        {' '}
                        <button
                          onClick={() => handleButtonClick2(achat)}
                          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-900"
                        >
                          Réclamation
                        </button>
                      </td>
                      <td class="px-6 py-4">alice@example.com</td>
                    </tr>
                    {isModalNdOpen && (
                      <Modal2
                        achat={selectedAchat}
                        onClose={handleCloseModal2}
                        setIsModalNdOpen={setIsModalNdOpen}
                        onConfirm={() => {}}
                      />
                    )}
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="first-item">
                  <div className="logo">
                    <img src={img6} alt="hexashop ecommerce templatemo" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <h4> Categories</h4>
                <ul>
                  <li>
                    <a href="#">Smart Phone</a>
                  </li>
                  <li>
                    <a href="#">Ordinateurs</a>
                  </li>
                  <li>
                    <a href="#">Electroménager</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h4>iTeam University</h4>
                <ul>
                  <li>
                    <a href="#">85-87 Rue de La Palestine, Tunis 1002</a>
                  </li>
                  <li>
                    <a href="#">Iteam@company.com</a>
                  </li>
                  <li>
                    <a href="#">+216 71 781 081</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div>
                  <img
                    className="w-60 h-auto rounded-lg shadow-lg ml-18"
                    src={img7}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </body>
  );
};

const Modal = ({ phone, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-40 rounded-lg">
        <h2 className="text-xl font-bold mb-4">{phone.nomProduit}</h2>
        <p>
          <strong>Description:</strong> {phone.description}
        </p>
        <p>
          <strong>Prix:</strong> {phone.prix} DT
        </p>
        {phone.caracteristiques && (
          <>
            <p>
              <strong>Caractéristiques:</strong>
            </p>
            <ul className="list-disc ml-5">
              {phone.caracteristiques.map((caracteristique, index) => (
                <li key={index}>{caracteristique}</li>
              ))}
            </ul>
          </>
        )}
        <button
          onClick={onConfirm}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Acheter
        </button>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 ml-20"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

//---------------------model2---------------------------

const Modal2 = ({ achat, onClose, onConfirm, setIsModalNdOpen }) => {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'type') {
      setType(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Remplacez par l'ID d'achat approprié
      const response = await axios.post(
        'http://localhost:3000/api/reclamations',
        {
          achat: achat._id,
          type,
          description,
        },
      );
      console.log('Réclamation créée:', response.data);
      setType('');
      setDescription('');
      onConfirm();
      setIsModalNdOpen(false);
    } catch (error) {
      console.error('Erreur lors de la création de la réclamation:', error);
    }
    // console.log('desc ', description, ' type ', type, ' _id ', achat._id);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-20 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4.5">
            <label
              htmlFor="type"
              className="mb-2.5 block text-black dark:text-white"
            >
              Cause De Réclamation
            </label>
            <select
              id="type"
              name="type"
              value={type}
              onChange={handleInputChange}
              className="w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            >
              <option value="" disabled>
                Select Cause
              </option>
              <option value="Casser">Ça tombe en panne</option>
              <option value="Braquage">Braquage</option>
            </select>
          </div>

          <div>
            <label className="mb-2.5 block text-black dark:text-white">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleInputChange}
              placeholder="Enter Description"
              className="mb-6 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Valider
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 ml-20"
          >
            Fermer
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainBanner;
