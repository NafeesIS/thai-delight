import React from 'react';
import './Blog.css'
import Footer from '../Shared/Footer/Footer';
const Blog = () => {
    return (
        <div className='my_blog'>
            <div className='q1'>
                <h2>Tell us the differences between uncontrolled and controlled components?</h2>
                <p>
                    Context API in React is used for sharing data between components without the need to pass props down through the entire component tree. It is a good choice when you have data that needs to be accessed by multiple components at different levels of the component tree.
                    <br />
                    1/When you have data that is shared by multiple components that are not directly related to each other, for example, theming or user authentication data.
                    <br />
                    2/When you want to avoid "prop drilling," which is the process of passing data through multiple layers of components as props.
                    <br />
                    3/When passing data through multiple levels of the component tree becomes cumbersome or difficult to manage.
                    <br />
                    To summarize, props are used to pass data from a parent component to a child component, while state is used to manage data within a component itself.
                </p>
            </div>

            <div className='q2'>
                <h2>What is a custom hook?</h2>
                <p>
                    In React, a custom hook is a JavaScript function that allows you to reuse logic across multiple components. A custom hook starts with the word "use" and typically encapsulates some stateful logic or side effect, such as fetching data from an API, setting up event listeners, or managing local storage
                    <br />
                    Custom hooks are a powerful way to encapsulate and reuse logic in React applications. By abstracting away complex logic into a custom hook, you can simplify your components and make them more reusable.

                </p>
            </div>
            <div className='q3'>
                <h2>What is useRef?</h2>
                <p>
                    useRef is a hook in React that returns a mutable ref object.
                    The ref object can hold a reference to a DOM element or a value.
                    The ref can be used to persist values across re-renders of a component.
                    To create a ref, you can call useRef and pass an initial value as an argument.
                    To access the value of a ref, you can use the current property of the ref object.
                    To set the value of a ref, you can simply assign a new value to the current property.
                    To use a ref to access a DOM element, you can set the ref attribute of the element to the ref object.
                    When the component is mounted, the ref will hold a reference to the DOM element and you can use it to manipulate the element, for example, by calling methods like focus().
                    Refs can also be used to store values that do not affect rendering, such as timers, previous state values, or anything else that needs to be persisted across re-renders.
                    It is important to note that changing the value of a ref does not trigger a re-render of the component. Therefore, using refs to manage state or trigger re-renders is not recommended, and should be done through state or props instead.



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