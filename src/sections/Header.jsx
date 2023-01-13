import "../styles/header.css";
import logo from "../assets/logo2.png";

export function Header() {
  const navigations = [
    {
      title: "Inicio",
      to: "#inicio",
    },
    {
      title: "Nosotros",
      to: "#ofrecer",
    },
    {
      title: "Contáctenos",
      to: "#Contact",
    },
  ];

  return (
    <header className="header">
      <div className="titleheader">
        <img src={logo} alt="logo" className="header_logo" />
        <h1>ProDocs</h1>
      </div>
      <button
        onClick={() => {
          const buttonNav = document.querySelector(".navBar");
          const icon = document.querySelector(".fontIcon");
          const visibility = buttonNav.getAttribute("data-visible");

          if (visibility === "false") {
            buttonNav.setAttribute("data-visible", true);
            icon.setAttribute(
              "d",
              "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            );
          } else if (visibility === "true") {
            buttonNav.setAttribute("data-visible", false);
            icon.setAttribute(
              "d",
              "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
            );
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="iconMenu"
          aria-controls="navBar"
          aria-expanded="false"
        >
          <path
            className="fontIcon"
            fill="#000000"
            d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
          />
        </svg>
      </button>
      <nav className="navBar" data-visible="false">
        {/* Se Imprime las opciones en Encabezado con .map() */}
        {navigations.map((navigation) => {
          return (
            <a href={navigation.to} className="navBarOptions">
              {navigation.title}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
