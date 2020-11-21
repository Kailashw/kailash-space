import styles from '../styles/Home.module.css'

export default function about() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          About Me
        </h1>
        <p className={styles.description}>
          {/* Maybe I should fetch all the recognition received. */}
          Page still under construction !! comeback to see awesome content.!!
        </p>
      </main>
    </div>
  )
}