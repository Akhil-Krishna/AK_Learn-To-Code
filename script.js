

        function main_makeoff(){
            document.getElementById('main_modulo').style.display='none'
        }
        function main_makeon(){
            document.getElementById('main_modulo').style.display='block'
   
        }
    

//back button for registration
        function backbutton(){
            document.getElementById('signing').style.display='none'
        }
//backbutton for selection 
        function backbutton_sel(){
            document.getElementById('selecting').style.display='none'
        }

//signup page opening

        function open_signup(){
            document.getElementById('signing').style.display='block'
        }

//signup page js file
    var ager=document.getElementById('aging')
    var fn=document.getElementById('fname')
    var ln=document.getElementById('lname')
    var ml=document.getElementById('maila')
    
    
   // var lenn=parseInt(document.getElementById('fname').value.length)+parseInt(document.getElementById('lname').value.length)+1
   // console.log(document.getElementById('fname').value)

    function to_selection(){
        
        

        if(ager.value.length>2||ager.value<=5){
            document.getElementById('btnage').style.display='inline-block'
            document.getElementById('btnlname').style.display='none'
            document.getElementById('btnlname').style.display='none'
            document.getElementById('btnradio').style.display='none'
            document.getElementById('btnmail').style.display='none'
            //return false
        }
    
        else if(fn.value.trim()==''){
            document.getElementById('btnname').style.display='inline-block'
            document.getElementById('btnlname').style.display='none'
            document.getElementById('btnage').style.display='none'
            document.getElementById('btnradio').style.display='none'
            document.getElementById('btnmail').style.display='none'
            //return false
        }
        else if(ln.value.trim()==''){
            document.getElementById('btnname').style.display='none'
            document.getElementById('btnlname').style.display='inline-block'
            document.getElementById('btnage').style.display='none'
            document.getElementById('btnradio').style.display='none'
            //return false
        }
        else if(fn.value.trim().length+ln.value.trim().length<=3){
            document.getElementById('btnname').style.display='inline-block'
            document.getElementById('btnage').style.display='none'
            document.getElementById('btnlname').style.display='none'
            document.getElementById('btnradio').style.display='none'
            document.getElementById('btnmail').style.display='none'
            //return false
        }
        else if(document.getElementById('gend1').checked==false && document.getElementById('gend2').checked==false){
            document.getElementById('btnname').style.display='none'
            document.getElementById('btnlname').style.display='none'
            document.getElementById('btnage').style.display='none'
            document.getElementById('btnradio').style.display='inline-block'
            document.getElementById('btnmail').style.display='none'
        }
        /*else if(ml.value.trim().length>12 && String(ml.value).includes('@') && String(ml.value).includes('.com')){
            document.getElementById('btnname').style.display='none'
            document.getElementById('btnlname').style.display='none'
            document.getElementById('btnage').style.display='none'
            document.getElementById('btnradio').style.display='none'
            document.getElementById('btnmail').style.display='inline-block'
        }*/
       /* else if(String(ml.value).includes('@gmail') || String(ml.value).includes('@hotmails') || String(ml.value).includes('@yahoo') || String(ml.value).includes('@icloud') || String(ml.value).includes('@outlook') || String(ml.value).includes('@protonmail') || String(ml.value).includes('@zoho') || String(ml.value).includes('@proton') || String(ml.value).includes('@gmx') || String(ml.value).includes('@aol') || String(ml.value).includes('@yandex') || String(ml.value).includes('@hubspot'))
        {
            document.getElementById('btnname').style.display='none'
            document.getElementById('btnlname').style.display='none'
            document.getElementById('btnage').style.display='none'
            document.getElementById('btnradio').style.display='none'
            document.getElementById('btnmail').style.display='inline-block'
        }*/
        else{
            document.getElementById('selecting').style.display='block'
            
        }
    
    }


//opening selection
    function open_selection(){
        document.getElementById('selecting').style.display='block'
    }

//selection.js
    function selmouseov(){
        document.getElementById('selinf').style.display='inline-block'}
    function selmouseou(){
    document.getElementById('selinf').style.display='none'
    }
    function selmakeoff(){
    document.getElementById('selmodulo').style.display='none'
    }
    function selmakeon(){
    document.getElementById('selmodulo').style.display='block'

    }

    function extrahelperf(){
        document.getElementById('extrahelper').style.display='block'
        document.getElementById('selmodulo').style.display='none'
    }
    function extrahelperoff(){
        document.getElementById('extrahelper').style.display='none'
        
    }







//videoforum open

    function video_forum_open(){
        document.getElementById('video_forum').style.display='block'
    }
    function video_forum_off(){
        document.getElementById('video_forum').style.display='none'
    }





//all quiz back
function quizbackbutton(){
    var lolan=document.getElementsByClassName('closing_icon')
    var george=document.getElementsByClassName('closing_tab')
    for(let acrii=0;acrii<lolan.length;acrii++){
    lolan[acrii].style.display='none'
    george[acrii].style.display='none'
    
    }
    var sds=[ques_list,pyques_list,cques_list,ryques_list,webques_list,jvques_list,swques_list,phques_list,dtques_list]
    for(let asd=0;asd<sds.length;asd++){
        shuffleArray(sds[asd])
    }
}










