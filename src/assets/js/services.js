// Soapberry — Services page
(() => {
  const DS = window.SoapberryCreativeDesignSystem_92036c;
  const {
    Button,
    TextLink,
    SectionLabel,
    Tag,
    MediaPlaceholder,
    SectionHeading
  } = DS;
  const {
    Reveal,
    Parallax,
    Container,
    Section
  } = window;
  function OfferRow({
    number,
    label,
    title,
    blurb,
    points,
    flip = false,
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(32px, 5vw, 88px)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      style: {
        order: flip ? 2 : 1
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
      number: number
    }, label), /*#__PURE__*/React.createElement("h2", {
      className: "sb-display",
      style: {
        fontSize: "var(--text-h2)",
        margin: "22px 0 18px",
        maxWidth: "16ch"
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 26px",
        fontSize: "var(--text-lead)",
        lineHeight: 1.45,
        maxWidth: "44ch"
      }
    }, blurb), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: "0"
      }
    }, points.map(p => /*#__PURE__*/React.createElement("li", {
      key: p,
      style: {
        display: "flex",
        gap: "16px",
        alignItems: "baseline",
        padding: "14px 0",
        borderTop: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "→"), p))), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      arrow: true,
      onClick: () => go("contact"),
      style: {
        marginTop: "32px"
      }
    }, "Start here"))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 140,
      style: {
        order: flip ? 1 : 2
      }
    }, /*#__PURE__*/React.createElement(Parallax, {
      strength: 40
    }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
      ratio: "4 / 5",
      hoverZoom: true
    }))));
  }
  function Services({
    go
  }) {
    return /*#__PURE__*/React.createElement("main", {
      "data-screen-label": "Services"
    }, /*#__PURE__*/React.createElement(Section, {
      label: "Services / Hero",
      style: {
        paddingTop: "calc(76px + var(--space-9))"
      }
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Services")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement("h1", {
      className: "sb-display",
      style: {
        fontSize: "var(--text-display)",
        margin: "24px 0 0",
        maxWidth: "18ch"
      }
    }, "Two offerings. One partner.")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 240
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-lead)",
        maxWidth: "52ch",
        marginTop: "28px"
      }
    }, "Everything we do fits in two moves: we build your web presence, then we keep it fed. Take them together and your brand never goes quiet.")))), /*#__PURE__*/React.createElement(Section, {
      alt: true,
      label: "Services / Web design"
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OfferRow, {
      go: go,
      number: "01",
      label: "Web design",
      title: "Sites built to move",
      blurb: "Strategy, design, copy, and build under one roof. Fast, cinematic, and shaped around how your customers actually decide.",
      points: ["Brand & site strategy", "Design and development", "Copywriting & photography for launch", "SEO fundamentals & analytics", "Hosting, care & updates"]
    }))), /*#__PURE__*/React.createElement(Section, {
      label: "Services / Content"
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(OfferRow, {
      go: go,
      flip: true,
      number: "02",
      label: "Content creation",
      title: "A monthly content engine",
      blurb: "A rolling retainer of photography, video, social, and copy — planned around your calendar, shot on location, published for you.",
      points: ["Monthly content calendar", "Photo & video shoot days", "Social posts, edited and scheduled", "Email & site copy refreshes", "Quarterly performance reviews"]
    }))), /*#__PURE__*/React.createElement(Section, {
      inverse: true,
      label: "Services / CTA"
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
    }, "Best together — see the packages.")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      arrow: true,
      onClick: () => go("pricing")
    }, "View pricing")))));
  }
  window.SBPages = Object.assign(window.SBPages || {}, {
    services: Services
  });
})();