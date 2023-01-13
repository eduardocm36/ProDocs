import "../../styles/title.css"

export function Title ({title}) {

    return(
        <div className="containerTitle">
            <text>{title}</text>
            <div></div>
        </div>
    )
}