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
                sh 'docker rmi -f $DOCKER_IMAGE || true'
                sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
            }
        }

        stage('Test') {
            steps {
                sh 'docker rm -f ems-fe || true'
                sh 'docker run -d --name ems-fe -p 5173:5173 $DOCKER_IMAGE:$DOCKER_TAG'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker stop ems-fe || true'
                sh 'docker rm ems-fe || true'
                sh 'docker run -d --name ems-fe -p 5173:5173 $DOCKER_IMAGE:$DOCKER_TAG'
            }
        }
    }
}
