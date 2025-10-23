import product1 from "../assets/product_1.png"
import product2 from "../assets/product_2.png"
import product3 from "../assets/product_3.png"
import product4 from "../assets/product_4.png"
import product5 from "../assets/product_5.png"
import product6 from "../assets/product_6.png"
import product7 from "../assets/product_7.png"
import product8 from "../assets/product_8.png"
import product9 from "../assets/product_9.png"
import product10 from "../assets/product_10.png"
function Arrivals() {
    const arrivals=[{imageurl:product1,title:"Fujifilm X100T 16 MP Digital Camera (Silver)",cost:"$520.0"},
        {imageurl:product2,title:"Samsung CF591 Series Curved 27-Inch FHD Monitor",cost:"$610.0"},
        {imageurl:product3,title:"Blue Yeti USB Microphone Blackout Edition",cost:"$120.0"},
        {imageurl:product4,title:"DYMO LabelWriter 450 Turbo Thermal Label Printer",cost:"$420.0"},
        {imageurl:product5,title:"Pryma Headphones, Rose Gold & Grey",cost:"$180.0"},
        {imageurl:product6,title:"Fujifilm X100T 16 MP Digital Camera (Silver)",cost:"$520.0"},
        {imageurl:product7,title:"Fujifilm X100T 16 MP Digital Camera (Silver)",cost:"$520.0"},
        {imageurl:product8,title:"Fujifilm X100T 16 MP Digital Camera (Silver)",cost:"$520.0"},
        {imageurl:product9,title:"Fujifilm X100T 16 MP Digital Camera (Silver)",cost:"$520.0"},
        {imageurl:product10,title:"Fujifilm X100T 16 MP Digital Camera (Silver)",cost:"$520.0"}
    ]
    return (
        <div style={{display: "flex",
        flexWrap: "wrap",               
        justifyContent: "center",
        padding: "20px",
        marginTop:"20px"}}>
           {arrivals.map((value,index)=><div key={index}style={{ width: "17%",                
            margin: "10px 0",
            textAlign: "center",
            boxSizing: "border-box",
             border:"2px solid whitesmoke"
           }}>
                 <img src={value.imageurl}  style={{
              width: "100%",
              height: "auto"
              
            }} alt="" />
                 <p style={{textAlign:"center",}}>{value.title}</p>
                 <p  style={{textAlign:"center" ,color:"red"}}>{value.cost}</p>
           </div>)}
        </div>
    )
}
export default Arrivals;