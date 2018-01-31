const setSku = value => {
  return { name: value, sku: value.toUpperCase() };
}

const Handler = {
  name: setSku
}

export default Handler;