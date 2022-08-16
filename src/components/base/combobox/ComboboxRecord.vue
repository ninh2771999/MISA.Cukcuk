<template>
  <div class="m-record-in-page">
    <div class="m-combo-box">
      <div class="m-combo-main-content">
        <div class="m-selected-options">
          <input
            type="text"
            class="m-combo-input"
            readonly="true"
            autofocus="autofocus"
            v-model="value"
          />
        </div>
        <div class="m-combo-action m-select-record" @click="btnOpentDropDown">
          <div class="m-btn-dropdown">
            <div class="m-icon-16 m-icon-arrow-dropdown m-dropdown-close"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="m-combo-dropdown-panel" v-if="isShowRecord">
    <div class="m-dropdown-body-container">
      <ul class="m-combo-dropdown-items">
        <!-- <li class="m-combo-box-item m-item-highlight" data-total="10">
          10 bản ghi trên 1 trang
        </li>
        <li class="m-combo-box-item" data-total="20">
          20 bản ghi trên 1 trang
        </li>
        <li class="m-combo-box-item" data-total="30">
          30 bản ghi trên 1 trang
        </li>
        <li class="m-combo-box-item" data-total="50">
          50 bản ghi trên 1 trang
        </li>
        <li class="m-combo-box-item" data-total="100">
          100 bản ghi trên 1 trang
        </li> -->
        <slot name="comboboxItem">

        </slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  props: ["isShowRecord"],
};
</script>

<style scoped>
@import url("../../../style/base/combobox.css");
</style>
