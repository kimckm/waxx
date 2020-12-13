const styles = {
  maxWidth: 500,
  margin: '0 auto',
  padding: 12,
};

export default function(props) {
  return (
    <div style={styles}>
      {props.children}
    </div>
  );
}
