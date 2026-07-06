// Soapberry — About page
(() => {
  const DS = window.SoapberryCreativeDesignSystem_92036c;
  const {
    Button,
    SectionLabel,
    MediaPlaceholder,
    Stat,
    Marquee
  } = DS;
  const {
    Reveal,
    Parallax,
    Container,
    Section
  } = window;
  function About({
    go
  }) {
    return /*#__PURE__*/React.createElement("main", {
      "data-screen-label": "About"
    }, /*#__PURE__*/React.createElement(Section, {
      label: "About / Hero",
      style: {
        paddingTop: "calc(76px + var(--space-9))"
      }
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, null, "About")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement("h1", {
      className: "sb-display",
      style: {
        fontSize: "var(--text-display)",
        margin: "24px 0 0",
        maxWidth: "20ch"
      }
    }, "The studio that stays.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(32px, 5vw, 88px)",
        marginTop: "64px",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      delay: 200
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--text-lead)",
        lineHeight: 1.5
      }
    }, "Soapberry Creative started in 2025 with a simple observation: most businesses don't need another agency — they need a creative team that shows up every month. So we built a studio around the whole loop: the site, the shoots, the posts, the words."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "24px 0 0",
        maxWidth: "52ch"
      }
    }, "We work with hospitality, retail, wellness, and local service businesses — brands with real places, real people, and real stories that deserve better than stock photos and a template."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      arrow: true,
      onClick: () => go("contact"),
      style: {
        marginTop: "36px"
      }
    }, "Work with us")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 320
    }, /*#__PURE__*/React.createElement(Parallax, {
      strength: 44
    }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
      ratio: "4 / 5",
      label: "The studio",
      hoverZoom: true
    })))))), /*#__PURE__*/React.createElement(Marquee, {
      items: ["Strategy", "Design", "Build", "Photography", "Video", "Social", "Copy"],
      speed: 24
    }), /*#__PURE__*/React.createElement(Section, {
      inverse: true,
      label: "About / Numbers"
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
      inverse: true,
      number: "02"
    }, "Why one team")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "clamp(40px, 8vw, 120px)",
        marginTop: "56px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Stat, {
      inverse: true,
      value: "1",
      label: "Point of contact"
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 100
    }, /*#__PURE__*/React.createElement(Stat, {
      inverse: true,
      value: "0",
      label: "Handoffs lost in email"
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 200
    }, /*#__PURE__*/React.createElement(Stat, {
      inverse: true,
      value: "∞",
      label: "Excuses removed"
    }))))));
  }
  window.SBPages = Object.assign(window.SBPages || {}, {
    about: About
  });
})();