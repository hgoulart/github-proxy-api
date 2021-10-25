const express = require('express')
const app = express()
const axios = require('axios')

app.get('/api/users', (req, res, next) => {
  // Simple log to get the parameters and date
  console.log(`${req.url}: date ${new Date()}`)
  let per_page = 10
  let since = req.query.since
  if (req.query.per_page) {
    per_page = req.query.per_page
  }

  axios.get(`https://api.github.com/users?since=${since}&per_page=${per_page}`).then((response) => {
    res.status(200).send({
      success: true,
      error: false,
      message: response.data
    })
  }).catch((error) => {
    const err = error.toJSON()
    res.status(err.status).send({
      success: true,
      error: false,
      message: err.message
    })
  });
})

app.get('/api/users/:username/details', (req, res, next) => {
  // Simple log to get the parameters and date
  console.log(`${req.url}: date ${new Date()}`)
  let username = req.params.username
  if (!username) {
    res.status(200).send({
      success: true,
      error: true,
      message: "You need to provide the username"
    })
  } else {
    axios.get(`https://api.github.com/users/${username}`).then((response) => {
      console.log(response)
      res.status(200).send({
        success: true,
        error: false,
        message: response.data
      })
    }).catch((error) => {
      const err = error.toJSON()
      res.status(err.status).send({
        success: true,
        error: false,
        message: err.message
      })
    });
  }
})

app.get('/api/users/:username/repos', (req, res, next) => {
  // Simple log to get the parameters and date
  console.log(`${req.url}: date ${new Date()}`)
  let username = req.params.username
  if (!username) {
    res.status(200).send({
      success: true,
      error: true,
      message: "You need to provide the username"
    })
  } else {

    axios.get(`https://api.github.com/users/${username}/repos`).then((response) => {
      res.status(200).send({
        success: true,
        error: false,
        message: response.data
      })
    }).catch((error) => {
      const err = error.toJSON()
      res.status(err.status).send({
        success: true,
        error: false,
        message: err.message
      })
    });
  }
})


module.exports = app