function solution(n1) {
  return (n2) => n1 + n2;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
