import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
import horoscopesObj from "../data/horoscopes";

const Navbar = () => {
  console.log("Navbar Rendering!");
  const horoscopes = Object.keys(horoscopesObj);
  const { setCurrentSign } = useContext(HoroscopeContext);

  return (
    <nav>
      {horoscopes.map((sign) => (
        <span onClick={() => setCurrentSign(sign)} key={sign}>
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
