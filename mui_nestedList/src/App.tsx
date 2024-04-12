import SideMenu from "./SideMenu";

const list = [
  {
    id: "duhdas",
    workspace: "Workspace 1",
    view: ["View 1", "View 2", "View 3"],
    icon: "icon1",
  },
  {
    id: "fasfawe",
    workspace: "Workspace 2",
    view: ["View 4", "View 5", "View 6"],
    icon: "icon2",
  },
  {
    id: "safasf",
    workspace: "Workspace 3",
    view: [],
    icon: "icon2",
  },
];
function App() {
  return (
    <>
      <SideMenu header=" Nested List Items" listData={list} />
    </>
  );
}

export default App;
