// istraukia is duomenu norima array
// const uniqueCategories = getUniqueArrItems(products.map((product) => product.type));
//console.log(uniqueCategories);
export const getUniqueArrItems = (array) => [...new Set(array)];
