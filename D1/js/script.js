// Esercizio EXTRA 1

let twitter = document.querySelector('aside div:last-child li:nth-child(2)');
twitter.style.display = 'none';
        console.log(twitter);

// Esercizio EXTRA 2

let disappear = document.querySelector('.jumbotron p.lead > a');
let father = document.querySelector('.jumbotron');
console.log(father);

disappear.addEventListener('click',()=>{
    father.remove();
    return;
});

// Esercizio EXTRA 3

let authors = document.querySelectorAll('.blog-post-meta a');
console.log(authors);

for(let El of authors){
    El.addEventListener('mouseover',()=>{
        alert(El.innerText);
    })
}

// for(i=0; i<authors.length; i++){
//     let author = authors[i].innerText;
//     authors[i].addEventListener('');
//     return;
// }