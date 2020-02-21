function input(){
    var input = document.getElementById("api").value;
    apivalue = input;
}

function change(){
    var apivalue;
    var input = document.getElementById('api1').value;
    apivalue = input;
    var c = 'kkkkkkkkkkkkkkkkkkkkkk';
    if(apivalue=="iamadmin"){
        var userInput = prompt("password"+"");
        if(userInput == 'pass'){
        document.getElementById('admin').style.display="block";
    }
    }
    $('#comp').each(function() {
    var text = $(this).text();
    $(this).text(text.replace(c,apivalue));
    });
}
function change2(){
    var apivalue;
    var input = document.getElementById('api2').value;
    apivalue = input;
    var c = '문장';
    $('#comp2').each(function() {
    var text = $(this).text();
    $(this).text(text.replace(c,apivalue));
    });
}
function change3(){
    var apivalue;
    var input = document.getElementById('api3').value;
    apivalue = input;
    var c = '파일명';
    $('#comp3').each(function() {
    var text = $(this).text();
    $(this).text(text.replace(c,apivalue));
    });
}

function block(){
    var ch =  document.querySelector('#ch').value;
    var comp = document.getElementsByClassName('hidden');
    if(ch === 'display'){
    var i = 0;
    document.querySelector('#ch').value = 'undisplay';
    while(i<4){
        comp[i].style.display='block';
        i = i+1;
    }
    }
    else{
        document.querySelector('#ch').value = 'display';
        var i = 0;
        while(i<4){
        comp[i].style.display='none';
        i = i+1;
    }
    
    }
}

function dis(z){
    var d = document.getElementsByTagName('li');
    d[z].style.display="none";
    if(z === 8){
        alert('complete')
    }
}