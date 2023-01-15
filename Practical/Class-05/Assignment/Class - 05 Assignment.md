1. Named export, Defalult export and \* as export
   From one file we can export defult only one function or variable.
   Multiple default cant be there in one module

   ```
    export Header = () => {
        return (
            <h1>This is a header</h1>
        );
    }
    // These default exports can be imported like the following way -
    import Header from "fileName"; // default import
   ```

   But if we want to export multiple functions/variables then we cant export them using export default
   To export multiple things we can use can use export for those individual functions/variables.

   ```
        export name = "Suman";
        export printName = () => {
            console.log(`Hello ${name}`);
        }
        // we need to import like the following way -
        import {name, printName} from "fileName"; // Named import
        // or we can use * as import also
        import * as obj from "fileName";

        // we can import using both the system based on the module exports
        import something, { someThingElse } from "filename";
   ```

2. What is the importance of config.js file
   We need this config or constant file to get the different config values based on different parameters. For example if I login to swiggy in bangalore then it will fetch Restaurants which are
   near to me. If I login from other location then it will fetch different list. These different config
   data is getting fetched from Server APIs. And based on the received input from server app shows the
   details to user.

3. What are react hooks?
   In the UI if we chnage something or perform any operation then we want that result to be reflected in the UI. All the react functional components has state variables which helps to keep the current changes.
   Hooks are nothing but normal function which allows us to create this state variables for the functional components in React.
4. Why do we need useState() hook?
   useState() is one of the hook which we inport from "react" library to create local state variable for any functional component.
