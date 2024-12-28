const giftIdeaMsg = "İptal: Exist\n\nEnter your christmas gift idea:";
const invalidEntry = "Invalid Entry, Try again.";
const alreadyExist = "Your input already exist.";
const continueMsg = "İptal: Exist\n\nDo you want to continue: (Y/N)";
const exited = "You exited from app.";
const options = ["y", "n"];

let ideas = [];

if (localStorage.ideas) {
  ideas = JSON.parse(localStorage.ideas);
}

function giftIdea() {
  let value = prompt(giftIdeaMsg);

  if (value === null) {
    return false;
  }

  value = value.trim();

  if (!value) {
    alert(invalidEntry);
    return giftIdea();
  }

  if(ideas.includes(value)){
    alert(alreadyExist);
    return giftIdea();
  }

  ideas.push( value );

  localStorage.ideas = JSON.stringify(ideas);

  if (!isContinue()) {
    return false;
  }
}

function isContinue() {
  let value = prompt(continueMsg);

  if (value === null) {
    return false;
  }

  value = value.trim();

  if (!value) {
    alert(invalidEntry);
    return isContinue();
  }

  value = value.toLowerCase();

  if (!options.includes(value)) {
    return isContinue();
  }

  if (value === "n") {
    return false;
  }

  return giftIdea();
}


function mainMenu() {

  if (ideas.length > 0) {
    let ideasAlert = ideas.map((i, index) => `${index + 1} - ${i}`).join("\n");
    alert(ideasAlert);
  }

  let result = giftIdea();

  if (result === false) {
    alert(exited);
    return;
  }
}

mainMenu();