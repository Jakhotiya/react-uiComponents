export const storeProducts = (data)=>{
  localStorage.setItem('downloads_products',JSON.stringify(data));
}