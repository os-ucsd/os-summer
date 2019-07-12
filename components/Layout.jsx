
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      {props.children}
      <style global jsx>{`
        h1,
        a {
          font-family: 'Arial';
          color: red;
        }
        p {
          font-family:  "Roboto Mono";
    font-style: normal;
        }
      `}</style>
    </div>
  )
}