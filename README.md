# Full Stack(React js + Django) Weather App
![image](https://github.com/Sanjay7089/Weather-App/assets/77526471/2ecb4e32-d8f0-49ba-bdef-3d51110ecf53)
### backend-api config 
![image](https://github.com/Sanjay7089/Weather-App/assets/77526471/3caeda2b-380c-4c71-a584-441be943ba2a)

## How to use

Enter any location in the world and it should display a weather card containing the following information :

- Temperature
- Humidity
- Weather Description
- pressure
- 
## External APIs Used

- OpenWeather Geocoder API : To retrieve the latitude and longitude of a location
- OpenWeather Current Weather API: To retrieve the weather information for that location

## Dependancy

The dependencies for each are listed below:

#### Frontend

- React
- react-dom
- react-scripts
- @mui/material
- axios
#### Backend

- Django
- requests
- python-dotenv
- django-cors-headers
- 
## Run on local machine

#### 1. Clone the git repository

```bash

```

#### 2. Install required packages for backend and frontend and run servers

Go to the _server_ directory

```bash
cd weather-app/server/
```

And run

```bash
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```
 In window - 
 ```bash
py -m venv env
env\Scripts\activate
pip install -r requirements.txt
```
This will install all the required packages for the backend.

Create a .env file and paste your OpenWeather API as

```
API_KEY=<YOUR_API_KEY>
```

Make migrations and start the backend server

```bash
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver localhost:8000
```
if python3 gives error in windows use - 
```bash
py manage.py makemigrations
py manage.py migrate
py manage.py runserver localhost:8000
```
Similarly for frontend

```bash
cd weather-app/client/
yarn
```

or

```bash
cd weather-app/client/
npm install
```

After installing the required packages, start the frontend server

```bash
yarn start
```

or

```bash
npm start
```

The site should start running
