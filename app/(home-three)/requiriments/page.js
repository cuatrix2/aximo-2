import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsPersonBadge,
  BsFillCreditCardFill,
  BsFillJournalBookmarkFill,
  BsFillPersonFill,
} from "react-icons/bs";

function HomeThree() {
  return (
    <div className="container my-5 bg-dark text-white p-5 rounded">
      <div className="row">
        <div className="col-md-4">
          <h3>Requisitos para la Afiliación</h3>
          <h3 className="text-white text-justify fs-6">
            Para ser miembro, es necesario cumplir con los siguientes
            requisitos.
          </h3>
        </div>

        <div className="col-md-8">
          <div className="row">
            {/* Tarjeta de Cédula de Identidad */}
            <div className="col-md-6 mb-4">
              <div className="card p-3 custom-card bg-secondary text-white h-100">
                <div className="icon-container mb-2">
                  <BsPersonBadge size={40} />
                </div>
                <h5>Cédula de Identidad</h5>
                <p className="text-muted">
                  Presentar una copia de la cédula de identidad vigente para
                  verificar la identidad del solicitante.
                </p>
              </div>
            </div>

            {/* Tarjeta de Identificación de Abogado */}
            <div className="col-md-6 mb-4">
              <div className="card p-3 custom-card bg-secondary text-white h-100">
                <div className="icon-container mb-2">
                  <BsFillPersonFill size={40} />
                </div>
                <h5>Identificación de Abogado</h5>
                <p className="text-muted">
                  Proporcionar la identificación profesional que certifique la
                  habilitación como abogado en el país.
                </p>
              </div>
            </div>

            {/* Tarjeta de Formulario de Solicitud */}
            <div className="col-md-6 mb-4">
              <div className="card p-3 custom-card bg-secondary text-white h-100">
                <div className="icon-container mb-2">
                  <BsFillJournalBookmarkFill size={40} />
                </div>
                <h5>Formulario de Solicitud</h5>
                <p className="text-muted">
                  Completar y enviar el formulario de solicitud de Afiliación.
                </p>
              </div>
            </div>

            {/* Tarjeta de Pago de Cuota */}
            <div className="col-md-6 mb-4">
              <div className="card p-3 custom-card bg-secondary text-white h-100">
                <div className="icon-container mb-2">
                  <BsFillCreditCardFill size={40} />
                </div>
                <h5>Pago de Cuota</h5>
                <p className="text-muted">
                  Realizar el pago de la cuota de Afiliación según lo
                  establecido en nuestra normativa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeThree;
