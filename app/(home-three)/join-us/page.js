import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function HomeThree() {

    const plan = {
        name: "Pago mensual",
        desc: "Afiliación pago único de 100 USD. Acceso exclusivo a beneficios especiales, eventos organizados por el Colegio de Abogados de Tungurahua y más.",
        price: 5,
        isMostPop: true,
        features: [
            "Acceso a todos los beneficios por convenios con empresas de diversos sectores",
            "Participación en talleres, conversatorios y webinars organizados por el Colegio",
            "Sorpresas adicionales durante el año",
            "Un pavo de Navidad",
           
        ],
    }

    const features = [
        {
            name: "Beneficios Exclusivos",
            desc: "Accede a servicios y descuentos especiales gracias a nuestros convenios con empresas en varios sectores.",
            icon:
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"/>
          </svg>
        },
        {
            name: "Eventos profesionales",
            desc: "Participa en eventos formativos como talleres, conversatorios y webinars organizados por el Colegio.",
            icon:
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-event-fill" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5M11.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
          </svg>
        },
        {
            name: "Sorpresas adicionales",
            desc: "Disfruta de un pavo en Navidad y otras sorpresas exclusivas para los miembros durante el año.",
            icon:
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
          </svg>
        },
     
     
    ]

    return (
        <section className="py-5">
            <div className="container text-secondary">
                <div className="text-center mb-5">
                    <br></br>
                    <br></br>
                    <h3 className="text-primary fw-semibold">Planes</h3>
                    <h2 className="text-dark display-5 fw-bold">Crece con nosotros</h2>
                    <p className="mx-auto" style={{ maxWidth: "600px" }}>
                    La Afiliación del Colegio de Abogados de Tungurahua te ofrece beneficios y acceso a eventos especiales.
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-md-6">
                        <ul className="list-unstyled">
                            {features.map((item, idx) => (
                                <li key={idx} className="d-flex align-items-start mb-4">
                                    <div className="bg-dark text-white  p-3 me-3">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-dark fw-medium">{item.name}</h4>
                                        <p className="text-muted">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <h3 className="text-dark fw-bold">{plan.name}</h3>
                                        <p className="text-muted">{plan.desc}</p>
                                    </div>
                                    <div className="text-dark fs-2">
                                        ${plan.price} <span className="fs-5 text-muted">/mensuales</span>
                                    </div>
                                </div>
                                <button className="btn btn-success w-100 mb-4">
                                    Afiliate Ahora
                                </button>
                                <h5 className="text-dark">Beneficios</h5>
                                <ul className="list-unstyled mt-3">
                                    {plan.features.map((featureItem, idx) => (
                                        <li key={idx} className="d-flex align-items-center mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-primary me-2" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd">
                                                </path>
                                            </svg>
                                            {featureItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeThree;
