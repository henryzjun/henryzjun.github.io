/* @ds-bundle: {"format":3,"namespace":"HenryStudioRemix_704588","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"MetaRow","sourcePath":"components/data/MetaRow.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surface/Card.jsx"}],"sourceHashes":{"components/core/Button.jsx":"ea9afb2f84c1","components/core/IconButton.jsx":"a23f89dafea6","components/data/Avatar.jsx":"c42fa22f5f54","components/data/Badge.jsx":"ded9659e30a3","components/data/MetaRow.jsx":"c8221b101b9d","components/data/Tag.jsx":"3627e8635217","components/forms/Input.jsx":"e9c65563409e","components/forms/Select.jsx":"5359b1cdfa5f","components/navigation/Tabs.jsx":"c9f9fef1fca2","components/surface/Card.jsx":"d36d118b8511","ui_kits/booking/BookingSummary.jsx":"a121c95d850c","ui_kits/booking/Modals.jsx":"8addd990b555","ui_kits/booking/Stepper.jsx":"8d70e610e7de","ui_kits/booking/Steps.jsx":"479587ca82b1","ui_kits/gallery/GalleryGrid.jsx":"64925e5694e2","ui_kits/gallery/Lightbox.jsx":"7be098e1283f","ui_kits/gallery/data.jsx":"9f50d9c126f5","ui_kits/shared/EditableImage.jsx":"f3a7bafe3d91","ui_kits/shared/tweaks-panel.jsx":"6591467622ed","ui_kits/website/FeaturedWork.jsx":"df483a0950cf","ui_kits/website/Footer.jsx":"6d82f2ee1a92","ui_kits/website/Hero.jsx":"a589ed2082e7","ui_kits/website/Services.jsx":"c2bedecd9bbf","ui_kits/website/SiteNav.jsx":"373134ae8a2d","後台/admin.js":"cfe7b9bb3849","後台/slots.js":"1a63893f04b5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HenryStudioRemix_704588 = window.HenryStudioRemix_704588 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — 亨利攝影工作室 primary action control.
 * Soft 12px corners, gentle press micro-interaction, misty ice-blue brand fill.
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
      background: "var(--ice-200)",
      color: "var(--ice-800)",
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
      outline: ["transparent", "var(--ice-600)"]
    },
    accent: {
      soft: ["var(--accent-soft)", "var(--accent-soft-text)"],
      solid: ["var(--accent)", "var(--text-on-brand)"],
      outline: ["transparent", "var(--ice-600)"]
    },
    success: {
      soft: ["var(--success-soft)", "var(--ice-700)"],
      solid: ["var(--success)", "var(--snow)"],
      outline: ["transparent", "var(--ice-600)"]
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
      border: active ? "1.5px solid var(--ice-300)" : "1.5px solid var(--border-soft)",
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
    "攝影紀錄（照片）": 8500,
    "雪地跟拍（影片）": 11000
  };
  const price = priceMap[data.pkg] ?? 0;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      flex: "1 1 300px",
      maxWidth: 480,
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
  }, /*#__PURE__*/React.createElement(EditableImage, {
    id: "booking-cover",
    src: "../../assets/slots/booking-cover.jpg",
    alt: "",
    style: {
      position: "absolute",
      inset: 0
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
    label: "\u6642\u9593",
    value: data.time || "—"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "\u5730\u9EDE",
    value: data.loc || "—"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "\u4EBA\u6578",
    value: data.people ? `${data.people} 人` : "—"
  }), /*#__PURE__*/React.createElement(Row, {
    label: "\u4EE3\u8868\u4EBA",
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
  }, price ? `NT$ ${price.toLocaleString()}` : "—")), /*#__PURE__*/React.createElement(MetaRow, {
    items: [{
      value: "拍攝 1 小時"
    }, {
      value: "約 5 個工作天交付"
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

// ui_kits/booking/Modals.jsx
try { (() => {
// Booking — modals：服務說明 + 預約須知（同意後才能送出）
function BookingModal({
  open,
  onClose,
  title,
  children,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 90,
      background: "rgba(28,27,25,0.52)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "clamp(12px, 3vw, 32px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      width: "min(660px, 100%)",
      maxHeight: "86vh",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "18px 22px",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--text-lg)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\u95DC\u9589",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 34,
      height: 34,
      borderRadius: "var(--radius-sm)",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "5",
    x2: "19",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19",
    y1: "5",
    x2: "5",
    y2: "19"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: "auto",
      padding: "20px 22px",
      fontSize: "var(--text-sm)",
      lineHeight: 1.75,
      color: "var(--text-body)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 22px",
      borderTop: "1px solid var(--border-soft)",
      background: "var(--surface-sunken)"
    }
  }, footer)));
}
function MTitle({
  children
}) {
  return /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "18px 0 8px",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)"
    }
  }, children);
}
function MItem({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px"
    }
  }, children);
}

