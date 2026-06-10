/* @ds-bundle: {"format":3,"namespace":"HenryStudioRemix_704588","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"MetaRow","sourcePath":"components/data/MetaRow.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surface/Card.jsx"}],"sourceHashes":{"components/core/Button.jsx":"0c30664a80a7","components/core/IconButton.jsx":"a23f89dafea6","components/data/Avatar.jsx":"57e8e325fe6e","components/data/Badge.jsx":"26f6119bbcb4","components/data/MetaRow.jsx":"c8221b101b9d","components/data/Tag.jsx":"7a6d98858ea1","components/forms/Input.jsx":"e9c65563409e","components/forms/Select.jsx":"5359b1cdfa5f","components/navigation/Tabs.jsx":"c9f9fef1fca2","components/surface/Card.jsx":"d36d118b8511","ui_kits/booking/BookingSummary.jsx":"e5a159c50ad9","ui_kits/booking/Stepper.jsx":"8b8b3679df08","ui_kits/booking/Steps.jsx":"07cfa5f0b089","ui_kits/gallery/GalleryGrid.jsx":"4aaa8192ab39","ui_kits/gallery/Lightbox.jsx":"125cc3b3bca6","ui_kits/gallery/data.jsx":"483993587f65","ui_kits/website/FeaturedWork.jsx":"b039006ab9ff","ui_kits/website/Footer.jsx":"7279d0ea5410","ui_kits/website/Hero.jsx":"62093b7861bf","ui_kits/website/Services.jsx":"5a6cbc4d809a","ui_kits/website/SiteNav.jsx":"da56ddafe4ac"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HenryStudioRemix_704588 = window.HenryStudioRemix_704588 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — 亨利攝影工作室 primary action control.
 * Soft 12px corners, gentle press micro-interaction, moss-green brand fill.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "0 14px",
      height: 36,
      fontSize: "var(--text-sm)",
      gap: 6
    },
    md: {
      padding: "0 20px",
      height: 44,
      fontSize: "var(--text-base)",
      gap: 8
    },
    lg: {
      padding: "0 28px",
      height: 54,
      fontSize: "var(--text-lg)",
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      border: "1.5px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--text-on-brand)",
      border: "1.5px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--text-strong)",
      border: "1.5px solid var(--border-default)",
      boxShadow: "var(--shadow-xs)"
    },
    ghost: {
      background: "transparent",
      color: "var(--brand-soft-text)",
      border: "1.5px solid transparent",
      boxShadow: "none"
    },
    inverse: {
      background: "var(--snow)",
      color: "var(--ink)",
      border: "1.5px solid transparent",
      boxShadow: "var(--shadow-md)"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: `hs-btn hs-btn--${variant}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? "100%" : "auto",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-semibold)",
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: "0.01em",
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "var(--transition-base)",
      whiteSpace: "nowrap",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — compact square action for icon-only controls
 * (like, share, close, nav). Pairs with Lucide icons.
 */
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    solid: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      border: "1.5px solid transparent"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1.5px solid transparent"
    },
    outline: {
      background: "var(--surface-card)",
      color: "var(--text-strong)",
      border: "1.5px solid var(--border-default)"
    },
    frost: {
      background: "var(--surface-frost)",
      color: "var(--ink)",
      border: "1.5px solid var(--border-soft)",
      backdropFilter: "blur(var(--blur-frost))"
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    className: `hs-iconbtn hs-iconbtn--${variant}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "var(--transition-base)",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.92)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular profile image with initials fallback.
 */
function Avatar({
  src,
  name = "",
  size = "md",
  ring = false,
  style = {},
  ...rest
}) {
  const sizes = {
    xs: 28,
    sm: 36,
    md: 44,
    lg: 56,
    xl: 72
  };
  const dim = sizes[size] || sizes.md;
  const initials = name.trim().slice(0, 2);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "hs-avatar",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: "var(--radius-pill)",
      overflow: "hidden",
      background: "var(--moss-200)",
      color: "var(--moss-800)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: dim * 0.36,
      flexShrink: 0,
      boxShadow: ring ? "0 0 0 2px var(--surface-page), 0 0 0 4px var(--accent)" : "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", null, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status / category pill.
 */
function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ["var(--stone-100)", "var(--stone-700)"],
      solid: ["var(--stone-700)", "var(--snow)"],
      outline: ["transparent", "var(--stone-600)"]
    },
    brand: {
      soft: ["var(--brand-soft)", "var(--brand-soft-text)"],
      solid: ["var(--brand)", "var(--text-on-brand)"],
      outline: ["transparent", "var(--moss-600)"]
    },
    accent: {
      soft: ["var(--accent-soft)", "var(--accent-soft-text)"],
      solid: ["var(--accent)", "var(--text-on-brand)"],
      outline: ["transparent", "var(--ice-600)"]
    },
    success: {
      soft: ["var(--success-soft)", "var(--moss-700)"],
      solid: ["var(--success)", "var(--snow)"],
      outline: ["transparent", "var(--moss-600)"]
    },
    warning: {
      soft: ["var(--warning-soft)", "var(--amber-500)"],
      solid: ["var(--warning)", "var(--snow)"],
      outline: ["transparent", "var(--amber-500)"]
    },
    danger: {
      soft: ["var(--danger-soft)", "var(--rust-500)"],
      solid: ["var(--danger)", "var(--snow)"],
      outline: ["transparent", "var(--rust-500)"]
    }
  };
  const [bg, fg] = (tones[tone] || tones.neutral)[variant] || tones.neutral.soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `hs-badge hs-badge--${tone}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      height: 24,
      padding: "0 10px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--fw-semibold)",
      lineHeight: 1,
      letterSpacing: "0.02em",
      borderRadius: "var(--radius-pill)",
      background: bg,
      color: fg,
      border: variant === "outline" ? "1.5px solid currentColor" : "1.5px solid transparent",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/MetaRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MetaRow — EXIF-style metadata strip in mono type.
 * A signature 亨利攝影 motif for photo captions & spec rows.
 */
function MetaRow({
  items = [],
  align = "left",
  divider = "·",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "hs-metarow ds-meta",
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "6px 12px",
      justifyContent: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      letterSpacing: "0.02em",
      color: "var(--text-muted)",
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, divider), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 4,
      alignItems: "baseline"
    }
  }, it.label && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)",
      fontWeight: "var(--fw-bold)"
    }
  }, it.value), it.unit && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.7
    }
  }, it.unit)))));
}
Object.assign(__ds_scope, { MetaRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetaRow.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — keyword / filter chip with optional removable state.
 * Softer than Badge; used for photo keywords & filters.
 */
function Tag({
  children,
  active = false,
  removable = false,
  onRemove,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "hs-tag",
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 30,
      padding: "0 12px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-medium)",
      lineHeight: 1,
      borderRadius: "var(--radius-sm)",
      cursor: onClick ? "pointer" : "default",
      background: active ? "var(--brand-soft)" : "var(--surface-sunken)",
      color: active ? "var(--brand-soft-text)" : "var(--text-body)",
      border: active ? "1.5px solid var(--moss-300)" : "1.5px solid var(--border-soft)",
      transition: "var(--transition-base)",
      ...style
    }
  }, rest), children, removable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u79FB\u9664",
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      marginRight: -2,
      padding: 0,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "currentColor",
      opacity: 0.6,
      borderRadius: "var(--radius-pill)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 13,
      height: 13
    }
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with optional label, leading icon, hint & error.
 * Soft 12px corners, ice-blue focus ring.
 */
