import React from 'react';
import './Blog.css'
import Footer from '../Shared/Footer/Footer';
const Blog = () => {
    return (
        <div className='my_blog'>
            <div className='q1'>
                <h2>Tell us the differences between uncontrolled and controlled components?</h2>
                <p>
                    In React, components can be classified into two categories: controlled and uncontrolled components.
                    <br />
                    Uncontrolled components are components that manage their own state internally, without relying on the state managed by their parent component. They use the DOM to access their own state, and are typically implemented using refs. Uncontrolled components are generally simpler to implement and require less code than their controlled counterparts. However, they can be difficult to debug and can lead to unexpected behavior if not used carefully.
                    <br />
                    On the other hand, controlled components are components that rely on their parent component to manage their state. The parent component passes down state values to the controlled component as props, and the controlled component notifies the parent component of any changes through callbacks. Controlled components are generally more robust and easier to test than uncontrolled components. However, they can be more complex to implement and require more code.

                    <br />
                    In summary, the main difference between controlled and uncontrolled components is how they manage their state. Controlled components rely on the parent component to manage their state, while uncontrolled components manage their state internally. The choice between using controlled or uncontrolled components depends on the specific use case and the tradeoffs between simplicity and robustness.
                </p>
            </div>

            <div className='q2'>
                <h2>How to validate React props using PropTypes?</h2>
                <p>
                    PropTypes is a useful tool in React for validating the type and required nature of props passed to a component. By using PropTypes, you can ensure that your components receive the correct data types, reducing the chances of unexpected errors or bugs. To use PropTypes, you can import it from the prop-types package and define the propTypes object for your component, specifying the type and required nature of each prop. This can be done by calling the corresponding PropTypes method (e.g. PropTypes.string, PropTypes.number, etc.) and passing it as the value for each prop key in the propTypes object.

                </p>
            </div>
            <div className='q3'>
                <h2>Tell us the difference between nodejs and express js?</h2>
                <p>
                    Node.js and Express.js are both popular technologies used in server-side web development with JavaScript, but they serve different purposes.

                    Node.js is a runtime environment for executing JavaScript code outside of a web browser, on a server or desktop machine. It provides a JavaScript runtime environment built on top of Google's V8 engine, allowing developers to use JavaScript for writing server-side code, including web applications, APIs, command-line tools, and more.

                    Express.js, on the other hand, is a web application framework for Node.js. It provides a set of features and tools for building web applications and APIs, such as routing, middleware, HTTP request/response handling, and more. Express.js is built on top of Node.js, which means it can take advantage of all of Node.js's capabilities, while providing a simpler, more streamlined approach to building web applications.

                    In summary, Node.js is a JavaScript runtime environment, while Express.js is a web application framework built on top of Node.js.



                </p>
            </div>
            <div className='q4'>
                <h2>What is useMemo?</h2>
                <p>
                    useMemo is a hook that allows you to memoize the result of a function call.
                    Memoization can be useful for optimizing the performance of expensive calculations or complex rendering logic.
                    The first argument to useMemo is a function that returns the memoized value.
                    The second argument is an array of dependencies that determine when the memoized value should be recalculated.
                    If any of the dependencies have changed since the last render, the memoized value is recalculated.
                    If none of the dependencies have changed, the previous memoized value is returned without re-evaluating the function.
                    useMemo also can be used to memoize any function that has deterministic output based on its input.
                    It is important to use useMemo judiciously and only when necessary, as it can add complexity and overhead to your code.
                </p>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Blog;