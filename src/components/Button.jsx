
const Button = ({ label , color ,onClick   }) => {
    return (
    <button 
      style={{ backgroundColor: color, padding: '15px', fontSize: '18px', border: '1px solid #ccc', cursor: 'pointer' }}
      onClick={() => onClick(label)}
    >
        {label}
    </button>
    );
};
export default Button;