import FadeInRight from "@/components/animation/FadeInRight";
import Image from "next/image";
import ThumbImg from "../../../public/images/v3/inicio1.jpg";
import ShapeAynaImg from "../../../public/images/v3/shape-ayna.png";
import ShapeMonitorImg from "../../../public/images/v3/shape-monitor.png";
import StarShapeImg from "../../../public/images/v3/star-shape.png";
function HeroThumb() {
	return (
		<div className="aximo-hero-thumb3-wrap">
			<div className="aximo-hero-thumb3">
				<Image src={ThumbImg} alt=" Thumb" sizes="100vw" priority />
				
				
			</div>
			
		</div>
	);
}

export default HeroThumb;
