# Build the React app with Vite
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies and build the app
COPY package.json ./

# Delete node_modules if it exists (prevents cache issues)
RUN rm -rf node_modules

# Install dependencies
RUN npm install --force

COPY . .
COPY .env .env
RUN npm run build

# Use a lightweight Node.js image to serve the app
FROM node:22-alpine AS runner

WORKDIR /app

# Copy built files and package.json
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./

# Install serve to serve the built app
RUN npm install -g serve
CMD serve -s build -l 9000

# Expose port and start server
EXPOSE 9000
