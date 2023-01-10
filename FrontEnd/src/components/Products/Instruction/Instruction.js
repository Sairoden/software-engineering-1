import "./Instruction.css";

import Instruction1 from "../../../assets/Extra/instruction1.webp";
import Instruction2 from "../../../assets/Extra/instruction2.webp";
import Footer from "../../Footer/Footer";

const Instruction = () => {
  return (
    <>
      <div className="instruction_container">
        <h1>
          <bold>WASH & CARE INSTRUCTIONS</bold>
        </h1>
        <h3>
          All Isekai t-shirts, sweaters, hoodies and jackets (except denim
          jackets) are made of out of 100% cotton and should be cared for as a
          living, natural garment.
        </h3>
        <span>
          In our experience, the best way to keep your clothing as fresh and
          crisp as the day that you got them is to follow these simple wash &
          care instructions:
        </span>
        <ul className="descriptions">
          <li>🦁 Always wash together with similar colors.</li>
          <li>🦒 Turn the piece inside-out before washing.</li>
          <li>🐯 Do not use fabric softener when washing.</li>
          <li>🐶 Machine wash at max 30°C.</li>
          <li>
            🦝 Avoid the dryer at all costs. Heat is the enemy of all cotton
            garments.
          </li>
          <li>
            🦊 Never iron on the print. If you have a wrinkle in the print, just
            turn the garment inside-out and iron on the reverse side of the
            print.
          </li>
          <li>
            🐵 Most washers have a spin cycle that gets most of the water out of
            the garment. If not, go ahead and give the garment a squeeze after
            washing to get the excess water out.
          </li>
        </ul>
        <img src={Instruction1} alt="Facemask wash & care" />
        <img src={Instruction2} alt="Wash & care" />
      </div>
      <Footer />
    </>
  );
};

export default Instruction;
