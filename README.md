# fill-frontend-take-home-mehul
A take home frontend assessment


##### If I had a bit more time, I would
- Refactor to ES6 & Typescript
- Refactor ES6 to query once and store in a variable, for use accross modules
- Write test cases
<p>In a office setup, I would submit this ticket to PR and come back to these TODOs on a Friday evening.</p>


##### Some noteworthy points
- Just 92.7kB page resources (transferred). 
- 93 for Mobile and 99 for Desktop on Google Lighthouse.
- Avoided using React or any framework because I wanted to keep the functionality lite.
- I always strive to not use too many libraries, so that the application does not get bloated
- Edge cases handled in the behavior of Drag and drop: If you drop on top of a page, depending on if it's 50% left or right, it will be dropped accordingly.
- The delete button is part of the list, and thus, part of the ul list, to be semantically accurate.


##### Documentation

###### SASS
sass sass/index.scss:index.css --watch
