// Type-1
// function myDateTime(){
//     return Date();
// }
// module.exports = {myDateTime};


// Type-2
exports.myDateTime = function () {
    return Date();
};


// Type-3
// function myDateTime(){
//     return Date();
// }
// exports.myDateTime = myDateTime();


// Type-4
// function myDateTime(){
//     return Date();
// }
// var date_time   =   myDateTime();
// module.exports = {date_time};