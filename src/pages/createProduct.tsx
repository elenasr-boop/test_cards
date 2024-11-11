import { useState } from "react";
import { Link } from "react-router-dom";

export function CreateProduct() {
  const [image, setImage] = useState<string | null>(null);
  const [cardData, setCardData] = useState({
    name: "",
    videoGames: "",
    films: "",
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
  } 

  return (
    <div className="create-product h-[100%] w-[100%] min-w-[375px] min-h-[100vh] absolute top-0 left-0 z-10">
      <div className="create-product-container w-[100%] h-[100%] flex justify-center items-center bg-black bg-opacity-40">
        <div className="w-[70vw] h-[70vh] content border-[3px] border-solid border-[#CD63FF] rounded-3xl bg-gray-200 p-10 flex flex-col justify-between">
          <h2 className="text-lg font-bold">Создание персонажа</h2>
          <div className="inputs flex flex-wrap gap-3">
            <div className="img">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="bg-[#FAEFFF] pt-1"
              />
              {image && (
                <img
                  src={image}
                  alt="Uploaded image"
                  className="w-[130px] h-[130px] object-cover rounded-full"
                />
              )}
            </div>
            <input type="text" placeholder="Имя персонажа" name="name" value={cardData.name} onChange={handleInputChange} />
            <input
              type="text"
              placeholder="Вставьте ссылку на страницу по этому персонажу"
              name="url"
              value={cardData.url} 
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="В каких фильмах появляется этот персонаж?"
              name="films"
              value={cardData.films} 
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="В каких играх появляется этот персонаж?"
              name="videoGames"
              value={cardData.videoGames} 
              onChange={handleInputChange}
            />
          </div>

          <div className="buttons flex justify-between">
            <button onClick={() => console.log("Создается персонаж", cardData)} className="bg-[#FAEFFF]">
              Создать персонажа
            </button>
            <button className="bg-[#FAEFFF]">
              <Link to="/">Отмена</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
