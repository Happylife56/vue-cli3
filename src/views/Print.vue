// 自定义打印
<template>
  <div>
    <!-- 调用组件  -->
    <Draggable
      element="ul"
      v-model="list"
    >
      <li
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.name }}
      </li>
    </Draggable>
    <!-- 输出list数据 -->
    {{ list }}
  </div>
</template>

<script>
// 引入拖拽组件
import draggable from 'vuedraggable'
export default {
  name: 'Demo',
  components: {
    // 调用组件
    draggable
  },
  data() {
    return {
      list: [
        {
          id: 1,
          name: 'a'
        },
        {
          id: 2,
          name: 'b'
        },
        {
          id: 3,
          name: 'c'
        },
        {
          id: 4,
          name: 'd'
        },
        {
          id: 5,
          name: 'e'
        },
        {
          id: 6,
          name: 'f'
        }
      ]
    }
  }
}
</script>
