let color = "blue";

function func1() {
  let size = "large";

  function func2() {
    let number = "five";
  }

  func2();

  console.log(color);
  console.log(size);
  console.log(number);
}

func1();