
const Section = ({ title, children }) => {
  return (
    <section style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px' }}>
      <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '5px' }}>{title}</h2>
      <div style={{ marginTop: '10px' }}>
        {children}
      </div>
    </section>
  );
};

export default Section;