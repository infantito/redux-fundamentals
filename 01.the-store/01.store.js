/*
  Redux:
    It's a predictable state container
    for Javascript apps.

  It helps you write applications that behave consistently,
  run in different enviroments (client, server, and native),
  and are to test.
*/
/*
  State tree
  ----------
  => all states in one location
  |
  => Benefits:
    - Shared cache:
        01: It meaning have you ever had,
          inside of a react application, two componenents
          that needed the exact same piece of state?

        02: Typically, what you're taught to do is you're 
          taught to move that piece of state up to a parent
          component, but what if this is a large application
          and the nearest parent component is six o seven
          parents up the component tree?

        03: What's going to happen is you're be plumbing
          all of those props down to each component, just so
          can have some shared state between those different
          components.

        04: Solution: If all of our state is in a single
          state tree, then what you do is you just tell
          each component to grab then state from the state
          tree, and you don't necessarily need to worry
          about passing all of the state down as props to
          each component that needs it.

    - Predictable State Changes:
        01: By having all of our state in a single location
          or a state tree, what we can do es we can set strict
          rules for how that state can be updated, and web
          can also be updated of any time state actually changes.

        02: Example: a good example of this is say inside of
          your house you had a bunch of valuables.

        03: Typically, what you do is you put all of those
          valuables inside of a safe, and then if you really
          wanted to keep and eye on the safe, you'd set tup
          a security camera. Or if you really wanted to keep
          an eye on the safe, you'd hace a security guard there
          whi would watch the safe for you.

        04: It's the same idea with the state of our application.
          We don't want just anyone comming in our house and
          accessing our valuables. So, what we do is we have a 
          security ward there to make sure whoever is going and
          messing with the safe, messing with our valuables,
          then have permission to do that.

        05: And just like with our application, we don't want
          anything being able to just change the state tree,
          because that's what's going to cause bugs.

        06: So, what do is we set up a strict set of rules,
          kind of like our security guard, for how and when
          you can change the state of the entire application
          or our state tree.

    - Improved developer tooling:
        01: Since all of your state exists in one location,
          other parts of your application can be reloaded
          without throwing away all of your state.

        02: So, an example of this is say we were three pages
          into a sign up form, and we're debugging it.

        03: Typically, what would happen is whenever you made
          any changes, you'd have to go through page one, two,
          until you got to page three againg, so you could then
          debug page three.

        04: But because all of your state is in one location,
          we can write developer tools and we can say: "Hey,
          don't blow away the state if state already exists.
          Instead, whenever there's a change to the application,
          just go ahead and reload the UI, the CSS, all of
          the stuff that should change, but keep the state
          the same."

        05: Now, what that will do in our example that we've
          been using, whenever you made any changes to your
          code, because the state would stay the same, we 
          wouldn't have to go from page one to page two to page
          three and fill out all of those inputs again because
          the state would already specify that we were on
          page three.

    - Pure functions: ...

    - Server rendering: ...

  => Ways to interact with the state tree
    :::::::::::
    State Tree
    :::::::::::
    |  State  | GET
    |  State  |
    |  State  | LISTEN
    |  State  |
    |  State  | UPDATE
*/
// -------------------------------------------------------
/* What is the Store */
/*
  It's the object that brings the "actions" and "reducers"
  together.

  Responsabilities:
  - Holds application state
  - Allows access to state via getState()
  - Allows state to be updated via dispatch(action)
  - Registers listeners via subscribe(listener)
  - Handles unregistering of listeners via the functions
    returned by subscribe(listener)

  * Note:
    - You'll only have a single store in a Redux application.
    - When you want to split your data handling topic, you'll
      use "reducer composition" instead of many stores.

  :::::::::::::::::::::::::::::
  ::          STORE          ::
  :::::::::::::::::::::::::::::
  ::  | State Tree |         ::
  ::-------------------------::
  ::  |    State   | GET     ::
  ::  |    State   |         ::
  ::  |    State   | LISTEN  ::
  ::  |    State   |         ::
  ::  |    State   | UPDATE  ::
  :::::::::::::::::::::::::::::
  Store: 4 things collectively:
    - the state tree
    - a way to get it
    - a way to listen to it
    - a way to update it
*/
