pipeline {

    agent any

    environment {
        REPO_URL = "https://github.com/Priyanshu-96/Personal-Portfolio.git"
        NODE_OPTIONS = "--max-old-space-size=512"
        IMAGE_NAME = "portfolio" 
        CONTAINER_NAME = "portfolio-container"
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
        stage('Build Docker Image') { 
            steps { 
                echo "Building Docker image..." 
                dir('portfolio-vite') { 
                    sh ''' 
                    docker build -t $IMAGE_NAME . 
                    ''' 
                } 
            } 
        }
        stage('Stop Old Container') { 
            steps { 
                echo "Stopping old container if exists..." 
                sh ''' 
                docker stop $CONTAINER_NAME || true 
                docker rm $CONTAINER_NAME || true 
                ''' 
            }
        }

        stage('Run New Container') {
            steps {
                echo "Running new container..." 
                sh ''' 
                docker run -d \
                -p 80:80 \
                --name $CONTAINER_NAME \
                $IMAGE_NAME 
                ''' 
            } 
        }

        stage('Verify Container') {
            steps {
                echo "Checking running containers..." 
                sh ''' 
                docker ps 
                ''' 
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
