import { Skills } from "./Skills";

export function Profile() {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/146852579?v=4"
        alt="Daniel Ferreira"
        width="300px"
      />
      <h2>Daniel Ferreira</h2>
      <p>Full Stack Developer</p>
      <p>Location: Brazil</p>
      <Skills />
    </div>
  );
}
