document.getElementById('convert').onclick = BaseCon;
document.getElementById('clear').onclick = clearAll;
function BaseCon()
{
    var no=document.getElementById("num").value;
    var fromb=document.getElementById("fb").value;
    var tob=document.getElementById("tb").value;
    if(fromb<2 || fromb>36)
        alert("Base should be between 2 and 36");
    if(tob<2 || tob>36)
        alert("Base should be between 2 and 36");
    var res=parseInt(no,fromb).toString(tob);
    if(res)
        document.getElementById('out').value = parseInt(res);
    else
        alert("Please enter a valid number!!");
        
}
function clearAll() {
    document.getElementById('num').value = '';
    document.getElementById('fb').value = '';
    document.getElementById('tb').value = '';
    document.getElementById('out').value = '';
}