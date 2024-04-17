#!/bin/bash

# This script is the main entrypoint for the robot. It is executed when the container starts, and should be used to call other scripts that configure the robot.
source /opt/ros/humble/setup.bash 
source ~/robot_ws/install/setup.bash

echo "This script is going to load the ros configuration located at $ros_config"
source ~/ros_config.sh


# TODO: Build the workspace
# TODO: Source the workspace
# TODO: Launch the robot