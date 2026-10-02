

const Display = ({ value }) => {
  return (
    <div style={{ backgroundColor: '#ddd', padding: '20px', textAlign: 'right', fontSize: '24px', minHeight: '30px' }}>
      {value || '0'}
    </div>
  );
};

export default Display;