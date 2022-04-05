const arr=[
    "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.",

    "If you’re like me — a tech savvy individual (that also happens to be a software engineer) or just a casual technology user, then I’m sure you’ve had this very same question wandering your mind countless times; How do I make money online? or better yet, how do I make money with my PC or Mac? Well, you’re in luck! Today, I will be running down a list of the top 5 easiest ways to make money using your computer. Maybe we’ll do a top 10 in the future? For now it’s top 5 tips for Twenty_Two.",

    "There are tons of websites out on the internet that provide you the opportunity to earn some extra money — using skills that you already possess and equipment you may already own.I’m talking about the gig economy here. It’s a great way for people to make money and earn a steady and passive income — all in the comfort of your own home. These sites only require that you sign up, with some offering premium subscriptions to boost sales and grant access to features like bidding on more proposals.",

    "Another great way of making money online is through MINEPRIZE. And the best part? You don’t even have to do anything! On here, you allow MINEPRIZE to use your idle CPU power to run complex tasks and you get paid by loaning your resources out.",

    "With MINEPRIZE, the registration is entirely free, and all you need is your email address and password to sign up. After you sign up, you’ll be asked to load a specific page, let MINEPRIZE use your resources, and let the money roll in! You can earn as much as $100 a month by leaving your computer to run some calculations. How crazy is that?",

    " As is coming to a close, we are taking the time to review some of the most notable trends for the upcoming year. These past couple of years serve as particularly strong evidence of the constant and fast development happening in the UX/UI industry — both in terms of technologies and design trends implemented. Explorations are unfolding in all sorts of directions — some short-lived, some reimagined and some recurring with a greater focus than ever before. Below we present to you in greater detail some of the explorations that will stick throughout 2022.",
    
    "On the Insert tab, the galleries include items that are designed to coordinate with the overall look of your document. You can use these galleries to insert tables, headers, footers, lists, cover pages, and other document building blocks. When you create pictures, charts, or diagrams, they also coordinate with your current document look.",

    "Designers and users alike have become increasingly accustomed to big typography standing loud and proud, front and center on their landing pages. Be it large and grotesque sans serifs or contemporary and lux serifs — the bigger the better is what this trend is all about. With a careful selection of fonts, websites are making bolder statements than ever, to catch their audience’s attention and to communicate their messages effectively.",

    "You can easily change the formatting of selected text in the document text by choosing a look for the selected text from the Quick Styles gallery on the Home tab. You can also format text directly by using the other controls on the Home tab. Most controls offer a choice of using the look from the current theme or using a format that you specify directly.",

    "To change the overall look of your document, choose new Theme elements on the Page Layout tab. To change the looks available in the Quick Style gallery, use the Change Current Quick Style Set command. Both the Themes gallery and the Quick Styles gallery provide reset commands so that you can always restore the look of your document to the original contained in your current template."
];

var arr2=[];
var arr3=[];
let display=document.getElementById('selectionBar');
let input=document.getElementById('input-box');
var timer=document.getElementById('menu2');
const current_time=document.getElementById('time');
var accuracy=document.getElementById('result');

var result;
var match;
var exit=0;
let dt=new Date();
let correct=0;
let wrong=0;
var res;
//var temp=document.getElementById('submit');


//temp.style.visibility="hidden";


function eventHandler() {
    
 var emp= Math.floor(Math.random()*10);
  console.log("Math "+emp);  
   display.innerText=arr[5];
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
         
     
    







function gome(st1,st2){
   //st1+=" ";
arr2=st1.split(" ");
 arr3=st2.split(" ");
 
 console.log(arr2.length+" len ");
 
for(res=0;res<arr2.length;res++)
{  
      
if(arr2[res]===arr3[res])
    correct+=1;
    
        
    

var err=document.getElementById('errors');
var finalAns=arr2.length-correct;
err.innerText=finalAns;
console.log(arr2[arr2.length]);

//code for accuracy
var wordCount=arr3.length;
var answer=(correct*100)/wordCount;
answer=Math.round(answer);
console.log(" answer "+answer);
//let change=answer.toString()+"%";
accuracy.innerText=answer;


    console.log(arr2+"   "+arr3+"  arr  "+correct+" wr "+wrong);
  console.log("Right  "+correct+" wrong "+wrong);
}
  if(arr2.length===1){
    alert("You Have Not entered any Text");
    
    } 
   
}





