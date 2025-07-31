       // Food items data (now with 12 items)
        const products = [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                title: "Classic Burger",
                description: "Juicy beef patty with lettuce, tomato and special sauce",
                price: 120,
                category: "Burger",
                rating: 4,
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hhd2FybWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                title: "Chicken Shawarma",
                description: "Marinated chicken with garlic sauce wrapped in pita bread",
                price: 180,
                category: "Shawarma",
                rating: 5,
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                title: "Margherita Pizza",
                description: "Classic pizza with tomato sauce and mozzarella cheese",
                price: 250,
                category: "Pizza",
                rating: 4,
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                title: "Cheeseburger",
                title: "Cheeseburger",
                description: "Classic burger with melted cheddar cheese",
                price: 150,
                category: "Burger",
                rating: 3,
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhd2FybWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                title: "Beef Shawarma",
                description: "Tender beef slices with tahini sauce in pita bread",
                price: 220,
                category: "Shawarma",
                rating: 4,
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                title: "Pepperoni Pizza",
                description: "Pizza topped with pepperoni slices and extra cheese",
                price: 280,
                category: "Pizza",
                rating: 5,
            },
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                title: "Bacon Burger",
                description: "Beef patty with crispy bacon and barbecue sauce",
                price: 170,
                category: "Burger",
                rating: 4,
            },
            {
                id: 8,
                image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hhd2FybWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                title: "Mix Shawarma",
                description: "Combination of chicken and beef with garlic sauce",
                price: 240,
                category: "Shawarma",
                rating: 3,
            },
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1581873372796-635b67ca2008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                title: "Vegetarian Pizza",
                description: "Pizza with fresh vegetables and mozzarella cheese",
                price: 230,
                category: "Pizza",
                rating: 4,
            },
            {
                id: 10,
                image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                title: "Double Burger",
                description: "Two beef patties with double cheese and sauce",
                price: 200,
                category: "Burger",
                rating: 5,
            },
            {
                id: 11,
                image: "https://images.unsplash.com/photo-1601050690117-93f270545a7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hhd2FybWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                title: "Spicy Shawarma",
                description: "Chicken shawarma with hot sauce and vegetables",
                price: 190,
                category: "Shawarma",
                rating: 4,
            },
            {
                id: 12,
                image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                title: "BBQ Pizza",
                description: "Pizza with barbecue sauce and chicken toppings",
                price: 270,
                category: "Pizza",
                rating: 4,
            }
        ];

        let selectedCategory = [];
        let selectedRating = "";
        let maxPrice = 1000;

        const categoryFilterEl = document.getElementById('categoryFilter');
        const productsGridEl = document.getElementById('productsGrid');
        const ratingFilterEl = document.getElementById('ratingFilter');
        const priceRangeEl = document.getElementById('priceRange');
        const maxPriceValueEl = document.getElementById('maxPriceValue');

        window.onload = function() {
            renderCategories();
            renderProducts();
            renderRatingFilter();
            setupPriceFilter();
        };

        function setupPriceFilter() {
            priceRangeEl.addEventListener('input', function() {
                maxPrice = parseInt(this.value);
                maxPriceValueEl.textContent = maxPrice;
                renderProducts();
            });
        }
n
        const onChangeCategory = (category, isChecked) => {
            if (isChecked) {
                selectedCategory.push(category);
            } else {
                selectedCategory = selectedCategory.filter((cat) => cat !== category);
            }
            renderProducts();
        };

        const onChangeRatingHandler = (rating) => {
            selectedRating = rating;
            renderRatingFilter();
            renderProducts();
        };

        const getFilterData = (data, selectedCategory, selectedRating) => {
            let filteredProducts = data;

            if (selectedCategory.length) {
                filteredProducts = filteredProducts.filter((product) =>
                    selectedCategory.includes(product.category)
                );
            }

            if (selectedRating) {
                filteredProducts = filteredProducts.filter(
                    (product) => product.rating >= selectedRating
                );
            }

            filteredProducts = filteredProducts.filter(
                (product) => product.price <= maxPrice
            );

            return filteredProducts;
        };

        const renderCategories = () => {
            const categories = ["Burger", "Shawarma", "Pizza"];
            categoryFilterEl.innerHTML = categories
                .map(
                    (category) => `
                    <div class="flex items-center">
                        <input 
                            type="checkbox"
                            class="mr-2"
                            onchange="onChangeCategory('${category}', this.checked)"
                        />
                        <label>${category}</label>
                    </div>
                `
                )
                .join("");
        };

        const renderRatingFilter = () => {
            ratingFilterEl.innerHTML = [5, 4, 3, 2, 1]
                .map(
                    (rating) => `
                    <div class="flex items-center cursor-pointer" onclick="onChangeRatingHandler(${rating})">
                        ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}
                        <span class="ml-1 text-sm">${rating}.0+</span>
                    </div>
                `
                )
                .join("");
        };

        const renderProducts = () => {
            const visibleProducts = getFilterData(
                products,
                selectedCategory,
                selectedRating
            );

            productsGridEl.innerHTML = visibleProducts
                .map(
                    (product) => `
                    <div class="bg-white rounded-lg shadow overflow-hidden">
                        <img
                            src="${product.image}"
                            alt="${product.title}"
                            class="w-full h-48 object-cover"
                        />
                        <div class="p-4">
                            <h3 class="font-bold text-lg">${product.title}</h3>
                            <div class="flex items-center my-1">
                                ${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}
                                <span class="ml-1 text-sm">(${product.rating})</span>
                            </div>
                            <p class="text-gray-600 text-sm my-2">${product.description}</p>
                            <div class="flex justify-between items-center mt-3">
                                <span class="font-bold">$${product.price}</span>
                                <button class="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                `
                )
                .join("");
        };
 