const arr=[
    "On the Insert tab, the galleries include items that are designed to coordinate with the overall look of your document. You can use these galleries to insert tables, headers, footers, lists, cover pages, and other document building blocks. When you create pictures, charts, or diagrams, they also coordinate with your current document look.",
    "You can easily change the formatting of selected text in the document text by choosing a look for the selected text from the Quick Styles gallery on the Home tab. You can also format text directly by using the other controls on the Home tab. Most controls offer a choice of using the look from the current theme or using a format that you specify directly.",
    "To change the overall look of your document, choose new Theme elements on the Page Layout tab. To change the looks available in the Quick Style gallery, use the Change Current Quick Style Set command. Both the Themes gallery and the Quick Styles gallery provide reset commands so that you can always restore the look of your document to the original contained in your current template."
];

var arr2=[];
var arr3=[];
let display=document.getElementById('selectionBar');
let input=document.getElementById('input-box');
var timer=document.getElementById('menu2');
const current_time=document.getElementById('time');
var dis=document.getElementById('result');
var result;
var match;
var exit=0;
let dt=new Date();
var correct=0;
var wrong=0;

//var temp=document.getElementById('submit');


//temp.style.visibility="hidden";


function eventHandler() {
    
    
   display.innerText=arr[0];
   var loopExit=setInterval(
      function() {
          
     if(current_time!==0 && current_time.innerText>0){
       
    current_time.innerText-=1;
     
    
   
    
}


else{
     
    input.disabled=true;
    exit=1;
    result=document.getElementById('input-box');
    match=document.getElementById('selectionBar');

    gome(result.value,match.innerText);
    clearInterval(loopExit);
   // temp.style.display="block";
     
 
}
        

    }, 1000); 

}
         
     
    


if(exit===1)
{
   
}




function gome(st1,st2){
   
arr2=st1.split(" ");
 arr3=st2.split(" ");
for(var res=0;res<arr2.length;res++)
{    
if(arr2[res]===arr3[res])
{
    ++correct;
}
else{
    ++wrong;
}
var err=document.getElementById('errors');
err.innerText=wrong;
    console.log(arr2+"   "+arr3+"  arr  "+correct+" wr "+wrong);
  console.log("Right  "+correct+" wrong "+wrong); 
   
}
}