const db = require('./server/db/models');
const Campus = require('./server/db/models/campus');
const Student = require('./server/db/models/student');

const campusArray = [
  { name: 'Tatooine', imageUrl: 'gfhjdsgfjhdgfjh', description: 'Bacon ipsum dolor amet capicola short ribs jerky porchetta kevin, sirloin shankle. Capicola fatback bacon, prosciutto flank t-bone.' },
  { name: 'Naboo', imageUrl: 'gfhjdsgfjhdgfjh', description: 'Bacon ipsum dolor amet capicola short ribs jerky porchetta kevin, sirloin shankle. Capicola fatback bacon, prosciutto flank t-bone.'},
  { name: 'Coruscant', imageUrl: 'gfhjdsgfjhdgfjh', description: 'Bacon ipsum dolor amet capicola short ribs jerky porchetta kevin, sirloin shankle. Capicola fatback bacon, prosciutto flank t-bone.'},
  { name: 'Alderaan', imageUrl: 'gfhjdsgfjhdgfjh', description: 'Bacon ipsum dolor amet capicola short ribs jerky porchetta kevin, sirloin shankle. Capicola fatback bacon, prosciutto flank t-bone.'}
];
const studentArray = [
  { campusId: 1, firstName: 'David', lastName: 'Davies', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
  { campusId: 2, firstName: 'John', lastName: 'Matthews', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
	{ campusId: 3, firstName: 'Mary', lastName: 'Hughes', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
	{ campusId: 4, firstName: 'Olivia', lastName: 'Bunce', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
  { campusId: 1, firstName: 'Kathryn', lastName: 'Kiley', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
  { campusId: 2, firstName: 'Bruce', lastName: 'Harris', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
	{ campusId: 3, firstName: 'Tony', lastName: 'Guy', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
	{ campusId: 4, firstName: 'Sarah', lastName: 'Davies', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
  { campusId: 1, firstName: 'Harry', lastName: 'Jones', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
  { campusId: 2, firstName: 'Karen', lastName: 'Francis', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
	{ campusId: 3, firstName: 'Shaun', lastName: 'Hutch', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
	{ campusId: 4, firstName: 'Stephanie', lastName: 'Boyle', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
  { campusId: 1, firstName: 'Fiona', lastName: 'Frost', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
  { campusId: 2, firstName: 'Karl', lastName: 'Pilkinton', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
	{ campusId: 3, firstName: 'Martin', lastName: 'George', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
	{ campusId: 4, firstName: 'Emma', lastName: 'Jennings', email: 'shaunoff@gmail.com', assessments: [1,2,3,4,3,2,4,2,3,4,4,3]},
];

const setGpa = () => {
  const result = [];
  studentArray.forEach((student,index)=>{
    let num = 0
    while(num < 10){
      const obj = {
        score: Math.ceil(Math.random() * 4),
        studentId: index+1
      }
      result.push(obj)
      num++
    }
  })
  return result
}
const gpaArray = setGpa()


const seed = () =>
  Promise.all(campusArray.map(campus =>
    Campus.create(campus))
  )
  .then(() => {
		return console.log("campus' added");
	}
  )
  .then(() =>
  Promise.all(studentArray.map(student =>
    Student.create(student))
	)
	.then(() => {
		return console.log("students' added");
	}))
  // .then(() =>
  // Promise.all(gpaArray.map(gpa =>
  //   Assessment.create(gpa)
	// )
	// ))
	// .then(() => {
	// 	return console.log("gpa added");
	// })

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
