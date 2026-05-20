pipeline {
    agent any

    environment {
        REPO_URL = "https://github.com/Priyanshu-96/Personal-Portfolio.git"
    }

    stages {

        stage('Clear Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Clone Repo') {
            steps {
                git branch: 'main', url: "${REPO_URL}"
            }
        }

        stage('Check Node Environment') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing dependencies..."

                dir('portfolio-vite') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Project') {
            steps {
                echo "Building project..."

                dir('portfolio-vite') {
                    sh 'npm run build'
                }
            }
        }

        stage('Verify Build Folder') {
            steps {
                dir('portfolio-vite') {

                    sh '''
                    if [ ! -d "dist" ]; then
                        echo "Build folder not found. Build failed."
                        exit 1
                    fi

                    echo "Build folder exists ✅"
                    ls -la dist
                    '''
                }
            }
        }

        stage('Workspace Info') {
            steps {
                echo "THIS STAGE IS RUNNING"
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
