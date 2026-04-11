import { Card, Typography } from "antd";

function IngredientList(props) {
  const { Title, Text } = Typography;

  return (
    <Card>
      <Title level={3}>Ingredient List:</Title>
      {props.ingredient.map((ing, index) => (
        <ul>
          <li key={index}>
            <Text>{ing}</Text>
          </li>
        </ul>
      ))}
    </Card>
  );
}

export default IngredientList;
