import React from "react";

const App = () => {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1723408020169-9ed1e5eac4d3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="d-block w-100"
              style={{
                height: "200px",
                objectFit: "cover",
              }}
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="
            https://plus.unsplash.com/premium_photo-1671650125917-4cef01cd7574?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="d-block w-100"
              alt="..."
              style={{
                height: "200px",
                objectFit: "cover",
              }}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1726828952056-5efd2d76c22b?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="d-block w-100"
              alt="..."
              style={{
                height: "200px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default App;
