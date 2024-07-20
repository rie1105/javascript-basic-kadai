const date = new Date("2023-08-22");

const [month,day,year] = [
    date.getMonth()+1,
    date.getDate(),
    date.getFullYear(),
];

console.log([year]+"年"+[month]+"月"+[day]+"日");
