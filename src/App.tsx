import "./index.css";
import ImageSalider from "./slide/ImageSalider.tsx";

//array que muestra las imagenes que se mostraran en el slide
const slides = [
  {
    url: "https://i.seadn.io/s/raw/files/c74724466463fb604833f1158e88b14f.jpg?auto=format&dpr=1&w=1000",
  },
  { url: "img/npc--1.png" },
  { url: "https://via.placeholder.com/600x400/0000FF" },
];
const App = () => {
  return (
    <div>
      <div
        style={{
          width: "400px",
          height: "600px",
          margin: "0 auto",
        }}
      >
        <ImageSalider slides={slides} />
      </div>
    </div>
  );
};

export default App;
