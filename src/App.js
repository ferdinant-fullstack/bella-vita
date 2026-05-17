import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import "./App.css";

const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 8,
    image:
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d9",
  },

  {
    id: 2,
    name: "Carbonara Pasta",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e",
  },

  {
    id: 3,
    name: "Tiramisu",
    price: 6,
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
  },
];

function App() {

  const [user, setUser] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  const [cart, setCart] = useState([]);

  // CHECK USER
  useEffect(() => {

    supabase.auth.getUser().then(({ data }) => {

      if (data.user) {

        setUser(data.user);

        getProfile(data.user.id);
      }
    });

  }, []);

  // LOGIN
  const handleLogin = async () => {

    const { data, error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {

      alert(error.message);

    } else {

      setUser(data.user);

      getProfile(data.user.id);
    }
  };

  // REGISTER
  const handleRegister = async () => {

    const { error } =
      await supabase.auth.signUp({
        email,
        password,
      });

    if (error) {

      alert(error.message);

    } else {

      alert("Account created!");
    }
  };

  // LOGOUT
  const handleLogout = async () => {

    await supabase.auth.signOut();

    setUser(null);
  };

  // GET PROFILE
  const getProfile = async (userId) => {

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (data) {

      setUsername(data.username || "");
      setBio(data.bio || "");
    }
  };

  // SAVE PROFILE
  const saveProfile = async () => {

    if (!user) {

      alert("Please login first");

      return;
    }

    const { error } = await supabase
      .from("profiles")
      .upsert({
        id: user.id,
        username,
        bio,
      });

    if (error) {

      alert(error.message);

    } else {

      alert("Profile saved!");
    }
  };

  // ADD TO CART
  const addToCart = (item) => {

    setCart([...cart, item]);
  };

  // REMOVE FROM CART
  const removeFromCart = (index) => {

    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);
  };

  // TOTAL
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  // PLACE ORDER
  const placeOrder = async () => {

    if (!user) {

      alert("Please login first");

      return;
    }

    if (cart.length === 0) {

      alert("Cart is empty");

      return;
    }

    const { error } = await supabase
      .from("cart_orders")
      .insert([
        {
          user_id: user.id,
          items: cart,
          total: total,
        },
      ]);

    if (error) {

      alert(error.message);

    } else {

      alert("Order placed!");

      setCart([]);
    }
  };

  return (

    <div className="container">

      <h1>Bella Vita 🍝</h1>

      {user ? (

        <div className="profile-box">

          <h2>{user.email}</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <textarea
            placeholder="Your bio"
            value={bio}
            onChange={(e) =>
              setBio(e.target.value)
            }
          />

          <button onClick={saveProfile}>
            Save Profile
          </button>

          <button onClick={handleLogout}>
            Logout
          </button>

        </div>

      ) : (

        <div className="auth-box">

          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button onClick={handleRegister}>
            Register
          </button>

          <button onClick={handleLogin}>
            Login
          </button>

        </div>

      )}

      <h2>Our Menu 🍕</h2>

      <div className="menu">

        {foodItems.map((item) => (

          <div className="card" key={item.id}>

            <img
              src={item.image}
              alt={item.name}
            />

            <h3>{item.name}</h3>

            <p>€{item.price}</p>

            <button
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>

      <div className="cart">

        <h2>Shopping Cart 🛒</h2>

        {cart.map((item, index) => (

          <div
            key={index}
            className="cart-item"
          >

            <p>
              {item.name} - €{item.price}
            </p>

            <button
              onClick={() =>
                removeFromCart(index)
              }
            >
              Remove
            </button>

          </div>

        ))}

        <h3>Total: €{total}</h3>

        <button onClick={placeOrder}>
          Place Order
        </button>

      </div>

    </div>
  );
}

export default App;