function Input({
  label,
  hint,
  error,
  iconLeft = null,
  type = "text",
  id,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const fieldId = id || (label ? `f-${String(label).replace(/\s+/g, "-")}` : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "var(--surface-card)",
      border: `1.5px solid ${error ? "var(--danger)" : focused ? "var(--accent)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      padding: "0 14px",
      height: 46,
      boxShadow: focused ? `0 0 0 3px var(--focus-ring)` : "none",
      transition: "var(--transition-base)"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-muted)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      height: "100%",
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — styled native dropdown with brand chrome & chevron.
 */
function Select({
  label,
  hint,
  error,
  options = [],
  id,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const fieldId = id || (label ? `s-${String(label).replace(/\s+/g, "-")}` : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: "100%",
      height: 46,
      padding: "0 40px 0 14px",
      appearance: "none",
      WebkitAppearance: "none",
      background: "var(--surface-card)",
      border: `1.5px solid ${error ? "var(--danger)" : focused ? "var(--accent)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      cursor: "pointer",
      boxShadow: focused ? `0 0 0 3px var(--focus-ring)` : "none",
      transition: "var(--transition-base)",
      ...style
    }
  }, rest), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lab = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      width: 18,
      height: 18,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  })), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — segmented navigation with a sliding ice-blue underline.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (tabs[0].value ?? tabs[0])));
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: 4,
      padding: 4,
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-soft)",
      ...style
    }
  }, rest), tabs.map(t => {
    const val = t.value ?? t;
    const lab = t.label ?? t;
    const on = val === active;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(val),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 38,
        padding: "0 16px",
        border: "none",
        cursor: "pointer",
        borderRadius: "var(--radius-sm)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--fw-semibold)",
        background: on ? "var(--surface-card)" : "transparent",
        color: on ? "var(--brand-soft-text)" : "var(--text-muted)",
        boxShadow: on ? "var(--shadow-xs)" : "none",
        transition: "var(--transition-base)"
      }
    }, t.icon, lab, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        background: on ? "var(--brand-soft)" : "var(--stone-200)",
        color: on ? "var(--brand-soft-text)" : "var(--text-muted)",
        borderRadius: "var(--radius-pill)",
        padding: "1px 7px"
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surface/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — soft-cornered content surface. The brand's core container:
 * 16px radius, diffuse shadow, optional cover image + hover lift.
 */
