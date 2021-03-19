
const NavItem = ({title, icon, selected}) => {

    return (
        <div className={`nav-item ${selected && "selected"}`}>
            <img 
            className="nav-item-icon"
            src={icon}
            />
            <div className="nav-item-title">
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default NavItem