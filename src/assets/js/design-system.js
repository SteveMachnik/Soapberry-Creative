/* @ds-bundle: {"format":4,"namespace":"SoapberryCreativeDesignSystem_92036c","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/marketing/Accordion.jsx"},{"name":"Marquee","sourcePath":"components/marketing/Marquee.jsx"},{"name":"MediaPlaceholder","sourcePath":"components/marketing/MediaPlaceholder.jsx"},{"name":"PricingCard","sourcePath":"components/marketing/PricingCard.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/marketing/Stat.jsx"},{"name":"Testimonial","sourcePath":"components/marketing/Testimonial.jsx"},{"name":"WorkCard","sourcePath":"components/marketing/WorkCard.jsx"}],"sourceHashes":{"components/core/Button.jsx":"f45747d49f72","components/core/SectionLabel.jsx":"3aef6eb805a8","components/core/Tag.jsx":"6808ec7c358e","components/core/TextLink.jsx":"7ecbc5e0ff37","components/forms/Input.jsx":"4005309887e1","components/forms/Select.jsx":"fdfc52c9276e","components/forms/Textarea.jsx":"d068713064e9","components/marketing/Accordion.jsx":"b34b1607d517","components/marketing/Marquee.jsx":"7611c8d807fc","components/marketing/MediaPlaceholder.jsx":"e924b614e11f","components/marketing/PricingCard.jsx":"45b57e87afc8","components/marketing/SectionHeading.jsx":"71b2c181929e","components/marketing/Stat.jsx":"6be953de38ee","components/marketing/Testimonial.jsx":"e4cc0c33b1d3","components/marketing/WorkCard.jsx":"e448261a2616","soapberry-github/build.js":"4e45e98fda77","ui_kits/website/About.jsx":"06b3a767b8b9","ui_kits/website/Contact.jsx":"d8bd14494618","ui_kits/website/Home.jsx":"6fe132b7af29","ui_kits/website/Pricing.jsx":"87de24065870","ui_kits/website/Process.jsx":"9364d0f3022f","ui_kits/website/Services.jsx":"3d049189b1e3","ui_kits/website/Work.jsx":"c1d8eb2c1b3e","ui_kits/website/logos.js":"53f07e9230c1","ui_kits/website/shared.jsx":"184facac43b0"},"inlinedExternals":[],"unexposedExports":[{"name":"_sbFieldBase","sourcePath":"components/forms/Input.jsx"},{"name":"_sbLabelStyle","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.SoapberryCreativeDesignSystem_92036c = window.SoapberryCreativeDesignSystem_92036c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
/** Soapberry pill button. variant: "primary" | "outline" | "inverse". size: "md" | "lg". */
function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  href,
  onClick,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const pads = size === "lg" ? "20px 40px" : "14px 28px";
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    fontFamily: "var(--font-label)",
    fontSize: "var(--text-label)",
    fontWeight: 500,
    letterSpacing: "var(--tracking-label)",
    textTransform: "uppercase",
    borderRadius: "var(--radius-pill)",
    padding: pads,
    cursor: "pointer",
    textDecoration: "none",
    lineHeight: 1,
    whiteSpace: "nowrap",
    flexShrink: 0,
    transition: "background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)",
    transform: press ? "translateY(1px)" : "none"
  };
  const variants = {
    primary: {
      background: hover ? "var(--surface-page)" : "var(--btn-bg)",
      color: hover ? "var(--text-display)" : "var(--btn-fg)",
      border: "1px solid var(--border-strong)"
    },
    outline: {
      background: hover ? "var(--btn-bg)" : "transparent",
      color: hover ? "var(--btn-fg)" : "var(--text-display)",
      border: "1px solid var(--border-strong)"
    },
    inverse: {
      background: hover ? "transparent" : "var(--white)",
      color: hover ? "var(--white)" : "var(--ink-950)",
      border: "1px solid var(--white)"
    }
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, children, arrow ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "1.1em",
      color: "var(--accent)"
    }
  }, "\u2192") : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
/** ALL-CAPS Archivo eyebrow label, optionally numbered ("01"). */
function SectionLabel({
  number,
  inverse = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sb-label",
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "var(--text-label)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: inverse ? "var(--text-inverse-muted)" : "var(--text-muted)",
      display: "flex",
      alignItems: "center",
      gap: "14px",
      whiteSpace: "nowrap",
      ...style
    }
  }, number ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, number) : null, number ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "32px",
      height: "1px",
      background: inverse ? "var(--border-inverse)" : "var(--border-hairline)"
    }
  }) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/** Pill tag for service categories and metadata. */
