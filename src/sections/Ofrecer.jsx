import "../styles/ofrecer.css";
import MenosTime from "../assets/menostime.svg";
import process from "../assets/process.svg";
import documents from "../assets/document.svg";
import interfaz from "../assets/interfaz.svg";
import suport from "../assets/support.svg";
import segurity from "../assets/segurity.svg";

export function Ofrecer() {
  const properties = [
    {
      key: 1,
      img: MenosTime,
      title: "Bajos Tiempos de Respuesta",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, optio iste nam sapiente molestias iusto explicabo animi sed provident perspiciatis eum odio odit officia vitae reiciendis! Harum nisi magnam error?",
    },
    {
      key: 2,
      img: process,
      title: "Personaliza tus Procesos",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, optio iste nam sapiente molestias iusto explicabo animi sed provident perspiciatis eum odio odit officia vitae reiciendis! Harum nisi magnam error?",
    },
    {
      key: 3,
      img: documents,
      title: "Genera Automáticamente tus Documentos",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, optio iste nam sapiente molestias iusto explicabo animi sed provident perspiciatis eum odio odit officia vitae reiciendis! Harum nisi magnam error?",
    },
    {
      key: 4,
      img: interfaz,
      title: "Ofrece una Interfaz amigable a tus usuarios",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, optio iste nam sapiente molestias iusto explicabo animi sed provident perspiciatis eum odio odit officia vitae reiciendis! Harum nisi magnam error?",
    },
    {
      key: 5,
      img: suport,
      title: "Soporte y Guías Personalizadas",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, optio iste nam sapiente molestias iusto explicabo animi sed provident perspiciatis eum odio odit officia vitae reiciendis! Harum nisi magnam error?",
    },
    {
      key: 6,
      img: segurity,
      title: "Mantiene tus datos Seguros",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, optio iste nam sapiente molestias iusto explicabo animi sed provident perspiciatis eum odio odit officia vitae reiciendis! Harum nisi magnam error?",
    },
  ];
  return (
    <div className="o_Container">
      <div className="propertyTitle">
        <h2 className="sectionTitle">¿Qué Ofrecemos?</h2>
        <div className="divider"></div>
      </div>
      <div className="propertyContainer">
        <div>
          <div className="imgContainer">
            {properties.map((property) => {
              if (property.key >= 1 && property.key <= 3) {
                return (
                  <div
                    className="imgProperty"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                  >
                    <img src={property.img} />
                  </div>
                );
              }
            })}
          </div>
          <div className="descriptionContainer">
            {properties.map((property) => {
              if (property.key >= 1 && property.key <= 3) {
                return (
                  <div className="descProperty">
                    <h3>{property.title}</h3>
                    <p>{property.text}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
