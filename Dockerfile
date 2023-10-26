# Use the official Node.js LTS (Long Term Support) image based on Alpine Linux as the base image
FROM node:lts-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and yarn.lock files to the container's working directory
COPY package.json yarn.lock ./

# Install project dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Build the application (replace this with the appropriate build command for your project)
RUN yarn build

# Expose port 3000 to allow external access
EXPOSE 3000

# Define the command to start the application when the container is run
CMD ["yarn", "start"]
