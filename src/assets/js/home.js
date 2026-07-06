// Soapberry — Home page
(() => {
  const DS = window.SoapberryCreativeDesignSystem_92036c;
  const {
    Button,
    TextLink,
    SectionLabel,
    Tag,
    MediaPlaceholder,
    SectionHeading,
    WorkCard,
    Testimonial,
    Stat,
    Marquee
  } = DS;
  const {
    Reveal,
    Parallax,
    Container,
    Section,
    SB_WORKS,
    SB_CLIENTS
  } = window;
  function Home({
    go
  }) {
    return /*#__PURE__*/React.createElement("main", {
      "data-screen-label": "Home"
    }, /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Hero",
      style: {
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "var(--ink-950)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sb-media",
      style: {
        position: "absolute",
        inset: "-8% 0"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(17,17,16,0.72) 0%, rgba(17,17,16,0.12) 55%)"
      }
    }), /*#__PURE__*/React.createElement(Container, {
      style: {
        position: "relative",
        zIndex: 1,
        paddingBottom: "9vh",
        paddingTop: "20vh",
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
      inverse: true
    }, "Full-service creative studio · Est 2025")), /*#__PURE__*/React.createElement("h1", {
      className: "sb-display",
      style: {
        color: "var(--text-inverse)",
        fontSize: "var(--text-hero)",
        margin: "28px 0 0",
        maxWidth: "12ch"
      }
    }, /*#__PURE__*/React.createElement(Reveal, {
      as: "span",
      style: {
        display: "block"
      }
    }, "We build it."), /*#__PURE__*/React.createElement(Reveal, {
      as: "span",
      delay: 140,
      style: {
        display: "block"
      }
    }, "Then we feed it.")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 280,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "24px",
        marginTop: "44px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      arrow: true,
      onClick: () => go("contact")
    }, "Book a call"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--ink-300)",
        fontSize: "var(--text-lead)",
        maxWidth: "36ch"
      }
    }, "Websites designed and built — then kept alive with photo, video, social, and copy. One team, one retainer."))), /*#__PURE__*/React.createElement("span", {
      className: "sb-label",
      style: {
        position: "absolute",
        right: "var(--container-pad)",
        bottom: "32px",
        color: "var(--ink-400)",
        writingMode: "vertical-rl"
      }
    }, "Scroll ↓")), /*#__PURE__*/React.createElement(Marquee, {
      items: SB_CLIENTS,
      speed: 26
    }), /*#__PURE__*/React.createElement(Section, {
      label: "Home / Model"
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
      number: "01",
      label: "The model",
      title: "A website is a stage. Content is the show.",
      lead: "Most studios hand you the keys and disappear. We stay — shooting, writing, and posting — so your site and socials never go quiet."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--grid-gap)",
        marginTop: "72px",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--border-strong)",
        paddingTop: "28px"
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      number: "A"
    }, "Design + build"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "var(--text-h2)",
        margin: "18px 0 14px",
        lineHeight: 1
      }
    }, "Your site, built to move"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: "44ch"
      }
    }, "Strategy, design, copy, and build — a fast, cinematic website shaped around your business, not a template."), /*#__PURE__*/React.createElement(TextLink, {
      onClick: e => {
        e.preventDefault();
        go("services");
      },
      style: {
        marginTop: "20px",
        display: "inline-flex"
      }
    }, "Web design →"))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 140
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--border-strong)",
        paddingTop: "28px"
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      number: "B"
    }, "Content engine"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "var(--text-h2)",
        margin: "18px 0 14px",
        lineHeight: 1
      }
    }, "Fresh content, every month"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: "44ch"
      }
    }, "Photography, video, social posts, and copy on a single retainer — planned, produced, and published for you."), /*#__PURE__*/React.createElement(TextLink, {
      onClick: e => {
        e.preventDefault();
        go("services");
      },
      style: {
        marginTop: "20px",
        display: "inline-flex"
      }
    }, "Content creation →")))))), /*#__PURE__*/React.createElement(Section, {
      alt: true,
      label: "Home / Work"
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: "24px"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
      number: "02",
      label: "Our work",
      title: "Built, then kept alive."
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      arrow: true,
      onClick: () => go("work")
    }, "All work"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(24px, 4vw, 64px)",
        marginTop: "72px",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Parallax, {
      strength: 26
    }, /*#__PURE__*/React.createElement(WorkCard, {
      title: SB_WORKS[0].title,
      ratio: SB_WORKS[0].ratio,
      tags: SB_WORKS[0].tags,
      href: "#/work"
    }))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 160,
      style: {
        marginTop: "96px"
      }
    }, /*#__PURE__*/React.createElement(Parallax, {
      strength: 54
    }, /*#__PURE__*/React.createElement(WorkCard, {
      title: SB_WORKS[1].title,
      ratio: SB_WORKS[1].ratio,
      tags: SB_WORKS[1].tags,
      href: "#/work"
    })))))), /*#__PURE__*/React.createElement(Section, {
      inverse: true,
      label: "Home / Testimonials"
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
      number: "03",
      inverse: true
    }, "Kind words")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(40px, 6vw, 96px)",
        marginTop: "56px"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Testimonial, {
      inverse: true,
      quote: "They rebuilt our site and now run all our socials. One team, one invoice — and everything finally sounds like us.",
      name: "Sarah Bailey",
      role: "Bailey Carpentry PEC"
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 160
    }, /*#__PURE__*/React.createElement(Testimonial, {
      inverse: true,
      quote: "Enrollment inquiries doubled the term after launch. The monthly photo days keep our families sharing.",
      name: "M. Okafor",
      role: "Cedar Grove School"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "clamp(40px, 8vw, 120px)",
        marginTop: "88px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Stat, {
      inverse: true,
      value: "3×",
      label: "Avg. engagement lift"
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 100
    }, /*#__PURE__*/React.createElement(Stat, {
      inverse: true,
      value: "12+",
      label: "Posts shipped monthly"
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 200
    }, /*#__PURE__*/React.createElement(Stat, {
      inverse: true,
      value: "1",
      label: "Team, end to end"
    }))))), /*#__PURE__*/React.createElement(Section, {
      label: "Home / CTA"
    }, /*#__PURE__*/React.createElement(Container, {
      style: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "36px"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
      className: "sb-display",
      style: {
        fontSize: "var(--text-display)",
        maxWidth: "16ch"
      }
    }, "Ready to stop feeding the machine yourself?")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 140
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      arrow: true,
      onClick: () => go("contact")
    }, "Book a call")))));
  }
  window.SBPages = Object.assign(window.SBPages || {}, {
    home: Home
  });
})();