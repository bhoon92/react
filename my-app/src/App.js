import "./App.css";

const Nav = (props) => {
  const list = [];
  props.topics.map((v) => {
    list.push(v.title);
  });
  return (
    <nav>
      <ol>
        <li>{list}</li>
      </ol>
    </nav>
  );
};

const Article = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
};

const Header = (props) => {
  return (
    <header>
      <h1>
        <a
          href=""
          onClick={function (event) {
            event.preventDefault();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
};

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "javascript is ..." },
  ];
  return (
    <div>
      <Header
        title="React"
        onChange={function () {
          AudioListener("Header");
        }}
      />
      <Nav topics={topics} />
      <Article title="Welcom" body="Hello , WEB" />
    </div>
  );
}

export default App;
