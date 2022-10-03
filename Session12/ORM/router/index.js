const router = require('express').Router();
const PhotoController = require('../controller/photoController');

router.get('/photos', PhotoController.GetAllPhotos);
router.get('/photos/:id', PhotoController.GetPhotoById);
router.post('/photos', PhotoController.createPhoto);
router.put('/photos/:id', PhotoController.updateOnePhotoById);
router.delete('/photos/:id', PhotoController.deleteOnePhotosById);
module.exports = router;
