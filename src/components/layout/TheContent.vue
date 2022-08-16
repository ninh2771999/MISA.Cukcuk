<template>
    <div class="m-content">
                <TheHeader/>
                
                <router-view></router-view>
                
            </div>
</template>

<script>
import TheHeader from '../layout/TheHeader.vue' 
// import ToastMessage from '../base/toastmessage/ToastMessage.vue' 
export default {
    name: 'TheContent',
    components: {
            TheHeader,
   
        }

       
    
}
</script>

<style scoped>
@import url('../../style/base/button.css');
@import url('../../style/layout/menu.css');
@import url('../../style/layout/navbar.css');
@import url('../../style/layout/main-content.css');
@import url('../../style/layout/popup.css');
@import url('../../style/layout/content.css');
</style>