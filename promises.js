const myPromise=new Promise((resolve,reject)=>{
   if(false){
    console.log("Promise is going to resolve after 3s")
    setTimeout(()=>{
        resolve("Done!")
    },3000)
   }
   reject("Failed!")
})
myPromise.then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
})
