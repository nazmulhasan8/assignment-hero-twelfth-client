import React from 'react';

const Blog = () => {
    return (
<div>
        
        <div>
             <div><h2 style={{ fontSize: '30px' }} className="my-20 text-center">All The Blog Posts</h2></div>
            <div>

            <div className="card card-compact text-3xl w-100 bg-base-100 my-20 shadow-xl">
            <h2 className="card-title text-3xl justify-center">
            1. What are the different ways to manage a state in a React application?

                
            </h2>
         
            <div className="card-body">
                <p className="text-2xl">
                There are four main types of state you need to properly manage in your React apps: 1.Local (UI) state – Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. 2.Global (UI) state – Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.Sometimes state we think should be local might become global. 3. Server state – Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.Fortunately there are tools such as SWR and React Query that make managing server state much easier. 4.URL state – Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.
In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.


                </p>
            </div>
        </div>
        <div className="card card-compact text-3xl w-100 bg-base-100 my-20 shadow-xl">
            <h2 className="card-title text-3xl justify-center">
           2.  How does prototypical inheritance work?

                
            </h2>
         
            <div className="card-body">
                <p className="text-2xl">
                Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__. syntax: ChildObject.__proto__ = ParentObject.Example In the given example, there are two objects ‘person’ and ‘GFGuser’. The object ‘GFGuser’ inherits the methods and properties of the object ‘person’ and further uses them.The HTTP headers are used to communicate between client and server. HTTP headers let the client and server pass additional information with an HTTP request or response. X-Forwarded-Proto (XPF) header is used to identifying the protocol that the client used to connect with a proxy or load balancer. It can be HTTP or HTTPS. Your server access log usually contains information about the protocol used between server and load balancer, but it does not contain any information about the protocol used between the client and load balancer. To get information about which protocol used between client and load balancer, we can use the X-Forwarded-Proto request header. Using this header, the client can make an HTTP request to an HTTPS-only resource.In this article, we will be going to cover the topic what is proto and prototypes, their syntax, examples, and what are differences exist between both, and how they differ and how they differ in different aspects. Proto and prototype both are objects that help in whether creating an array, object, or function and provide access to those specific methods or objects directly without taking memory and even it will give access to its constructor and all the array methods like push, pop, etc.Proto: It is an actual object that provides a way inherit to inherit properties from JavaScript with the help of an object which is created with new. Every object with behavior associated has internal property [[prototype]].


                </p>
            </div>
        </div>

        <div className="card card-compact text-3xl w-100 bg-base-100 my-20 shadow-xl">
            <h2 className="card-title text-3xl justify-center">
            3. What is a unit test? Whyshould we write unit tests?

                
            </h2>
         
            <div className="card-body">
                <p className="text-2xl">

                Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.Each test case is tested independently in an isolated environment, as to ensure a lack of dependencies in the code. The software developer should code criteria to verify each test case, and a testing framework can be used to report any failed tests. Developers should not make a test for every line of code, as this may take up too much time. Developers should then create tests focusing on code which could affect the behavior of the software being developed.Unit testing involves only those characteristics that are vital to the performance of the unit under test. This encourages developers to modify the source code without immediate concerns about how such changes might affect the functioning of other units or the program as a whole. Once all of the units in a program have been found to be working in the most efficient and error-free manner possible, larger components of the program can be evaluated by means of integration testing. Unit tests should be performed frequently, and can be done manually or can be automated.Unit tests can be performed manually or automated. Those employing a manual method may have an instinctual document made detailing each step in the process; however, automated testing is the more common method to unit tests. Automated approaches commonly use a testing framework to develop test cases. These frameworks are also set to flag and report any failed test cases while also providing a summary of test cases.

                </p>
            </div>
        </div>

        <div className="card card-compact text-3xl w-100 bg-base-100 my-20 shadow-xl">
            <h2 className="card-title text-3xl justify-center">
            4. React vs. Angular vs. Vue?

                
            </h2>
         
            <div className="card-body">
                <p className="text-2xl">
                This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.Here we’ll cover various aspects of Angular, Vue, and React to see how they suit your needs. This post is not just a guide on Angular vs React vs Vue but aims to provide a structure to help judge front-end JavaScript frameworks in general. In case a new framework arrives next year, you will know exactly what parameters to look at!If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.




                </p>
            </div>
        </div>


            </div>
        </div>
        </div>
    );
};

export default Blog;