<template>
  <div class="m-main-content">
    <div class="m-content-header">
      <div class="m-header-di">
        <div class="m-header-title">Nhân viên</div>
        <button
          id="btnAdd"
          @click="btnAddOnClick"
          class="m-button m-button-add-emp"
        >
          <div class="m-button-text">Thêm mới nhân viên</div>
        </button>
      </div>
    </div>
    <div class="m-content-body">
      <div class="m-body-toolbar">
        <div class="chose-all">
          <button class="chose-all-btn">Thực hiện hàng loạt
            <div ref="iconDrop" class="m-icon-16 m-icon-arrow-dropdown m-icon-position"></div>
          </button>
           
        </div>
        <div class="m-search-area">
          <input
            v-model="txtSearch"
            @input="filterEmployee"
            type="text"
            class="m-input m-input-icon m-input-search m-search-emp"
            placeholder="Tìm theo mã, tên nhân viên"
            v-on:input="debounceInput"
          />
          <div class="m-icon-after m-icon-16 m-icon-search"></div>
        </div>
        <div
          @click="change"
          class="m-refresh-button m-icon-24 m-icon-refresh"
        ></div>
        <div
          @click="change"
          class="m-refresh-button m-icon-24 m-icon-export"
        ></div>
      </div>
      <div class="m-body-table">
        <table id="tblEmployee" class="m-table">
          <thead class="m-thead">
            <tr class="m-tr">
              <th class="m-out-left-white-16" style="top: -78px"></th>
              <th class="m-th m-checkall" style="left: 16px; top: -87px">
                <label class="m-table-checkbox">
                  <input
                    @click="handleEvent"
                    type="checkbox"
                    class="m-input-checkall"
                  />
                  <span class="m-checkbox">
                    <span class="m-checkbox-inner">
                      <div class="m-icon-16 m-icon-checkbox-active"></div>
                    </span>
                  </span>
                </label>
              </th>
              <th
                class="m-th m-dynamic-col"
                style="min-width: 143px; width: 143px; top: -87px"
              >
                <div class="m-th-title">Mã nhân viên</div>
              </th>
              <th
                class="m-th m-dynamic-col"
                style="min-width: 173px; top: -87px"
              >
                <div class="m-th-title">Tên nhân viên</div>
              </th>
              <th
                class="m-th m-dynamic-col"
                style="min-width: 120px; width: 120px; top: -87px"
              >
                <div class="m-th-title">Giới tính</div>
              </th>
              <th
                class="m-th m-dynamic-col"
                style="min-width: 145px; width: 145px; top: -87px"
              >
                <div
                  class="m-th-title text-align-center"
                  style="text-align: center"
                >
                  Ngày sinh
                </div>
              </th>
              <th
                class="m-th m-dynamoc-col"
                style="min-width: 122px; width: 122px; top: -87px"
              >
                <div class="m-th-title">Chức danh</div>
              </th>
              <th
                class="m-th m-dynamic-col"
                style="min-width: 200px; width: 200px; top: -87px"
              >
                <div class="m-th-title">Số CMND</div>
              </th>
              <th
                class="m-th m-dynamic-col"
                style="min-width: 250px; top: -87px"
              >
                <div class="m-th-title">Tên đơn vị</div>
              </th>
              <th
                class="m-th m-dynamic-col"
                style="min-width: 150px; width: 150px; top: -87px"
              >
                <div class="m-th-title">Số tài khoản</div>
              </th>
              <th
                class="m-th m-dynamic-col"
                style="min-width: 250px; width: 250px; top: -87px"
              >
                <div class="m-th-title">Tên ngân hàng</div>
              </th>
              <th
                class="m-th m-dynamic-col"
                style="min-width: 250px; width: 250px; top: -87px"
              >
                <div class="m-th-title">Chi nhánh TK ngân hàng</div>
              </th>
              <th
                class="m-th m-dynamic-col"
                style="min-width: 150px; width: 150px; top: -87px"
              >
                <div class="m-th-title">Chi nhánh</div>
              </th>
              <th
                class="m-th m-th-widget"
                style="right: 30px; width: 120px; min-width: 120px; top: -87px"
              >
                <div class="m-th-title">Chức năng</div>
              </th>
              <th class="m-out-right-white-30" style="top: -87px"></th>
              <th class="m-out-right-grey-30" style="top: -87px"></th>
            </tr>
          </thead>
          <tbody class="m-tbody">
            <tr
              v-for="employee in employees"
              :key="employee.EmployeeId"
              @dblclick="rowDblClick(employee)"
              class="m-tr"
            >
              <td class="m-out-left-white-16"></td>
              <td class="m-td m-td-multi" style="left: 16px">
                <label class="m-table-checkbox">
                  <input
                    @click="exitHandleEvent"
                    type="checkbox"
                    class="m-input-checkbox"
                  />
                  <span class="m-checkbox">
                    <span class="m-checkbox-inner">
                      <div class="m-icon-16 m-icon-checkbox-active"></div>
                    </span>
                  </span>
                </label>
              </td>
              <td class="m-td m-td-emp-code">{{ employee.EmployeeCode }}</td>
              <td class="m-td">{{ employee.EmployeeName }}</td>
              <td class="m-td">{{ employee.GenderName }}</td>
              <td class="m-td" style="text-align: center">
                {{ formatDate(employee.DateOfBirth) }}
              </td>
              <td class="m-td">{{ employee.EmployeePosition }}</td>
              <td class="m-td">{{ employee.IdentityNumber }}</td>
              <td class="m-td">{{ employee.DepartmentName }}</td>
              <td class="m-td">{{ employee.BankAccountNumber }}</td>
              <td class="m-td">{{ employee.BankName }}</td>
              <td class="m-td">{{ employee.BankBranchName }}</td>
              <td class="m-td">{{ employee.BankProvinceName }}</td>
              <td class="m-td m-td-widget" style="right: 30px">
                <div class="m-dropdown">
                  <button
                    @click="eidtOnClick(employee)"
                    class="m-dropdown-type-feature m-dropdown-btn-text m-edit-employee"
                  >
                    <div class="m-btn-text">Sửa</div>
                  </button>
                  <button
                    @click="(e) => btnOpenDropDown(e, employee.EmployeeId)"
                    class="m-dropdown-type-feature m-dropdown-btn-icon m-dropdown-icon-emp"
                  >
                    <div class="m-btn-text">
                      <div class="m-icon-16 m-icon-arrow-down-blue"></div>
                    </div>
                  </button>
                </div>
              </td>
              <td class="m-out-right-white-30"></td>
              <td class="m-out-right-grey-30"></td>
            </tr>
          </tbody>
        </table>
        <div class="m-pagination" style="width: 2189px; display: flex">
          <div class="m-pagination-bar">
            <div class="m-pagination-left">
              <div class="m-total-record">
                Tổng số: <b>{{ totalRecord }}</b> bản ghi
              </div>
            </div>
            <div class="m-pagination-right">
              <ComboboxDepartment
                ref="cbx"
                @blur="validateRequired"
                :spinnable="true"
                :tabindex="-1"
              >
                <template #tbodyTable>
                  <tbody class="m-menu-items m-departments-list">
                    <tr 
                      class="m-menu-items-tr"
                      @click.prevent.stop="changePageSize(10)"
                    >
                      <td
                        class="m-menu-items-td"
                        style="width: 226px; text-align: left"
                      >
                        <span>10 bản ghi trên 1 trang</span>
                      </td>
                    </tr>
                    <tr
                      class="m-menu-items-tr"
                      @click.prevent.stop="changePageSize(20)"
                    >
                      <td
                        class="m-menu-items-td"
                        style="width: 226px; text-align: left"
                      >
                        <span>20 bản ghi trên 1 trang</span>
                      </td>
                    </tr>
                    <tr
                      class="m-menu-items-tr"
                      @click.prevent.stop="changePageSize(30)"
                    >
                      <td
                        class="m-menu-items-td"
                        style="width: 226px; text-align: left"
                      >
                        <span>30 bản ghi trên 1 trang</span>
                      </td>
                    </tr>
                    <tr
                      class="m-menu-items-tr"
                      @click.prevent.stop="changePageSize(50)"
                    >
                      <td
                        class="m-menu-items-td"
                        style="width: 226px; text-align: left"
                      >
                        <span>50 bản ghi trên 1 trang</span>
                      </td>
                    </tr>
                    <tr
                      class="m-menu-items-tr"
                      @click.prevent.stop="changePageSize(100)"
                    >
                      <td
                        class="m-menu-items-td"
                        style="width: 226px; text-align: left"
                      >
                        <span>100 bản ghi trên 1 trang</span>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </ComboboxDepartment>
              <paginate
                :page-count="totalPage"
                :page-range="3"
                :margin-pages="2"
                :click-handler="clickCallback"
                :prev-text="'Trước'"
                :next-text="'Sau'"
                :container-class="'pagination'"
                :page-class="'page-item'"
              >
              </paginate>
            </div>
          </div>
          <div class="m-out-right-white-30"></div>
          <div class="m-out-right-grey-30"></div>
        </div>
      </div>
    </div>
  
    <EmployeeDetail
      :employeeSelected="employeeSelected"
      :employeeSelectedId="employeeSelectedId"
      :newEmployeeCode= "newEmployeeCode"
      :formMode="formDetailMode"
      :isShow="isShowDialog"
      @__emptyForm ="emptyForm"
      @__isShowDialog="showEmployeeDetailDialog"
      @__loadData="change"
      @__showPopup="showPopup"
      @__getNewEmployeeCode="getNewEmployeeCode"
    />
    <div
      :style="{ top: positionMenuY + 'px', right: positionMenuX + 'px' }"
      id="DropDialog"
      v-show="isShowDrop"
      class="m-dropdown-menu m-dropdown-emp"
    >
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
     <div class="m-loading-svg" v-if="showLoading">
    <div class="m-icon-loading"></div>
  </div>
  <DialogMsg v-if="isPopup" :Message="Message" iconList="m-icon-48 m-icon-warning">
    <button
      class="m-button m-button-secondary m-close-delete-warning m-button-size-default m-button-border-false"
    >
      <div class="m-button-text" @click="closePopup">Không</div>
    </button>
    <button
      class="m-button m-confirm-delete m-button-size-default m-button-border-false"
    >
      <div class="m-button-text" @click="DeleteEmployee">Có</div>
    </button>
  </DialogMsg>
   
