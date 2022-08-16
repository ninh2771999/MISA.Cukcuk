<template>
     <div class="m-dialog m-delete-warning">
            <div class="m-dialog-box">
                <div class="m-dialog-center">
                    <div class="m-dialog-background"></div>
                    <div class="m-dialog-drag">
                        <div class="m-dialog-message">
                            <div class="m-dialog-content">
                                <div class="m-content-icon">
                                    <div :class="iconList"></div>
                                </div>
                                <div class="m-content-message">{{Message}}</div>
                            </div>
                            <div class="m-dialog-line"></div>
                            <div class="m-dialog-footer">
                                <slot>

                                </slot>
                            </div>
                        </div>
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
    props: {
        Message: {
            Message: String
        },
        iconList: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss" scoped>

</style>