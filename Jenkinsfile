pipeline {

    agent any

    environment {
        REPO_URL = "https://github.com/Priyanshu-96/Personal-Portfolio.git"
        NODE_OPTIONS = "--max-old-space-size=512"
    }

    stages {

        stage('Clear Workspace') {
            steps {
                echo "Cleaning workspace..."
                deleteDir()
            }
        }

        stage('Clone Repository') {
            steps {

                echo "Cloning repository..."

                git branch: 'main',
                    url: "${REPO_URL}"
            }
        }

        stage('Check Environment') {
            steps {

                sh '''
                echo "Node Version:"
                node -v

                echo "NPM Version:"
                npm -v

                echo "Memory Status:"
                free -h
                '''
            }
        }

        stage('Install Dependencies') {
            steps {

                echo "Installing dependencies..."

                dir('portfolio-vite') {

                    sh '''
                    npm ci --no-audit --no-fund
                    '''
                }
            }
        }

        stage('Build Project') {
            steps {

                echo "Building project..."

                dir('portfolio-vite') {

                    sh '''
                    npm run build
                    '''
                }
            }
        }

        stage('Verify Build') {
            steps {

                dir('portfolio-vite') {

                    sh '''
                    if [ ! -d "dist" ]; then
                        echo "Build failed: dist folder not found ❌"
                        exit 1
                    fi

                    echo "Build successful ✅"
                    '''
                }
            }
        }
    }

    post {

        success {
            echo "Pipeline completed successfully ✅"
        }

        failure {
            echo "Pipeline failed ❌"
        }

        always {

            sh '''
            echo "Final Memory Status:"
            free -h
            '''
        }
    }
}
