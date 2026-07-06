// Soapberry Creative website UI kit — shared chrome + motion helpers.
(function () {
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
      src: inverse ? window.SB_LOGOS.white : window.SB_LOGOS.black,
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
      src: window.SB_LOGOS.white,
      alt: "Soapberry Creative",
      style: {
        width: "min(520px, 70vw)",
        display: "block"
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
    }, "© 2026 Soapberry Creative · Est 2025"), /*#__PURE__*/React.createElement("span", {
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
})();