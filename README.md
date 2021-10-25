# GET - /api/users?since={number}

This endpoint must return a list of GitHub users and the link for the next page.

# GET - /api/users/:username/details

This endpoint must return the details of a GitHub user

# GET - /api/users/:username/repos

This endpoint must return a list with all user repositories

# run npm start

-- starts server with nodemon

# run node server.js

-- just starts the server

# share the app repository

-- andre.eccel@shawandpartners.com

# url to test the api

port 5500 or from process.env.PORT

http://localhost:5000/api/users?since=1&per_page=5
http://localhost:5000/api/users/defunkt/details
http://localhost:5000/api/users/defunkt/repos

handling error
http://localhost:5000/api/users/defuhhhnkt/details 