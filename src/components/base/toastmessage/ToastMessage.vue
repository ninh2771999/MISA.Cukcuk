<template>
    <div class="m-toast-box">
            <div class="m-toast-item m-toast-success">
                <div class="m-icon-48 m-icon-success"></div>
                <div class="m-toast-text">{{MessageDeleteSuccsess}}</div>
                <span class="countdown"></span>
            </div>
        </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    },
        props: {
        MessageDeleteSuccsess: {
            MessageDeleteSuccsess: String
        }
    }
}
</script>

<style>
.m-toast-box {
    z-index: 9999;
    position: fixed;
    /* min-width: 200px;
    height: 50px;
    border: 1px solid #000; */
    bottom: 80%;
    right: 35px;  
    background-color: #fff;
    border-radius: 4px;
    animation: slideInLeft 0.5s;
    /* border-left: 6px solid #2ca01c; */
    overflow: hidden;
   animation: slide_show 3s ease forwards ;
   
}

.m-toast-box .m-toast-item {
    /* height: 48px; */
    display: flex;
    border-radius: 4px;
    color: #000;
    padding: 16px 8px 16px 16px;
    align-items: center;
    /* margin-bottom: 8px;
    margin-right: 8px; */
    /* box-shadow: 2px 2px 2px 2px #888888; */
     border-left: 6px solid #2ca01c;
}
.m-toast-box .countdown{
    background: #2ca01c;
    position: absolute;
    margin: 0;
    padding: 0;
    bottom: 0;
    left: 0;
    height: 6px;
    width: 100%;
    animation: countdown 3s ease forwards;
    
}
.m-toast-box .m-toast-item .m-toast-text {
    color: #000;
    margin: 0 16px 0 8px;
}

@keyframes slideInLeft {
    from {
      opacity: 1;
      transform: translateX(calc(100% + 32px));
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
@keyframes countdown {
    0%{
        width: 100%;
    }
    100%{
        width: 0%;
    }
}
@keyframes slide_show {
    0%{
        transform: translateX(100%);
    }
    25%{
        transform: translateX(-10%);
    }
    50%{
        transform: translateX(0%);
    }
    100%{
        transform: translateX(-10%);
    }
}

  /* Success */
.m-toast-box .m-toast-item.m-toast-success .m-toast-icon {
    color: #BAFFE7;
}

.m-toast-box .m-toast-item.m-toast-success .m-toast-close {
    color: #BAFFE7;
    cursor: pointer;
    
    font-size: 20px;
}

.m-toast-box .m-toast-item.m-toast-success .m-toast-close:hover {
    color: green;
}

@import url("../../../style/main.css");
@import url("../../../style/base/icon.css");
</style>