</div>
 
  <ToastMessage v-if="isDialogDeleteSuccess" :MessageDeleteSuccsess="MessageDeleteSuccsess"></ToastMessage>
 
</template>

<script>
import _ from 'lodash';
import axios from "axios";
import Paginate from "vuejs-paginate-next";
import $ from "jquery";
import ComboboxDepartment from "../../base/combobox/ComboboxDepartment.vue";
import DialogMsg from "../../base/popup/DialogMsg.vue";
import ToastMessage from "../../base/toastmessage/ToastMessage.vue";
import EmployeeDetail from "./EmployeeDetail.vue";
export default {
  name: "EmployeeList",
  components: {
    EmployeeDetail,
    ComboboxDepartment,
    DialogMsg,
    ToastMessage,
    paginate: Paginate,
  },
  data() {
    return {
      page: 10,
      employees: null,
      isActive: false,
      isShowDialog: false,
      isShowDepartDown: false,
      isShowDepart: false,
      employeeSelected: {},
      employeeSelectedId: null,
      formDetailMode: 0,
      positionMenuX: 0,
      positionMenuY: 0,
      showLoading: false,
      questionDialog: false,
      showDialogMsg: false,
      isPopup: false,
      isDialogDeleteSuccess: false,
      txtSearch: "",
      pageSize: 10,
      pageNumber: 1,
      totalPage: 1,
      totalRecord: 40,
      newEmployeeCode: null,
      searchInput: '',
    filterKey: ''
    };
  },

  created() {
    this.filterEmployee();
  },
  mounted: function () {


    this.$refs.cbx.setValue("10 bản ghi trên 1 trang");
    /**********************************************
     * Xử lý các sự kiện liên quan đến checkbox
     * 1. Người dùng tích check all
     */
    $(".m-input-checkall").click(function () {
      $(".m-input-checkbox").prop("checked", $(this).prop("checked"));
      $(".m-input-checkbox").parents("tr").addClass("checked");
    });
    // 2. Người dúng tích 1 dòng
    $(document).on("change", ".m-input-checkbox", function () {
      // Làm nổi bật dòng đang tích
      let trElement = $(this).parents("tr");
      if ($(this).prop("checked")) {
        trElement.addClass("checked");
      } else {
        trElement.removeClass("checked");
      }
      let checkAll = true;
      // Kiểm tra tất cả các checkbox
      $(".m-input-checkbox").each(function () {
        if (!$(this).prop("checked")) {
          checkAll = false;
        }
      });
      // Nếu tất cả đều check thì tích checkall
      if (checkAll) {
        $(".m-input-checkall").prop("checked", true);
      }
      // Nếu bỏ tích 1 dòng thì bỏ tích check all
      if (!$(this).prop("checked")) {
        $(".m-input-checkall").prop("checked", false);
      }
    });
    // 3. Làm nổi bật dòng người người dùng click trên bảng
    $(document).on("click", ".m-tr", function () {
      const focusElement = $(this);
      $(".m-tr").each(function () {
        if (
          $(this) !== focusElement &&
          !$(this).find(".m-input-checkbox").prop("checked")
        ) {
          $(this).removeClass("checked");
        }
      });
      focusElement.addClass("checked");
    });
  },
  updated: function () {},

  methods: {
    debounceInput: _.debounce(function (e) {
    this.filterKey = e.target.value;
  }, 1000),
      /**
     * Hàm thay đổi và load lại phân trang
     * author : Nguyễn Văn Ninh 30/07/2022
     */
    changePageSize(pSize) {
      this.pageSize = pSize;
      this.filterEmployee();

      this.$refs.cbx.clickItem(`${pSize} bản ghi trên 1 trang`);
      this.showLoading = true;
       setTimeout(() => {
        this.showLoading = false;
      }, 1000);
    }, 
      /**
     * Show ToastMessage xóa nhân viên thành công
     * author : Nguyễn Văn Ninh 30/07/2022
     */
    showDeleteSuccess() {
      this.isDialogDeleteSuccess = true;
      this.MessageDeleteSuccsess = "Xoá nhân viên thành công !"
       setTimeout(() => {
        this.isDialogDeleteSuccess = false;
      }, 3000);
    },
    /**
     * Hàm đóng popup xóa nhân viên
     * author : Nguyễn Văn Ninh 15/07/2022
     */
    closePopup() {
      this.isPopup = false;
    },
    /**
     * Hàm show popup xóa nhân viên
     * author : Nguyễn Văn Ninh 15/07/2022
     */
    showPopup() {
      this.isPopup = true;
      this.Message =
        "Bạn có muốn xóa nhân viên " + this.employeeSelected.EmployeeCode;
      this.isShowDrop = false;
    },

    /**
     * Hàm xóa 1 nhân viên
     * author : Nguyễn Văn Ninh 15/07/2022
     */

    DeleteEmployee() {
      var me = this;
      axios
        .delete(
          `https://amis.manhnv.net/api/v1/Employees/${me.employeeSelectedId}`,
          me.employee
        )
        .then(function () {
          me.isPopup = false;
          me.change();
           me.showDeleteSuccess(true)
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    /**
     * Hàm refresh data
     * author : Nguyễn Văn Ninh 15/07/2022
     */
    async change() {
      // this.questionDialog = !this.questionDialog
      this.showLoading = true;
      await axios
        .get("https://amis.manhnv.net/api/v1/Employees")
        .then((response) => {
          console.log(response.data);
          this.employees = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
      setTimeout(() => {
        this.showLoading = false;
      }, 1000);
    },
    /**
     * Hàm lọc nhân viên
     * author : Nguyễn Văn Ninh 15/07/2022
     */
    filterEmployee(e) {
      var me = this;
      var url = `https://amis.manhnv.net/api/v1/Employees/filter?pageSize=${me.pageSize}&pageNumber=${me.pageNumber}&employeeFilter=${me.txtSearch}`;

      axios.get(url).then(function (res) {
        console.log(res);
        me.totalPage = res.data.TotalPage;
        me.totalRecord = res.data.TotalRecord;
        console.log(res.data.TotalRecord);
        me.isSuccess = true;
        me.employees = res.data.Data;
        setTimeout(function () {
          me.isSuccess = false;
          me.filterKey = e.target.value;
        }, 3000);
      });
    },
    /**
     * Hàm phân trang trước và sau
     * author : Nguyễn Văn Ninh 13/07/2022
     */
    clickCallback(pageNum) {
      this.pageNumber = pageNum;
      this.filterEmployee();
    },
    /**
     * Mở dialog thêm nhân viên
     * author : Nguyễn Văn Ninh 13/07/2022
     */

    getNewEmployeeCode() {
      try {
        var me = this;
        axios
          .get("https://amis.manhnv.net/api/v1/Employees/NewEmployeeCode")
          .then((res) => {
            me.newEmployeeCode = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    },
  /**
     * Mở dialog thêm nhân viên
     * author : Nguyễn Văn Ninh 13/07/2022
     */

    btnAddOnClick() {
      // document.getElementById("dlgDialog").style.display = "block" ;
      this.employeeSelected = {};
      this.formDetailMode = 1;
      this.employeeSelectedId = null;
      this.showEmployeeDetailDialog(true);
      this.getNewEmployeeCode()
    },
    /**
     * Hiển thị dialog thêm nhân viên
     * @param {Boolean} isShow - true la hien thi form chi tiet - false la an di form chi tiet nhan vien
     */
    showEmployeeDetailDialog(isShow) {
      this.isShowDialog = isShow;
    },

    /**
     * Mở dialog recording
     * author : Nguyễn Văn Ninh 13/07/2022
     *
     */
    btnOpenRecord() {
      this.showRecord(true);
      $(".m-select-record").click(function () {
        let top = $(this).offset().top;
        let left = $(this).offset().left;
        let arrowElement = $(".m-icon-arrow-dropdown");
        $(".m-combo-dropdown-panel").css({
          top: top - 215,
          left: left - 345,
          display: "",
        });

        if (arrowElement.hasClass("m-dropdown-close")) {
          arrowElement.addClass("m-dropdown-open");
          arrowElement.removeClass("m-dropdown-close");
        } else {
          arrowElement.addClass("m-dropdown-close");
          arrowElement.removeClass("m-dropdown-open");
          $(".m-combo-dropdown-panel").css({ display: "none" });
        }
      });
    },
    /**
     * Hiển thị dialog bản ghi
     * @param {Boolean} isShowRecord - true la hien thi form chi tiet - false la an di form chi tiet nhan vien
     */
    showRecord() {
      this.isShowRecordDown = !this.isShowRecordDown;
    },
    /**
     * Hàm show drop xóa nhân viên
     * author : Nguyễn Văn Ninh 15/07/2022
     */

    btnOpenDropDown(e, id) {
      const screenY = document.body.clientHeight;
      const screenX = document.body.clientWidth;
      this.positionMenuX = screenX - e.x - 145;
      this.positionMenuY = e.y - 45;
      if (screenY - this.positionMenuY < 150) {
        this.positionMenuY -= 110;
      }
      if (this.employeeSelectedId == id) {
        this.isShowDrop = false;
        this.employeeSelectedId = undefined;
      } else {
        this.employeeSelectedId = id;
        this.isShowDrop = true;
      }
    },

    /**
     * Double Click Hien thi thong tin nhan vien
     * author : Nguyễn Văn Ninh 13/07/2022
     */

    rowDblClick(employee) {
      console.log(JSON.parse(JSON.stringify(employee)));
      this.formDetailMode = 0;
      this.employeeSelected = JSON.parse(JSON.stringify(employee));
      this.showEmployeeDetailDialog(true);
      this.employeeSelectedId = employee.EmployeeId;
    },

    /**
     * Sửa thông tin nhân viên
     * author : Nguyễn Văn Ninh 13/07/2022
     */

    eidtOnClick(employee) {
      console.log(JSON.parse(JSON.stringify(employee)));
      this.formDetailMode = 0;
      this.employeeSelected = JSON.parse(JSON.stringify(employee));
      this.showEmployeeDetailDialog(true);
      this.employeeSelectedId = employee.EmployeeId;
    },

    /**
     * Format Date định dạng mm/dd/yyyy
     */
    formatDate(dob) {
      try {
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
      } catch (error) {
        console.log(error);
      }
    },
  },
  setup() {
    return {};
  },
};
</script>

<style>
/**
***** Customize cho phân trang
 */
.pagination {
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding-top: 8px;
}
.page-item {
  margin: 0 8px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}

.page-item.disabled {
  width: 48px;
}
.page-item.active {
  border: 1px solid #dfdfdf;
  font-weight: 700;
}
.m-pagination-right .m-combo-menu {
  top: -167px !important;
  left: 0 !important;
  width: 226px;
  overflow: unset;
}

@import url("../../../style/base/button.css");
@import url("../../../style/base/dialog.css");
@import url("../../../style/layout/menu.css");
@import url("../../../style/layout/navbar.css");
@import url("../../../style/layout/main-content.css");
@import url("../../../style/layout/popup.css");
@import url("../../../style/layout/content.css");
@import url("../../../style/main.css");
</style>
