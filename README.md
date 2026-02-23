


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById():-
getElementById() is a DOM method used to select one element based on its unique id.

Key Characteristics:-
1.Selects element by id only
2.Returns a single element
3.If no element is found → returns null
4.id must be unique in the HTML document
5.Faster than most other selectors because IDs are unique

getElementsByClassName():-
getElementsByClassName() selects elements based on their class name.

Key Characteristics:-
1.Selects by class
2.Returns a live HTMLCollection
3.Can return multiple elements
4.Automatically updates if DOM changes (because it's live)

querySelector():-
querySelector() selects the first matching element using a CSS selector.

Key Characteristics:-
1.Uses CSS selector syntax
2.Returns only the first matching element
3.Returns null if nothing matches
4.More flexible than getElementById and getElementsByClassName

querySelectorAll():-
querySelectorAll() selects all matching elements using a CSS selector.

Key Characteristics:-
1.Uses CSS selector syntax
2.Returns a static NodeList
3.Does NOT automatically update if DOM changes
4.Can select multiple elements

-------------------------------------------------------------------

### 2. How do you create and insert a new element into the DOM?

Creating a New Element:-
To create a new HTML element dynamically, we use:  document.createElement()

Inserting the Element into the DOM:- To make the element visible, it must be inserted into an existing parent element.
There are several insertion methods:appendChild(), append(), append() , insertBefore()

-------------------------------------------------------------------

### 3. What is Event Bubbling? And how does it work?

Event Bubbling is a DOM event propagation mechanism where an event starts from the target element (the element that was clicked or triggered) and then moves upward through its parent elements one by one until it reaches the root (document).
In simple words: The event “bubbles up” from child → parent → grandparent → document.

-------------------------------------------------------------------

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where you attach a single event listener to a parent element instead of attaching separate event listeners to multiple child elements.
It works because of event bubbling — when an event occurs on a child element, it bubbles up to the parent, allowing the parent to handle it.

it useful:-
1.Improves Performance
2.Works for Dynamically Added Elements
3.Cleaner and Simpler Code

-------------------------------------------------------------------

### 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the default browser behavior of an element.

1.The browser’s automatic behavior is stopped.
2.The event still continues to bubble (unless stopped separately).

stopPropagation() stops the event from moving to parent elements.
It prevents event bubbling (and capturing).
The default browser behavior still happens (unless prevented separately).



-------------------------------------------------------------------


