# Use the official Node.js image as a base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Expose the port that the app will run on
EXPOSE 3001

# Command to run the application
CMD ["node", "app.js"]
