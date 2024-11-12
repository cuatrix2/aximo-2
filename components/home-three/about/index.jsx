"use client";
import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import React from "react";

import Img1 from "../../../public/images/banner/1.jpg";
import Img2 from "../../../public/images/banner/2.png";

function About() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row">
					{/* Columna de imágenes con carrusel */}
					<div className="col-lg-6 d-flex flex-column align-items-center">
						<FadeInUp className="aximo-content-thumb mb-4">
							<Carousel>
								<Carousel.Item>
									<Image
										src={Img1}
										alt="Imagen 1"
										width={600}
										height={800}
										className="img-fluid rounded"
									/>
								</Carousel.Item>
								<Carousel.Item>
									<Image
										src={Img2}
										alt="Imagen 2"
										width={600}
										height={800}
										className="img-fluid rounded"
									/>
								</Carousel.Item>
							</Carousel>
						</FadeInUp>
					</div>

					{/* Columna de contenido */}
					<div className="col-lg-6 d-flex align-items-center">
						<div className="aximo-default-content familjen-grotesk text-center">
							<h2>Trabajamos por ti</h2>
							<p>
								Nuestra misión es brindarte el mejor servicio posible, adaptado a tus
								necesidades y siempre con un enfoque en la excelencia y la satisfacción
								del cliente.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
