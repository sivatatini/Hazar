
# Hazar
Hazar is a telugu word which translates to attendance or prescence is the best descrption of this service which keeps track of sudents database. This is an excellent demo to learn about Mongodb and Nodejs

## Install

    ### Setup package
    npm install
    ###MongoDB
    brew tap mongodb/brew
    brew update
    brew install mongodb-community@6.0

    ###Mongoose
    npm install mongoose --save - **To have mongoose**

## Run the tests
    npm i mockingoose -D
    npm i mongoose crypto jest mongodb-memory-server
    npm install -- save-dev jest
    npm install --save-dev jest supertest
    npm run test

## Run the app

    brew services start mongodb-community@6.0
    npm run start

## Stop MongoDb

    brew services stop mongodb-community@6.0

## API
### Read APIs
    * localhost:4000/api/students - Get list of students
    * localhost:4000/api/students/<ID> - Get student by ID
### Write APIs
    * POST - localhost:4000/api/students - Put a new student
    ```
    {
    "name": "student_name",
    "roll": 4567
    }
    ```
    * PUT - localhost:4000/api/students/<ID> - Update a student
    ```
    {
    "name": "student_name",
    "roll": 4568
    }
    ```
    * DELETE - localhost:4000/api/students/<ID> - Deletes student by ID

## Reference
https://towardsdatascience.com/build-a-rest-api-with-node-express-and-mongodb-937ff95f23a5