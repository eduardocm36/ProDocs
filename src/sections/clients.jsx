import undac from "../assets/undac.png"
import {Title} from "./components/titles"
import "../styles/clients.css"

export function Client(){

    const clients = [
        {
            title: "Universidad Nacional Daniel Alcides Carrión",
            img: undac
        }
    ]

    return(
        <div className='containerClient'>
            <div className="contCient">
                <Title title={"Nuestros Clientes"}/>
                {clients.map((client) => {
                    return (
                        <div className="client">
                            <a href="https://gradostitulos.undac.edu.pe/home" target='_blank' rel='noopener noreferrer'>
                                <img src={client.img} alt="Undac"/>
                                <p>{client.title}</p></a>
                        </div>
                    )
                })}
                
            </div>
        </div>
    );
}