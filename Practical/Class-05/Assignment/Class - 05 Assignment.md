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
3. What are react hooks?
4. Why do we need useState() hook?
