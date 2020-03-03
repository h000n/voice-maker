function input(){
    var input = document.getElementById("api").value;
    apivalue = input;
}

function change(){
    var input = document.getElementById('api1').value;
    var c = 'kkkkkkkkkkkkkkkkkkkkkk';
    admins(input);
    $('#comp').each(function() {
    var text = $(this).text();
    $(this).text(text.replace(c,input));
    });
}
function admins(apivalue){
    if(apivalue=="iamadmin"){
        var userInput = prompt("password"+"");
        if(userInput == 'pass'){
        document.getElementById('admin').style.display="block";
    }
    }
}
function change2(){
    var input = document.getElementById('api2').value;
    var c = '문장';
    $('#comp2').each(function() {
    var text = $(this).text();
    $(this).text(text.replace(c,input));
    });
}
function change3(){
    var input = document.getElementById('api3').value;
    var c = '파일명';
    $('#comp3').each(function() {
    var text = $(this).text();
    $(this).text(text.replace(c,input));
    });
}
function block(){
    var ch =  document.querySelector('#ch').value;
    var comp = document.getElementsByClassName('hidden');
    var styles = document.getElementById("hid");
    if(ch === 'display'){
        var i = 0;
        styles.style.borderColor ='black';
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
        styles.style.borderColor ='white';
    
    }
}

function dis(z){
    var d = document.getElementsByTagName('li');
    var all = document.getElementById('lists');
    d[z].style.display="none";
    if(z === 8){
        alert('complete!')
        all.style.display= 'none';
    }
}
function mobile(){
    var filter = "win16|win32|win64|mac|macintel";
     if ( navigator.platform ) { 
         if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ){
            alert('모바일 환경 미지원 컴퓨터로 접속권장');
            document.getElementById('body').style.display='none';
            document.getElementById('mobile').style.display='block';
            }
       }
    }
}