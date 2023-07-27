let List1 = ['Hyderabad', 'Bangalore', 'Chennai', 'Delhi', 'Pune', 'Kolkata'];
let List2 = ['Gujarat', 'Pune', 'Rajasthan', 'Bangalore', 'Vizag', 'Delhi'];

//let uniqueList1 = list1.filter(user => !list2.includes(user));
let uniqueList1 = List1.filter(user => !List2.includes(user));
console.log(uniqueList1);

//Get a unique set of users from List2 which are not in List1
let uniqueList2 = List2.filter(user => !List1.includes(user));
console.log(uniqueList2);

//c. Get a set of users who are present in in List1 and List2 both (intersection of list1 & list2)
let commonElements = List2.filter(user => List1.includes(user));
console.log(commonElements);