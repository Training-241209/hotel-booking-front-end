pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "checkinn-frontend"
		DOCKER_TAG = "${BUILD_NUMBER}"
		BACKEND_API_URL = credentials("BACKEND_URL")
    }

    stages {

        stage('Docker Build') {
            steps {
                script {
                    // Build new image
                    sh "docker build --build-arg VITE_API_URL=${BACKEND_API_URL} \
                     -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Stop existing container
                    sh "docker stop ${DOCKER_IMAGE} || true"
                    sh "docker rm ${DOCKER_IMAGE} || true"

                    // Run new container with environment variables
                    sh """
                        docker run -d \
                        --name ${DOCKER_IMAGE} \
                        -p 80:80 \
                        -e VITE_API_URL=${BACKEND_API_URL} \
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