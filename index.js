function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  var newRank = document.getElementById('app').querySelectorAll('ul.ranked-list')
    for(let k = 0; k < newRank.length; k++) {
      newRank[k].innerHTML = (k + 1).toString()
  }
  return newRank;
}

function deepestChild(){
  var child = document.getElementById('grand-node').querySelectorAll('div');
  return child[child.length - 1];
}
