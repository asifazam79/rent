1. npm vue-cli based sample project created named healthcare
2. initialized store and router
3. In components, molecules are building blocks and partials are pages
4. App.vue contains base template with router-view injecting partials to build the pages
5. Header and Footer components are added as global components
6. First page is the login page with requested information in form
7. favicon is updated with DrDoctor svg
8. A mixin is also created to set up page title for several partials
9. All login page form data is setup as state variables to remember when the user lands back
10. Last name is used on the Welcome page
11. Accessibility covered
12. Responsive design covered
13. All validation rules are covered
14. Logo is built with svg
15. CSS is written scoped to the components to reduce data size
16. Login, contact details and welcome pages are created in router
17. I didn't include any navigation as for the purpose of this exercise, all pages can be accessed one after another but navigation can be easily implemented if needed
18. main.js holds minimal code
19. I didn't fancy creating colorful layouts and fancy designs which I can build if time permits. I kept it simple using logo colors for buttons and standard colors for errors.
20. Errors are linked to the relevant input field for Accessibility
21. I didn't use any of lifecycle hooks in this project other than computed but if needed, created, mounted and updated blocks can be added
22. One more thing I didn't use to avoid complexity are the routing guards. They will be really helpful if the application can be viewed in multiple tabs.
23. unit tests are not part of the exercise but I have the setup with jest to write unit tests on requirement.
24. 2 factor authentication code is 0000 as requested. All the rest of the codes will fail and error.
25. project will run by using npm run serve via package.json on http://localhost:8080
26. I have removed node_modules as requested
27. Happy to be a part of this exercise :). Hope you like it. Believe me, I can add so much more into it but I kept it simple to make sure you can judge it in time.
