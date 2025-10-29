import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const waNumber = '917019682889';
  const waLink = `https://wa.me/${waNumber}?text=Hello%20Spark%20Tuition!%20I%20would%20like%20to%20book%20a%20free%20demo.`;

  return (
    <a
      className="floating-wa"
      href={waLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default FloatingWhatsApp;
