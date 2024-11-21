import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./add.css";

// https://react-slick.neostack.com

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Arrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};
function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <h2> single item</h2>
      <Slider {...settings}>
        <div className="card">
          <img
            src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/19/16529545004859.jpg"
            className="w-100"
          />
          <h3>slider</h3>
          <p>Use una libreria de reacd</p>
        </div>
        <div className="card">
          <img
            src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/19/16529545004859.jpg"
            className="w-100"
          />
          <h3>slider</h3>
          <p>Use una libreria de reacd</p>
        </div>
        <div className="card">
          <img
            src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/19/16529545004859.jpg"
            className="w-100"
          />
          <h3>slider</h3>
          <p>Use una libreria de reacd</p>
        </div>
        <div className="card">
          <img
            src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/19/16529545004859.jpg"
            className="w-100"
          />
          <h3>slider</h3>
          <p>Use una libreria de reacd</p>
        </div>
        <div className="card">
          <img
            src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/19/16529545004859.jpg"
            className="w-100"
          />
          <h3>slider</h3>
          <p>Use una libreria de reacd</p>
        </div>
        <div className="card">
          <img
            src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/19/16529545004859.jpg"
            className="w-100"
          />
          <h3>slider</h3>
          <p>Use una libreria de reacd</p>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