function Tag({
  inverse = false,
  filled = false,
  children,
  style
}) {
  const border = inverse ? "var(--border-inverse)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "var(--text-label)",
      fontWeight: 500,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      border: `1px solid ${border}`,
      borderRadius: "var(--radius-pill)",
      padding: "7px 16px",
      display: "inline-block",
      lineHeight: 1,
      background: filled ? inverse ? "var(--white)" : "var(--ink-950)" : "transparent",
      color: filled ? inverse ? "var(--ink-950)" : "var(--white)" : inverse ? "var(--text-inverse)" : "var(--text-display)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
/** Editorial text link with animated underline wipe. */
function TextLink({
  href = "#",
  external = false,
  inverse = false,
  onClick,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const color = inverse ? "var(--text-inverse)" : "var(--text-display)";
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color,
      textDecoration: "none",
      fontFamily: "var(--font-body)",
      display: "inline-flex",
      alignItems: "baseline",
      gap: "6px",
      whiteSpace: "nowrap",
      backgroundImage: `linear-gradient(${color}, ${color})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0 100%",
      backgroundSize: hover ? "100% 1px" : "0% 1px",
      transition: "background-size var(--duration-base) var(--ease-out)",
      paddingBottom: "2px",
      ...style
    }
  }, children, external ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2197") : null);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const fieldBase = {
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-body)",
  color: "var(--text-display)",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--border-hairline)",
  borderRadius: 0,
  padding: "12px 0",
  width: "100%",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color var(--duration-fast) var(--ease-out)"
};
const labelStyle = {
  fontFamily: "var(--font-label)",
  fontSize: "var(--text-label)",
  fontWeight: 500,
  letterSpacing: "var(--tracking-label)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  display: "block",
  marginBottom: "4px"
};

/** Underline-only editorial text input with caps label. */
function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label) : null, /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    name: name,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldBase,
      borderBottomColor: focus ? "var(--border-strong)" : "var(--border-hairline)"
    }
  }));
}
const _sbFieldBase = fieldBase;
const _sbLabelStyle = labelStyle;
Object.assign(__ds_scope, { Input, _sbFieldBase, _sbLabelStyle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Underline-only select with caps label; ▾ indicator. */
function Select({
  label,
  options = [],
  value,
  onChange,
  name,
  placeholder,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      position: "relative",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: __ds_scope._sbLabelStyle
  }, label) : null, /*#__PURE__*/React.createElement("select", {
    value: value,
    name: name,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope._sbFieldBase,
      appearance: "none",
      WebkitAppearance: "none",
      cursor: "pointer",
      paddingRight: "24px",
      borderBottomColor: focus ? "var(--border-strong)" : "var(--border-hairline)"
    }
  }, placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 0,
      bottom: "14px",
      pointerEvents: "none",
      color: "var(--text-muted)",
      fontSize: "12px"
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
/** Underline-only multiline field matching Input. */
function Textarea({
  label,
  placeholder,
  value,
  onChange,
  name,
  rows = 4,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: __ds_scope._sbLabelStyle
  }, label) : null, /*#__PURE__*/React.createElement("textarea", {
    placeholder: placeholder,
    value: value,
    name: name,
    rows: rows,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope._sbFieldBase,
      resize: "vertical",
      borderBottomColor: focus ? "var(--border-strong)" : "var(--border-hairline)"
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Accordion.jsx
try { (() => {
/** Hairline accordion with + / − toggle glyphs. items: [{title, body}]. */
function Accordion({
  items = [],
  numbered = false,
  style
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-hairline)",
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        display: "flex",
        width: "100%",
        alignItems: "baseline",
        gap: "24px",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        padding: "26px 0",
        color: "var(--text-display)"
      }
    }, numbered ? /*#__PURE__*/React.createElement("span", {
      className: "sb-label",
      style: {
        color: "var(--text-muted)",
        width: "36px",
        flexShrink: 0
      }
    }, String(i + 1).padStart(2, "0")) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "1.6rem",
        flex: 1,
        lineHeight: 1.1
      }
    }, it.title), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        fontSize: "1.4rem",
        fontFamily: "var(--font-body)",
        transform: isOpen ? "rotate(45deg)" : "none",
        transition: "transform var(--duration-base) var(--ease-out)",
        transformOrigin: "center"
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows var(--duration-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: numbered ? "0 0 28px 60px" : "0 0 28px 0",
        maxWidth: "56ch",
        color: "var(--text-body)"
      }
    }, it.body))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Marquee.jsx
try { (() => {
/** Infinite horizontal ticker for client names / capabilities. */
function Marquee({
  items = [],
  separator = "·",
  speed = 30,
  inverse = false,
  style
}) {
  const content = items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap"
    }
  }, it), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--accent)"
    }
  }, separator)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      borderTop: `1px solid ${inverse ? "var(--border-inverse)" : "var(--border-hairline)"}`,
      borderBottom: `1px solid ${inverse ? "var(--border-inverse)" : "var(--border-hairline)"}`,
      padding: "18px 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes sb-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      @media (prefers-reduced-motion: reduce) { .sb-marquee-track { animation: none !important; } }`), /*#__PURE__*/React.createElement("div", {
    className: "sb-marquee-track",
    style: {
      display: "flex",
      gap: "40px",
      width: "max-content",
      fontFamily: "var(--font-display)",
      fontSize: "1.5rem",
      color: inverse ? "var(--text-inverse)" : "var(--text-display)",
      animation: `sb-marquee ${speed}s linear infinite`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "40px",
      alignItems: "center"
    }
  }, content), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "40px",
      alignItems: "center"
    },
    "aria-hidden": "true"
  }, content)));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/marketing/MediaPlaceholder.jsx
