// Soapberry — Work page
(() => {
  const DS = window.SoapberryCreativeDesignSystem_92036c;
  const {
    Button,
    SectionLabel,
    WorkCard,
    Marquee,
    SectionHeading
  } = DS;
  const {
    Reveal,
    Parallax,
    Container,
    Section,
    SB_WORKS,
    SB_CLIENTS
  } = window;
  function Work({
    go
  }) {
    return /*#__PURE__*/React.createElement("main", {
      "data-screen-label": "Work"
    }, /*#__PURE__*/React.createElement(Section, {
      label: "Work / Hero",
      style: {
        paddingTop: "calc(76px + var(--space-9))",
        paddingBottom: "var(--space-7)"
      }
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Our work")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement("h1", {
      className: "sb-display",
      style: {
        fontSize: "var(--text-display)",
        margin: "24px 0 0",
        maxWidth: "16ch"
      }
    }, "Built, then kept alive.")))), /*#__PURE__*/React.createElement(Marquee, {
      items: SB_CLIENTS,
      speed: 26
    }), /*#__PURE__*/React.createElement(Section, {
      label: "Work / Grid"
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(24px, 4vw, 64px)",
        alignItems: "start"
      }
    }, SB_WORKS.map((w, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: w.title,
      delay: i % 2 * 140,
      style: {
        marginTop: i % 2 === 1 ? "96px" : 0
      }
    }, /*#__PURE__*/React.createElement(Parallax, {
      strength: 26 + i % 2 * 26
    }, /*#__PURE__*/React.createElement(WorkCard, {
      title: w.title,
      ratio: w.ratio,
      tags: w.tags,
      href: "#/contact"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "16px 0 0",
        color: "var(--text-muted)",
        maxWidth: "44ch"
      }
    }, w.blurb)))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 140,
      style: {
        marginTop: "96px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid var(--border-strong)",
        aspectRatio: "4 / 3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        textAlign: "center",
        padding: "32px",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "sb-display",
      style: {
        fontSize: "var(--text-h2)",
        maxWidth: "12ch"
      }
    }, "Your brand next?"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      arrow: true,
      onClick: () => go("contact")
    }, "Book a call")))))));
  }
  window.SBPages = Object.assign(window.SBPages || {}, {
    work: Work
  });
})();