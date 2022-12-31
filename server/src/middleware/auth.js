const auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send({message: 'No estas logueado'});
  }
};

export default auth;