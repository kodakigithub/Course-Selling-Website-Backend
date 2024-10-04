## Course Selling Website API

### Description
This is a course selling app. 
It supports two types of users - 
1. Admins
2. Users
Admins are allowed to sign up, create courses.
Users are allowed to sign up, view courses, purchase courses.
For this one, in every authenticated requests, you need to send the username and password in the headers (and not the jwt).
mongodb is used to store data persistently.

## Installation and Usage

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/kodakigithub/Course-Selling-Website-Backend.git
   cd Course-Selling-Website-Backend
   
2. **Install dependencies** :
   ```bash
   npm install
3. **Run the Server** :
    ```bash
    node index.js
4. **Access the API** :
  Once the server is running, the application will be accessible at:
    Admin routes: http://localhost:3000/admin
    User routes: http://localhost:3000/user
   
## Routes
### Admin Routes:
- POST /admin/signup
  Description: Creates a new admin account.
  Input Body: { username: 'admin', password: 'pass' }
  Output: { message: 'Admin created successfully' }
- POST /admin/courses
  Description: Creates a new course.
  Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
  Output: { message: 'Course created successfully', courseId: "new course id" }
- GET /admin/courses
  Description: Returns all the courses.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
### User routes
- POST /users/signup
  Description: Creates a new user account.
  Input: { username: 'user', password: 'pass' }
  Output: { message: 'User created successfully' }
- GET /users/courses
  Description: Lists all the courses.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
- POST /users/courses/:courseId
  Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { message: 'Course purchased successfully' }
- GET /users/purchasedCourses
  Description: Lists all the courses purchased by the user.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
