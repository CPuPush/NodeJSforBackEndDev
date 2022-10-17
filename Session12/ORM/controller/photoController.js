const { Photo, User } = require('../models')

class PhotoController {

  static async GetAllPhotos(req, res){
    try {
      const data = await Photo.findAll();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
    // Photo.findAll()
    //   .then(result => {
    //     res.status(200).json(result);
    //   })
    //   .catch(err => {
    //     res.status(500).json(err);
    //   })
  }
  static async GetPhotoById(req, res){
    try {
      // const id = req.params.id;
      // const data = Photo.findByPk(id);
      // return res.status(200).json(data);      
      const id = req.params.id;
      const dataId = await Photo.findOne({
        where: {id:id}
      })
      if(dataId == null){
        return res.status(404).json({message:"Not Found"});
      }
      return res.status(200).json(dataId);
    } catch (error) {
      return res.status(500).json(error)
    }
  }


  static async createPhoto(req, res){
    try {
      const {title, caption, image_url} = req.body;
      const create = await Photo.create({
        title,
        caption,
        image_url
      });
      if(!title || !caption || !image_url){
        return res.status(400).json({message : "bad request"});
      }
      return res.status(201).json(create);
    } catch (error) {
      return res.status(500).json(error)
    }
  }


  static async updateOnePhotoById(req, res){
    try {
      let id = req.params.id;
      let { title, caption, image_url } = req.body;
      let data = {
        title:title,
        caption:caption,
        image_url:image_url
      };
      const updatePhoto = await Photo.update(
        data,
        {
          where:{
            id:id
          },
          returning: true
        }
      )
      return res.status(200).json(updatePhoto);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async deleteOnePhotosById (req, res) {
    try {
      const {id} = req.params;
      const deleteById = await Photo.destroy({
        where: {
          id
        }
      });
      return res.status(200).json(deleteById);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static GetAllPhotos(req, res) {
    Photo.findAll({
      include: User
    })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        res.status(500).json(err);
      })
  }
}

module.exports = PhotoController;

/*
update merupakan sebuah method pada sequelize untuk mengupdate sebuah data di database. Method update meneripa 2 parameter berupa data object. parameter pertama digunakan untuk mendefinisikan field field apa saja yang akan di update, dan parameter kedua untuk mendefinisikan bahwa kita ingin mengupdat suatu data dengan id tertentu atau dengan kondisi tertentu. lalu kita juga menggunakan returning true agar kita bisa mendapatkan response dari sequelize berupa data yang baru saja kita update.

hasil nya berupa angka 1 pada index 0, artinya berhasil dan jika 0 maka itu menandakan bahwa kita gagal mengupdate dadtanya karena datanya.
*/