
const ListItems = ({ items, isProject }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: '8px' }}>
          {isProject ? (
            <>
              <strong>{item.name}:</strong> {item.description}
            </>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  );
};

export default ListItems;