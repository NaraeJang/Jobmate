# JobMate

![Forks](https://img.shields.io/github/forks/NaraeJang/Jobmate)
![Stars](https://img.shields.io/github/stars/NaraeJang/Jobmate)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Overview

JobMate is your personalized solution for tracking job applications, crafted to simplify and streamline your job search process. With JobMate, you can efficiently manage your job applications, track the progress of each one, and stay organized throughout your career journey.

#### Features

- **Application Tracking:** Keep a comprehensive record of every job application.
- **Stage Management:** Easily monitor and update the status of your applications.
- **Company Insights:** Access a detailed list of companies you've applied to.
- **Effortless Organization:** Simplify your job search with intuitive tools.
- **User-Friendly Interface:** Enjoy a seamless and easy-to-navigate design.

## How to Use and Run the Project

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
git clone https://github.com/your-username/jobmate.git // Will be updated later.

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

## Contributing

I welcome any and all contributions! Here are some ways you can get started:

1. **Report bugs:** If you encounter any bugs, please let me know. Open up an issue and let me know the problem.
2. **Contribute code:** If you are a developer and want to contribute, follow the instructions below to get started!
3. **Suggestions:** If you don't want to code but have some awesome ideas, open up an issue explaining some updates or improvements you would like to see!

#### Instructions

1. Fork this repository
2. Clone your forked repository
3. Add your scripts
4. Commit and push
5. Create a pull request
6. Star this repository
7. Wait for pull request to merge

## License

[The MIT License (MIT)](https://opensource.org/licenses/MIT)

Copyright (c) 2024 Narae Jang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
