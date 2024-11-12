"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderData = [
	{
		id: crypto.randomUUID(),
		title: "La ley es nuestra herramienta, pero la ética es nuestro norte",
	},
	{
		id: crypto.randomUUID(),
		title: "Ser abogado es un honor y una responsabilidad",
	},
	{
		id: crypto.randomUUID(),
		title: "Defender los derechos,",
	},
	{
		id: crypto.randomUUID(),
		title: "La justicia, se alcanza con la equidad y ética ",
	},
	{
		id: crypto.randomUUID(),
		title: "Un abogado es quien protege la verdad",
	},
	{
		id: crypto.randomUUID(),
		title: "La abogacía es el arte de resolver conflictos",
	},
	{
		id: crypto.randomUUID(),
		title: "La ley es nuestra herramienta, pero la ética es nuestro norte",
	},
	{
		id: crypto.randomUUID(),
		title: "Ser abogado es un honor y una responsabilidad",
	},
	{
		id: crypto.randomUUID(),
		title: "Defender los derechos",
	},
	{
		id: crypto.randomUUID(),
		title: "La justicia, se alcanza con la equidad y ética",
	},
	{
		id: crypto.randomUUID(),
		title: "Un abogado es quien protege la verdad",
	},
	{
		id: crypto.randomUUID(),
		title: "La abogacía es el arte de resolver conflicto",
	},
];

const swiperSettings = {
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	slidesPerView: "auto",
	allowTouchMove: false,
	// disableOnInteraction: true,
	modules: [Autoplay],
};

function AutoSlider() {
	return (
		<div className="aximo-auto-text-slider-section">
			<div className="swiper aximo-auto-slider">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="aximo-auto-slider-item">
									<h3>{item.title}</h3>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default AutoSlider;
