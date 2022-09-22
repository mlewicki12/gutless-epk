
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../../styles/Post.module.scss'

const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getPost(slug: string) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`
  ).then(res => res.json())
  
  return res.posts[0]
}

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  return {
    props: { post },
    revalidate: 10
  }
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  }
}

type Post = {
  title: string
  html: string
  slug: string
}

const Post: React.FC<{ post: Post }> = props => {
  console.log(props)
  const { post } = props
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={styles.container}>
      <p className={styles.goback}>
        <Link href='/'>
          <a>Go back</a>
        </Link>
      </p>
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  )
}

export default Post
