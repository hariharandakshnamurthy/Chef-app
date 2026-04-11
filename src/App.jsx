import Header from "./components/Header";
import IngredientList from "./components/IngredientList";
import Recipe from "./components/Recipe";
import { Divider, Card, Space, Button, Input } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { getRecipeFromGemini } from "../ai";

export default function App() {
  const [ingredient, setIngredient] = useState(["tomato", "potato", "cabbage"]);
  const [recipe, setRecipe] = useState("");
  const [inputValue, setInputValue] = useState("")

  const addIngredient = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newIngredient = formData.get("ingredient").trim();
    if (newIngredient.length !== 0 && !ingredient.includes(newIngredient)) {
      setIngredient((prev) => [...prev, newIngredient]);
    } else {
      setIngredient(ingredient);
    }
    setInputValue("");
  };
  async function getRecipe() {
    const aiRecipe = await getRecipeFromGemini(ingredient);
    setRecipe(aiRecipe);
  }

  return (
    <>
      <Header />
      <Divider />
      <Card>
        <Space>
          <form onSubmit={addIngredient} method="post">
            <Space>
              <Input placeholder="Enter a Ingredient" name="ingredient" value={inputValue}  onChange={(e)=>setInputValue(e.currentTarget.value)}/>
              <Button type="primary" htmlType="submit">
                <PlusOutlined />
                Add Ingredient
              </Button>
            </Space>
          </form>
        </Space>
      </Card>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor:"azure"
        }}
      >
        <Space>
          <IngredientList
            ingredient={ingredient}
            style={{ paddingBottom: "10px" }}
          />
          <Button onClick={() => getRecipe()}>
            Get Recipe from AI Chef 🧑‍🍳
          </Button>
        </Space>
      </div>
      <Divider />
      {recipe && <Recipe recipe={recipe} />}
    </>
  );
}
