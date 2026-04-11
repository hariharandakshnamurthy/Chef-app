import Header from "./components/Header";
import IngredientList from "./components/IngredientList";
import Recipe from "./components/Recipe";
import { Divider, Card, Space, Button, Input } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

export default function App() {
  const [ingredient, setIngredient] = useState(["tomato","potato","cabbage"])
  const addIngredient =(event)=>{
    event.preventDefault()
    const formData = new FormData(event.target)
    const newIngredient = formData.get("ingredient")
    if(newIngredient.length!==0 && !ingredient.includes(newIngredient) ){
    setIngredient(prev=>[...prev,newIngredient])
    }else{
      setIngredient(ingredient)
    }
    event.target.reset()
  }


  return (
    <>
      <Header />
      <Divider/>
      <Card>
      <Space>
        <form onSubmit={addIngredient} method="post">
          <Space>
            <Input placeholder="Enter a Ingredient" name="ingredient" />
            <Button type="primary" htmlType="submit">
              <PlusOutlined />
              Add Ingredient
            </Button>
          </Space>
        </form>
      </Space>
    </Card>
      <Divider/>
      <IngredientList ingredient={ingredient} />
      <Divider/>
      <Recipe />
    </>
  );
}
