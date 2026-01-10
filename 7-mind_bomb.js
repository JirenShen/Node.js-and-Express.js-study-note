const num1 = 5;
const num2 = 10;

function addValues() {
    console.log('The sum is:', num1+num2);
}

addValues();

//node会自己把这每一个文件做成一个module，
//(function (module, exports, require, __dirname, __filename) {
  // 你的代码...
//})
//其中就算exports那是空的，{}, 在别的函数require的时候还是会invoke这个文件的函数，导致文件内的函数被运行，
// 然后require没有得到任何东西因为这个文件没有export