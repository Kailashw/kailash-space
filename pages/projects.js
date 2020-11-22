import React from 'react'
import styles from './projects.module.css'

function projects({ repos, userDetails }) {
    repos = repos.sort(function (a, b) {
        return b.forks- a.forks;
    });

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <p className={styles.title}> Repositories </p>
                <p className={styles.description}> Currently fetching all the git repositories creatd by me</p>
                <div className={styles.grid}>
                    {repos.map((repo) => (
                        <div key={repo.name} className={styles.card}>
                            <h3 className={styles.title}> {repo.name}</h3>
                            <p className={styles.description}> {truncateString(repo.description,60)}</p>
                            <br/>
                            <p className={styles.description}>
                                <img src='/forks.png' width={20} height={20}/> {repo.forks} {'  '}
                                <img src='/star.png' width={20} height={20}/> {repo.stargazers_count}
                            </p>
                            <br/>
                            <p className={styles.code}>
                                <a href={repo.html_url} target='_blank'> Click here to checkout repo on GIT...</a>
                            </p>
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
    const userDetails = await fetch('https://api.github.com/users/kailashw').then(res=> res.json());
    const repos = await res.json()
    return {
        props: {
            repos,
            userDetails,
        },
    }
}