
import { If, Else } from './index'

describe('render with wrapping div when condition are true/false', () => {
  let TestComponent = ({isTruly}) => (
    <div>
      <If condition={isTruly}>
        <div>
            Welcome
        </div>
      </If>
    </div>
  )
  it('should render the block', () => {
    expect(shallow(<TestComponent isTruly={true} />).html()).toContain('Welcome')
  })
  it('should not render the block', () => {
    expect(shallow(<TestComponent isTruly={false} />).html()).not.toContain('Welcome')
  })
})


describe('render with only text when condition are true/false', () => {
  let TestComponent = ({isTruly}) => (
    <div>
      <If condition={isTruly}>
        Welcome
      </If>
    </div>
  )
  it('should render the block', () => {
    expect(shallow(<TestComponent isTruly={true} />).html()).toContain('Welcome')
  })
  it('should not render the block', () => {
    expect(shallow(<TestComponent isTruly={false} />).html()).not.toContain('Welcome')
  })
})
describe('render with long text when condition are true/false', () => {
  let TestComponent = ({isTruly}) => (
    <div>
      <If condition={isTruly}>
        Welcome, my friend!
        This is a test and i want to make sure everything works.
      </If>
    </div>
  )
  it('should render the block', () => {
    expect(shallow(<TestComponent isTruly={true} />).html()).toContain('everything')
  })
  it('should not render the block', () => {
    expect(shallow(<TestComponent isTruly={false} />).html()).not.toContain('everything')
  })
})


describe('render with else', () => {
  let TestComponent = ({isTruly}) => (
    <div>
      <If condition={isTruly}>
        <div>
            Welcome
        </div>
        <Else />
        <div>
            Not welcome
        </div>
      </If>
    </div>
  )
  it('should render first block and not the second', () => {
    const wrapper = shallow(<TestComponent isTruly={true} />)
    expect(wrapper.html()).toContain('Welcome')
    expect(wrapper.html()).not.toContain('Not welcome')
  })
  it('should render second block and not the first', () => {
    const wrapper2 = shallow(<TestComponent isTruly={false} />)
    expect(wrapper2.html()).toContain('Not welcome')
    expect(wrapper2.html()).not.toContain('Welcome')
  })
})


describe('render with else. only text block', () => {
  let TestComponent = ({isTruly}) => (
    <div>
      <If condition={isTruly}>
          Welcome
        <Else />
          Not welcome
      </If>
    </div>
  )
  it('should render first block and not the second', () => {
    const wrapper = shallow(<TestComponent isTruly={true} />)
    expect(wrapper.html()).toContain('Welcome')
    expect(wrapper.html()).not.toContain('Not welcome')
  })
  it('should render second block and not the first', () => {
    const wrapper2 = shallow(<TestComponent isTruly={false} />)
    expect(wrapper2.html()).toContain('Not welcome')
    expect(wrapper2.html()).not.toContain('Welcome')
  })
})


describe('render with else. with js code in the blocks', () => {
  const arr = ['hello', 'my', 'friend']
  let TestComponent = ({isTruly}) => (
    <div>
      <If condition={isTruly}>
          {
            arr.map((item,i) => (<div key={i}>{item}</div>))
          }
          Welcome
          {
            arr.map((item,i) => (<div key={i}>{item}</div>))
          }
        <Else />
          {
            arr.map((item,i) => (<div key={i}>{item}</div>))
          }
          Not welcome
          {
            arr.map((item,i) => (<div key={i}>{item}</div>))
          }
      </If>
    </div>
  )
  it('should render first block and not the second', () => {
    const wrapper = shallow(<TestComponent isTruly={true} />)
    expect(wrapper.html()).toContain('Welcome')
    expect(wrapper.html()).not.toContain('Not welcome')
  })
  it('should render second block and not the first', () => {
    const wrapper2 = shallow(<TestComponent isTruly={false} />)
    expect(wrapper2.html()).toContain('Not welcome')
    expect(wrapper2.html()).not.toContain('Welcome')
  })
})


describe('render with components including new if/else.', () => {
  const arr = ['hello', 'my', 'friend']
  let TestComponent = ({isTruly, isTruly2}) => (
    <div>
      <If condition={isTruly}>
          <If condition={isTruly2}>
            Welcome
          </If>
        <Else />
          <If condition={isTruly2}>
            Welcome
            {!isTruly &&
              <p>Welcome</p>
            }
            <Else />
            <div>Not welcome</div>
          </If>
      </If>
    </div>
  )
  it('should render first block and not the second', () => {
    const wrapper = shallow(<TestComponent isTruly={true} isTruly2={true} />)
    expect(wrapper.html()).toContain('Welcome')
    expect(wrapper.html()).not.toContain('Not welcome')
  })
  it('should render second block and not the first', () => {
    const wrapper2 = shallow(<TestComponent isTruly={false} isTruly2={false} />)
    expect(wrapper2.html()).toContain('Not welcome')
    expect(wrapper2.html()).not.toContain('Welcome')
  })
})