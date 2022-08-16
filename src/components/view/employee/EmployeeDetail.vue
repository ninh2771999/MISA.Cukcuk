<template>
  <div class="m-popup m-add-popup" v-show="isShow">
    <div class="m-popup-con">
      <div class="m-popup-background"></div>
      <div class="m-popup-drag">
        <div class="m-popup m-popup-content">
          <div class="m-popup--header">
            <div class="m-popup--title">
              <div class="m-title">Thông tin nhân viên</div>
              <label class="m-popup-checkbox">
                <input type="checkbox" class="m-input-checkbox-popup" />
                <span class="m-checkbox">
                  <span class="m-checkbox-inner">
                    <div class="m-icon-16 m-icon-checkbox-active"></div>
                  </span>
                </span>
                <span class="m-input-checkbox-label">Là khách hàng</span>
              </label>
              <label class="m-popup-checkbox">
                <input type="checkbox" class="m-input-checkbox-popup" />
                <span class="m-checkbox">
                  <span class="m-checkbox-inner">
                    <div class="m-icon-16 m-icon-checkbox-active"></div>
                  </span>
                </span>
                <span class="m-input-checkbox-label">Là nhà cung cấp</span>
              </label>
            </div>
            <div @click="clear" class="m-popup--close">
              <div
                class="m-icon-24 m-icon-help"
                style="margin-right: 6px"
                title="Help"
              ></div>
              <div
                @click="btnCloseOnClick"
                class="m-icon-24 m-icon-close m-close-add-popup"
                title="Đóng (ESC)"
              ></div>
            </div>
          </div>
          <div class="m-popup--content">
            <div class="m-popup--content-scroll">
              <form id="employeeForm">
                <div class="m-content-2-col">
                  <div class="m-col-1 m-flex-wrap">
                    <div class="m-input-40 m-pr-6 m-pb-12">
                      <div class="m-flex">
                        <div class="m-input-title">Mã</div>
                        <div class="m-input-title-require">&nbsp;*</div>
                      </div>
                      <input
                        type="text"
                        ref="txtEmployeeCode"
                        class="m-input m-input-require"
                        v-model="employee.EmployeeCode"
                        name="EmployeeCode"
                        maxlength="25"
                        @blur="validateRequired"
                        tabindex="1"
                        autofocus
                      />
                    </div>
                    <div class="m-input-60 m-pb-12">
                      <div class="m-flex">
                        <div class="m-input-title">Tên</div>
                        <div class="m-input-title-require">&nbsp;*</div>
                      </div>
                      <input
                        type="text"
                        ref="txtFullName"
                        class="m-input m-input-require"
                        v-model="employee.EmployeeName"
                        name="EmployeeName"
                        maxlength="128"
                        propName="EmployeeName"
                        @blur="validateRequired"
                        tabindex="2"
                        @keyup="nextDOb"
                      />
                    </div>
                    <div class="m-flex">
                      <div class="m-input-title">Đơn vị</div>
                      <div class="m-input-title-require">&nbsp;*</div>
                    </div>
                    <ComboboxDepartment
                      ref="cbx"
                      @blur="validateRequired"
                      @valueDepartment="
                        (valueDepart) => {
                          this.employee.DepartmentName = valueDepart;
                        }
                      "
                      :spinnable="true"
                      :tabindex="3"
                    >
                      <template #theadTable>
                        <thead class="m-menu-header">
                          <tr>
                            <th
                              class="m-menu-header-th"
                              style="width: 100px; text-align: left"
                            >
                              <span>Mã đơn vị</span>
                            </th>
                            <th
                              class="m-menu-header-th"
                              style="width: 250px; text-align: left"
                            >
                              <span>Tên đơn vị</span>
                            </th>
                          </tr>
                        </thead>
                      </template>
                      <template #tbodyTable>
                        <tbody class="m-menu-items m-departments-list">
                          <tr
                            class="m-menu-items-tr"
                            @click.prevent.stop="
                              this.$refs.cbx.setValue('Phòng Nhân Sự')
                            "
                          >
                            <td
                              class="m-menu-items-td"
                              style="width: 100px; text-align: left"
                            >
                              <span>ghk</span>
                            </td>
                            <td
                              class="m-menu-items-td"
                              style="width: 250px; text-align: left"
                            >
                              <span>Phòng Nhân Sự</span>
                            </td>
                          </tr>
                          <tr
                            class="m-menu-items-tr"
                            @click.prevent.stop="
                              this.$refs.cbx.setValue(
                                'Phòng Công Nghệ Thông Tin'
                              )
                            "
                          >
                            <td
                              class="m-menu-items-td"
                              style="width: 100px; text-align: left"
                            >
                              <span>abc</span>
                            </td>
                            <td
                              class="m-menu-items-td"
                              style="width: 250px; text-align: left"
                            >
                              <span>Phòng Công Nghệ Thông Tin</span>
                            </td>
                          </tr>
                          <tr
                            class="m-menu-items-tr"
                            @click.prevent.stop="
                              this.$refs.cbx.setValue('Phòng Tuyển Sinh')
                            "
                          >
                            <td
                              class="m-menu-items-td"
                              style="width: 100px; text-align: left"
                            >
                              <span>def</span>
                            </td>
                            <td
                              class="m-menu-items-td"
                              style="width: 250px; text-align: left"
                            >
                              <span>Phòng Tuyển Sinh</span>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </ComboboxDepartment>
                    <div class="m-input-100 m-pb-12">
                      <div class="m-flex-wrap">
                        <div class="m-input-title">Chức danh</div>
                      </div>
                      <input
                        v-model="employee.EmployeePosition"
                        type="text"
                        class="m-input"
                        name="EmployeePosition"
                        maxlength="128"
                        propName="EmployeePosition"
                        tabindex="4"
                      />
                    </div>
                  </div>
                  <div class="m-col-2 m-flex-wrap">
                    <div class="m-input-40 m-pr-6 m-pb-12">
                      <div class="m-flex-wrap">
                        <div class="m-input-title">Ngày sinh</div>
                      </div>
                      <DatePicker
                        v-model:value="formatDateOfBirth"
                        format="DD/MM/YYYY"
                        placeholder="DD/MM/YYYY"
                        :clearable="false"
                        title-format="DD/MM/YYYY"
                        :tabindex="5"
                        ref="txtDoB"
                      />
                    </div>
                    <div class="m-input-60 m-pb-12">
                      <div class="m-flex-wrap">
                        <div class="m-input-title m-input-gender">
                          Giới tính
                        </div>
                      </div>
                      <div class="m-radio-group">
                        <label class="m-con-radio">
                          <input
                            checked
                            v-model="employee.Gender"
                            type="radio"
                            class="m-input-radio"
                            value="1"
                            name="Gender"
                          />
                          <span class="m-radio">
                            <span class="m-radio-border"></span>
                            <span class="m-radio-circle"></span>
                          </span>
                          <span class="m-radio-label">Nam</span>
                        </label>
                        <label class="m-con-radio">
                          <input
                            v-model="employee.Gender"
                            type="radio"
                            class="m-input-radio"
                            value="0"
                            name="Gender"
                            tabindex="8"
                          />
                          <span class="m-radio">
                            <span class="m-radio-border"></span>
                            <span class="m-radio-circle"></span>
                          </span>
                          <span class="m-radio-label">Nữ</span>
                        </label>
                        <label class="m-con-radio">
                          <input
                            v-model="employee.Gender"
                            type="radio"
                            class="m-input-radio"
                            value="2"
                            name="Gender"
                            tabindex="7"
                          />
                          <span class="m-radio">
                            <span class="m-radio-border"></span>
                            <span class="m-radio-circle"></span>
                          </span>
                          <span class="m-radio-label">Khác</span>
                        </label>
                      </div>
                    </div>
                    <div class="m-input-60 m-pr-6 m-pb-12">
                      <div class="m-flex-wrap">
                        <div class="m-input-title">Số CMND</div>
                      </div>
                      <input
                        type="text"
                        v-model="employee.IdentityNumber"
                        class="m-input"
                        name="IdentityNumber"
                        maxlength="20"
                        propName="IdentityNumber"
                        @input="inputNumberFormat"
                        tabindex="9"
                      />
                    </div>
                    <div class="m-input-40 m-pb-12">
                      <div class="m-flex-wrap">
                        <div class="m-input-title">Ngày cấp</div>
                      </div>
                      <DatePicker
                        v-model:value="formatIdentityDate"
                        format="DD/MM/YYYY"
                        placeholder="DD/MM/YYYY"
                        :clearable="false"
                        title-format="DD/MM/YYYY"
                        tabindex="10"
                      />
                    </div>
                    <div class="m-input-100 m-pb-12">
                      <div class="m-flex-wrap">
                        <div class="m-input-title">Nơi cấp</div>
                      </div>
                      <input
                        type="text"
                        v-model="employee.IdentityPlace"
                        class="m-input"
                        name="IdentityPlace"
                        propName="IdentityPlace"
                        tabindex="11"
                      />
                    </div>
                  </div>
                </div>
                <div class="m-content-1-col m-pb-12">
                  <div class="m-input-100">
                    <div class="m-flex-wrap">
                      <div class="m-input-title">Địa chỉ</div>
                    </div>
                    <input
                      v-model="employee.Address"
                      type="text"
                      class="m-input"
                      name="Address"
                      propName="Address"
                      tabindex="12"
                    />
                  </div>
                </div>
                <div class="m-content-4-col">
                  <div class="m-col-1 m-pr-6">
                    <div class="m-input-100 m-pb-12">
                      <div class="m-flex-wrap">
                        <div class="m-input-title">ĐT di động</div>
                      </div>
                      <input
                        v-model="employee.PhoneNumber"
                        type="text"
                        class="m-input"
                        name="TelephoneNumber"
                        propName="TelephoneNumber"
                        tabindex="13"
                      />
                    </div>
                    <div class="m-input-100 m-pb-12">
                      <div class="m-flex-wrap">
                        <div class="m-input-title">Tài khoản ngân hàng</div>
                      </div>
                      <input
                        v-model="employee.BankAccountNumber"
                        type="text"
                        class="m-input"
                        name="BankAccountNumber"
                        propName="BankAccountNumber"
                        tabindex="14"
                      />
                    </div>
                  </div>
                  <div class="m-col-2 m-pr-6">
                    <div class="m-input-100 m-pb-12">
                      <div class="m-flex-wrap">
                        <div class="m-input-title">ĐT cố định</div>
                      </div>
                      <input
                        v-model="employee.TelephoneNumber"
                        type="text"
                        class="m-input"
                        name="PhoneNumber"
                        propName="PhoneNumber"
                        tabindex="15"
                      />
                    </div>
                    <div class="m-input-100 m-pb-12">
                      <div class="m-flex-wrap">
                        <div class="m-input-title">Tên ngân hàng</div>
                      </div>
                      <input
                        v-model="employee.BankName"
                        type="text"
                        class="m-input"
                        name="BankName"
                        propName="BankName"
                        tabindex="16"
                      />
                    </div>
                  </div>
                  <div class="m-col-3 m-pr-6">
                    <div class="m-input-100 m-pb-12">
                      <div class="m-flex-wrap">
                        <div class="m-input-title">Email</div>
                      </div>
                      <input
                        v-model="employee.Email"
                        type="text"
                        class="m-input"
                        name="Email"
                        propName="Email"
                        tabindex="17"
                      />
                    </div>
                    <div class="m-input-100 m-pb-12">
                      <div class="m-flex-wrap">
                        <div class="m-input-title">Chi nhánh</div>
                      </div>
                      <input
                        v-model="employee.BankProvinceName"
                        type="text"
                        class="m-input"
                        name="BankBranchName"
                        propName="BankBranchName"
                        tabindex="18"
                      />
                    </div>
                  </div>
                  <div class="m-col-4"></div>
                </div>
              </form>
            </div>
            <div class="m-popup--footer">
              <div class="m-divine"></div>
              <div class="m-popup-btn">
                <div class="m-popup-btn-left">
                  <button
                    @click="btnQuitOnClick"
                    tabindex="19"
                    class="m-button m-button-secondary m-button-size-default m-button-border-false"
                  >
                    <div class="m-button-text">Hủy</div>
                  </button>
                </div>
                <div class="m-popup-btn-right">
                  <button
                    @click="btnSaveOnClick"
                    tabindex="20"
                    class="m-button m-button-secondary m-button-size-default m-button-border-false m-popup-store-btn"
                  >
                    <div class="m-button-text">Cất</div>
                  </button>
                  <button
                    @keyup="reLoopIndex"
                    tabindex="21"
                    @click="btnSaveAddOnClick"
                    class="m-button m-button-size-default m-button-border-false m-popup-store-and-add-btn"
                  >
                    <div class="m-button-text">Cất và thêm</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Dialog Message Dữ liệu thay đổi. Bạn có muốn cất dữ liệu -->
  <DialogMsg
    v-if="isShowMsgChange"
    :Message="Message"
    iconList="m-icon-48 m-icon-question"
  >
    <div class="m-btn-left">
      <button
        @click="closeMsgChange"
        class="m-button m-button-secondary m-question-cancel m-button-size-default m-button-border-false"
      >
        <div class="m-button-text">Hủy</div>
      </button>
    </div>
    <div class="m-btn-right">
      <button
        @click="closeExitMsgChange"
        class="m-button m-button-secondary m-question-close m-button-size-default m-button-border-false"
      >
        <div class="m-button-text">Không</div>
      </button>
      <button
        @click="btnSaveOnClick"
        class="m-button m-question-store m-button-size-default m-button-border-false m-ml-8"
      >
        <div class="m-button-text">Cất</div>
      </button>
    </div>
  </DialogMsg>
  <!-- Dialog Message xóa nhân viên thành công -->
  <ToastMessage
    v-if="isDialogDeleteSuccess"
    :MessageDeleteSuccsess="MessageDeleteSuccsess"
  ></ToastMessage>
