const {Product}  = require('../models');

class ProductController {
  static async getAllProducts (req, res){
    try{
      const idUser = res.dataUser.id;
      const dataProduct = await Product.findAll({
        where:{
          // UserId: +idUser => if we wanna to get all product with id user
          UserId: +idUser
        }
      });
      res.status(200).json(dataProduct);
    }catch(error){
      res.status(500).json(error);
    }
  }


  static async getProductById (req, res){
    const productId = req.params.id;
    try{
      console.log(req.params);
      const dataProduct = await Product.findOne({
        where: {
          id: +productId
        }
      });
      res.status(200).json(dataProduct);
    }catch(error){
      res.status(500).json(error);
    }
  }
}

module.exports = ProductController;