## 组合式函数(Composables)



### 什么是`组合式函数`？

> 在 Vue 应用的概念中，“组合式函数”(Composables) 是一个利用 Vue 的组合式 API 来`封装`和`复用` **有状态逻辑**的**函数**。

简单点理解就是一个封装了状态的普通函数。

### 为什么要用组合式函数

根据定义可以就为了两件事：**封装**和**复用**。vue框架也是申明式UI，即`ui=f(state)`，我们日常写组件本质是在 **申明state和ui的关系** ，然后根据特定情况**操作state**。

 页面上可能有各种`state`，对应的也会有很多**操作state**的方法，所以没有**组合式函数**时，一般是**选项式api**的写法，即如下：

`index.vue`

```js
export default {
  data() {
    return {
      aState: '',
      bState: '',
      // ....
    }
  },
  watch: {
    aState() {
      // do...
    },
    bState() {
      // do ...
    },
  },
  computed: {},
  beforeMount(){
    this.getAState()
    this.getBState()
    
  }
  methods: {
    getAState() {
      // do ...
    },
    deleteAState() {
      // do ...
    },
    // ...
    getBState() {
      // do ...
    },
    deleteBState() {
      // do ...
    },
  },
  
  // ...
}
```

你会发现`aState`的相关逻辑被拆分到对应的`data、watch、computed、beforeMount、methods`中，而且里面还有对应`bState`的逻辑，这才两个状态，假如页面有十多个状态，这个文件会膨胀到什么程度，**而且逻辑很分散，不利于维护**，以上写法基于`opitions api`本质是个大**对象**，对象是可以合并的，那是不是可以将`aState`相关逻辑抽成一个`对象`,`bState`同样也是，然后将两个对象合并`{...aMixin,...bMixin}`，这种思想在`vue`里面就是`混入 (mixin)`，代码如下

`aMixin.js`

```js
// aMixin
export default {
  data() {
    return {
      aState: '',
    }
  },
  watch: {
    aState() {
      // do...
    },
  },
  computed: {},
  beforeMount() {
    this.getAState()
  },
  methods: {
    getAState() {
      // do ...
    },
    deleteAState() {
      // do ...
    },
  },
}
// bMinxin 同 aMinxin一样
```

`index.vue`

```js
import aMixin from './aMixin'
import bMixin from './bMixin'
export default{
  mixins: ['aMixin','bMixin']
}
```

上面`mixin`写法看样子完美解决了问题。有**封装**，也有**复用**(其它组件要用`aMixin`可直接引用)，但对象合并有些问题无法避免：

1. **不清晰的数据来源**：mixin越多，数据来自哪个mixin不清晰
2. **命名冲突**：对象合并会导致同名的后面会覆盖前面的
3. **逻辑隐式耦合**：多个mixin可以依赖同一个数据，而且依赖不透明(因为都是通过`this`访问的)

为了解决上面这些问题，同时便于代码的 **封装**和**复用**，引入了**组合式函数(Composables) **

### 如何使用？

下面用**组合式函数**来重构代码如下

```js
// useA.js
import {ref,watch} from 'vue'
export default function(){
  const aState = ref('')
  watch(
    () => aState.value,
    () 
      // do...
    }
  )
  const getAState = () => {
    // do ...
  }
  const deleteAState = () => {
    // do ...
  }
  onBeforeMount(() => getAState())
  return {
    aState,
    getAState,
    deleteAState,
  }
}
// useB.js 同 useA.js 一样
```

`index.vue`

```js
import useA from './useA'
import useB from './useB'
export default{
  setup(){
    const {aState,getAState,deleteAState} = useA()
    const {bState,getBState,deleteBState} = useB()
  }
}
```

同样解决了代码的**复用和封装**，同时数据源很清晰、不存在命名冲突(解构赋值可以另取别名)、假如多个hook共同依赖某个数据，可以通过函数调用传参实现，不存在隐式依赖



### 总结

组合函数本质就是一个**封装了 状态和状态操作**的**普通函数**，用于**封装代码和复用重复的逻辑**，解决**组合式api中mixin方案**带来的各种问题







