function marubatsu(num, kotae){
  var objButton = document.getElementById('button');
  var objAnswer  = document.getElementById('answer');
  var objTOF = document.getElementById('tof');
  if(kotae == seitou[num]){
    objTOF.innerHTML = '<div onclick="num = next(num)">正解</div>';
  } else{
    objTOF.innerHTML = '<div onclick="num = next(num)">不正解</div>';
  }
  objButton.style.display = "none";
  objTOF.style.display = "block";
  objAnswer.innerHTML = kaitou[num];
  objAnswer.style.display = "block";
}

function next(num){
  if(num==num_max){
    window.open('about:blank','_self').close();
  } else{
  num++;
  }
  var objQuestion = document.getElementById('question');
  var objHeader = document.getElementById('header');
  var objButton = document.getElementById('button');
  var objTOF = document.getElementById('tof');
  var objAnswer  = document.getElementById('answer');
  objQuestion.innerHTML = mondai[num];
  objHeader.innerHTML = "Question " + num;
  objButton.style.display = "block";
  objTOF.style.display = "none";
  objAnswer.style.display = "none";
  return num;
}

function home(num){
  location.href = "../workbook.html";
}

function back(num){
  if(num==1){
  } else{
  num--;
  }
  var objQuestion = document.getElementById('question');
  var objHeader = document.getElementById('header');
  var objButton = document.getElementById('button');
  var objTOF = document.getElementById('tof');
  var objAnswer  = document.getElementById('answer');
  objQuestion.innerHTML = mondai[num];
  objHeader.innerHTML = "Question " + num;
  objButton.style.display = "block";
  objTOF.style.display = "none";
  objAnswer.style.display = "none";
  return num;
}
