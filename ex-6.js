const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection("carBrand", array) {
  for (let i=0; i<array.length; i++){
  if (array.push("carBrand")){
    return(`New car collection is: ${array[i]}`);
  }else{
    return `${"carBrand"} already exists in position ${array["carBrand"]} of the car collection.`}
}

}
let carInsert = updateCarCollection(T,carCollection)
console.log(carInsert);


//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.