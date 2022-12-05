import React from "react"
import { books } from "../DataDummy/dummybooks";
import { useNavigate } from "react-router-dom";


const CardBooks = () =>{
    const navigate = useNavigate()

    return(
        <div className="card flex flex-wrap"
        
        >
            {books.map((item, index) => (
            <div key={index} className="m-5 bg-[#5F7161] rounded p-3 text-white text-justify w-96 h-96 cursor-pointer"
            onClick={() => navigate(`/detail-book/${index}`)}
            >
                <div className="m-1 rounded p-1 text-white flex justify-center">
                <img alt="" src={item.image} className="h-64 w-64 object-cover rounded-md" />
                </div>
                <div className="m-1 rounded p-1 text-white text-justify">
                <h4 className="font-bold text-lg">title: {item.title}</h4>
                </div>
                <div className="m-1 rounded p-1 text-white text-justify">
                <h4>penulis: {item.penulis}</h4>
                </div>
            </div>
            ))}
      </div>
    )
}

export default CardBooks