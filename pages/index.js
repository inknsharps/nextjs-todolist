import Head from 'next/head'
import TodoContainer from '../components/TodoContainer/TodoContainer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Todo List Demo</title>
        <meta name="description" content="Demo project for Next.js" />
      </Head>

      <main>
        <h1>Hello World!</h1>
        <TodoContainer />
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}
