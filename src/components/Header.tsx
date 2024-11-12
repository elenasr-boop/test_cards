import { Link } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import { filtration } from "../store/features/cardsSlice";

export function Header() {
  const dispatch = useAppDispatch();

  function filterBy (e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(filtration(e.target.value));
  }

  return (
    <div className="h-20 flex justify-between items-center">
      <input
        type="text"
        className="w-3/5"
      />
      <button><Link to="create-product">Create new card</Link></button>
      <select
        id="filter"
        name="filter"
        className="border-[3px] border-solid border-[#CD63FF] rounded-full h-10 p-[5px]"
        onChange={filterBy}
      >
        <option value="all">All</option>
        <option value="films">Films</option>
        <option value="tvShows">TV shows</option>
        <option value="games">VideoGames</option>
        <option value="likes">Like</option>
      </select>
    </div>
  );
}
