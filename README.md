# Social-Network-API

<a name="descsection"></a>
## Description
The purpose of this project was to utilize mongoDB, mongoose, and Express.js to create a social network where the user can add/remove friends, thoughts, and reactions.  Using insomnia, you are able to fetch information from the mongo database.  In addition, moment.js was used in order to format the date in a more human-friendly manner. Enjoy!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
1. [ Description. ](#descsection)
2. [ User Story. ](#usersection)
3. [ Acceptance Criteria. ](#acceptancesection)
4. [ Installation. ](#installsection)
5. [ License. ](#licensesection)
6. [ Contributing. ](#contribsection)
7. [ Tests. ](#testsection)
8. [ Questions. ](#questionssection)
9. [ Video. ](#videosection)
11. [ Screenshots. ](#picsection)
11. [ Links. ](#linksection)
12. [ Resources/Credit. ](#creditsection)

<a name="usersection"></a>
## User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

```

<a name="acceptancesection"></a>
## Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

```

<a name="installsection"></a>
## Installation
* Clone the repository using:
```
git clone https://github.com/laurelthorburn/Social-Network-API.git
```
* Ensure you are in the current working directory
* Install dependencies (jest and inquirer) by opening the terminal (ctrl + j on windows) and running:
```
npm install
```
* Run the project by typing the following in the terminal:
```
npm run start || npm run dev (if nodemon is installed)
```

<a name="licensesection"></a>
## License
Copyright <2021>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  <a name="contribsection"></a>
## Contributing
  
1. [Fork the repo!](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. Create a feature branch:
```
git checkout -b yourname-branch
```
3. Commit changes:
```
git commit -m 'Your changes here'
```
4. Push to the branch:
```
git push origin yourname-branch
```
5. Submit a pull request and wait for it to be approved or denied.

  <a name="testsection"></a>
## Tests
  1. Ensure you have installed jest (this was installed earlier when 'npm install' was run in the command line)
  2. In the command line, write:
```
npm run test
```
  3. Confirm all four test files pass (see screenshot below). Test files are located in the tests folder and are titled: Employee.test.js, Engineer.test.js, Intern.test.js, and Manager.test.js

  <a name="questionssection"></a>
## Questions?
  Want to see more of my work? [Click here!](https://github.com/laurelthorburn)

  Questions/comments/concerns? Please send an email to codinglaurel@gmail.com
  
  <a name="videosection"></a>
## Video
  View video:https://drive.google.com/file/d/1m4HiXOib8MI8ZAha6zgAj42IsbLn_PDw/view?usp=sharing

  <a name="picsection"></a>
  ## Screenshots
  ![Screenshot of Test Screen](./dist/Assets/Images/screenshot1.png)
  ![Screenshot of Sample Site](./dist/Assets/Images/screenshot2.png)
  ![Screenshot of Terminal](./dist/Assets/Images/screenshot3.png)

  <a name="linksection"></a>
  ## Links

  Video Walk Through: Coming Soon...
  
  Github Site: https://github.com/laurelthorburn/Social-Network-API

  <a name="creditsection"></a>
## Resources/Credit
* https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
* https://stackoverflow.com/questions/24964914/can-a-mongo-model-self-reference
* https://stackoverflow.com/questions/24557580/how-to-return-the-objectid-or-id-of-an-document-in-mongodb-and-error-in-need
