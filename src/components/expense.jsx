import React from 'react'
import '../App.css'
class Expense extends React.Component{



    constructor(){

        super()

        this.state={
            
            expenses:0,
            earnings:0,
            expens:[],
            newexpensename:''
            ,
             expensevalue : 0,
             remaining:0 ,
             

    }
    
}

// componentDidMount= ()=>{
//     this.state.remaining =this.state.expens[0].kharcha
// }


addvaluefun=()=>{
    // console.log(this.state.newexpensename , this.state.expensevalue ,this.state.expens[0] )
    let obj= { expense_name : this.state.newexpensename , kharcha:this.state.expensevalue , edit:false ,income:'yes' }
    // let remaining=this.state.remaining + this.state.expensevalue
    console.log(obj)
    this.setState({

        expens:[...this.state.expens, obj],
        remaining : + this.state.remaining + +this.state.expensevalue  ,
        earnings:+ this.state.earnings + +this.state.expensevalue  ,
        newexpensename:'',
        expensevalue:''

    })
}




addexpense=()=>{
    // console.log(this.state.newexpensename , this.state.expensevalue)
   
    let obj= { expense_name : this.state.newexpensename , kharcha:this.state.expensevalue , income:'no'  }
    // let remaining=this.state.remaining + this.state.expensevalue
    console.log(obj)
    this.setState({

        expens:[...this.state.expens, obj],
        remaining : this.state.remaining - this.state.expensevalue ,
        expenses:+ this.state.expenses + +this.state.expensevalue ,
        
        newexpensename:'',
        expensevalue:''
        
    })
    console.log(this.state.expens)
}



deleteentry=(index)=>{

    if (this.state.expens[index].income=='no'){

        console.log(this.state.expens[index].income)
       var x =this.state.expenses  -this.state.expens[index].kharcha
       var y= this.state.remaining + +this.state.expens[index].kharcha
        this.state.expenses=x
        this.state.remaining=y
        this.state.expens.splice(index,1)
        this.setState({
            expens:this.state.expens,
            expenses:x,
            remaining:y,
    
        })
        // console.log(x)
        }
    // console.log(x) 

    


    else if (this.state.expens[index].income=='yes') {
    console.log(this.state.expens[index].income)      
    var xx =this.state.remaining  -this.state.expens[index].kharcha
        var yy= this.state.earnings  -this.state.expens[index].kharcha
        
        this.state.earnings=xx
        this.state.remaining=yy
         this.state.expens.splice(index,1)
         // console.log(x)

         this.setState({
            expens:this.state.expens,
            earnings:this.state.earnings,
            remaining:this.state.remaining
        })
        
    }


    else{
        alert('Something went wrong')
    }
}

    
        
    
   




updateentry=(index)=>{

    this.state.expens[index].edit=true

    this.setState(
        {expens:this.state.expens}
    )


    }




    updatedentry=(i,e)=>{
       
        this.state.expens[i].expense_name=e.target.value

        this.state.expens[i].kharcha=e.target.value
        
        

        this.setState(
            {
                todos:this.state.expens
            }

        )



           

    }
    


    updateexpensevalue=(i,e)=>{
       
        
        this.state.expens[i].kharcha=e.target.value
        
        

        this.setState(
            {
                todos:this.state.expens
            }

        )



           

    }




    updatedone =(index)=>{
        this.state.expens[index].edit=false

        this.setState(
            {todos:this.state.expens}
        )

    }




    render(){
        
        
        
        
        
        return(
            <div >
                

                <div class="container">
  <div class="row">
    <div class="col-sm col-md-3">
      
    </div>



    <div class="col-sm col-md-6 hello">
      <h1 className='text-center whit mt-3'>Expense Tracker App</h1>
      
        <h2 className='whit pl-5'>Your Ballance : <span className='ml-5'>Rs. {this.state.remaining}</span> </h2>
      <hr className='whitee' />
      
      <div className="container divi">
          <div className="row">
        <div className="col-md-6 text-center"> <span className='expense'>INCOME</span>  <span className='earnings'> <h2>Rs. {this.state.earnings}</h2></span> </div>
              <div className="col-md-6 text-center "><span className='expense'>EXPENSE</span>  <span className='expenses'> <h2 id='expensecolor'>Rs. {this.state.expenses}</h2></span> </div>
          </div>
      </div>
      <h2 className='whit'>
          History:
          <hr className='whitee' /> 
      </h2>
      <div >
      <ul class="list-group">
      {this.state.expens.map((v,i)=>
                //  <div key={i}>{ v.expense_name}  { v.expensevalue} </div> 
                 <li key={i} class="list-group-item hisitems "> <span className='first hisd ml-3 '>{ v.expense_name} </span><span className='ml-5 pl-5 hisd second'>{ v.kharcha} </span>
                 <button type="button" class="btn btn-danger"onClick={()=> this.deleteentry(i)}>Delete</button>
       
                 </li>
      )}

          
</ul>

      </div>
        <h2 className='whit pt-2'>Add Transaction :</h2>

        <h3 className='whit' > Enter Description : </h3>
        <input type="text" class="form-control" value={this.state.newexpensename} onChange={(e)=>this.setState({newexpensename:e.target.value})}></input>

        <h3 className='whit' > Enter Amount: </h3>
        <input type="number" class="form-control" value={this.state.expensevalue} onChange={(e)=>this.setState({expensevalue:e.target.value})}></input>

        <br/>

        <div className='text-center mb-5'> 
        <button type="button" class="btn btn-success mr-2" onClick={this.addvaluefun} >Income</button>
        <button type="button" class="btn btn-warning" onClick={this.addexpense}>Expense</button>
        </div>


    </div>







    <div class="col-sm col-md-3">
      
    </div>
  </div>
</div>




            </div>
        )
    }
    
}


export default Expense