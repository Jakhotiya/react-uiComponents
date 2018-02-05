import {getProducts} from "./Api";

describe('something',function(){


  test('tests 404 for magento webapi',function(done){

    getProducts()
      .then(res=>{
        console.log(res);
        done();
      }).catch(err=>{
        console.log(err);
        done();
    })

  });
});