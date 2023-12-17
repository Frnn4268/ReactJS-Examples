// errorHandlers.js
const createError = require('http-errors');

// 404 not found Middleware
const handle404Error = function(req, res, next) {
  next(createError(404));
};

// Handle error middleware for another type of errors
const handleError = function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
};

module.exports = 
  {
    handle404Error, 
    handleError
  }
