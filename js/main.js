let x;
let li;
let btn;
let row;
let p;
// let change;





function f1() {
  x = document.querySelector('.text').value;
  btn = document.createElement('button');
  row = document.createElement('button');
  // change = document.createElement('button');
  p = document.createElement('p');

  p.classList.add('text-1');
  row.classList.add('btn-1');
  // change.classList.add('btn-3');
  btn.classList.add('btn');
p.textContent = x;
row.innerHTML = '<img src="images/galka.png" alt="">';
btn.innerHTML = '<img src="images/lastik.png" alt="">';
// change.innerHTML = '<img src="images/pen.png" alt="">';
  li = document.createElement('li');
  li.classList.add('item');
  li.append(p);
  // li.append(change);
  li.append(btn);
  li.append(row);
console.log(li);

  function f2(){
    this.parentNode.remove();
  }

  btn.onclick = f2;

  function f3(){

    this.parentNode.classList.add('cherk');
  
  }

  row.onclick = f3;

  // function f4(){
  //   document.querySelector('.text-1').innerHTML = x;
  //   // document.querySelector('.item-' + (i-1)).remove();
  // }


  // change.onclick = f4;

  
 document.querySelector('.list').append(li);
}

document.querySelector('.button').onclick = f1;


