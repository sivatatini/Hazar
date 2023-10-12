const mongoose = require("mongoose");
const  Student  = require("./student");
const db = require("../setup/testdb");

const studentData = {
  name: "testname",
  roll: 1234,
};

const studentDataWithoutRoll = {
    name:"testname"
}

const studentDataWithRollUnder1000 = {
    name:"testname",
    roll:123
}

beforeAll(async () => {
  await db.setUp();
}, 10000);

afterEach(async () => {
  await db.dropCollections();
});

afterAll(async () => {
  await db.dropDatabase();
});


/**
 * User model
 */
describe("Student model", () => {
    it("throws error when roll not provided", async () => {

        const invalidStudent = new Student(studentDataWithoutRoll)
        await expect(invalidStudent.validate()).rejects.toThrow('student validation failed: roll: Roll field is required')
    });
    
    it("throws error when roll less than 1000", async () => {
        const invalidStudent = new Student(studentDataWithRollUnder1000)
        await expect(invalidStudent.validate()).rejects.toThrow('student validation failed: roll: Roll should not be less than 1000')
    });

    it("create & save student successfully", async () => {
        const validStudent = new Student(studentData);
        const savedStudent = await validStudent.save();

        expect(validStudent.id).toBeDefined();
        expect(savedStudent._id).toBeDefined();
        expect(savedStudent.name).toBe(studentData.name);
        expect(savedStudent.roll).toBe(studentData.roll);
    });

});