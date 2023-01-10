# Ticket Management API

This is a simple ticket management API built using Node.js, Express, and Mongoose. The API provides 3 main functionalities: creating a new user, assigning a ticket to a user, and showing a list of tickets assigned to a user.

## Usage

- Use `POST /api/v1/users/register` to create a new user. It accepts a JSON object with fields `emp_name`, `emp_password`, `emp_mobile`, `emp_email`, and `emp_designation`.
- Use `POST /api/v1/users/assign-ticket` to assign a ticket to a user. It accepts a JSON object with fields `ticketID`, `ticketDescription` and `emp_email`
- Use `POST /api/v1/users/tickets` to show a list of tickets assigned to a user. It accepts an email as parameter

## Error Handling
- For creating new user if a user already registered with either the same mobile number or email, an error message "User already registered" will be returned
- For assigning a ticket to a user if no user exists with that email, an error message "No such user exists" will be returned
- For fetching a list of tickets assigned to a user if no user exists with that email, an error message "No such user exists" will be returned

## Note

- We need to configure our database and update our routes accordingly 
- We can use some kind of authentication and authorization mechanism to secure the API.
- We can include pagination or sorting for the results to make the api better in handling large data sets.

And that's it! With these three endpoints, We should be able to create new users, assign tickets to users, and fetch the list of tickets assigned to a user in our application.
