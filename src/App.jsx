import Header from "./components/Header";
import IngredientList from "./components/IngredientList";
import Recipe from "./components/Recipe";
import { Divider, Card, Space, Button, Input } from "antd";
import { useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { getRecipeFromGemini } from "../ai";

export default function App() {
  const [ingredient, setIngredient] = useState(["tomato", "potato", "cabbage"]);
  const [recipe, setRecipe] = useState("");
  const [inputValue, setInputValue] = useState("");
  const recipeSection=useRef(null)

  useEffect(()=>{
    if(recipe.length!==0 && recipeSection.current !==null){
      recipeSection.current.scrollIntoView({behavior:"smooth"})
    }
  },[recipe])

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
    <div id="root">
      <Header />
      
      <Card className="ingredient-card">
        <div className="form-container">
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Card type="inner" style={{ backgroundColor: '#e6f7ff', border: 'none' }}>
              Have an ingredient in hand? Ask our AI chef for a delicious recipe!
            </Card>
            <form onSubmit={addIngredient} className="ingredient-form">
              <Input
                placeholder="e.g. Tomato, Basil, Garlic..."
                name="ingredient"
                value={inputValue}
                onChange={(e) => setInputValue(e.currentTarget.value)}
                size="large"
              />
              <Button type="primary" htmlType="submit" size="large" icon={<PlusOutlined />}>
                Add Ingredient
              </Button>
            </form>
          </Space>
        </div>
      </Card>

      <div className="list-container" ref={recipeSection}>
          <IngredientList
            ingredient={ingredient}
          />
          {ingredient.length >= 3 && (
            <Button 
              onClick={() => getRecipe()} 
              className="get-button" 
              block
            >
              Get Recipe from AI Chef 🧑‍🍳
            </Button>
          )}
      </div>

      {recipe && <Recipe recipe={recipe} />}
    </div>
  );
}
