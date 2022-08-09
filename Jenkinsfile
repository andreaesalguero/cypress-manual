pipeline{
    agent any
    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**", description: "script execution")
        choice(name: 'BROWSER', choices: ['chrome', 'firefox'], description: "browser")
    }

    stages{

        stage('Building'){
            steps{
                sh 'node --version'
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
