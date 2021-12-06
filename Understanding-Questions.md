# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* onClick handler calls the function handleClick();
* handleClick() executes a dispatch function.
* dispatch function calls an addOne action.
* addOne action calls the reducer function with a payload of type:ADD_ONE.
* reducer function calls the switch function of value ADD_ONE.
* switch statement updates the state value and returns the total with additonal value of 1.
* After state gets updates dispatch function rerenders the total value with new total value.
...

* TotalDisplay shows the total plus 1.
