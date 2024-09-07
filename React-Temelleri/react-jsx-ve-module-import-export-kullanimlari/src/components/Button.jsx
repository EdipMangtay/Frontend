// function Button(){
//     return <button>Click me</button>
// }

// function Button(props){
//     console.log(props);
//     return <button className={props.className} dataId={props.dataId} info ={props.info}>Click me</button>
// }

function Button(props){
    console.log(props);
    const {className,dataId,info} = props;
    return <button className={className} dataId={dataId} info ={info}>Click me</button>
}
export default Button;