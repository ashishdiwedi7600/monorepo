export const Button = ({ title, onPress }) => (
    <button onClick={onPress} style={{ padding: '10px', backgroundColor: 'blue', color: 'white' }}>
      {title}
    </button>
  );