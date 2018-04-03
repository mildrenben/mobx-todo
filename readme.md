# React Easy State Todo
I just wanted to try out [mobx](https://github.com/solkimicreb/react-easy-state) to see how it compares to Redux. I gave [Material UI](https://material-ui-next.com/getting-started/installation/) a spin also.

If you want to run it simply `yarn install` and `yarn start`, it'll be on `localhost:8080`.

I got used to it by the end, but I had some initial resistance with Mobx. If you can use decorators, it does have less boilerplate than Redux, but not by much considering you have to use classes for observable components. 

It's just a vastly different way of doing things to Redux and I didn't dislike it, but I didn't love it either. Things updating automatically when required is really cool; I'd need to check to see if it re-renders things more efficiently than Redux (which seems to re-render a lot of unnecessary things). Using only getters for "computed actions" that affect the store, bleurgh. I find getter functions (and setters) to be unnatural at the best of times, I'd much rather have a more explicit standard function name and calling funcs without () parens is always going to feel strange.

Overall, I think I'd use it again on a weekend project to see how it goes. I'd definitely use Material UI again, despite it being convoluted sometimes, I feel it could be very powerful once you know your way around it.

I tested out react-easy-state [over here](https://github.com/mildrenben/react-easy-state-todo).
---

Created from [Broiler](https://github.com/mildrenben/broiler).