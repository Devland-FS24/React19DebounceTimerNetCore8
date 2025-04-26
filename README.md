# React 19 Debounce Timer Net Core8

React 19 app created with Vite, TypeScript and .Net Core 8. This app also features Debounce Timer, Custom Hooks, Custom Types and Axios to connect with a .Net Core 8 Web API. 

## Table of Contents
- [About](#about)
- [InstallationUsage](#installationusage)
- [Highlights](#highlights)
- [Contributing](#contributing)
- [License](#license)

## About
This a demo app implementing the Autocomplete functionality in two React 19 Components, along with two backend APIs. One is a Store API with fake data and the other one is a .Net Core 8 Web API with a SQL Server database.

## InstallationUsage

  Previous requirements:

  THE .NET 8 FRAMEWORK MUST BE INSTALLED.
  EXPLORER BY DEFAULT, GOOGLE CHROME.
  Visual Studio 2022 Community.
  Visual Studio Code.
  SQL Server 2014 or higher.
  SQL Management Studio v17.8.1 or higher.
  NodeJS v 22.6.0 for windows 10.
  React 19 and TypeScript. 
      

1. Download the ZIP file of this project.
   DO NOT DELETE THIS FILE. IT WILL BE YOUR MAIN BACKUP IN CASE OF DISASTER.

2. OPEN AND RESTORE THE DATABASE "TestDb"
   
    \\DB\TestDb.bacpac
    
        ON THE SELECTED LOCAL SQL SERVER.

  2.1. OPEN THE FILE 

     \\API\Employee.Api\Employee.Api\appsettings.json
      
      AND MODIFY THE CONNECTION STRING:
  
      "Data Source=<YOUR LOCAL SQL SERVER>\\<SQL INSTANCE NAME, NONE IF DEFAULT>;Initial Catalog=TestDb; Integrated Security=true"
  
      SO THE DATASOURCE CAN POINT TO YOUR LOCAL SQL SERVER.

IMPORTANT AND WARNING: 
               THIS WEB API WAS CREATED USING THE "DATABASE FIRST" APPROACH. SO IN CASE YOU WANT TO CUSTOM ANY ENTITY OR RUN INTO A PROBLEM, DO NOT USE ENTITY FRAMEWORK CORE SCAFFOLDING COMMANDS TO RECREATE THE DBCONTEXT. YOU'LL HAVE TO FIGURE OUT HOW TO FIX IT MANUALLY.

3. OPEN THE VISUAL STUDIO SOLUTION 

    \\API\Employee.Api\Employee.Api.sln

4. RUN THE SOLUTION. It should open a new browser and display weather
      forecast data.

5- OPEN A NEW WINDOWS EXPLORER WINDOW AT THE LOCATION 

    \\rtsx-autocomplete

7- SELECT THE ADDRESS BAR OF THE OPENED WINDOW OF THE PREVIOUS STEP.

8- WRITE THE COMMAND "CMD" IN THE ADDRESS BAR, OVERWRITING THE CURRENT PATH, THEN PRESS ENTER.

9- IN THE COMMAND LINE WINDOW THAT WAS JUST OPENED, WRITE "code ." AND THEN PRESS THE ENTER. IT'S IMPORTANT TO LEAVE A SPACE AFTER "code".

12- IN THE OPENED COMMAND LINE WINDOW, TYPE "npm run dev" AND THEN PRESS ENTER.

13- WAIT FOR THE BROWSER TO OPEN A NEW WINDOW SHOWING THE MAIN PAGE
    OF THE APPLICATION.

14. The starting point of this application is the file App.tsx.

15. The default "Autocomplete functionality" is set to start by the 
     AutoCompleteSearchBar React19 component. It implements the ProductLists component. Which implements the custom type Products. It also implements the customdebouncehook where the delay time is set to 2000ms (2 seconds). You can change the value there. The useEffect will reset the timer every time you type in a new string value in the input box. This functionality displays fake data from this API: https://fakestoreapi.com/products.
     Check it out and get sample string values to look for.

16. To try the Autocomplete functionality of the other component "AutoCompleteEndPoint", modify the file App.tsx:

     Comment the lines for <AutoCompleteSearchBar></AutoCompleteSearchBar>
     and 
     import AutoCompleteSearchBar from "./components/AutoCompleteSearchBar";

     Then uncomment the lines for <AutoCompleteEndPoint></AutoCompleteEndPoint>
     and
     import AutoCompleteEndPoint from './components/AutoCompleteEndPoint'

    In order to get sample data to search on this AutoCompleteEndPoint component, open the SQL Server Management Studio, then navigate to the TestDB database and open the contents of the table "DropDownListItems". This items range from car brands to country names...

## Highlights

     - This application implements Entity Framework Core 
          for the Data Access layer.   
     -  Implementation of very powerful TypeScript features out of the box such us:
          - Vite v 5.2.0.
          - SSR by default.
          - ESlint.
          - Arrow functions.
          - Implementation of "const".
          - Hooks: useState, useEffect
          
          - Custom hooks like 'useDebounce'.
          - WEB API NET CORE 8
          - ENTITY FRAMEWORK CORE.
          - REACT 19 TYPESCRIPT TAILWIND CSS
          - DATA RESPONSE BASED ON INPUT SEARCH INSTEAD OF "GET ALL THE DATA FIRST"
          - DEBOUNCE TIMER TO PREVENT API CALLS ON EVERY KEYSTROKE
          - USE WEB API MAPPING AGAINST LOCAL MODEL ENTITY
          - DEMO 1 REAL API CALL + SQL DATABASE
          - DEMO 2 WITH MOCKED/FAKE DATA
          
## Contributing
 This application is intended as a demo that is part of my Portfolio of apps. 
 I'll update this Portfolio with the latest technologies I have skills on as soon as possible.

## License
This project is licensed under the [MIT License](LICENSE).
