/*

*** basic installation ****
1. 
        install: react, tailwindcss, daisyui, react-router-dom

2. create routes with "CreateBrowserRouter". that's why we are declaring a new folder. name: Routes. in that folder we will declare all routes

3. in the first route element will be main.js that will be a lot of children. 

4. in the main.js we will declare 3 things. first: <Navbar> </Navbar> , second: <Outlet> </Outlet> , thired: <Footer> </Footer>

5. then in Routes.js  we will call the Main.js as a element value. 

6. we forget to declare <RouterProvider/> in App.js page. and don't forget to export default from Routes.js 

7. create reuseable navbar items and use it

8. then i decided to add firebase authentication 

9. after installing and adding firebase config.js we need to create a AuthProvider

10. don't forget to enable password and google auth. 

11. create a basic auth provider

12.then create signup and login page to apply auth functions
*/
