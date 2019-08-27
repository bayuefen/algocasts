module.exports = [
  {
    input:['42'],
    output:42
  },
  {
    input:['   -42'],
    output:-42
  },
  {
    input:['4193 with words'],
    output:4193
  },
  {
    input:['words and 987'],
    output:0
  },
  {
    input:['-91283472332'],
    output:-2147483648
  }
];