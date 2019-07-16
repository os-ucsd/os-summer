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
      <div className="main">{props.children}</div>
      <style global jsx>{`
        h1,
        a {
        }
        body {
          font-family:  "Roboto Mono";
    font-style: normal;
        }
.main {
  margin: auto;
  max-width: 42rem;
  padding:2.625rem 1.3125rem;
  min-height:100vh;
}
      `}</style>
    </div>
  )
}