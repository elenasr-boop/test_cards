import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { useEffect } from "react";
import { getCharacters } from "../api";
import { characterFromApi, characterType } from "../types/characterType";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setCards } from "../store/features/cardsSlice";
import { Card } from "../components/Card";
import { getFilteredCharacter } from "../helpers";

export function Products() {
  const characters = useAppSelector((state) => state.cards.products);
  const filter = useAppSelector((state) => state.cards.filter);
  const dispatch = useAppDispatch();
  const filteredCharacters = getFilteredCharacter(filter, characters);

  useEffect(() => {
    if (characters.length === 0) {
      getCharacters()
        .then((res) => {
          console.log(res);
          if (Array.isArray(res.data)) {
            const newCharacters = res.data.map((el: characterFromApi) => ({
              _id: el._id,
              name: el.name,
              image: el.imageUrl,
              films: el.films,
              videoGames: el.videoGames,
              url: el.sourceUrl,
              isLiked: false,
              apiUrl: el.url,
              tvShows: el.tvShows,
            }));
            dispatch(setCards(newCharacters));
          } else {
            throw new Error("Error fetching characters");
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [dispatch]);

  return (
    <div className=" min-h-[100vh] m-auto bg-[#202020] text-[#CD63FF] pr-8 pl-8 lg:pr-48 lg:pl-48 pt-10">
      <Header />
      <main className="cards flex justify-center md:justify-between lg:justify-between flex-wrap gap-6 overflow-auto lg:h-[calc(100%-120px)]">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((el) => {
            return <Card card={el} key={el._id} />;
          })
        ) : (
          <div className="flex justify-center items-center h-[100%] w-[100%] text-center">
            <p>No characters found</p>
          </div>
        )}
      </main>
      <Outlet />
    </div>
  );
}
