pipeline{
    agent any
    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**", description: "script execution")
        //choice(name: 'BROWSER', choices: ['chrome', 'firefox'], description: "browser")
    }

    stages{

        stage('Building'){
            steps{
                npm 'npm install'
            }
        }

        stage('Deploying'){
            steps{
                echo('Deploying the application')
            }
            
        }
    }
}
