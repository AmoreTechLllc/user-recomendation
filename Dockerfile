# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port on which your Node.js app will run (same as the one you specified in your Node.js code)
EXPOSE 3000

# Command to start your Node.js app
CMD ["node", "index.js"]
