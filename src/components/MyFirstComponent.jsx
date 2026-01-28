export default function MyFirstComponent(props) {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      <h3>{props.title || 'Мой первый компонент'}</h3>
      <p>Этот компонент скоро появится в панели Builder.io!</p>
    </div>
  );
}