// ===== 服務說明（拍攝方案旁的小按鈕打開） =====
function ServiceInfoModal({
  open,
  onClose
}) {
  return /*#__PURE__*/React.createElement(BookingModal, {
    open: open,
    onClose: onClose,
    title: "\u57FA\u672C\u670D\u52D9\u8CC7\u8A0A"
  }, /*#__PURE__*/React.createElement(MTitle, null, "\u62CD\u651D\u6642\u9577"), /*#__PURE__*/React.createElement(MItem, null, "\u5BE6\u969B\u62CD\u651D\u6642\u9593\u70BA ", /*#__PURE__*/React.createElement("b", null, "1 \u5C0F\u6642"), "\uFF08\u5F9E\u6307\u5B9A\u9810\u7D04\u6642\u6BB5\u958B\u59CB\u8A08\u7B97\uFF0C\u4E0D\u542B\u599D\u9AEE\u3001\u4EA4\u901A\u7B49\u6E96\u5099\u6642\u9593\uFF09\u3002"), /*#__PURE__*/React.createElement(MTitle, null, "\u62CD\u651D\u5167\u5BB9"), /*#__PURE__*/React.createElement(MItem, null, "\uD83D\uDCF8 \u4EE5\u300C\u6D3B\u52D5\u7D00\u9304\u300D\u70BA\u6982\u5FF5\uFF0C\u5B8C\u6574\u6355\u6349\u7CBE\u5F69\u77AC\u9593\uFF0C\u4E0D\u8A2D\u7167\u7247\u5F35\u6578\u4E0A\u9650\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\uD83C\uDFAC \u651D\u5F71\u5E2B\u5C07\u7CBE\u9078\u6700\u4F73\u756B\u9762\uFF0C\u78BA\u4FDD\u60A8\u7372\u5F97\u8C50\u5BCC\u7684\u7559\u5FF5\u5F71\u50CF\u3002"), /*#__PURE__*/React.createElement(MTitle, null, "\u670D\u88DD\u53CA\u599D\u9AEE\u9020\u578B"), /*#__PURE__*/React.createElement(MItem, null, "\uD83D\uDC57 \u672C\u670D\u52D9\u4E0D\u542B\u599D\u9AEE\u3001\u670D\u88DD\u3001\u9053\u5177\u53CA\u88DD\u5099\u79DF\u501F\uFF0C\u8ACB\u81EA\u5099\u9069\u5408\u96EA\u5730\u7684\u670D\u88DD\u8207\u914D\u4EF6\uFF08\u624B\u5957\u3001\u570D\u5DFE\u7B49\uFF09\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\uD83D\uDCA1 \u82E5\u6709\u7279\u6B8A\u9700\u6C42\uFF08\u5982\u9020\u578B\u5EFA\u8B70\uFF09\uFF0C\u6B61\u8FCE\u63D0\u524D\u544A\u77E5\uFF01"), /*#__PURE__*/React.createElement(MTitle, null, "\u4EA4\u901A\u8207\u5834\u5730"), /*#__PURE__*/React.createElement(MItem, null, "\uD83D\uDEA0 \u4E8C\u4E16\u53E4\u96EA\u5834\u5167\uFF1A\u60A8\u53EA\u9700\u81EA\u5099\u8A72\u96EA\u5834\u7E9C\u8ECA\u7968\uFF0C\u7121\u9700\u8CA0\u64D4\u651D\u5F71\u5E2B\u8CBB\u7528\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\uD83C\uDFD4\uFE0F \u5176\u4ED6\u96EA\u5834\uFF0F\u9060\u7A0B\u5730\u9EDE\uFF1A\u9700\u53E6\u652F\u4ED8\u651D\u5F71\u5E2B\u7684\u7E9C\u8ECA\u7968\u6216\u4EA4\u901A\u8CBB\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\u23F1\uFE0F \u4E2D\u9014\u66F4\u6539\u5730\u9EDE\uFF1A\u82E5\u62CD\u651D\u958B\u59CB\u5F8C\u81E8\u6642\u66F4\u63DB\u8F03\u9060\u5834\u5730\uFF0C\u4EA4\u901A\u6642\u9593\u5C07\u8A08\u5165\u62CD\u651D\u7E3D\u6642\u9577\u5167\u3002"), /*#__PURE__*/React.createElement(MTitle, null, "\u6210\u7247\u4EA4\u4ED8"), /*#__PURE__*/React.createElement(MItem, null, "\u2705 \u96F2\u7AEF\u4E0B\u8F09\uFF1A\u62CD\u651D\u65E5\u5F8C\u7D04\u300C\u4E94\u500B\u5DE5\u4F5C\u5929\u300D\u5C07\u900F\u904E Google \u96F2\u7AEF\u63D0\u4F9B\u9AD8\u756B\u8CEA\u6210\u7247\uFF0C\u4E0B\u8F09\u9023\u7D50\u6709\u6548\u671F\u70BA 1 \u500B\u6708\uFF0C\u8ACB\u53CA\u6642\u4FDD\u5B58\uFF01"), /*#__PURE__*/React.createElement(MItem, null, "\u274C \u539F\u59CB RAW \u6A94\uFF1A\u7531\u65BC\u6A94\u6848\u904E\u5927\uFF0C\u6055\u4E0D\u63D0\u4F9B\u539F\u59CB RAW \u6A94\uFF0C\u50C5\u4EA4\u4ED8\u8ABF\u8272\u5F8C\u7684 JPG \u6A94\u6848\u3002"));
}

