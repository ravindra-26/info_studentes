// let mySubjects = new Promise((pass,fail)=>{
//   let marks=30

//   if (marks=>35) {
//     pass("you are pass all subjects");
//   } else {
//     fail("you are not pass all subjects");
//   }
// });
// mySubjects
//   .then(result => {
//     console.log(result); 
//   })
//   .catch(error => {
//     console.log(error);
//   });


let coin= new Promise((head,tail)=>{
    let trass=true

    if(trass){
        head("trun on head");
    }
    else
    {
        tail("turn on tails");
    }
})
coin
.then(result=>{
    console.log(result);
})
.catch(error=>
{console.log(error);

});