try { (() => {
/** Cinematic grayscale media placeholder (uses .sb-media). Optional src swaps in a real image. Hover scales media 1.03. */
function MediaPlaceholder({
  ratio = "16 / 9",
  src,
  label,
  parallax = false,
  hoverZoom = false,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const inner = {
    position: "absolute",
    inset: 0,
    transform: hoverZoom && hover ? "scale(1.03)" : "scale(1)",
    transition: "transform 1s var(--ease-out)"
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "data-parallax": parallax ? "true" : undefined,
    style: {
      position: "relative",
      overflow: "hidden",
      aspectRatio: ratio,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      ...inner,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "sb-media",
    style: inner
  }), label ? /*#__PURE__*/React.createElement("span", {
    className: "sb-label",
    style: {
      position: "absolute",
      left: "16px",
      bottom: "14px",
      color: "var(--text-inverse)",
      zIndex: 1
    }
  }, label) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      height: "100%"
    }
  }, children) : null);
}
Object.assign(__ds_scope, { MediaPlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/MediaPlaceholder.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingCard.jsx
try { (() => {
/** Pricing tier card: name, price, cadence, feature list, CTA. featured = inverse ink. */
function PricingCard({
  name,
  price,
  cadence = "/mo",
  blurb,
  features = [],
  featured = false,
  ctaLabel = "Book a call",
  href = "#",
  style
}) {
  const fg = featured ? "var(--text-inverse)" : "var(--text-display)";
  const muted = featured ? "var(--text-inverse-muted)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: featured ? "var(--surface-inverse)" : "var(--surface-page)",
      border: featured ? "1px solid var(--surface-inverse)" : "1px solid var(--border-strong)",
      padding: "40px 36px",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sb-label",
    style: {
      color: muted
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "3rem",
      lineHeight: 1,
      color: fg
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      color: muted,
      fontSize: "var(--text-small)"
    }
  }, cadence)), blurb ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: featured ? "var(--ink-300)" : "var(--text-body)",
      fontSize: "var(--text-body)"
    }
  }, blurb) : null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      flex: 1
    }
  }, features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "baseline",
      color: featured ? "var(--ink-200)" : "var(--text-body)",
      fontSize: "var(--text-small)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--accent)"
    }
  }, "\u2192"), f))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? "inverse" : "outline",
    href: href,
    style: {
      alignSelf: "flex-start"
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
/** Standard section opener: numbered eyebrow + display headline + optional lead. */
function SectionHeading({
  number,
  label,
  title,
  lead,
  inverse = false,
  align = "left",
  maxWidth = "18ch",
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, {
    number: number,
    inverse: inverse
  }, label) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--text-h2)",
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-display)",
      color: inverse ? "var(--text-inverse)" : "var(--text-display)",
      maxWidth
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-lead)",
      lineHeight: 1.45,
      color: inverse ? "var(--ink-300)" : "var(--text-body)",
      maxWidth: "52ch"
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Stat.jsx
try { (() => {
/** Oversized display number + caps caption. */
function Stat({
  value,
  label,
  inverse = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(2.5rem, 4.5vw, 4.25rem)",
      lineHeight: 0.95,
      color: inverse ? "var(--text-inverse)" : "var(--text-display)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "sb-label",
    style: {
      color: inverse ? "var(--text-inverse-muted)" : "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Stat.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Testimonial.jsx
try { (() => {
/** Editorial pull-quote testimonial with attribution. */
function Testimonial({
  quote,
  name,
  role,
  inverse = false,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontStyle: "italic",
      fontSize: "var(--text-lead)",
      lineHeight: 1.4,
      color: inverse ? "var(--text-inverse)" : "var(--text-display)"
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "20px",
      display: "flex",
      alignItems: "center",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "32px",
      height: "1px",
      background: inverse ? "var(--border-inverse)" : "var(--border-strong)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "sb-label",
    style: {
      color: inverse ? "var(--text-inverse)" : "var(--text-display)"
    }
  }, name), role ? /*#__PURE__*/React.createElement("span", {
    className: "sb-label",
    style: {
      color: inverse ? "var(--text-inverse-muted)" : "var(--text-muted)"
    }
  }, role) : null));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/marketing/WorkCard.jsx
try { (() => {
/** Large portfolio card: media block + title row + service tags. */
function WorkCard({
  title,
  ratio = "4 / 3",
  tags = [],
  src,
  href = "#",
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      textDecoration: "none",
      color: "inherit",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MediaPlaceholder, {
    ratio: ratio,
    src: src,
    hoverZoom: true,
    style: {
      marginBottom: "18px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.75rem",
      color: "var(--text-display)",
      lineHeight: 1.1
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: "1.25rem",
      color: hover ? "var(--accent)" : "var(--text-display)",
      transform: hover ? "translate(4px, -4px)" : "none",
      transition: "transform var(--duration-base) var(--ease-out), color var(--duration-fast) var(--ease-out)"
    }
  }, "\u2197")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      marginTop: "12px",
      flexWrap: "wrap"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))));
}
Object.assign(__ds_scope, { WorkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/WorkCard.jsx", error: String((e && e.message) || e) }); }

// soapberry-github/build.js
try { (() => {
const fs = require('fs');
const path = require('path');

// Build script: copy src/index.html to public/index.html
const srcFile = path.join(__dirname, 'src', 'index.html');
const publicDir = path.join(__dirname, 'public');
const publicFile = path.join(publicDir, 'index.html');

// Create public directory if needed
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, {
    recursive: true
  });
}

// Copy the file
try {
  fs.copyFileSync(srcFile, publicFile);
  const stats = fs.statSync(publicFile);
  const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
  console.log(`✓ Built public/index.html (${sizeMB} MB)`);
} catch (err) {
  console.error('✗ Build failed:', err.message);
  process.exit(1);
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "soapberry-github/build.js", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
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
    }, "Soapberry Creative started in 2025 with a simple observation: most businesses don't need another agency \u2014 they need a creative team that shows up every month. So we built a studio around the whole loop: the site, the shoots, the posts, the words."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "24px 0 0",
        maxWidth: "52ch"
      }
    }, "We work with hospitality, retail, wellness, and local service businesses \u2014 brands with real places, real people, and real stories that deserve better than stock photos and a template."), /*#__PURE__*/React.createElement(Button, {
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
      value: "\u221E",
      label: "Excuses removed"
    }))))));
  }
  window.SBPages = Object.assign(window.SBPages || {}, {
    about: About
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
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
      placeholder: "We're opening a second location and\u2026",
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
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
    }, "Full-service creative studio \xB7 Est 2025")), /*#__PURE__*/React.createElement("h1", {
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
    }, "Websites designed and built \u2014 then kept alive with photo, video, social, and copy. One team, one retainer."))), /*#__PURE__*/React.createElement("span", {
      className: "sb-label",
      style: {
        position: "absolute",
        right: "var(--container-pad)",
        bottom: "32px",
        color: "var(--ink-400)",
        writingMode: "vertical-rl"
      }
    }, "Scroll \u2193")), /*#__PURE__*/React.createElement(Marquee, {
      items: SB_CLIENTS,
      speed: 26
    }), /*#__PURE__*/React.createElement(Section, {
      label: "Home / Model"
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
      number: "01",
      label: "The model",
      title: "A website is a stage. Content is the show.",
      lead: "Most studios hand you the keys and disappear. We stay \u2014 shooting, writing, and posting \u2014 so your site and socials never go quiet."
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
    }, "Strategy, design, copy, and build \u2014 a fast, cinematic website shaped around your business, not a template."), /*#__PURE__*/React.createElement(TextLink, {
      onClick: e => {
        e.preventDefault();
        go("services");
      },
      style: {
        marginTop: "20px",
        display: "inline-flex"
      }
    }, "Web design \u2192"))), /*#__PURE__*/React.createElement(Reveal, {
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
    }, "Photography, video, social posts, and copy on a single retainer \u2014 planned, produced, and published for you."), /*#__PURE__*/React.createElement(TextLink, {
      onClick: e => {
        e.preventDefault();
        go("services");
      },
      style: {
        marginTop: "20px",
        display: "inline-flex"
      }
    }, "Content creation \u2192")))))), /*#__PURE__*/React.createElement(Section, {
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
      quote: "They rebuilt our site and now run all our socials. One team, one invoice \u2014 and everything finally sounds like us.",
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
      value: "3\xD7",
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
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
    }, "Placeholder pricing \u2014 shaped for growing businesses without in-house teams. Every engagement starts with a call.")))), /*#__PURE__*/React.createElement(Section, {
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Process.jsx
try { (() => {
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Process.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
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
    }, "\u2192"), p))), /*#__PURE__*/React.createElement(Button, {
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
      blurb: "A rolling retainer of photography, video, social, and copy \u2014 planned around your calendar, shot on location, published for you.",
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
    }, "Best together \u2014 see the packages.")), /*#__PURE__*/React.createElement(Reveal, {
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/logos.js
try { (() => {
// Soapberry logo data URIs (embedded so the site is fully self-contained)
window.SB_LOGOS = {
  black: "data:image/png;base64,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5EO7BelrgM2SDJITU4BnvEMU2KPAlqQ7uVGPFNctIiIi7XnPO4CIiIiIiORDOwXpU4Edkg6SEy8AE71DFNwdwH7eIURERCRT73sHEBERERGRfIhbkD4AODKNIDnxtHeAkrgUODeldac5+lpERETaM9o7QAYmewcQEREREQlBnIL0msAf0wqSE6O8A5TIUdiI9KSpZYeIiEj+lKGH9HTeAUREREREQhC1ID0U+FuM24dqjHeAEvka2BqY4B1EREREREREREREshGlwNwLuB3ol3KWPPjYO0DJDAf2dM4gIiIiIiIiIiIiGYlSkP41sGjaQXJCI6SzdytwQYLrUw9pERERERERERGRnGpVkF4d+EUWQXLiK+8AJXUQ8KJ3CBEREREREREREUlXs4L0dMClWQXJiaL3yM6z3YDvEliPJjUUERERERERERHJqWYF2IOAhbIKkhNJFESlPS8DZ3qHEBERERERERERkfQ0KkjPCpycZRAR4ARsokMREREREREREREpoEYF6WOAmbMMkhOaEM/XV8CPO1yH/oYiIiIiIiIiIiI5Va8gPQj4SdZBcqKvdwDhQcrXu1xERERERERERKQU6hWkD6W8hdkh3gEEgF8CH3uHEBERERERERERkWR1L0j3xyYzLKuyTeKYV58DJzpnEBERERERERERkYR1L0jvAMzkESQnFvYOIP9zEfB2G/frkXQQERERERERERERSUb3gvSeHiFyRCOk82MycLB3CBEREREREREREUlObUF6MWBlryA5sah3AJnK34H7Y95nShpBREREREREREREpHO1Bent3VLkR39gJe8QMpVDgO9i3F4tO0RERERERERERHKqtiC9gVuKfFnPO4BM5VXgihi31whpERERERERERGRnKoWpPsDP/QMkiMbeQeQaZwR47YaIS0iIiIiIiIiIpJT1YL0hq4p8mV1oJ93CJnK68CtEW+rEdIiIiIiIiIiIiI5VS1Ia3T01Nb3DiDT+K13ABEREREREREREelMtSD9fdcU+bOPdwCZxtPAQxFup5YdIiIiIiIiIiIiOdWzsqzgHSRnNgQW8A4h04jTS1pERERERERERERypiewFDCDd5Ac0ijp/PkH8FqL26iHtIiIiIiIiIiISE71BBb2DpFT+wO9vEPINK5s8XO17BAREREREREREcmpnsBg7xA5NTuwtXcI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",
  white: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaQAAAFkCAYAAADffTwDAACifklEQVR4nOzddbwc5fXH8U8CJEFCgiR4CBLcoUALxYoVd3cvpYVCixcrUmixtkhxl6LFCpTiXlxKcScETUhoEiT5/XF2f/fmZu/emd2ZOfM8832/Xvd1bXfm3Hv37s6cOc85vSZOnIi0bUZgADCw01vXz2eove8P9Op03wnA+E5v42rvv6l9PLr2+ShgJPAJ8L/axyNrXx+b/Y8UlGOBVWofr+4ZiIiIiERjcWAeYGFg/trHAC8CLwG3YsdlIiIiIiKSQi8lpBNZCJgDmA+YCzshGVJ7P7tjXHWjgLdrb2/W3r8FvAO85hdW7uYALmXSJPQUTrGIiIhIeIYBC2AJ5wU6fTwkwX2/BHYGbs8tOhERERGRCCkhPan5gEWBpWpvSwJDC47hSyyJPL7T13oDM9XeBrewzfexRPVbXd6/DnzVTrBOFgIOxk4Cu1JCWkRERDqbi47E8zzAIrXPh2W0/R2AqzPaloiIiIhI9KqckJ4dWBVYAVgWWBqYusD9Pwe8giWf38ASxP/Fqp170h9rATIjMAhYAltWuhj2c6TxFfAhMLz2/v3ax8OB92rxjU65zbxsDOwHrNHkNkpIi4iIVM9gOqqb5wMWrL1fGOib876/ru3r05z3IyIiIiIShSolpBcCVgN+iPUbTrIUM0tPA7cAjwKPY32g87I4Vt29LLAR7Vd5f0ZHZfVrWEuQd7Bq7i+Aj9rcfiP9seT6MtiFg7VIdsFACWkREZE4TcOk1c2dW2wMcIwL4Ajg984xiIiIiIgEIeaE9AJYAnpN4Me01uqiXS8AFwM3YNXHXhYHNqy9LZ/TPsZjCeovgc+xgYxja+/Hdfm88xDGKbAq78HAzMCstY9bPbFUQlpERCRsiwHz0jFMcBhW8exxLJfUw9gFdBERERER6UFMCekZsGrgdbATglkdY7kE+CvwpGMM3RkMbApsB6zsHEselJAWEREptymw1VsLMPlQwSFAL7fIWjcKa6UmIiIiIiI9CD0hPSuwFZaIXt05FoBLgWOw3sshWBDrybw9/ktds6KEtIiISDnMQUdbjc5tNuYBpnKMKy99gO+9gxARERERKbtQE9IbA7tgiegyeBarOH7NO5A2bAvshfXXDpkS0iIiIsUZREd18zAmTT4XOSy6DJSQFhERERFJIKSE9NzAPsDOwCzOsXR2BnCQdxAZWhb4I+EmppWQFhERyV4/YBM6Kp7nxQYM9neMqWx0DCIiIiIikkAICektsUT0as5xdDUa2Am4xTuQnKwPnIwNFAqJTgZFRESyNw/whncQJacKaRERERGRBMqakJ4b+BnWlmOQbygNvQVsALzqHUjOegO7AscCsznHktSUQCkf1CIiIgFTQrpnSkiLiIiIiCRQtoT0isARwHregTTxOBbfKO9ACjQ1cDxwgHMcSahCWkREJB+LYsdqKwMbAjP4hlM6OgYREREREUmgLAnpnwBHUv6+xU8DawBjvANxshZwGTDYO5AmVCEtIiKSvwHA/tjF6gG+oZSGKqRFRERERBLwTkgvBpxJ+fpDN/JvLCE72jsQZ4OAiyhvFbuqk0RERIozA3AKsJt3ICWgYxARERERkQS8EtKDgOOAPbA+xWX3MbAU8KlzHGXyM+BUoK93IF2oQlpERKR4PwEuJZyZE3lQhbSIiIiISAIeCel9sX7EIS3vXB5r1yGTWgy4FRjiHUgnqk4SERHxMQvwBDCXdyBOlJAWEREREUmgyOrkHwHPAX8mrGT00SgZ3Z2XgGWAe70D6aSXdwAiIiIVNQKrlP7COxARERERESmvIiqkB2KtHXbJe0c5+ABYABjvHUjJ9Qb+gA028qaWHSIiIr6WBp7yDsKBVmmJiIiIiCSQd4X0TsB/CTMZDZZgVTK6ZxOAg4AdgW+dYxERERFfz2KzJqpGCWkRERERkQTyqpDuB1wCbJnHxgvyPNaOQtJZDrgDmMlp/zoZFBERKYcbgE28gyiQekiLiIiIiCSQR0J6dmzQ3VJZb7hgOwBXewcRqAWBh/BJSqtlh4iISDkMBt4DpvIOpCBKSIuIiIiIJJB1y46VgGcIPxn9PkpGt+NV4MfAJw77VjJaRESkHD4BLvIOQkREREREyiXLhPQBwIPAoAy36eU87wAi8CqwMjDcOxARERFx8wd0sVhERERERDrJIiHdD6smPjWDbZXFdd4BROJNrGr+Pe9ARERExMXbWMGCiIiIiIgIkE1C+kZgqwy2UxbPA697BxGRd4FVgY+9AxEREREX//AOQEREREREyqPdhPStwDpZBFIiN3kHEKH3gLWAUd6BiIiISOHu8A5ARERERETKo52E9M3AehnFUSb3eQcQqf8AG3kHISIiIoV7GfjWOwgRERERESmHVhPSVwEbZhlISUwEnvYOImIPA5uQ73CjXjluW0RERFrzgXcAIiIiIiJSDq0kpE8Ets46kJJ4HhjrHUTkbgX28g5CRERECvWhdwAiIiIiIlIOaRPS+wCH5BFISTzlHUBFXAScmdO286y+FhERkdaM8A6gAN97ByAiIiIiEoI0CelVgT/nFUhJDPcOoEIOxSrSs6aWHSIiIuVThR7SU3gHICIiIiISgqQJ6WHA31PcPlSfeAdQId8AmwFjvAMRERERERERERGRYiRJMPcBbgH65xxLGXzmHUDFvAPs4hyDiIiIiIiIiIiIFCRJQvp3wAJ5B1ISqpAu3k3AORluTz2kRURERERERERESqqnhPSPgV8XEUhJjPcOoKL2A17wDkJERERERERERETy1SwhPQVwUVGBlETsPbLLbEdgQgbb0VBDERERERERERGRkmqWgN0PmLeoQEoii4SotOYl4FTvIERERERERERERCQ/3SWkZwCOKzIQEeBobNChiIiIiIiIiIiIRKi7hPThwHRFBlISGojnazywe5vb0N9QRERERERERESkpBolpAcDPys6kJKY2jsA4X6q17tcRERERERERESkEholpA+guonZod4BCAC/AT7zDkJERERERERERESy1TUhPQAbZlhVVRviWFYjgWOcYxAREREREREREZGMdU1Ibw1M6xFIScznHYD8v/OAt1q4X6+sAxEREREREREREZFsdE1I7+IRRImoQro8vgd+6R2EiIiIiIiIiIiIZKdzQnpBYAWvQEpiAe8AZBL/AO5NeZ+JeQQiIiIiIiIiIiIi7euckN7KLYryGAAs5x2ETGJ/YEKK26tlh4iIiIiIiIiISEl1Tkiv7RZFuazpHYBM4j/AZSlurwppERERERERERGRkqonpAcAP/IMpETW9Q5AJnNKituqQlpERERERERERKSk6gnpdVyjKJcfA/29g5BJvArclPC2qpAWEREREREREREpqXpCWtXRk1rLOwCZzO+9AxAREREREREREZH21BPSy7tGUT57eAcgk3kKeCDB7dSyQ0REREREREREpKR6196W8Q6kZNYB5vYOQiaTppe0iIiIiIiIiIiIlExvYFFgKu9ASkhV0uVzJ/BKD7dRD2kREREREREREZGS6g3M5x1ESe0N9PEOQiZzeQ/fV8sOERERERER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"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/logos.js", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
// Soapberry Creative website UI kit — shared chrome + motion helpers.
const DS = window.SoapberryCreativeDesignSystem_92036c;
const {
  Button,
  TextLink,
  SectionLabel,
  Tag,
  MediaPlaceholder
} = DS;

/* ---------- Motion: scroll reveal ---------- */
function Reveal({
  delay = 0,
  children,
  style,
  as = "div"
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, {
      threshold: 0.15
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const El = as;
  return /*#__PURE__*/React.createElement(El, {
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? "none" : "translateY(var(--reveal-distance))",
      transition: `opacity var(--duration-reveal) var(--ease-out) ${delay}ms, transform var(--duration-reveal) var(--ease-out) ${delay}ms`,
      ...style
    }
  }, children);
}

/* ---------- Motion: parallax drift ---------- */
function Parallax({
  strength = 40,
  children,
  style
}) {
  const ref = React.useRef(null);
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = (r.top + r.height / 2 - vh / 2) / vh; // -0.5..0.5-ish
        setY(-p * strength);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [strength]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      willChange: "transform",
      transform: `translateY(${y}px)`,
      ...style
    }
  }, children);
}

/* ---------- Layout ---------- */
function Container({
  wide = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: wide ? "none" : "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-pad)",
      boxSizing: "border-box",
      ...style
    }
  }, children);
}
function Section({
  alt = false,
  inverse = false,
  children,
  style,
  label
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": label,
    style: {
      background: inverse ? "var(--surface-inverse)" : alt ? "var(--surface-alt)" : "var(--surface-page)",
      padding: "var(--space-section) 0",
      ...style
    }
  }, children);
}

/* ---------- Nav ---------- */
const NAV_LINKS = [["Services", "services"], ["Work", "work"], ["Process", "process"], ["Pricing", "pricing"], ["About", "about"]];
function Nav({
  page,
  go
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, {
      passive: true
    });
    return () => window.removeEventListener("scroll", on);
  }, []);
  // Over the Home hero (un-scrolled) the nav sits on near-black media: go inverse.
  const inverse = page === "home" && !scrolled;
  const link = (labelText, key) => {
    const active = page === key;
    return /*#__PURE__*/React.createElement("a", {
      key: key,
      href: "#/" + key,
      onClick: e => {
        e.preventDefault();
        go(key);
      },
      className: "sb-label",
      style: {
        color: inverse ? active ? "var(--text-inverse)" : "var(--ink-300)" : active ? "var(--text-display)" : "var(--text-muted)",
        textDecoration: "none",
        paddingBottom: "3px",
        borderBottom: active ? `1px solid ${inverse ? "var(--white)" : "var(--border-strong)"}` : "1px solid transparent",
        transition: "color var(--duration-fast) var(--ease-out)"
      }
    }, labelText);
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: scrolled ? "rgba(255,255,255,0.82)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-hairline)" : "1px solid transparent",
      transition: "background var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "76px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/home",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "logo-highres.png",
    alt: "Soapberry Creative",
    style: {
      height: "48px",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "28px"
    }
  }, NAV_LINKS.map(([t, k]) => link(t, k)), /*#__PURE__*/React.createElement(Button, {
    variant: inverse ? "inverse" : "primary",
    onClick: () => go("contact")
  }, "Book a call"))));
}

