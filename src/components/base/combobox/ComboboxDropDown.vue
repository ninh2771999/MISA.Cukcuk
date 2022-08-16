<template>
     <div id="DropDialog" v-show="isShowDrop" ref="positionMouse" class="m-dropdown-menu m-dropdown-emp">
            <ul class="m-dropdown-menu-items">
                <li class="m-dropdown-item">
                    <a class="m-dropdown-item-link">Nhân bản</a>
                </li>
                <li class="m-dropdown-item m-item-delete">
                    <a class="m-dropdown-item-link" @click="showPopup">Xóa</a>
                </li>
                <li class="m-dropdown-item">
                    <a class="m-dropdown-item-link">Ngừng sử dụng</a>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    },
    props: ['isShowDrop'],
}
</script>

<style scoped>
@import url('../../..//style/base/dropdown.css');
</style>