// bodlogo 1 Ugugdsun array iin hamgiin tom, hamgiin bagiin olj, dundajiin olj, min, max, avg gsn 3 utag butsaadag function bichih. jishee ni: input [1, 2, 3, 4, 5] output { min: 1, max: 5, avg: 3 }

let test = [1, 2, 3, 4, 5];

function utga(arr) {
  let min = arr[0];
  let max = arr[0];
  let ave = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum += arr.length;
  }
  ave = sum / arr.length;
  let odj = { min: min, max: max, avg: ave };
  //   return obj ;
  return { min: min, max: max, avg: ave };
}
let result = utga(test);
console.log("vr dvn:", result);
//   min = Math.min(...arr);
//   max = Math.max(...arr);

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     ave = sum / arr.length;
//   }
//   return min, max, ave;

// utga(test);
// console.log("min :", min, "max :", max, "average :", ave);
console.log("==================");

// bodlogo 2 Ugugdsun zahialguudiin niit borluulaltiin dun oldog function bichih.
const orders = [
  {
    orderId: 1,
    items: [
      { itemName: "Apple", price: 1 },
      { itemName: "Banana", price: 2 },
    ],
  },
  {
    orderId: 2,
    items: [
      { itemName: "Orange", price: 1.5 },
      { itemName: "Grapes", price: 3 },
    ],
  },
];
let priseall = 0;
function price(order) {
  console.log("work");
  for (let i = 0; i < order.length; i++) {
    console.log(order[i]);
    // let a = order[i].items.length;
    for (let j = 0; j < order[i].items.length; j++) {
      console.log(order[i].items[j]);
      priseall = priseall + order[i].items[j].price;
      console.log(order[i].items[j]);
    }
  }
  return priseall;
}
let s = price(orders);

console.log(s);
console.log("==============");

// bodlogo 3 Ugugdsun array iin anhnii utagtai bolon квадрат, куб iin oldog function bichih. jishee ni: input [1, 2, 3, 4, 5]
// output[
//   ({ original: 1, square: 1, cube: 1 },
//   { original: 2, square: 4, cube: 8 },
//   { original: 3, square: 9, cube: 27 },
//   { original: 4, square: 16, cube: 64 },
//   { original: 5, square: 25, cube: 125 })
// ];
kaw = 1;
kub = 1;
function kawkubfuc(num, kaw, kub) {
  num = Number(prompt("too oruul"));
  if (num !== 0) {
    kaw = num * num;
    kub = kaw * num;
  } else {
    console.log("'0' -s busad too oruul");
  }
  return { number: num, square: kaw, cube: kub };
}
let hariu = kawkubfuc();
console.log("result:", hariu);
console.log("================");
// bodlogo 4 Ugugdsun company iin data aas hamgiin ih tsalintai ajiltang oldog function bichih.
const company = {
  name: "TechCorp",
  address: "123 Silicon Valley",
  employees: [
    { name: "Alice", salary: 90000 },
    { name: "Bob", salary: 120000 },
    { name: "Charlie", salary: 110000 },
  ],
};
function findmaxsalaryname(companydata) {
  let ajilchid = companydata.employees;
  let maxsalary = ajilchid[0].salary;
  let maxsalaryname = "";
  for (let i = 0; i < ajilchid.length; i++) {
    console.log(ajilchid[i]);
    if (ajilchid[i].salary > maxsalary) {
      maxsalaryname = ajilchid[i].name;
      maxsalary = ajilchid[i].salary;
    }
  }
  return maxsalaryname;
}
let name = findmaxsalaryname(company);
console.log(name);
