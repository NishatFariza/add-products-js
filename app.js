//select element
const selectElement = (selector) =>{
     return document.querySelector(selector);
}

let productName =selectElement('#product-input');
let productPrice =selectElement('#price-input');

//click event function
const saveDataToLocalStore = () =>{
     if(productName.value =="" || productPrice.value=="" ){
         console
     }
     if(isNaN(productName.value) == false || isNaN(productPrice.value) ==true){
          alert('Please!! Enter a valid input')
     }
     else{
        let product =selectElement('#products');
        product.innerHtml ="";
        let data = getItem();
        data[productName.value] = productPrice.value;
        let dataConvert =JSON.stringify(data)
        localStroage.setItem('product', dataConvert);

        displayData(data);
        displayData();
     }
     productName.value="";
     productPrice.value="";

}