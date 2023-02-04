1. What is Microservice Architecture?
   Microservice Architecture is a varient of service oriented architecture. In this architectuture the
   different components of an application are seperated based on their use case and requirement. Mainly loosely-coupled components (database, front-end, authentication, APIs, notification etc) are seperated and they are stand alone application which communicate through lightweight protocols. All the seperate components can be developed using different technology stack.

2. What is Monolith Architecture?
   In this software development architecture we have all the components put together in one application where components like UI, backend, APIs, notification, authentication are put together.

   Most of the old products were developed in monolith architecture only. But now world is moving towards microservice architecture because of the advantages like -

   - (a) Seperation of concern (SOC)
   - (b) Maintainability - Independent code is maintainable.
   - (c) Re-usuability - Components can be used for various purposes and projects as per their use case.
   - (d) Testibility - Seperate code can be tesetd independently using various tests like UTC, ITC.
   - (e) Different tchnology stack can be used as per the requirement and best fit.
   - (f) Scalable
   - (g) No dependency on other components.

3. Why do we need useEffect Hook?
   This is one type of hook which is a named import fron react core library. It will be called once after every render of the component where it is defined. Following is the definition of useEffect() hook -

   ```
      useEffect(() => {
         // we can do our required tasks here as pre the scenario
      }, []);

      useEffect() has two parameters, first is the call back function which will be getting called based on the second parameter. Which is the dependency array. We can pass parameter in the depedency arry and based on the changes of the array elements, the callback will be getting called.

      We mostly use this useEffect() hook to make API call as we should not do API call on every time our component renders, as thats an expensive operation and if we do so then we are not optimizing our application. Thats why we have useEffect() hook to certain operation based on our rewuirement.
   ```
