pipeline{
    agent any

    stages{

        stage('Building'){
            steps{
                sh 'npm ci'
                sh "npm run test:ci:record"
            }
        }

        stage('Deploying'){
            steps{
                echo('Deploying the application')
            }
            
        }
    }
}
