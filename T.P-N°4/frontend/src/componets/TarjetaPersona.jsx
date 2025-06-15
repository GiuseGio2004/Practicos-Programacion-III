const TarjetaPersona = ({ persona }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: 10, padding: 10, marginBottom: 10 }}>
      <h2>{persona.nombre} {persona.apellido}</h2>
      <p><strong>Edad:</strong> {persona.edad}</p>
      <p><strong>Email:</strong> {persona.email}</p>
    </div>
  );
};

export default TarjetaPersona;