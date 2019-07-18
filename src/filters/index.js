// 金额类型
export const moneyType = val => {
  if (val) {
    return '￥' + val
  } else {
    return '￥' + 0
  }
}

// 数据类型
export const dataType = val => {
  if (val) {
    return val
  } else {
    return 0
  }
}

// 没有参数的处理
export const paramsType = val => {
  if (val) {
    return val
  } else {
    return '-'
  }
}

// 限制小数点后两位
export const rounding = val => {
  return val.toFixed(2)
}