/* ---------- Footer ---------- */
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-inverse)",
      padding: "var(--space-9) 0 var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "28px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "logo-highres.png",
    alt: "Soapberry Creative",
    style: {
      width: "min(520px, 70vw)",
      display: "block",
      filter: inverse ? "none" : "invert(1)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-inverse-muted)",
      fontSize: "var(--text-lead)",
      maxWidth: "34ch"
    }
  }, "We build it. Then we feed it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "72px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sb-label",
    style: {
      color: "var(--text-inverse-muted)"
    }
  }, "Site"), [["Home", "home"], ...NAV_LINKS, ["Contact", "contact"]].map(([t, k]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#/" + k,
    onClick: e => {
      e.preventDefault();
      go(k);
    },
    style: {
      color: "var(--text-inverse)",
      textDecoration: "none",
      fontSize: "var(--text-small)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sb-label",
    style: {
      color: "var(--text-inverse-muted)"
    }
  }, "Elsewhere"), /*#__PURE__*/React.createElement(TextLink, {
    inverse: true,
    external: true,
    href: "#",
    style: {
      fontSize: "var(--text-small)"
    }
  }, "Instagram"), /*#__PURE__*/React.createElement(TextLink, {
    inverse: true,
    external: true,
    href: "#",
    style: {
      fontSize: "var(--text-small)"
    }
  }, "Vimeo"), /*#__PURE__*/React.createElement(TextLink, {
    inverse: true,
    external: true,
    href: "#",
    style: {
      fontSize: "var(--text-small)"
    }
  }, "LinkedIn")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-inverse)",
      marginTop: "64px",
      paddingTop: "24px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sb-label",
    style: {
      color: "var(--text-inverse-muted)"
    }
  }, "\xA9 2026 Soapberry Creative \xB7 Est 2025"), /*#__PURE__*/React.createElement("span", {
    className: "sb-label",
    style: {
      color: "var(--text-inverse-muted)"
    }
  }, "soapberrycreative.com"))));
}

/* ---------- Shared data ---------- */
const SB_WORKS = [{
  title: "Maple Tree Films",
  tags: ["Web design", "Video", "Copy"],
  ratio: "4 / 3",
  blurb: "A cinematic portfolio site for a documentary studio — plus trailers cut monthly for social."
}, {
  title: "Cedar Grove School",
  tags: ["Web design", "Photography", "Social"],
  ratio: "3 / 4",
  blurb: "Enrollment-driving site and a term-by-term photo program that keeps families engaged."
}, {
  title: "Bailey Carpentry PEC",
  tags: ["Web design", "Photography", "Copy"],
  ratio: "4 / 3",
  blurb: "A craft-forward site with project stories shot on-site in Prince Edward County."
}];
const SB_CLIENTS = ["Maple Tree Films", "Cedar Grove School", "Bailey Carpentry PEC", "Your brand next"];
Object.assign(window, {
  Reveal,
  Parallax,
  Container,
  Section,
  Nav,
  Footer,
  SB_WORKS,
  SB_CLIENTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.MediaPlaceholder = __ds_scope.MediaPlaceholder;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.WorkCard = __ds_scope.WorkCard;

})();
