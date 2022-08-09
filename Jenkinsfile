pipeline{
    agent any
    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**", description: "script execution")
        choice(name: 'BROWSER', choices: ['chrome', 'firefox'], description: "browser")
    }

    stages{

        stage('Building'){
            steps{
                bat 'npm i'
                bat 'npx cypress run --browser ${BROWSER} --spec ${SPEC}'
            }
        }

        stage('Deploying'){
            steps{
                echo('Deploying the application')
            }
            
        }
    }
}