// ===== 預約須知（送出前必讀並同意） =====
function NoticeModal({
  open,
  onClose,
  onConfirm
}) {
  const {
    Button
  } = window.HenryStudioRemix_704588;
  const [agree, setAgree] = React.useState(null);
  React.useEffect(() => {
    if (open) setAgree(null);
  }, [open]);
  const opt = (val, label) => {
    const on = agree === val;
    return /*#__PURE__*/React.createElement("label", {
      key: val,
      onClick: () => setAgree(val),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 14px",
        cursor: "pointer",
        background: on ? "var(--brand-soft)" : "var(--surface-card)",
        border: `1.5px solid ${on ? "var(--brand)" : "var(--border-soft)"}`,
        borderRadius: "var(--radius-md)",
        fontSize: "var(--text-sm)",
        color: "var(--text-strong)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: "var(--radius-pill)",
        flexShrink: 0,
        border: `2px solid ${on ? "var(--brand)" : "var(--border-default)"}`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: "var(--radius-pill)",
        background: "var(--brand)"
      }
    })), label);
  };
  return /*#__PURE__*/React.createElement(BookingModal, {
    open: open,
    onClose: onClose,
    title: "\u9810\u7D04\u78BA\u8A8D\u53CA\u5F8C\u7E8C\u4ED8\u6B3E\u6D41\u7A0B \u2014 \u9810\u7D04\u9808\u77E5",
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-strong)",
        fontSize: "var(--text-sm)"
      }
    }, "\u6211\u5DF2\u8A73\u7D30\u95B1\u8B80\u4EE5\u4E0A\u6D41\u7A0B\u4ED8\u6B3E\u7B49\u6CE8\u610F\u4E8B\u9805 *"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 8
      }
    }, opt("yes", "是"), opt("no", "否，我需要再仔細閱讀")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        gap: 10,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "\u8FD4\u56DE\u4FEE\u6539"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      disabled: agree !== "yes",
      onClick: onConfirm,
      iconRight: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "send"
      })
    }, "\u540C\u610F\u4E26\u9001\u51FA\u9810\u7D04")))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 4px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, "JD \u5C08\u696D\u96EA\u5730\u651D\u5F71\u670D\u52D9 \u2014 \u9810\u7D04\u78BA\u8A8D\u53CA\u5F8C\u7E8C\u4ED8\u6B3E\u6D41\u7A0B"), /*#__PURE__*/React.createElement(MTitle, null, "\u3010\u9810\u7D04\u5167\u5BB9\u53CA\u9700\u6C42\u78BA\u8A8D\u3001\u4ED8\u6B3E\u3011"), /*#__PURE__*/React.createElement(MItem, null, "JD \u767D\u91D1\u79D8\u66F8\u6703\u5C07\u4EE5 Email \u65B9\u5F0F\u806F\u7E6B\u60A8\u3002", /*#__PURE__*/React.createElement("br", null), "\u27A1\uFE0F \u8ACB\u7559\u610F\u4FE1\u4EF6 \u2014 \u4FE1\u4EF6\u7F72\u540D\u70BA bookings@jdnisekosss.com\uFF08JD booking & CSD\uFF09\u3002", /*#__PURE__*/React.createElement("br", null), "\u26A0\uFE0F \u6709\u6642 Google \u4FE1\u7BB1\u6703\u64CB\u4FE1\uFF0C\u82E5\u60A8 48 \u5C0F\u6642\u5167\u672A\u6536\u5230\u56DE\u8986\uFF0C\u8ACB\u6AA2\u67E5\u4E00\u4E0B\u5783\u573E\u4FE1\u7BB1\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\u60A8\u6536\u5230 JD \u767D\u91D1\u79D8\u66F8\u7684\u9810\u7D04\u78BA\u8A8D\u4FE1\u5F8C\uFF0C\u8ACB\u78BA\u8A8D\u9810\u7D04\u5167\u5BB9\u662F\u5426\u6B63\u78BA\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\u9810\u7D04\u78BA\u8A8D\u4FE1\u4E2D\u5C07\u6703\u6709\u4ED8\u6B3E\u65B9\u5F0F\u53CA\u671F\u7A0B\uFF0C\u8ACB\u4F9D\u7167\u4FE1\u4E2D\u6307\u793A\u5B8C\u6210\u4ED8\u6B3E\u3002\u4ED8\u6B3E\u5F8C\u5373\u6B63\u5F0F\u5B8C\u6210\u9810\u7D04\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\u5B8C\u6210\u9810\u7D04\u5F8C\u60A8\u5C07\u6703\u5728\u884C\u524D\u7D04 14 \u65E5\u6536\u5230\u884C\u524D\u901A\u77E5\u3002"), /*#__PURE__*/React.createElement(MItem, null, "* \u8ACB\u4F9D\u7167\u4ED8\u6B3E\u671F\u9650\u5B8C\u6210 \uD83D\uDCB0\uFE0F \u5168\u984D\u4ED8\u6B3E\u3002\u76F8\u95DC\u9810\u7D04\u53CA\u53D6\u6D88\u689D\u6B3E\u5C07\u8A3B\u660E\u65BC\u4ED8\u6B3E\u901A\u77E5\u4FE1\u4E2D\u3002"), /*#__PURE__*/React.createElement(MTitle, null, "\u203C\uFE0F \u95DC\u65BC\u57FA\u672C\u53D6\u6D88\uFF08\u76F8\u540C\u689D\u6B3E\u4E5F\u5C07\u8A3B\u660E\u65BC\u4ED8\u6B3E\u901A\u77E5\u4FE1\u4E2D\uFF09"), /*#__PURE__*/React.createElement(MItem, null, "\u51AC\u5B63\u671F\u9593\u4E4B\u9810\u7D04\u5747\u7121\u6CD5\u66F4\u6539\u65E5\u671F\uFF0C\u66F4\u6539\u65E5\u671F\u7684\u9700\u6C42\u5C07\u88AB\u8996\u70BA\u53D6\u6D88\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\u6240\u9810\u5B9A\u65E5\u671F 31 \u65E5\uFF08\u542B\uFF09\u524D\u4E4B\u53D6\u6D88\uFF0C\u53D6\u6D88\u6599\u91D1\u70BA\u6240\u6536\u884C\u7A0B\u8CBB\u7528 5%\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\u6240\u9810\u8A02\u65E5\u671F 15 \u65E5\uFF08\u542B\uFF09\u524D\u81F3 30 \u65E5\u4E4B\u53D6\u6D88\uFF0C\u53D6\u6D88\u6599\u91D1\u70BA\u6240\u6536\u884C\u7A0B\u8CBB\u7528 20%\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\u6240\u9810\u8A02\u65E5\u671F 14 \u65E5\u524D\u81F3\u7576\u65E5\u4E4B\u53D6\u6D88\uFF0C\u53D6\u6D88\u6599\u91D1\u70BA\u6240\u6536\u884C\u7A0B\u8CBB\u7528 100%\u3002"), /*#__PURE__*/React.createElement(MTitle, null, "\u26A0\uFE0F \u96EA\u5730\u7279\u6B8A\u689D\u6B3E"), /*#__PURE__*/React.createElement(MItem, null, "\u2757\uFE0F \u6539\u671F\uFF0F\u9000\u8CBB\uFF1A\u82E5\u9047\u66B4\u98A8\u96EA\u3001\u6975\u5BD2\u7B49\u5371\u96AA\u5929\u6C23\uFF0C\u5C07\u65BC\u62CD\u651D\u524D 1 \u5C0F\u6642\u901A\u77E5\u6539\u671F\u6216\u9000\u8CBB\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\uD83E\uDDE3 \u4FDD\u6696\u6E96\u5099\uFF1A\u8ACB\u81EA\u5099\u9632\u5BD2\u8863\u7269\u3001\u6696\u5305\uFF0C\u82E5\u56E0\u8EAB\u9AD4\u4E0D\u9069\u6216\u5B89\u5168\u7591\u616E\uFF0C\u651D\u5F71\u5E2B\u6709\u6B0A\u4E2D\u6B62\u62CD\u651D\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\uD83C\uDFD4\uFE0F \u80FD\u529B\u8A55\u4F30\uFF1A\u82E5\u62CD\u651D\u5730\u9EDE\u8D85\u51FA\u60A8\u7684\u6ED1\u96EA\u80FD\u529B\u7BC4\u570D\uFF0C\u57FA\u65BC\u5B89\u5168\u8003\u91CF\uFF0C\u651D\u5F71\u5E2B\u6709\u6B0A\u4E2D\u6B62\u62CD\u651D\uFF0C\u4E26\u5E36\u9818\u60A8\u5B89\u5168\u96E2\u958B\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\uD83D\uDD0B \u8A2D\u5099\u9650\u5236\uFF1A\u4F4E\u6EAB\u53CA\u904B\u52D5\u74B0\u5883\u53EF\u80FD\u5C0E\u81F4\u76F8\u6A5F\u6545\u969C\uFF0C\u82E5\u56B4\u91CD\u5F71\u97FF\u62CD\u651D\uFF0C\u5C07\u63D0\u4F9B\u6539\u671F\u6216\u90E8\u5206\u9000\u6B3E\u3002"), /*#__PURE__*/React.createElement(MTitle, null, "\u3010\u5B8C\u6210\u9810\u7D04\u5F8C\u81F3\u884C\u7A0B\u7576\u65E5\u524D\u4E4B\u806F\u7D61\u3011"), /*#__PURE__*/React.createElement(MItem, null, "\u8ACB\u4EE5 \uD83D\uDCDE \u5B98\u65B9 LINE\uFF0C\u6216\u53EF\u52A0\u5165 WhatsApp\uFF1A+81 70 4210 7275\u3001WeChat ID\uFF1AJDnisekosss \u7B49 JD \u5B98\u65B9\u5BA2\u670D\u5E33\u865F\uFF0C\u6216\u7D93\u7531 bookings@jdnisekosss.com \u76F4\u63A5\u9023\u7D61\uFF0C\u6211\u5011\u5C07\u6709\u5C08\u4EBA\u5BA2\u670D\u70BA\u60A8\u670D\u52D9\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\u5982\u6709\u8207\u651D\u5F71\u5E2B\u671F\u524D\u806F\u7E6B\u7684\u9700\u6C42\uFF0C\u6211\u5011\u5C07\u70BA\u60A8\u5EFA\u7ACB\u8207\u651D\u5F71\u5E2B\u9593\u7684\u5C08\u5C6C\u7FA4\u7D44\uFF0C\u65B9\u4FBF\u6E9D\u901A\u3002"), /*#__PURE__*/React.createElement(MTitle, null, "\u3010\u884C\u7A0B\u7576\u65E5\u3011"), /*#__PURE__*/React.createElement(MItem, null, "\u8ACB\u65BC\u884C\u524D\u901A\u77E5\u4E2D\u6307\u5B9A\u5730\u9EDE\u8207\u651D\u5F71\u5E2B\u6703\u9762\u5373\u53EF\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\u5982\u6709\u627E\u4E0D\u5230\u651D\u5F71\u5E2B\u7684\u60C5\u6CC1\uFF0C\u53EF\u96A8\u6642\u806F\u7E6B\u5B98\u65B9 LINE \u7FA4\uFF0C\u5C07\u6709\u5C08\u4EBA\u5BA2\u670D\u70BA\u60A8\u670D\u52D9\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\u5982\u679C\u70BA JD \u8AB2\u7A0B\u4E2D\u4E4B\u651D\u5F71\u670D\u52D9\uFF0C\u651D\u5F71\u5E2B\u5C07\u6703\u5728\u6307\u5B9A\u6642\u9593\u4E3B\u52D5\u8207\u60A8\u6703\u5408\u3002"));
}
Object.assign(window, {
  BookingModal,
  ServiceInfoModal,
  NoticeModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/Modals.jsx", error: String((e && e.message) || e) }); }

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
        border: active ? "1.5px solid var(--ice-300)" : "1.5px solid transparent",
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
        background: done ? "var(--ice-300)" : "var(--border-soft)"
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
    Button
  } = window.HenryStudioRemix_704588;
  const [infoOpen, setInfoOpen] = React.useState(false);
  const packs = [{
    id: "攝影紀錄（照片）",
    icon: "camera",
    name: "攝影紀錄",
    meta: "照片 · 1 小時 · 張數不設上限",
    price: "NT$ 8,500"
  }, {
    id: "雪地跟拍（影片）",
    icon: "video",
    name: "雪地跟拍",
    meta: "影片 · 1 小時 · 精選剪輯",
    price: "NT$ 11,000"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)",
      margin: 0
    }
  }, "\u9078\u64C7\u62CD\u651D\u65B9\u6848"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "info"
    }),
    onClick: () => setInfoOpen(true)
  }, "\u670D\u52D9\u8AAA\u660E")), /*#__PURE__*/React.createElement("div", {
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
        border: `1.5px solid ${on ? "var(--ice-400)" : "var(--border-soft)"}`,
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
  })), /*#__PURE__*/React.createElement("p", {
    className: "ds-meta",
    style: {
      margin: 0
    }
  }, "\u5BE6\u969B\u62CD\u651D 1 \u5C0F\u6642\uFF1B\u6210\u7247\u7D04\u4E94\u500B\u5DE5\u4F5C\u5929\u5F8C\u96F2\u7AEF\u4EA4\u4ED8\u3002\u8A73\u898B\u300C\u670D\u52D9\u8AAA\u660E\u300D\u3002"), /*#__PURE__*/React.createElement(ServiceInfoModal, {
    open: infoOpen,
    onClose: () => setInfoOpen(false)
  }));
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
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u65E5\u671F *",
    type: "date",
    value: data.date,
    onChange: e => set({
      date: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u6642\u9593 *",
    type: "time",
    value: data.time,
    onChange: e => set({
      time: e.target.value
    }),
    hint: "\u8ACB\u586B\u5165\u5E0C\u671B\u958B\u59CB\u7684\u6642\u9593"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u6703\u9762\u5730\u9EDE *",
    value: data.loc,
    onChange: e => set({
      loc: e.target.value
    }),
    options: ["二世古 NISEKO", "留壽都 RUSUTSU", "喜樂樂 KIRORO", "其他（請於特殊需求說明）"],
    hint: "\u539F\u5247\u9650\u65BC\u4E8C\u4E16\u53E4\u3001\u7559\u58FD\u90FD\u3001\u559C\u6A02\u6A02\u6ED1\u96EA\u5834"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u5718\u9AD4\u7E3D\u4EBA\u6578 *",
    value: data.people,
    onChange: e => set({
      people: e.target.value
    }),
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  })), /*#__PURE__*/React.createElement(Input, {
    label: "\u60A8\u5E0C\u671B\u7684\u651D\u5F71\u98A8\u683C\uFF08\u6216\u5E0C\u671B\u8207\u651D\u5F71\u5E2B\u6E9D\u901A\u7684\u5167\u5BB9\uFF09",
    placeholder: "\u4F8B\u5982\uFF1A\u81EA\u7136\u6293\u62CD\u70BA\u4E3B\u3001\u5E0C\u671B\u591A\u62CD\u6ED1\u884C\u52D5\u614B\u2026",
    value: data.style,
    onChange: e => set({
      style: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u60A8\u662F\u5426\u6709\u5176\u4ED6\u7279\u6B8A\u9700\u6C42\uFF08\u82E5\u6709\u7279\u6B8A\u96EA\u5834\u9700\u6C42\uFF09",
    placeholder: "\u4F8B\u5982\uFF1A\u5E0C\u671B\u65BC\u5176\u4ED6\u96EA\u5834\u62CD\u651D\u2026",
    value: data.special,
    onChange: e => set({
      special: e.target.value
    })
  }));
}
function StepContact({
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
  }, "\u806F\u7D61\u65B9\u5F0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u8A02\u8CFC\u4EE3\u8868\u4EBA\u59D3\u540D *",
    placeholder: "\u738B\u5C0F\u660E WANG, HSIAO-MING",
    value: data.name,
    onChange: e => set({
      name: e.target.value
    }),
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "user"
    }),
    hint: "\u8ACB\u586B\u8B77\u7167\u771F\u5BE6\u4E2D\u3001\u82F1\u6587\u59D3\u540D",
    containerStyle: {
      gridColumn: "1 / -1"
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u8A02\u8CFC\u4EE3\u8868\u4EBA\u96FB\u5B50\u90F5\u4EF6 *",
    type: "email",
    placeholder: "you@example.com",
    value: data.email,
    onChange: e => set({
      email: e.target.value
    }),
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "mail"
    }),
    hint: "\u9810\u7D04\u78BA\u8A8D\u4FE1\u8207\u4ED8\u6B3E\u8CC7\u8A0A\u5C07\u5BC4\u9001\u81F3\u6B64\u4FE1\u7BB1"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u8A02\u8CFC\u4EE3\u8868\u4EBA\u6027\u5225 *",
    value: data.gender,
    onChange: e => set({
      gender: e.target.value
    }),
    options: ["請選擇", "男", "女", "其他"]
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
      maxWidth: 480,
      margin: "12px auto 0",
      lineHeight: 1.7
    }
  }, "\u611F\u8B1D ", data.name || "你", " \u7684\u9810\u7D04\u3002JD \u767D\u91D1\u79D8\u66F8\u5C07\u4EE5 Email \u8207\u60A8\u806F\u7E6B\uFF0C\u78BA\u8A8D\u9810\u7D04\u5167\u5BB9\u8207\u4ED8\u6B3E\u65B9\u5F0F \uFF08\u4FE1\u4EF6\u7F72\u540D bookings@jdnisekosss.com\uFF1B\u82E5 48 \u5C0F\u6642\u5167\u672A\u6536\u5230\u56DE\u8986\uFF0C\u8ACB\u6AA2\u67E5\u5783\u573E\u4FE1\u7BB1\uFF09\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    items: [{
      label: "預約編號",
      value: "HP-2606-0148"
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
    onClick: () => window.location.href = window.HENRY_LINKS.gallery
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
      columnWidth: 300,
      columnGap: 18,
      padding: "0 clamp(20px, 4vw, 40px) 80px"
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
  }, /*#__PURE__*/React.createElement(EditableImage, {
    id: `photo-${it.img}`,
    src: `../../assets/slots/photo-${it.img}.jpg`,
    alt: it.title,
    imgStyle: {
      aspectRatio: it.span === 2 ? "4 / 5" : "4 / 3",
      height: "auto"
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
      padding: 16,
      pointerEvents: "none"
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
    className: "lb-root",
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
    className: "lb-stage",
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
    src: window.henryImg(`photo-${item.img}`, `../../assets/slots/photo-${item.img}.jpg`),
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
    className: "lb-aside",
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
  title: "纜車時刻",
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
  title: "企鵝",
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
  title: "纜車風景",
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
  title: "山頂風景",
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

// ui_kits/shared/EditableImage.jsx
try { (() => {
// Shared — EditableImage：全站圖片槽
// 前台（上架網頁／一般預覽）：只顯示已發佈的圖片檔（assets/slots/），完全不顯示任何編輯按鈕。
// 後台模式（網址帶 ?admin=1，或被後台以 data-admin iframe 嵌入）：顯示「更換圖片／還原」。
// 後台更換的圖片先暫存在瀏覽器 localStorage（狀態＝待發佈）；
// 在對話中跟 Claude 說「發佈圖片」，才會真正寫進 assets/slots/ 並重新打包上架網頁。
(function () {
  var admin = false;
  try {
    if (/[?&]admin=1/.test(window.location.search)) admin = true;else if (window.frameElement && window.frameElement.hasAttribute("data-admin")) admin = true;
  } catch (e) {}
  window.HENRY_ADMIN = admin;
  if (!admin) return; // 前台不需要編輯樣式
  if (document.getElementById("ei-styles")) return;
  var st = document.createElement("style");
  st.id = "ei-styles";
  st.textContent = `
    .ei-wrap { position: relative; overflow: hidden; }
    .ei-controls { position: absolute; top: 10px; right: 10px; z-index: 6; display: flex; gap: 6px;
      opacity: 0; transition: opacity 160ms ease; }
    .ei-wrap:hover .ei-controls, .ei-wrap:focus-within .ei-controls,
    figure:hover .ei-controls, .hs-card:hover .ei-controls { opacity: 1; }
    @media (hover: none) { .ei-controls { opacity: 1; } }
    .ei-btn { display: inline-flex; align-items: center; gap: 6px; height: 30px; padding: 0 11px;
      border-radius: 999px; border: 1px solid rgba(251,251,250,0.35);
      background: rgba(28,27,25,0.55); color: #fbfbfa; font-size: 12px; line-height: 1;
      font-family: var(--font-sans, sans-serif); font-weight: 500; cursor: pointer;
      backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
      transition: background 160ms ease; white-space: nowrap; }
    .ei-btn:hover { background: rgba(28,27,25,0.78); }
    .ei-btn svg { width: 13px; height: 13px; flex-shrink: 0; }
  `;
  document.head.appendChild(st);
})();

// 讀取某個圖片槽目前的圖 — 給 Lightbox 等唯讀場景用。
// 前台一律回傳已發佈的檔案；後台模式才會優先回傳 localStorage 裡的待發佈版本。
window.henryImg = function (id, fallback) {
  var fb = window.A ? window.A(fallback) : fallback;
  if (!window.HENRY_ADMIN) return fb;
  try {
    return localStorage.getItem("henry-img-" + id) || fb;
  } catch (e) {
    return fb;
  }
};
function EditableImage({
  id,
  src,
  alt = "",
  style = {},
  imgStyle = {},
  maxEdge = 1600,
  label = "更換圖片"
}) {
  const admin = !!window.HENRY_ADMIN;
  const key = "henry-img-" + id;
  const [custom, setCustom] = React.useState(() => {
    if (!admin) return null;
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  });
  const inputRef = React.useRef(null);

  // 後台：跨頁同步（在媒體管理頁更換圖片時，預覽 iframe 立即更新）
  React.useEffect(() => {
    if (!admin) return;
    const onStorage = e => {
      if (e.key === key) setCustom(e.newValue);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [key, admin]);
  const onFile = e => {
    const f = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!f) return;
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxEdge / Math.max(img.width, img.height));
      const w = Math.max(1, Math.round(img.width * scale));
      const h = Math.max(1, Math.round(img.height * scale));
      const c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      c.getContext("2d").drawImage(img, 0, 0, w, h);
      let q = 0.85;
      let out = c.toDataURL("image/jpeg", q);
      while (out.length > 700 * 1024 && q > 0.55) {
        q -= 0.08;
        out = c.toDataURL("image/jpeg", q);
      }
      URL.revokeObjectURL(url);
      try {
        localStorage.setItem(key, out);
        setCustom(out);
      } catch (err) {
        alert("瀏覽器儲存空間不足：請先「還原」其他圖片，或改用較小的照片。");
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      alert("無法讀取此圖片，請改用 JPG 或 PNG 檔。");
    };
    img.src = url;
  };
  const reset = e => {
    e.stopPropagation();
    try {
      localStorage.removeItem(key);
    } catch (err) {}
    setCustom(null);
  };
  const resolved = admin && custom || (window.A ? window.A(src) : src);
  return /*#__PURE__*/React.createElement("div", {
    className: "ei-wrap",
    style: style
  }, /*#__PURE__*/React.createElement("img", {
    src: resolved,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      ...imgStyle
    }
  }), admin && /*#__PURE__*/React.createElement("div", {
    className: "ei-controls",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ei-btn",
    "aria-label": label,
    onClick: e => {
      e.stopPropagation();
      inputRef.current && inputRef.current.click();
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "17 8 12 3 7 8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "15"
  })), label), custom && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ei-btn",
    onClick: reset,
    "aria-label": "\u9084\u539F\u5DF2\u767C\u4F48\u7248\u672C"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 1 0 3-6.7L3 8"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "3 3 3 8 8 8"
  })), "\u9084\u539F")), admin && /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "file",
    accept: "image/*",
    style: {
      display: "none"
    },
    onChange: onFile,
    onClick: e => e.stopPropagation()
  }));
}
window.EditableImage = EditableImage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shared/EditableImage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shared/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shared/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FeaturedWork.jsx
try { (() => {
// Marketing site — featured work grid (每張作品圖都可直接上傳更換)
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
    title: "藏王・纜車時刻",
    loc: "ZAO",
    tag: "powder",
    kind: "粉雪",
    badge: null
  }, {
    img: "summit-blue",
    title: "立山・企鵝",
    loc: "TATEYAMA",
    tag: "portrait",
    kind: "人像",
    badge: "新作"
  }, {
    img: "forest-valley",
    title: "野澤・纜車風景",
    loc: "NOZAWA",
    tag: "aerial",
    kind: "空拍",
    badge: null
  }, {
    img: "hero-ridge",
    title: "富良野・山頂風景",
    loc: "FURANO",
    tag: "portrait",
    kind: "人像",
    badge: null
  }];
  const shown = cat === "all" ? items : items.filter(i => i.tag === cat);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)"
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
      fontSize: "clamp(26px, 4vw, var(--text-3xl))",
      marginTop: 10
    }
  }, "\u96EA\u5730\u7684\u6545\u4E8B\uFF0C\u9010\u683C\u6536\u85CF")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "100%",
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
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
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
      gap: 22
    }
  }, shown.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    coverHeight: 230,
    interactive: true,
    onClick: () => onNav && onNav("work"),
    cover: /*#__PURE__*/React.createElement(EditableImage, {
      id: `photo-${it.img}`,
      src: `../../assets/slots/photo-${it.img}.jpg`,
      alt: it.title,
      style: {
        width: "100%",
        height: "100%"
      }
    })
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
      padding: "clamp(64px, 10vw, 104px) clamp(20px, 5vw, 40px)",
      overflow: "hidden",
      background: "var(--surface-inverse)"
    }
  }, /*#__PURE__*/React.createElement(EditableImage, {
    id: "philosophy-band",
    src: "../../assets/slots/philosophy-band.jpg",
    alt: "",
    maxEdge: 1920,
    style: {
      position: "absolute",
      inset: 0
    },
    imgStyle: {
      opacity: 0.32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 820,
      margin: "0 auto",
      textAlign: "center",
      pointerEvents: "none"
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
      fontSize: "clamp(22px, 3.6vw, var(--text-3xl))",
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
      background: "var(--ice-800)",
      color: "var(--stone-200)",
      padding: "clamp(44px, 8vw, 64px) clamp(20px, 5vw, 40px) 36px"
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
    src: window.A ? window.A("../../assets/logo-lockup-inverse.svg") : "../../assets/logo-lockup-inverse.svg",
    alt: "\u4EA8\u5229\u651D\u5F71\u5DE5\u4F5C\u5BA4",
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: "var(--text-sm)",
      lineHeight: 1.7,
      color: "var(--ice-200)"
    }
  }, "\u6ED1\u96EA\u5F71\u50CF\u81EA\u7531\u5DE5\u4F5C\u8005\u3002\u8207\u4F60\u4E26\u80A9\u5728\u98A8\u96EA\u4E2D\u524D\u884C\u7684\u5925\u4F34\u3002")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
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
      borderTop: "1px solid var(--ice-700)",
      paddingTop: 24,
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      maxWidth: 1080,
      margin: "44px auto 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--ice-300)"
    }
  }, "\xA9 2026 \u4EA8\u5229\u651D\u5F71\u5DE5\u4F5C\u5BA4 HENRYPHOTO STUDIO"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--ice-300)"
    }
  }, "Hokkaido \xB7 Niseko \xB7 Taiwan")));
}
window.PhilosophyBand = PhilosophyBand;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Marketing site — hero (cover 圖可直接上傳更換)
function HeroVideoModal({
  open,
  onClose
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 95,
      background: "rgba(28,27,25,0.88)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "clamp(12px, 4vw, 48px)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\u95DC\u9589\u5F71\u7247",
    style: {
      position: "absolute",
      top: 18,
      right: 18,
      width: 44,
      height: 44,
      borderRadius: "var(--radius-pill)",
      border: "1px solid rgba(251,251,250,0.35)",
      background: "rgba(28,27,25,0.55)",
      color: "#fbfbfa",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "5",
    x2: "19",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19",
    y1: "5",
    x2: "5",
    y2: "19"
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      height: "min(82vh, 780px)",
      aspectRatio: "9 / 16",
      maxWidth: "100%",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      background: "#000"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "https://www.youtube-nocookie.com/embed/FQdwLqhzvdg?autoplay=1&rel=0",
    title: "\u4EA8\u5229\u651D\u5F71\u5DE5\u4F5C\u5BA4 \u2014 \u5F71\u7247",
    style: {
      width: "100%",
      height: "100%",
      border: 0,
      display: "block"
    },
    allow: "autoplay; encrypted-media; picture-in-picture; fullscreen",
    allowFullScreen: true
  })));
}
function Hero({
  onNav
}) {
  const {
    Button,
    MetaRow
  } = window.HenryStudioRemix_704588;
  const [videoOpen, setVideoOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "var(--hero-h, min(620px, 88svh))",
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(EditableImage, {
    id: "cover-hero",
    src: "../../assets/slots/cover-hero.jpg",
    alt: "",
    maxEdge: 1920,
    label: "\u66F4\u63DB Cover",
    style: {
      position: "absolute",
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "linear-gradient(180deg, rgba(28,27,25,0.12) 0%, rgba(28,27,25,0.05) 40%, rgba(28,27,25,0.62) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "96px clamp(20px, 5vw, 40px) clamp(36px, 7vw, 56px)",
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow",
    style: {
      color: "var(--ice-200)"
    }
  }, "FREELANCE SKI IMAGERY \xB7 \u5317\u6D77\u9053 / \u4E8C\u4E16\u8C37"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "var(--snow)",
      fontSize: "clamp(38px, 7vw, var(--text-6xl))",
      lineHeight: 1.06,
      margin: "16px 0 20px",
      letterSpacing: "var(--tracking-tight)",
      maxWidth: 760,
      textShadow: "0 2px 30px rgba(28,27,25,0.35)",
      textWrap: "balance"
    }
  }, "\u6BCF\u4E00\u5E40\u5F71\u50CF\uFF0C", /*#__PURE__*/React.createElement("br", null), "\u90FD\u8A18\u9304\u8457\u7F8E\u597D\u7684\u56DE\u61B6"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--stone-100)",
      fontSize: "clamp(16px, 2.4vw, var(--text-xl))",
      maxWidth: 540,
      lineHeight: 1.6,
      fontWeight: 400
    }
  }, "\u5FEB\u9580\u80CC\u5F8C\u7684\u773C\u775B\uFF0C\u8207\u4F60\u4E26\u80A9\u5728\u98A8\u96EA\u4E2D\u524D\u884C\u3002\u8A18\u9304\u6311\u6230\u7684\u6C57\u6C34\uFF0C\u4E5F\u5B9A\u683C\u767B\u9802\u7684\u7B11\u5BB9\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 32,
      alignItems: "center",
      flexWrap: "wrap"
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
    }),
    onClick: () => setVideoOpen(true)
  }, "\u89C0\u770B\u5F71\u7247"))), /*#__PURE__*/React.createElement(HeroVideoModal, {
    open: videoOpen,
    onClose: () => setVideoOpen(false)
  }));
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
      padding: "clamp(56px, 9vw, 88px) clamp(20px, 4vw, 40px)"
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
      fontSize: "clamp(26px, 4vw, var(--text-3xl))",
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
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
      gap: 22,
      maxWidth: 1080,
      margin: "0 auto"
    }
  }, packs.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    elevation: p.featured ? "lg" : "sm",
    padding: "28px",
    style: p.featured ? {
      border: "1.5px solid var(--ice-300)"
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
// Marketing site — top navigation (responsive: desktop links / mobile burger sheet)
function SiteNav({
  onNav,
  active
}) {
  const {
    Button,
    IconButton
  } = window.HenryStudioRemix_704588;
  const [open, setOpen] = React.useState(false);
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
  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    onNav && onNav(id);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "site-nav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "site-nav__logo",
    href: "#",
    onClick: e => go(e, "home")
  }, /*#__PURE__*/React.createElement("img", {
    src: window.A ? window.A("../../assets/logo-lockup.svg") : "../../assets/logo-lockup.svg",
    alt: "\u4EA8\u5229\u651D\u5F71\u5DE5\u4F5C\u5BA4"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "site-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    onClick: e => go(e, l.id),
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
    className: "site-nav__actions"
  }, /*#__PURE__*/React.createElement("span", {
    className: "site-nav__ig"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.5",
      cy: "6.5",
      r: "0.5",
      fill: "currentColor"
    })),
    label: "Instagram",
    variant: "ghost",
    size: "sm",
    onClick: () => window.open("https://www.instagram.com/henryzjun/", "_blank", "noopener")
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "calendar"
    }),
    onClick: e => go(e, "book")
  }, "\u9810\u7D04\u62CD\u651D"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "site-nav__burger",
    "aria-label": open ? "關閉選單" : "開啟選單",
    onClick: () => setOpen(o => !o)
  }, open ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "5",
    x2: "19",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19",
    y1: "5",
    x2: "5",
    y2: "19"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "7",
    x2: "20",
    y2: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "12",
    x2: "20",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "17",
    x2: "20",
    y2: "17"
  })))), open && /*#__PURE__*/React.createElement("nav", {
    className: "site-nav__sheet"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    className: active === l.id ? "is-active" : "",
    onClick: e => go(e, l.id)
  }, l.label))));
}
window.SiteNav = SiteNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteNav.jsx", error: String((e && e.message) || e) }); }

