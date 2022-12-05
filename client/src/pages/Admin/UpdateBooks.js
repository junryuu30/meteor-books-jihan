import React from "react";
import { Link } from "react-router-dom"

const UpdateBooks = () => {
  return (
    <>
    <h2 className=" m-5 font-bold text-2xl text-center">
        Update Books
      </h2>
      <div className="w-96 flex justify-center m-auto mt-5">
        <div>
          <form>
            <label className="">
              <span class="block text-sm font-medium text-slate-700">
                Title
              </span>
              <input
                type="text"
                class="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500"
              />
            </label>
            <label>
              <span class="block text-sm font-medium text-slate-700">
                Image
              </span>
              <input
                type="file"
                class="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500"
              />
            </label>
            <label>
              <span class="block text-sm font-medium text-slate-700">Desc</span>
              <textarea
                type="text"
                class="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500"
              />
            </label>
            <label>
              <span class="block text-sm font-medium text-slate-700">
                Penulis
              </span>
              <input
                type="text"
                class="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500"
              />
            </label>
            <label>
              <span class="block text-sm font-medium text-slate-700">
                Category Books
              </span>
            </label>
            <select name="cars" id="cars" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500">
              <option value="volvo"></option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <div className="flex mt-3">
              <button className="rounded px-4 py-2 text-slate-900 bg-[#D0C9C0] mr-3">
               Update Books
              </button>
              <Link to="/home-admin">
                <button className="rounded px-4 py-2 text-white bg-neutral-700">
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateBooks;
