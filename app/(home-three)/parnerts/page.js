import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import React from 'react';

// Imágenes de convenios (importa las imágenes que subiste o usa rutas estáticas si están en tu proyecto)
import logo1 from '../../../public/images/partners/fonles_logo.png';
import logo2 from '../../../public/images/partners/absolut.png';
import logo3 from '../../../public/images/partners/cima.png';
import logo4 from'../../../public/images/partners/dental.png';
import logo5 from '../../../public/images/partners/falcon.png';
import logo6 from '../../../public/images/partners/lati.png';
import logo7 from '../../../public/images/partners/lexis.png';
import logo8 from '../../../public/images/partners/maarti.png';
import logo9 from '../../../public/images/partners/paul.png';
import logo10 from '../../../public/images/partners/puce.png';
import logo11 from '../../../public/images/partners/safe.png';
import logo12 from '../../../public/images/partners/siprov.png';
import logo13 from '../../../public/images/partners/uniandes.png';
import logo14 from '../../../public/images/partners/uta.webp';
import logo15 from '../../../public/images/partners/wf.png';
// ...continúa importando el resto de imágenes

function HomeThree() {
    return (
        <div className="container my-5">
                       <br></br>
                       <br></br>
            {/* Título */}
            <h2 className="text-center mb-4">Convenios</h2>
            
            {/* Descripción */}
            <p className="text-center">
                Contamos con una serie de convenios exclusivos para nuestros abogados, que pueden acceder a través de distintas empresas.
            </p>

            {/* Grid de imágenes */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col text-center">
                    <Image src={logo1} alt="Logo 1" width={200} height={100} />
                </div>
                <div className="col text-center">
                    <Image src={logo2} alt="Logo 2" width={200} height={100} />
                </div>
                <div className="col text-center">
                    <Image src={logo3} alt="Logo 3" width={200} height={100} />
                </div>
                <div className="col text-center">
                    <Image src={logo4} alt="Logo 4" width={200} height={100} />
                </div>
                <div className="col text-center">
                    <Image src={logo5} alt="Logo 5" width={200} height={100} />
                </div>
                <div className="col text-center">
                    <Image src={logo6} alt="Logo 6" width={200} height={100} />
                </div>
                <div className="col text-center">
                    <Image src={logo7} alt="Logo 7" width={200} height={100} />
                </div>
                <div className="col text-center">
                    <Image src={logo8} alt="Logo 8" width={200} height={100} />
                </div>
                <div className="col text-center">
                    <Image src={logo9} alt="Logo 9" width={200} height={100} />
                </div>
                <div className="col text-center">
                    <Image src={logo10} alt="Logo 10" width={200} height={100} />
                </div>
                <div className="col text-center">
                    <Image src={logo11} alt="Logo 11" width={200} height={100} />
                </div>
                <div className="col text-center">
                    <Image src={logo12} alt="Logo 12" width={200} height={100} />
                </div>
                <div className="col text-center">
                    <Image src={logo13} alt="Logo 13" width={200} height={100} />
                </div>
                <div className="col text-center">
                    <Image src={logo14} alt="Logo 14" width={200} height={100} />
                </div>
                <div className="col text-center">
                    <Image src={logo15} alt="Logo 15" width={200} height={100} />
                </div>
                
                
                
                
                
                {/* Repite el div de la columna por cada imagen */}
            </div>
        </div>
    );
}

export default HomeThree;
