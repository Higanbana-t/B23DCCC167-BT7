import HeaderCV from './HeaderCV';
import Section from './Section';
import ListItems from './ListItems';

function CV() {
  const skillsData = [
    'Phát triển ứng dụng Web/Mobile (React, React Native, Vite)',
    'Data Engineering & ETL (Kafka, Airflow, Superset)',
    'Quản trị mạng & Troubleshooting (Cisco Packet Tracer, OSPF, VLAN)',
    'Lập trình Python '
  ];

  const projectsData = [
    {
      name: 'Web nghe nhạc',
      description: 'Xây dựng giao diện web nghe nhạc bằng html, sử dụng API để lấy dữ liệu bài hát và phát nhạc trực tiếp trên trình duyệt.'
    },
    {
      name: 'Fitness Member App',
      description: 'Phát triển giao diện ứng dụng quản lý phòng gym bằng React Native và Expo Router.'
    }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', fontFamily: 'Arial',color:'#000000' }}>
      <HeaderCV 
        name="Trần Trọng Trường" 
        title="Sinh viên năm 4 - CNTT " 
        contact="Hà Nội, Việt Nam" 
      />
      <Section title="Kỹ Năng Lập Trình & Hệ Thống">
        <ListItems items={skillsData} isProject={false} />
      </Section>
      <Section title="Dự Án Nổi Bật">
        <ListItems items={projectsData} isProject={true} />
      </Section>
    </div>
  );
}

export default CV;