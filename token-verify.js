const jwt = require('jsonwebtoken')

const secret = 'do95';
const token  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInNjb3BlIjoiY3VzdG9tZXIiLCJpYXQiOjE2NDI5ODU4NjZ9.Pi0LuUuP53VXw0ZhznjpCqI4iPlThkLCgS7ePAw06R0'

function verifyToken(token, secret){
  return jwt.verify(token, secret)
}

const payload = verifyToken(token, secret);
console.log(payload)