function Card({
  children,
  cover = null,
  coverHeight = 200,
  interactive = false,
  padding = "var(--space-5)",
  elevation = "sm",
  style = {},
  onClick,
  ...rest
}) {
  const shadows = {
    none: "none",
    xs: "var(--shadow-xs)",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `hs-card${interactive ? " hs-card--interactive" : ""}`,
    onClick: onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-card)",
      border: "1px solid var(--border-soft)",
      boxShadow: shadows[elevation] || shadows.sm,
      overflow: "hidden",
      cursor: interactive ? "pointer" : "default",
      transition: "var(--transition-base)",
      ...style
    },
    onMouseEnter: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    },
    onMouseLeave: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = shadows[elevation] || shadows.sm;
    }
  }, rest), cover && /*#__PURE__*/React.createElement("div", {
    style: {
      height: coverHeight,
      overflow: "hidden",
      flexShrink: 0
    }
  }, typeof cover === "string" ? /*#__PURE__*/React.createElement("img", {
    src: cover,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : cover), /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/BookingSummary.jsx
try { (() => {
// Booking — summary sidebar (sticky)
function BookingSummary({
  data
}) {
  const {
    MetaRow,
    Badge
  } = window.HenryStudioRemix_704588;
  const priceMap = {
    "個人跟拍 · 半日": 6800,
    "團體紀錄 · 全日": 12000,
    "空拍企劃 · 客製": 0
  };
  const price = priceMap[data.pkg] ?? 0;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 320,
      flexShrink: 0,
      alignSelf: "flex-start",
      position: "sticky",
      top: 32,
      background: "var(--surface-card)",
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 140,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/slope-dawn.jpg",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg,rgba(28,27,25,0) 30%,rgba(28,27,25,0.6))"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 12,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid"
  }, data.loc || "雪場待定"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow"
  }, "\u9810\u7D04\u6458\u8981"), /*#__PURE__*/React.createElement(Row, {
    label: "\u65B9\u6848",
    value: data.pkg || "尚未選擇"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "\u65E5\u671F",
    value: data.date || "尚未選擇"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "\u4EBA\u6578",
    value: data.people ? `${data.people} 人` : "—"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "\u59D3\u540D",
    value: data.name || "—"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px dashed var(--border-default)",
      paddingTop: 16,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)"
    }
  }, "\u9810\u4F30\u91D1\u984D"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-2xl)",
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, price ? `NT$ ${price.toLocaleString()}` : "客製報價")), /*#__PURE__*/React.createElement(MetaRow, {
    items: [{
      value: "訂金 30%"
    }, {
      value: "可改期 1 次"
    }]
  })));
}
function Row({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)",
      fontWeight: "var(--fw-medium)",
      textAlign: "right"
    }
  }, value));
}
window.BookingSummary = BookingSummary;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/BookingSummary.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/Stepper.jsx
try { (() => {
// Booking — progress stepper
function Stepper({
  step,
  steps
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 0
    }
  }, steps.map((s, i) => {
    const done = i < step;
    const active = i === step;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: s
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-sm)",
        fontWeight: 700,
        background: done ? "var(--brand)" : active ? "var(--brand-soft)" : "var(--surface-sunken)",
        color: done ? "var(--snow)" : active ? "var(--brand-soft-text)" : "var(--text-subtle)",
        border: active ? "1.5px solid var(--moss-300)" : "1.5px solid transparent",
        transition: "var(--transition-base)"
      }
    }, done ? /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check",
      style: {
        width: 15,
        height: 15
      }
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        fontWeight: active ? "var(--fw-semibold)" : "var(--fw-medium)",
        color: active || done ? "var(--text-strong)" : "var(--text-subtle)"
      }
    }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 2,
        margin: "0 14px",
        borderRadius: 2,
        background: done ? "var(--brand-300, var(--moss-300))" : "var(--border-soft)"
      }
    }));
  }));
}
window.Stepper = Stepper;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/Stepper.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/Steps.jsx
try { (() => {
// Booking — multi-step form body
function StepChoose({
  data,
  set
}) {
  const {
    Card,
    Badge
  } = window.HenryStudioRemix_704588;
  const packs = [{
    id: "個人跟拍 · 半日",
    icon: "user",
    name: "個人跟拍",
    meta: "半日 · 30+ 張精修",
    price: "NT$ 6,800"
  }, {
    id: "團體紀錄 · 全日",
    icon: "users",
    name: "團體紀錄",
    meta: "全日 · 短片 + 80 張",
    price: "NT$ 12,000"
  }, {
    id: "空拍企劃 · 客製",
    icon: "plane",
    name: "空拍企劃",
    meta: "空拍 + 跟拍 · 客製",
    price: "客製報價"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, "\u9078\u64C7\u62CD\u651D\u65B9\u6848"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, packs.map(p => {
    const on = data.pkg === p.id;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      onClick: () => set({
        pkg: p.id
      }),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "16px 18px",
        cursor: "pointer",
        background: on ? "var(--brand-soft)" : "var(--surface-card)",
        border: `1.5px solid ${on ? "var(--moss-400)" : "var(--border-soft)"}`,
        borderRadius: "var(--radius-md)",
        transition: "var(--transition-base)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderRadius: "var(--radius-md)",
        background: on ? "var(--brand)" : "var(--brand-soft)",
        color: on ? "var(--snow)" : "var(--brand-soft-text)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": p.icon
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-strong)"
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      className: "ds-meta"
    }, p.meta)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, p.price), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: "var(--radius-pill)",
        border: `2px solid ${on ? "var(--brand)" : "var(--border-default)"}`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 11,
        height: 11,
        borderRadius: "var(--radius-pill)",
        background: "var(--brand)"
      }
    })));
  })));
}
function StepDetails({
  data,
  set
}) {
  const {
    Input,
    Select
  } = window.HenryStudioRemix_704588;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, "\u62CD\u651D\u7D30\u7BC0"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "\u96EA\u5834\u5730\u9EDE",
    value: data.loc,
    onChange: e => set({
      loc: e.target.value
    }),
    options: ["NISEKO 二世谷", "HAKUBA 白馬", "ZAO 藏王", "FURANO 富良野", "其他（請備註）"]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u9810\u7D04\u65E5\u671F",
    type: "date",
    value: data.date,
    onChange: e => set({
      date: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u62CD\u651D\u4EBA\u6578",
    value: data.people,
    onChange: e => set({
      people: e.target.value
    }),
    options: ["1", "2", "3", "4", "5 人以上"]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u5F71\u7247\u9700\u6C42",
    options: ["僅照片", "照片 + 短片", "完整影片企劃"]
  })), /*#__PURE__*/React.createElement(Input, {
    label: "\u60F3\u5448\u73FE\u7684\u6545\u4E8B / \u7279\u6B8A\u9700\u6C42",
    placeholder: "\u4F8B\u5982\uFF1A\u60F3\u8A18\u9304\u7B2C\u4E00\u6B21\u6311\u6230\u9ED1\u7DDA\u7684\u904E\u7A0B\u2026",
    value: data.notes,
    onChange: e => set({
      notes: e.target.value
    })
  }));
}
function StepContact({
  data,
  set
}) {
  const {
    Input
  } = window.HenryStudioRemix_704588;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, "\u806F\u7D61\u65B9\u5F0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u4F60\u7684\u540D\u5B57",
    placeholder: "\u738B\u5C0F\u660E",
    value: data.name,
    onChange: e => set({
      name: e.target.value
    }),
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "user"
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "LINE ID",
    placeholder: "@henryphoto",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "message-circle"
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "mail"
    }),
    hint: "\u6211\u5011\u6703\u5BC4\u9001\u62CD\u651D\u78BA\u8A8D\u4FE1",
    containerStyle: {
      gridColumn: "1 / -1"
    }
  })));
}
function StepDone({
  data
}) {
  const {
    MetaRow,
    Button
  } = window.HenryStudioRemix_704588;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "28px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 72,
      height: 72,
      borderRadius: "var(--radius-pill)",
      background: "var(--success-soft)",
      color: "var(--brand)",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 34,
      height: 34
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-3xl)"
    }
  }, "\u9810\u7D04\u5DF2\u9001\u51FA\uFF01"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-lg)",
      maxWidth: 420,
      margin: "12px auto 0"
    }
  }, "\u611F\u8B1D ", data.name || "你", " \u7684\u9810\u7D04\u3002\u6211\u6703\u5728 24 \u5C0F\u6642\u5167\u900F\u904E LINE \u8207\u4F60\u78BA\u8A8D\u7D30\u7BC0\uFF0C\u671F\u5F85\u8207\u4F60\u4E26\u80A9\u5728\u98A8\u96EA\u4E2D\u524D\u884C\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    items: [{
      label: "預約編號",
      value: "HP-2602-0148"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "calendar-plus"
    })
  }, "\u52A0\u5165\u884C\u4E8B\u66C6"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "image"
    }),
    onClick: () => window.location.href = "../gallery/index.html"
  }, "\u5148\u770B\u770B\u4F5C\u54C1\u96C6")));
}
window.StepChoose = StepChoose;
window.StepDetails = StepDetails;
window.StepContact = StepContact;
window.StepDone = StepDone;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/Steps.jsx", error: String((e && e.message) || e) }); }

