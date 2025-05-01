import { useState } from "react";

const App = () => {
const [firstname, setFirstname] = useState("");
const [ lastname, setLastname] = useState("");
const [ age, setAge] = useState("");
const [ favoritefoods, setFavoriteFoods] = useState<string[]>([]);
const [showGreeting, setShowGreeting] = useState(false);


const checkboxHandler = (food: string) => {
  setFavoriteFoods((prev) => 
    prev.includes(food) ? prev.filter((item) => item !== food) : [...prev,food]
);
};

const handleDisplayUser = () => {
  setShowGreeting(true);
};

const handleClear = () => {
  setFirstname("");
  setLastname("");
  setAge("");
  setFavoriteFoods([]);
  setShowGreeting(false);

};

return (
    <div>
      <h1>User Form</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" 
          id="firstname" 
          name="firstname" 
          value={firstname} 
          onChange= {(e) => setFirstname(e.target.value)} />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" value={lastname} 
          onChange= {(e) => setLastname(e.target.value)} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={age} 
          onChange= {(e) => setAge(e.target.value)} /> 
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input type="checkbox" id="chicken" name="favoriteFoods" value="Chicken" checked = {favoritefoods.includes("Chicken")} onChange ={() => checkboxHandler("Chicken")} />
            <label htmlFor="chicken">Chicken</label> 
          </div>
          <div>
            <input type="checkbox" id="beef" name="favoriteFoods" value="Beef" checked = {favoritefoods.includes("Beef")} onChange ={() => checkboxHandler("Beef")}  />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input type="checkbox" id="vegetables" name="favoriteFoods" value="Vegetables" checked = {favoritefoods.includes("Vegetables")} onChange ={() => checkboxHandler("Vegetables")}  />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input type="checkbox" id="dessert" name="favoriteFoods" value="Dessert" checked = {favoritefoods.includes("Dessert")} onChange ={() => checkboxHandler("Dessert")}  />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input type="checkbox" id="pork" name="favoriteFoods" value="Pork" checked = {favoritefoods.includes("Pork")} onChange ={() => checkboxHandler("Pork")}  />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>

      <button onClick={handleDisplayUser}>Display User</button>
      <button onClick={handleClear}>Clear</button >

      <div className="output">
        {showGreeting && (
          <p>
            Hello {firstname} {lastname}, you are {age} years old. Your favorite foods are: {favoritefoods.join(", ") || "none"}.
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
