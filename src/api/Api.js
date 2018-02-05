import axios from 'axios';

const config = {
  baseURL:'http://mage.dev/rest/',
  'params':{
    username:'admin',
    password:'admin@123'
  }
}

let token='';

let instance = axios.create({
  baseURL:'http://mage.dev/rest/',
  params:{
    username:'admin',
    password:'admin@123'
  },

});

const magento = ()=>{
    if(!token){
      return instance.post('/V1/integration/admin/token').then(res=>token=res.data);
    }
    return true;
}

const getProducts = ()=>{
  let result = magento();

  if(typeof result==='object'){
    return result.then(res=>{
      console.log(res);
      return instance.get('/V1/products?searchCriteria',{headers: {'Authorization': `Bearer ${token}` }})
    })
  }
  return instance.get('/V1/products?searchCriteria',{headers: {'Authorization': `Bearer ${token}` }})


}

export default getProducts;



