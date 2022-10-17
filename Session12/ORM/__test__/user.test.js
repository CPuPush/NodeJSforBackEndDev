const request = require('supertest');
const app = require('../app');
const {sequelize} = require('../models');

const photoData = {
  id: 1,
  title: 'title test',
  caption: 'caption test',
  image_url: 'url test',
  UserId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
};
const wrongData = {
  title:null,
  caption:null,
  image_url:null,
}

const wrongId = 100;
// const wrongPhotoData = {
//   title,

// }

// TESTING UNTUK STATIC METHOD CREATEPHOTO
describe("post /photos", () => {
  it("should send response 201", (done) => {
    request(app)
      .post("/photos")
      .send(photoData)
      .end(function(err, res){
        if(err){
          done(err)
        }
        expect(res.status).toEqual(201)
        expect(typeof res.body).toEqual("object")
        expect(res.body).toHaveProperty("title")
        expect(res.body).toHaveProperty("caption")
        expect(res.body).toHaveProperty("image_url")
        expect(res.body).toHaveProperty("UserId")
        expect(res.body).toHaveProperty("createdAt")
        expect(res.body).toHaveProperty("updatedAt")
        expect(res.body.title).toEqual(photoData.title)
        expect(res.body.caption).toEqual(photoData.caption)
        expect(res.body.image_url).toEqual(photoData.image_url)
        done()
      })
    })
    
  it("should send response 400", (done) => {
    request(app)
      .post("/photos")
      .send(wrongData)
      .end(function (err, res){
        if(err){
          done(err)
        }
        expect(res.status).toEqual(400)
        expect(res.body).toHaveProperty("message")
        expect(res.body.message).toEqual("bad request")
        done()
      })
  })
  });
// TESTING UNTUK STATIC METHOD GETALLPHOTOS
describe("GET /PHOTOS", () => {  
  it("should send response 200", (done) => {
    request(app)
      .get("/photos")
      .end(function(err, res) {
        if(err){
          done(err)
        }
        expect(res.status).toEqual(200)
        expect(typeof res.body).toEqual("object")
        expect(res.body[0]).toHaveProperty("title")
        expect(res.body[0]).toHaveProperty("caption")
        expect(res.body[0]).toHaveProperty("image_url")
        expect(res.body[0]).toHaveProperty("UserId")
        expect(res.body[0]).toHaveProperty("createdAt")
        expect(res.body[0]).toHaveProperty("updatedAt")
        expect(res.body[0].title).toEqual(photoData.title)
        expect(res.body[0].caption).toEqual(photoData.caption)
        expect(res.body[0].image_url).toEqual(photoData.image_url)
        done()
      });
  });
})
// TESTING UNTUK STATIC METHOD GETPHOTOBYID
describe("GET /PHOTOS/:id", () => {
  it("should send response 200", (done) => {
    request(app)
      .get(`/photos/${photoData.id}`)
      .end(function(err, res) {
        if(err){
          done(err)
        }
        expect(res.status).toEqual(200)
        done()
      })
  });
  it("should send response 404", (done) => {
    request(app)
      .get(`/photos/${wrongId}`)
      .end(function (err, res){
        if(err){
          done(err)
        }
        expect(res.status).toEqual(404)
        expect(res.body).toHaveProperty("message")
        expect(res.body.message).toEqual("Not Found")
        done()
      })
  })
})
afterAll((done) => {
  sequelize.queryInterface.bulkDelete('Photos', {})
    .then(()=>{
      return done()
    })
    .catch(err => {
      done(err)
    })
});
// request(app)
//       .post('/photos')
//       .send(photoData)
//       .end(function (err, res){
//         if(err){
//           done(err)
//         }
//         expect(res.status).toEqual(201);
//       });