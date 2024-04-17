#/bin/bash

# Copy dockerfile and entrypoint.sh to the root directory
cp ../docker/dockerfile ~/docker/dockerfile
cp entrypoint.sh ~/entrypoint.sh

# Build the image
docker build -t robot_image ~/docker

# Environment variables
cp -r ../env/ ~/robot_params


# Boot service