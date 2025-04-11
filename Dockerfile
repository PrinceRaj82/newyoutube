# Use a lightweight official Node.js image
FROM node:18-slim

# Install yt-dlp, ffmpeg, Python, and pip
RUN apt-get update && \
    apt-get install -y python3 python3-pip ffmpeg && \
    python3 -m pip install --break-system-packages yt-dlp

# Create app directory
WORKDIR /app

# Copy backend package files and install dependencies
COPY server/package*.json ./
RUN npm install

# Copy the rest of the backend source code
COPY server .

# Expose the backend port (update if your app uses a different one)
EXPOSE 3000

# Run the server
CMD ["node", "index.js"]
