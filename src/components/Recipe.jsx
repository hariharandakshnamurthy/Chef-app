import { Card, Typography } from "antd";
import ReactMarkdown from "react-markdown";

function Recipe(props) {
  const { Title } = Typography;
  return (
    <Card className="recipe-container" bordered={false} style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
      <Title level={2} style={{ color: '#d4380d', borderBottom: '2px solid #ffbb96', paddingBottom: '8px', marginBottom: '24px' }}>
        🧑‍🍳 AI Chef's Recipe
      </Title>
      <div className="markdown-content">
        <ReactMarkdown>
          {props.recipe}
        </ReactMarkdown>
      </div>
    </Card>
  );
}

export default Recipe;
