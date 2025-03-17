# Step 1: Use the official Node.js image
FROM --platform=linux/amd64 node:18

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the app source code
COPY . .

# Step 6: Build the TypeScript code
RUN npm run build

# Step 7: Expose the application port
EXPOSE 8080

# Step 8: Define the command to run the app
CMD ["node", "dist/server.js"]