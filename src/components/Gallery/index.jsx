import { Link } from "react-router-dom";
import cards from "./cards";

import arrow from "../../assets/icons/chevron-right_WHITE.svg";
import line from "../../assets/icons/line.svg";

import "./gallery.css";

export default function Gallery() {
  return (
    <div className='grid'>
      <div className='col col41'>
        <div className='text'>
          <div className='title'>
            o2. <img className='cross' src={line} />
          </div>
          <h3>
            marki <br /> keune
          </h3>
        </div>
      </div>
      {cards.map((card) => {
        const cn = "col " + card.size;
        let title;
        if (card.text2) {
          title = (
            <h3>
              {card.text}
              <br />
              {card.text2}
            </h3>
          );
        } else {
          title = <h3>{card.text}</h3>;
        }
        return (
          <div className={cn} key={card.size}>
            <img src={card.img} alt={card.text + " " + card.text2 + " preview example"} />
            <div className='text'>
              {title}
              <Link>
                <b></b> <span>odkryj serie</span> <img src={arrow} alt='arrow right' />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