// 後台/admin.js
try { (() => {
// 後台 — 媒體管理頁邏輯（僅後台使用，不會打包進上架網頁）
(function () {
  var grid = document.getElementById("grid");
  var fileInput = document.getElementById("file");
  var banner = document.getElementById("pendingBanner");
  var slotCount = document.getElementById("slotCount");
  var currentSlot = null;
  function publishedSrc(id) {
    return "../assets/slots/" + id + ".jpg";
  }
  function pendingCount() {
    var n = 0;
    window.HENRY_SLOTS.forEach(function (s) {
      if (window.henryPending(s.id)) n++;
    });
    return n;
  }
  function renderBanner() {
    var n = pendingCount();
    if (n === 0) {
      banner.innerHTML = "目前沒有待發佈的變更 — 訪客看到的就是下方「已發佈」的圖片。";
    } else {
      banner.innerHTML = "<strong>有 " + n + " 張圖片待發佈。</strong> 確認預覽沒問題後，在對話中跟 Claude 說「<strong>發佈圖片</strong>」，即會寫入網站檔案並重新打包上架網頁。";
    }
  }
  function render() {
    slotCount.textContent = window.HENRY_SLOTS.length + " 張";
    grid.innerHTML = "";
    window.HENRY_SLOTS.forEach(function (s) {
      var pending = window.henryPending(s.id);
      var card = document.createElement("div");
      card.className = "ad-card";
      card.innerHTML = '<div class="ad-thumb">' + '<img alt="">' + '<span class="ad-badge ' + (pending ? "pend" : "pub") + '">' + (pending ? "待發佈" : "已發佈") + "</span>" + "</div>" + '<div class="ad-body">' + "<h3></h3>" + '<span class="ad-loc"></span>' + '<div class="ad-actions">' + '<button class="ad-btn primary" data-act="swap">更換圖片</button>' + (pending ? '<button class="ad-btn" data-act="reset">還原</button>' : "") + "</div>" + "</div>";
      card.querySelector("img").src = pending || publishedSrc(s.id);
      card.querySelector("h3").textContent = s.name;
      card.querySelector(".ad-loc").textContent = "使用於：" + s.usedIn;
      card.querySelector('[data-act="swap"]').addEventListener("click", function () {
        currentSlot = s;
        fileInput.click();
      });
      var resetBtn = card.querySelector('[data-act="reset"]');
      if (resetBtn) resetBtn.addEventListener("click", function () {
        try {
          localStorage.removeItem(window.henrySlotKey(s.id));
        } catch (e) {}
        refresh();
      });
      grid.appendChild(card);
    });
    renderBanner();
  }
  fileInput.addEventListener("change", function (e) {
    var f = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!f || !currentSlot) return;
    window.henryStoreFile(f, currentSlot, function () {
      refresh();
    }, function (msg) {
      alert(msg);
    });
  });

  // ===== 即時預覽 =====
  var stage = document.getElementById("stage");
  var PAGES = {
    website: "../ui_kits/website/index.html?admin=1",
    gallery: "../ui_kits/gallery/index.html?admin=1",
    booking: "../ui_kits/booking/index.html?admin=1"
  };
  var page = "website",
    dev = "desktop";
  function renderStage() {
    stage.innerHTML = "";
    if (dev === "desktop") {
      var box = document.createElement("div");
      box.className = "ad-frame-desktop";
      var ifr = document.createElement("iframe");
      ifr.setAttribute("data-admin", "");
      ifr.src = PAGES[page];
      box.appendChild(ifr);
      stage.appendChild(box);
      var fit = function () {
        var sc = box.clientWidth / 1280;
        ifr.style.transform = "scale(" + sc + ")";
        ifr.style.height = Math.round(box.clientHeight / sc) + "px";
      };
      requestAnimationFrame(fit);
      window.addEventListener("resize", fit);
    } else {
      var ph = document.createElement("div");
      ph.className = "ad-frame-phone";
      var ifr2 = document.createElement("iframe");
      ifr2.setAttribute("data-admin", "");
      ifr2.src = PAGES[page];
      ph.appendChild(ifr2);
      stage.appendChild(ph);
    }
  }
  document.querySelectorAll(".ad-tab[data-page]").forEach(function (b) {
    b.addEventListener("click", function () {
      page = b.getAttribute("data-page");
      document.querySelectorAll(".ad-tab[data-page]").forEach(function (x) {
        x.classList.toggle("on", x === b);
      });
      renderStage();
    });
  });
  document.querySelectorAll(".ad-tab[data-dev]").forEach(function (b) {
    b.addEventListener("click", function () {
      dev = b.getAttribute("data-dev");
      document.querySelectorAll(".ad-tab[data-dev]").forEach(function (x) {
        x.classList.toggle("on", x === b);
      });
      renderStage();
    });
  });
  function refresh() {
    render();
  }

  // 在預覽 iframe 內按「更換圖片」時，同步更新卡片狀態
  window.addEventListener("storage", function (e) {
    if (e.key && e.key.indexOf("henry-img-") === 0) render();
  });
  render();
  renderStage();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "後台/admin.js", error: String((e && e.message) || e) }); }

// 後台/slots.js
try { (() => {
// 後台共用 — 圖片槽清單與上傳壓縮工具（僅後台使用，不會打包進上架網頁）
window.HENRY_SLOTS = [{
  id: "cover-hero",
  name: "首頁 Cover 主視覺",
  usedIn: "官網",
  maxEdge: 1920
}, {
  id: "philosophy-band",
  name: "理念區背景",
  usedIn: "官網",
  maxEdge: 1920
}, {
  id: "booking-cover",
  name: "預約摘要卡片圖",
  usedIn: "預約",
  maxEdge: 1600
}, {
  id: "photo-peak-mist",
  name: "作品 — 霧中稜線／霧散之後",
  usedIn: "作品集＋官網精選",
  maxEdge: 1600
}, {
  id: "photo-slope-dawn",
  name: "作品 — 晨光斜坡／破曉切線",
  usedIn: "作品集＋官網精選",
  maxEdge: 1600
}, {
  id: "photo-powder-run",
  name: "作品 — 纜車時刻",
  usedIn: "作品集＋官網精選",
  maxEdge: 1600
}, {
  id: "photo-summit-blue",
  name: "作品 — 企鵝",
  usedIn: "作品集＋官網精選",
  maxEdge: 1600
}, {
  id: "photo-forest-valley",
  name: "作品 — 纜車風景",
  usedIn: "作品集＋官網精選",
  maxEdge: 1600
}, {
  id: "photo-hero-ridge",
  name: "作品 — 山頂風景",
  usedIn: "作品集＋官網精選",
  maxEdge: 1600
}];
window.henrySlotKey = function (id) {
  return "henry-img-" + id;
};
window.henryPending = function (id) {
  try {
    return localStorage.getItem(window.henrySlotKey(id));
  } catch (e) {
    return null;
  }
};

// 讀檔 → 等比縮小 → 壓成 JPEG dataURL → 存入 localStorage（待發佈）
window.henryStoreFile = function (file, slot, onDone, onError) {
  var url = URL.createObjectURL(file);
  var img = new Image();
  img.onload = function () {
    var scale = Math.min(1, slot.maxEdge / Math.max(img.width, img.height));
    var w = Math.max(1, Math.round(img.width * scale));
    var h = Math.max(1, Math.round(img.height * scale));
    var c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    c.getContext("2d").drawImage(img, 0, 0, w, h);
    var q = 0.85,
      out = c.toDataURL("image/jpeg", q);
    while (out.length > 700 * 1024 && q > 0.55) {
      q -= 0.08;
      out = c.toDataURL("image/jpeg", q);
    }
    URL.revokeObjectURL(url);
    try {
      localStorage.setItem(window.henrySlotKey(slot.id), out);
      onDone(out);
    } catch (e) {
      onError("瀏覽器儲存空間不足：請先還原其他圖片，或改用較小的照片。");
    }
  };
  img.onerror = function () {
    URL.revokeObjectURL(url);
    onError("無法讀取此圖片，請改用 JPG 或 PNG 檔。");
  };
  img.src = url;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "後台/slots.js", error: String((e && e.message) || e) }); }

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
