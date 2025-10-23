import facebook from "../assets/facebook-logo.png"
function Bottom(){
    return(
        <div className="bot">
        <div className="bottom">
            <p>Blog</p>
            <p>FAQs</p>
            <p>Contact Us</p>
        </div>
        <div>
           <img src={facebook} style={{height:"50px",width:"50px"}} />
          
        </div>
        </div>
    )
}
export default Bottom;