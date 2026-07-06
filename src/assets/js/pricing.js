// Soapberry — Pricing page
(() => {
  const DS = window.SoapberryCreativeDesignSystem_92036c;
  const {
    Button,
    SectionLabel,
    PricingCard,
    Accordion
  } = DS;
  const {
    Reveal,
    Container,
    Section
  } = window;
  const FAQ = [{
    title: "Can we start with just the website?",
    body: "Yes — Launch stands alone. Most clients add the content retainer within a few months once the site is live and hungry."
  }, {
    title: "Do you replace our marketing hire?",
    body: "For most growing businesses, yes: you get a strategist, designer, photographer, videographer, and writer for less than one salary."
  }, {
    title: "How long are retainers?",
    body: "Quarter by quarter. No annual lock-in — momentum keeps clients, not contracts."
  }];
  function Pricing({
    go
  }) {
    return /*#__PURE__*/React.createElement("main", {
      "data-screen-label": "Pricing"
    }, /*#__PURE__*/React.createElement(Section, {
      label: "Pricing / Hero",
      style: {
        paddingTop: "calc(76px + var(--space-9))"
      }
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Pricing")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120
    }, /*#__PURE__*/React.createElement("h1", {
      className: "sb-display",
      style: {
        fontSize: "var(--text-display)",
        margin: "24px 0 0",
        maxWidth: "18ch"
      }
    }, "One invoice. The whole engine.")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 240
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-lead)",
        maxWidth: "50ch",
        marginTop: "28px"
      }
    }, "Placeholder pricing — shaped for growing businesses without in-house teams. Every engagement starts with a call.")))), /*#__PURE__*/React.createElement(Section, {
      alt: true,
      label: "Pricing / Tiers"
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--grid-gap)",
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(PricingCard, {
      name: "Launch",
      price: "$6,500",
      cadence: "one-time",
      blurb: "The site, designed, written, shot, and built.",
      features: ["Strategy & design", "Development & launch", "Launch shoot day", "Copywriting", "30 days of care"],
      ctaLabel: "Book a call",
      href: "#/contact",
      style: {
        height: "100%"
      }
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 130
    }, /*#__PURE__*/React.createElement(PricingCard, {
      name: "Grow",
      price: "$3,800",
      featured: true,
      blurb: "The site plus a monthly content engine.",
      features: ["Everything in Launch", "12 social posts /mo", "Monthly shoot half-day", "Email & copy refreshes", "Quarterly reviews"],
      ctaLabel: "Book a call",
      href: "#/contact",
      style: {
        height: "100%"
      }
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 260
    }, /*#__PURE__*/React.createElement(PricingCard, {
      name: "Partner",
      price: "$7,200",
      blurb: "A full external creative department.",
      features: ["Everything in Grow", "Weekly publishing", "Video every month", "Campaigns & launches", "Priority turnaround"],
      ctaLabel: "Book a call",
      href: "#/contact",
      style: {
        height: "100%"
      }
    }))))), /*#__PURE__*/React.createElement(Section, {
      label: "Pricing / FAQ"
    }, /*#__PURE__*/React.createElement(Container, {
      style: {
        maxWidth: "56rem"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
      number: "Q"
    }, "Common questions")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 120,
      style: {
        marginTop: "40px"
      }
    }, /*#__PURE__*/React.createElement(Accordion, {
      items: FAQ
    })))));
  }
  window.SBPages = Object.assign(window.SBPages || {}, {
    pricing: Pricing
  });
})();