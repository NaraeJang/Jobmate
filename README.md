# JobMate

JobMate is your personalized solution for tracking job applications, crafted to simplify and streamline your job search process. With JobMate, you can efficiently manage your job applications, track the progress of each one, and stay organized throughout your career journey.

#### Features

- **Application Tracking:** Keep a comprehensive record of every job application.
- **Stage Management:** Easily monitor and update the status of your applications.
- **Company Insights:** Access a detailed list of companies you've applied to.
- **Effortless Organization:** Simplify your job search with intuitive tools.
- **User-Friendly Interface:** Enjoy a seamless and easy-to-navigate design.

#### Live Demo

[Go to Live Demo](https://jobmate-1gpn.onrender.com)
*Currently, I closed live demo. It wouldn't work.

## How to Use the Project

1. **Sign Up:** Create your JobMate account to get started.
2. **Add New Application:** Input details of each job application.
3. **Track Progress:** Update application stages as you move through the hiring process.
4. **Company Details:** View and manage information about the companies you've applied to.
5. **Edit and Delete:** Modify or remove entries as needed for accurate record-keeping.

I also provide demo user for the application. Feel free to utilize the demo user account to explore the app without signing up.

## Installation

To run JobMate locally:

```bash
# Clone the repository
git clone https://github.com/NaraeJang/Jobmate.git

# Navigate to the project directory
cd jobmate

# Install dependencies
npm install

# Set up your configuration:
1. Create a .env file in the root directory.
2. Add the following key-value pairs to the .env file:
   - MONGO_URL=<Your MongoDB URL>
   - JWT_SECRET=<Your JWT secret>
   - JWT_LIFETIME=<Your JWT expiration days>

# Start the application
npm start
```

## Dependencies

#### Front-end

| Name                 | Version | Name              | Version |
| :------------------- | :------ | :---------------- | :------ |
| Vite.js              | 5.0.8   | Axios             | 1.3.6   |
| React-router-dom     | 6.21.3  | React-query       | 4.29.5  |
| React-query-devtools | 4.29.6  | React-toastify    | 10.0.4  |
| React-icons          | 4.12.0  | Styled components | 5.3.10  |
| Dayjs                | 1.11.7  | recharts          | 2.5.0   |

#### Back-end

| Name              | Version | Name                   | Version     |
| :---------------- | :------ | :--------------------- | :---------- |
| Nodemon           | 2.0.22  | Express.js             | 4.18.2      |
| Mongoose          | 7.0.5   | Express-async-error    | 3.1.1       |
| Http-status-codes | 2.2.0   | Express-validator      | 7.0.1       |
| Bcryptjs          | 2.4.3   | Express-rate-limit     | 6.8.0       |
| Concurrently      | 8.0.1   | Express-mongo-sanitize | 2.2.0       |
| Cookie-parser     | 1.4.6   | Cloudinary             | 1.37.3      |
| Dotenv            | 16.0.3  | Dayjs                  | 1.11.9      |
| Datauri           | 4.1.0   | Jsonwebtoken           | 9.0.0       |
| Morgan            | 1.10.0  | Multer                 | 1.4.5-lts.1 |
| Helmet            | 7.0.0   |

## Process

One of my online courses featured a similar project, and I thought it would be great to create my own based on that existing one.

However, I aimed to incorporate different features, functions, layouts, and designs. Therefore, I began by jotting down everything I wanted to implement in this app, contemplating ways to enhance the user experience.

On the design side, I progressed from low-fidelity wireframes to high-fidelity wireframes, developed a design system, and created a simple prototype.

In terms of development, following the design, I initiated the front-end setup, including establishing basic CSS, structuring pages using React Router DOM with mock data, and developing CSS for each page using the Styled Components library. Afterward, I delved into the back-end, setting up the server, connecting to MongoDB using Mongoose, and creating schemas, routes, controllers, and custom errors. Once both front-end and back-end were in place, I integrated them using Axios and transferred data to the MongoDB Database. I tested CRUD methods from the front-end, addressing any bugs that arose.

To enhance the user experience, I utilized React Query for managing and caching data, optimizing loading times and eliminating the need to submit data each time a page is loaded.

The most challenging aspect was seamlessly connecting data without errors. Especially on the "All Jobs" pages, various methods were employed to communicate with the server—retrieving all data, updating data, deleting data, and fetching data specific to the user's search. Managing data and making functions independent yet seamlessly interconnected were significant learning points during this project. Being my first MERN Project, it took me a month to complete, presenting a fulfilling challenge and a valuable learning experience.

## How Can It Be Improved?

It would be amazing if the app has enough insight from the data, we can analyze what jobs are popular those days, how long users take to get a job successfully furthermore we can categorize it depending on cities, position or salary.

## License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Copyright (c) 2024 Narae Jang

[The MIT License (MIT)](https://opensource.org/licenses/MIT)
