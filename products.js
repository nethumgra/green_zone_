// products.js - Functionality specific to the products page

document.addEventListener('DOMContentLoaded', function() {
  // Product data
  const products = [
    {
      id: 1,
      name: "Premium Ceylon Cinnamon Sticks",
      price: 9.99,
      category: "sticks",
      image: "https://images.unsplash.com/photo-1568832849324-167c62c7849b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Hand-rolled premium Ceylon cinnamon sticks with a delicate flavor profile. Each stick is carefully selected for quality and packaged to preserve freshness.",
      rating: 5,
      reviews: 128,
      availability: "In Stock",
      benefits: [
        "Delicate, sweet flavor with citrus notes",
        "Lower coumarin content than Cassia cinnamon",
        "Ideal for teas, coffees, and desserts",
        "Enhances both sweet and savory dishes"
      ]
    },
    {
      id: 2,
      name: "Organic Ground Cinnamon",
      price: 7.49,
      category: "powder",
      image: "https://images.unsplash.com/photo-1568832849324-167c62c7849b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Finely ground organic Ceylon cinnamon powder, perfect for baking and cooking. Our special grinding process preserves essential oils for maximum flavor and aroma.",
      rating: 4.5,
      reviews: 97,
      availability: "In Stock",
      benefits: [
        "Smooth, non-gritty texture",
        "Rich in antioxidants",
        "Perfect for baking and cooking",
        "No additives or preservatives"
      ]
    },
    {
      id: 3,
      name: "Pure Cinnamon Essential Oil",
      price: 14.99,
      category: "oil",
      image: "https://images.unsplash.com/photo-1568832849324-167c62c7849b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "100% pure Ceylon cinnamon essential oil, steam-distilled from cinnamon bark. Use for aromatherapy, personal care products, or natural home fragrances.",
      rating: 4.8,
      reviews: 64,
      availability: "Limited Stock",
      benefits: [
        "Warm, comforting aroma",
        "Multi-purpose essential oil",
        "Great for aromatherapy",
        "No synthetic additives"
      ]
    },
    {
      id: 4,
      name: "Cinnamon Gift Box Set",
      price: 24.99,
      category: "gift",
      image: "https://images.unsplash.com/photo-1568832849324-167c62c7849b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "The perfect gift for cinnamon lovers. This beautiful gift box contains premium cinnamon sticks, ground cinnamon, and cinnamon-infused honey in an elegant package.",
      rating: 5,
      reviews: 42,
      availability: "In Stock",
      benefits: [
        "Beautifully packaged for gifting",
        "Contains three premium products",
        "Includes recipe booklet",
        "Sustainable packaging"
      ]
    },
    {
      id: 5,
      name: "Cinnamon Quills - Extra Long",
      price: 12.99,
      category: "sticks",
      image: "https://images.unsplash.com/photo-1568832849324-167c62c7849b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Extra-long premium Ceylon cinnamon quills, perfect for impressive garnishes and infusing beverages. Each quill is approximately 8-10 inches long.",
      rating: 4.7,
      reviews: 31,
      availability: "In Stock",
      benefits: [
        "Impressive size for garnishing",
        "Ideal for mulled wine and cider",
        "Great for decorative purposes",
        "Premium quality bark"
      ]
    },
    {
      id: 6,
      name: "Cinnamon Chai Tea Blend",
      price: 8.99,
      category: "powder",
      image: "https://images.unsplash.com/photo-1568832849324-167c62c7849b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A delicious blend of premium Ceylon cinnamon with black tea, cardamom, cloves, and ginger. Creates a perfect cup of authentic chai tea.",
      rating: 4.9,
      reviews: 78,
      availability: "In Stock",
      benefits: [
        "Perfect balance of spices",
        "Authentic chai flavor",
        "No artificial flavors",
        "Comforting and warming"
      ]
    },
    {
      id: 7,
      name: "Cinnamon Infused Honey",
      price: 10.99,
      category: "oil",
      image: "https://images.unsplash.com/photo-1568832849324-167c62c7849b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Pure organic honey infused with Ceylon cinnamon. Perfect for drizzling over yogurt, toast, or using in tea. A natural sweetener with a warm cinnamon flavor.",
      rating: 4.6,
      reviews: 52,
      availability: "In Stock",
      benefits: [
        "Natural sweetener",
        "Delicious in tea or coffee",
        "Great on breakfast foods",
        "Raw, unfiltered honey"
      ]
    },
    {
      id: 8,
      name: "Luxury Cinnamon Gift Basket",
      price: 39.99,
      category: "gift",
      image: "https://images.unsplash.com/photo-1568832849324-167c62c7849b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Our luxury gift basket contains a complete cinnamon experience: premium sticks, powder, oil, cinnamon tea, cinnamon cookies, and a handcrafted cinnamon ornament.",
      rating: 5,
      reviews: 23,
      availability: "Limited Stock",
      benefits: [
        "Complete cinnamon experience",
        "Beautifully presented in basket",
        "Perfect special occasion gift",
        "Includes exclusive recipes"
      ]
    },
    {
      id: 9,
      name: "Cinnamon Bark Extract",
      price: 18.99,
      category: "oil",
      image: "https://images.unsplash.com/photo-1568832849324-167c62c7849b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Concentrated cinnamon bark extract in a convenient dropper bottle. Perfect for adding intense cinnamon flavor to baked goods, beverages, and more.",
      rating: 4.7,
      reviews: 38,
      availability: "In Stock",
      benefits: [
        "Highly concentrated flavor",
        "Easy to use dropper bottle",
        "A little goes a long way",
        "Pure, natural extract"
      ]
    }
  ];

  const productsContainer = document.getElementById('products-container');
  const productModal = document.getElementById('product-modal');
  const closeModalButton = document.getElementById('close-modal');
  const categoryFilters = document.querySelectorAll('.category-filter');
  
  let currentCategory = 'all'; // Default to showing all products

  // Initialize products display
  displayProducts(currentCategory);

  // Category filter functionality
  categoryFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      // Update active class
      categoryFilters.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-white', 'text-primary', 'border', 'border-primary');
      });
      
      this.classList.remove('bg-white', 'text-primary', 'border', 'border-primary');
      this.classList.add('bg-primary', 'text-white');
      
      // Update current category and display products
      currentCategory = category;
      displayProducts(currentCategory);
    });
  });

  // Close modal when clicking the close button
  if (closeModalButton) {
    closeModalButton.addEventListener('click', function() {
      productModal.classList.add('hidden');
      document.body.style.overflow = 'auto'; // Enable scrolling again
    });
  }

  // Close modal when clicking outside the content
  if (productModal) {
    productModal.addEventListener('click', function(e) {
      if (e.target === productModal) {
        productModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Quantity control in modal
  document.querySelectorAll('.quantity-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const action = this.getAttribute('data-action');
      const input = document.getElementById('quantity');
      let value = parseInt(input.value);
      
      if (action === 'increase') {
        value++;
      } else if (action === 'decrease' && value > 1) {
        value--;
      }
      
      input.value = value;
    });
  });

  // Display products based on the selected category
  function displayProducts(category) {
    // Filter products
    const filteredProducts = category === 'all' 
      ? products 
      : products.filter(product => product.category === category);
    
    // Clear the container
    productsContainer.innerHTML = '';
    
    // If no products are found
    if (filteredProducts.length === 0) {
      productsContainer.innerHTML = `
        <div class="col-span-full text-center py-12">
          <i class="fas fa-search text-gray-400 text-5xl mb-4"></i>
          <h3 class="text-xl font-bold text-gray-600">No products found</h3>
          <p class="text-gray-500">Try selecting a different category or check back later.</p>
        </div>
      `;
      return;
    }
    
    // Create product cards
    filteredProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2';
      
      // Generate rating stars
      let starsHtml = '';
      const fullStars = Math.floor(product.rating);
      const hasHalfStar = product.rating % 1 !== 0;
      
      for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star text-yellow-400"></i>';
      }
      
      if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
      }
      
      const emptyStars = 5 - Math.ceil(product.rating);
      for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star text-yellow-400"></i>';
      }
      
      productCard.innerHTML = `
        <div class="h-64 overflow-hidden">
          <img class="w-full h-full object-cover transform hover:scale-110 transition-all duration-500" 
               src="${product.image}" 
               alt="${product.name}">
        </div>
        <div class="p-6">
          <div class="flex items-center mb-2">
            <div class="mr-2">${starsHtml}</div>
            <span class="text-sm text-gray-500">(${product.reviews})</span>
          </div>
          <h3 class="text-xl font-bold text-primary mb-2">${product.name}</h3>
          <p class="text-gray-600 mb-4">${product.description.substring(0, 100)}...</p>
          <div class="flex justify-between items-center">
            <span class="text-secondary font-bold text-lg">$${product.price.toFixed(2)}</span>
            <button class="view-product-btn bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors" data-id="${product.id}">View Details</button>
          </div>
        </div>
      `;
      
      productsContainer.appendChild(productCard);
    });
    
    // Add event listeners to the view details buttons
    document.querySelectorAll('.view-product-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        openProductModal(productId);
      });
    });
  }

  // Open product modal with details
  function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Generate rating stars
    let starsHtml = '';
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<i class="fas fa-star text-yellow-400"></i>';
    }
    
    if (hasHalfStar) {
      starsHtml += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(product.rating);
    for (let i = 0; i < emptyStars; i++) {
      starsHtml += '<i class="far fa-star text-yellow-400"></i>';
    }
    
    // Generate benefits list
    let benefitsHtml = '';
    product.benefits.forEach(benefit => {
      benefitsHtml += `<li>${benefit}</li>`;
    });
    
    // Update modal content
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-image').alt = product.name;
    document.getElementById('modal-rating').innerHTML = starsHtml;
    document.getElementById('modal-reviews').textContent = `${product.reviews} reviews`;
    document.getElementById('modal-price').textContent = `$${product.price.toFixed(2)}`;
    
    // Set availability with color based on status
    const availabilityElement = document.getElementById('modal-availability');
    if (product.availability === 'In Stock') {
      availabilityElement.className = 'text-sm font-medium text-green-600';
      availabilityElement.innerHTML = '<i class="fas fa-check-circle mr-1"></i> In Stock';
    } else if (product.availability === 'Limited Stock') {
      availabilityElement.className = 'text-sm font-medium text-orange-500';
      availabilityElement.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i> Limited Stock';
    } else {
      availabilityElement.className = 'text-sm font-medium text-red-600';
      availabilityElement.innerHTML = '<i class="fas fa-times-circle mr-1"></i> Out of Stock';
    }
    
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-benefits').innerHTML = benefitsHtml;
    
    // Reset quantity
    document.getElementById('quantity').value = 1;
    
    // Show the modal
    productModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }
});
