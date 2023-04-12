pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'ems-frontend'
        DOCKER_TAG = 'latest'
    }

    triggers {
        pollSCM '* * * * *'
    }

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run $DOCKER_IMAGE:$DOCKER_TAG npm run test'
            }
        }

        stage('Push') {
            steps {
                sh 'docker push $DOCKER_IMAGE:$DOCKER_TAG'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run $DOCKER_IMAGE:$DOCKER_TAG npm run deploy'
            }
        }
    }
}