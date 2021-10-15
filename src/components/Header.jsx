import { MainMenu } from "./MainMenu";

export default function Header() {
  return (
    <header className="main-header">
      <div className="bg-gray-100 mx-auto p-4">
        <h1 className="text-center font-semibold text-xl">React Movies List</h1>
        <MainMenu />
      </div>
    </header>
  );
}
