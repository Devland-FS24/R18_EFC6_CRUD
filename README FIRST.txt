Previous requirements:

THE .NET 6 FRAMEWORK MUST BE INSTALLED.
EXPLORER BY DEFAULT, GOOGLE CHROME.
Visual Studio 2019.
Visual Studio Code 2022.
SQL Server 2014 or higher.
SQL Management Studio v17.8.1.
NodeJS for windows 10.
ReactJS 18.
POSTMAN for Windows 10.

--------------------------------------------------

WHAT'S THIS APPLICATION ABOUT?

This a demo of a monolithic Company intranet web application which implements ASP.NET Web Api as backend and ReactJS 18 as frontend. You can perform CRUD operations over Company's Departments ONLY.

--------------------------------------------------

How to run this application locally?

1- OPEN AND RESTORE THE DATABASE "DepartmentDB"

    \\REACT JS\DB\R18EFDEMO.bak, 
    
        ON THE SELECTED LOCAL SQL SERVER.

2- OPEN THE VISUAL STUDIO SOLUTION 

    \\REACTJS_EF_TS_NET6_TEMPLATE\NETCore6_React.sln

3- RUN THE SOLUTION.

4- In case you run into a problem with the Web Api you can recreate the Context and the Model classes by proceeding to:

    4.1- Comment the lines:
    
        using NETCore6_React.Models;
        AND
        builder.Services.AddDbContext<DepartmentDBContext>();

        in the Program.cs file.

    4.2- Delete all the files within the Models folder.

    4.3- Backup all the content of the file "Controllers\DepartmentController.cs" 
         into a text file.

    4.4- Delete the file DepartmentController.cs

    4.5- Go to Tools Nuget Package Manager-->Package Manager Console. This will
         open a console like window.

    4.6- Copy the following command into another text file:

         Scaffold-DbContext "Server=LAPTOP-LKBBPMQJ\SQLEXPRESS; DataBase=DepartmentDB;Integrated Security=true" Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models 

    4.7- Modify the previous command to point to your local SQL Server 
         installation.

    4.8- Inside the console opened in step 4.5, type in or paste the following
         command modified in step 4.7, THEN HIT ENTER.

    4.9- You should not be seeing errors in the console.

    4.10- Verify the new files created in the Models folder.

    4.11- Create a new Empty API Controller in the Contollers folder and name it
         "DepartmentController".

    4.12- In the new Controller file, delete the entire class ONLY, leave the rest
          as it is.

    4.13- Copy the entire class from the previous Controller you backed up on
          a text file, then paste it into the new Controller file.

    4.14- Save the changes.

    4.15- Uncomment the lines you commented in step 4.1.

    4.16- Rebuild the whole solution. You should not get any errors.

    4.17- Now you can run the solution again.

    4.18- Check if the screens you see are similar to the ones in the Screen Captures folder.

5- To try the 


--------------------------------------------------

HIGHLIGHTS:

     - This application implements Entity Framework Core for the Data Access layer.

     - The Context and Model classes implement the "Database First" approach.

     -   Although this Reactjs application has pretty much the same business of the other
    Reactjs (with ADO.NET) application I think it's worth noting the implementation of a "TypeScript" approach for this application. On top of that, the template 

        "ASP.NET Core with React.js" 
        
    of Visual Studio 2022 provides a lot of very powerful TypeScript features out of the box such us:
          - Arrow functions.
          - Implementation of "const".
          - Hooks: useState, useEffect