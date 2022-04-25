// Store the wallet amount to your local storage with key "amount"
var get = localStorage.getItem('amount') || 0;
console.log(get)
document.querySelector('#wallet').innerText = get;
// console.log(get)
const getamount = document.querySelector('#add_to_wallet');

getamount.onclick = () => {
    const Enteramount = document.querySelector('#amount').value;

    const totalamount = Number(get) + Number(Enteramount);




    localStorage.setItem('amount', totalamount);

    window.location.reload();
    // localStorage.clear();
}
document.querySelector('#book_movies').addEventListener('click', gomoviepage);

function gomoviepage() {
    window.location.href = 'movies.html';
}