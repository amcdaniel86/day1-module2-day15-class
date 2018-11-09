//SPREAD OPERATOR
// let blah = [1,2,3,4,5];
// let two = ['snake', 'lizard']
// let three = ['person', 'society']

// let otherArray = [];

// otherArray.push(...blah, ...two, ...three);

// console.log(otherArray);

// DESTRUCTURING
// let person = {name: "samantha", occupation: "nurse", creditScore: 659, drivingRecord: "terrible"}
// // first value in object above has to match the first value in let {} object below.
// let {name, occupation} = person

// occupation = person.occupation;

// console.log(occupation);

// PROMISES - we won't be writing promises

let blah = new Promise(function(resolve, reject) {
  if (5 < 1){
    resolve('yes worked');
  } else {
    reject('no didnt work')
  }
});

//Large .then's is what gets returned into new separate arrays. 
blah
.then((w)=>{
          // chain promises
          goGetAllNationalFranchisesForThisPlace
          q.then(()=>{

          })
          .catch(()=.{

          })
          console.log(w)
})
.catch((theErorThing)=>{
console.log(theErorThing)
})

//