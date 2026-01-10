//每个js file是一个默认的module，有自己的module.export object，
//在同一个文件里，是一个对象，多次的导出只是增加属性
module.exports.items = ['item1', 'item2'];
const person = {
    name : 'bob',
    age : '18'
};

module.exports.onePerson = person; //给这个文件的导出对象增加一个属性，并且和person保持相同，
// 但是在别的文件require后修改这个属性不会修改原本的person。