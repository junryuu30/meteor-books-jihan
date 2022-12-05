import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { API } from "../../config/api";
import { books } from "../../DataDummy/dummybooks"

const LandingAdmin = () => {
  const navigate = useNavigate()
  const [save, setSave] = useState();
  const [book, setBook] = useState();

  const config = {
    method: "GET",
    headers: {
      Authorization: "Basic " + localStorage.token,
    },
  };

  const getBook = async () => {
    try {
      const response = await API.get("/books", config);

      console.log("response bukuuu", response);

      setBook(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log("ini book", book)
  // const handleDelete = async (e) => {
  //   e.preventDefault();
  //   const id = save.id;
  //   try {
  //     await API.delete(`/product/${id}`);
  //     setmodalDelete(false);
  //     getProduct();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getBook();
  }, []);

  console.log("ayo update",save)

  return (
    <>
    <div>
    <h2 className=" m-5 font-bold text-2xl text-center">
        List Buku
      </h2>
        <div className="flex justify-end m-5">
        <Link to="/add-books">
        <button className="text-white rounded px-4 py-2 bg-[#5F7161] m-3">Add Books</button>
        </Link>
        </div>
      <div className="flex justify-center m-5">
        <table className="border-spacing-3 border-solid border-gray-200 rounded-md">
            <tr className="bg-[#EFEAD8]">
                <th className="p-2">No</th>
                <th className="w-64 p-2">Image</th>
                <th className="w-64 p-2">Title</th>
                <th className="p-4">Penulis</th>
                <th className="p-4">Keterangan</th>
                <th className="p-2">Action</th>
            </tr>
            {book?.map((item, index)=>(
            <tr className="bg-[#D0C9C0] space-y-7">
                <td className="p-2">{index + 1}</td>
                <td className="w-64 p-2">
                  <div className="m-1 rounded p-1 text-white flex justify-center">
                  <img alt="" src={item.image} className="h-64 w-64 object-cover rounded-md" />
                  </div>
                </td>
                <td className="w-64 p-2">{item.title}</td>
                <td className="p-4"></td>
                <td className="p-4"></td>
                <td className="p-2">
                  <button className="text-white rounded px-4 py-2 bg-[#5F7161] mr-3"
                  onClick={()=>{
                    navigate("/update-books");
                    setSave(item);}
                  }>Update</button>
                <button className="rounded px-4 py-2 text-zinc-900 bg-pink-200 mt-3">Delete</button>
                </td>
            </tr>
             ))}
        </table>
      </div>
    </div>
    </>
  );
};

export default LandingAdmin;
