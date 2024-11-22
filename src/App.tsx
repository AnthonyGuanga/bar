import "./index.css";
import Carousel from "./slider/Carousel";
import Tarifas from "./Tarifas";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <div className="barbershop">
        <h1 className="barbershop__title">Dav's & Ant</h1>
        <h3 className="barbershop__title--secondary">Barbershop</h3>
        <p className="barbershop__description">
          Un servicio como nunca antes visto Lleva tu estilo a otro nivel
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
            <h3 className="barbershop__card-title">Davis Manchester</h3>
            <p className="barbershop__card-description">
              Peluquero de primera, Estudió con los mejores en Perú.
            </p>
            <a className="barbershop__card-link" href="#">
              Más sobre Davis
            </a>
          </div>
        </div>
        <div className="barbershop__item">
          <div className="barbershop__img barbershop__img--second"></div>
          <div className="barbershop__card">
            <h3 className="barbershop__card-title">Antonio Montana</h3>
            <p className="barbershop__card-description">
              Barbero experimentado en barbas amplias, muy buen manejo de la
              navaja y excelente profesional.
            </p>
            <a className="barbershop__card-link" href="#">
              Más sobre Antonio
            </a>
          </div>
        </div>
        <div className="barbershop__item">
          <div className="barbershop__img barbershop__img--third"></div>
          <div className="barbershop__card">
            <h3 className="barbershop__card-title">Felipe García</h3>
            <p className="barbershop__card-description">
              Artista total, creador de nuevas tendencias. Excelente humorista.
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
