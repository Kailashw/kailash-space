import Head from 'next/head'
import styles from './blogs.module.css'

export default function blogs({ posts }) {
  posts = posts.items;
  posts = posts.filter(item => item.categories.length > 0);
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <p className={styles.title}> My Blogs </p>
          <div className={styles.grid}>
            {posts.map((post) => (
                <div key={post.title} className={styles.card}>
                <h1> <div dangerouslySetInnerHTML={createMarkup(post.title)}></div> </h1>
                <p className={styles.description}> By {post.author} on {new Date(post.pubDate).toLocaleDateString()}</p>
                <img src={post.thumbnail} alt={post.title} />
                <p className={styles.code}>
                  <a href={post.link} target='_blank'> Click here to read more on Medium...</a>
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

function createMarkup(content) {
  return {
    __html: content
  };
};

// calling external api's here.
export async function getStaticProps() {
  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kailashwall')
  const posts = await res.json()
  return {
    props: {
      posts
    },
  }
}