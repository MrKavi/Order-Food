import { Carousel } from "react-bootstrap";

const Carousol = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel interval={2000} controls={false}>
        <Carousel.Item>
          <img
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
            className=""
            src="https://source.unsplash.com/random/?burger"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
            src="https://source.unsplash.com/random/?mango"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
            src="https://source.unsplash.com/random/?barbeque"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div
        className="carousel-caption"
        style={{ position: "absolute", bottom: "100px" }}
      >
        <form class="d-flex" style={{ zIndex: "10" }}>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Carousol;