// ui_kits/gallery/GalleryGrid.jsx
try { (() => {
// Gallery — masonry grid + tile
function GalleryGrid({
  items,
  onOpen
}) {
  const {
    Badge,
    IconButton
  } = window.HenryStudioRemix_704588;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      columnCount: 3,
      columnGap: 18,
      padding: "0 40px 80px"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("figure", {
    key: it.id,
    onClick: () => onOpen(it),
    style: {
      breakInside: "avoid",
      margin: "0 0 18px",
      position: "relative",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      cursor: "pointer",
      boxShadow: "var(--shadow-sm)",
      background: "var(--surface-card)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      e.currentTarget.querySelector(".gov").style.opacity = 1;
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      e.currentTarget.querySelector(".gov").style.opacity = 0;
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/photos/${it.img}.jpg`,
    alt: it.title,
    style: {
      width: "100%",
      display: "block",
      aspectRatio: it.span === 2 ? "4 / 5" : "4 / 3",
      objectFit: "cover"
    }
  }), it.video && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "play",
    style: {
      width: 12,
      height: 12
    }
  }), " \u5F71\u7247")), /*#__PURE__*/React.createElement("figcaption", {
    className: "gov",
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      transition: "opacity var(--dur-base) var(--ease-out)",
      background: "linear-gradient(180deg, rgba(28,27,25,0) 40%, rgba(28,27,25,0.72) 100%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--snow)",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-lg)"
    }
  }, it.title), /*#__PURE__*/React.createElement("div", {
    className: "ds-meta",
    style: {
      color: "var(--stone-200)"
    }
  }, it.loc, " \xB7 ", it.mm, "mm \xB7 \u0192/", it.f)), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "maximize-2"
    }),
    label: "\u653E\u5927",
    variant: "frost",
    size: "sm"
  }))))));
}
window.GalleryGrid = GalleryGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gallery/GalleryGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/gallery/Lightbox.jsx
try { (() => {
// Gallery — fullscreen lightbox with EXIF panel
function Lightbox({
  item,
  onClose,
  onPrev,
  onNext
}) {
  const {
    IconButton,
    MetaRow,
    Badge,
    Button
  } = window.HenryStudioRemix_704588;
  if (!item) return null;
  React.useEffect(() => {
    const h = e => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [item]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      display: "flex",
      background: "rgba(18,17,16,0.86)",
      backdropFilter: "blur(8px)"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 40
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "chevron-left"
    }),
    label: "\u4E0A\u4E00\u5F35",
    variant: "frost",
    size: "lg",
    onClick: onPrev,
    style: {
      position: "absolute",
      left: 24
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `../../assets/photos/${item.img}.jpg`,
    alt: item.title,
    style: {
      maxWidth: "100%",
      maxHeight: "100%",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-xl)"
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "chevron-right"
    }),
    label: "\u4E0B\u4E00\u5F35",
    variant: "frost",
    size: "lg",
    onClick: onNext,
    style: {
      position: "absolute",
      right: 24
    }
  })), /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 320,
      flexShrink: 0,
      background: "var(--surface-card)",
      padding: "28px 26px",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      overflowY: "auto"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: item.video ? "accent" : "brand"
  }, item.video ? "影片" : "照片"), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "x"
    }),
    label: "\u95DC\u9589",
    variant: "ghost",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)"
    }
  }, item.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)",
      marginTop: 4
    }
  }, item.loc, " \xB7 2026 \u96EA\u5B63")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--divider)",
      borderBottom: "1px solid var(--divider)",
      padding: "16px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "EXIF"), /*#__PURE__*/React.createElement(MetaRow, {
    items: [{
      label: "ISO",
      value: item.iso
    }, {
      label: "ƒ/",
      value: item.f
    }, {
      value: item.s,
      unit: "s"
    }, {
      value: item.mm,
      unit: "mm"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "download"
    }),
    fullWidth: true
  }, "\u4E0B\u8F09"), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "heart"
    }),
    label: "\u6536\u85CF",
    variant: "outline"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "share-2"
    }),
    label: "\u5206\u4EAB",
    variant: "outline"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      lineHeight: 1.75
    }
  }, "\u6E05\u6668\u7B2C\u4E00\u9053\u5149\u7051\u843D\u7A1C\u7DDA\uFF0C\u9727\u6C23\u5C1A\u672A\u6563\u53BB\u3002\u6211\u8E72\u5728\u98A8\u53E3\u7B49\u4E86\u56DB\u5341\u5206\u9418\uFF0C\u53EA\u70BA\u7B49\u4F60\u6ED1\u9032\u9019\u9053\u5149\u88E1\u3002")));
}
window.Lightbox = Lightbox;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gallery/Lightbox.jsx", error: String((e && e.message) || e) }); }

// ui_kits/gallery/data.jsx
try { (() => {
// Gallery — data set (placeholder imagery)
window.GALLERY_ITEMS = [{
  id: 1,
  img: "peak-mist",
  title: "霧中稜線",
  loc: "NISEKO",
  cat: "powder",
  span: 2,
  iso: 400,
  f: 2.8,
  s: "1/2000",
  mm: 35,
  video: false
}, {
  id: 2,
  img: "slope-dawn",
  title: "晨光斜坡",
  loc: "HAKUBA",
  cat: "aerial",
  span: 1,
  iso: 200,
  f: 4.0,
  s: "1/1600",
  mm: 24,
  video: true
}, {
  id: 3,
  img: "powder-run",
  title: "樹冰穿行",
  loc: "ZAO",
  cat: "powder",
  span: 2,
  iso: 640,
  f: 2.8,
  s: "1/2500",
  mm: 50,
  video: false
}, {
  id: 4,
  img: "summit-blue",
  title: "藍時刻登頂",
  loc: "TATEYAMA",
  cat: "portrait",
  span: 1,
  iso: 800,
  f: 1.8,
  s: "1/500",
  mm: 85,
  video: false
}, {
  id: 5,
  img: "forest-valley",
  title: "森間綠徑",
  loc: "NOZAWA",
  cat: "aerial",
  span: 1,
  iso: 160,
  f: 5.6,
  s: "1/1250",
  mm: 16,
  video: true
}, {
  id: 6,
  img: "hero-ridge",
  title: "無人雪原",
  loc: "FURANO",
  cat: "portrait",
  span: 2,
  iso: 320,
  f: 3.2,
  s: "1/2000",
  mm: 35,
  video: false
}, {
  id: 7,
  img: "slope-dawn",
  title: "破曉切線",
  loc: "HAKUBA",
  cat: "powder",
  span: 1,
  iso: 400,
  f: 2.8,
  s: "1/3200",
  mm: 70,
  video: false
}, {
  id: 8,
  img: "peak-mist",
  title: "霧散之後",
  loc: "NISEKO",
  cat: "aerial",
  span: 1,
  iso: 250,
  f: 4.0,
  s: "1/1000",
  mm: 24,
  video: false
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gallery/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FeaturedWork.jsx
try { (() => {
// Marketing site — featured work grid
function FeaturedWork({
  onNav
}) {
  const {
    Card,
    Badge,
    MetaRow,
    Tabs,
    Button
  } = window.HenryStudioRemix_704588;
  const [cat, setCat] = React.useState("all");
  const items = [{
    img: "peak-mist",
    title: "二世谷・霧中稜線",
    loc: "NISEKO",
    tag: "powder",
    kind: "粉雪",
    badge: "精選"
  }, {
    img: "slope-dawn",
    title: "白馬・晨光斜坡",
    loc: "HAKUBA",
    tag: "aerial",
    kind: "空拍",
    badge: null
  }, {
    img: "powder-run",
    title: "藏王・樹冰穿行",
    loc: "ZAO",
    tag: "powder",
    kind: "粉雪",
    badge: null
  }, {
    img: "summit-blue",
    title: "立山・藍時刻登頂",
    loc: "TATEYAMA",
    tag: "portrait",
    kind: "人像",
    badge: "新作"
  }, {
    img: "forest-valley",
    title: "野澤・森間綠徑",
    loc: "NOZAWA",
    tag: "aerial",
    kind: "空拍",
    badge: null
  }, {
    img: "hero-ridge",
    title: "富良野・無人雪原",
    loc: "FURANO",
    tag: "portrait",
    kind: "人像",
    badge: null
  }];
  const shown = cat === "all" ? items : items.filter(i => i.tag === cat);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "88px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 32,
      flexWrap: "wrap",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow"
  }, "SELECTED WORK"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-3xl)",
      marginTop: 10
    }
  }, "\u96EA\u5730\u7684\u6545\u4E8B\uFF0C\u9010\u683C\u6536\u85CF")), /*#__PURE__*/React.createElement(Tabs, {
    value: cat,
    onChange: setCat,
    tabs: [{
      value: "all",
      label: "全部",
      count: items.length
    }, {
      value: "powder",
      label: "粉雪"
    }, {
      value: "aerial",
      label: "空拍"
    }, {
      value: "portrait",
      label: "人像"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 22
    }
  }, shown.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    cover: `../../assets/photos/${it.img}.jpg`,
    coverHeight: 230,
    interactive: true,
    onClick: () => onNav && onNav("work")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-xl)"
    }
  }, it.title), it.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, it.badge)), /*#__PURE__*/React.createElement(MetaRow, {
    items: [{
      value: it.loc
    }, {
      value: it.kind
    }, {
      value: "4K"
    }]
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right"
    }),
    onClick: () => onNav && onNav("work")
  }, "\u67E5\u770B\u5B8C\u6574\u4F5C\u54C1\u96C6")));
}
window.FeaturedWork = FeaturedWork;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FeaturedWork.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Marketing site — philosophy quote band + footer
function PhilosophyBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      padding: "104px 40px",
      overflow: "hidden",
      background: "var(--surface-inverse)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/summit-blue.jpg",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 820,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "quote",
    style: {
      width: 40,
      height: 40,
      color: "var(--ice-300)",
      margin: "0 auto 20px"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      color: "var(--snow)",
      fontSize: "var(--text-3xl)",
      lineHeight: 1.4,
      fontWeight: 500,
      letterSpacing: "0.01em"
    }
  }, "\u8A2D\u8A08\u4E0A\u878D\u5408\u6236\u5916\u5192\u96AA\u7684\u6A5F\u80FD\u611F\u8207\u73FE\u4EE3\u7C21\u7D04\u7F8E\u5B78\uFF0C\u7528\u6700\u5177\u547C\u5438\u611F\u7684\u6392\u7248\uFF0C\u5448\u73FE\u4F60\u6700\u771F\u5BE6\u7684\u96EA\u5730\u6545\u4E8B\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 28,
      color: "var(--ice-200)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      letterSpacing: "0.08em"
    }
  }, "\u2014 HENRY LIN, \u4E3B\u7406\u4EBA")));
}
function SiteFooter({
  onNav
}) {
  const {
    Button
  } = window.HenryStudioRemix_704588;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--moss-800)",
      color: "var(--stone-200)",
      padding: "64px 40px 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 40,
      maxWidth: 1080,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup-inverse.svg",
    alt: "\u4EA8\u5229\u651D\u5F71\u5DE5\u4F5C\u5BA4",
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: "var(--text-sm)",
      lineHeight: 1.7,
      color: "var(--moss-200)"
    }
  }, "\u6ED1\u96EA\u5F71\u50CF\u81EA\u7531\u5DE5\u4F5C\u8005\u3002\u8207\u4F60\u4E26\u80A9\u5728\u98A8\u96EA\u4E2D\u524D\u884C\u7684\u5925\u4F34\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(FootCol, {
    title: "\u63A2\u7D22",
    items: ["作品集", "拍攝方案", "雪季手記"]
  }), /*#__PURE__*/React.createElement(FootCol, {
    title: "\u806F\u7D61",
    items: ["LINE 預約", "Instagram", "Email"]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "var(--snow)",
      fontSize: "var(--text-base)",
      marginBottom: 14
    }
  }, "\u6E96\u5099\u597D\u51FA\u767C\u4E86\u55CE\uFF1F"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right"
    }),
    onClick: () => onNav && onNav("book")
  }, "\u9810\u7D04\u4F60\u7684\u96EA\u5B63"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--moss-700)",
      marginTop: 44,
      paddingTop: 24,
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--moss-300)"
    }
  }, "\xA9 2026 \u4EA8\u5229\u651D\u5F71\u5DE5\u4F5C\u5BA4 HENRYPHOTO STUDIO"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--moss-300)"
    }
  }, "HOKKAIDO \xB7 NAGANO \xB7 TAIWAN")));
}
function FootCol({
  title,
  items
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "var(--snow)",
      fontSize: "var(--text-sm)",
      letterSpacing: "0.06em",
      marginBottom: 14,
      textTransform: "uppercase"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--moss-200)",
      fontSize: "var(--text-sm)"
    }
  }, i))));
}
window.PhilosophyBand = PhilosophyBand;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Marketing site — hero
function Hero({
  onNav
}) {
  const {
    Button,
    MetaRow
  } = window.HenryStudioRemix_704588;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 620,
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/hero-ridge.jpg",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(28,27,25,0.12) 0%, rgba(28,27,25,0.05) 40%, rgba(28,27,25,0.62) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "0 40px 56px",
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow",
    style: {
      color: "var(--ice-200)"
    }
  }, "FREELANCE SKI IMAGERY \xB7 \u5317\u6D77\u9053 / \u9577\u91CE"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "var(--snow)",
      fontSize: "var(--text-6xl)",
      lineHeight: 1.04,
      margin: "16px 0 20px",
      letterSpacing: "var(--tracking-tight)",
      maxWidth: 760,
      textShadow: "0 2px 30px rgba(28,27,25,0.35)"
    }
  }, "\u6BCF\u4E00\u6B21\u51FA\u767C\uFF0C", /*#__PURE__*/React.createElement("br", null), "\u90FD\u662F\u4E00\u5834\u5C0D\u672A\u77E5\u7684\u63A2\u7D22\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--stone-100)",
      fontSize: "var(--text-xl)",
      maxWidth: 540,
      lineHeight: 1.6,
      fontWeight: 400
    }
  }, "\u5FEB\u9580\u80CC\u5F8C\u7684\u773C\u775B\uFF0C\u8207\u4F60\u4E26\u80A9\u5728\u98A8\u96EA\u4E2D\u524D\u884C\u3002\u8A18\u9304\u6311\u6230\u7684\u6C57\u6C34\uFF0C\u4E5F\u5B9A\u683C\u767B\u9802\u7684\u7B11\u5BB9\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 32,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right"
    }),
    onClick: () => onNav && onNav("work")
  }, "\u700F\u89BD\u4F5C\u54C1\u96C6"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: "var(--snow)"
    },
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "play"
    })
  }, "\u89C0\u770B\u5F71\u7247")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    style: {
      color: "var(--stone-200)"
    },
    items: [{
      value: "08+",
      unit: "雪季"
    }, {
      value: "240",
      unit: "場拍攝"
    }, {
      value: "12",
      unit: "座雪場"
    }]
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
// Marketing site — services / packages + philosophy band
function Services({
  onNav
}) {
  const {
    Card,
    Button,
    Badge
  } = window.HenryStudioRemix_704588;
  const packs = [{
    icon: "user",
    name: "個人跟拍",
    price: "NT$ 6,800",
    unit: "/ 半日",
    desc: "貼身跟拍你的滑行，捕捉最自然的姿態與表情。",
    feat: ["3–4 小時", "30+ 張精修", "當日精選預覽"],
    tone: "neutral"
  }, {
    icon: "users",
    name: "團體紀錄",
    price: "NT$ 12,000",
    unit: "/ 全日",
    desc: "為你的滑雪團隊留下完整一天的影像敘事。",
    feat: ["6–8 小時", "80+ 張精修", "3 分鐘短片"],
    tone: "brand",
    featured: true
  }, {
    icon: "plane",
    name: "空拍企劃",
    price: "客製報價",
    unit: "",
    desc: "結合空拍與地面機位，從天際到雪面的史詩感。",
    feat: ["空拍 + 跟拍", "4K 影片", "腳本企劃"],
    tone: "neutral"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-sunken)",
      padding: "88px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 640,
      margin: "0 auto 48px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow"
  }, "PACKAGES"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-3xl)",
      margin: "10px 0 14px"
    }
  }, "\u9078\u4E00\u6BB5\uFF0C\u8207\u4F60\u4E26\u80A9\u524D\u884C\u7684\u65B9\u5F0F"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-lg)"
    }
  }, "\u6BCF\u500B\u65B9\u6848\u90FD\u53EF\u4F9D\u96EA\u5834\u3001\u5929\u6578\u8207\u9700\u6C42\u5F48\u6027\u8ABF\u6574\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 22,
      maxWidth: 1080,
      margin: "0 auto"
    }
  }, packs.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    elevation: p.featured ? "lg" : "sm",
    padding: "28px",
    style: p.featured ? {
      border: "1.5px solid var(--moss-300)"
    } : {}
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: p.featured ? "var(--brand)" : "var(--brand-soft)",
      color: p.featured ? "var(--snow)" : "var(--brand-soft-text)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.icon
  })), p.featured && /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "\u6700\u53D7\u6B61\u8FCE")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-2xl)",
      marginTop: 8
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-2xl)",
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, p.price), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)"
    }
  }, p.unit)), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)",
      lineHeight: 1.7
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      margin: "6px 0 4px"
    }
  }, p.feat.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: "var(--text-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 16,
      height: 16,
      color: "var(--brand)"
    }
  }), f))), /*#__PURE__*/React.createElement(Button, {
    variant: p.featured ? "primary" : "secondary",
    fullWidth: true,
    onClick: () => onNav && onNav("book")
  }, "\u9078\u64C7\u65B9\u6848")))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteNav.jsx
try { (() => {
// Marketing site — top navigation
function SiteNav({
  onNav,
  active
}) {
  const {
    Button,
    IconButton
  } = window.HenryStudioRemix_704588;
  const links = [{
    id: "work",
    label: "作品集"
  }, {
    id: "services",
    label: "拍攝方案"
  }, {
    id: "about",
    label: "關於亨利"
  }, {
    id: "journal",
    label: "雪季手記"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 40px",
      background: "var(--surface-frost)",
      backdropFilter: "blur(var(--blur-frost))",
      WebkitBackdropFilter: "blur(var(--blur-frost))",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav("home");
    },
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup.svg",
    alt: "\u4EA8\u5229\u651D\u5F71\u5DE5\u4F5C\u5BA4",
    style: {
      height: 40
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    onClick: e => {
      e.preventDefault();
      onNav && onNav(l.id);
    },
    style: {
      padding: "8px 16px",
      borderRadius: "var(--radius-sm)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-medium)",
      color: active === l.id ? "var(--brand-soft-text)" : "var(--text-body)",
      background: active === l.id ? "var(--brand-soft)" : "transparent",
      transition: "var(--transition-base)"
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "instagram"
    }),
    label: "Instagram",
    variant: "ghost",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "calendar"
    })
  }, "\u9810\u7D04\u62CD\u651D")));
}
window.SiteNav = SiteNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteNav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.MetaRow = __ds_scope.MetaRow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

})();
