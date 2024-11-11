import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="h-20 flex justify-between items-center">
      <input
        type="text"
        className="w-3/5"
      />
      <button><Link to="create-product">Создать новую карточку</Link></button>
      <select
        id="options"
        name="options"
        className="border-[3px] border-solid border-[#CD63FF] rounded-full h-10 p-[5px]"
      >
        <option value="option1">Опция 1</option>
        <option value="option2">Опция 2</option>
        <option value="option3">Опция 3</option>
      </select>
    </div>
  );
}
