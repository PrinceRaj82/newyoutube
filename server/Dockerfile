# Use Node.js base image
FROM node:18

# Install yt-dlp and ffmpeg for video processing
RUN apt-get update && \
    apt-get install -y python3-pip ffmpeg && \
    pip install yt-dlp

# Set working directory
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose the port (Render uses process.env.PORT)
EXPOSE 3000

# Start the server
CMD ["node", "server/index.js"]
