import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { useEffect } from "react";
import { getCharacters } from "../api";
import { characterFromApi } from "../types/characterType";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setCards } from "../store/features/cardsSlice";
import { Card } from "../components/Card";

export function Products() {
  const characters = useAppSelector(state => state.cards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCharacters().then((res) => {
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
        }));
        dispatch(setCards(newCharacters));
      } else {
        throw new Error ('Error fetching characters');
      }
    }).catch((e) => {
      console.error(e);
    })
  }, [dispatch]);

  return (
    <div className=" h-[100vh] m-auto bg-[#202020] text-[#CD63FF] pr-48 pl-48 pt-10">
      <Header />
      <div className="cards flex justify-between flex-wrap gap-6 overflow-auto h-[calc(100%-120px)]">
        {characters.map((el) => {
          return (
            <Card card={el} key={el._id} />
          )
        })}
      </div>
      <Outlet />
    </div>
  );
}
