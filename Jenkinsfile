pipeline{
    agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:10'
    }
  }

    stages{

        stage('Building'){
            steps{
                sh 'npm install'
                sh 'npx cypress run --browser ${BROWSER} --spec ${SPEC}'
            }
        }

        stage('Deploying'){
            steps{
                echo('Deploying the application')
            }
            
        }
    }
}
