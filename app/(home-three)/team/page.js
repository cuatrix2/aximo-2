import "bootstrap/dist/css/bootstrap.min.css";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
></link>;
function HomeThree() {
  return (
    <div className="container my-5">
      <br />
      <br />
      <h2 className="text-center">Nuestro Equipo</h2>
      <p className="text-center">
        Desde su creación, nuestro equipo se ha destacado por su compromiso con
        la ética, el profesionalismo y la excelencia en el ejercicio del
        derecho.
      </p>

      <div className="row">
        {/* Cada card representa un miembro del equipo */}
        {[1, 2, 3, 4].map((_, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card">
              <img
                src="/director.jpg"
                className="card-img-top"
                alt="Miembro del equipo"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Dr. José Luis Carrasco Zurita</h5>
                <p className="card-text text-primary">Abogado</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-md-6">
          <div
            className="card p-4"
            style={{ backgroundColor: "#e9f5ff", borderLeft: "5px solid #fcfa16" }}
          >
            <h4 className="text-warning mb-3">Reseña Histórica</h4>
            <p style={{ color: "#555", paddingLeft: "20px" }}>
              El Colegio de Abogados de Tungurahua ha albergado a profesionales
              graduados en las Universidades del país y del exterior. Su
              principal objetivo es defender al profesional y capacitar a sus
              afiliados. Nuestra historia amalgama nuestro sentimiento de
              identidad y pertenencia hacia nuestra querida institución,
              permitiendo conocer su trascendencia en el transcurso del tiempo.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div
            className="card p-4"
            style={{ backgroundColor: "#e9f5ff", borderLeft: "5px solid #16fcf9" }}
          >
            <h4 className="text-info mb-3">Fundación y Desarrollo</h4>
            <ul style={{ color: "#555", paddingLeft: "20px" }}>
              <li>21 de febrero de 1957: Creación del Club de Abogados de Ambato</li>
              <li>19 de febrero de 1964: Expedición de la Ley de Federación Nacional de Abogados</li>
              <li>29 de abril de 1965: Nacimiento oficial del Colegio de Abogados de Tungurahua</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div
            className="card p-4"
            style={{ backgroundColor: "#e9f5ff", borderLeft: "5px solid #17f202" }}
          >
            <h4 className="text-success mb-3">Actualidad</h4>
            <p style={{ color: "#555", paddingLeft: "20px" }}>
              Hoy en día, el Colegio cuenta con más de mil quinientos afiliados y posee bienes
              inmuebles que incluyen un terreno y un edificio en Ambato. El actual Directorio,
              presidido por el Dr. José Luis Carrasco Zurita, ha orientado la institución hacia
              la transformación, masificación, capacitación y diálogo jurídico.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div
            className="card p-4"
            style={{
              borderLeft: "5px solid #007bff",
              backgroundColor: "#f8f9fa",
            }}
          >
            <h4 className="text-primary mb-3">Inspiración</h4>
            <p className="fst-italic" style={{ fontSize: "1.2em", color: "#555" }}>
              "El título de abogado no se sostiene con un clavo en la pared, se sostiene con
              trabajo constante, ética irreductible y pasión por la justicia"
              <span className="d-block text-end">- Guillén Alexander</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeThree;
