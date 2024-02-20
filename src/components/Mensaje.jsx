const Mensaje = ({ children, tipo }) => {
  return <div className={`alerta ${tipo}`}>{children}</div>;
};

Mensaje.propTypes = String;

export default Mensaje;
