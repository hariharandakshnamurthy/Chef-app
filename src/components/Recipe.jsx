import { Card, Typography } from "antd";
import ReactMarkdown from "react-markdown";

function Recipe(props) {
  const { Title, Text } = Typography;
  return (
    <Card>
      <Title> Recipe From our AI chef:</Title>
      <ReactMarkdown>
        {props.recipe}
      </ReactMarkdown>
    </Card>
  );
}

export default Recipe;
