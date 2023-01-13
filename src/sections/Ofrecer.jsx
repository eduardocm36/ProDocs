import "../styles/ofrecer.css";
import MenosTime from "../assets/menostime.svg";
import process from "../assets/process.svg";
import documents from "../assets/document.svg";
import interfaz from "../assets/interfaz.svg";
import suport from "../assets/support.svg";
import segurity from "../assets/segurity.svg";
import { Title } from "./components/titles";

function animSticky() {
  window.addEventListener("scroll", function () {
    var textSection2 = document.querySelector(".text2");
    var textSection3 = document.querySelector(".text3");
    var textSection5 = document.querySelector(".text5");
    var textSection6 = document.querySelector(".text6");

    var imgElementB = document.querySelector(".ofrecerImg2 img");
    var imgElementA = document.querySelector(".ofrecerImg1 img");

    if (textSection2.getBoundingClientRect().top < 400) {
      imgElementA.src = process;
    } else {
      imgElementA.src = MenosTime;
    }
    if (textSection3.getBoundingClientRect().top < 400) {
      imgElementA.src = documents;
    }

    if (textSection5.getBoundingClientRect().top < 400) {
      imgElementB.src = suport;
    } else {
      imgElementB.src = interfaz;
    }
    if (textSection6.getBoundingClientRect().top < 400) {
      imgElementB.src = segurity;
    }
  });
}

export function Ofrecer() {
  const properties = [
    {
      key: 1,
      class: "text1",
      img: MenosTime,
      title: "Bajos Tiempos de Respuesta.",
      text: "Obtén resultados rápidamente con nuestra plataforma eficiente. Sin largas esperas, nuestro sistema está diseñado para brindarte un servicio rápido. Con tiempos de respuesta óptimos en el mercado, podrás tomar decisiones precisas y rápidas.",
    },
    {
      key: 2,
      class: "text2",
      img: process,
      title: "Personaliza tus Procesos.",
      text: "Adapta nuestra plataforma a tus necesidades específicas con opciones de personalización. Con nuestra plataforma, puedes elegir los procesos que deseas automatizar y adaptarlos a tu negocio. Ahorra tiempo y esfuerzo en tareas repetitivas y enfócate en lo importante.",
    },
    {
      key: 3,
      class: "text3",
      img: documents,
      title: "Genera Automáticamente tus Documentos.",
      text: "Genera automáticamente certificados, diplomas, permisos y más en nuestra plataforma. Ahorra tiempo y errores humanos, mejora la eficiencia de tus procesos y guarda y comparte tus documentos de manera segura.",
    },
    {
      key: 4,
      class: "text4",
      img: interfaz,
      title: "Ofrece una Interfaz amigable a tus usuarios.",
      text: "Nuestra plataforma está diseñada para ser fácil de usar y entender, para que puedas navegar con facilidad. Ofrecemos una interfaz intuitiva y personalizable para mejorar tu experiencia de usuario. Ahorra tiempo y esfuerzo en la curva de aprendizaje.",
    },
    {
      key: 5,
      class: "text5",
      img: suport,
      title: "Soporte y Guías Personalizadas.",
      text: "Nuestro equipo de soporte está siempre disponible para ayudarte con cualquier pregunta o problema que puedas tener. Ofrecemos guías personalizadas para ayudarte a sacar el máximo provecho de nuestra plataforma. No estás solo, estamos aquí para ayudarte.",
    },
    {
      key: 6,
      class: "text6 ",
      img: segurity,
      title: "Mantiene tus datos Seguros.",
      text: "La seguridad de tus datos es nuestra prioridad. Nuestra plataforma cuenta con medidas de seguridad avanzadas para proteger tus datos personales y garantizar la confidencialidad y seguridad de tus datos.",
    },
  ];

  return (
    <div id="ofrecer" className="o_Container" onScrollCapture={animSticky()}>
      <Title title={"¿Qué Ofrecemos?"} />
      <div className="propertyContainer">
        <div className="imgContainer">
          <div className="contPropImgs">
            <div className="ofrecerImg1">
              <img src={MenosTime} alt="" />
            </div>
          </div>
        </div>
        <div className="descriptionContainer">
          {properties.map((property) => {
            if (property.key < 4) {
              return (
                <div className={property.class}>
                  <h2>{property.title}</h2>
                  {property.text}
                </div>
              );
            } else {
              return (
                console.log("xd")
              )
            }
          })}
        </div>
      </div>
      <div className="propertyContainer">
        <div className="descriptionContainer">
          {properties.map((property) => {
            if (property.key >= 4 && property.key <= 6) {
              return (
                <div className={property.class}>
                  <h2>{property.title}</h2>
                  {property.text}
                </div>
              ); 
            } else {
              return (
                console.log("xd")
              )
            }
          })}
        </div>
        <div className="imgContainer">
          <div className="contPropImgs">
            <div className="ofrecerImg2">
              <img src={interfaz} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        {properties.map((property) => {
            return (
              <div className="OfrecerMovil">
                <div className="descriptionContainerM">
                  <div className="textM">
                    <h2>{property.title}</h2>
                    {property.text}
                  </div>
                </div>
                <div className="imgContainerM">
                  <div className="contPropImgsM">
                    <div className="ofrecerImg1M">
                      <img src={property.img} alt="" />
                    </div>
                  </div>
                </div>
              </div> 
            );
        })}
      </div>
    </div>
  );
}
