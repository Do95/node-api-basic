function logHandler(err,req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

function boomHandler(err,req, res, next){
  if(err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload)
  }
  next(err);
}

module.exports = { logHandler, boomHandler}