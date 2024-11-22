import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./add.css";

// https://react-slick.neostack.com
//npm install react-slick --save
//npm install slick-carousel --save

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
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <div className="container__img">
      <h2> single item</h2>
      <Slider {...settings}>
        <div className="card">
          <img src="/img/a.jpg" className="card__foto" />
          <h3>slider</h3>
          <p>Use una libreria de reacd</p>
        </div>
        <div className="card">
          <img className="card__foto" src="/img/slider--npc--2.jpeg" />
          <h3>slider</h3>
          <p>Use una libreria de reacd</p>
        </div>
        <div className="card">
          <img className="card__foto" src="/img/slider--npc--3.jpeg" />
          <h3>slider</h3>
          <p>Use una libreria de reacd</p>
        </div>
        <div className="card">
          <img className="card__foto" src="/img/slider--npc--4.jpeg" />
          <h3>slider</h3>
          <p>Use una libreria de reacd</p>
        </div>
        <div className="card">
          <img className="card__foto" src="/img/a.jpg" />
          <h3>slider</h3>
          <p>Use una libreria de reacd</p>
        </div>
        <div className="card">
          <img className="card__foto" src="/img/a.jpg" />
          <h3>slider</h3>
          <p>Use una libreria de reacd</p>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
