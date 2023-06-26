import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'

function Expenses(props) {
 
  return (

    // here classname will be passed as prop because we can not define classname in custom component
    <Card className='expenses'>      
      <ExpenseItem
        id={props.items[0].id}
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />

      <ExpenseItem
        id={props.items[1].id}
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />

      <ExpenseItem
        id={props.items[2].id}
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />

      <ExpenseItem
        id={props.items[3].id}
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />

    </Card>
  )
}

export default Expenses
