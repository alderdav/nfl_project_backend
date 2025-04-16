# Specify image that the build will extend from
FROM node:20

# Sets the working directory OR path inside of the image pulled where files will be copied and commands executed
# If working directory does not exist it will be created
WORKDIR /app/nfl

#Install dependencies first - COPY <host-path> <image-path> -> we are copying package.json into the WORKDIR inside the container
COPY package.json .

#Install Dependencies
RUN npm install

#Copy all the files in the root directory into the WORKDIR inside the container (unless specified in .dockerignore)
COPY . .

EXPOSE 3000

# Should I setup a user for my container?

CMD ["npm", "start"]