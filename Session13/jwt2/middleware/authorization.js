const {Product} = require('../models');
async function authorization(req, res, next) {
  try {
    const productId = req.params.id;
    const authenticatedUserId = res.dataUser.id;

    const product = await Product.findOne({
      where:{
        id: +productId
      }
    });
  
    if(!product) {
      return res.status(404).json({message: "product not found"})
    }
    if(product.UserId === authenticatedUserId){
      return next();
    }else{
      return res.status(403).json({
        message: "forbidden"
      });
    }

  } catch (error) {
    // internal server error
    res.status(400).json(error);
  }

}

module.exports = authorization;