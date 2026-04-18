import { Card, Typography, Tag, Space } from "antd";

function IngredientList(props) {
  const { Title } = Typography;

  return (
    <Card className="ingredient-card">
      <Title level={4} style={{ marginBottom: '16px' }}>Your Ingredients:</Title>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {props.ingredient.map((ing, index) => (
          <Tag 
            key={index} 
            color="blue" 
            style={{ 
              padding: '4px 12px', 
              fontSize: '14px', 
              borderRadius: '16px',
              border: '1px solid #91d5ff'
            }}
          >
            {ing}
          </Tag>
        ))}
      </div>
      {props.ingredient.length < 3 && (
        <p style={{ marginTop: '12px', color: '#8c8c8c', fontSize: '13px' }}>
          Add at least {3 - props.ingredient.length} more ingredient{3 - props.ingredient.length > 1 ? 's' : ''} to get a recipe.
        </p>
      )}
    </Card>
  );
}

export default IngredientList;
