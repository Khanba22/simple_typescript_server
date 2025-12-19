pipeline{
    agent any

    tools{
        nodejs 'node18'
    }

    stages{
        stage('checkout'){
            steps{
                checkout scm
            }
        }

        stage('install dependencies'){
            steps{
                sh 'npm install'
            }
        }

        stage('build server'){
            steps{
                sh 'npm run build'
            }
        }

        stage('run tests'){
            steps{
                sh 'npm test'
            }
        }
    }

    post{
        success{
            echo 'Pipeline completed successfully!'
        }
        failure{
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}