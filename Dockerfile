# Use Node.js 20 base image
FROM node:latest 

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose app port (optional; adjust as needed)
EXPOSE 3000

# Start the app (adjust the command as per your app)
CMD ["npm", "start"]
