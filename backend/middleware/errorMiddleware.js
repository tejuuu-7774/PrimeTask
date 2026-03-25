// THIS IS A CENTRAL MIDDLEWARE HANDLER ADDED TO MAKE SURE WITH THE SAFETY
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    msg: err.message || "Server Error"
  });
};
