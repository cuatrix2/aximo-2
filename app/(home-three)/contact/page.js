import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
function HomeThree() {
  return (
    <div className="aximo-all-section bg-light py-5">
      <div className="container">
      <br></br>
      <br></br>
        <h2 className="text-xl text-indigo-600 font-semibold mb-2">Contacto</h2>
        <h1 className="display-4 font-weight-bold text-dark mb-4">Cuéntanos cómo podemos ayudarte</h1>
        <p className="text-muted mb-5">
          Estamos aquí para ayudarte y responder cualquier pregunta que puedas tener. ¡Esperamos con interés saber de ti!
        </p>

        <form className="row g-4">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">Nombre</label>
            <input type="text" id="firstName" name="firstName" className="form-control" />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">Apellido</label>
            <input type="text" id="lastName" name="lastName" className="form-control" />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" name="email" className="form-control" />
          </div>
          <div className="col-12">
            <label htmlFor="phone" className="form-label">Teléfono</label>
            <input type="tel" id="phone" name="phone" placeholder="0987654321" className="form-control" />
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea id="message" name="message" rows="4" className="form-control"></textarea>
          </div>
          <div className="col-12 text-end">
            <button type="submit" className="btn btn-success px-4 py-2">Enviar</button>
          </div>
        </form>
     {/* Contact Information Section */}
     <div className="contact-info mt-4 d-flex justify-content-between">
          <div className="contact-item">
          <i className="fas fa-map-marker-alt me-2"></i>
            <strong>Oficina:</strong> Calle Salvador y Colombia, Ambato, Ecuador
          </div>
          <div className="contact-item">
          <i className="fas fa-phone-alt me-2"></i>
            <strong>Teléfono:</strong> 099999999
          </div>
          <div className="contact-item">
          <i className="fas fa-envelope me-2"></i>
            <strong>Email:</strong> <a href="mailto:abogados.tungurahua@yahoo.es">abogados.tungurahua@yahoo.es</a>
          </div>
        </div>
     
  {/* Google Map Section */}
  <div className="map-container mt-4" style={{ width: "100%", height: "450px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.891586374418!2d-78.61898112497511!3d-1.234943298753283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d381bae152195f%3A0x75b79253a1da59dc!2sColegio%20de%20abogados%20de%20Ambato!5e0!3m2!1ses-419!2sec!4v1727671379816!5m2!1ses-419!2sec"
            className="w-100 h-100 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeThree;
