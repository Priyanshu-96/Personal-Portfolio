pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    environment {
        PROJECT_NAME = "Portfolio-CI"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo "Cloning repository..."
                git branch: 'main', url: 'https://github.com/Priyanshu-96/Personal-Portfolio.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing dependencies..."
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                echo "Building project..."
                sh 'npm run build'
            }
        }

        stage('Verify Build Folder') {
            steps {
                sh 'ls -la'
            }
        }
        stage('Workspace Info') {
            steps {
                sh 'pwd'
                sh 'ls -la'
            }
        }
    }

    post {
        success {
            echo "Build Successful ✅"
        }
        failure {
            echo "Build Failed ❌"
        }
        always {
            echo "Pipeline Finished"
        }
    }
}
