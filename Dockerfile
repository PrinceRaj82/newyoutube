# Use a lightweight official Node.js image
FROM node:18-slim

# Install yt-dlp, ffmpeg, Python, and pip
RUN apt-get update && \
    apt-get install -y python3 python3-pip ffmpeg && \
    python3 -m pip install --break-system-packages yt-dlp

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose port (adjust if your app uses a different one)
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
