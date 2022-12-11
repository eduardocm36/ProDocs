import "../styles/presentacion.css";

function parallax() {
  document.addEventListener("mousemove", parallax);

  function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {
      var moving_value = move.getAttribute("data_value");
      var x = (e.clientX + moving_value) / 250;
      var y = (e.clientY + moving_value) / 250;
      console.log(x);

      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  }
}

export function Presentacion() {
  return (
    <>
      <div className="containerPresent">
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
        <h2
          id="title"
          className="titlePresent"
          // data-aos="fade-up"
          // data-aos-duration="2700"
        >
          ProDocs
        </h2>
      </div>
    </>
  );
}
