<template>
    <div>
        <div class="m-navbar">
                    <div class="m-navbar-left">
                        
                        <div @click="acitveMenu" class="m-navbar-icon m-icon-24 m-icon-three-stripes"></div>
                        <div class="m-navbar-branch">
                            <div class="m-branch-name">CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ QUI PHÚC</div>
                            <div class="m-navbar-icon m-icon-14 m-icon-chevron-down-bold"></div>
                        </div>
                    </div>
                    <div class="m-navbar-right">
                        
                            <div class="m-navbar-icon m-icon-24 m-icon-bell"></div>
                        
                        
                        <div class="m-navbar-user">
                            <div class="m-user-image">
                                <img src="../../assets/img/default-avatar.jpg" alt="User image">
                            </div>
                            <div class="m-user-name">Nguyễn Văn Mạnh</div>
                            <div class="m-navbar-icon m-icon-14 m-icon-chevron-down"></div>
                        </div>
                    </div>
         </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    },
    methods: {
        acitveMenu() {
            
        }
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
