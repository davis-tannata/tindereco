# Task
1. Create a web page in ReactJS+Typescript to mimic the recommendation function of Tinder.

    a. A user profile consists of {name, gender, location, university, interests} 

    b. User will get 10 new recommendations on daily basis

    c. We want to prioritize users who are from the same university and interests. But at the same time have some randomness. Consider applying weightages on these 

2. Use UML diagrams to describe your Data structure and logics


## Built With
* React
* Vite
* Zustand
* React Router
* Tailwind
* Daisyui
* Axios

## Installation

1.  Install YARN packages
```sh
   yarn
   ```
2.  Run the project
```sh
   yarn dev
   ```

## UML Diagrams
UML Diagrams is located on the diagrams folder

1. Class Diagram
![Alt text](./diagrams/tindereco-classdiagram.jpg?raw=true "Class Diagram")

2. calculateWeights function flow chart diagram
![Alt text](./diagrams/tindereco-flowchart-calculateWeights.jpg?raw=true "calculateWeights function flow chart diagram")

3. fetchRecommendations sequence diagram
![Alt text](./diagrams/tindereco-sequence.jpg?raw=true "fetchRecommendations sequence diagram")