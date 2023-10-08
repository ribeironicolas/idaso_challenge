# Use the official Node.js image as the base
FROM node:18.16.1

# Create a working directory inside the container
WORKDIR /app

# Copy project files into the container
COPY package*.json ./
COPY . .

# Install project dependencies
RUN npm install

# Expose the port that the application will listen on
EXPOSE 4000
