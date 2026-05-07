const url = "https://reqres.in/api/collections/products/records?project_id=15161";
// let my_details = {
  
//     name:"ravindra",
//     age:27,
//     company:"vnsoftverg"

//   };
 
const postProducts = async() =>{
    let response = await fetch(url,{
        method:"GET",
        headers:{
            "Content-Type" : "application/json",
           'x-api-key':"pro_37841cbe09944954754f3be1cdb85fde3380ff1a66d6e5e15ff90b6b73d1742c",
        //    'X-Reqres-Env': 'prod'
        },
        // body : JSON.stringify(my_details)
        
        
    }); 
    const data = await response.json();
    console.log(data)
 
   
}
postProducts()
