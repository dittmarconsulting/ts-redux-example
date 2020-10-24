## A simple Typescript project with Redux and Redux saga

This is my first project I used Typescript together with [Redux](https://redux.js.org/) and [Redux Saga](https://redux-saga.js.org/)

#### Data:

As data I just created a local `JSON` array of Apple products. I'm using `Redux Saga` to simulate a **API** call and load the data into a `Redux store`

#### Motivation:

Obviously to learn how to use static types with the `Redux` framework and also to find the best practice how to structure the project and share data.

#### Naming convention

##### Redux constants

- invoke saga: `PRESET_<CONSTANT_NAME>` (UpperCase)
- write to store: `SET_<CONSTANT_NAME>` (UpperCase)

##### Redux action function names

- invoke saga: `preset<ActionFunctionName>` (PascalCase)
- write to store: `set<ActionFunctionName>` (PascalCase)

##### TS interfaces

- `I<TypeName>` (PascalCase with capital `I`)
