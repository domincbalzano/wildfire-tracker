# Wildfire Tracker

# vercel link
https://wildfire-tracker-kappa.vercel.app


## Description
My app is a wildfire tracker that displays active wildfire hotspots across the United States on an interactive map.
Users can view current fire locations sourced from NASA satellite data, check the number of active hotspots and save locations to monitor on the map. 

## recommended browsers
My app is designed for desktop browsers such as
Google Chrome (recommended)
Mozilla Firefox
Microsoft Edge
Safari

## Developer Manual

## Overview
Wildfire Tracker is built with HTML, CSS and JavaScript.
It is deployed on Vercel and uses Supabase as its database. Fire data comes from the NASA FIRMS API.

## Installations and setup
Make sure you install and create accounts for everything found in the Overview section

Create a .env file and add the following 
NASA_FIRMS_API_KEY= your key
SUPABASE_URL= your key
SUPABASE_ANON_KEY= your key


Inside of Supabase create the follwoing table using this command adjusted to your names
create table saved_locations(
id primary key,
name text,
lat float,
lng float
);


Since the Program is ran on vercel and updated through github, link your vercel project to your github repo, any modifications must be pushed to github first,
before they are auto updated by vercel.

To test the API go to this webpage you should see JSON with information from each API

https://wildfire-tracker-kappa.vercel.app/api/fires

https://wildfire-tracker-kappa.vercel.app/api/locations

## API endpoints
GET fires
fetches active fire data from NASA FIRMS for the US over the past 5 days. 
returns a JSON of fire objects.

GET locations
returns all saved locations from the supabase database.

POST locations
saves a new location to the database.


## BUGS
does not validate input when saving locations so locations may be saved incorrect
map does not fill entire screen in certain instances
confidence indicator not displaying correclty for some points

## Future dev
fix location and map fill bugs
add weather data for each fire location
allow users to delete saved locations
add user accounts so users can re access saved locations

    
