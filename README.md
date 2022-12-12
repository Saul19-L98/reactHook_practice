npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader html-loader html-webpack-plugin mini-css-extract-plugin @babel/core @babel/preset-env @babel/preset-react

## Explanation of useMemo hook.

Why renders.current is equal to 1 at first render?
We increment renders.current by one in useEffect so should it be equal 2 at first render?

Yes.

The starting value of renders.current is 1 then after every render (including the first) renders.current is incremented by one, so after the first render then renders.current will indeed be 2.

The important part to understand here though is that useEffect runs after the render, not before and a ref itself doesn't trigger a re render when changed. A ref is like none reactive state, you can change it's value as much as you want but it will never trigger a re render of your component. So in the ui we see the previous value of the ref, not the current value.

So React renders our component by calling our function, the initial value of our ref is 1 so that is what shows in the ui to the user.
After this first render our useEffect runs and we add one to our ref, so now it is 2. But nothing else re renders the component at this stage, so we still see the previous value in the ui. So with the code as it is the ui will display the previous value of whatever the renders ref is.

Hope that makes sense and answers it for you.
