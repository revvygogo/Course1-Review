// initial counter
let dogVotesCount = 0;
let catVotesCount = 0;
let fishVotesCount = 0;
let totalVotesCount = dogVotesCount + catVotesCount + fishVotesCount;

// table cells
let dogVotesCell = document.querySelector('#doggo-votes');
let catVotesCell = document.querySelector('#catto-votes');
let fishVotesCell = document.querySelector('#fishy-votes');
let totalVotesCell = document.querySelector('#total-votes');

// -----------

// pulls dog votes from local storage
dogVotesCount = localStorage.getItem('dog-votes');
if (dogVotesCount){
    dogVotesCell.textContent = dogVotesCount;
}

// pulls cat votes from local storage
catVotesCount = localStorage.getItem('cat-votes');
if (catVotesCount){
    catVotesCell.textContent = catVotesCount;
}

//pull fish votes from local storage
fishVotesCount = localStorage.getItem('fish-votes');
if (fishVotesCount){
    fishVotesCell.textContent = fishVotesCount; 
}

// -----------

// button for doggo
let doggoVoteBtn = document.createElement('button');
doggoVoteBtn.textContent = "Vote for Doggo!";

// button for catto
let cattoVoteBtn = document.createElement('button');
cattoVoteBtn.textContent = "Vote for Catto!";

// button for fishy
let fishyVoteBtn = document.createElement('button');
fishyVoteBtn.textContent = "Vote for Fishy!";

// button to reset all counts
let resetBtn = document.createElement('button');
resetBtn.textContent = "Reset ALL Counts!"; 

// -----------

// append doggo button
let dogDiv = document.querySelector('#doggo');
dogDiv.append(doggoVoteBtn);

// append catto button
let catDiv = document.querySelector('#catto');
catDiv.append(cattoVoteBtn);

// append fishy button
let fishDiv = document.querySelector('#fishy');
fishDiv.append(fishyVoteBtn);

let containerDiv = document.querySelector('#voting-table');
containerDiv.append(resetBtn);

// -----------

// click event button for doggo
doggoVoteBtn.addEventListener('click', function(){
    let dogVotesCount = parseInt(dogVotesCell.textContent);
    dogVotesCount = dogVotesCount + 1;
    dogVotesCell.textContent = dogVotesCount;
    localStorage.setItem('dog-votes', dogVotesCount);
    totalVotesCell.textContent = totalVotesCount;
    //console.log(totalVotesCount)
})

// click event button for catto
cattoVoteBtn.addEventListener('click', function(){
    let catVotesCount = parseInt(catVotesCell.textContent);
    catVotesCount = catVotesCount + 1;
    catVotesCell.textContent = catVotesCount;
    localStorage.setItem('cat-votes', catVotesCount);
    
})

// click event button for fishy
fishyVoteBtn.addEventListener('click', function(){
    let fishVotesCount = parseInt(fishVotesCell.textContent);
    fishVotesCount = fishVotesCount + 1;
    fishVotesCell.textContent = fishVotesCount;
    localStorage.setItem('fish-votes', fishVotesCount);
})

// click event button for resetting
resetBtn.addEventListener('click', function(){
    window.alert('ALL counts will be deleted');
    dogVotesCell.textContent = 0;
    dogVotesCount = 0;
    catVotesCell.textContent = 0;
    catVotesCount = 0;
    fishVotesCell.textContent = 0;
    fishVotesCount = 0;
    totalVotesCount = 0;
    localStorage.setItem('dog-votes', dogVotesCount);
    localStorage.setItem('cat-votes', catVotesCount);
    localStorage.setItem('fish-votes', fishVotesCount);
})








