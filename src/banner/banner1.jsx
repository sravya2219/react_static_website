import banner1 from "../assets/banner_1.jpg"
import banner2 from "../assets/banner_2.jpg"
import banner3 from "../assets/banner_3.jpg"
function Banner1() {
    const cards = [{ title: "WOMEN'S", imageurl: banner1 }, { title: "ACCESSIORS", imageurl: banner2 }, { title: "MEN'S", imageurl: banner3 }]
    return (
        <div className="banner" style={{ display: "flex", justifyContent:"center",marginTop:"40px",gap:"20px"}}>
            {cards.map((value, index) => <div key={index} style={{ position: "relative" }}>
                <img src={value.imageurl} height="300px" width="400px" />
                <p style={{ position: "absolute", top: "100px", left: "100px", zIndex: "1", backgroundColor: "whitesmoke",fontSize:"25px",fontWeight:"bolder"}}>{value.title}</p>

            </div>)}

        </div>
    )
}
export default Banner1;