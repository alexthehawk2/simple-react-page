import ReactLogo from "../images/React-icon.svg.png";
export default function Navbar() {
  return (
    <nav>
      <img src={ReactLogo} alt="react-logo" />
      <h3>ReactFacts</h3>
      <h4>Learning React for beginners</h4>
    </nav>
  );
}
