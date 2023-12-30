import React, { useEffect, useState } from 'react'

export default function Pyramid() {const [count,count1]=useState(0)
  useEffect(()=>{
        const a=api();
        Parse1(a);
      },[count]);
    const [parse,parse1]=useState("");
    const [answer,answers]=useState("");
    const [correct,corrects]=useState("");
    const [active,actives]=useState("")
    const [parsee1,Parse1]=useState('');
    const [c,set1]=useState(-1);
    const [c1,C1]=useState("");
    const [c2,C2]=useState("");

    const [c3,C3]=useState("");
    const [c4,C4]=useState("");

    const questionnumber='2';
    const pyramid1=[{id:'1',amount:'100'},
    {id:'1',amount:'100'},{id:'2',amount:'100'},{id:'1',amount:'100'},{id:'1',amount:'100'},{id:'1',amount:'100'},{id:'1',amount:'100'},{id:'1',amount:'100'},{id:'1',amount:'100'},{id:'1',amount:'100'},{id:'1',amount:'100'},{id:'1',amount:'100'},{id:'1',amount:'100'},{id:'1',amount:'100'},{id:'1',amount:'100'},{id:'1',amount:'100'},{id:'1',amount:'100'},{id:'1',amount:'100'}]
    
  var b=0;
    const api=async()=>{
        const fet=await fetch(`https://opentdb.com/api.php?amount=15&type=multiple`);
        const parsee=await fet.json();
        count1(1)
        Parse1(parsee);
        return parsee;
        // parse1(parsee.results[1].question)
        
       
        // const ans=parsee.results[1].incorrect_answers;
        // await ans.push(parsee.results[1].correct_answer)
        // const ans=await parsee.results[0].incorrect_answers.push(parse.results[0].correct_answer);
        // console.log(ans)
        // corrects(parsee.results[1].correct_answer);
        // const new1=await shuffleArray(ans);
         // answers(new1);
        // answers(new1)
  
      
        
      }
      function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) { 
       
            // Generate random number 
            var j = Math.floor(Math.random() * (i + 1));
                       
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
           
        return array;
     }
    async function generate(){
      set1(c+1);
      parse1(parsee1.results[c].question);
      const a=await parsee1.results[c].incorrect_answers;
      const a1a=await a.push(parsee1.results[c].correct_answer);
      const new11 =await shuffleArray(a1a);
      return new11;
    }
      async function questiongenerate (){
        set1(c+1)
        const new11=generate();
       console.log(parse)
        
        answers(new11);
        corrects(parsee1.results[c].correct_answer);
      }
      function click(e){
        console.log(e.target.innerText)
        if(e.target.innerText==correct){
          if(e.target.id=="1"){
            C1("answer-correct");
            questiongenerate();
          }
          else if(e.target.id=="2"){
            C2("answer-correct")
            questiongenerate();
          }
          else if(e.target.id=="3"){
            C3("answer-correct");
            questiongenerate();
          }
          else {
            C4("answer-correct");
            questiongenerate();
          }
        }
        else{
          console.log("noo")
          questiongenerate();
        }
     }
    
      
      
      const [question,questions]=useState("Question")      
      return (
    <div className='pyramid'>
       <div className="main">
            <div className="top">
                <div className="timer">
                    3   0
                 </div>
            </div>
            <div className="bottom">
                <div className="question"><span className='q'>{parse}</span></div>
                <div className="row">
                    <div className="col-6">
                        <div className="answers "><a className={`ab ${active}`} id="1" onClick={click}>{answer[0]}</a></div>
                        <div className="answers"><a className={`ab ${active}`} onClick={click}>{answer[1]}</a></div></div>
                        <div className="col-6">
                        <div className="answers"><a className={`af ${active}`} onClick={click}>{answer[2]}</a></div>
                        <div className="answers"><a className={`af ${active}`}onClick={click}>{answer[3]}</a></div>
                    </div>
                </div>
            </div>
       </div>
      <div className="block">
        <ul className="list" >
            {
                pyramid1.map((e)=>(
                   
                    <li className={`teal ${questionnumber==e.id?"active":""}`}>
                    <span className='un'>{e.id}</span>
                    <span className='underlist'>{e.amount}</span>
                    </li>))
}
        </ul>
      </div>

      
    </div>
  )
}
