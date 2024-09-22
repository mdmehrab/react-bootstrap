// import React, { useEffect, useState } from "react";
// import axios, { Axios } from "axios";
// export const FetchData = () => {
//   const [albums, setAlbums] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       const res = await axios.get(
//         `https://jsonplaceholder.typicode.com/albums`
//       );
//       setAlbums(res.data);
//     };
//     getData();
//   }, []);
//   return (
//     <>
//       <div id="carouselExample" className="carousel slide">
//         {albums.map((album) => (
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <p>{album.id}</p>
//               <p>{album.userId}</p>
//               <p>{album.title}</p>
//             </div>
//           </div>
//         ))}

//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </>
//   );
// };
import React, { useEffect, useState } from "react";
import axios from "axios";

export const FetchData = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/albums`
      );
      setAlbums(res.data);
    };
    getData();
  }, []);

  return (
    <>
      <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {albums.map((album, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`} // Only the first item is active
              key={album.id}
            >
              <div className="d-flex flex-column align-items-center bg-danger">
                <h5>Album ID: {album.id}</h5>
                <h6>User ID: {album.userId}</h6>
                <p>{album.title}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
