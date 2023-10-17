const request = require('supertest');
const mockingoose = require('mockingoose');
const Student = require('../models/student');
const router = require('./api');
const app = require('../index');

describe('apis service', () => {

  describe('students get endpoint', () => {
    test('should return students list', async () => {
        mockingoose(Student).toReturn([
            {
                name: "testname",
                roll: 1234,
            },
            {
                name: "testname2",
                roll: 3456
            }
          ], 'find');
      const res = await request(app).get('/api/students');
        
      expect(res.statusCode).toEqual(200);
      expect(res.body[0].name).toEqual('testname');
      expect(res.body[0].roll).toEqual(1234);
      expect(res.body[1].name).toEqual('testname2');
      expect(res.body[1].roll).toEqual(3456);
    })
  })

  describe('students/id get endpoint', () => {
    test('should return student by id', async () => {
        mockingoose(Student).toReturn(
            {
                name: "testname",
                roll: 1234,
            }
          , 'find');
      const res = await request(app).get('/api/students/5678');
        
      expect(res.statusCode).toEqual(200);
      expect(res.body.name).toEqual('testname');
      expect(res.body.roll).toEqual(1234);
    })
  })

  describe('students post endpoint', () => {
    test('should add new student', async () => {
        // mockingoose(Student).toReturn(
        //     {
        //         name: "testname",
        //         roll: 1234,
        //     }
        //   , 'create');
      const res = await request(app).post('/api/students');
      console.log(res.body);
      expect(res.statusCode).toEqual(200);
    })
  })
});