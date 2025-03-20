var products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { id: 1, color: "Blue", price: 50000, quantity: 5 },
        { id: 2, color: "Red", price: 50000, quantity: 1 },
        { id: 3, color: "Grey", price: 55000, quantity: 8 },
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
        { id: 1, color: "Black", price: 50000, quantity: 5 },
        { id: 2, color: "Red", price: 50000, quantity: 1 },
        { id: 3, color: "Silver", price: 55000, quantity: 8 },
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
        { id: 1, color: "Black", price: 55000, quantity: 5 },
        { id: 2, color: "Gray", price: 70000, quantity: 1 },
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

  // Answer no : 3

  let  id = parseInt(prompt(`Enter product id`));
  let  ifNot = false; 
  for( var d = 0; d < products.length; d++){
   if (id === products[d].id){
    console.log(`Product Name : ${products[d].title}`);
    console.log(`Product Available Color's:`);
       for ( var e = 0; e < products[d].variations.length; e++){
        console.log(`${products[d].variations[e].color}`);
        ifNot = true;
       }
   }
  }
  if(!ifNot){
    alert(`Enter Correct Product id Error!!!!!`)
  }
