export default function Row(props) {
    //console.log("Inside Row");
    //console.log(props);
    return (
      <div>
        <h1>{props.label}</h1> 
        <span>{props.children}</span>
      </div>
       
    )
}