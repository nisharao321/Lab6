       function navNext()
       {
         for (temp = 0; temp <= 9 ; temp++)
         {
           document.getElementById('canvas'+temp).style.visibility="hidden";
         }

         simsubscreennum+=1;

         document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
         document.getElementById('nextButton').style.visibility="hidden";
         magic();
       }

       var ca;
       var questions = ["Coefficient of friction of airways depend on.",
       "The Pressure 'P' required to overcome friction is directly proportional to the"
       ];

       var options2 = [
       ["Type of rubbing surface", "Nature of the roughness of the roadways", "Resistance of the roadway", "All of them"], //Two
       ["Velocity of the air", "Area of the rubbing surface", "Air velocity at a poiint", "Area of cross-section"], //Meter of air
       ];

       function validateAnswer(qn, ans, left, top) {
         $("#answer").empty();
         document.getElementById("a").innerHTML = "";
         document.getElementById("questDiv").style = "position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" + left + ";top:" + top + ";";
         document.getElementById("q").innerHTML = questions[qn];
         if (qn === 0) document.getElementById('questDiv').style.width = "370px";
         if (qn === 1) document.getElementById('questDiv').style.width = "370px";

         el = document.createElement("option");
         el.textContent = " ";
         el.value = " ";
         answer.appendChild(el);

         for (j = 0; j < options2[qn].length; j++) {
           opt = options2[qn][j];

           el = document.createElement("option");
           el.textContent = opt;
           el.value = opt;
           answer.appendChild(el);
           $("#answer").change(function() {
             ca = $(this).children("option:selected").val();
             if (options2[qn][ans] === ca) {
               document.getElementById("a").innerHTML = "Correct Answer!";
             }
             else {
               document.getElementById("a").innerHTML = "Wrong! Answer is " + options2[qn][ans];
             }
             setTimeout(function() {
               document.getElementById("questDiv").style.visibility = "hidden";
               document.getElementById("nextButton").style.visibility = "visible";
             }, 1500);
           });
         }
       }

       var p=Math.floor(Math.random()*(6));

       var data = [[12, 1.7, 8.06],
       [24, 3.2, 7.59],
       [30, 4.0, 7.59],
       ];

       var n;
       //for 300rpm at point 1
       var data1=[[18.1,19.6,1.5,18.6,19.2,0.6,18.4,19.3,0.9],
       [18.0,19.7,1.7,18.3,19.9,1.6,18.6,19.9,1.3],
       [18.2,19.9,1.7,17.9,20.1,2.2,18.5,19.4,0.9],
       [17.8,20.2,2.4,17.5,19.8,2.3,18,19.4,1.4],
       [17.8,19.8,2.0,18.2,20.5,2.3,18.4,20.0,1.6],
       [17.9,20.1,2.2,18,20.2,2.2,18,19.8,1.8]];

       //for 300rpm at point 2
       var data2=[[17.4,20.3,2.9,17.4,20.9,3.5,18.2,19.6,1.4],
       [17.5,20.3,2.8,17.8,19.8,2.0,18.4,19.2,0.8],
       [17.7,19.9,2.2,17.6,20.0,2.4,18.2,19.6,1.4],
       [17.6,20.2,2.6,18.1,20.7,2.6,18.6,19.7,1.1],
       [17.5,20.0,2.5,17.,20.2,2.5,18.7,19.7,1.0],
       [17.7,20.4,2.7,17.5,20.0,2.5,18.3,20.0,1.7]];

    
       var data5=[[1.564,0.625,0.938,1.251,0.159,0.199],
       [1.773,1.669,1.356,1.503,0.159,0.239],
       [1.773,2.295,0.938,1.251,0.159,0.199],
       [2.503,2.399,1.461,1.560,0.159,0.248],
       [2.086,2.399,1.669,1.667,0.159,0.265],
       [2.295,2.295,1.877,1.769,0.159,0.281]];

       var data6=[[3.025,3.651,1.461,1.559,1.405,3.025,0.248,0.223,2.120,60.602,0.115],
       [2.921,2.086,0.834,1.179,1.341,0.417,0.187,0.127,2.120,25.910,0.049],
       [2.295,2.503,1.461,1.560,1.405,0.209,0.248,0.223,2.120,4.179,0.008],
       [2.712,2.712,1.147,1.382,1.471,0.313,0.220,0.234,2.120,5.719,0.011],
       [2.608,2.608,1.043,1.318,1.493,0.209,0.210,0.237,2.120,3.703,0.007],
       [2.816,2.608,1.773,1.719,1.744,0.313,0.273,0.277,2.120,4.071,0.008]];

       //-----------------------------------------blink arrow on the next step---------------------------------------------
       //blink arrow on the next step
       function animatearrow()
       {
         if (document.getElementById('arrow1').style.visibility==="hidden")
           document.getElementById('arrow1').style.visibility="visible";
         else
           document.getElementById('arrow1').style.visibility="hidden";
       }

       //stop blinking arrow
       function myStopFunction()
       {
         clearInterval(myInt);
         document.getElementById('arrow1').style.visibility="hidden";
       }
       var j0=0;
       function fillTable(repeat)
       {
         var tb1 = document.getElementById("table1");
         var row = tb1.insertRow();
         var cell = row.insertCell();
         cell.innerHTML =(repeat+1);
         for (i = 0; i <= data[j0].length-1; i++)
         {
           var cell = row.insertCell();
           cell.innerHTML = data[j0][i];
         }
         j0++;
       }

       //-------------------------------------function magic starts here----------------------------------------------------
       function animateArrowATPosition(left,top,height,degg)
       {
         document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+left+"px; top: "+top+"px; height:"+height+"px; z-index: 10;";
         document.getElementById("arrow1").style.WebkitTransform = "rotate("+degg+"deg)";
       // Code for IE9
       document.getElementById("arrow1").style.msTransform = "rotate("+degg+"deg)";
       // Standard syntax
       document.getElementById("arrow1").style.transform = "rotate("+degg+"deg)";
     }
     function magic()
     {
       if (simsubscreennum===1)
       {
         myInt = setInterval(function(){ animatearrow(); }, 500);
         animateArrowATPosition(60,85,20,270);
         document.getElementById('a3').onclick=function() { step1(); };
       }
       if (simsubscreennum===2)
       {
         document.getElementById('a03').style.visibility = "hidden";
         document.getElementById('a44').style.visibility = "hidden";

         document.getElementById('arrow2').style.visibility="hidden";
         document.getElementById('wind').style.visibility="hidden";
         document.getElementById('a2').style.visibility="hidden";
         document.getElementById('a5').style.visibility="hidden";
         document.getElementById('a6').style.visibility="hidden";
         myInt = setInterval(function(){ animatearrow(); }, 500);
         animateArrowATPosition(50,105,30,-90);
         document.getElementById('a12').onclick=function() { step2(); };
       }

       if (simsubscreennum===3)
       {
         document.getElementById('ca-1').style.visibility="hidden";
         document.getElementById('ca-2').style.visibility="hidden";
         document.getElementById('ca-3').style.visibility="hidden";
         setTimeout(function()
         {
         document.getElementById('as0').style.visibility="visible";
          setTimeout(function()
         {
          document.getElementById('can11').innerHTML = "The length between the two chosen points is = "+2+" m.";
        
          setTimeout(function()
         {
         document.getElementById('can22').innerHTML = "The diameter of the ventilation duct is = "+0.45+" m.";
           setTimeout(function()
         {
           document.getElementById('as2').style.visibility="hidden";
            validateAnswer(1, 1, "370px", "180px");      
        },1000);           
         },1000);
        
         },1000);
         },1000);
       }

       if (simsubscreennum===4)
       {
          document.getElementById('as0').style.visibility="hidden";
          // document.getElementById('as4').style.visibility="hidden";

           document.getElementById('as1').style.visibility="hidden";
           document.getElementById('as2').style.visibility="hidden";
           document.getElementById('a15').style.visibility="hidden";
           document.getElementById('10').style.visibility = "visible";
           document.getElementById('ok').onclick = function() {
           document.getElementById('10').style.visibility = "hidden";
           document.getElementById('ok').style.visibility = "hidden";
           document.getElementById('can1').style.visibility="visible";
           document.getElementById('can2').style.visibility="visible";
           document.getElementById('can3').style.visibility="visible";

           document.getElementById('m-1').style.visibility="visible";
           document.getElementById('m-2').style.visibility="visible";
           document.getElementById('m-5').style.visibility="visible";
           document.getElementById('a1-1').style.visibility="visible";
           document.getElementById('a1-11').style.visibility="visible";

           setTimeout(function()
           {
             document.getElementById('a2-1').style.visibility="visible";
             document.getElementById('a2-11').style.visibility="visible";
             document.getElementById('m-3').style.visibility="visible";
             document.getElementById('m-4').style.visibility="visible";
             document.getElementById('a1-4').style.visibility="visible";
             document.getElementById('a3-1').style.visibility="visible";
             setTimeout(function()
             {
               display('m-1','m-2','m-5','can1','can2','can3','m-3','c1','ab1','m-8','m-9');
               document.getElementById('m-6').style.visibility="visible";
               document.getElementById('a1-21').style.visibility="visible";
               document.getElementById('a1-2').style.visibility="visible";
               document.getElementById('m-4').style.visibility="hidden";

               myInt = setInterval(function(){ animatearrow(); }, 500);
               animateArrowATPosition(150,200,20,180);
               document.getElementById('a1-21').onclick=function() { step3(); };
             },3000);
           },4000);
         };
       }
       if (simsubscreennum===5)
       {
         document.getElementById('a1-1').style.visibility="hidden";
         document.getElementById('a1-11').style.visibility="hidden";
         document.getElementById('a2-1').style.visibility="hidden";
         document.getElementById('a2-11').style.visibility="hidden";
         document.getElementById('a1-4').style.visibility="hidden";
         document.getElementById('a3-1').style.visibility="hidden";
         document.getElementById('a1-2').style.visibility="hidden";
         document.getElementById('a41-11').style.display="none";
         document.getElementById('a1-22').style.visibility="hidden";
         for(i=0;i<=data1[p].length-1;i++)
         {
           document.getElementById("ro"+i).innerHTML=data1[p][i];
         }
         calc1( 'button','output','output','button','output','button1','button','wrong','wrong','right','button1','h1','h1','output','wrong','right','right','h1','h1','button',0);
         calc1( 'button1','output1','output1','button1','output1','button2','button1','wrong1','wrong1','right1','button2','h2','h2','output1','wrong1','right1','right1','h2','h2','button1',1);
         calc1( 'button2','output2','output2','button2','output2','button3','button2','wrong2','wrong2','right2','button3','h3','h3','output2','wrong2','right2','right2','h3','h3','button2',2);
         calc1( 'button3','output3','output3','button3','output3','button4','button3','wrong3','wrong3','right3','button4','h4','h4','output3','wrong3','right3','right3','h4','h4','button3',3);
         calc1( 'button4','output4','output4','button4','output4','button5','button4','wrong4','wrong4','right4','button5','h5','h5','output4','wrong4','right4','right4','h5','h5','button4',4);
         calc1( 'button5','output5','output5','button5','output5','nextButton','button5','wrong5','wrong5','right5','nextButton','h6','h6','output5','wrong5','right5','right5','h6','h6','button5',5);
       }
       if (simsubscreennum===6)
       {
         refresh('right','right1','right2','right3');
         refresh1('h1','h2','h3','h4');
             document.getElementById('h5').style.visibility="hidden";
         document.getElementById('right4').style.visibility="hidden";
             document.getElementById('h6').style.visibility="hidden";
         document.getElementById('right5').style.visibility="hidden";
         document.getElementById('c2').style.visibility="visible";
         document.getElementById('m-7').style.visibility="visible";
         document.getElementById('a1-4').style.visibility="hidden";
         document.getElementById('a1-5').style.visibility="visible";
         document.getElementById('a1-22').style.visibility="hidden";
         document.getElementById('a1-2').style.visibility="hidden";
         document.getElementById('a31-11').style.visibility="hidden";
         document.getElementById('a13-2').style.visibility="visible";
         document.getElementById('a31-22').style.visibility="hidden";
         document.getElementById('a30-2').style.visibility="visible";
         document.getElementById('a30-22').style.visibility="visible";
         document.getElementById('a51-11').style.visibility="visible";
         document.getElementById('a-21').style.visibility="visible";
         myInt = setInterval(function(){ animatearrow(); }, 500);
         animateArrowATPosition(145,200,20,180);
         document.getElementById('a-21').onclick=function() { step4(); };
       }
       if (simsubscreennum===7)
       {
         document.getElementById('a6-12').style.display="none";
         document.getElementById('a1-5').style.visibility="hidden";
         document.getElementById('a51-111').style.visibility="hidden";
         document.getElementById('a5-2').style.visibility="hidden";
         document.getElementById('a13-2').style.visibility="hidden";
         document.getElementById('a-22').style.visibility="hidden";
         for(i=0;i<=data2[p].length-1;i++)
         {
           document.getElementById("row"+i).innerHTML=data2[p][i];
         }
         document.getElementById("v1").innerHTML=data5[p][3];
         calc2( 'button-1','output-1','output-1','button-1','output-1','button1-1','button-1','wrong-1','wrong-1','right-1','button1-1','h1-1','h1-1','output-1','wrong-1','right-1','right-1','h1-1','h1-1','button-1',0);
         calc2( 'button1-1','output1-1','output1-1','button1-11','output1-1','button2-1','button1-1','wrong1-1','wrong1-1','right1-1','button2-1','h2-1','h2-1','output1-1','wrong1-1','right1-1','right1-1','h2-1','h2-1','button1-1',1);
         calc2( 'button2-1','output2-1','output2-1','button2-1','output2-1','button3-1','button2-1','wrong2-1','wrong2-1','right2-1','button3-1','h3-1','h3-1','output2-1','wrong2-1','right2-1','right2-1','h3-1','h3-1','button2-1',2);
         calc2( 'button3-1','output3-1','output3-1','button3-1','output3-1','button4-1','button3-1','wrong3-1','wrong3-1','right3-1','button4-1','h4-1','h4-1','output3-1','wrong3-1','right3-1','right3-1','h4-1','h4-1','button3-1',3);
         calc2( 'button4-1','output4-1','output4-1','button4-1','output4-1','nextButton','button4-1','wrong4-1','wrong4-1','right4-1','nextButton','h5-1','h5-1','output4-1','wrong4-1','right4-1','right4-1','h5-1','h5-1','button4-1',4);
       }
       if (simsubscreennum===8)
       {
        document.getElementById("pt1").innerHTML=data5[p][1];
          document.getElementById("pt2").innerHTML=data6[p][1];
          document.getElementById("v2").innerHTML=data6[p][3];

        document.getElementById("q1").innerHTML=data5[p][5];
         document.getElementById('h5-1').style.visibility="hidden";
         document.getElementById('right4-1').style.visibility="hidden";
         refresh('right-1','right1-1','right2-1','right3-1');
         refresh1('h1-1','h2-1','h3-1','h4-1');
         calc2( 'button11','output11','output11','button11','output11','buttton22','button11','wrong11','wrong11','right11','button22','h11','h11','output11','wrong11','right11','right11','h11','h11','button11',5);
         calc2( 'button22','output22','output22','button22','output22','buttton33','button22','wrong22','wrong22','right22','button33','h22','h22','output22','wrong22','right22','right22','h22','h22','button22',6);
         calc2( 'button33','output33','output33','button33','output33','buttton44','button33','wrong33','wrong33','right33','button44','h33','h33','output33','wrong33','right33','right33','h33','h33','button33',7);
         calc2( 'button44','output44','output44','button44','output44','buttton55','button44','wrong44','wrong44','right44','button55','h44','h44','output44','wrong44','right44','right44','h44','h44','button44',8);
         calc2( 'button55','output55','output55','button55','output55','buttton66','button55','wrong55','wrong55','right55','button66','h55','h55','output55','wrong55','right55','right55','h55','h55','button55',9);
         calc2( 'button66','output66','output66','button66','output66','nextButton','button66','wrong66','wrong66','right66','nextButton','h66','h66','output66','wrong66','right66','right66','h66','h66','button66',10);
      }
       if (simsubscreennum===9)
       {
         document.getElementById('h66').style.visibility="hidden";
        document.getElementById('h55').style.visibility="hidden";
         
         document.getElementById('right55').style.visibility="hidden";
         document.getElementById('right66').style.visibility="hidden";

         refresh('right11','right22','right33','right44');
         refresh1('h11','h22','h33','h44');
         setTimeout(function()
         {
          document.getElementById("q11").innerHTML=data6[p][9];
          document.getElementById("q22").innerHTML=data6[p][10];
         },500);
       
     }
   }

     function step1()
     {
       myStopFunction();
       document.getElementById('a3').onclick="";

       document.getElementById("a3").style.animation = "mover 1s ease-in-out  forwards";
       setTimeout(function()
       {
         document.getElementById('a03').style.visibility = "visible";

         myInt = setInterval(function(){ animatearrow(); }, 500);
         animateArrowATPosition(198,280,20,720);
       },1000);
       document.getElementById("a4").onclick=function() {step1_11();};
     }

     function step1_11()
     {
       myStopFunction();
       document.getElementById("a4").onclick="";
       document.getElementById('a44').style.visibility = "visible";
       document.getElementById('m9').style.opacity='1';
       document.getElementById('m10').style.opacity='1';
       document.getElementById('a2').style.visibility="visible";
       document.getElementById('arrow2').style.visibility="visible";
       document.getElementById('wind').style.visibility="visible";
       initiate();
       setInterval("rt(1)", 500);
       setTimeout(function()
       {
         myInt = setInterval(function(){ animatearrow(); }, 500);
         animateArrowATPosition(182,257,20,720);
         document.getElementById("a0").onclick=function() {
           myStopFunction();
           this.onclick = null;
           document.getElementById('a01').style.visibility = "visible";
           document.getElementById('a01').style.transform = "rotate(380deg)";
           document.getElementById("a01").style.WebkitTransform = "rotate(380deg)";
           document.getElementById("a01").style.msTransform = "rotate(380deg)";
           document.getElementById('Sample0').style.visibility="visible";
           document.getElementById('m7').style.opacity='1';
           document.getElementById('m8').style.opacity='1';
           document.getElementById('a5').style.visibility="visible";
           document.getElementById('a6').style.visibility="visible";
           document.getElementById("a6").style.animation = "moven 1s ease-in-out forwards";
           setTimeout(function()
           {
             document.getElementById('a01').style.visibility="hidden";
             document.getElementById('Sample0').style.visibility="hidden";
             document.getElementById('nextButton').style.visibility="visible";
           },1000);
         };
       },1200);
     }

     function step2()
     {
       myStopFunction();
       document.getElementById('a12').onclick="";

       document.getElementById("a12").style.animation = "moves 1s ease-in-out forwards";
       setTimeout(function()
       {
         document.getElementById('a13').style.visibility="visible";
         document.getElementById('c13').style.visibility="visible";
         setTimeout(function()
         {
           fillTable(0);
           setTimeout(function()
           {
             document.getElementById('a13').style.visibility="hidden";
             document.getElementById('c13').style.visibility="hidden";
             document.getElementById("a12").style.animation = "movess 1s ease-in-out forwards";
             setTimeout(function()
             {
               document.getElementById('a14').style.visibility="visible";
               document.getElementById('c14').style.visibility="visible";
               setTimeout(function()
               {
                 fillTable(1);
                 setTimeout(function()
                 {
                   document.getElementById('a14').style.visibility="hidden";
                   document.getElementById('c14').style.visibility="hidden";

                   document.getElementById("a12").style.animation = "movese 1s ease-in-out forwards";
                   setTimeout(function()
                   {
                     document.getElementById('a15').style.visibility="visible";
                     document.getElementById('c15').style.visibility="visible";
                     setTimeout(function()
                     {
                       fillTable(2);
                       setTimeout(function()
                       {
                         document.getElementById('ca-1').style.visibility="visible";
                         document.getElementById('ca-2').style.visibility="visible";
                         document.getElementById('ca-3').style.visibility="visible";
                         setTimeout(function()
                         {
                           document.getElementById('c15').style.visibility="hidden";
                           document.getElementById('a11').style.visibility="hidden";
                           document.getElementById('a12').style.visibility="hidden";
                           document.getElementById('a15').style.visibility="hidden";
                           validateAnswer(0, 0, "150px", "150px");
                         },800);
                       },800);
                     },800);
                   },2000);
                 },2000);
               },800);
             },2000);
           },2000);
         },800);
       },2000);
     }
     function step3()
     {
       myStopFunction();
       document.getElementById('a1-21').onclick="";
       document.getElementById('c1').style.visibility="hidden";
       document.getElementById('ab1').style.visibility="hidden";
       document.getElementById('m-8').style.visibility="hidden";
       document.getElementById('m-9').style.visibility="hidden";
       document.getElementById('m-6').style.visibility="hidden";
       document.getElementById("a1-21").style.animation = "movehand1 1s ease-in-out  forwards";
       setTimeout(function()
       {
         document.getElementById("a1-2").style.animation = "movep 1s ease-in-out  forwards";
         document.getElementById("a1-21").style.animation = "movehand11 1s ease-in-out forwards";
         setTimeout(function()
         {
           document.getElementById('Sample1').style.visibility="visible";
           setTimeout(function()
           {
             document.getElementById('Sample1').style.visibility="hidden";
             document.getElementById('a1-21').style.visibility="hidden";
             var leftLimbMargin = (data1[p][0]-15)*14.6;
             var rightLimbMargin = (data1[p][1]-15)*14.6;
             document.getElementById('a2-2').style.marginLeft = leftLimbMargin + 'px';
             document.getElementById('a2-22').style.marginLeft = rightLimbMargin + 'px';
             setTimeout(function()
             {
               document.getElementById('a3-2').style.visibility="visible";
               myInt = setInterval(function(){ animatearrow(); }, 500);
               animateArrowATPosition(45,370,30,180);
               document.getElementById("a3-2").onclick=function() {
                 myStopFunction();
                 document.getElementById("a3-2").onclick="";
                 var boxHandMargin = (data1[p][0]-5)*14.6;
                 document.getElementById("a3-2").style.marginLeft = boxHandMargin + 'px';
                 document.getElementById("a3-1").style.marginLeft = boxHandMargin + 'px';

                 setTimeout(function()
                 {
                   document.getElementById('a3-2').style.visibility="hidden";
                   document.getElementById('para').innerHTML="Static Head:";
                   document.getElementById('para1').innerHTML="Left Limb Reading="+data1[p][0]+" cm";
                   setTimeout(function()
                   {
                     document.getElementById('a3-1').style.display="none";
                     document.getElementById('a4-1').style.visibility="visible";
                     setTimeout(function()
                     {
                       document.getElementById('a41-22').style.visibility="visible";
                       myInt = setInterval(function(){ animatearrow(); }, 500);
                       animateArrowATPosition(45,370,30,180);
                       document.getElementById("a41-22").onclick=function() {
                         myStopFunction();
                         document.getElementById("a41-22").onclick="";
                         var boxHandMargin = (data1[p][1]-5)*14.6;
                         document.getElementById("a41-22").style.marginLeft = boxHandMargin + 'px';
                         document.getElementById("a4-1").style.marginLeft = boxHandMargin + 'px';

                         setTimeout(function()
                         {
                           document.getElementById('a41-22').style.visibility="hidden";
                           document.getElementById('para2').innerHTML="Right Limb Reading="+data1[p][1]+" cm";
                           document.getElementById('para3').innerHTML="Difference="+data1[p][2]+" cm";
                           setTimeout(function()
                           {
                            document.getElementById('a4-1').style.display="none";
                            display('para','para1','para2','para3','a2-2','a2-22','a1-2','a22-2','a22-22','a1-22','a3-11');
                            document.getElementById('a1-23').style.visibility="visible";
                            myInt = setInterval(function(){ animatearrow(); }, 500);
                            animateArrowATPosition(340,170,20,-90);
                            document.getElementById("a1-23").onclick=function() {
                             myStopFunction();
                             document.getElementById("a1-23").onclick="";
                             document.getElementById("a1-23").style.animation = "movehand2 1s ease-in-out forwards";
                             setTimeout(function()
                             {
                               document.getElementById("a1-22").style.animation = "movepp 1s ease-in-out forwards";
                               document.getElementById("a1-23").style.animation = "movehand22 1s ease-in-out forwards";
                               setTimeout(function()
                               {
                                 document.getElementById('Sample2').style.visibility="visible";
                                 setTimeout(function()
                                 {
                                   document.getElementById('Sample2').style.visibility="hidden";
                                   document.getElementById('a1-23').style.visibility="hidden";
                                   var leftLimbMargin = (data1[p][3]-15)*14.6;
                                   var rightLimbMargin = (data1[p][4]-15)*14.6;
                                   document.getElementById('a22-2').style.marginLeft = leftLimbMargin + 'px';
                                   document.getElementById('a22-22').style.marginLeft = rightLimbMargin + 'px';
                                   setTimeout(function()
                                   {
                                     document.getElementById('a3-22').style.visibility="visible";
                                     myInt = setInterval(function(){ animatearrow(); }, 500);
                                     animateArrowATPosition(45,370,30,180);
                                     document.getElementById("a3-22").onclick=function() {
                                       myStopFunction();
                                       var boxHandMargin = (data1[p][3]-5)*14.6;
                                       document.getElementById("a3-22").style.marginLeft = boxHandMargin + 'px';
                                       document.getElementById("a3-11").style.marginLeft = boxHandMargin + 'px';
                                       setTimeout(function()
                                       {
                                       document.getElementById('a3-22').style.visibility="hidden";
                                       document.getElementById('paraa').innerHTML="Total Head:";
                                       document.getElementById('para11').innerHTML="Left Limb Reading="+data1[p][3]+" cm";
                                       setTimeout(function()
                                       {
                                       document.getElementById('a3-11').style.display="none";
                                       document.getElementById('a4-11').style.visibility="visible";
                                       setTimeout(function()
                                       {
                                       document.getElementById('a4-22').style.visibility="visible";
                                       myInt = setInterval(function(){ animatearrow(); }, 500);
                                       animateArrowATPosition(45,370,30,180);
                                       document.getElementById("a4-22").onclick=function() {
                                       myStopFunction();
                                       document.getElementById("a4-22").onclick="";
                                       var boxHandMargin = (data1[p][4]-5)*14.6;
                                       document.getElementById("a4-22").style.marginLeft = boxHandMargin + 'px';
                                       document.getElementById("a4-11").style.marginLeft = boxHandMargin + 'px';
                                       setTimeout(function()
                                       {
                                       document.getElementById('a4-22').style.visibility="hidden";
                                       document.getElementById('para22').innerHTML="Right Limb Reading="+data1[p][4]+" cm";
                                       document.getElementById('para33').innerHTML="Difference="+data1[p][5]+" cm";
                                       setTimeout(function()
                                       {
                                       document.getElementById('a4-11').style.display="none";
                                       display('paraa','para11','para22','para33','a22-2','a22-22','a3-11','a1-2','a21-2','a21-22','a31-11');
                                       setTimeout(function()
                                       {
                                       document.getElementById('Sample3').style.visibility="visible";
                                       setTimeout(function()
                                       {
                                       document.getElementById('Sample3').style.visibility="hidden";

                                       var leftLimbMargin = (data1[p][6]-15)*14.6;
                                       var rightLimbMargin = (data1[p][7]-15)*14.6;
                                       document.getElementById('a21-2').style.marginLeft = leftLimbMargin + 'px';
                                       document.getElementById('a21-22').style.marginLeft = rightLimbMargin + 'px';
                                       setTimeout(function()
                                       {
                                       document.getElementById('a31-22').style.visibility="visible";

                                       myInt = setInterval(function(){ animatearrow(); }, 500);
                                       animateArrowATPosition(45,370,30,180);
                                       document.getElementById("a31-22").onclick=function() {
                                       myStopFunction();
                                       document.getElementById("a31-22").onclick="";
                                       boxHandMargin = (data1[p][6]-5)*14.6;
                                       document.getElementById("a31-22").style.marginLeft = boxHandMargin + 'px';
                                       document.getElementById("a31-11").style.marginLeft = boxHandMargin + 'px';
                                       setTimeout(function()
                                       {
                                       document.getElementById('a31-22').style.visibility="hidden";
                                       document.getElementById('para0').innerHTML="Velocity Head:";
                                       document.getElementById('para11-1').innerHTML="Left Limb Reading="+data1[p][6]+" cm";
                                       setTimeout(function()
                                       {
                                       document.getElementById('a31-11').style.display="none";
                                       document.getElementById('a41-11').style.visibility="visible";
                                       setTimeout(function()
                                       {
                                       document.getElementById('a4-2').style.visibility="visible";
                                       myInt = setInterval(function(){ animatearrow(); }, 500);
                                       animateArrowATPosition(45,370,30,180);
                                       document.getElementById("a4-2").onclick=function() {
                                       myStopFunction();
                                       document.getElementById("a4-2").onclick="";
                                       var boxHandMargin = (data1[p][7]-5)*14.6;
                                       document.getElementById("a4-2").style.marginLeft = boxHandMargin + 'px';
                                       document.getElementById("a41-11").style.marginLeft = boxHandMargin + 'px';
                                       setTimeout(function()
                                       {
                                       document.getElementById('a4-2').style.visibility="hidden";
                                       document.getElementById('para22-1').innerHTML="Right Limb Reading="+data1[p][7]+" cm";
                                       document.getElementById('para33-1').innerHTML="Difference="+data1[p][8]+" cm";
                                       document.getElementById('nextButton').style.visibility="visible";
                                       },2000);
                                      }
                                     },2000);
                                    },2000);
                                   },2000);
                                  }
                                 },5000)
                                },3500);
                               },1000);
                              },3000);
                             },2000);
                            }
                           },2000);
                          },2000);
                         },2000);
                        }
                       },6000);
                      },3500);
                     },1000);
                    },1000);
                   };
                  },2000);
                 },2000);
                }
               },2000);
              },2000);
             },2000);
            }
           },6000);
          },3500);
         },2000);
        },1000);
       }

     function step4()
     {
       myStopFunction();
       document.getElementById('a-21').onclick="";
       document.getElementById('c2').style.visibility="hidden";
       document.getElementById('m-7').style.visibility="hidden";
       document.getElementById('a-21').style.visibility="visible";
       document.getElementById("a-21").style.animation = "movehand011 1s ease-in-out forwards";
       setTimeout(function()
       {
         document.getElementById("a13-2").style.animation = "movep1 1s ease-in-out forwards";
         document.getElementById("a-21").style.animation = "movehand01 1s ease-in-out forwards";
         setTimeout(function()
         {
           document.getElementById('Sample1').style.visibility="visible";
           setTimeout(function()
           {
             document.getElementById('Sample1').style.visibility="hidden";
             document.getElementById('a-21').style.visibility="hidden";
             var leftLimbMargin = (data2[p][0]-15)*14.6;
             var rightLimbMargin = (data2[p][1]-15)*14.6;
             document.getElementById('a30-2').style.marginLeft = leftLimbMargin + 'px';
             document.getElementById('a30-22').style.marginLeft = rightLimbMargin + 'px';
             setTimeout(function()
             {
               document.getElementById('a51-11').style.visibility="visible";
               document.getElementById('a51-22').style.visibility="visible";
               myInt = setInterval(function(){ animatearrow(); }, 500);
               animateArrowATPosition(45,370,30,180);
               document.getElementById("a51-22").onclick=function() {
                 myStopFunction();
                 document.getElementById("a51-22").onclick="";
                 var boxHandMargin = (data2[p][0]-5)*14.6;
                 document.getElementById("a51-22").style.marginLeft = boxHandMargin + 'px';
                 document.getElementById("a51-11").style.marginLeft = boxHandMargin + 'px';
                 setTimeout(function()
                 {
                   document.getElementById('a51-22').style.visibility="hidden";
                   document.getElementById('para-1').innerHTML="Static Head:";
                   document.getElementById('para1-1').innerHTML="Left Limb Reading="+data2[p][0]+" cm";
                   setTimeout(function()
                   {
                     document.getElementById('a51-11').style.display="none";
                     document.getElementById('a5-11').style.visibility="hidden";
                     document.getElementById('a6-11').style.visibility="visible";
                     setTimeout(function()
                     {
                       document.getElementById('a61-22').style.visibility="visible";
                       myInt = setInterval(function(){ animatearrow(); }, 500);
                       animateArrowATPosition(45,370,30,180);
                       document.getElementById("a61-22").onclick=function() {
                         myStopFunction();
                         document.getElementById("a61-22").onclick="";
                         var boxHandMargin = (data2[p][1]-5)*14.6;
                         document.getElementById("a61-22").style.marginLeft = boxHandMargin + 'px';
                         document.getElementById("a6-11").style.marginLeft = boxHandMargin + 'px';

                         setTimeout(function()
                         {
                           document.getElementById('a61-22').style.visibility="hidden";
                           document.getElementById('para2-1').innerHTML="Right Limb Reading="+data2[p][1]+" cm";
                           document.getElementById('para3-1').innerHTML="Difference="+data2[p][2]+" cm";
                           setTimeout(function()
                           {
                            document.getElementById('a6-11').style.display="none";
                            display('a13-2','a30-22','a30-2','a51-22','para-1','para1-1','para2-1','a51-11','a34-22','a34-2','a5-11');
                            document.getElementById('para3-1').style.visibility="hidden";
                            setTimeout(function()
                            {
                              document.getElementById('a30-22').style.visibility="hidden";
                              document.getElementById('a30-2').style.visibility="hidden";
                              setTimeout(function()
                              {
                               document.getElementById('a-22').style.visibility="visible";
                               document.getElementById('a-23').style.visibility="visible";

                               myInt = setInterval(function(){ animatearrow(); }, 500);
                               animateArrowATPosition(370,80,20,360);
                               document.getElementById("a-23").onclick=function() {
                                 myStopFunction();
                                 document.getElementById("a-23").onclick="";
                                 document.getElementById("a-22").style.animation = "movep2 1s ease-in-out forwards";
                                 document.getElementById("a-23").style.animation = "movehand02 1s ease-in-out forwards";
                                 setTimeout(function()
                                 {
                                  document.getElementById('Sample2').style.visibility="visible";

                                  setTimeout(function()
                                  {
                                   document.getElementById('Sample2').style.visibility="hidden";
                                   var leftLimbMargin = (data2[p][3]-15)*14.6;
                                   var rightLimbMargin = (data2[p][4]-15)*14.6;
                                   document.getElementById('a34-2').style.marginLeft = leftLimbMargin + 'px';
                                   document.getElementById('a34-22').style.marginLeft = rightLimbMargin + 'px';

                                   document.getElementById('a-23').style.visibility="hidden";
                                   setTimeout(function()
                                   {
                                   document.getElementById('a5-22').style.visibility="visible";
                                   myInt = setInterval(function(){ animatearrow(); }, 500);
                                   animateArrowATPosition(45,370,30,180);
                                   document.getElementById("a5-22").onclick=function() {
                                   myStopFunction();
                                   document.getElementById("a5-22").onclick="";
                                   var boxHandMargin = (data2[p][3]-5)*14.6;
                                   document.getElementById("a5-22").style.marginLeft = boxHandMargin + 'px';
                                   document.getElementById("a5-11").style.marginLeft = boxHandMargin + 'px';
                                   setTimeout(function()
                                   {
                                   document.getElementById('a5-22').style.display="none";
                                   document.getElementById('a5-11').style.display="none";
                                   document.getElementById('a51-111').style.visibility="visible";
                                   document.getElementById('paraa-1').innerHTML="Total Head:";
                                   document.getElementById('para10-1').innerHTML="Left Limb Reading="+data2[p][3]+" cm";
                                   setTimeout(function()
                                   {
                                   document.getElementById('a5-2').style.visibility="visible";
                                   myInt = setInterval(function(){ animatearrow(); }, 500);
                                   animateArrowATPosition(45,370,30,180);
                                   document.getElementById("a5-2").onclick=function() {
                                   myStopFunction();
                                   document.getElementById("a5-2").onclick="";
                                   var boxHandMargin = (data2[p][4]-5)*14.6;
                                   document.getElementById("a5-2").style.marginLeft = boxHandMargin + 'px';
                                   document.getElementById("a51-111").style.marginLeft = boxHandMargin + 'px';

                                   setTimeout(function()
                                   {
                                   document.getElementById('a5-2').style.visibility="hidden";
                                   document.getElementById('para20-1').innerHTML="Right Limb Reading="+data2[p][4]+" cm";
                                   document.getElementById('para30-1').innerHTML="Difference="+data2[p][5]+" cm";

                                   setTimeout(function()
                                   {
                                   document.getElementById('a51-111').style.display="none";
                                   display('paraa-1','para10-1','para20-1','para30-1','a5-2','a5-11','a34-2','a35-2','a35-22','a61-12','a13-2');
                                   document.getElementById('a34-22').style.visibility="hidden";
                                   document.getElementById('a30-2').style.visibility="hidden";
                                   setTimeout(function()
                                   {
                                   document.getElementById('Sample3').style.visibility="visible";
                                   setTimeout(function()
                                   {
                                   document.getElementById('Sample3').style.visibility="hidden";
                                   var leftLimbMargin = (data2[p][6]-15)*14.6;
                                   var rightLimbMargin = (data2[p][7]-15)*14.6;
                                   document.getElementById('a35-2').style.marginLeft = leftLimbMargin + 'px';
                                   document.getElementById('a35-22').style.marginLeft = rightLimbMargin + 'px';
                                   setTimeout(function()
                                   {
                                   document.getElementById('a6-2').style.visibility="visible";
                                   myInt = setInterval(function(){ animatearrow(); }, 500);
                                   animateArrowATPosition(45,370,30,180);
                                   document.getElementById("a6-2").onclick=function() {
                                   myStopFunction();
                                   document.getElementById("a6-2").onclick="";
                                   var boxHandMargin = (data2[p][6]-5)*14.6;
                                   document.getElementById("a6-2").style.marginLeft = boxHandMargin + 'px';
                                   document.getElementById("a61-12").style.marginLeft = boxHandMargin + 'px';

                                   setTimeout(function()
                                   {
                                   document.getElementById('para0-1').innerHTML="Velocity Head:";
                                   document.getElementById('para11-2').innerHTML="Left Limb Reading="+data2[p][6]+" cm";
                                   setTimeout(function()
                                   {
                                   document.getElementById('a6-12').style.visibility="visible";
                                   document.getElementById('a61-12').style.display="none";

                                   document.getElementById('a6-2').style.display="none";
                                   setTimeout(function()
                                   {
                                   document.getElementById('a6-22').style.visibility="visible";
                                   myInt = setInterval(function(){ animatearrow(); }, 500);
                                   animateArrowATPosition(45,370,30,180);
                                   document.getElementById("a6-22").onclick=function() {
                                   myStopFunction();
                                   document.getElementById("a6-22").onclick="";
                                   var boxHandMargin = (data2[p][7]-5)*14.6;
                                   document.getElementById("a6-22").style.marginLeft = boxHandMargin + 'px';
                                   document.getElementById("a6-12").style.marginLeft = boxHandMargin + 'px';
                                   setTimeout(function()
                                   {
                                   document.getElementById('a6-22').style.visibility="hidden";
                                   document.getElementById('para22-2').innerHTML="Right Limb Reading="+data2[p][7]+" cm";
                                   document.getElementById('para33-2').innerHTML="Difference="+data2[p][8]+" cm";
                                   document.getElementById('nextButton').style.visibility="visible";
                                   },3000);
                                  }
                                 },3000);
                                },3500);
                               },5500);
                              }
                             },7000);
                            },6000);
                           },1000);
                          },2000);
                         },4000);
                        }
                       },3000);
                      },3000);
                     }
                    },5000);
                   },3500);
                  },1000);
                 };
                },3500);
               },1500);
              },3000);
             },2000);
            }
           },3000);
          },2000);
         },2000);
        }
       },6000);
      },3000);
     },1000);
    },3000);
   }

     function initiate() {
       var img=document.getElementById('a2');
       var l=685;
       var t=80;
       var m1=document.getElementById('m1');
       m1.style.top=(t+1)+'px'; m1.style.left=(l+2)+'px';
       document.getElementById('m2').style.top=(t+41)+'px';
       document.getElementById('m2').style.left=(l+5)+'px';
       document.getElementById('m3').style.top=(t+70)+'px';
       document.getElementById('m3').style.left=(l+6)+'px';
       document.getElementById('m4').style.top=(t+105)+'px';
       document.getElementById('m4').style.left=(l+7)+'px';
       document.getElementById('m5').style.top=(t+132)+'px';
       document.getElementById('m5').style.left=(l+7.5)+'px';
       document.getElementById('m6').style.top=(t+147)+'px';
       document.getElementById('m6').style.left=(l+8)+'px';
     }
     function rt(n){
       var t=200;
       while(n){
         for(let i=6;i>0;i--){
           blink(i,t);
           t+=100;
         }
         n--;
       }
     }
     function blink(i,t){
       setTimeout(function(){document.getElementById('m'+i).style.opacity='1';},t);
       setTimeout(function(){document.getElementById('m'+i).style.opacity='0';},t+200);
     }
     function refresh(r1,r2,r3,r4)
     {
       document.getElementById(r1).style.visibility="hidden";
       document.getElementById(r2).style.visibility="hidden";
       document.getElementById(r3).style.visibility="hidden";
       document.getElementById(r4).style.visibility="hidden";
     }
     function refresh1(n1,n2,n3,n4)
     {
       document.getElementById(n1).style.display="none";
       document.getElementById(n2).style.display="none";
       document.getElementById(n3).style.display="none";
       document.getElementById(n4).style.display="none";
     }
     function display(para_1,para_2,para_3,para_4,para_5,para_6,para_7,para_8,para_9,para_10,para_11)
     {
       document.getElementById(para_1).style.visibility="hidden";
       document.getElementById(para_2).style.visibility="hidden";
       document.getElementById(para_3).style.visibility="hidden";
       document.getElementById(para_4).style.visibility="hidden";
       document.getElementById(para_5).style.visibility="hidden";
       document.getElementById(para_6).style.visibility="hidden";
       document.getElementById(para_7).style.visibility="hidden";
       document.getElementById(para_8).style.visibility="visible";
       document.getElementById(para_9).style.visibility="visible";
       document.getElementById(para_10).style.visibility="visible";
       document.getElementById(para_11).style.visibility="visible";
     }
     var k;
     function calc1(para_button,para_output,para_output,para_button,para_output,para_button1,para_button,para_wrong,para_wrong,para_right,para_button1,para_h1,para_h1,para_output,para_wrong,para_right,para_right,para_h1,para_h1,para_button,k )
     {
       var flag1=0;
       document.getElementById(para_button).onclick=function() {
         n= document.getElementById(para_output).value;
         if(document.getElementById(para_output).value==="")
         {
           if(document.getElementById(para_button).innerHTML==="Result"){
             document.getElementById(para_output).value=data5[p][k];
             document.getElementById(para_button1).style.visibility="visible";
             document.getElementById(para_button).style.visibility = "hidden";
             document.getElementById(para_wrong).style.visibility = "hidden";
           }
           else
             alert("Enter the value to proceed");
         }
         else {
           if(Math.floor(n)===Math.floor(data5[p][k])||Math.floor(n*10)===Math.floor(data5[p][k]*10)||Math.floor(n*100)===Math.floor(data5[p][k]*100)){
             document.getElementById(para_button).style.visibility = 'hidden';
             document.getElementById(para_wrong).style.visibility = "hidden";
             document.getElementById(para_right).style.visibility = "visible";
             document.getElementById(para_button1).style.visibility = 'visible';
             document.getElementById(para_h1).style.visibility="visible";
             document.getElementById(para_h1).innerHTML=data5[p][k];}
             else{
               flag1+=1;
               document.getElementById(para_output).value = "";
               document.getElementById(para_wrong).style.visibility = "visible";
               document.getElementById(para_right).style.visibility = "hidden";
               if (flag1===2){
                 if(Math.floor(n)===Math.floor(data5[p][k])||Math.floor(n*10)===Math.floor(data5[p][k]*10)||Math.floor(n*100)===Math.floor(data5[p][k]*100)){
                   document.getElementById(para_right).style.visibility="visible";
                   document.getElementById(para_h1).style.visibility="visible";
                   document.getElementById(para_h1).innerHTML=data5[p][k];
                 }
                 else
                   document.getElementById(para_button).innerHTML="Result";
               }
             }
           }
         };
       }
       var k;
       function calc2(para_button1,para_output1,para_output1,para_button1,para_output1,para_button11,para_button1,para_wrong1,para_wrong1,para_right1,para_button11,para_h11,para_h11,para_output1,para_wrong1,para_right1,para_right1,para_h11,para_h11,para_button1,k )
       {
         var flag1=0;
         document.getElementById(para_button1).onclick=function() {
           n= document.getElementById(para_output1).value;
           if(document.getElementById(para_output1).value==="")
           {
             if(document.getElementById(para_button1).innerHTML==="Result"){
               document.getElementById(para_output1).value=data6[p][k];
               document.getElementById(para_button11).style.visibility="visible";
               document.getElementById(para_button1).style.visibility = "hidden";
               document.getElementById(para_wrong1).style.visibility = "hidden";
             }
             else
               alert("Enter the value to proceed");
           }
           else {
             if(Math.floor(n)===Math.floor(data6[p][k])||Math.floor(n*10)===Math.floor(data6[p][k]*10)||Math.floor(n*100)===Math.floor(data6[p][k]*100)){
               document.getElementById(para_button1).style.visibility = 'hidden';
               document.getElementById(para_wrong1).style.visibility = "hidden";
               document.getElementById(para_right1).style.visibility = "visible";
               document.getElementById(para_button11).style.visibility = 'visible';
               document.getElementById(para_h11).style.visibility="visible";
               document.getElementById(para_h11).innerHTML=data6[p][k];}
               else{
                 flag1+=1;
                 document.getElementById(para_output1).value = "";
                 document.getElementById(para_wrong1).style.visibility = "visible";
                 document.getElementById(para_right1).style.visibility = "hidden";
                 if (flag1===2){
                   if(Math.floor(n)===Math.floor(data6[p][k])||Math.floor(n*10)===Math.floor(data6[p][k]*10)||Math.floor(n*100)===Math.floor(data6[p][k]*100)){
                     document.getElementById(para_right1).style.visibility="visible";
                     document.getElementById(para_h11).style.visibility="visible";
                     document.getElementById(para_h11).innerHTML=data6[p][k];
                   }
                   else
                     document.getElementById(para_button1).innerHTML="Result";
                 }
               }
             }
           };
         }