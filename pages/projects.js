import React from 'react'
import styles from './projects.module.css'

function projects({ repos }) {
    repos = repos.sort(function (a, b) {
        return b.forks- a.forks;
    });
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <p className={styles.title}> List of Projects </p>
                <p className={styles.description}> Currently fetching all the git repositories creatd by me</p>
                <div className={styles.grid}>
                    {repos.map((repo) => (
                        <div key={repo.name} className={styles.card}>
                        <a href={repo.html_url} target="_blank">
                            <h5>Project Name:</h5><label className={styles.description}> {repo.name}</label><br/>
                            <h5>Description:</h5><label className={styles.description}> {truncateString(repo.description,60)}</label><br/>
                            <h5>Number of Forks:</h5><label className={styles.description}> {repo.forks}</label><br/>
                            <h5>Number of Stars:</h5><label className={styles.description}> {repo.stargazers_count}</label><br/>
                        </a>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

function truncateString(str, num) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + '...'
}

export default projects

// calling external api's here.
export async function getStaticProps() {
    const res = await fetch('https://api.github.com/users/kailashw/repos')
    const repos = await res.json()
    return {
        props: {
            repos,
        },
    }
}