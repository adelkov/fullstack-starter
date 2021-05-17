import styles from '../styles/Home.module.css'
import prisma from '../lib/prisma'

type Post = {
  authorId: number
  content: string | null
  id: number
  published: boolean
  title: string
}

function Home({ feed }: { feed: Post[] }) {
  return (
    <div className={styles.container}>
      {feed.map(post => (
        <div key={post.id}>{ post.title }</div>
      ))}
    </div>
  )
}


export const getStaticProps = async () => {
  const feed = await prisma.post.findMany()
  return { props: { feed } }
}

export default Home
