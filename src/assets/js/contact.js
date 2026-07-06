// Soapberry — Contact page
(() => {
  const DS = window.SoapberryCreativeDesignSystem_92036c;
  const {
    Button,
    SectionLabel,
    Input,
    Textarea,
    Select,
    TextLink
  } = DS;
  const {
    Reveal,
    Container,
    Section
  } = window;
  function Contact() {
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("main", {
      "data-screen-label": "Contact"
    }, /*#__PURE__*/React.createElement(Section, {
      label: "Contact / Hero",
      style: {
        paddingTop: "calc(76px + var(--space-9))"
      }
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1.1fr",
        gap: "clamp(40px, 6vw, 110px)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Contact")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement("h1", {
      className: "sb-display",
      style: {
        fontSize: "var(--text-display)",
        margin: "24px 0 0",
        maxWidth: "10ch"
      }
    }, "Let's talk.")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 240
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-lead)",
        maxWidth: "36ch",
        marginTop: "28px"
      }
    }, "A 30-minute call, no deck, no pressure. Tell us where you're headed; we'll tell you honestly if we can help."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        marginTop: "40px"
      }
    }, /*#__PURE__*/React.createElement(TextLink, {
      href: "mailto:hello@soapberrycreative.com"
    }, "hello@soapberrycreative.com"), /*#__PURE__*/React.createElement(TextLink, {
      external: true,
      href: "#"
    }, "Instagram"), /*#__PURE__*/React.createElement(TextLink, {
      external: true,
      href: "#"
    }, "Book directly on our calendar")))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 200
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid var(--border-strong)",
        padding: "64px 48px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "sb-display",
      style: {
        fontSize: "var(--text-h2)"
      }
    }, "Got it."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: "36ch"
      }
    }, "We'll reply within one business day to set up your call."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setSent(false)
    }, "Send another")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "28px 32px"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Your name",
      placeholder: "Jane Appleseed"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "jane@business.com"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Business",
      placeholder: "Appleseed & Co.",
      style: {
        gridColumn: "1 / -1"
      }
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Interested in",
      placeholder: "Choose one",
      options: ["Website only", "Website + content retainer", "Content retainer only", "Not sure yet"]
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Budget",
      placeholder: "Select a range",
      options: ["Under $5k", "$5–15k", "$15k+"]
    }), /*#__PURE__*/React.createElement(Textarea, {
      label: "Tell us about the project",
      placeholder: "We're opening a second location and…",
      rows: 4,
      style: {
        gridColumn: "1 / -1"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      arrow: true
    }, "Send it"))))))));
  }
  window.SBPages = Object.assign(window.SBPages || {}, {
    contact: Contact
  });
})();