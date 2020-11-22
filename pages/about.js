import styles from './about.module.css'
import Head from "next/head";

export default function about() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            About Me 
          </h1>
          
          <div className={styles.about}>
            <div className={styles.aboutRight}>
              <img src='https://media-exp1.licdn.com/dms/image/C4E03AQFJLYpAbnX20g/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=GlqJ51DRg-QvSwtQhJFZZsOiSFlrNHChOTcYHDER7fA' />
              <a href='/contact'> Click here to offer work</a> 
            </div>
            <div className={styles.content}>
              <p className={styles.description}>
                Skilled full-stack developer with coding experience in JavaScript, React.js, NodeJS and Python. Working exposure on multiple cloud providers such as AWS, Azure and Google. Known for combination of interpersonal skills, forward thinking and sense of humor.
              </p>
              <p className={styles.description}>
                <b>Specialties:</b> JavaScript, React.js, NodeJS, Python, No/SQL Databases, Azure, AWS
              </p>
              <p className={styles.description}>
                <h3> Professinal Work Expierence</h3>
                <p>• Streamlining integration between Student Information System (SIS)ERP and learning management system (LMS) with Ellucian Intelligent Learning Platform.</p>
                <p>• Understanding, Structuring and Rebuilding application from Anguar 1.x version using React to meet company standard practices.</p>
                <p>• OAuth2 Implementation for integration with some LMS'es.</p>
                <p>• Building middleware's integrations using Node JS.</p>
                <p>• Building webservices (using Node JS) to be consumed by mobile and other team.</p>
                <p>• Creating build jobs using Jenkins.</p>
                <p>• Auto scaling functionality on AWS.</p>
                <p>• Conducting peer code reviews to monitor the quality of code.</p>
                <p>• Building reusable boiler plates for front end using React.js</p>
                <p>• Setting up CI/CD jobs on Azure Devops.</p>
                <p>• Writing generic utility libraries for different projects.</p>
                <p>• Deploying codes on Azure VM/App Services.</p>
                <p>• Writing reusable codes.</p>
                <p>• Integrating reporting portal such as Power BI /Tableau.</p>
                <p>• Making enhancements to RBAC (Role-based access control) using Python.</p>
                <p>• ETL operation on MongoDB data to Salesforce.</p>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}