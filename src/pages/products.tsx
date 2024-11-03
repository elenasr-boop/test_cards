import { Link, Outlet } from "react-router-dom";

export function Products() {
  return (
    <>
      This is the main page <Outlet />
      <button className="bg-red-400">
        <Link to="1">Link to product 1</Link>
      </button>
    </>
  );
}
