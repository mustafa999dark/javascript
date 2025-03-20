var products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 102,
      title: "Mobile",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 103,
      title: "Bike",
      variations: [
        { id: 1, color: "black", price: 55000, quantity: 5 },
        { id: 2, color: "red", price: 70000, quantity: 1 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 3.0,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
      ],
    },
  ];
  
//   new1 = parseInt(prompt(`Enter product id `));
//   for (var i = 0; i< products.length; i++){
//     if(new1===products[i].id){
//         console.log(`${products[i].title}`);
//     }
//   }


//  programTitle = parseInt(prompt(`Enter index number`))
//  for( var j = 0 ; j < products.length; j++){
//     if(programTitle===j){
//         console.log(`Product Title : ${products[j].title}`);
//         console.log(`Available Colors And Quantity`);
//         for (var k = 0; k < products[j].variations.length; k++){
//             console.log(`Color : ${products[j].variations[k].color} Quantity: ${products[j].variations[k].quantity}`);
//         }
//         for(var l = 0; l < products[j].reviews.length; l++){
//             // console.log(`User: ${products[j].reviews[l].user} \n Rating: ${products[j].reviews[l].rating}\n Comments: ${products[j].reviews[l].comments}`);
//             if(products[j].reviews[l].status === true){
//                 console.log(`
//                 True Review:    
//                 User: ${products[j].reviews[l].user} \n Rating: ${products[j].reviews[l].rating} \n Comment: ${products[j].reviews[l].comments}`);
//             }
//             else {
//                 console.log(`
//                 False Review:
//                 User: ${products[j].reviews[l].user} \n Rating: ${products[j].reviews[l].rating} \n Comment: ${products[j].reviews[l].comments}`);
//             }
//         }
//     }

//  }





    // Program no : 1
     
    // productId = 102;
    // index = 1;
    // for( var a = 0; a < products.length; a++){
    //   if (productId===products[index].id){
    //     console.log(`${products[a].title}`)
    //   }

    // }



  //  Answer no : 1

  //   productId = parseInt(prompt(`Enter The product Id`));
  //     for (let a = 0; a < products.length ; a++){
  //    if(productId ===  products[a].id){
  //       console.log(products[a]);
  //     }
  //   }
    



// Answer no : 2

  // for( var c = 0 ; c < products.length ; c++){
  //   console.log(products[c].title);
  // }
  

  // Answer no : 3

  // id = parseInt(prompt(`Enter product id`));
   
  // for( var d = 0; d < products.length; d++){

  //  if (id === products[d].id){
  //      for ( var e = 0; e < products[d].variations.length; e++){
  //       console.log(products[d].variations[e].color);
  //      }
  //  }
  // }


//  Answer no : 4


//  let a = parseInt(prompt(`Enter product id`));
//  let  sum = 0;
//  for( var q = 0; q < products.length ; q++){
//   if(a === products[q].id){
//     for( var t = 0; t < products[q].variations.length; t++){
//       sum = sum + products[q].variations[t].quantity;
//     }
//   }
//  }
//  console.log(`Total Quantity of this product is : ${sum}`);




// Answer no : 5

// for ( var a = 0 ; a < products.length; a++){
//   for( var c = 0 ; c < products[a].variations.length; c++){
//     if (products[a].variations[c].quantity < 2){
//       console.log(products[a].title);
//     }
//   }
// }


// Answer no : 7

// let e = parseInt(prompt(`Enter product id`));
// for ( var q = 0; q < products.length; q++){
//   if(e === products[q].id){
//     for( var v = 0 ; v < products[q].reviews.length; v++){
//       if(products[q].reviews[v].status === true){
//         console.log(`True Comments: \n Name: ${products[q].reviews[v].user} \n Rating : ${products[q].reviews[v].rating}`);
//       }
//       else{
//         console.log(`False Comments: \n Name: ${products[q].reviews[v].user} \n Rating: ${products[q].reviews[v].rating}`);
//       }
//     } 
//   }
// }


// Answer no : 8


// let c = parseInt(prompt(`Enter product id`));
// for (var s = 0; s < products.length; s++){
//   if(c === products[s].id){
    
//     let product = products[s];
//     let mostExpensive = product.variations[0];

//     for ( var t = 0 ; t < products[s].variations.length ; t++){
//      if (product.variations[t].price > mostExpensive.price){
//       mostExpensive = product.variations[t];
      
//       console.log(`Product ${product.id} = ${product.title} - ${mostExpensive.color} (${mostExpensive.price})`);
//       break;
//      }

//     }
//   }
// }




// Answer no : 9

// let sum = 0;

// for( var w = 0 ; w < products.length ; w++){
//   for( var x = 0 ; x < products[w].variations.length ; x++){
//    sum = sum + products[w].variations[x].price;
//   }
// }
// console.log(`Total Stock : ${sum}`);