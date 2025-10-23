function NavBar(){
    return (
        <div className="leftnav">
        <div>
          <span style={{color:"black", fontSize:"30px"}}>COLO</span>
           <span style={{color:"red",fontSize:"30px"}}>SHOP</span>
        </div>
        <div className="rightnav">
            <p>HOME</p>
            <p>SHOP</p>
            <p>PRMOTIONS</p>
            <p>PAGES</p>
            <p>BLOG</p>
            <p>CONTACT</p>
        </div>
        </div>
    );
}
export default NavBar;