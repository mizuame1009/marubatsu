function marubatsu(num, kotae){
  var objButton = document.getElementById('button');
  var objAnswer  = document.getElementById('answer');
  var objTOF = document.getElementById('tof');
  if(kotae == seitou[num]){
    objTOF.innerHTML = '<div class="true" onclick="num = next(num)">正解</div>';
  } else{
    objTOF.innerHTML = '<div class="false" onclick="num = next(num)">不正解</div>';
  }
  objButton.style.display = "none";
  objTOF.style.display = "block";
  if(seitou[num] == 'm'){
    objAnswer.innerHTML = "正解：" + "&#9711" + "<br>" + kaitou[num];
  } else{
    objAnswer.innerHTML = "正解：" + "&#x2715" + "<br>" + kaitou[num];
  }
  objAnswer.style.display = "block";
}

function next(num){
  if(num==num_max){
    // window.open('about:blank','_self').close();
    location.href = "../index.html";
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

function home(){
  // window.open('about:blank','_self').close();
  location.href = "../index.html";
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

function jump(tag){
  var str = "marubatsu/marubatsu.html?" + tag;
  location.href = str;
}
