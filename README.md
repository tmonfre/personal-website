# Personal Website

Personal website built with React, TypeScript, webpack, and babel. It is built and served with Docker.

The `src` directory contains the frontend React app. This is built into a `build` directory. The `static` directory contains raw files to serve. The `app.js` file runs the web server.

Hosted on AWS with ECR, EC2, CloudFront, and Route 53. Check it out at [https://thomasmonfre.com](https://thomasmonfre.com).

## Installation Instructions

For those interested in running the project locally, follow these instructions:

1. Ensure you have [Node.js](https://nodejs.org/en/) installed.
2. Clone the repository.
3. Install dependencies: `npm i`.
4. Run locally with `npm start`.
5. Test production mode with `npm run build && node app.js`.

## Deployment Instructions

1. Ensure you have [Docker](https://www.docker.com/) installed and running.
2. Build the docker image with `docker build -t personalwebsite .`
3. Push the docker image to your container registry of choice  (I am using AWS ECR). You may need to tag it here.
4. Pull the docker image on a remote server (I am using AWS EC2).
5. Start a container for that image on your remote server: `docker run -d -p 80:8080 [image_name]`
6. Point your DNS service of choice (I am using AWS Route 53) to the remote server (this should be a one-time step).

## Attribution

If you wish to use this repository as a template for a personal website architecture, feel free to do so, but ***please*** link back to me with proper credit. Thanks!
