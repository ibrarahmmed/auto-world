import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <div className="question1">
                <h4>How React Works?</h4>
                <p> React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                 Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.One of the biggest advantages of using React is that you can infuse HTML code with Javascript.  </p>

            </div>
            <div className="question2">
                <h4>Different Between Props and State?</h4>
                <p>Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent.Props allow you to pass data from one component to other components as an argument.State holds information about the components.Props are used to communicate between components.States can be used for rendering dynamic changes with the component.Props are external and controlled by whatever renders the component.The State is internal and controlled by the React Component itself.Props are immutable.State is mutable.Props are read-only.State changes can be asynchronous.A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.Props is similar to function arguments and can be passed to the component the same way as arguments passed in a function</p>

            </div>

        </div>
    );
};

export default Question;