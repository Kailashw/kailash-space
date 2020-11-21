import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi I'm <span style={{ color: '#c72e3c' }}>Kailas Walldoddi <img src='favicon.png' /></span>
        </h1>

        <p className={styles.description}>
          A web designer and developer from Bangalore in India. I create bespoke websites to help people go further online.
        </p>

      </main>
    </div>
  )
}