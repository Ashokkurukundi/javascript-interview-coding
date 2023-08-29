let testPromise = ()=>{
    let count = 0;
    return ()=>{
        return new Promise((resolve, reject)=>{
            count += 1;
            
            if(count <= 5){
                reject("I am failed api")
            }else{
                resolve("I am successful");
            }            
        })
    }
}

let retry = (fn, retries, finalError)=>{
    return new Promise((resolve, reject)=>{
        fn().then(resolve, (err)=>{
            if(retries === 1){
                reject(finalError)
            }

            retry(fn, retries-1, finalError).then(resolve, reject)
        })
    })
}

retry(testPromise(), 5, "I am a final error").then((val)=>{
    console.log(val)
}, (err)=>{
    console.error(err)
})