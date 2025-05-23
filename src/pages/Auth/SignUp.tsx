import { useState } from "react";
import "./auth_css/SignIn_SignUp.css"
import { signUp } from "../../api/indexApi"; 
interface SignUpProps {
  onAuthSuccess: () => void;
}

export function SignUp({ onAuthSuccess }: SignUpProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");


 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await signUp(name, phone, email, password);

      alert("Signup successfully!"); 
      onAuthSuccess(); 
      console.log("Signup successful:", data);

    } catch (error: any) {
      console.error("Signup failed:", error.message);
      alert(`Signup failed: ${error.message || "There was a problem with the signup request."}`);
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <div className="social-icons">
        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
      </div>
      <span>or use your email for registration</span>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}