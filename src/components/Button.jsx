export default function Tus({name,link}){
    const openLinkInNewTab = () => {
        window.open(link, '_blank');
    }
    return(
        <button onClick={openLinkInNewTab}>{name.toUpperCase()}</button>
    )
}

//export default Button