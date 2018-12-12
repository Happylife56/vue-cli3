import { Loading, Message } from 'element-ui';

export default {
  // 时间的格式化
  setTime(time, format) {
    const that = this;
    var t = new Date(time);
    var tf = function(i) {
      return (i < 10 ? '0' : '') + i;
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
      switch (a) {
        case 'yyyy':
          return tf(t.getFullYear());
          break;
        case 'MM':
          return tf(t.getMonth() + 1);
          break;
        case 'mm':
          return tf(t.getMinutes());
          break;
        case 'dd':
          return tf(t.getDate());
          break;
        case 'HH':
          return tf(t.getHours());
          break;
        case 'ss':
          return tf(t.getSeconds());
          break;
      }
    });
  },

  //节流函数  atleast 隔一段事件执行一次
  throttle(fn, delay, atleast) {
    var timer = null;
    var previous = null;

    return function() {
      var now = +new Date();

      if (!previous) previous = now;
      if (atleast && now - previous > atleast) {
        fn();
        // 重置上一次开始时间为本次结束时间
        previous = now;
        clearTimeout(timer);
      } else {
        clearTimeout(timer);
        timer = setTimeout(function() {
          fn();
          previous = null;
        }, delay);
      }
    };
  },

  //验证(validate)

  //去除空格
  tirm(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
  },
  //手机的验证
  validatePhone(str) {
    const that = this;
    const res = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
    if (str == '') {
      Message({
        message: '手机号码输入框不能为空',
        type: 'warning'
      });
      return false;
    }
    if (!res.test(str)) {
      Message({
        message: '手机号码格式不正确！',
        type: 'warning'
      });
      return false;
    } else {
      return true;
    }
  },
  //电话的验证
  validateTel(str) {
    const that = this;
    const res = /^(?:(?:0\d{2,3})-)?(?:\d{7,8})(-(?:\d{3,}))?$/;
    if (str == '') {
      Message({
        message: '电话号码输入框不能为空',
        type: 'warning'
      });
      return false;
    }
    if (!res.test(str)) {
      Message({
        message: '电话号码格式不正确！',
        type: 'warning'
      });
      return false;
    } else {
      return true;
    }
  },
  //手机号码或者电话的验证
  validatePhoneOrTel(str) {
    const that = this;
    const res = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(19[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$|^(?:(?:0\d{2,3})-)?(?:\d{7,8})(-(?:\d{3,}))?$/;
    if (str == '') {
      Message({
        message: '输入框不能为空',
        type: 'warning'
      });
      return false;
    }
    if (!res.test(str)) {
      Message({
        message: '手机号码或者电话号码格式不正确！',
        type: 'warning'
      });
      return false;
    } else {
      return true;
    }
  },
  //数字的验证
  validateNum(str, text) {
    const that = this;
    const res = /^[0-9]*$/;
    if (str == '') {
      Message({
        message: text + '输入框不能为空',
        type: 'warning'
      });
      return false;
    }
    if (!res.test(str)) {
      Message({
        message: text + '输入框只能输入整数数字 ',
        type: 'warning'
      });
      return false;
    } else {
      return true;
    }
  },
  //数字或者小数点后四位
  validatePointFour(str, text) {
    const that = this;
    if (str == '') {
      Message({
        message: text + '输入框不能为空',
        type: 'warning'
      });
      return false;
    }
    const res = /^[0-9]*$|^[0-9]+[\.]{1}[0-9]{1,4}$/;
    if (!res.test(str)) {
      Message({
        message: text + '只能输入数字或者小数点后四位',
        type: 'warning'
      });
      return false;
    } else {
      return true;
    }
  },
  //数字或者小数点后两位
  validatePoint(str, text) {
    const that = this;
    if (str == '') {
      Message({
        message: text + '输入框不能为空',
        type: 'warning'
      });
      return false;
    }
    const res = /^[0-9]*$|^[0-9]+[\.]{1}[0-9]{1,2}$/;
    if (!res.test(str)) {
      Message({
        message: text + '只能输入数字或者小数点后两位',
        type: 'warning'
      });
      return false;
    } else {
      return true;
    }
  },
  //数字或者小数点后一位
  validatePointOne(str, text) {
    const that = this;
    if (str == '') {
      Message({
        message: text + '输入框不能为空',
        type: 'warning'
      });
      return false;
    }
    const res = /^[0-9]*$|^[0-9]+[\.]{1}[0-9]{1}$/;
    if (!res.test(str)) {
      Message({
        message: text + '只能输入数字或者小数点后一位',
        type: 'warning'
      });
      return false;
    } else {
      return true;
    }
  },
  //价格自动补齐小数点两位
  autoTwoBits(value) {
    value = Math.round(parseFloat(value) * 100) / 100;
    const str = value.toString().split('.');
    if (str.length == 1) {
      value = value.toString() + '.00';
      return value;
    }
    if (str.length > 1) {
      if (str[1].length < 2) {
        value = value.toString() + '0';
        return value;
      } else {
        return value;
      }
    }
  }
};
