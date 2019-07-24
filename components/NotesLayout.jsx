import Head from 'next/head'
import Link from 'next/link'

export default function NotesLayout(props) {
  return (
    <div>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css" integrity="sha256-HbgiGHMLxHZ3kkAiixyvnaaZFNjNWLYKD/QG6PWaQPc=" crossorigin="anonymous" />
      </Head>
      <div>
        <Link href="../">🏠 Home</Link>
      </div>
      <div className="main markdown-body">{props.children}</div>
      <style global jsx>{`
.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

        h1,
        a {
        }
        body {
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