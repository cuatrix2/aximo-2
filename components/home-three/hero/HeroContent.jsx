import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "@/components/animation/FadeInStaggerTwo";
import Image from "next/image";
import StarImg from "../../../public/images/v3/star.svg";
import Link from "next/link";


function HeroContent() {
  return (
    <FadeInStaggerTwo className="aximo-hero-content3">
      <FadeInStaggerTwoChildren>
        <p>
          <span>Colegio de Abogados de Tungurahua</span>
        </p>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren>
        <h1>El Futuro Legal De Tungurahua</h1>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren>
        <p className="text-justify">
          En el Colegio de Abogados de Tungurahua, no solo defendemos la
          justicia  la definimos. Únete a una red de profesionales apasionados
          que están moldeando el panorama legal de nuestra región.
        </p>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren>
        <div className="d-flex justify-content-center mt-4">
          <Link href="join-us" className="btn btn-primary me-2">
            Afiliarse <i className="fas fa-arrow-right"></i>
          </Link>
          <Link href="requiriments" className="btn btn-info me-2">
            Requisitos <i className="fas fa-arrow-right"></i>
          </Link>
          
          
        </div>
      </FadeInStaggerTwoChildren>
    </FadeInStaggerTwo>
  );
}

export default HeroContent;