//online quiz open


    function online_quiz_open(){
        document.getElementById('imodulo').style.display='block'
        imakeon()
    }
    function online_offer(){
        document.getElementById('imodulo').style.display='none'
        }


    //To load modulo when the page loads  vh
   // window.onload=imakeon

    

    //To make the timer work only if modulo is off
    var checker=0
    var f=0

    //clicking yes on modulo
    function makeoff(){
        document.getElementById('modulo_onl').style.display='none'
        checker=1
        var tmei=15
        if(checker==1){
            f=window.setInterval(tme,1000)
        }

        mover()

    }
    //next button
    function next(){
     mover()
    }

        //function for displaying modulo
    function imakeon(){
    
     document.getElementById('modulo_onl').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var tmei=15
    function tme(){
     if(tmei>0){
           tmei--
        }
        else{
            tmei=15
         mover()
        
        }
         document.getElementById('just').textContent=tmei
    }

    function shuffle(ar){
        var veruthe= [ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)]]
     return veruthe
    }
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
           var temp = array[i];
            array[i] = array[j];
         array[j] = temp;
       }
    }



    //Questions and answer  for the quiz
    var ques_list=[['.Which is the module used to work with binary files?',['dump','pickle','bintrack','json',1]],
    ['.Which tag is used to create a video element in html?',['<video>','<vdo>','<v>','<vid>',0]],
    ['.Which of the following is a valid identifier in python?',['variable1.','var-1','as','true',3]],
    ['.Which is the first version of python?',['0.9.0','0.1.0','1.0.0','0.1.1',0]],
    ['.How many types of loops are there in JavaScript?',['4','2','3','1',2]],
    ['.Which expression allows as to use functional programming in java 8?',['functional','lambda','dynamic','static',1]],
    ['.C and C++  are ________ languages ?',['dynamic','scripting','Interpreted','Static',3]],
    ['.Which keyword in Dart allows you to change type and value of variable?',['var','int','dynamic','vary',2]],
    ['.How to add multiline comments in ruby?',['=begin and =end','""" """','/* and */','///',0]],
    ['.PHP is a _______ language ?',['Static','Scripting','Compiled','Frontend',1]],
    ['.Swift language is used for developing ____ application?',['Windows OS','Android','Blackberry','IOS',3]],
    ['.How to take input from user in python ?',['int()','raw_input()','input()','eval()',2]],
    ['.Which of the following is used to take float input in C ?',['%fl','%f','%d','%float',1]],
    ['.Node.js uses ___ threaded model ?',['Multi','Triple','Single','Bi',2]],
    ['.Which of the following is a java feature?',['Use of pointers','dynamic','OOP','Architecture Neutral',0]]
    ]
    shuffleArray(ques_list)


    //tips center
    var tipper=[' Always give more preference to logic than coding'
    ,'Always think before you code',
    'Give more preference to logic than coding','Bugs are necessary to improve a coder',
    'Make a paper design before implementing','More than learning practice makes more sense'
    ,'Try to code all your ideas',
    'Making a perfect code is possible if you have the strength ',
    'Coding must be done along with learning',
    'Programming is a skil best acquired by practice and example rather than books',
    'Eat , Sleep , Code',
    'If you are a technical lead , you need to be coding',
    'Giving a quote works far better than a whole lecture',
    "Programming isn't about what you know , It is about what you can figure out",
    'While there is code there is bug',
    'Programming is usually taught by examples',
    'Premature optimization is the root of all evil',
    'Always talk less about your code'

]
shuffleArray(tipper);



    //Options
    var opt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var scr=0


    //creating question label
    var ques=document.getElementById('question')
    //creating options object
    var opt=document.getElementsByClassName('opt')
    var i=0
    //score variable for result.js
    var dis_score=document.getElementById('innerscore')


    function btnc(xxxxx){

        document.getElementsByClassName('opt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==ques_list[i-1][1][4]){
         document.getElementsByClassName('opt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         scr++
         dis_score.textContent='Score:'+scr
        }
        else{
            document.getElementsByClassName('opt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('opt')[ques_list[i-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(mover,470)
    
    }





    function mover(){
        if(i!=ques_list.length){
            if(tmei==0||tmei==1){tmei=15}
            else{tmei=15}
            
            ques.textContent='Q'+(i+1)+ques_list[i][0]
            opt[0].textContent=ques_list[i][1][0]
            opt[1].textContent=ques_list[i][1][1]
            opt[2].textContent=ques_list[i][1][2]
            opt[3].textContent=ques_list[i][1][3]
            document.getElementById('foot').innerHTML=tipper[i]
            for(var teta=0;teta<4;teta++){
                opt[teta].style.backgroundColor='#fff'
     }
     i++
    }
        else{
          window.clearInterval(f)
         document.getElementById('modulo2').style.display='inline-block'
        

        }
    

  
    
    }





//opening result.js
    function res_open_result(){
        document.getElementById('modulo2').style.display='none'
        document.getElementById('imodulo').style.display='none'
        document.getElementById('res_modulo').style.display='block'
        soceri()
    }

//result.js


    function soceri(){
    tscr=document.getElementById('innerscore').value

    document.getElementById('onlshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
   
    document.getElementById('onlshow_age').innerHTML=String(ager.value)


    if(((String((dis_score.innerHTML)).length)==7)){
    console.log(String(dis_score.innerHTML)[6])
    document.getElementById('onlshow_score').innerHTML=String(dis_score.innerHTML)[6] 
    jscr=parseInt(String(dis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(dis_score.innerHTML)[6]+String(dis_score.innerHTML)[7])
        document.getElementById('onlshow_score').innerHTML=String(dis_score.innerHTML)[6]+String(dis_score.innerHTML)[7]
        jscr=parseInt(String(dis_score.innerHTML)[6]+String(dis_score.innerHTML)[7])
    }

    if(jscr>13){
        var ograde='A'
        var orst='Passed'
        var omsg='Excellent (but keep practicing)'
        var oclo='rgb(30, 145, 30)'
    }
    else if(jscr>11){
        var ograde='B'
        var orst='Passed'
        var omsg='Good but need to work more and practice'
        var oclo='rgb(30, 145, 30)'
    }
    else if(jscr>8){
        var ograde='C'
        var orst='Passed'
        var omsg='It was a nice try but need to improve'
        var oclo='rgb(30, 145, 30)'
    }
    else if(jscr>5){
        var ograde='D'
        var orst='Passed'
        var omsg='Not a good performance, can improve'
        var oclo='rgb(30, 145, 30)'
    }
    else if(jscr>2){
        var ograde='E'
        var orst='Passed'
        var omsg='Just passed ,You must workout daily'
        var oclo='rgb(30, 145, 30)'
    }
    else{
        document.getElementById("mybtn").disabled = true;
        document.getElementById('mybtn').style.backgroundColor='skyblue'
        document.getElementById('mybtn').style.cursor='not-allowed'
        document.getElementById('mybtn').innerHTML='No Certificate'
        var ograde='F'
        var orst='Failed'
        var omsg='Poor performance but can improve (No certificate) '
        var oclo='red'
    }

    document.getElementById('onlshow_grade').innerHTML=ograde
    document.getElementById('onlshow_result').innerHTML=orst
    document.getElementById('onlshow_msg').innerHTML=omsg
    document.getElementById('onlshow_result').style.color=oclo


    }


















//python quiz open

          
    function py_quiz_open(){
        document.getElementById('pyinnerscore').innerHTML='Score:0'
        document.getElementById('pymodulo').style.display='block'
        pymakeon()
    }
    function py_offer(){
        document.getElementById('pymodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=pymakeon

    //To make the timer work only if modulo is off
    var pychecker=0
    var pyf=0

    //clicking yes on modulo
    function pymakeoff(){
        document.getElementById('modulo_py').style.display='none'
        pychecker=1
        var pytmei=15
        if(pychecker==1){
            pyf=window.setInterval(pytme,1000)
        }

        pymover()

    }
    //next button
    function pynext(){
     pymover()
    }

        //function for displaying modulo
    function pymakeon(){
    
     document.getElementById('modulo_py').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var pytmei=15
    function pytme(){
     if(pytmei>0){
           pytmei--
        }
        else{
            pytmei=15
         pymover()
        
        }
         document.getElementById('pyjust').textContent=pytmei
    }

    function shuffle(ar){
        var veruthe= [ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)],ar[Math.floor(Math.randint()*10)]]
     return veruthe
    }
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
           var temp = array[i];
            array[i] = array[j];
         array[j] = temp;
       }
    }


    //Questions and answer  for the quiz
    var pyques_list=[['.Which is the module used to work with binary files?',['dump','pickle','bintrack','json',1]],
    ['.Which module in python is used widely to build cross-platform application?',['tkinter','simplegui','pyqt5','kivy',3]],
    ['.Which of the following is a valid identifier in python?',['variable1.','var-1','as','true',3]],
    ['.Which is the first version of python?',['0.9.0','0.1.0','1.0.0','0.1.1',0]],
    ['.Python is a ________ language ?',['Compiled','Scripting','Case-insensitive','Static',1]],
    ['.Which method is used to take input in Python2?',['input()','int()','raw_input()','float()',2]],   
    ['.How many types of loops are there in Python?',['4','2','3','1',1]],
    ['.A void function returns?',['0','empty values','empty string','[]',1]],
    ['.A void function is also known as ___ function?',['empty','non-return','zero','non-fruitful',3]],
    ['.Who is the founder of python',['Dennis Ritchie','Guild Wan Rossum','Guido Van Rossum','Danial Ritchie',2]],
    ['.A _____ is a word with a special meaning?',['Keyword','Identifier','Literals','Mean',0]],
    ['.Index starts from ?',['0','1','3','-1',0]],
    ['.What will be the output of the below code ? \n print()',['None','Black line','A tab ','Emnpty string',1]],
    ['.Which of the following is a mutable data type ?',['int','complex','tuple','set',3]],
    ['.Any valid combination of operators and atoms is called?',['Statement','Data','Expression','Equation',2]],
    ['.Which of the following has the highest preferrence?',['**','()','*','/',1]],
    ['.Which function returns the smallest integer not less than the number given as parameter?',['fails()','fabs()','floor()','ceil()',3]],
    ['.What will be the output? \n print(3*3/3+1)',['4','2.25','4.0','2.255',2]],
    ['.Negative index starts from?',['-1','0','-<length of object>','1',0]],
    ['.Python framework for backend(web development)?',['kivy','Dinjo','Django','PyQt5',2]],
    ['.What is Stacks?',['Data Type','Object','Library','Data Structure',3]],
    ['.Which rule is obeyed by Stack in python?',['LIFO','FIFO','LIFQ','FILO',0]],
    ['.Queue is _____?',['Data','Package','Data type','Data Structure',3]],
    ['.Queue Follows _____ principle?',['LiFQ','FIFO','DATA-STORE','5.6.4',1]],
    ['.The name of the situation(error) When one tries to pop an empty stack,?',['NoElement Error','Over','Empty','Underflow',3]],
    ['.Process of inspecting top element of a stack is known as ?',['Top(lak)','Peek(inspection)','Inspection(Leafing)','Narrow',1]],
    ['.Situation(error) when one tries to push an element to a stack which is complete?',['Peek','Overflow','Brimming Up','Full up',1]],
    ['.List Comprehension is introduced to make the code?',['Readable','Sensitive to error','Short','Align',2]],
    ['.Array in python refers to the group of ____ type of elements?',['Different','Homogeneous','String','Integer',1]],
    ['.___ is a collection of methods within matplotlib  library of python?',['PyQt5','DataCutter','PyPlot','Mat.6',2]],    
    [".Which of the following is an internal factor which specifies algorithm's efficiency?",['Quality of compiler','Speed of computer','Size of input','Time required',3]],
    [".How many external factors affect the algorithm's efficiency?",['3','2','4','1',0]],
    [".___ is a particular tool for accessing algorithm's efficency?",['Timer','Big-O notation','Efficency scale','Code length',1]],
    ['.___ binary file mode is used for adding elemnts to the last of a binary file?',['w','a','ab','wb',2]],
    ['.What is  the default mode while working with text files?',['read','write','extend','append',0]],
    ['.What is the output? print(1+2/2+2*8/4+1)',['4.7','7','7.0','5.2',2]],
    ['.Keys of dictionary must be ___?',['tuple','list','mutable','immutable',3]],
    ['.Which of the following is a membership operator?',['is','in','==','as',1]],
    ['.Which of the following is a string replication operator?',['*','+','__add__','+=',0]],
    ['.___ refers to iterating through each element of a sequence?',['Slicing','Inspecting','Traversing','Iterating',2]],
    ['.The method which returns the length of the sequence?',['length()','len()','s-len()','.length',1]],
    ['.Dictionary is a/an ____ set of elements?',['Ordered','Linked','Unlinked','Unordered',3]],
    ['.Which of the following can be an output of the code? print(100+random.randint(5,10))',['115','4','100','110',3]],
    ['.What will be the time complexity of a constant?',['O(1)','O(0)','O(n)','O(n^0)',0]],
    ['.Binary Search will work only for ____ type of arrays?',['Int','Sorted','Float','Unsorted',1]],
    ['.A list which has one or more list as its element is known as _____?',['Native list','Sorted list','Parent list','Nested list',3]],
    ['.A data structure whose elements forms a sequence is known as ___ data structure?',['Linear','Sequential','Ordered','None',0]],
    ['.Prefix notations of expressions starts with?',['Operands','+','Operators','None',2]],
    ['.What is the data type of n in the following code? n=(3)',['tuple','list','int','str',2]],
    ['.What is the data type of n1 in the following code? n=3, ',['tuple','list','str','int',0]],


]
    shuffleArray(pyques_list)

    //tips center
    var pytipper=[' Always give more preference to logic than coding'
    ,'Always think before you code',
    'Give more preference to logic than coding','Bugs are necessary to improve a coder',
    'Make a paper design before implementing','More than learning practice makes more sense'
    ,'Try to code all your ideas',
    'Making a perfect code is possible if you have the strength ',
    'Coding must be done along with learning',
    'Programming is a skil best acquired by practice and example rather than books',
    'Eat , Sleep , Code',
    'If you are a technical lead , you need to be coding',
    'Giving a quote works far better than a whole lecture',
    "Programming isn't about what you know , It is about what you can figure out",
    'While there is code there is bug',
    'Programming is usually taught by examples',
    'Premature optimization is the root of all evil',
    'Always talk less about your code'

]
   shuffleArray(pytipper);


    //Options
    var pyopt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var pyscr=0


    //creating question label
    var pyques=document.getElementById('pyquestion')
    //creating options object
    var pyopt=document.getElementsByClassName('pyopt')
    var pyi=0
    //score variable for result.js
    var pydis_score=document.getElementById('pyinnerscore')


    function pybtnc(xxxxx){
        document.getElementsByClassName('pyopt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==pyques_list[pyi-1][1][4]){
         document.getElementsByClassName('pyopt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         pyscr++
         pydis_score.textContent='Score:'+pyscr
        }
        else{
            document.getElementsByClassName('pyopt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('pyopt')[pyques_list[pyi-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(pymover,480)
    
    }


    function pycaller(){
        for(var teta=0;teta<4;teta++){
            pyopt[teta].style.backgroundColor='#fff'

        pyi=0
        pyscr=0

    }
    }

    function pymover(){
        if(pyi!=10){
            if(pytmei==0||pytmei==1){pytmei=15}
            else{pytmei=15}
            
            pyques.textContent='Q'+(pyi+1)+pyques_list[pyi][0]
            pyopt[0].textContent=pyques_list[pyi][1][0]
            pyopt[1].textContent=pyques_list[pyi][1][1]
            pyopt[2].textContent=pyques_list[pyi][1][2]
            pyopt[3].textContent=pyques_list[pyi][1][3]
            document.getElementById('pyfoot').innerHTML=pytipper[pyi]
            for(var teta=0;teta<4;teta++){
                pyopt[teta].style.backgroundColor='#fff'
     }
     pyi++
    }
        else{
          window.clearInterval(pyf)

          
         document.getElementById('pymodulo2').style.display='inline-block'

         pycaller()

        }


    

  
    
    }
//opening pyresult.js
    function pyres_open_result(){
        
        document.getElementById('pymodulo2').style.display='none'
        document.getElementById('pymodulo').style.display='none'
        document.getElementById('pyres_modulo').style.display='block'
        pysoceri()
    }

//pyresult.js

    function pysoceri(){
    pytscr=document.getElementById('pyinnerscore').value

    document.getElementById('show_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('show_age').innerHTML=String(ager.value)


    if(((String((pydis_score.innerHTML)).length)==7)){
    console.log(String(pydis_score.innerHTML)[6])
    document.getElementById('show_score').innerHTML=String(pydis_score.innerHTML)[6] 
    pyjscr=parseInt(String(pydis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(pydis_score.innerHTML)[6]+String(pydis_score.innerHTML)[7])
        document.getElementById('show_score').innerHTML=String(pydis_score.innerHTML)[6]+String(pydis_score.innerHTML)[7]
        pyjscr=parseInt(String(pydis_score.innerHTML)[6]+String(pydis_score.innerHTML)[7])
    }

    if(pyjscr>8){
        var grade='A'
        var rst='Passed'
        var msg='Excellent (but keep practicing)'
        var clo='rgb(30, 145, 30)'
    }
    else if(pyjscr>6){
        var grade='B'
        var rst='Passed'
        var msg='Good but need to work more and practice'
        var clo='rgb(30, 145, 30)'
    }
    else if(pyjscr>4){
        var grade='C'
        var rst='Passed'
        var msg='It was a nice try but need to improve'
        var clo='rgb(30, 145, 30)'
    }
    else if(pyjscr>1){
        var grade='D'
        var rst='Passed'
        var msg='Not a good performance'
        var clo='rgb(30, 145, 30)'
    }
    else{
        var grade='E'
        var rst='Failed'
        var msg='Poor performance but can improve '
        var clo='red'
    }

    document.getElementById('show_grade').innerHTML=grade
    document.getElementById('show_result').innerHTML=rst
    document.getElementById('show_msg').innerHTML=msg
    document.getElementById('show_result').style.color=clo


    }




//c/c++ quiz open

          
    function c_quiz_open(){
        document.getElementById('cinnerscore').innerHTML='Score:0'
        document.getElementById('cmodulo').style.display='block'
        cmakeon()
    }
    function c_offer(){
        document.getElementById('cmodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=cmakeon

    //To make the timer work only if modulo is off
    var cchecker=0
    var cf=0

    //clicking yes on modulo
    function cmakeoff(){
        document.getElementById('modulo_c').style.display='none'
        cchecker=1
        var ctmei=15
        if(cchecker==1){
            cf=window.setInterval(ctme,1000)
        }

        cmover()

    }
    //next button
    function cnext(){
     cmover()
    }

        //function for displaying modulo
    function cmakeon(){
    
     document.getElementById('modulo_c').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var ctmei=15
    function ctme(){
     if(ctmei>0){
           ctmei--
        }
        else{
            ctmei=15
         cmover()
        
        }
         document.getElementById('cjust').textContent=ctmei
    }

    


    //Questions and answer  for the c/c++ quiz
    var cques_list=[
        ['.C and C++  are ________ languages ?',['dynamic','scripting','Interpreted','Static',3]],
        ['.Which of the following is the correct syntax to add the header file in the C++ program?',['#include<userdefined>','#include "userdefined.h"','<include> "userdefined.h"','Both A and B',3]],
        ['. Which of the following is the correct syntax to print the message in C++ language?',['cout <<"Hello world!";','Cout << Hello world! ;','Out <<"Hello world!;','None of the above',0]],
        ['.Which of the following is the correct syntax for declaring the array?',['Array[]','init arr[5]','int array[5]','arrr[3]',2]],
        ['.Which of the following is considered as an object of an array?',['function','Elements','method','index',1]],
        ['.Which type of memory is used by an Array in C++ programming language?',['Contiguous','Non-contiguous','Stepped','None',0]],
        ['.How many types of the array are there in the C++ programming language?',['4','1','3','2',3]],
        ['.rank() returns _____ of an array?',['Data type collection','Size of each element','Dimension of the array','Last element of the array',2]],
        ['. Which types of arrays are always considered as linear arrays?',['X-array','Single Dimensional','Y-array','Empty Array',1]],
        ['.Which of the following can be considered as the members that can be inherited but not accessible in any class?',['Private','Public','Static','Objects',0]],
        ['.Which of the following is used for implementing the late binding?',['Constant Functions','Operator Functions','Virtual Functions','None',2]],
        ['.Among the following, which shows the Multiple inheritances?',['X,Y->Z','X->Y->Z','X->Y;X->Z','None of these',0]],
        ['. Which of the following refers to using the existing code instead of rewriting it?',['Inheritance','Encapsulation','Abstraction','Data Structure',0]],
        ['.Which one of the following cannot be a friend in C++ languages?',['A Class','A Function','An Object','None of these',2]],
        ['.Which of the following offers a programmer the facility of using a specific class object into other classes?',['Abstraction','Composition','Polymorphism','Inheritance',1]],
        ['. Which of the following concept refers to adding new components to the program at the run time?',['Data hiding','Dynamic loading','Dynamic binding','None of these',0]],
        ['.Which type of approach is used by the C++ language?',['Top-bottom','Bottom-up','Left-right','Right-left',1]],
        ['.What will happen if "In a C++ program a class has no name"?',['Warning','Error','Lack of destructor','Cannot return anything',2]],
        ['.Which of the following is not a kind of inheritance?',['Distributed','Multi-level','Multiple','Hierarcal',0]],
        ['.What is a lint?',['Compiler','Package','Data type','Analyzing tool',3]],
        ['.What is the output of this statement "printf("%d", (a++))"?',['Value of a + 1','Error','Warning','Current value of a',3]],
        ['.What does this declaration mean \n "int x:4?"',['x has value 4','Default value as 4','x is a 4-bit integer','x has 4 digits',2]],
        ['.Why is a macro used in place of a function?',['To boost Readability ','Reduction of code','Efficency increase','For analyzing',1]],
        ['.Which one of the following is a loop construct that will always be executed once?',['while','for','switch','do while',3]],
        ['.Index starts from ?',['0','1','3','-1',0]],
        ['.Directives are translated by the?',['Linker','Compiler','Interpreter','Pre-processor',3]],
        ['.How many bytes does "int = D" use?',['0 or 1','2 or 4','8 or 16','3 or 6',1]],
        ['.What feature makes C++ so powerful?',['Easy implementation','Reusing the old code','Easy memory management','All of the above',3]],
        ['. Which of the following will copy the null-terminated string that is in array src into array dest?',['strcpy(src,dest);','dest=src','strcpy(dest,src);','dest==src',2]],
        ['.In the statement "COUT << "javatpoint" << end1;", end1 is a ___ .',['Manipulator','Extractor','Terminator','Inserter',0]],
        ['.What is the extension of C++ files?',['.c','.c++','.cpp','.cpq',2]],
        ['.What is the extension of a C file?',['.cpl','.C','..c','.c',3]],
        ['.C language is a successor to which language?',['B language','BCPL','C++','Fortran',0]],
        ['.C is a which type of language?',['High','Low','Low + High','None of these',0]],
        ['.C is _______ type of programming language?',['Object oriented','Procedural','Bit level','Functional',1]],
        ['.What are the new features of C11 or ISO IEC 9899 2011 standard?',['Multi threading','Anonymous structure','Static assertion','All the above',3]],
        ['.C language was invented in which laboratories?',['IBM labs','Verizon labs','AT&T Bell labs','Uniliver labs',2]],
        ['.C language was invented to develop which Operating System.?',['Linux','Ubuntu','Android','Unix',3]],
        ['.Find a correct C Keyword below.',['default','breaker','go on','taker',0]],
        ['.Find a correct C Keyword below.',['constant','work','case','__add',2]],
        ['.Which operator has highest precedence?',['++','()','+','*',1]],
        ['.Which of the following operator has higher preference?',['/','*','%','same for /,*,%',3]],
        ['.How to access and edit data in data file handling using structures?',['read()','write()','Both a and b','None of these',2]],
        ['.A C++ code line ends with ___',[';','?','.',':',0]],
        ['.An expression A.B in C++ means ____.',['A multiplied to B','A is member of Obj B','B dot product A','B is member of Obj A',3]],
        ['.____ function is used to allocate space for array in memory.',['call()','calloc()','mlock()','malloc()',1]],
        ['.A ponter pointing to a variable that is not initialized is called ____.',['Initializer','Init pointer','Null Pointer','Wild Pointer',2]],
        ['.Default constructor has ____ arguments.',['0','1','2','3',0]],
        ['.A class whos objects can not be created is known as _____.',['Nuclear Class','Numero Uno Class','Sigleton Class','Abstruct Class',2]],
        ['.In C++ Program, inline fuctions are expanded during ____.',['Run Time','Debug Time','Compile Time','Terming Time',0]]
        
    ]
    shuffleArray(cques_list)

    //tips center
    var ctipper=[' Always give more preference to logic than coding'
    ,'Always think before you code',
    'Give more preference to logic than coding','Bugs are necessary to improve a coder',
    'Make a paper design before implementing','More than learning practice makes more sense'
    ,'Try to code all your ideas',
    'Making a perfect code is possible if you have the strength ',
    'Coding must be done along with learning',
    'Programming is a skil best acquired by practice and example rather than books',
    'Eat , Sleep , Code',
    'If you are a technical lead , you need to be coding',
    'Giving a quote works far better than a whole lecture',
    "Programming isn't about what you know , It is about what you can figure out",
    'While there is code there is bug',
    'Programming is usually taught by examples',
    'Premature optimization is the root of all evil',
    'Always talk less about your code'

]
    shuffleArray(ctipper);


    //Options
    var copt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var cscr=0


    //creating question label
    var cques=document.getElementById('cquestion')
    //creating options object
    var copt=document.getElementsByClassName('copt')
    var ci=0
    //score variable for result.js
    var cdis_score=document.getElementById('cinnerscore')


    function cbtnc(xxxxx){
        document.getElementsByClassName('copt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==cques_list[ci-1][1][4]){
         document.getElementsByClassName('copt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         cscr++
         cdis_score.textContent='Score:'+cscr
        }
        else{
            document.getElementsByClassName('copt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('copt')[cques_list[ci-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(cmover,490)
    
    }


    function ccaller(){
        for(var teta=0;teta<4;teta++){
            copt[teta].style.backgroundColor='#fff'

        ci=0
        cscr=0

    }
    }


    function cmover(){
        if(ci!=10){
            if(ctmei==0||ctmei==1){ctmei=15}
            else{ctmei=15}
            
            cques.textContent='Q'+(ci+1)+cques_list[ci][0]
            copt[0].textContent=cques_list[ci][1][0]
            copt[1].textContent=cques_list[ci][1][1]
            copt[2].textContent=cques_list[ci][1][2]
            copt[3].textContent=cques_list[ci][1][3]
            document.getElementById('cfoot').innerHTML=ctipper[ci]
            for(var teta=0;teta<4;teta++){
                copt[teta].style.backgroundColor='#fff'
     }
     ci++
    }
        else{
          window.clearInterval(cf)
         document.getElementById('cmodulo2').style.display='inline-block'
         ccaller()
        

        }
    

  
    
    }
//opening c/c++result.js
    function cres_open_result(){
        document.getElementById('cmodulo2').style.display='none'
        document.getElementById('cmodulo').style.display='none'
        document.getElementById('cres_modulo').style.display='block'
        csoceri()
    }

//cresult.js

    function csoceri(){
    ctscr=document.getElementById('cinnerscore').value

    document.getElementById('cshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('cshow_age').innerHTML=String(ager.value)


    if(((String((cdis_score.innerHTML)).length)==7)){
    console.log(String(cdis_score.innerHTML)[6])
    document.getElementById('cshow_score').innerHTML=String(cdis_score.innerHTML)[6] 
    cjscr=parseInt(String(cdis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(cdis_score.innerHTML)[6]+String(cdis_score.innerHTML)[7])
        document.getElementById('cshow_score').innerHTML=String(cdis_score.innerHTML)[6]+String(cdis_score.innerHTML)[7]
        cjscr=parseInt(String(cdis_score.innerHTML)[6]+String(cdis_score.innerHTML)[7])
    }

    if(cjscr>8){
        var cgrade='A'
        var crst='Passed'
        var cmsg='Excellent (but keep practicing)'
        var cclo='rgb(30, 145, 30)'
    }
    else if(cjscr>6){
        var cgrade='B'
        var crst='Passed'
        var cmsg='Good but need to work more and practice'
        var cclo='rgb(30, 145, 30)'
    }
    else if(cjscr>4){
        var cgrade='C'
        var crst='Passed'
        var cmsg='It was a nice try but need to improve'
        var cclo='rgb(30, 145, 30)'
    }
    else if(cjscr>1){
        var cgrade='D'
        var crst='Passed'
        var cmsg='Not a good performance'
        var cclo='rgb(30, 145, 30)'
    }
    else{
        var cgrade='E'
        var crst='Failed'
        var cmsg='Poor performance but can improve '
        var cclo='red'
    }

    document.getElementById('cshow_grade').innerHTML=cgrade
    document.getElementById('cshow_result').innerHTML=crst
    document.getElementById('cshow_msg').innerHTML=cmsg
    document.getElementById('cshow_result').style.color=cclo


    }





//              RUBy way in it Ruby ruby ruby ruby ruby ruby ruby
//ruby ruby ruby ruby ruby ruby ruby ruby ruby ruby ruby ruby


//rython quiz open

          
    function ry_quiz_open(){
        document.getElementById('ryinnerscore').innerHTML='Score:0'
        document.getElementById('rymodulo').style.display='block'
        rymakeon()
    }
    function ry_offer(){
        document.getElementById('rymodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=rymakeon

    //To make the timer work only if modulo is off
    var rychecker=0
    var ryf=0

    //clicking yes on modulo
    function rymakeoff(){
        document.getElementById('modulo_ry').style.display='none'
        rychecker=1
        var rytmei=15
        if(rychecker==1){
            ryf=window.setInterval(rytme,1000)
        }

        rymover()

    }
    //next button
    function rynext(){
     rymover()
    }

        //function for displaying modulo
    function rymakeon(){
    
     document.getElementById('modulo_ry').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var rytmei=15
    function rytme(){
     if(rytmei>0){
           rytmei--
        }
        else{
            rytmei=15
         rymover()
        
        }
         document.getElementById('ryjust').textContent=rytmei
    }

    

    //Questions and answer  for the quiz
    var ryques_list=[
        ['.Framework in Ruby used for backend in web applications?',['Extends.Ruby','Daily.Ruby','Express.Ruby','Rails.Ruby',3]],
        ['.Ruby is a/an _____ language?',['Functional programming','Selective ','Object oriented','FO',2]],
        ['.Ruby is ____ type of language?',['Scripting','markup','procedural','Stylesheet',0]],
        ['.Ruby was designed by _____?',['Rossum','Dennis','Danilo','Yukihiro Matsumoto',3]],
        ['.Ruby was created in ___?',['1992','1993','1995','2000',1]],
        ['.Which of the languages syntax matches with the Ruby’s syntax?',['PHP','Perl','Python','JS',1]],
        ['.Extension for a ruby file?',['.rb','.ruby','.ry','.ru',0]],
        ['.In ruby, A sequence of string is?',['8-bit bytes','32-Bit bytes','16 Bit bytes','64-Bit bytes',0]],
        ['. Which of the following is not a valid datatype in Ruby?',['integer','float','binary','timedate',3]],
        ['.A container for a group of web pages is called?',['Matter','Controller','Webdata','Folder',1]]
        ['.Which character is used to give a single line comment in ruby?',['@','//','&&','#',3]],
        ['.Which of the following is supported by Ruby?',['Multiple Programming Paradigms','Dynamic Type System','Automatic Memory Management','All the above',3]],
        ['.Ruby can be used for developing ____ application?',['internet','intra','3','-1',0]],
        ['.________ datatypes are valid in Ruby ?',['Integer','String','Boolean','All the above',3]],
        ['.Ruby can be embedded into Hypertext Markup Language.?',['Yes','May be','No','Using js loader',0]],
        ['.Is Ruby a case-sensitive language?',['No','May be','Yes','sometimes',2]],
        ['.The most intelligent ruby IDE?',['Rubyide','RubyMine','Ruby-R','Rcharm',1]],
        ['.Ruby is famous for ?',['Web development','IOS app','Android app','Game development',0]],
        ['.Rail is used to develop the UI of?',['Google','Twitter','Facebook','Instagram',1]],
        ['.Which of the following comments are valid in ruby?',['Single line','Double line','Multi line','All the above',3]],
        ['.____ method is used to remove leading and trailing spaces of a string?',['remove','truncate','ltspace','trim',3]],
        ['.____ method is used to add elements to anywhere in the string?',['append','insert','extend','add',1]],
        ['.____ and ___ are methods used to align characters in a string?',['left & right','Left & Right','PadLeft & PadRight','lt & rt',2]],
        ['.What is the size of "Char" data type ?',['16-bit','8-bit','32-bit','64-bit',0]],
        ['.Ruby use interactive prompt called ?',['ppp','irp','prompt-rc','irb',3]],
        ['.false ___ be a value?',["can't",'may','can','wrong question',2]],
        ['.Key-value pair data type in ruby is called?',['List','Symbols','Dictionary','Hashes',3]],
        ['.___ is a data type in which elements are enclosed within square brackets?',['Tuple','Array','Dict','Symbols',1]],
        ['.How many type of loops are there in ruby ?',['1','3','2','4',3]],
        ['.In Ruby, Index starts from ?',['1','0','3','-1',1]],
        ['.What is the size of an integer data type in ruby?',['-2^30 - 2^30','-2^30 - 2^29','-2^29 - 2^30','-2^29 - 2^31',1]],
        ['.What is the range of octal notation?',['8-16','0-16','0-7','0-8',2]],
        ['.Which of the following is the valid string method?',['.irreverse','.downcase','.upcase','.length',0]],
        ['.Methods should not be written inside double quotes.',['False','True','Sometimes','Only in loop',1]],
        ['.A ____ is a self contained bundles of gems.',['Bundle','Gempack','Gp','Gemset',3]],
        ['.Rails application framework is called __',['ActiveRecord','Webobj','ActionPack','Page',2]],
        [".What is the output of the command awk 'BEGIN {printf'%cn',65}' ?",['65','A','Error','Ruby',1]]

    ]
    shuffleArray(ryques_list)

    //tips center
    var rytipper=[' Always give more preference to logic than coding'
    ,'Always think before you code',
    'Give more preference to logic than coding','Bugs are necessary to improve a coder',
    'Make a paper design before implementing','More than learning practice makes more sense'
    ,'Try to code all your ideas',
    'Making a perfect code is possible if you have the strength ',
    'Coding must be done along with learning',
    'Programming is a skil best acquired by practice and example rather than books',
    'Eat , Sleep , Code',
    'If you are a technical lead , you need to be coding',
    'Giving a quote works far better than a whole lecture',
    "Programming isn't about what you know , It is about what you can figure out",
    'While there is code there is bug',
    'Programming is usually taught by examples',
    'Premature optimization is the root of all evil',
    'Always talk less about your code'

]
shuffleArray(rytipper);


    //Options
    var ryopt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var ryscr=0


    //creating question label
    var ryques=document.getElementById('ryquestion')
    //creating options object
    var ryopt=document.getElementsByClassName('ryopt')
    var ryi=0
    //score variable for result.js
    var rydis_score=document.getElementById('ryinnerscore')


    function rybtnc(xxxxx){
        document.getElementsByClassName('ryopt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==ryques_list[ryi-1][1][4]){
         document.getElementsByClassName('ryopt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         ryscr++
         rydis_score.textContent='Score:'+ryscr
        }
        else{
            document.getElementsByClassName('ryopt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('ryopt')[ryques_list[ryi-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(rymover,478)
    
    }


    function rycaller(){
        for(var teta=0;teta<4;teta++){
            ryopt[teta].style.backgroundColor='#fff'

        ryi=0
        ryscr=0

    }
    }


    function rymover(){
        if(ryi!=10){
            if(rytmei==0||rytmei==1){rytmei=15}
            else{rytmei=15}
            
            ryques.textContent='Q'+(ryi+1)+ryques_list[ryi][0]
            ryopt[0].textContent=ryques_list[ryi][1][0]
            ryopt[1].textContent=ryques_list[ryi][1][1]
            ryopt[2].textContent=ryques_list[ryi][1][2]
            ryopt[3].textContent=ryques_list[ryi][1][3]
            document.getElementById('ryfoot').innerHTML=rytipper[ryi]
            for(var teta=0;teta<4;teta++){
                ryopt[teta].style.backgroundColor='#fff'
     }
     ryi++
    }
        else{
          window.clearInterval(ryf)
         document.getElementById('rymodulo2').style.display='inline-block'
        rycaller()

        }
    
    }




//opening ryresult.js
    function ryres_open_result(){
        document.getElementById('rymodulo2').style.display='none'
        document.getElementById('rymodulo').style.display='none'
        document.getElementById('ryres_modulo').style.display='block'
        rysoceri()
    }

//rubyresult.js

    function rysoceri(){
    rytscr=document.getElementById('ryinnerscore').value

    document.getElementById('ryshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('ryshow_age').innerHTML=String(ager.value)


    if(((String((rydis_score.innerHTML)).length)==7)){
    console.log(String(rydis_score.innerHTML)[6])
    document.getElementById('ryshow_score').innerHTML=String(rydis_score.innerHTML)[6] 
    ryjscr=parseInt(String(rydis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(rydis_score.innerHTML)[6]+String(rydis_score.innerHTML)[7])
        document.getElementById('ryshow_score').innerHTML=String(rydis_score.innerHTML)[6]+String(rydis_score.innerHTML)[7]
        ryjscr=parseInt(String(rydis_score.innerHTML)[6]+String(rydis_score.innerHTML)[7])
    }

    if(ryjscr>8){
        var rygrade='A'
        var ryrst='Passed'
        var rymsg='Excellent (but keep practicing)'
        var ryclo='rgb(30, 145, 30)'
    }
    else if(ryjscr>6){
        var rygrade='B'
        var ryrst='Passed'
        var rymsg='Good but need to work more and practice'
        var ryclo='rgb(30, 145, 30)'
    }
    else if(ryjscr>4){
        var rygrade='C'
        var ryrst='Passed'
        var rymsg='It was a nice try but need to improve'
        var ryclo='rgb(30, 145, 30)'
    }
    else if(ryjscr>1){
        var rygrade='D'
        var ryrst='Passed'
        var rymsg='Not a good performance'
        var ryclo='rgb(30, 145, 30)'
    }
    else{
        var rygrade='E'
        var ryrst='Failed'
        var rymsg='Poor performance but can improve '
        var ryclo='red'
    }

    document.getElementById('ryshow_grade').innerHTML=rygrade
    document.getElementById('ryshow_result').innerHTML=ryrst
    document.getElementById('ryshow_msg').innerHTML=rymsg
    document.getElementById('ryshow_result').style.color=ryclo


    }





// web web wbe wbe web web wbe web web web web wbe web web web web web wbe wweb 
// web web wbe wbe web web wbe web web web web wbe web web web web web wbe wweb 
// web web wbe wbe web web wbe web web web web wbe web web web web web wbe wweb 

//web quiz open

          
    function web_quiz_open(){
        document.getElementById('webinnerscore').innerHTML='Score:0'
        document.getElementById('webmodulo').style.display='block'
        webmakeon()
    }
    function web_offer(){
        document.getElementById('webmodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=cmakeon

    //To make the timer work only if modulo is off
    var webchecker=0
    var webf=0

    //clicking yes on modulo
    function webmakeoff(){
        document.getElementById('modulo_web').style.display='none'
        webchecker=1
        var webtmei=15
        if(webchecker==1){
            webf=window.setInterval(webtme,1000)
        }

        webmover()

    }
    //next button
    function webnext(){
     webmover()
    }

        //function for displaying modulo
    function webmakeon(){
    
     document.getElementById('modulo_web').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var webtmei=15
    function webtme(){
     if(webtmei>0){
           webtmei--
        }
        else{
            webtmei=15
         webmover()
        
        }
         document.getElementById('webjust').textContent=webtmei
    }

    


    //Questions and answer  for the c/c++ quiz
    var webques_list=[
        ['.In which version of html did the developers add video element?',['4','5','2','5.6',1]],
        ['.While opening a website web browser act ____ program?',['client','server','backed','launching',0]],
        ['.Which tag is used for adding a line break in html5?',['<cr/>','<hr/>','<br>','</hr>',2]],
        ['.Full form of HTML?',['Hypertext Markup language','Hypertype markup Language','Hypertech Markup language','None',0]],
        ['.Which language is used to make websites interactive?',['css','php','java','js',3]],
        ['.What is the extension of a javascript file?',['.jss','.j','.js','.JS',2]],
        ['.Which element is used to add an audio in Html?',['<ado>','<audo>','<a>','<audio>',3]],
        ['.HTML was introduced in the year?',['1993','1991','1982','1995',0]],
        ['.Who introduced HTML?',['Rossum','Dennis Ritchie','Tim Berners-Lee','Tomy Berincer Leen',2]],
        ['.which property in css align different element in a container in y axis?',['y-axis','vertical-align','y-align','row',1]],
        ['.JS was introduced in the year?',['1992','1993','1995','2000',2]],
        ['.JS was developed by?',['Dennis Ritchie','Van Rossum','Danies','Brendan Eich',3]],
        ['.Which type of JavaScript language is ___?',['Assembly','Object-oriented','Object-based','Low-level',2]],
        ['.Which one of the following also known as Conditional Expression?',['immediate if','Alternative to if-else','Switch','if-then-else',0]],
        ['.When interpreter encounters an empty statements, what it will do ?',['Warning','Error','Ignores','Stop',2]],
        ['.The "function" and " var" are known as ?',['Keywords','Declaration statements','Variables','Data types',1]],
        ['.Switch is used normally when conditions are?',['Less','More','Related','not-related',1]],
        ['.Which of the following variables takes precedence over the others if the names are the same?',['Global variables','Local variables','Equal','None of these',1]],
        ['.In JS, Index starts from ?',['0','1','3','-1',0]],
        ['.Inh JS, array is enclosed within __ brackets?',['Curly','Curved','Square','Paranthesis',2]],
        ['.CSS is used for ___?',['Structure','Styling','Aligning','Non-styling',1]],
        ['.JS makes the website ____?',['Responsive','Aligned','Decorative','Interactive',3]],
        ['.Run time envirinment for js is known as',['RTM','Node.js','Express','Angular',1]],
        ['.The most popular js engine?',['v8','spidermonkey','chakra','edge-js',0]],
        ['.Which of the following type of a variable is volatile?',['Mutable','Volatile','Dynamic','Immutable',0]],
        ['.Which css framework is usde for developing responcive websites?',['Jquery','Bootstrap','Bootsrap','CSS-res.1',1]],
        ['.Which element is used for adding underline to text?',['<ul></ul>','<un></un>','<u></u>','<line></line>',2]],
        ['.___ property is used for giving boldness to text?',['bold','<b></b>','<br></br>','font-weight',0]],
        ['.How many ways in which we can link or write css to an html file ?',['3','2','1','4',0]],
        ['.What is jQuery?',['JS Framework','JS Library','JS Method','None of these',1]],
        ['.Which is the best JS Library for Front end?',['React','Angular','Nest','None of these',0]],
        ['.The CSS property used to control the elements font-size is -',['FontSize','fontsize','fz','font-size',3]],
        ['.The HTML attribute used to define the inline styles is -',['class','style','css','stle',1]],
        ['.Which of the following CSS property is used to set the background image of an element?',['background-image','bg-image','background-img','bg-img',0]],
        ['.Which of the following property is used as the shorthand property for the padding properties?',['padding-all','pding','padding','padding-dir',2]],
        ['.The CSS property used to make the text bold is -',['font:bold;','fnt:bold;','font-bold:100;','font-weight:bold;',3]],
        ['.How to create a checkbox in HTML?',['<input type="checkbox">','<checkbox type="check">','<input type="check">','<check required>',0]],
        ['.Which of the following tag is used to define options in a drop-down selection list?',['<dropdown>','<select>','<list>','<option>',3]],
        ['.Which of the following tag is used to add rows in the table?',['<row>','<tr>','<td>','<trow>',1]],
        ['.The <hr> tag in HTML is used for -',['tab','breaker','horizontal ruler','line breaker',2]],
        ['.Which of the following attribute is used to provide a unique name to an element?',['#id','cls','class','id',3]],
        ['.Which of the following HTML tag is used to display the text with scrolling effect?',['<marquee>','<scroll>','<sideway>','<touch>',0]],
        ['.Which of the following HTML tag is the special formatting tag?',['<request>','<format>','<pre>','<squad>',2]],
        ['.How to insert a background image in HTML?',['<body bg="img.png">','<body background="img.png">','Both a and b','None of these',1]],
        ['.Which of the following is the correct way to create a list using the lowercase letters?',['<ol req="lower">','<ol case="a">','<ol alpha="a">','<ol type="a">',3]],
        ['.A program in HTML can be rendered and read by -',['Server','Web browser','Google','Search engines',1]],
        ['.The tags in HTML are -',['Case insensitive','Case sensitive','Lowercase','Uppercae',0]],
        ['.Which of the following is the root tag of the HTML document?',['<body>','<head>','<root>','<html>',3]],
        ['.Which of the following tag is used to create a combo box (or drop-down box)?',['<combo>','<input type="drop">','<select>','<opt>',2]],
        ['.Which of the following is the correct way to change the font face in HTML?',['<font name="Calibri"></font>','<font face="Calibri"></font>','<font Calibri></font>','None of these',1]],
    ]
    shuffleArray(webques_list)

    //tips center
    var webtipper=[' Always give more preference to logic than coding'
    ,'Always think before you code',
    'Give more preference to logic than coding','Bugs are necessary to improve a coder',
    'Make a paper design before implementing','More than learning practice makes more sense'
    ,'Try to code all your ideas',
    'Making a perfect code is possible if you have the strength ',
    'Coding must be done along with learning',
    'Programming is a skil best acquired by practice and example rather than books',
    'Eat , Sleep , Code',
    'If you are a technical lead , you need to be coding',
    'Giving a quote works far better than a whole lecture',
    "Programming isn't about what you know , It is about what you can figure out",
    'While there is code there is bug',
    'Programming is usually taught by examples',
    'Premature optimization is the root of all evil',
    'Always talk less about your code'

]
shuffleArray(webtipper);


    //Options
    var webopt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var webscr=0


    //creating question label
    var webques=document.getElementById('webquestion')
    //creating options object
    var webopt=document.getElementsByClassName('webopt')
    var webi=0
    //score variable for result.js
    var webdis_score=document.getElementById('webinnerscore')


    function webbtnc(xxxxx){
        document.getElementsByClassName('webopt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==webques_list[webi-1][1][4]){
         document.getElementsByClassName('webopt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         webscr++
         webdis_score.textContent='Score:'+webscr
        }
        else{
            document.getElementsByClassName('webopt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('webopt')[webques_list[webi-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(webmover,500)
    
    }


    function webcaller(){
        for(var teta=0;teta<4;teta++){
            webopt[teta].style.backgroundColor='#fff'

        webi=0
        webscr=0

    }
    }


    function webmover(){
        if(webi!=10){
            if(webtmei==0||webtmei==1){webtmei=15}
            else{webtmei=15}
            
            webques.textContent='Q'+(webi+1)+webques_list[webi][0]
            webopt[0].textContent=webques_list[webi][1][0]
            webopt[1].textContent=webques_list[webi][1][1]
            webopt[2].textContent=webques_list[webi][1][2]
            webopt[3].textContent=webques_list[webi][1][3]
            document.getElementById('webfoot').innerHTML=webtipper[webi]
            for(var teta=0;teta<4;teta++){
                webopt[teta].style.backgroundColor='#fff'
     }
     webi++
    }
        else{
          window.clearInterval(webf)
         document.getElementById('webmodulo2').style.display='inline-block'
        webcaller()

        }
    

  
    
    }
//openingwebresult.js
    function webres_open_result(){
        document.getElementById('webmodulo2').style.display='none'
        document.getElementById('webmodulo').style.display='none'
        document.getElementById('webres_modulo').style.display='block'
        websoceri()
    }

//webresult.js

    function websoceri(){
    webtscr=document.getElementById('webinnerscore').value

    document.getElementById('webshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('webshow_age').innerHTML=String(ager.value)


    if(((String((webdis_score.innerHTML)).length)==7)){
    console.log(String(webdis_score.innerHTML)[6])
    document.getElementById('webshow_score').innerHTML=String(webdis_score.innerHTML)[6] 
    webjscr=parseInt(String(webdis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(webdis_score.innerHTML)[6]+String(webdis_score.innerHTML)[7])
        document.getElementById('webshow_score').innerHTML=String(webdis_score.innerHTML)[6]+String(webdis_score.innerHTML)[7]
        webjscr=parseInt(String(webdis_score.innerHTML)[6]+String(webdis_score.innerHTML)[7])
    }

    if(webjscr>8){
        var webgrade='A'
        var webrst='Passed'
        var webmsg='Excellent (but keep practicing)'
        var webclo='rgb(30, 145, 30)'
    }
    else if(webjscr>6){
        var webgrade='B'
        var webrst='Passed'
        var webmsg='Good but need to work more and practice'
        var webclo='rgb(30, 145, 30)'
    }
    else if(webjscr>4){
        var webgrade='C'
        var webrst='Passed'
        var webmsg='It was a nice try but need to improve'
        var webclo='rgb(30, 145, 30)'
    }
    else if(webjscr>1){
        var webgrade='D'
        var webrst='Passed'
        var webmsg='Not a good performance'
        var webclo='rgb(30, 145, 30)'
    }
    else{
        var webgrade='E'
        var webrst='Failed'
        var webmsg='Poor performance but can improve '
        var webclo='red'
    }

    document.getElementById('webshow_grade').innerHTML=webgrade
    document.getElementById('webshow_result').innerHTML=webrst
    document.getElementById('webshow_msg').innerHTML=webmsg
    document.getElementById('webshow_result').style.color=webclo


    }









//java java java java jajva jaa ja jav aj jav jav java jkava jva j
//java java java java jajva jaa ja jav aj jav jav java jkava jva j
//java java java java jajva jaa ja jav aj jav jav java jkava jva j
//java quiz open

          
    function jv_quiz_open(){
        document.getElementById('jvinnerscore').innerHTML='Score:0'
        document.getElementById('jvmodulo').style.display='block'
        jvmakeon()
    }
    function jv_offer(){
        document.getElementById('jvmodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=jvmakeon

    //To make the timer work only if modulo is off
    var jvchecker=0
    var jvf=0

    //clicking yes on modulo
    function jvmakeoff(){
        document.getElementById('modulo_jv').style.display='none'
        jvchecker=1
        var jvtmei=15
        if(jvchecker==1){
            jvf=window.setInterval(jvtme,1000)
        }

        jvmover()

    }
    //next button
    function jvnext(){
     jvmover()
    }

        //function for displaying modulo
    function jvmakeon(){
    
     document.getElementById('modulo_jv').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var jvtmei=15
    function jvtme(){
     if(jvtmei>0){
           jvtmei--
        }
        else{
            jvtmei=15
         jvmover()
        
        }
         document.getElementById('jvjust').textContent=jvtmei
    }

    


    //Questions and answer  for the c/c++ quiz
    var jvques_list=[
        ['.Java was created in ___?',['1995','1993','1992','1991',0]],
        ['.Java was developed by ___?',['Rossum','Ritchie','James Gosling','Jamy Gosbing',2]],
        ['.Which of the following option leads to the portability and security of Java?',['Bytecode is executed by JVM','exception handling','Debugging','Dynamic binding of objects',0]],
        ['.Which of the following is not a Java features?',['Use of pointers','Architecture Neutral','Object oriented','Dynamic',0]],
        ['._____ is used to find and fix bugs in the Java programs',['JVM','JCD','JDK','JDB',3]],
        ['.What is the return type of the hashCode() method in the Object class?',['void','int','Object','long',1]],
        ['.Which of the following is a valid long literal?',['ABH8097','904423','L99002','0xnf029L',3]],
        ['.What does the expression float a = 35 / 0 return?',['0','ZeroDivision Error','infinity','NAN',2]],
        ['.Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?',['Javadoc tool','javaw command','javap tool','Javainer tool',0]],
        ['.Which of the following creates a List of 3 visible items and multiple selections abled?',['new List(false, 3)','new List(3, true)','new List(true, 3)','new List(3, false)',1]],
        ['. Which method of the Class.class is used to determine the name of a class represented by the class object as a String?',['toString()','contains()','getName()','intern()',2]],
        ['.Which of these keywords is used to make a class?',['cls','class','obj','classes',1]],
        ['.Which of the following is a valid declaration of an object of class Box?',['Box obj=new Box();','Box obj=new Box;','new Box obj;','obj=new Box();',0]],
        ['.____ is used to allocate memory for an object.',['alloc','obj','new','give',2]],
        ['.What is the return type of a method that does not return any value?',['int','none','empty','void',3]],
        ['.What is the process of defining more than one method in a class differentiated by method signature?',['Overloading','Overriding','Doubling','None of these',0]],
        ['.Which of the following is a method having same name as that of it’s class?',['delete','constructor','cls','class',1]],
        ['.Which method can be defined only once in a program?',['final method','static method','main method','constant method',2]],
        ['.What is the return type of Constructors?',['void','int','string','None of these',3]],
        ['.Which keyword is used by the method to refer to the object that invoked it?',['import','catch','abstract','this',3]],
        ['.Which of the following is a method having same name as that of its class?',['constructor','finalize','delete','None of these',0]],
        ['.Which operator is used by Java run time implementations to free the memory of an object when it is no longer needed?',['delete','free','new','None of these',3]],
        ['.Which function is used to perform some action when the object is to be destroyed?',['main()','finalize()','delete()','None of these',1]],
        ['.What would be the behaviour if this() and super() used in a method?',['Runs smoothly','Throws exception','Compile time error','Runtime error',2]],
        ['.Which of the following has the highest memory requirement?',['JVM','Heap','Stack','Class',0]],
        ['.Where is a new object allocated memory?',['Old space','Young space','JVM','J-pad',1]],
        ['.Which of the following is a garbage collection technique?',['D-model','Mark','Mark and sweep model','Sweep',2]],
        ['.What is -Xms and -Xmx while starting jvm?',['Initial memory','Min memory','Max memory','Initial; Maximum memory',3]],
        ['.How to get prints of shared object memory maps or heap memory maps for a given process?',['memorymap','jvmmap','jmap','None of these',2]],
        ['.Which of the below is not a Java Profiler?',['JVM','Eclipse profile','Jprofile','Jconsole',0]],
        ['.What is the process of defining two or more methods within same class that have same name but different parameters declaration?',['Method overloading','Method overriding','Method hiding','Method hack',0]],
        ['.Which of these can be overloaded?',['Method','Constructor','Both a and b','None of these',2]],
        ['.What is the process of defining a method in terms of itself, that is a method that calls itself?',['Polymorphism','Abstraction','Encapsulation','Recursion',3]],
        ['.Which of these access specifiers must be used for main() method?',['private','public','protected','None of these',1]],
        ['.Which of these is used to access a member of class before object of that class is created?',['protected','public','static','private',2]],
        ['.Which of these is used as a default for a member of a class if no access specifier is used for it?',['private','public','protected','static',0]],
        ['.What is the process by which we can control what parts of a program can access the members of a class?',['Polymorphism','Recursion','Encapsulation','Abstraction',2]],
        ['.Which of these access specifier must be used for class so that it can be inherited by another subclass?',['protected','static','private','public',3]],
        ['.Arrays in Java are implemented as?',['Object','Class','Variable','None of these',0]],
        ['.Which of these keywords is used to prevent content of a variable from being modified?',['last','start','final','constant',2]],
        ['.Which of these cannot be declared static?',['method','variable','class','object',3]],
        ['.Which of these methods must be made static?',['delete()','main()','run()','finalize()',1]],
        ['.Which of these operators can be used to concatenate two or more String objects?',['*','.add()','+=','+',3]],
        ['.Which of this method of class String is used to obtain a length of String object?',['length()','lengthof()','getlen()','len()',0]],
        ['.Which of these method of class String is used to extract a single character from a String object?',['str()','char()','charAt()','CHARAT()',2]],
        ['.Which of these constructors is used to create an empty String object?',['String("")','String()','void()','None of these',1]],
        ['.Which method can be used to check fileAccessiblity?',['isReadable(path)','isWritable(path)','isExecutable(path)','All the above',3]],
        ['.How can we delete all files in a directory?',['Files.deleteDir()','Directory.delete(path)','Files.delete(path)','Directory.delete()',2]],
        ['.How can we get the size of specified file?',['size(path)','capacity(path)','length(path)','None of these',0]],
        ['.Which of these operators can skip evaluating right hand operand?',['||','&&','!','%',1]]
    ]
    shuffleArray(jvques_list)

    //tips center
    var jvtipper=[' Always give more preference to logic than coding'
    ,'Always think before you code',
    'Give more preference to logic than coding','Bugs are necessary to improve a coder',
    'Make a paper design before implementing','More than learning practice makes more sense'
    ,'Try to code all your ideas',
    'Making a perfect code is possible if you have the strength ',
    'Coding must be done along with learning',
    'Programming is a skil best acquired by practice and example rather than books',
    'Eat , Sleep , Code',
    'If you are a technical lead , you need to be coding',
    'Giving a quote works far better than a whole lecture',
    "Programming isn't about what you know , It is about what you can figure out",
    'While there is code there is bug',
    'Programming is usually taught by examples',
    'Premature optimization is the root of all evil',
    'Always talk less about your code'

]
shuffleArray(jvtipper);


    //Options
    var jvopt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var jvscr=0


    //creating question label
    var jvques=document.getElementById('jvquestion')
    //creating options object
    var jvopt=document.getElementsByClassName('jvopt')
    var jvi=0
    //score variable for result.js
    var jvdis_score=document.getElementById('jvinnerscore')


    function jvbtnc(xxxxx){
        document.getElementsByClassName('jvopt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==jvques_list[jvi-1][1][4]){
         document.getElementsByClassName('jvopt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         jvscr++
         jvdis_score.textContent='Score:'+jvscr
        }
        else{
            document.getElementsByClassName('jvopt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('jvopt')[jvques_list[jvi-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(jvmover,470)
    
    }

    function jvcaller(){
        for(var teta=0;teta<4;teta++){
            jvopt[teta].style.backgroundColor='#fff'

        jvi=0
        jvscr=0

    }
    }



    function jvmover(){
        if(jvi!=10){
            if(jvtmei==0||jvtmei==1){jvtmei=15}
            else{jvtmei=15}
            
            jvques.textContent='Q'+(jvi+1)+jvques_list[jvi][0]
            jvopt[0].textContent=jvques_list[jvi][1][0]
            jvopt[1].textContent=jvques_list[jvi][1][1]
            jvopt[2].textContent=jvques_list[jvi][1][2]
            jvopt[3].textContent=jvques_list[jvi][1][3]
            document.getElementById('jvfoot').innerHTML=jvtipper[jvi]
            for(var teta=0;teta<4;teta++){
                jvopt[teta].style.backgroundColor='#fff'
     }
     jvi++
    }
        else{
          window.clearInterval(jvf)
         document.getElementById('jvmodulo2').style.display='inline-block'
        jvcaller()

        }
    

  
    
    }
//opening java result.js
    function jvres_open_result(){
        document.getElementById('jvmodulo2').style.display='none'
        document.getElementById('jvmodulo').style.display='none'
        document.getElementById('jvres_modulo').style.display='block'
        jvsoceri()
    }

//java result.js

    function jvsoceri(){
    jvtscr=document.getElementById('jvinnerscore').value

    document.getElementById('jvshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('jvshow_age').innerHTML=String(ager.value)


    if(((String((jvdis_score.innerHTML)).length)==7)){
    console.log(String(jvdis_score.innerHTML)[6])
    document.getElementById('jvshow_score').innerHTML=String(jvdis_score.innerHTML)[6] 
    jvjscr=parseInt(String(jvdis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(jvdis_score.innerHTML)[6]+String(jvdis_score.innerHTML)[7])
        document.getElementById('jvshow_score').innerHTML=String(jvdis_score.innerHTML)[6]+String(jvdis_score.innerHTML)[7]
        jvjscr=parseInt(String(jvdis_score.innerHTML)[6]+String(jvdis_score.innerHTML)[7])
    }

    if(jvjscr>8){
        var jvgrade='A'
        var jvrst='Passed'
        var jvmsg='Excellent (but keep practicing)'
        var jvclo='rgb(30, 145, 30)'
    }
    else if(jvjscr>6){
        var jvgrade='B'
        var jvrst='Passed'
        var jvmsg='Good but need to work more and practice'
        var jvclo='rgb(30, 145, 30)'
    }
    else if(jvjscr>4){
        var jvgrade='C'
        var jvrst='Passed'
        var jvmsg='It was a nice try but need to improve'
        var jvclo='rgb(30, 145, 30)'
    }
    else if(jvjscr>1){
        var jvgrade='D'
        var jvrst='Passed'
        var jvmsg='Not a good performance'
        var jvclo='rgb(30, 145, 30)'
    }
    else{
        var jvgrade='E'
        var jvrst='Failed'
        var jvmsg='Poor performance but can improve '
        var jvclo='red'
    }

    document.getElementById('jvshow_grade').innerHTML=jvgrade
    document.getElementById('jvshow_result').innerHTML=jvrst
    document.getElementById('jvshow_msg').innerHTML=jvmsg
    document.getElementById('jvshow_result').style.color=jvclo


    }










//swift4 quiz open

          
    function sw_quiz_open(){
        document.getElementById('swinnerscore').innerHTML='Score:0'
        document.getElementById('swmodulo').style.display='block'
        swmakeon()
    }
    function sw_offer(){
        document.getElementById('swmodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=rymakeon

    //To make the timer work only if modulo is off
    var swchecker=0
    var swf=0

    //clicking yes on modulo
    function swmakeoff(){
        document.getElementById('modulo_sw').style.display='none'
        swchecker=1
        var swtmei=15
        if(swchecker==1){
            swf=window.setInterval(swtme,1000)
        }

        swmover()

    }
    //next button
    function swnext(){
     swmover()
    }

        //function for displaying modulo
    function swmakeon(){
    
     document.getElementById('modulo_sw').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var swtmei=15
    function swtme(){
     if(swtmei>0){
           swtmei--
        }
        else{
            swtmei=15
         swmover()
        
        }
         document.getElementById('swjust').textContent=swtmei
    }

    

    //Questions and answer  for the quiz 30
    var swques_list=[
        ['.Swift was first appeared in ___?',['2012','1995','2010','2014',3]],
        ['.Swift was created by ___?',['Chris Lattner','Guido S','Rachel','Danies Hamper',0]],
        ['.Swift was created to overcome the difficulties of ___ language?',['C','Perl','Objective C','Python',2]],
        ['.Swift is mainly used for ____ development?',['Android app','IOS app','Desktop app','OS',1]],
        ['.IOS is a ___ software?',['Proprietary','Free','Free open source','None',0]],
        ['.What Is Bundle In IOS?',['File with swift','Folder with .app(ext)','Module','Framework',1]],
        ['.Most powerful IDE for swift?',['Gas','Ld','Xcode','Swiftc',2]],
        ['.Swift will automatically assign the data type based on the ___ value?',['Final','Initial','Default','Constant',1]],
        ['.Swift is a ___ language',['Interpreted','Low level','Scripting','None',2]],
        ['.Which keyword is used to create a constant in Swift?',['let','const','var','constant',0]],
        ['.Which Of The Following Declares A Mutable Array In Swift?',['Let X=[Int]','Var X=[Int]','Let X =[Int]()','Var X=[Int]()',3]],
        ['____ keyword in swift used to initialize the variable?',['NIL','init','nil','int',2]],
        ['. What is the user interface of Iphone OS called?',['Catch ios','Touchwiz','Mobiface','Cocoa',1]],
        ['.Which of the following framework is not used in IOS?',['AppKit','UIKit','CoreMotion','Foundation',0]],
        ['.Which are the control transfer statements used in Swift?',['break','continue','fallthrough','All the above',3]],
        ['.What type of integer is denoted by "Int8"?',['open','close','signed','unsigned',2]],
        ['. Which Of The Following Is Incorrect Data Type In SWIFT ?',['var','Char','double','optional',1]],
        ['.We Can Return Multiple Values In Swift From Function By Using?',['Array','List','Double','Tuple',3]],
        ['.Double has a precision of ____ decimal digits ?',['10','20','15','16',2]],
        ['.IOS stands for ___',['Internet Operating System','Iphone Operating System','I Operating System','None of these',1]],
        ['.The IDE used for swift is ____',['Xcode','LD','Gas','SwiftC',0]],
        ['.To create a mutable object ____ is used',['let','var','char','dyn',1]],
        ['.Which of the following is IOS Framework is a commonly used 3rd party library?',[' AVFoundation.framework','Audiotoolbox.framework','Audiotoolbox.framework','AFNetwork.framework',3]],
        ['.To create contants in swift __ keyword is used',['var','dyn','let','char',2]],
        ['.We can return multiple values from a function by using',['Tuple','Array','Map','Number',0]],
        ['.Multitasking in IOS was introduced in which version',['IOS 3.0','IOS 5.0','IOS 7.0','IOS 4.0',3]],
        ['.Which of the following is the incorrect value type in Swift',['Double','Class','Enum','Character',1]],
        ['.For unwrapping values inside optional, what should we use?',['?','@','!','^',2]],
        ['.Which of the following frameworkis not used in IOS?',['UIKit','AppKit','Foundation','CoreMotion',1]],
        ['.Which of the following declares a mutable array',['let X =[Int]()','var X=[Int]()','var X==[Int]','None of these',1]],

    ]
    shuffleArray(swques_list)

    //tips center
    var swtipper=[' Always give more preference to logic than coding'
    ,'Always think before you code',
    'Give more preference to logic than coding','Bugs are necessary to improve a coder',
    'Make a paper design before implementing','More than learning practice makes more sense'
    ,'Try to code all your ideas',
    'Making a perfect code is possible if you have the strength ',
    'Coding must be done along with learning',
    'Programming is a skil best acquired by practice and example rather than books',
    'Eat , Sleep , Code',
    'If you are a technical lead , you need to be coding',
    'Giving a quote works far better than a whole lecture',
    "Programming isn't about what you know , It is about what you can figure out",
    'While there is code there is bug',
    'Programming is usually taught by examples',
    'Premature optimization is the root of all evil',
    'Always talk less about your code'

]
shuffleArray(swtipper);

    //Options
    var swopt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var swscr=0


    //creating question label
    var swques=document.getElementById('swquestion')
    //creating options object
    var swopt=document.getElementsByClassName('swopt')
    var swi=0
    //score variable for result.js
    var swdis_score=document.getElementById('swinnerscore')


    function swbtnc(xxxxx){
        document.getElementsByClassName('swopt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==swques_list[swi-1][1][4]){
         document.getElementsByClassName('swopt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         swscr++
         swdis_score.textContent='Score:'+swscr
        }
        else{
            document.getElementsByClassName('swopt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('swopt')[swques_list[swi-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(swmover,470)
    
    }


    function swcaller(){
        for(var teta=0;teta<4;teta++){
            swopt[teta].style.backgroundColor='#fff'

        swi=0
        swscr=0

    }
    }


    function swmover(){
        if(swi!=10){
            if(swtmei==0||swtmei==1){swtmei=15}
            else{swtmei=15}
            
            swques.textContent='Q'+(swi+1)+swques_list[swi][0]
            swopt[0].textContent=swques_list[swi][1][0]
            swopt[1].textContent=swques_list[swi][1][1]
            swopt[2].textContent=swques_list[swi][1][2]
            swopt[3].textContent=swques_list[swi][1][3]
            document.getElementById('swfoot').innerHTML=swtipper[swi]
            for(var teta=0;teta<4;teta++){
                swopt[teta].style.backgroundColor='#fff'
     }
     swi++
    }
        else{
          window.clearInterval(swf)
         document.getElementById('swmodulo2').style.display='inline-block'
        swcaller()

        }
    
    }







//opening swresult.js
    function swres_open_result(){
        document.getElementById('swmodulo2').style.display='none'
        document.getElementById('swmodulo').style.display='none'
        document.getElementById('swres_modulo').style.display='block'
        swsoceri()
    }

//swift4result.js

    function swsoceri(){
    swtscr=document.getElementById('swinnerscore').value

    document.getElementById('swshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('swshow_age').innerHTML=String(ager.value)


    if(((String((swdis_score.innerHTML)).length)==7)){
    console.log(String(swdis_score.innerHTML)[6])
    document.getElementById('swshow_score').innerHTML=String(swdis_score.innerHTML)[6] 
    swjscr=parseInt(String(swdis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(swdis_score.innerHTML)[6]+String(swdis_score.innerHTML)[7])
        document.getElementById('swshow_score').innerHTML=String(swdis_score.innerHTML)[6]+String(swdis_score.innerHTML)[7]
        swjscr=parseInt(String(swdis_score.innerHTML)[6]+String(swdis_score.innerHTML)[7])
    }

    if(swjscr>8){
        var swgrade='A'
        var swrst='Passed'
        var swmsg='Excellent (but keep practicing)'
        var swclo='rgb(30, 145, 30)'
    }
    else if(swjscr>6){
        var swgrade='B'
        var swrst='Passed'
        var swmsg='Good but need to work more and practice'
        var swclo='rgb(30, 145, 30)'
    }
    else if(swjscr>4){
        var swgrade='C'
        var swrst='Passed'
        var swmsg='It was a nice try but need to improve'
        var swclo='rgb(30, 145, 30)'
    }
    else if(swjscr>1){
        var swgrade='D'
        var swrst='Passed'
        var swmsg='Not a good performance'
        var swclo='rgb(30, 145, 30)'
    }
    else{
        var swgrade='E'
        var swrst='Failed'
        var swmsg='Poor performance but can improve '
        var swclo='red'
    }

    document.getElementById('swshow_grade').innerHTML=swgrade
    document.getElementById('swshow_result').innerHTML=swrst
    document.getElementById('swshow_msg').innerHTML=swmsg
    document.getElementById('swshow_result').style.color=swclo


    }












//php quiz open

          
    function ph_quiz_open(){
        document.getElementById('phinnerscore').innerHTML='Score:0'
        document.getElementById('phmodulo').style.display='block'
        phmakeon()
    }
    function ph_offer(){
        document.getElementById('phmodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=phmakeon

    //To make the timer work only if modulo is off
    var phchecker=0
    var phf=0

    //clicking yes on modulo
    function phmakeoff(){
        document.getElementById('modulo_ph').style.display='none'
        phchecker=1
        var phtmei=15
        if(phchecker==1){
            phf=window.setInterval(phtme,1000)
        }

        phmover()

    }
    //next button
    function phnext(){
     phmover()
    }

        //function for displaying modulo
    function phmakeon(){
    
     document.getElementById('modulo_ph').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var phtmei=15
    function phtme(){
     if(phtmei>0){
           phtmei--
        }
        else{
            phtmei=15
         phmover()
        
        }
         document.getElementById('phjust').textContent=phtmei
    }

    






    //Questions and answer  for the quiz
    var phques_list=[
    ['.Which of the following is used to display the output in PHP?',['echo','print','display','both a and b',3]],
    ['.Which of the following is used for concatenation in PHP?',['.(dot)','+(plus)','.append','*',0]],
    ['.Which of the following starts with __ (double underscore) in PHP?',['Inbuilt Constants','Magic Constants','Default Contants','None of these',1]],
    ['.Which of the following is the correct way to create a function in PHP?',['Create myFunction()','New_function myFunction()','function myFunction()','None of these',2]],
    ['.Which keyword is used to create functions in php?',['def','function','functions','func',1]],
    ['.How many types of loops are there in php?',['3','2','12','4',3]],
    ['.Which keyword is used to add morethan one condition in the same decision making?',['elseif','elif','eif','elesif',0]],
    ['.Who is known as the father of PHP?',['Drek Kolkevi','List Barely','Rasmus Lerdrof','Swifter',2]],
    ['.Variable name in PHP starts with.',['!','$','#','&',1]],
    ['.Which of the following is the default file extension of PHP?',['.php','.PHP','.Hypertxt','.hpp',0]],
    ['.Which of the following is not a variable scope in PHP?',['Global','Local','Static','Extern',3]],
    ['.Which of the following is correct to add a multiline comment in php?',['/*...*/','$...$','//','&..&',0]],
    ['.Which of the following PHP function is used to generate unique id?',['id()','uniqueid()','mdid()','uiq()',1]],
    ['.Which of the following is the correct way of defining a variable in PHP?',['$varname=value;','varname=value','var varname=value;','None of these',0]],
    ['.___ function is used to compare the strings including case.',['scase()','case()','str()','strcmp()',3]],
    ['.___ function is used to open file in php.',['fileopen()','$fo()','fopen()','open()',2]],
    ['.Which function is used to send output to a variable in php.',['send()','sprint()','print()','return()',1]],
    ['.Which of the following function displays the information about PHP and its configuration?',['phpinfo()','info()','pinfo()','informer()',0]],
    ['.Which of the following function is used to find files in PHP?',['finder()','glob()','look()','dir()',1]],
    ['.Which of the following function is used to get the ASCII value of a character in PHP?',['ascii()','char()','val()','chr()',3]],
    ['.Which of the following function is used to set cookie in PHP?',['setcookie()','cookie()','cset()','defset()',0]],
    ['.Which of the following function is used to unset a variable in PHP?',['cross_set()','noset()','unset()','unlink()',2]],
    ['.Which of the following function is used to sort an array in descending order?',['rsort()','dsort()','sort()','rev_sort()',0]],
    ['.Which of the following is/are the code editors in PHP?',['Notepad++','Adobe Dreamweaver','Notepad','All of the above',3]],
    ['.Which of the following is used to end a statement in PHP?',['!','$',';','&',2]],
    ['.Which of the following function in PHP can be used to test the type of any variable?',['type()','gettype()','test()','typ()',1]],
    ['.Which version of php introduced newdoc syntax',['5.2','5.0','5.3','5.1',2]],
    ['.Which of the following variable name is invalid?',['$newvar','$new-var','$new_var','None of these',1]],
    ['.Which of the following is the correct way to create an array in PHP?',['$nam=array[..];','$nam=[..]','$nam=(..);','$nam=array(..)',3]],
    ['.Which of the following is a built-in function in PHP that adds a value to the end of an array?',['array_push()','arrayadd()','add()','into_arrray()',0]],
    ['.Which of the following function in PHP returns a text in title case from a variable?',['title($var)','ucwords($var)','toUpper($var)','All the above',1]],
    ['.Which of the following is the correct way to print "Hello" in PHP?',['"Hello";','echo "Hello";','write("Hello");','None of these',1]],
    ['.Which function is used to find the length of a string?',['len()','length()','srtlen()','strlen()',3]],
    ['.The ___ function is used to search for a character/text in a string.',['pos()','find()','contains','strpos()',3]],
    ['.What does PEAR stands for?',['PHP extension and application repository','PHP extension and appearance repository','PHP extensive and application repository','PHP events and application repositary',0]],
    ['.The ___ function is used to check whether a variable is set or not.',['set()','strset()','isset()','setter()',2]],
    ['.String values in PHP must be enclosed within ____  quotes.',['Single','Double','Triple','Both a and b',3]],
    ['.Which of the following function is used to compress a string in PHP?',['compress()','strcomp()','gzcompress()','var_compress()',2]],
    ['.PHP function compresses a given string using the ___ format.',['ZLIB','ASCII','zFOLD','Hyper',0]],
    ['.What does SPL stands for in PHP?',['Standard PHP Library','Sterio PHP Library','Standard PHP Libframe','None of these',0]],
    ['.Which of the following function converts a string to all uppercase?',['toUpper()','strtoupper()','upper()','strupper()',1]],
    ['.The function in PHP that can be used to concatenate array elements to form a single delimited string is.',['arradd()','conc()','implode()','concatenate()',2]],
    ['.Which PHP function determines the last access time of a file?',['time()','fileatTime()','atTime()','fileatime()',3]],
    ['.Which PHP function is capable to read specific number of characters from a file?',['fgets()','get()','read(n)','reader()',0]],
    ['.Which PHP function is used to find the position of the last occurrence of a substring inside another string?',['position()','strpr()','strrpos()','gstr()',2]],
    ['.Which of the following function is used to compute the difference between two arrays in PHP?',['diff_array','arrays_diff','array_diff','diff_arrays',2]],
    ['.Which PHP function converts an English text datetime into a Unix timestamp?',['strtotime()','totimer()','timer()','strtime()',0]],
    ['.Which of the following function in PHP returns the time of sunrise of a particular day and location?',['compass()','date_sunrise()','location()','datetime()',1]],
    ['.___ is used if you want to select one of many blocks of code to be executed',['if','elseif','switch','do',2]],
    ['.How many ways are there for the browser client to send information to the web server.',['2','4','1','3',0]]
]








    shuffleArray(phques_list)

    //tips center
    var phtipper=[' Always give more preference to logic than coding'
    ,'Always think before you code',
    'Give more preference to logic than coding','Bugs are necessary to improve a coder',
    'Make a paper design before implementing','More than learning practice makes more sense'
    ,'Try to code all your ideas',
    'Making a perfect code is possible if you have the strength ',
    'Coding must be done along with learning',
    'Programming is a skil best acquired by practice and example rather than books',
    'Eat , Sleep , Code',
    'If you are a technical lead , you need to be coding',
    'Giving a quote works far better than a whole lecture',
    "Programming isn't about what you know , It is about what you can figure out",
    'While there is code there is bug',
    'Programming is usually taught by examples',
    'Premature optimization is the root of all evil',
    'Always talk less about your code'

]
shuffleArray(phtipper);


    //Options
    var phopt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var phscr=0


    //creating question label
    var phques=document.getElementById('phquestion')
    //creating options object
    var phopt=document.getElementsByClassName('phopt')
    var phi=0
    //score variable for result.js
    var phdis_score=document.getElementById('phinnerscore')


    function phbtnc(xxxxx){
        document.getElementsByClassName('phopt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==phques_list[phi-1][1][4]){
         document.getElementsByClassName('phopt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         phscr++
         phdis_score.textContent='Score:'+phscr
        }
        else{
            document.getElementsByClassName('phopt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('phopt')[phques_list[phi-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(phmover,470)
    
    }


    function phcaller(){
        for(var teta=0;teta<4;teta++){
            phopt[teta].style.backgroundColor='#fff'

        phi=0
        phscr=0

    }
    }


    function phmover(){
        if(phi!=10){
            if(phtmei==0||phtmei==1){phtmei=15}
            else{phtmei=15}
            
            phques.textContent='Q'+(phi+1)+phques_list[phi][0]
            phopt[0].textContent=phques_list[phi][1][0]
            phopt[1].textContent=phques_list[phi][1][1]
            phopt[2].textContent=phques_list[phi][1][2]
            phopt[3].textContent=phques_list[phi][1][3]
            document.getElementById('phfoot').innerHTML=phtipper[phi]
            for(var teta=0;teta<4;teta++){
                phopt[teta].style.backgroundColor='#fff'
     }
     phi++
    }
        else{
          window.clearInterval(phf)
         document.getElementById('phmodulo2').style.display='inline-block'
        phcaller()

        }
    
    }




//opening phresult.js
    function phres_open_result(){
        document.getElementById('phmodulo2').style.display='none'
        document.getElementById('phmodulo').style.display='none'
        document.getElementById('phres_modulo').style.display='block'
        phsoceri()
    }

//phpresult.js

    function phsoceri(){
    phtscr=document.getElementById('phinnerscore').value

    document.getElementById('phshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('phshow_age').innerHTML=String(ager.value)


    if(((String((phdis_score.innerHTML)).length)==7)){
    console.log(String(phdis_score.innerHTML)[6])
    document.getElementById('phshow_score').innerHTML=String(phdis_score.innerHTML)[6] 
    phjscr=parseInt(String(phdis_score.innerHTML)[6])
    }

    

    else{
        console.log(String(phdis_score.innerHTML)[6]+String(phdis_score.innerHTML)[7])
        document.getElementById('phshow_score').innerHTML=String(phdis_score.innerHTML)[6]+String(phdis_score.innerHTML)[7]
        phjscr=parseInt(String(phdis_score.innerHTML)[6]+String(phdis_score.innerHTML)[7])
    }

    if(phjscr>8){
        var phgrade='A'
        var phrst='Passed'
        var phmsg='Excellent (but keep practicing)'
        var phclo='rgb(30, 145, 30)'
    }
    else if(phjscr>6){
        var phgrade='B'
        var phrst='Passed'
        var phmsg='Good but need to work more and practice'
        var phclo='rgb(30, 145, 30)'
    }
    else if(phjscr>4){
        var phgrade='C'
        var phrst='Passed'
        var phmsg='It was a nice try but need to improve'
        var phclo='rgb(30, 145, 30)'
    }
    else if(phjscr>1){
        var phgrade='D'
        var phrst='Passed'
        var phmsg='Not a good performance'
        var phclo='rgb(30, 145, 30)'
    }
    else{
        var phgrade='E'
        var phrst='Failed'
        var phmsg='Poor performance but can improve '
        var phclo='red'
    }

    document.getElementById('phshow_grade').innerHTML=phgrade
    document.getElementById('phshow_result').innerHTML=phrst
    document.getElementById('phshow_msg').innerHTML=phmsg
    document.getElementById('phshow_result').style.color=phclo


    }

















//dart quiz open

          
    function dt_quiz_open(){
        document.getElementById('dtinnerscore').innerHTML='Score:0'
        document.getElementById('dtmodulo').style.display='block'
        dtmakeon()
    }
    function dt_offer(){
        document.getElementById('dtmodulo').style.display='none'
        }


    //To load modulo when the page loads
    //window.onload=phmakeon

    //To make the timer work only if modulo is off
    var dtchecker=0
    var dtf=0

    //clicking yes on modulo
    function dtmakeoff(){
        document.getElementById('modulo_dt').style.display='none'
        dtchecker=1
        var dttmei=15
        if(dtchecker==1){
            dtf=window.setInterval(dttme,1000)
        }

        dtmover()

    }
    //next button
    function dtnext(){
     dtmover()
    }

        //function for displaying modulo
    function dtmakeon(){
    
     document.getElementById('modulo_dt').style.display='inline-block'
    }

    //hover effect
    /*function onover(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(230,225,255)'
    }
     onout(xxx){
    document.getElementsByClassName('opt')[xxx].style.backgroundColor= ' rgb(255,255,255)'
    }
    */

    //timer
    var dttmei=15
    function dttme(){
     if(dttmei>0){
           dttmei--
        }
        else{
            dttmei=15
         dtmover()
        
        }
         document.getElementById('dtjust').textContent=dttmei
    }

    

    //Questions and answer  for the quiz
    var dtques_list=[
        ['.What is Flutter ?',['language','DBMS','UI toolkit','method',2]],
        ['.Dart was developed by ____?',['Google','Microsoft','yahoo','Bing',0]],
        ['.First appearance of Dart was in which year ?',['2011','2012','2014','2010',0]],
        ['.Which keyword is used to make a strictly string type variable?',['dynamic','String','str','txt',1]],
        ['.Which framework made dart famous in todays world?',['dart','flooter','fluter','flutter',3]],
        ['.___ library is imported to take user input in Dart',['DartIO','Dart:input','Dart:io','Dart;io',2]],
        ['.How to enclose the  data type of a list/array in dart?',['List //int','List(int) ','List<int>','int',2]],
        ['.How to end a dart code of line?',[':','/','|',';',3]],
        ['.Which operator is used to get the integer part of a division?',['~/','//','*','%',0]],
        ['.Which keyword is used to create a constant while compiling?',['final','const','static','nomotion',1]],
        ['.How to include single line comment in Dart?',['/*','<>','$','//',3]],
        ['.The first version of Flutter was known as codename _______ and ran on the Android operating system.',['Yiel','Sky','Rain','Hub',1]],
        ['.Due to App Store restrictions on dynamic code execution, Flutter apps use ________ compilation on iOS.',['Ahead of Code','Ahead of compiler','Ahead of Time','All of these',2]],
        ['.Dart programs run in ______ modes.',['3','1','4','2',3]],
        ['. A/An ____ is a real-time representation of any entity.?',['Object','Class','Function','None of thes',0]],
        ['.Flutter is a __.',['SNK','SDK','Both a and b','None of these',1]],
        ['.SDK stands for __',['Software Development Kit','Software Developer Knitekit','Software Develop Knowledge','None of These',0]],
        ['.Dart language can be compiled ____.',['AOT','JIT','Both AOT and JIT','None of these',2]],
        ['.A ____ is a sequence of asynchronous events.',['Stream','Current','Flow','Step',0]],
        ['.The _____ operator is used to evaluate and returns the value between two expressions.',['&&','=','??','~!',2]],
        ['._____ in Flutter are used as an identifier for Widgets, Elements and SemanticsNodes.',['Variables','Keys','Buttons','Widgets',3]],
        ['.How many types of widgets are there in Flutter?',['2','3','4','1',0]],
        ['.What types of tests can you perform in Flutter?',['Unit Test','Integration Test','Widget Test','All of these',3]],
        ['._____ command is used to compile the release mode.',['Flutter run//release','flutter run??release','flutter run --release','None of these',2]],
        ['.The subclasses of Key must be a ______.',['Global Key','Local Key','Both','None of these',2]],
        ['.______ in Flutter is a refresh rate of our animation.',['Ticker','Show','Refresh','Restart',0]],
        ['.What are the different build modes in Flutter?',['Debug','Release','Profile','All of the above',3]],
        ['.The ______ widget in Flutter is a box that comes with a specified size.',['Stream','SizedBox','Show','Contain',1]],
        ['.The ______ animation allows you to represent real-world behavior in Flutter.',['Physics based','Maths based','Graph based','None of these',0]],
        ['.______ database will enable you to access and manipulate the cloud database.',['Nosqlq','SQL','SQlite','Firebase',3]],
        ['.______ are some popular apps that use Flutter.',['Google Ads','Alibaba','Birch Finance','All of these',3]],
        ['._____ is used when you create the Flutter application for Android.',['Android folder','And studio','Google folder','Ads folder',0]],
        ["._____ is the project's configuration file that will use a lot during working with the Flutter project.",['pubspec.xml','pubspec.yaml','pubspec.xyz','pubspec.html',1]],
        ['.When you build the Flutter app the first time, it will take a longer time?',['False','Sometimes','True','In only IOS',2]],
        ['.Which keyword is used to create a class in dart?',['cls','class','obj','def',1]],
        ['.Which keyword must be used before writing the constructor in a class',['void','nan','init','None of these',3]],
        ['.Which method is used to convert all characters of a string to lowercase',['toLowerCase()','lower()','lcase()','toLower()',0]],
    ]
    shuffleArray(dtques_list)

    //tips center
    var dttipper=[' Always give more preference to logic than coding'
    ,'Always think before you code',
    'Give more preference to logic than coding','Bugs are necessary to improve a coder',
    'Make a paper design before implementing','More than learning practice makes more sense'
    ,'Try to code all your ideas',
    'Making a perfect code is possible if you have the strength ',
    'Coding must be done along with learning',
    'Programming is a skil best acquired by practice and example rather than books',
    'Eat , Sleep , Code',
    'If you are a technical lead , you need to be coding',
    'Giving a quote works far better than a whole lecture',
    "Programming isn't about what you know , It is about what you can figure out",
    'While there is code there is bug',
    'Programming is usually taught by examples',
    'Premature optimization is the root of all evil',
    'Always talk less about your code'

]
shuffleArray(dttipper);


    //Options
    var dtopt_list=[['dump','pickle','bintrack','json',1],
    ['<video>','<vdo>','<v>','<vid>',0],
    ['variable1.','var-1','as','true',3],
    ['0.9.0','0.1.0','1.0.0','0.1.1',0],
    ['4','2','3','1',2]
        ]




    var answer=[2,1]


    //score variable
    var dtscr=0


    //creating question label
    var dtques=document.getElementById('dtquestion')
    //creating options object
    var dtopt=document.getElementsByClassName('dtopt')
    var dti=0
    //score variable for result.js
    var dtdis_score=document.getElementById('dtinnerscore')


    function dtbtnc(xxxxx){
        document.getElementsByClassName('dtopt')[xxxxx].style.color='rgb(27, 27, 110)'
        if(xxxxx==dtques_list[dti-1][1][4]){
         document.getElementsByClassName('dtopt')[xxxxx].style.backgroundColor='rgb(0,235,0)'
         dtscr++
         dtdis_score.textContent='Score:'+dtscr
        }
        else{
            document.getElementsByClassName('dtopt')[xxxxx].style.backgroundColor='rgb(235,0,0)'
            document.getElementsByClassName('dtopt')[dtques_list[dti-1][1][4]].style.backgroundColor='rgb(0,235,0)'
        }
   
    
    
        window.setTimeout(dtmover,470)
    
    }


    function dtcaller(){
        for(var teta=0;teta<4;teta++){
            dtopt[teta].style.backgroundColor='#fff'

        dti=0
        dtscr=0

    }
    }


    function dtmover(){
        if(dti!=10){
            if(dttmei==0||dttmei==1){dttmei=15}
            else{dttmei=15}
            
            dtques.textContent='Q'+(dti+1)+dtques_list[dti][0]
            dtopt[0].textContent=dtques_list[dti][1][0]
            dtopt[1].textContent=dtques_list[dti][1][1]
            dtopt[2].textContent=dtques_list[dti][1][2]
            dtopt[3].textContent=dtques_list[dti][1][3]
            document.getElementById('dtfoot').innerHTML=dttipper[dti]
            for(var teta=0;teta<4;teta++){
                dtopt[teta].style.backgroundColor='#fff'
     }
     dti++
    }
        else{
          window.clearInterval(dtf)
         document.getElementById('dtmodulo2').style.display='inline-block'
        dtcaller()

        }
    
    }







//opening dtresult.js
    function dtres_open_result(){
        document.getElementById('dtmodulo2').style.display='none'
        document.getElementById('dtmodulo').style.display='none'
        document.getElementById('dtres_modulo').style.display='block'
        dtsoceri()
    }

//dtpresult.js

    function dtsoceri(){
    dttscr=document.getElementById('dtinnerscore').value

    document.getElementById('dtshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
    document.getElementById('dtshow_age').innerHTML=String(ager.value)


    if(((String((dtdis_score.innerHTML)).length)==7)){
    console.log(String(dtdis_score.innerHTML)[6])
    document.getElementById('dtshow_score').innerHTML=String(dtdis_score.innerHTML)[6] 
    dtjscr=parseInt(String(dtdis_score.innerHTML)[6])
    }


    else{
        console.log(String(dtdis_score.innerHTML)[6]+String(dtdis_score.innerHTML)[7])
        document.getElementById('dtshow_score').innerHTML=String(dtdis_score.innerHTML)[6]+String(dtdis_score.innerHTML)[7]
        dtjscr=parseInt(String(dtdis_score.innerHTML)[6]+String(dtdis_score.innerHTML)[7])
    }

    if(dtjscr>8){
        var dtgrade='A'
        var dtrst='Passed'
        var dtmsg='Excellent (but keep practicing)'
        var dtclo='rgb(30, 145, 30)'
    }
    else if(dtjscr>6){
        var dtgrade='B'
        var dtrst='Passed'
        var dtmsg='Good but need to work more and practice'
        var dtclo='rgb(30, 145, 30)'
    }
    else if(dtjscr>4){
        var dtgrade='C'
        var dtrst='Passed'
        var dtmsg='It was a nice try but need to improve'
        var dtclo='rgb(30, 145, 30)'
    }
    else if(dtjscr>1){
        var dtgrade='D'
        var dtrst='Passed'
        var dtmsg='Not a good performance'
        var dtclo='rgb(30, 145, 30)'
    }
    else{
        var dtgrade='E'
        var dtrst='Failed'
        var dtmsg='Poor performance but can improve '
        var dtclo='red'
    }

    document.getElementById('dtshow_grade').innerHTML=dtgrade
    document.getElementById('dtshow_result').innerHTML=dtrst
    document.getElementById('dtshow_msg').innerHTML=dtmsg
    document.getElementById('dtshow_result').style.color=dtclo


    }


// certificate generator


function cert_open(){
   // document.getElementById('res_modulo').style.display='none'
    if(jscr>1){
    document.getElementById('cert_id').style.display='block'
    }

    
  }

function certbackbutton(){
    document.getElementById('cert_id').style.display='none'

}

  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  
  
  const nameInput = document.getElementById('fname')
  
  const downloadBtn = document.getElementById('download-btn')
  
  const image = new Image()
  image.src = 'certificate.jpeg'
  image.onload = function () {
      drawImage()
  }
  
  function drawImage() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    ctx.font = 'bold 49px serif'
    
    ctx.fillStyle = 'goldenrod'
    document.getElementById('onlshow_name').innerHTML=String(fn.value)+' '+String(ln.value)
   
    lennn=String(fn.value).length+String(ln.value).length+1
    console.log(lennn)

    if(lennn<15){
    ctx.fillText(nameInput.value +' '+ ln.value, 361-((lennn/2)*22.008), 295)
    }
    else if(lennn>25){ctx.fillText(nameInput.value +' '+ ln.value, 361-((lennn/2)*22.8), 295)}
    else if(lennn>=30){
        ctx.font = 'bold 40px serif'
        ctx.fillText(nameInput.value +' '+ ln.value, 361-((lennn/2)*22.9), 295)}
    else{
        ctx.fillText(nameInput.value +' '+ ln.value, 361-((lennn/2)*23.001), 295)
    }
    

}

  //console.log(lennn)

 nameInput.addEventListener('input', function () {
      drawImage()
  })
  ln.addEventListener('input', function () {
    drawImage()
})

  
  downloadBtn.addEventListener('click', function () {
      downloadBtn.href = canvas.toDataURL('image/jpg')
      downloadBtn.download = 'Certificate - ' + nameInput.value
  })