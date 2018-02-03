
const fakePromise = ()=>new Promise((resolve,reject)=>{
  setTimeout(resolve,2000)
})

const downloader = {
  getAttributes : fakePromise,
  getAttributeSets : fakePromise,
  getTaxRules : fakePromise,
  getStores : fakePromise,
  getProducts : fakePromise,
  getCategories : fakePromise
}

export default downloader;