# jsx-if-else
A very lightweight and small react component that will let you write simple if and else statement with JSX syntax..

### Getting started
```
$ npm i jsx-if-else --save
```

### Code example
The statement prop will return a bool value to the component. If true the 'If' component will render its children. If false it will return null.
```js
import { If } from 'jsx-if-else'
const isLoggedIn = true
const Component = myNumber => (
  <div>
    <If statement={isLoggedIn}>
      <div>
          Welcome
      </div>
    </If>
  </div>
)

export default Component
```

### Code example with else
If true the 'If' component will render every child located before the 'Else'-tag. If false it will render every child after the 'Else'-tag.
```js
import { If } from 'jsx-if-else'
const isLoggedIn = true
const Component = myNumber => (
  <div>
    <If statement={isLoggedIn}>
      <div>
          Hello!
      </div>
    <Else />
      <div>
          Please, log in!
      </div>
    </If>
  </div>
)

export default Component
```

### The statement prop
You can write any type of statement within the statement prop. Ex:

`statement={someNumberVariable > 0}`

`statement={someNumberVariable < 0}`

`statement={someNumberVariable < 0 || someOtherVariable === true}`

`statement={typeof(myFunction) === 'function'}`

...and so on.

Good luck!



