const request = require('supertest');
const app = require('../app');
const {sequelize} = require('../models');
const photoData = {
  title: 'title test',
  caption: 'caption test',
  image_url: 'url test',
  UserId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
};

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
        expect(res.body.title).toEqual(photoData.title)
        expect(res.body.caption).toEqual(photoData.caption)
        done()
      })
  })
});

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
    //   .post('/photos')
    //   .send(photoData)
    //   .end(function (err, res){
    //     if(err){
    //       done(err)
    //     }
    //     expect(res.status).toEqual(201);
    //   });