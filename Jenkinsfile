pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "checkinn-app"
		DOCKER_TAG = "${BUILD_NUMBER}"
		VITE_API_URL = credentials("VITE_API_URL")
    }

    stages {

        stage('Docker Build') {
            steps {
                script {
                    // Build new image
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Stop existing container
                    sh "docker stop ${DOCKER_IMAGE} || true"
                    sh "docker rm ${DOCKER_IMAGE} || true"

                    echo 'The URL is ${VITE_API_URL}'

                    // Run new container with environment variables
                    sh """
                        docker run -d \
                        --name ${DOCKER_IMAGE} \
                        -p 80:80 \
                        -e VITE_API_URL=${VITE_API_URL} \
                        --restart unless-stopped \
                        ${DOCKER_IMAGE}:${DOCKER_TAG}
                    """
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}