import "../styles/presentacion.css";

function parallax() {
  document.addEventListener("mousemove", parallax);

  function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {
      var moving_value = move.getAttribute("data_value");
      var x = (e.clientX + moving_value) / 250;
      var y = (e.clientY + moving_value) / 250;

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  }
}

export function Presentacion() {
  return (
    <>
      <div className="containerPresent" id="inicio">
        <div id="fondo" className="fondoPresent"></div>
        <div
          id="sompreros"
          className="sombreros object"
          data-value="-2"
          onMouseMoveCapture={parallax()}
        ></div>
        <div id="alumnos" className="alumnos"></div>
        <p className="textPresent">
          Digitalizar tus procesos, es la forma más fácil y rápida de brindar
          grados académicos.
        </p>
      </div>
    </>
  );
}
