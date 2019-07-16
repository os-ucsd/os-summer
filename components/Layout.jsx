import Head from 'next/head'
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet"/>
      </Head>
      {props.children}
      <style global jsx>{`
        h1,
        a {
        }
        body {
          font-family:  "Roboto Mono";
    font-style: normal;
        }
      `}</style>
    </div>
  )
}