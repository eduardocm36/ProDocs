import "../styles/contact.css";
import {Title} from "./components/titles"

export function Contact() {
  return (
    <div className="containerContact" id="Contact">
    <Title title={"Contáctanos"}/>
    <div className="containerContacto">
        <div className="containerInfo">
            <h3>¿Listo para probar ProDocs?</h3>
            <p>
            Puedes contactarte con nosotros si deseas información para adquirir
            una licencia, alternativamente puedes usar nuestros siguientes medios.
            </p>
            <div>+51 996 815 228</div>
            <div>contacto.prodocs@gmail.com</div>
        </div>
        <div className="containerForm">
            <h3>Envíanos un Mensaje</h3>
            <form action="">
                <input type="text" name="" id="nombre" placeholder="Ingrese su Nombre"/>
                <input type="correo" name="" id="email" placeholder="Ingrese su Correo"/>
                <textarea name="" id="message" cols="30" rows="10" placeholder="Redacte su mensaje"></textarea>
            </form>
        </div></div>
    </div>
  );
}