</template>

<script>
import axios from "axios";
import DatePicker from "vue-datepicker-next";
import "vue-datepicker-next/index.css";
import ComboboxDepartment from "../../base/combobox/ComboboxDepartment.vue";
import ToastMessage from "../../base/toastmessage/ToastMessage.vue";
import DialogMsg from "../../base/popup/DialogMsg.vue";
export default {
  data() {
    return {
      isShowDepartDown: false,
      employee: {},
      isShowDepart: false,
      isChange: false,
      notNameEmpty: false,
      isShowMsgChange: false,
      valueDepart: "",
      isDialogDeleteSuccess: false,
      count: 0,
    };
  },
  name: "EmployeeDetail",
  components: {
    ComboboxDepartment,
    DatePicker,
    ToastMessage,
    DialogMsg,
  },
  computed: {
    formatDateOfBirth: {
      get() {
        var employee = JSON.parse(JSON.stringify(this.employee));
        if (!employee.DateOfBirth) return;
        return new Date(employee.DateOfBirth);
      },
      set(newValue) {
        // var employee = JSON.parse(JSON.stringify(this.employee));
        // employee.DateOfBirth = newValue.toDateString();
        this.employee.DateOfBirth = newValue.toDateString();
      },
    },
    formatIdentityDate: {
      get() {
        // this.employee.DepartmentName = this.$refs.cbx.getValue()
        var employee = JSON.parse(JSON.stringify(this.employee));
        if (!employee.IdentityDate) return;
        return new Date(employee.IdentityDate);
      },
      set(newValue) {
        // var employee = JSON.parse(JSON.stringify(this.employee));
        // employee.DateOfBirth = newValue.toDateString();
        this.employee.IdentityDate = newValue.toDateString();
      },
    },
  },
  methods: {
    /**
     * Clear information form
     * author : Nguyễn Văn Ninh 08/08/2022
     */
    empty() {
      this.employee = {};
      this.$emit("__getNewEmployeeCode");
    },
    nextDOb(e) {
      if (e.key == "Tab") this.$refs.txtMan.focus();
    },
    /**
     * Reloop TabIndex
     * author : Nguyễn Văn Ninh 30/07/2022
     */
    reLoopIndex(e) {
      if (e.key == "Tab") this.$refs.txtEmployeeCode.focus();
    },
    /**
     * Show Dialog Message Dữ liệu đã bị thay đổi bạn có muốn cất không
     * author : Nguyễn Văn Ninh 30/07/2022
     */
    showMsgChange() {
      this.isShowMsgChange = true;
      this.Message = "Dữ liệu đã bị thay đổi. Bạn có muốn cất không?";
    },
    /**
     * Close Dialog Message Dữ liệu đã bị thay đổi bạn có muốn cất không
     * author : Nguyễn Văn Ninh 30/07/2022
     */
    closeMsgChange() {
      this.isShowMsgChange = false;
    },
    /**
     * Close Dialog Message Dữ liệu đã bị thay đổi bạn có muốn cất không và đóng luôn Dialog thêm nhân viên
     * author : Nguyễn Văn Ninh 30/07/2022
     */
    closeExitMsgChange() {
      this.isShowMsgChange = false;
      this.$emit("__isShowDialog", false);
    },
    /**
     * Show ToastMessage xóa nhân viên thành công
     * author : Nguyễn Văn Ninh 30/07/2022
     */
    showDeleteSuccess() {
      this.isDialogDeleteSuccess = true;
      this.MessageDeleteSuccsess = "Sửa nhân viên thành công !";
      setTimeout(() => {
        this.isDialogDeleteSuccess = false;
      }, 3000);
    },
    /**
     * Đóng cửa sổ đã tồn tại mã nhân viên
     * author : Nguyễn Văn Ninh 25/07/2022
     */
    closeNotNameEmpty() {
      this.notNameEmpty = false;
    },
    /**
     * Đóng cửa sổ thêm nhân viên thành công
     * author : Nguyễn Văn Ninh 13/07/2022
     */
    closeDeleteSuccess() {
      this.isDialogDeleteSuccess = false;
    },
    /**
     * Đống cửa sổ thêm nhân viên
     * author : Nguyễn Văn Ninh 13/07/2022
     */
    btnCloseOnClick() {
      if (this.isChange) {
        this.showMsgChange(true);
      } else {
        this.$emit("__isShowDialog", false);
      }
    },
    /**
     * Hủy thêm nhân viên
     * author : Nguyễn Văn Ninh 13/07/2022
     */
    btnQuitOnClick() {
      // document.getElementById("dlgDialog").style.display = "block" ;
      this.$emit("__isShowDialog", false);
    },

    /**
     * Format Number
     */
    inputNumberFormat() {
      var value = event.currentTarget.value;
      if (value) {
        value = Intl.NumberFormat().format(value);
      }
      console.log(value);
    },
    /**
     * Validate thông tin nhập vào
     */

    validateRequired() {
      var value = event.currentTarget.value;
      if (!value) {
        event.currentTarget.classList.add("m-input-error");
        event.currentTarget.setAttribute(
          "title",
          "Thông tin này không được phép để trống"
        );
      } else {
        event.currentTarget.classList.remove("m-input-error");
        event.currentTarget.setAttribute("title", "");
      }
    },
    /**
     * Validate Data
     */
    validateData() {
      var isValid = true;
      if (!this.employee.EmployeeCode) {
        isValid = false;
        this.$refs["txtEmployeeCode"].classList.add("m-input-error");
        this.$refs["txtEmployeeCode"].setAttribute(
          "title",
          "Thông tin này không được phép để trống"
        );
      }
      if (!this.employee.EmployeeName) {
        isValid = false;
        this.$refs["txtFullName"].classList.add("m-input-error");
        this.$refs["txtFullName"].setAttribute(
          "title",
          "Thông tin này không được phép để trống"
        );
      }
      return isValid;
    },
    clear() {},
    /**
     * Hàm cất nhân viên
     * author : Nguyễn Văn Ninh 15/07/2022
     */

    btnSaveOnClick() {
      var me = this;
      var isValid = me.validateData();
      if (!isValid) {
        return;
      }
      // 1.Validate du lieu
      //2. Lay thong tin nhan vien
      //3.Goi Api thuc hien them moi
      // 3. 1 Kiem tra trang thai form la them moi hay sua
      if (this.formMode == 1) {
        axios
          .post("https://amis.manhnv.net/api/v1/Employees", me.employee)
          .then(function () {
            me.$emit("__isShowDialog", false);
            me.$emit("__loadData", true);
            me.showDeleteSuccess(true);
          })
          .catch((error) => {
            let response = error.response;
            switch (response.status) {
              case 400:
              case 500:
                var userMsg = response.data["userMsg"];
                alert(userMsg);
                break;
              default:
                break;
            }
          });
      } else {
        axios
          .put(
            `https://amis.manhnv.net/api/v1/Employees/${me.employeeSelectedId}`,
            me.employee
          )
          .then(function () {
            me.$emit("__isShowDialog", false);
            me.$emit("__loadData", true);
            me.showDeleteSuccess(true);
            me.isShowMsgChange = false;
            //Loading lai du lieu
          })
          .catch(function (error) {
            let response = error.response;
            switch (response.status) {
              case 400:
              case 500:
                var userMsg = response.data["userMsg"];
                alert(userMsg);
                break;
              default:
                break;
            }
          });
      }

      //4.Neu them moi thanh cong thi hien thi Toast Message

      // 5 . Neu co loi tu bac-end hoac loi validate thi hien thi thong bao tuong ung
    },

    btnSaveAddOnClick() {
      var me = this;
      var isValid = me.validateData();
      if (!isValid) {
        return;
      }
      // 1.Validate du lieu
      //2. Lay thong tin nhan vien
      //3.Goi Api thuc hien them moi
      // 3. 1 Kiem tra trang thai form la them moi hay sua
      if (this.formMode == 1) {
        axios
          .post("https://amis.manhnv.net/api/v1/Employees", me.employee)
          .then(function () {
            // me.$emit("__isShowDialog", false);
            me.$emit("__loadData", true);
            me.showDeleteSuccess(true);
            me.empty();
            me.$emit("__emptyForm");
            // me.$emit("__getNewEmployeeCode")
          })
          .catch((error) => {
            let response = error.response;
            switch (response.status) {
              case 400:
              case 500:
                var userMsg = response.data["userMsg"];
                alert(userMsg);
                break;
              default:
                break;
            }
          });
      } else {
        axios
          .put(
            `https://amis.manhnv.net/api/v1/Employees/${me.employeeSelectedId}`,
            me.employee
          )
          .then(function () {
            me.showDeleteSuccess(true);
            // me.$emit("__isShowDialog", false);
            me.$emit("__loadData", true);
            me.empty();
            me.employeeSelected = {};
            me.$emit("__emptyForm");
            // me.$emit("__getNewEmployeeCode")
            //Loading lai du lieu
          })
          .catch(function (error) {
            let response = error.response;
            switch (response.status) {
              case 400:
              case 500:
                var userMsg = response.data["userMsg"];
                alert(userMsg);
                break;
              default:
                break;
            }
          });
      }

      //4.Neu them moi thanh cong thi hien thi Toast Message

      // 5 . Neu co loi tu bac-end hoac loi validate thi hien thi thong bao tuong ung
    },
  },
  filters: {
    formatDateFilter: function (dob) {
      if (dob) {
        dob = new Date(dob);
        let date = dob.getDate();
        date = date < 10 ? `0${date}` : date;
        let month = dob.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let year = dob.getFullYear();
        dob = `${date}/${month}/${year}`;
      } else {
        dob = "";
      }
      return dob;
    },
  },
  setup() {
    return {};
  },
  props: [
    "isShow",
    "employeeSelected",
    "employeeSelectedId",
    "formMode",
    "newEmployeeCode",
  ],
  watch: {
    deep: true,
    employee: function () {
      this.isChange = true;
    },
    newEmployeeCode: function (newValue) {
      this.employee.EmployeeCode = newValue;
      this.$refs.txtEmployeeCode.focus();
    },

    // isShow: function (value) {
    //     alert(value)
    // },

    employeeSelected: function (value) {
      //this.employee = value;
      // alert(value)
      console.log(value);
    },
    employeeSelectedId: function (value) {
      // this.employee = value;
      //alert(value)
      var me = this;
      if (value) {
        // Call Api thuc hien
        //Hien thi loading
        axios
          .get(
            `https://amis.manhnv.net/api/v1/Employees/${this.employeeSelectedId}`
          )
          .then((response) => {
            switch (response.status) {
              case 200:
                me.employee = response.data;
                break;
              case 201:
                break;
              default:
                break;
            }
            // An loading
          })
          .catch((error) => {
            switch (error.status) {
              case 400:
                //Dua ra canh bao loi
                console.log("BAD REQUEST");
                break;
              case 404:
                break;
              default:
                break;
            }
          })
          .finally(() => (this.loading = false));
      } else {
        /**
         * Reset lai thong tin
         */
        me.employee = {};
        /**
         * Gọi lấy mã nhân viên mới
         */
        axios
          .get(
            `https://amis.manhnv.net/api/v1/Employees/NewEmployeeCode/${this.employeeSelectedId}`
          )
          .then(function (res) {
            me.employee.EmployeeCode = res.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
/**
* Style DatePicker
 */
.mx-input {
  height: 32px !important;

  border: 1px solid #babec5;
  border-radius: 2px;
}
.mx-input:hover {
  border: 1px solid #e2e2e2;
}
.mx-input::placeholder {
  font-size: 12px;
  color: #949494;
  font-style: italic;
}
.mx-input:focus {
  border: 1px solid #2ca01c;
}
.mx-input-wrapper {
  width: 162px !important;
}

@import url("../../../style/base/button.css");
@import url("../../../style/layout/menu.css");
@import url("../../../style/layout/navbar.css");
@import url("../../../style/layout/main-content.css");
@import url("../../../style/layout/popup.css");
@import url("../../../style/layout/content.css");
@import url("../../../style/main.css");
</style>
