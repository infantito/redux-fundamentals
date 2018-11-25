/*
    Actions
    -------
    * They're payloads of information that send data from
      your application to your store.

    or

    * They're payloads of information that send an
      instruction on what type of transformation to make
      to your application's state as well as any other
      relevant information.

    - extra -

    * That's basically a fancy way of saying
      "an action is an object which describes what sort
      of transformation you want to make to your state."

    - They're are the "only" source of information for
      the store.
    - You send them to the store using "store.dispatch()"
*/

// Let's check out what an average action might looks like
const action = {
  type: 'LIKE_TWEET',
  id: 950788310443724800,
  uid: 'tylermcginnis'
}