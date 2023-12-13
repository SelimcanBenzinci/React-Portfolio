import Button from "./Button";
const ITEMS=[1,3,4,5,6,7,8,9,10]

function UserList(){
    return(
        <>
        <h2>Kullanici listesi</h2>
        <Button />
        <ul>
            <li>Lorem.</li>
            <li>Consectetur?</li>
            <li>Officiis!</li>
            <li>Quidem.</li>
            <li>Ex.</li>
        </ul>
        
        </>
    )
}
function SingleUser(){
    return(
        <>
        <hr />
        <h3>Tek Kullanici Tanimi</h3>

        </>
    )
}
export { ITEMS,SingleUser } 
export default UserList