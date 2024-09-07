const ITEMS = [1,2,3]
import Button from "./Button";
import USERS from "../data/users"; // default export olduğu için bu doğru kullanım

function UserList(){
    return (
    <> 
    <h1>Kullanıcı Listesi</h1>
    {/* <ul>
        <li>Lorem.</li>
        <li>Perferendis!</li>
        <li>Eos.</li>
        <li>Eum?</li>
        <li>Aliquid?</li>
    </ul> */}
     <ul>
    {USERS.map((user, index) => (
        <li key={index}>{user}</li>
    ))}
    </ul>
    <hr />
    
    <Button />
    <hr />

    </>
    );
}

function SingleUser(){
    return(
        <h3>Single User Component içindeki bilgi</h3>
    )
}
export {UserList,ITEMS,SingleUser};
export default UserList;