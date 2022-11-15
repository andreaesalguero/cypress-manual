pipeline{
    agent any

    stages{

        stage('Building'){
            steps{
                sh 'npm i'
                sh "npm run test"
            }
        }

        stage('Deploying'){
            steps{
                echo('Deploying the application')
            }
            
        }
    }
}
