import FadeInRight from "@/components/animation/FadeInRight";
import Image from "next/image";
import CheckImg from "../../../public/images/v3/check.svg";

import Thumb2Img from "../../../public/images/v3/thumb2.png";
function AboutTwo() {
	const publicaciones = [
	  {
		id: 1,
		title: "Publicación 1",
		description: "Descripción de la publicación 1.",
		image: "", // Puedes cambiarlo por el link correcto de la imagen
	  },
	  {
		id: 2,
		title: "Publicación 2",
		description: "Descripción de la publicación 2.",
		image: "", // Igualmente cambiar la ruta de la imagen
	  },
	  {
		id: 3,
		title: "Publicación 3",
		description: "Descripción de la publicación 3.",
		image: "", // Lo mismo con la imagen
	  },
	];
  
	return (
		<div className="section aximo-section-padding6 overflow-hidden">
		  <div className="container">
			<div className="row">
			  <div className="col-lg-5 order-lg-1 offset-lg-1">
				
			  </div>
			  <div className="col-lg-6">
				<div className="aximo-default-content familjen-grotesk">
				  <h2>Publicaciones</h2>
				  <div
					style={{
					  display: "flex",
					  gap: "30px",
					  overflowX: "auto", // Permite el desplazamiento horizontal si es necesario
					  paddingBottom: "20px", // Espacio adicional en la parte inferior
					}}
				  >
					{publicaciones.map((pub) => (
					  <div
						key={pub.id}
						style={{
						  backgroundColor: "#f9f9f9",
						  padding: "20px",
						  borderRadius: "10px",
						  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
						  flex: "0 0 auto", // Asegura que las publicaciones no se estiren
						  width: "300px", // Ancho fijo para cada publicación
						}}
					  >
						<div className="publicacion-image">
						  <Image
							src={pub.image}
							alt={pub.title}
							width={300}
							height={200}
						  />
						</div>
						<div className="publicacion-content">
						  <h3>{pub.title}</h3>
						  <p>{pub.description}</p>
						</div>
					  </div>
					))}
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  );
  }
  
export default AboutTwo;
