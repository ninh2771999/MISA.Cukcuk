<template>
  <div :class="{'m-container':true , 'm-tiny': isHiddenSidebar}">
    
    <TheMenu/>
    <TheContent/>
    
  </div>
  
</template>

<script>
import TheMenu from './components/layout/TheMenu.vue' 
import TheContent from './components/layout/TheContent.vue' 

export default {
  name: 'App',
  components: {
   TheMenu,
   TheContent,
  },
   data() {
    return {
      isHiddenSidebar: false,
    };
  },
}
</script>
  
<style>
@import url('./style/main.css');
@import url('./style/base/button.css');
@import url('./style/base/combobox.css');
</style>
