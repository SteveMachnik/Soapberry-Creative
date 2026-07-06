(function () {
  const {
    Nav,
    Footer
  } = window;
  function readHash() {
    const h = (location.hash || "").replace(/^#\/?/, "");
    return window.SBPages[h] ? h : "home";
  }
  function App() {
    const [page, setPage] = React.useState(readHash);
    const go = key => {
      setPage(key);
      try {
        history.replaceState(null, "", "#/" + key);
      } catch (e) {}
      window.scrollTo(0, 0);
    };
    React.useEffect(() => {
      const on = () => {
        setPage(readHash());
        window.scrollTo(0, 0);
      };
      window.addEventListener("hashchange", on);
      return () => window.removeEventListener("hashchange", on);
    }, []);
    const Page = window.SBPages[page];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
      page: page,
      go: go
    }), /*#__PURE__*/React.createElement(Page, {
      key: page,
      go: go
    }), /*#__PURE__*/React.createElement(Footer, {
      go: go
    }));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();