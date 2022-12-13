const logErrors = (err, req, res, next) => {
    console.log("Ha habido un error");
    console.log(err);
    next(err);
  };
  
  const errorHandler = (err, req, res, next) => {
    const { message } = err;
    res.status(500).json({ ok: false, message });
  };
  
  module.exports = {
    logErrors,
    errorHandler,
  };
  
  