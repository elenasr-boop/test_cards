import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { filtration, setCards } from "../../store/features/cardsSlice";
import { useState } from "react";
import { searchBy } from "../../api";
import { arrayTransformation } from "../../helpers";

export function Header() {
  const dispatch = useAppDispatch();
  const [request, setRequest] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRequest(e.target.value);
  }

  function filterBy(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(filtration(e.target.value));
  }

  async function search() {
    searchBy(request).then((res) => {
      if (Array.isArray(res)) {
        dispatch(setCards(arrayTransformation(res)));
      } else {
        throw new Error("Error fetching characters");
      }
    }).catch((e) => {
      console.error(e);
    });
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      search();
    }
  }

  return (
    <header className="mb-7 flex flex-col lg:flex-row md:flex-row gap-2 justify-between items-center">
      <input
        type="text"
        className="w-3/5"
        placeholder="Search"
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
      />
      <button>
        <Link to="create-product">Create new card</Link>
      </button>
      <select
        id="filter"
        name="filter"
        className="border-[3px] border-solid border-[#CD63FF] rounded-full h-10 p-[5px]"
        onChange={filterBy}
        aria-label="Filter by:"
      >
        <option value="all">All</option>
        <option value="films">Films</option>
        <option value="tvShows">TV shows</option>
        <option value="games">VideoGames</option>
        <option value="likes">Like</option>
      </select>
    </header>
  );
}
