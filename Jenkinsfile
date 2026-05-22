pipeline {

    agent any

    environment {
        REPO_URL = "https://github.com/Priyanshu-96/Personal-Portfolio.git"
        NODE_OPTIONS = "--max-old-space-size=512"
    }

    stages {

        stage('Clear Workspace') {
            steps {
                echo "Clearing workspace..."
                deleteDir()
            }
        }

        stage('Clone Repo') {
            steps {

                echo "Cloning repository..."

                git branch: 'main',
                    url: "${REPO_URL}"
            }
        }

        stage('Check Node Environment') {
            steps {

                echo "Checking Node environment..."

                sh '''
                echo "===== NODE VERSION ====="
                node -v

                echo "===== NPM VERSION ====="
                npm -v
                '''
            }
        }

        stage('System Diagnostics Before Install') {
            steps {

                echo "Checking system resources..."

                sh '''
                echo "===== RAM INFO ====="
                free -h

                echo "===== DISK INFO ====="
                df -h

                echo "===== CPU LOAD ====="
                uptime

                echo "===== TOP MEMORY PROCESSES ====="
                ps aux --sort=-%mem | head -15

                echo "===== TOP CPU PROCESSES ====="
                ps aux --sort=-%cpu | head -15
                '''
            }
        }

        stage('Install Dependencies') {
            steps {

                echo "Installing dependencies..."

                dir('portfolio-vite') {

                    sh '''
                    set -x

                    echo "===== BEFORE INSTALL ====="

                    free -h

                    echo "===== NODE OPTIONS ====="
                    echo $NODE_OPTIONS

                    echo "===== STARTING INSTALL ====="

                    /usr/bin/time -v npm ci --verbose --no-audit --no-fund

                    INSTALL_EXIT_CODE=$?

                    echo "===== INSTALL FINISHED ====="

                    echo "EXIT CODE: $INSTALL_EXIT_CODE"

                    echo "===== AFTER INSTALL ====="

                    free -h

                    exit $INSTALL_EXIT_CODE
                    '''
                }
            }
        }

        stage('Check OOM Logs') {
            steps {

                echo "Checking kernel OOM logs..."

                sh '''
                echo "===== DMESG OOM LOGS ====="

                dmesg -T | grep -i -E 'oom|killed process|out of memory' || true

                echo "===== JOURNALCTL OOM LOGS ====="

                journalctl -k | grep -i -E 'oom|killed process|out of memory' || true
                '''
            }
        }

        stage('Build Project') {
            steps {

                echo "Building project..."

                dir('portfolio-vite') {

                    sh '''
                    set -x

                    npm run build
                    '''
                }
            }
        }

        stage('Verify Build Folder') {
            steps {

                dir('portfolio-vite') {

                    sh '''
                    echo "===== VERIFYING DIST FOLDER ====="

                    if [ ! -d "dist" ]; then
                        echo "Build folder not found ❌"
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

                echo "Printing workspace info..."

                sh '''
                echo "===== CURRENT DIRECTORY ====="
                pwd

                echo "===== WORKSPACE FILES ====="
                ls -la
                '''
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

            sh '''
            echo "===== FINAL MEMORY STATUS ====="
            free -h || true

            echo "===== FINAL DISK STATUS ====="
            df -h || true
            '''
        }
    }
}
```
