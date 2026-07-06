// Soapberry — Process page
(() => {
  const DS = window.SoapberryCreativeDesignSystem_92036c;
  const {
    Button,
    SectionLabel,
    Accordion,
    MediaPlaceholder
  } = DS;
  const {
    Reveal,
    Parallax,
    Container,
    Section
  } = window;
  const STEPS = [{
    title: "Discover",
    body: "Two weeks of listening. We learn your business, your customers, and what growth actually means for you — then agree on the plan and the calendar."
  }, {
    title: "Design & build",
    body: "Your site, designed and built by the same team that will feed it. You see real pages early and often; launch lands in weeks, not quarters."
  }, {
    title: "Shoot & stock",
    body: "A launch shoot day builds your first content library — photography, video, and the words to go with them."
  }, {
    title: "Feed & grow",
    body: "The retainer kicks in: a monthly calendar, shoot days, posts published for you, and quarterly reviews of what's working."
  }];
  function Process({
    go
  }) {
    return /*#__PURE__*/React.createElement("main", {
      "data-screen-label": "Process"
    }, /*#__PURE__*/React.createElement(Section, {
      label: "Process / Hero",
      style: {
        paddingTop: "calc(76px + var(--space-9))"
      }
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Process")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement("h1", {
      className: "sb-display",
      style: {
        fontSize: "var(--text-display)",
        margin: "24px 0 0",
        maxWidth: "16ch"
      }
    }, "Weeks to launch. Years of momentum.")))), /*#__PURE__*/React.createElement(Section, {
      alt: true,
      label: "Process / Steps"
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: "clamp(32px, 5vw, 88px)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Accordion, {
      numbered: true,
      items: STEPS
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 160
    }, /*#__PURE__*/React.createElement(Parallax, {
      strength: 44
    }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
      ratio: "4 / 5",
      label: "Behind the scenes",
      hoverZoom: true
    })))))), /*#__PURE__*/React.createElement(Section, {
      inverse: true,
      label: "Process / CTA"
    }, /*#__PURE__*/React.createElement(Container, {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "32px"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
      className: "sb-display",
      style: {
        fontSize: "var(--text-h2)",
        color: "var(--text-inverse)",
        maxWidth: "20ch"
      }
    }, "Step one is a 30-minute call.")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      arrow: true,
      onClick: () => go("contact")
    }, "Book it")))));
  }
  window.SBPages = Object.assign(window.SBPages || {}, {
    process: Process
  });
})();