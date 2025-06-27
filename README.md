# fill-frontend-take-home-mehul
A take home frontend assessment


# SASS
sass sass/index.scss:index.css --watch


# TODO:
Refactor to ES6, Typescript
Refactor to query once and store in a variable, for use accross modules
Write test cases
- If I had a bit more time, I would do the above.
- In a office setup, I would submit this ticket to PR and come back to these TODOs on a Friday evening.


# Some noteworthy points

Avoided using React or any framework because:
- Wanted to keep the functionality lite
    -- I always strive to not use too many libraries, so that the application does not get bloated

Edge cases handled in the behavior of Drag and drop:
- If you drop a page to the extreme left or extreme right, it should become the first or the last page, respectively.
- If you drop on top of a page, depending on if it's 50% left or right, it will be dropped accordingly.

The delete button is part of the list, and thus, part of the ul list, to be semantically accurate.
