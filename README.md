# Projeto-ecomerce

## To run this Project locally

1. `$ docker build -t node-app-image .`
2. `$ docker run -v $(pwd):/app -p 3000:3000 -d --name node-app node-app-image`
