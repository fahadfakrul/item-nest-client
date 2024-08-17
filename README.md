# ItemNest 
This is the frontend for the Product Catalog project, a full-stack single-page web application built using the MERN stack. This project allows users to browse through products, search, filter, and sort products, and includes features like pagination and user authentication.

## Features
- Product Search: Search for products by name.
- Filtering: Filter products by brand name, category, and price range.
- Sorting: Sort products by price (low to high, high to low) and by date added (newest first).
- Pagination: Browse products with pagination support.
- Authentication: Sign in using Google or Email and Password via Firebase.
- Responsive Design: Mobile-first design ensures a great user experience on all devices.

## Key Components
- ProductCard: Displays the product's name, image, price, rating, and category.
- Pagination: Handles the navigation between different pages of products.
- Filter: Provides UI for filtering products based on different criteria.
- Home: The main page that displays the products with pagination, filtering, and sorting options.

  
## Getting Started
+ Prerequisites
+ Node.js (v14 or higher)
+ npm or yarn
## Installation
- Clone the repository:
## Install dependencies:
- npm install
- Set up environment variables:
   + Create a .env file in the root directory and add the following:
      * REACT_APP_API_BASE_URL=http://localhost:5000/api
      * REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
      * REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
      * REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
      * REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
      * REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
      * REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
## Start the development server:
- npm start
- The application will start on http://localhost:3000.

## Firebase Authentication Setup
* This project uses Firebase for authentication. To set it up:

  - Go to the Firebase Console.
  - Create a new project.
  - Enable Authentication and choose Google and Email/Password sign-in methods.
  - Copy the Firebase configuration keys and paste them into the .env file as shown above.
## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas.
