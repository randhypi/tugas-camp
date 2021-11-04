var filterBooksPromise = require('./promise2.js')

// Lanjutkan code untuk menjalankan function filterBookPromise

 async function response (isColor,amount){
  let result = await filterBooksPromise
  return result(isColor,amount)

}

response(true,40).then(
value => {
    console.log(value)
}
)


response(false,250).then(
    value => {
        console.log(value)
    }
    )

    
response(true,30).catch(e=>{
        console.log(e.message)
         }
        
        )