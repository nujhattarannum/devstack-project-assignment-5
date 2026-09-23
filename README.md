#  Project Name : DevStack 

DevStack is a modern, responsive web application built with React and Tailwind CSS that allows developers to explore software development technologies, view essential metrics, and build their customized tech stack in real time.

#  Technologies Used

*  React (TypeScript)
*  Tailwind CSS
* Build Tool : Vite
* Version Control:Git & GitHub


# Key Features

1. **Interactive Technology Grid:** Displays a collection of frontend, backend, database, and language tools mapped dynamically with individual badges, ratings, and difficulty indicators.
2. Real-time "Your Stack" Builder: 
3. Responsive UI : Styled to match desktop and mobile layouts .


##  React Q&A

# What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like markup inside JavaScript files. It is used in React to make component UI structure visual and easy to read while retaining JavaScript logic like `.map()` directly inside the markup.

# What is the difference between props and state?
* Props:Read-only data passed down from a parent component to a child component. The receiving component cannot modify its props.
* State: Internal reactive data managed within a component that can change over time. When state updates, React re-renders the component to display the new data.

# What does the `useState` hook do, and where did you use it in this project?
The `useState` hook adds local reactive state to functional components. In this project, it was used in `Technology.tsx` to store and update the array of technologies selected into the sidebar stack.

# What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect performs side effects in functional components, such as fetching data from an external file or API. It runs asynchronously after component rendering so that data loading does not block the UI from displaying immediately.

# Why does every item in a .map() list need a unique key prop?
React uses unique key props to track list items across renders. When items are added, removed, or modified, unique keys help React update only the specific changed DOM elements instead of re-rendering the entire list.

# What is conditional rendering? Show one place you used it.
Conditional rendering means displaying different UI components based on a boolean condition.
example: {stack.length === 0 ? (
  <div className="rounded-xl border border-dashed border-gray-200 py-10 text-center text-sm text-gray-400">
    Your stack is empty.
  </div>
) : (
  <div className="flex flex-col gap-3">
    {/* Selected stack list */}
  </div>
)}

# How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
1. Parent to Child (Passing Data Down)
Data is passed from a parent component to a child using props.

Step 1: Define the prop interface in the child component.

Step 2: Pass the data from the parent as an attribute on the child component tag.

Step 3: Access the prop in the child component parameters.

2. Child to Parent (Sending Data Up)
Data is sent up from a child component to a parent using callback functions.

Step 1: Declare a handler function in the parent component.

Step 2: Pass that function as a prop to the child component.

Step 3: Trigger the function inside an event (like onClick) inside the child component, passing data back as arguments.