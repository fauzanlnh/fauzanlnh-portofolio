import LayoutNavbar from "./LayoutNavBar";
export default function LayoutMain(props) {
  return (
    <>
      <nav>
        <LayoutNavbar pages={props.pages}></LayoutNavbar>
      </nav>
      <main className="mt-3">
        <div className="container">{props.children}</div>
      </main>
    </>
  );
}
