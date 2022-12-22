import Slider from "../Slider";
import Gallery from "../Gallery";

export default function Home({ setIsLight, isLight }) {
  return (
    <>
      <Slider setIsLight={setIsLight} isLight={isLight} />
      <Gallery />
    </>
  );
}
