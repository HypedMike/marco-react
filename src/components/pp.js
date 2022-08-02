import '../css/pp.css';

export function ProfilePicture(props){
    return (
        <div>
            <img src={props.url} className="pp"></img>
        </div>
    )
}