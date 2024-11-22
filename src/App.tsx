import "./index.css";
import Carousel from "./slider/Carousel";
import Tarifas from './Tarifas';
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <div className="barbershop">
        <h1 className="barbershop__title">Dav's & Ant</h1>
        <h3 className="barbershop__title--secondary">Barbershop</h3>
        <p className="barbershop__description">
          Un servicio como nunca antes visto
          Lleva tu estilo a otro nivel
        </p>
        <a className="barbershop__link" href="#">
          Más sobre nosotros
        </a>
      </div>
      <Carousel />

      <div className="barbershop barbershop--second">
        <div className="barbershop__item">
          <div className="barbershop__img barbershop__img--first"></div>
          <div className="barbershop__card">
            <h3 className="barbershop__card-title">Rock climbing</h3>
            <p className="barbershop__card-description">
              The goal is to reach the summit of a formation or the endpoint of
              a usually pre-defined route without falling.
            </p>
            <a className="barbershop__card-link" href="#">
              Learn more
            </a>
          </div>
        </div>
        <div className="barbershop__item">
          <div className="barbershop__img barbershop__img--second"></div>
          <div className="barbershop__card">
            <h3 className="barbershop__card-title">Caving</h3>
            <p className="barbershop__card-description">
              Exploring underground through networks of tunnels and passageways,
              which can be natural or artificial.
            </p>
            <a className="barbershop__card-link" href="#">
              Learn more
            </a>
          </div>
        </div>
        <div className="barbershop__item">
          <div className="barbershop__img barbershop__img--third"></div>
          <div className="barbershop__card">
            <h3 className="barbershop__card-title">Parachuting</h3>
            <p className="barbershop__card-description">
              Jumping from an aeroplane and falling through the air before
              opening your parachute.
            </p>
            <a className="barbershop__card-link" href="#">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="blank">
        <Tarifas></Tarifas>
      </div>
      <div>
      <Footer></Footer>
      </div>

    </div>
  );
};

export default App;
