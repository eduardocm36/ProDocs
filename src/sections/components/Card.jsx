import "../../styles/card.css";

export function Card({ img, name, text, rol }) {
  return (
    <div id="cards">
      <div className="containerCard">
        <div className="card">
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path />
              </svg>

              <img className="card__thumb" src={img} alt="" />

              <div className="card__header-text">
                <h3 className="card__title">{name}</h3>
                <span className="card__status">{rol}</span>
              </div>
            </div>

            <p className="card__description">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
