> **Note:** Migrated from Heroku (https://mtpizza.herokuapp.com/) to Render (https://mtpizza.onrender.com/) after Heroku eliminated its free tier of services. Render Web Services on the free instance type are automatically spun down after 15 minutes of inactivity.

To run the application:

1. Clone the project with ```git clone https://github.com/mariabui/Pizzeria```
2. Start PostgreSQL
3. Connect to the local database with ```psql``` 
4. Run the server with ```npm start```
5. Navigate to http://localhost:3000/

For more information, visit https://seikyung.com/README-Postgres.html.

We successfully implemented the major goals of our project:
1. Creating a menu.
2. Creating a functioning cart.
3. Checking out and placing an order.
4. Sign up and log in.

To place an order, user must:
1. be logged in. If not, redirected to the login page.
2. have chosen Delivery/Carryout and Card/Cash.
3. entered valid inputs for the forms.

Other features implemented:
1. Coupon code (use "hello" for 10% off).
2. User can change username, password, full name, and preferred name on profile page.

"Order History", "Favorite Orders", and "Rewards" on the profile page are not actually implemented.
They are just extra features that we wanted to implement if we had time.

Lastly, we were not able to successfully add a user's information (address, city, state, etc.) from the Delivery/Carryout form to the database.
We suspect that it failed because the forms were rendered using React.
We decided to forgo this feature as it was not the focus of our project or vital for the application to function.