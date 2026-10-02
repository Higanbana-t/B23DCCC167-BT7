
const HeaderCV = ({ name, title, contact }) => {
  return (
    <header style={{ textAlign: 'center', marginBottom: '30px' }}>
      <h1>{name}</h1>
      <h3>{title}</h3>
      <p>{contact}</p>
    </header>
  );
};

export default HeaderCV;