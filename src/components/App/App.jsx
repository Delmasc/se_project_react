import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { coordinates, APIKey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import api, { addItem } from "../../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };
  const onAddItem = (inputValues, reset) => {
    const newCardData = {
      name: inputValues.name,
      imageUrl: inputValues.imageUrl,
      weather: inputValues.weatherType,
    };

    addItem(newCardData)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        closeActiveModal();
        reset();
      })
      .catch(console.error);
  };

  const handleDeleteItem = (id) => {
    api
      .deleteItem(id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== id)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    const weatherPromise = getWeather(coordinates, APIKey);
    const itemsPromise = api.getItems();

    Promise.allSettled([weatherPromise, itemsPromise])
      .then((results) => {
        const [weatherResult, itemsResult] = results;

        // Handle weather fetch result
        if (weatherResult.status === 'fulfilled') {
          const data = weatherResult.value;
          const filterData = filterWeatherData(data);
          setWeatherData({ ...filterData });
        } else {
          console.error('Weather fetch failed:', weatherResult.reason);
        }

        // Handle items fetch result
        if (itemsResult.status === 'fulfilled') {
          const data = itemsResult.value;
          setClothingItems(data.reverse());
        } else {
          console.error('Items fetch failed:', itemsResult.reason);
        }
      });
  }, []);



  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  handleAddClick={handleAddClick}
                />
              }
            />
          </Routes>

          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={closeActiveModal}
          onAddItem={onAddItem}
        />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
          onDelete={() => handleDeleteItem(selectedCard._id)}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;


// useEffect(() => {
//   getWeather(coordinates, APIKey)
//     .then((data) => {
//       const filterData = filterWeatherData(data);

//       const weather = {
//         ...filterData,
//       };

//       api
//         .getItems()
//         .then((data) => {
//           setClothingItems(data.reverse());
//         })
//         .catch((error) => {
//           console.error("Error fetching items:", error);
//         });

//       setWeatherData(weather);
//     })
//     .catch(console.error);
// }, []);