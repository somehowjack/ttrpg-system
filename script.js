var btn = document.createElement('button');

btn.id = 'send';
btn.classList = 'btn-success';
btn.innerHTML = 'Send Now';

console.log(btn.id);
console.log(btn.classList);
console.log(btn.innerHTML);

document.getElementById('wrapper').append(btn);