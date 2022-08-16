<template>
  <div class="m-input-100 m-pb-12" style="position: relative;">
    <div class="m-combo-box">
      <div class="m-combo-main-content">
        <div class="m-selected-options">
          <input
            type="text"
            class="m-combo-input"
            v-model="valueDepart"
            name="DepartmentName"
            :tabindex="tabindex"
            ref="inp"
          />
        </div>
        <div class="m-combo-action m-select-department">
          <div class="m-btn-dropdown" @click="btnOpenDepart" ref="cbxBtn">
            <div ref="iconDrop" class="m-icon-16 m-icon-arrow-dropdown"></div>
          </div>
        </div>
      </div>
    </div>
    <div ref="empDepart" class="m-combo-menu" v-if="isShowDepartDown" style="position: absolute;">
      <div class="m-combo-menu-header">
        <table class="m-menu-table">
          <slot name="theadTable">
          </slot>
        </table>
      </div>
      <div class="m-combo-menu-content">
        <table class="m-menu-table">
          <slot name="tbodyTable"></slot>

        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueDepart: "",
      isShowDepartDown: false,

    };
  },
  setup() {
    return {};
  },

  methods: {
    setValue: function (text) {
      this.valueDepart = text;
     
      // this.$emit("valueDepartment", this.valueDepart);
    },
    getValue: function () {
      return this.valueDepart;
    },

    clickItem: function (text) {
      this.setValue(text)
       this.showDepart(false);
         if (this.spinnable == true) {
                    this.$refs.iconDrop.classList.add("m-dropdown-close");
                    this.$refs.iconDrop.classList.remove("m-dropdown-open");
                }
    },

    /**
     * Mở dialog phòng ban
     * author : Nguyễn Văn Ninh 13/07/2022
     *
     */
    btnOpenDepart() {
      this.showDepart(true);
      if (this.isShowDepartDown == true) {
          if (this.spinnable == true) {
               this.$refs.iconDrop.classList.add("m-dropdown-open");
              this.$refs.iconDrop.classList.remove("m-dropdown-close");

          }
      }else {
                if (this.spinnable == true) {
                    this.$refs.iconDrop.classList.add("m-dropdown-close");
                    this.$refs.iconDrop.classList.remove("m-dropdown-open");
                }
            }
    },
    /**
     * Hiển thị dialog phòng ban
     * @param {Boolean} isShowDepart - true la hien thi form chi tiet - false la an di form chi tiet nhan vien
     */
    showDepart() {
      this.isShowDepartDown = !this.isShowDepartDown;
    },
  },
  props: {
    isShowDepart: Boolean,
    spinnable: Boolean,
    tabindex: {
             type: Number,
             required: false,
             default: 3
         }
    },
  
};
</script>

<style scoped>
.m-menu-items-tr {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 32px;
  line-height: 32px;
  white-space: nowrap;
}
.m-input:hover {
  outline: 1px solid #e2e2e2;
}
.m-combo-main-content:focus-within {
  border: 1px solid #2ca01c;
}

.m-pb-12 {
  padding: 0;
}
@import url("../../../style/base/input.css");
@import url("../../../style/base/combobox.css");
@import url("../../../style/main.css");
</style>
