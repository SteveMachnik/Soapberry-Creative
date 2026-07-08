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
    const [sending, setSending] = React.useState(false);
    const [error, setError] = React.useState("");
    async function handleSubmit(e) {
      e.preventDefault();
      if (sending) return;
      const fd = new FormData(e.target);
      const payload = {
        name: fd.get("name") || "",
        email: fd.get("email") || "",
        business: fd.get("business") || "",
        interest: fd.get("interest") || "",
        budget: fd.get("budget") || "",
        message: fd.get("message") || ""
      };
      setSending(true);
      setError("");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const body = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(body.error || "Something went wrong.");
        setSent(true);
      } catch (err) {
        setError(err.message || "Something went wrong. Please email us directly.");
      } finally {
        setSending(false);
      }
    }
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
      onSubmit: handleSubmit,
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "28px 32px"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Your name",
      name: "name",
      placeholder: "Jane Appleseed"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "jane@business.com"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Business",
      name: "business",
      placeholder: "Appleseed & Co.",
      style: {
        gridColumn: "1 / -1"
      }
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Interested in",
      name: "interest",
      placeholder: "Choose one",
      options: ["Website only", "Website + content retainer", "Content retainer only", "Not sure yet"]
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Budget",
      name: "budget",
      placeholder: "Select a range",
      options: ["Under $5k", "$5–15k", "$15k+"]
    }), /*#__PURE__*/React.createElement(Textarea, {
      label: "Tell us about the project",
      name: "message",
      placeholder: "We're opening a second location and…",
      rows: 4,
      style: {
        gridColumn: "1 / -1"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "1 / -1",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      arrow: !sending
    }, sending ? "Sending…" : "Send it"), error ? /*#__PURE__*/React.createElement("span", {
      role: "alert",
      style: {
        color: "var(--text-muted)",
        fontSize: "14px"
      }
    }, error) : null)))))));
  }
  window.SBPages = Object.assign(window.SBPages || {}, {
    contact: Contact
  });
})();