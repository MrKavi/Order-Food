import { Carousel } from "react-bootstrap";
import "../style/animatedCarousel.css";
const CarouselHome = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel
        interval={3000}
        controls={false}
        pauseOnHover={true}
        wrap={true}
      >
        <Carousel.Item>
          <img
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
            className="animated-carousel-item"
            src="https://source.unsplash.com/random/?burger"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="animated-carousel-item"
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
            src="https://source.unsplash.com/random/?mango"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="animated-carousel-item"
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

export default CarouselHome;
