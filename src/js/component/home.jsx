import React,{useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let [activeLight,setActiveLight] = useState("")
	let [iterador,setIterador] = useState(0)
	let handleLight= (color) => {
		setActiveLight(color)
	}
	let colors = ["red","yellow","green"]
	let cycleLights = () =>{
		if(iterador == colors.length){
			setIterador(0)
			setActiveLight(colors[iterador])
		}else{
			setActiveLight(colors[iterador])
			setIterador(iterador + 1)
		}
		
	}

	return ( 
		<div className="container m-auto d-flex align-items-center flex-column">
			<div className="d-flex justify-content-center poste"></div>
			<div className="semaforo bg-dark p-2">
			<div className={`red light ${activeLight === "red" ? "active" : ""}`} onClick={()=> handleLight("red")}></div>
			<div className={`yellow light ${activeLight === "yellow" ? "active" : ""}`} onClick={()=> handleLight("yellow")}></div>	
			<div className={`green light ${activeLight === "green" ? "active" : ""}`} onClick={()=> handleLight("green")}></div>
			</div>
			<button onClick={cycleLights} type="button" className="btn btn-primary my-3">Cambia de color</button>
		</div>
	);
};

export default Home;
