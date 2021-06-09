# ArludoCodeChallenge
The take home coding challenge from Arludo

You will need 2 windows/tabs of terminals for it to work. One for the frontend and one for the backend.

For the backend, you will need the following modules:
- Flask (can be installed with "pip3 install Flask")
- flask-cors (can be installed with "pip3 install flask-cors")

For the frontend, you will need the following modules if you don't have them:
- npm (to install yarn)
- yarn (npm install --global yarn)


First you need to clone the directory in your workspace.

You need to run the backend first as it is a mock API that can provide the React application with values. The following is a list of instructions to achieve this:
1. Change into the backend directory and activate the virtual env by doing the following:
```
cd backend/venv
source bin/activate
```
2. Run the backend
```
python3 backend.py
```

For the frontend, follow the following commands on another terminal:
1. Change to the frontend directory
```
cd frontend
```
2. Run "yarn install" to install the dependencies necessary for to run the ReactJS app
```
yarn install
```
3. To run the front end, run the following:
```
yarn start
```
4. A browser window should automatically open with my website. 
    - If the browser window doesn't automatically open, the following shows what part of the output of yarn start. Just copy the link provided after the "Local" part and paste the link inside your preferred browser.
```
You can now view movie-website in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.104:3000
```
5. Enjoy my website

If any further problems, feel free to contact me at my email: derricklaurente@gmail.com.
Hope you enjoy and hopefully I will get to meet you in person.

Cheers

Derrick Laurente
