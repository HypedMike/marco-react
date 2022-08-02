import '../css/button.css';

export function Button(props){

    if(props.img != null){
        return (
            <div className='button-img' onClick={()=> window.open(props.link, "_self")}>
                <img src={"../img/" + props.img} width="200px" />
            </div>
        )
    }

    return (
        <div>
            <button className='button' onClick={()=> window.open(props.link, "_self")}>
                {props.name}
            </button>
        </div>
    )
}