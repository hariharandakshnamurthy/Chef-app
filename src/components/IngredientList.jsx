import { Card } from "antd"

function IngredientList(props) {
  return (
    <Card>
        {props.ingredient.map((ing, index)=><ul>
            <li key={index}>{ing}</li>
        </ul>)
        }
    </Card>
  )
}

export default IngredientList
