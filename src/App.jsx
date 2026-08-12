import ProductCard from "./fundamentals/props/practice/04-object-props/ProductCard";
import Greeting from "./fundamentals/props/practice/01-basic-props/Greeting";
import UserCard from "./fundamentals/props/practice/02-multiple-props/UserCard";
import User from "./fundamentals/props/practice/03-destructuring/User";
import Skills from "./fundamentals/props/practice/05-array-props/Skills";
import Users from "./fundamentals/props/challenges/01-user-cards/Users";
import Products from "./fundamentals/props/challenges/02-product-cards/Products";
import Profiles from "./fundamentals/props/challenges/03-profile-card/Profiles";

const App = () => {
  const product = {
    name: "Asus ROG Strix G16",
    price: 160000,
    category: "Laptop",
  };
  const skills = ["JavaScript", "React", "HTML", "CSS"];
  return (
    <div>
      <Greeting name="Yash" />
      <p>--------------------------------------------------------</p>
      <UserCard name="Yash" age={23} course="MCA" />
      <UserCard name="Rahul" age={28} course="BSC" />
      <UserCard name="Sanket" age={22} course="BCA" />
      <p>--------------------------------------------------------</p>
      <User name="Yash" role="Software Developer" company="Nvidia" />
      <p>--------------------------------------------------------</p>
      <ProductCard product={product} />
      <p>--------------------------------------------------------</p>
      <Skills skills={skills} />
      <p>--------------------------------------------------------</p>
      <Users />
      <p>--------------------------------------------------------</p>
      <Products />
      <p>--------------------------------------------------------</p>
      <Profiles />
    </div>
  );
};

export default App;
