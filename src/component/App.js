import React,{useEffect,useState} from "react";


const Fun =()=>{
    const[addnum,setAddnum]=useState(0);
    const[subnum,setSubnum]=useState(0);
    const[num,setnum]=useState([]);
    const[substate,setSubstate]=useState([]);
    const[divstate,setDivstate]=useState([]);
    const[mulstate,setMulstate]=useState([]);

    function addsum() {
       //setnum(addnum+subnum);
       var k= parseInt(addnum);
       var l =parseInt(subnum);
      //  console.log(typeof(k))
      //  console.log(typeof(l))
       setnum(k+l);
        
    }
    function subtractnum() {
      var a = parseInt(addnum);
      var b = parseInt(subnum);
      setSubstate(a-b);
      
    }
    function divisionnum() {
      var c = parseInt(addnum);
      var d = parseInt(subnum);
      setDivstate(c/d);
      
    }
    function mulnum() {
      var e = parseInt(addnum);
      var f = parseInt(subnum);
      setMulstate(e*f);
      
    }
    return(

    
    <div>
        <h1> The sample calculator</h1>
      Enter value for num1:  <input type="number" id="num1" value={addnum} onChange={e=>setAddnum(e.target.value)} />
      <br/><br/>
      Enter value for num2:<input type="number" id="num2" value={subnum} onChange={e=>setSubnum(e.target.value)} />
      <br/>
    <br/>
    <button id="submit1" type="submit" onClick={addsum} >Addition</button>
    &nbsp; &nbsp; 
    <button id="submit2" type="submit1" onClick={subtractnum} >Subtract</button>
    &nbsp; &nbsp; 
    <button id="submit3" type="submit2" onClick={divisionnum} >Multiplication</button>
    &nbsp; &nbsp; 
    <button id="submit4" type="submit3" onClick={mulnum} >Division</button>
    &nbsp; &nbsp; 
    <br/>
    <br/>
    The addition of two number is:{num}<br/>
    <br/>
    The Subtraction of two number is:{substate}<br/>
    <br/>
    The Division of two number is:{divstate}<br/>
    <br/>
    The Multiplication of two number is:{mulstate}<br/>
    <br/>
    </div>
    )
};

export default Fun;