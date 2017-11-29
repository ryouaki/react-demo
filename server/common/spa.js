exports = module.exports = (options) => {
  
  const defaultOption = {

  }

  return (req, res, next) => {
    console.log(req.originalUrl); // '/admin/new'
    console.log(req.baseUrl); // '/admin'
    console.log(req.path); // '/new'
    next();
  }
}