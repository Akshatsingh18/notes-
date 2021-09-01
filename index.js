var lis = document.getElementById('list')
var button = document.getElementById('but');
var remove = document.getElementById('rep')
var update = document.getElementById('upd')
var inputbox = document.getElementById('textt')
var currentvalue = '';
var newlist;
var textvalue;
inputbox.addEventListener('input',function(e)
{
    currentvalue = e.target.value;
});

function newitem()
{
newlist = document.createElement('li');
textvalue = document.createTextNode(currentvalue);
newlist.appendChild(textvalue);
newlist.id = "item" + (lis.childElementCount + 1);
return newlist;
}

inputbox.addEventListener( 'keyup',function(e) 
{
    if(e.keyCode === 13 )
    {
        nam();
    }
});

function nam()
{
    if(currentvalue != null && currentvalue != undefined && currentvalue != "")
{
    var newlist = newitem();
lis.appendChild(newlist);
console.log(lis.childElementCount);
inputbox.value='';
currentvalue='';
}
else
{
    alert("Please enter");

}
}
button.addEventListener('click',nam);

remove.addEventListener('click',function(){

    var firstelement = lis.firstElementChild;
    lis.removeChild(firstelement);
}
)

update.addEventListener('click',function()
{
    var newlist = newitem();
    var firstelement = lis.firstElementChild;
    lis.replaceChild(newlist,firstelement);
}
)