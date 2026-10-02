import { useState } from 'react';
import Calculator from './components/Calculator';
import CV from './components/CV';
import './App.css';

function App() {
  // Tạo state để nhớ xem người dùng đang muốn xem tab nào (Mặc định là 'calculator')
  const [activeTab, setActiveTab] = useState('calculator');

  // Hàm hỗ trợ đổi màu nút bấm để biết đang ở tab nào
  const getButtonStyle = (tabName) => ({
    padding: '10px 20px',
    margin: '0 10px',
    cursor: 'pointer',
    backgroundColor: activeTab === tabName ? '#4caf50' : '#ddd',
    color: activeTab === tabName ? 'white' : 'black',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold'
  });

  return (
    <div>
      {/* Khu vực chứa các nút chuyển tab */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button 
          style={getButtonStyle('calculator')} 
          onClick={() => setActiveTab('calculator')}
        >
          Ứng dụng Máy tính
        </button>
        
        <button 
          style={getButtonStyle('cv')} 
          onClick={() => setActiveTab('cv')}
        >
          Hồ sơ CV
        </button>
      </div>

      {/* Khu vực hiển thị nội dung (Toán tử ba ngôi) */}
      {/* Nếu activeTab là 'calculator' thì in ra <Calculator />, ngược lại in ra <CV /> */}
      <div style={{ marginTop: '20px' }}>
        {activeTab === 'calculator' ? <Calculator /> : <CV  />}
      </div>
    </div>
  );
}

export default App;