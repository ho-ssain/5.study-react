import Accordion from "./components/01.Accordion";
import RandomColorGenerator from "./components/02.random-color";
import StarRating from "./components/03.Star-Rating";
import ImageSlider from "./components/04.Image-Slider";
import LoadMore from "./components/05.Load-More-Button";

function App() {
  return (
    <>
      <hr />
      <Accordion />

      <hr />
      <RandomColorGenerator />

      <hr />
      <StarRating />

      <hr />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />

      <hr />
      <LoadMore />
    </>
  );
}

export default App;
