// src/pages/Contact.jsx
function Contact() {
    return (
      <div className="py-16 px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contáctanos</h1>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Si tienes preguntas o necesitas ayuda, no dudes en comunicarte con nosotros.
        </p>
        <form className="mt-8 max-w-2xl mx-auto">
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border rounded-lg"
              rows="4"
              placeholder="Tu mensaje"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold"
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  