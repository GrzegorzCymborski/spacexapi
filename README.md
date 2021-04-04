## Solution
I have created two required groups (rockets,launches) and two optional groups (dragons,landpads)
when clicking on the optional group and selecting an item, it will be displayed together with the two previous groups

2b) saving the user selection, I wasn't quite sure how the feature should work so I created a fake mutation call to the api, in the handleOptionalItem function


## Tech Stack
React / TypeScript / GraphQL / Apollo / Vite / Bootstrap / Eslint / Prettier / ❤

## Installation
```
git clone https://github.com/GrzegorzCymborski/spacexapi.git
npm install
npm run dev
```



## Task
To build a simple  page with few components, simple behaviour and suggested data structure.
Below you see a page in 3 different statuses which changes upon User interaction.

![task image](https://i.imgur.com/4vvPXlf.png)

1. Implement described behaviour
2. define in which format such a data are stored, <= will be used for the API/GQL mutation call
    2a) read data from API ( your suggested format ) 
    2b) save user choice after he click 'select' ( what is your suggested payload send to API )

Acceptance Criteria
After user expand one group and select one item, we would need to send to the specific mutation set of data, which allows 
on the server side represent state of his data: Group 1 + Group 2 which already been there + Group 3 ( including only Item X1 ) which user has just added there.




