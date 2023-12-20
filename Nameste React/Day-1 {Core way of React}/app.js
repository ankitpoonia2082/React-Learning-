// <!------------------------------- JavaScript Code/React --------------------------------------------->

// <!-- Note : This is the core way of making ui in react 
//             but it was not user friendly so JSX was introduced. -->

const heading1 = React.createElement('h1', { id: "heading1" }, "This is heading 1");
const heading2 = React.createElement('h2', { id: "heading2" }, "This is heading 2");
const heading3 = React.createElement('h3', { id: "heading3" }, "This is heading 3");
const container = React.createElement('div', { id: "container" }, [heading1, heading2, heading3]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);