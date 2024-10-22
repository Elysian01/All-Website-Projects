## Yummy Food Ordering Website

1. Landing Page
   1. Product Listing
2. Cart Page
3. Product Details Page (Visible when you click on a product)
4. User Profile Page

### **Run Node Server**
```bash
cd /server
```
Install all the npm packages. Go into the project folder and type the following command to install all npm packages
```bash
npm install
```
In order to run the application Type the following command
```bash
node server.js
```

### **Run Client Server**
```bash
cd ../client
```
Install all the npm packages. Go into the project folder and type the following command to install all npm packages
```bash
npm install
```
In order to run the application Type the following command
```bash
npm start
```

## Concepts Use

1. Components
2. Hooks
   1. useState
   2. useEffect
3. Axios
4. Routing
5. Redux (for cart)
6. Node Server (for product details)


## TODO's

In the Product Listing page:
- [x] Get the list of products from a server.  
- [x] Click on a product takes the user to the product details page

Product Details page:
- [x] Get product details from server. 
- [x] Add to cart
- [x] Add review
- [x] Add rating

Cart page:
- [x] Get cart details from server. 
- [x] Ability to change the quantity
- [x] On Add, Total price should change
- [x] On Remove, Total price should change

Profile page:
- [x] Static Page