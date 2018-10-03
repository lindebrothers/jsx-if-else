# jsx-if-else
A very lightweight and small react component that will let you write simple if and else condition with JSX syntax..

### Getting started
```
$ npm i jsx-if-else --save
```

### Code example
The condition prop will return a bool value to the component. If true the 'If' component will render its children. If false it will return null.
```js
import { If } from 'jsx-if-else'
const isLoggedIn = true
const Component = () => (
  <div>
    <If condition={isLoggedIn}>
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
import { If, Else } from 'jsx-if-else'
const isLoggedIn = true
const Component = () => (
  <div>
    <If condition={isLoggedIn}>
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

### The condition prop
You can write any type of condition within the condition prop. Ex:

`condition={someNumberVariable > 0}`

`condition={someNumberVariable < 0}`

`condition={someNumberVariable < 0 || someOtherVariable === true}`

`condition={typeof(myFunction) === 'function'}`

...and so on.

Good luck!



