import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addCard } from "../store/features/cardsSlice";
import { isValidUrl, safeString } from "../helpers";

export function CreateProduct() {
  const [image, setImage] = useState<string>("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cardData, setCardData] = useState({
    name: "",
    videoGames: "",
    films: "",
    tvShows: "",
    url: "",
  })

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCardData({
        ...cardData,
        [name]: value,
    });
    setError(false);
  } 

  function createCharacter () {
    if (image !== "" && cardData.name !== "" && cardData.url !== "" && isValidUrl(cardData.url)) {
      setError(false);
      dispatch(addCard({
        name: safeString(cardData.name),
        videoGames: cardData.videoGames.trim() === "" ? [] : safeString(cardData.videoGames).split(";"),
        films: cardData.films.trim() === "" ? [] : safeString(cardData.films).split(";"),
        url: cardData.url,
        isLiked: false,
        image: image,
        tvShows: cardData.tvShows.trim() === "" ? [] : safeString(cardData.tvShows).split(";"),
        _id: Math.round(Math.random()*1000) + 1000,
      }));
      navigate("/");
    } else {
      setError(true);
    }
  }

  return (
    <div className="create-product h-[100%] w-[100%] min-w-[375px] min-h-[100vh] absolute top-0 left-0 z-10">
      <div className="create-product-container w-[100%] h-[100%] flex justify-center items-center bg-black bg-opacity-60">
        <div className="w-[70vw] h-[70vh] content border-[3px] border-solid border-[#CD63FF] rounded-3xl bg-gray-200 p-10 flex flex-col justify-between">
          <h2 className="text-lg font-bold">Creating character</h2>
          <div className="inputs flex flex-wrap gap-3">
            <div className="img">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className={`bg-[#FAEFFF] pt-1 ${image === "" && error ? "border-[#B3041C]" : ""}`}
              />
              {image !== "" && (
                <img
                  src={image}
                  alt="Uploaded image"
                  className="w-[130px] h-[130px] object-cover rounded-full"
                />
              )}
            </div>
            <input type="text" placeholder="Имя персонажа" name="name" value={cardData.name} onChange={handleInputChange} className={`${cardData.name === "" && error ? "border-[#B3041C]" : ""}`} />
            <input
              type="url"
              placeholder="Вставьте ссылку на страницу по этому персонажу"
              name="url"
              value={cardData.url} 
              onChange={handleInputChange}
              className={`${!isValidUrl(cardData.url) && error ? "border-[#B3041C]" : ""}`}
            />
            <input
              type="text"
              placeholder="В каких фильмах он/а появляется?"
              name="films"
              value={cardData.films} 
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="В каких играх он/а появляется?"
              name="videoGames"
              value={cardData.videoGames} 
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="В каких тв-шоу он/а появляется?"
              name="tvShows"
              value={cardData.tvShows} 
              onChange={handleInputChange}
            />
          </div>

          {error && <div className="text-[#B3041C]">Выделенные поля обязательны для заполнения{!isValidUrl(cardData.url) && ", введенная ссылка должна быть рабочей"}</div>}

          <div className="buttons flex justify-between">
            <button onClick={() => createCharacter()} >
              Create character
            </button>
            <button>
              <Link to="/">Back</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
