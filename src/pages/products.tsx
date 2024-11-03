import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function Products() {
  return (
    <div className=" h-[100vh] m-auto bg-[#202020] text-[#CD63FF] pr-48 pl-48 pt-10">
      <Header />
      <div className="cards flex flex-wrap gap-6">
        <div className="card w-20 h-20 border border-solid border-red-400" />
        <div className="card w-20 h-20 border border-solid border-red-400" />
        <div className="card w-20 h-20 border border-solid border-red-400" />
        <div className="card w-20 h-20 border border-solid border-red-400" />
        <div className="card w-20 h-20 border border-solid border-red-400" />
        <div className="card w-20 h-20 border border-solid border-red-400" />
        <div className="card w-20 h-20 border border-solid border-red-400" />
        <div className="card w-20 h-20 border border-solid border-red-400" />
        <div className="card w-20 h-20 border border-solid border-red-400" />
        <div className="card w-20 h-20 border border-solid border-red-400" />
        <div className="card w-20 h-20 border border-solid border-red-400" />
        <div className="card w-20 h-20 border border-solid border-red-400" />
        <div className="card w-20 h-20 border border-solid border-red-400" />
        <div className="card w-20 h-20 border border-solid border-red-400" />
        <div className="card w-20 h-20 border border-solid border-red-400" />
        <div className="card w-20 h-20 border border-solid border-red-400" />
      </div>
      <Outlet />
    </div>
  );
}
