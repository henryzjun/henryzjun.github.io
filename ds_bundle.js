/* @ds-bundle: {"format":3,"namespace":"HenryStudioRemix_704588","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"MetaRow","sourcePath":"components/data/MetaRow.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surface/Card.jsx"}],"sourceHashes":{"Github下載/ds_bundle.js":"0f5287e591d4","components/core/Button.jsx":"763beae2eaa0","components/core/IconButton.jsx":"a23f89dafea6","components/data/Avatar.jsx":"c42fa22f5f54","components/data/Badge.jsx":"ded9659e30a3","components/data/MetaRow.jsx":"c8221b101b9d","components/data/Tag.jsx":"d8f4867d5a19","components/forms/Input.jsx":"e9c65563409e","components/forms/Select.jsx":"09b089727107","components/navigation/Tabs.jsx":"c9f9fef1fca2","components/surface/Card.jsx":"d36d118b8511","ui_kits/booking/BookingSummary.jsx":"68ea461240e7","ui_kits/booking/Modals.jsx":"73fe8f165ca4","ui_kits/booking/Stepper.jsx":"b4f90a2b555d","ui_kits/booking/Steps.jsx":"0bbf205fa21d","ui_kits/gallery/GalleryGrid.jsx":"b274c5822a21","ui_kits/gallery/Lightbox.jsx":"e109d8ec71b2","ui_kits/gallery/data.jsx":"798a1396341e","ui_kits/shared/EditableImage.jsx":"f3a7bafe3d91","ui_kits/shared/Icon.jsx":"7ad1bb664a7d","ui_kits/shared/tweaks-panel.jsx":"6591467622ed","ui_kits/website/FeaturedWork.jsx":"6a92bb869900","ui_kits/website/Footer.jsx":"d5dd91753744","ui_kits/website/Hero.jsx":"204b1a4f8412","ui_kits/website/Services.jsx":"955ecd296283","ui_kits/website/SiteNav.jsx":"00be0de0fc48","後台/admin.js":"eb3052c7dbc4","後台/slots.js":"7e87cfde594e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HenryStudioRemix_704588 = window.HenryStudioRemix_704588 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// Github下載/ds_bundle.js
try { (() => {
/* @ds-bundle: {"format":3,"namespace":"HenryStudioRemix_704588","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"MetaRow","sourcePath":"components/data/MetaRow.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surface/Card.jsx"}],"sourceHashes":{"components/core/Button.jsx":"763beae2eaa0","components/core/IconButton.jsx":"a23f89dafea6","components/data/Avatar.jsx":"c42fa22f5f54","components/data/Badge.jsx":"ded9659e30a3","components/data/MetaRow.jsx":"c8221b101b9d","components/data/Tag.jsx":"d8f4867d5a19","components/forms/Input.jsx":"e9c65563409e","components/forms/Select.jsx":"09b089727107","components/navigation/Tabs.jsx":"c9f9fef1fca2","components/surface/Card.jsx":"d36d118b8511","ui_kits/booking/BookingSummary.jsx":"a121c95d850c","ui_kits/booking/Modals.jsx":"a8c80c322a7d","ui_kits/booking/Stepper.jsx":"30e52a6532a1","ui_kits/booking/Steps.jsx":"e9e344e59852","ui_kits/gallery/GalleryGrid.jsx":"f6e73757b160","ui_kits/gallery/Lightbox.jsx":"28303d064562","ui_kits/gallery/data.jsx":"cd677250f1c7","ui_kits/shared/EditableImage.jsx":"f3a7bafe3d91","ui_kits/shared/Icon.jsx":"7ad1bb664a7d","ui_kits/shared/tweaks-panel.jsx":"6591467622ed","ui_kits/website/FeaturedWork.jsx":"20d252c03a3f","ui_kits/website/Footer.jsx":"c475d8791b85","ui_kits/website/Hero.jsx":"261105942c05","ui_kits/website/Services.jsx":"41b1c677876e","ui_kits/website/SiteNav.jsx":"f9f2fb5d35cc","後台/admin.js":"24d1787ad7b6","後台/slots.js":"ee1a23b1c678"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {
  const __ds_ns = window.HenryStudioRemix_704588 = window.HenryStudioRemix_704588 || {};
  const __ds_scope = {};
  __ds_ns.__errors = __ds_ns.__errors || [];

  // components/core/Button.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
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

        // 游標移近（或手機按下）→ 輕微浮起並加深陰影
        const baseShadow = v.boxShadow || "none";
        const hoverShadow = variant === "inverse" ? "var(--shadow-lg)" : variant === "ghost" ? "var(--shadow-sm)" : "var(--shadow-md)";
        const pressShadow = variant === "inverse" ? "var(--shadow-xl, var(--shadow-lg))" : "var(--shadow-lg)";
        const lift = el => {
          el.style.transform = "translateY(-2px)";
          el.style.boxShadow = hoverShadow;
        };
        const press = el => {
          el.style.transform = "translateY(-3px)";
          el.style.boxShadow = pressShadow;
        };
        const reset = el => {
          el.style.transform = "translateY(0)";
          el.style.boxShadow = baseShadow;
        };
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
          onMouseEnter: e => {
            if (!disabled) lift(e.currentTarget);
          },
          onMouseDown: e => {
            if (!disabled) press(e.currentTarget);
          },
          onMouseUp: e => {
            if (!disabled) lift(e.currentTarget);
          },
          onMouseLeave: e => {
            reset(e.currentTarget);
          },
          onTouchStart: e => {
            if (!disabled) press(e.currentTarget);
          },
          onTouchEnd: e => {
            reset(e.currentTarget);
          },
          onTouchCancel: e => {
            reset(e.currentTarget);
          }
        }, rest), iconLeft, children, iconRight);
      }
      Object.assign(__ds_scope, {
        Button
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Button.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/IconButton.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
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
      Object.assign(__ds_scope, {
        IconButton
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/IconButton.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/data/Avatar.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
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
      Object.assign(__ds_scope, {
        Avatar
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/data/Avatar.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/data/Badge.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
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
      Object.assign(__ds_scope, {
        Badge
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/data/Badge.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/data/MetaRow.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
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
      Object.assign(__ds_scope, {
        MetaRow
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/data/MetaRow.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/data/Tag.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
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
        }, /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          style: {
            width: 13,
            height: 13
          }
        }, /*#__PURE__*/React.createElement("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }), /*#__PURE__*/React.createElement("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        }))));
      }
      Object.assign(__ds_scope, {
        Tag
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/data/Tag.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Input.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
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
      Object.assign(__ds_scope, {
        Input
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Input.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/forms/Select.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
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
        })), /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
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
        }, /*#__PURE__*/React.createElement("polyline", {
          points: "6 9 12 15 18 9"
        }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-xs)",
            color: error ? "var(--danger)" : "var(--text-muted)"
          }
        }, error || hint));
      }
      Object.assign(__ds_scope, {
        Select
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/forms/Select.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/navigation/Tabs.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
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
      Object.assign(__ds_scope, {
        Tabs
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/navigation/Tabs.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/surface/Card.jsx
  try {
    (() => {
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }, _extends.apply(null, arguments);
      }
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
      Object.assign(__ds_scope, {
        Card
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/surface/Card.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/booking/BookingSummary.jsx
  try {
    (() => {
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
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/booking/BookingSummary.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/booking/Modals.jsx
  try {
    (() => {
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
            iconRight: /*#__PURE__*/React.createElement(Icon, {
              name: "send"
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
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/booking/Modals.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/booking/Stepper.jsx
  try {
    (() => {
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
          }, done ? /*#__PURE__*/React.createElement(Icon, {
            name: "check",
            size: 15
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
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/booking/Stepper.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/booking/Steps.jsx
  try {
    (() => {
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
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "info"
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
          }, /*#__PURE__*/React.createElement(Icon, {
            name: p.icon
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
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "user"
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
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "mail"
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
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "check",
          size: 34
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
            value: data.bookingId || "HP-2606-0148"
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
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "calendar-plus"
          })
        }, "\u52A0\u5165\u884C\u4E8B\u66C6"), /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "image"
          }),
          onClick: () => window.location.href = window.HENRY_LINKS.gallery
        }, "\u5148\u770B\u770B\u4F5C\u54C1\u96C6")));
      }
      window.StepChoose = StepChoose;
      window.StepDetails = StepDetails;
      window.StepContact = StepContact;
      window.StepDone = StepDone;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/booking/Steps.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/gallery/GalleryGrid.jsx
  try {
    (() => {
      // Gallery — masonry grid + story tile（每張卡片是一個故事的封面）
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
          id: it.shots[0],
          src: `../../assets/slots/${it.shots[0]}.jpg`,
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
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "play",
          size: 12
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
        }, it.loc, " \xB7 ", it.shots.length, " \u5F35")), /*#__PURE__*/React.createElement(IconButton, {
          icon: /*#__PURE__*/React.createElement(Icon, {
            name: "images"
          }),
          label: "\u6253\u958B\u6545\u4E8B",
          variant: "frost",
          size: "sm"
        }))))));
      }
      window.GalleryGrid = GalleryGrid;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/gallery/GalleryGrid.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/gallery/Lightbox.jsx
  try {
    (() => {
      // Gallery — 故事燈箱：主圖 + 故事內縮圖列；左右鍵切換同故事照片
      function Lightbox({
        item,
        onClose,
        onPrevStory,
        onNextStory
      }) {
        const {
          IconButton,
          Badge,
          Button
        } = window.HenryStudioRemix_704588;
        const [shotIdx, setShotIdx] = React.useState(0);
        React.useEffect(() => {
          setShotIdx(0);
        }, [item && item.id]);
        React.useEffect(() => {
          if (!item) return;
          const h = e => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") setShotIdx(i => (i - 1 + item.shots.length) % item.shots.length);
            if (e.key === "ArrowRight") setShotIdx(i => (i + 1) % item.shots.length);
          };
          window.addEventListener("keydown", h);
          return () => window.removeEventListener("keydown", h);
        }, [item]);
        if (!item) return null;
        const shots = item.shots;
        const cur = shots[Math.min(shotIdx, shots.length - 1)];
        const src = id => window.henryImg(id, `../../assets/slots/${id}.jpg`);
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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            padding: "32px 40px 24px"
          },
          onClick: e => e.stopPropagation()
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: "relative",
            flex: 1,
            minHeight: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }
        }, /*#__PURE__*/React.createElement(IconButton, {
          icon: /*#__PURE__*/React.createElement(Icon, {
            name: "chevron-left"
          }),
          label: "\u4E0A\u4E00\u5F35",
          variant: "frost",
          size: "lg",
          onClick: () => setShotIdx(i => (i - 1 + shots.length) % shots.length),
          style: {
            position: "absolute",
            left: 0,
            zIndex: 2
          }
        }), /*#__PURE__*/React.createElement("img", {
          src: src(cur),
          alt: item.title,
          style: {
            maxWidth: "calc(100% - 96px)",
            maxHeight: "100%",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-xl)"
          }
        }), /*#__PURE__*/React.createElement(IconButton, {
          icon: /*#__PURE__*/React.createElement(Icon, {
            name: "chevron-right"
          }),
          label: "\u4E0B\u4E00\u5F35",
          variant: "frost",
          size: "lg",
          onClick: () => setShotIdx(i => (i + 1) % shots.length),
          style: {
            position: "absolute",
            right: 0,
            zIndex: 2
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "lb-strip",
          style: {
            display: "flex",
            gap: 10,
            flexShrink: 0
          }
        }, shots.map((id, i) => /*#__PURE__*/React.createElement("button", {
          key: id,
          type: "button",
          onClick: () => setShotIdx(i),
          "aria-label": `第 ${i + 1} 張`,
          style: {
            width: 76,
            height: 56,
            padding: 0,
            borderRadius: "var(--radius-sm)",
            overflow: "hidden",
            cursor: "pointer",
            border: i === shotIdx ? "2px solid var(--snow)" : "2px solid transparent",
            opacity: i === shotIdx ? 1 : 0.55,
            transition: "opacity var(--dur-base) var(--ease-out)",
            background: "transparent"
          }
        }, /*#__PURE__*/React.createElement("img", {
          src: src(id),
          alt: "",
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
          }
        }))))), /*#__PURE__*/React.createElement("aside", {
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
        }, item.video ? "影片" : "故事"), /*#__PURE__*/React.createElement(IconButton, {
          icon: /*#__PURE__*/React.createElement(Icon, {
            name: "x"
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
        }, item.loc, " \xB7 2026 \u96EA\u5B63")), /*#__PURE__*/React.createElement("p", {
          style: {
            fontSize: "var(--text-sm)",
            color: "var(--text-body)",
            lineHeight: 1.75,
            borderTop: "1px solid var(--divider)",
            paddingTop: 16
          }
        }, item.desc), /*#__PURE__*/React.createElement("div", {
          className: "ds-meta",
          style: {
            color: "var(--text-muted)"
          }
        }, shotIdx + 1, " / ", shots.length), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: "auto",
            display: "flex",
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          size: "sm",
          fullWidth: true,
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "arrow-left"
          }),
          onClick: onPrevStory
        }, "\u4E0A\u4E00\u500B\u6545\u4E8B"), /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          size: "sm",
          fullWidth: true,
          iconRight: /*#__PURE__*/React.createElement(Icon, {
            name: "arrow-right"
          }),
          onClick: onNextStory
        }, "\u4E0B\u4E00\u500B\u6545\u4E8B"))));
      }
      window.Lightbox = Lightbox;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/gallery/Lightbox.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/gallery/data.jsx
  try {
    (() => {
      // Gallery — 故事資料集（每個故事含多張照片，shots[0] 為封面）
      // 所有 shots 的字串都是「圖片槽 id」，對應 assets/slots/<id>.jpg，可在媒體管理後台更換
      window.GALLERY_STORIES = [{
        id: 1,
        slug: "mist-ridge",
        title: "霧中稜線",
        loc: "NISEKO",
        cat: "powder",
        span: 2,
        video: false,
        desc: "清晨第一道光灑落稜線，霧氣尚未散去。我蹲在風口等了四十分鐘，只為等你滑進這道光裡。",
        shots: ["photo-peak-mist", "story-mist-ridge-2", "story-mist-ridge-3"]
      }, {
        id: 2,
        slug: "slope-dawn",
        title: "晨光斜坡",
        loc: "HAKUBA",
        cat: "aerial",
        span: 1,
        video: true,
        desc: "破曉前的纜車站還沒開燈，我們踩著頭燈上山。當太陽躍出山脊，整片斜坡瞬間鍍上金色。",
        shots: ["photo-slope-dawn", "story-slope-dawn-2", "story-slope-dawn-3"]
      }, {
        id: 3,
        slug: "gondola",
        title: "纜車時刻",
        loc: "ZAO",
        cat: "powder",
        span: 2,
        video: false,
        desc: "纜車緩緩爬升，腳下是剛壓過的雪道。這段十二分鐘的路程，是雪場一天裡最安靜的時刻。",
        shots: ["photo-powder-run", "story-gondola-2", "story-gondola-3"]
      }, {
        id: 4,
        slug: "penguin",
        title: "企鵝",
        loc: "TATEYAMA",
        cat: "portrait",
        span: 1,
        video: false,
        desc: "雪場旁的小驚喜——成群的企鵝搖搖擺擺走過雪地，比任何擺拍都更有故事。",
        shots: ["photo-summit-blue", "story-penguin-2", "story-penguin-3"]
      }, {
        id: 5,
        slug: "gondola-view",
        title: "纜車風景",
        loc: "NOZAWA",
        cat: "aerial",
        span: 1,
        video: true,
        desc: "從纜車窗框望出去，樹冰與雪道交錯成幾何。每一格窗景，都是不重複的明信片。",
        shots: ["photo-forest-valley", "story-gondola-view-2", "story-gondola-view-3"]
      }, {
        id: 6,
        slug: "summit-view",
        title: "山頂風景",
        loc: "FURANO",
        cat: "portrait",
        span: 2,
        video: false,
        desc: "站上山頂的那一刻，風停了。十勝岳連峰在雲海後排開，我們什麼都沒說，先拍了再說。",
        shots: ["photo-hero-ridge", "story-summit-view-2", "story-summit-view-3"]
      }, {
        id: 7,
        slug: "dawn-line",
        title: "破曉切線",
        loc: "HAKUBA",
        cat: "powder",
        span: 1,
        video: false,
        desc: "全場第一道刻痕。雪皮在板刃下碎開的聲音，是只有首滑者才聽得到的獎勵。",
        shots: ["story-dawn-line-1", "story-dawn-line-2", "story-dawn-line-3"]
      }, {
        id: 8,
        slug: "after-mist",
        title: "霧散之後",
        loc: "NISEKO",
        cat: "aerial",
        span: 1,
        video: false,
        desc: "等霧散開的人不多。但霧散之後的羊蹄山，值得你把整個上午留給它。",
        shots: ["story-after-mist-1", "story-after-mist-2", "story-after-mist-3"]
      }, {
        id: 9,
        slug: "first-day",
        title: "初雪的一天",
        loc: "NISEKO",
        cat: "portrait",
        span: 1,
        video: false,
        desc: "第一次站上雪板的你，跌倒七次、大笑八次。這些瞬間，比任何完美的滑行都珍貴。",
        shots: ["story-first-day-1", "story-first-day-2", "story-first-day-3"]
      }, {
        id: 10,
        slug: "night-snow",
        title: "雪夜燈火",
        loc: "ZAO",
        cat: "powder",
        span: 2,
        video: false,
        desc: "夜場燈一亮，雪道變成琥珀色的河。呼出的白霧、飄落的細雪，都被燈光接住了。",
        shots: ["story-night-snow-1", "story-night-snow-2", "story-night-snow-3"]
      }];
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/gallery/data.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/shared/EditableImage.jsx
  try {
    (() => {
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
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/shared/EditableImage.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/shared/Icon.jsx
  try {
    (() => {
      // Shared — React 安全版 Lucide 圖示
      // 問題：lucide.createIcons() 會把 <i data-lucide> 直接換成 <svg>。若那個 <i> 是 React（JSX）
      // 渲染的，React 之後要移除/更新節點時會找不到原本的 <i>，丟出
      // "removeChild ... is not a child of this node" 錯誤（多步驟表單按上一步時最常見）。
      // 解法：React 只管理外層 <span>；內部的 <i>→<svg> 由命令式 DOM 操作處理，兩者互不干擾。
      function Icon({
        name,
        size,
        style,
        className
      }) {
        const ref = React.useRef(null);
        React.useLayoutEffect(() => {
          const span = ref.current;
          if (!span || !name) return;
          span.innerHTML = "";
          const i = document.createElement("i");
          i.setAttribute("data-lucide", name);
          span.appendChild(i);
          if (window.lucide && window.lucide.createIcons) {
            try {
              window.lucide.createIcons();
            } catch (e) {}
          }
          const svg = span.querySelector("svg");
          if (svg) {
            svg.style.display = "block";
            if (size) {
              svg.setAttribute("width", size);
              svg.setAttribute("height", size);
            }
          }
          return () => {
            try {
              span.innerHTML = "";
            } catch (e) {}
          };
        }, [name, size]);
        return /*#__PURE__*/React.createElement("span", {
          ref: ref,
          className: className,
          "aria-hidden": "true",
          style: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            ...style
          }
        });
      }
      window.Icon = Icon;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/shared/Icon.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/shared/tweaks-panel.jsx
  try {
    (() => {
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
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/shared/tweaks-panel.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/FeaturedWork.jsx
  try {
    (() => {
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
          title: "二世谷・羊蹄山",
          loc: "NISEKO",
          tag: "powder",
          kind: "粉雪",
          badge: "精選"
        }, {
          img: "slope-dawn",
          title: "羊蹄山・經典日本雪場",
          loc: "NISEKO",
          tag: "aerial",
          kind: "山景",
          badge: null
        }, {
          img: "powder-run",
          title: "二世谷・纜車時刻",
          loc: "NISEKO",
          tag: "powder",
          kind: "粉雪",
          badge: null
        }, {
          img: "summit-blue",
          title: "周邊景點・",
          loc: "TATEYAMA",
          tag: "portrait",
          kind: "人像",
          badge: "新作"
        }, {
          img: "forest-valley",
          title: "滑行・雪場風景",
          loc: "NOZAWA",
          tag: "aerial",
          kind: "空拍",
          badge: null
        }, {
          img: "hero-ridge",
          title: "二世谷・山頂風景",
          loc: "NISEKO",
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
          iconRight: /*#__PURE__*/React.createElement(Icon, {
            name: "arrow-right"
          }),
          onClick: () => onNav && onNav("work")
        }, "\u67E5\u770B\u5B8C\u6574\u4F5C\u54C1\u96C6")));
      }
      window.FeaturedWork = FeaturedWork;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/FeaturedWork.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/Footer.jsx
  try {
    (() => {
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
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "quote",
          size: 40,
          style: {
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
          iconRight: /*#__PURE__*/React.createElement(Icon, {
            name: "arrow-right"
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
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/Footer.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/Hero.jsx
  try {
    (() => {
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

      // 雪況預設：每種雪況的密度、大小、速度、雪花字符與飄移幅度
      function buildHeroFlakes(variant) {
        const PRESETS = {
          "冰晶": {
            n: 46,
            sz: [10, 22],
            glyph: ["❄", "❅", "❆"],
            dur: [7, 13],
            amp: [8, 22],
            sway: [2.5, 5],
            blur: [0, 0.6],
            op: [.55, .95]
          },
          "細雪": {
            n: 84,
            sz: [6, 12],
            glyph: ["❄", "❅", "•", "·"],
            dur: [5, 9],
            amp: [4, 12],
            sway: [1.8, 3.6],
            blur: [0, 0.4],
            op: [.4, .8]
          },
          "鵝毛大雪": {
            n: 30,
            sz: [18, 38],
            glyph: ["❄", "❆"],
            dur: [9, 16],
            amp: [10, 30],
            sway: [3, 6],
            blur: [.3, 1.5],
            op: [.5, .9]
          },
          "薄霧飄雪": {
            n: 40,
            sz: [9, 20],
            glyph: ["❄", "❅", "❆"],
            dur: [8, 14],
            amp: [8, 22],
            sway: [3, 5.5],
            blur: [.5, 1.3],
            op: [.45, .85]
          }
        };
        const c = PRESETS[variant] || PRESETS["冰晶"];
        const rnd = (a, b) => a + Math.random() * (b - a);
        const pick = arr => arr[Math.floor(Math.random() * arr.length)];
        const mobile = typeof window !== "undefined" && window.matchMedia("(max-width: 820px)").matches;
        const n = mobile ? Math.round(c.n * 0.45) : c.n; // fewer flakes on phones
        const maxBlur = mobile ? 0.3 : Infinity; // blur is paint-heavy on mobile
        return Array.from({
          length: n
        }, (_, i) => ({
          id: i,
          x: rnd(0, 100),
          sz: rnd(c.sz[0], c.sz[1]),
          dur: rnd(c.dur[0], c.dur[1]),
          delay: -rnd(0, c.dur[1]),
          amp: rnd(c.amp[0], c.amp[1]),
          sway: rnd(c.sway[0], c.sway[1]),
          swayDelay: -rnd(0, 3),
          blur: Math.min(rnd(c.blur[0], c.blur[1]), maxBlur),
          op: rnd(c.op[0], c.op[1]),
          rot: (Math.random() < .5 ? -1 : 1) * rnd(40, 170),
          glyph: pick(c.glyph)
        }));
      }
      function Snowfall({
        variant
      }) {
        const flakes = React.useMemo(() => buildHeroFlakes(variant), [variant]);
        return /*#__PURE__*/React.createElement("div", {
          "aria-hidden": "true",
          className: "hero-snowfall",
          style: {
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden"
          }
        }, variant === "薄霧飄雪" && /*#__PURE__*/React.createElement("div", {
          style: {
            position: "absolute",
            inset: 0,
            background: "radial-gradient(125% 80% at 50% 0%, rgba(233,245,250,0.20), transparent 62%)"
          }
        }), flakes.map(f => /*#__PURE__*/React.createElement("span", {
          key: f.id,
          style: {
            position: "absolute",
            left: f.x + "%",
            top: 0,
            animation: `heroFlakeFall ${f.dur}s linear ${f.delay}s infinite`,
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
            "--rot": f.rot + "deg",
            "--op": f.op
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: "inline-block",
            fontSize: f.sz + "px",
            lineHeight: 1,
            color: "#ffffff",
            filter: f.blur ? `blur(${f.blur}px)` : "none",
            textShadow: "0 0 6px rgba(255,255,255,.4)",
            animation: `heroFlakeSway ${f.sway}s ease-in-out ${f.swayDelay}s infinite alternate`,
            "--amp": f.amp + "px"
          }
        }, f.glyph))));
      }
      function Hero({
        onNav,
        motion = "滑刃光痕",
        snowStyle = "冰晶"
      }) {
        const {
          Button,
          MetaRow
        } = window.HenryStudioRemix_704588;
        const [videoOpen, setVideoOpen] = React.useState(false);
        const secRef = React.useRef(null);
        const [hover, setHover] = React.useState(false);
        const [pos, setPos] = React.useState({
          x: 0.5,
          y: 0.5,
          px: 0,
          py: 0
        });
        const onMove = e => {
          const el = secRef.current;
          if (!el) return;
          const r = el.getBoundingClientRect();
          setPos({
            x: (e.clientX - r.left) / r.width,
            y: (e.clientY - r.top) / r.height,
            px: e.clientX - r.left,
            py: e.clientY - r.top
          });
        };

        // 依模式計算圖片本身的位移/縮放（滑行、推近感）
        let imgTransform = "none";
        let imgTransition = "transform .55s cubic-bezier(.22,.61,.36,1)";
        if (motion === "視差滑行") {
          const dx = pos.x - 0.5,
            dy = pos.y - 0.5;
          imgTransform = hover ? `scale(1.09) translate(${dx * -26}px, ${dy * -18}px)` : "scale(1.02)";
          imgTransition = "transform .4s cubic-bezier(.22,.61,.36,1)";
        } else if (motion === "粉雪飄移") {
          imgTransform = hover ? "scale(1.06)" : "scale(1)";
          imgTransition = "transform 1.3s ease-out";
        } else if (motion === "滑刃光痕") {
          imgTransform = hover ? "scale(1.03)" : "scale(1)";
          imgTransition = "transform .7s ease-out";
        }
        const leftPct = (pos.x * 100).toFixed(2) + "%";
        return /*#__PURE__*/React.createElement("section", {
          ref: secRef,
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => {
            setHover(false);
            setPos({
              x: 0.5,
              y: 0.5,
              px: 0,
              py: 0
            });
          },
          onMouseMove: onMove,
          style: {
            position: "relative",
            minHeight: "var(--hero-h, min(728px, 92svh))",
            display: "block",
            overflow: "hidden"
          }
        }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes heroFlakeFall {
          0%   { transform: translate3d(0, -14vh, 0) rotate(0deg); opacity: 0; }
          8%   { opacity: var(--op); }
          90%  { opacity: var(--op); }
          100% { transform: translate3d(0, 116vh, 0) rotate(var(--rot)); opacity: 0; }
        }
        @keyframes heroFlakeSway {
          from { transform: translateX(calc(var(--amp) * -1)); }
          to   { transform: translateX(var(--amp)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-snowfall { display: none; }
        }

        /* ===== Editorial magazine cover layout ===== */
        .hero-mag { position: absolute; inset: 0; pointer-events: none; }
        .hero-mag__frame {
          position: absolute; inset: clamp(14px, 2vw, 26px);
          border: 1px solid rgba(251,251,250,0.30);
          mix-blend-mode: screen;
        }
        .hero-mag__frame::before, .hero-mag__frame::after {
          content: ""; position: absolute; width: 12px; height: 12px;
          border: 1px solid rgba(251,251,250,0.55);
        }
        .hero-mag__frame::before { top: -1px; left: -1px; border-right: 0; border-bottom: 0; }
        .hero-mag__frame::after  { bottom: -1px; right: -1px; border-left: 0; border-top: 0; }

        .hero-edge {
          position: absolute; left: clamp(30px, 4.4vw, 60px); right: clamp(30px, 4.4vw, 60px);
          display: flex; align-items: baseline; justify-content: space-between; gap: 18px;
        }
        .hero-mag__top { top: clamp(28px, 3.6vw, 46px); }
        .hero-mag__bottom {
          bottom: clamp(28px, 3.6vw, 46px); align-items: flex-end;
        }
        .hero-kicker {
          font-family: var(--font-mono); font-size: var(--text-xs);
          letter-spacing: 0.26em; text-transform: uppercase; color: var(--snow);
          display: inline-flex; align-items: center; gap: 12px;
        }
        .hero-kicker::before {
          content: ""; width: 26px; height: 1px; background: var(--ice-200); display: inline-block;
        }
        .hero-issue {
          font-family: var(--font-mono); font-size: var(--text-xs);
          letter-spacing: 0.14em; color: var(--ice-100); white-space: nowrap;
        }
        .hero-issue b { color: var(--snow); font-weight: 700; }

        .hero-mag__title {
          position: absolute; inset: 0; margin: 0; color: var(--snow);
          font-family: var(--font-display); font-weight: 600;
        }
        .hl-line {
          position: absolute; margin: 0;
          font-size: clamp(36px, 6.6vw, 86px); line-height: 1.0;
          letter-spacing: var(--tracking-tight);
          text-shadow: 0 2px 34px rgba(28,27,25,0.42);
        }
        .hl-1 { left: clamp(30px, 4.4vw, 60px); top: clamp(96px, 17%, 210px); }
        .hl-2 { right: clamp(44px, 6vw, 92px); bottom: clamp(168px, 27%, 280px); text-align: right; }
        .hl-accent { position: relative; white-space: nowrap; }
        .hl-accent::after {
          content: ""; position: absolute; left: 0; right: 0; bottom: -0.14em;
          height: 4px; border-radius: 4px;
          background: linear-gradient(90deg, var(--ice-300), var(--ice-100));
        }

        .hero-mag__vert {
          position: absolute; right: clamp(9px, 1.4vw, 18px); top: 50%;
          writing-mode: vertical-rl; transform: translateY(-50%);
          font-family: var(--font-mono); font-size: var(--text-2xs);
          letter-spacing: 0.24em; text-transform: uppercase;
          color: rgba(251,251,250,0.78);
          text-shadow: 0 1px 10px rgba(28,27,25,0.5);
        }

        .hero-lede {
          max-width: 380px; margin: 0; color: var(--stone-100);
          font-size: var(--text-base); line-height: 1.66; font-weight: 400;
          text-shadow: 0 1px 18px rgba(28,27,25,0.55);
        }
        .hero-cta { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; justify-content: flex-end; pointer-events: auto; }

        /* keep the text directly clickable/editable while open areas pass through to the image */
        .hero-kicker, .hero-issue, .hero-lede, .hl-line, .hero-mag__vert { pointer-events: auto; }

        @media (max-width: 820px) {
          .hero-mag__vert { display: none; }
          /* anchor headline high in the sky so the central subject (羊蹄山) stays clear */
          .hero-mag__title {
            inset: auto clamp(24px, 6vw, 40px); top: clamp(94px, 14vh, 150px); transform: none;
          }
          .hl-line { position: static; right: auto; bottom: auto; left: auto; text-align: left; display: block; }
          .hl-2 { margin-top: 0.16em; }
          .hero-mag__top { flex-direction: column; align-items: flex-start; gap: 6px; }
          .hero-mag__bottom { flex-direction: column; align-items: flex-start; gap: 16px; }
          .hero-cta { justify-content: flex-start; }
        }
        @media (max-width: 480px) {
          .hl-line { font-size: clamp(30px, 9vw, 44px); }
        }
      `), /*#__PURE__*/React.createElement(EditableImage, {
          id: "cover-hero",
          src: "../../assets/slots/cover-hero.jpg",
          alt: "",
          maxEdge: 1920,
          label: "\u66F4\u63DB Cover",
          style: {
            position: "absolute",
            inset: 0,
            transform: imgTransform,
            transition: imgTransition,
            willChange: "transform"
          }
        }), motion === "滑刃光痕" && /*#__PURE__*/React.createElement("div", {
          "aria-hidden": "true",
          style: {
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden",
            opacity: hover ? 1 : 0,
            transition: "opacity .35s ease"
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: "absolute",
            top: "-20%",
            height: "140%",
            width: 170,
            left: `calc(${leftPct} - 85px)`,
            transform: "skewX(-16deg)",
            filter: "blur(7px)",
            mixBlendMode: "screen",
            background: "linear-gradient(90deg, transparent, rgba(233,245,250,0) 18%, rgba(233,245,250,.5) 50%, rgba(255,255,255,0) 82%, transparent)",
            transition: "left .2s cubic-bezier(.22,.61,.36,1)"
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: "absolute",
            top: "-20%",
            height: "140%",
            width: 3,
            left: `calc(${leftPct} - 1.5px)`,
            transform: "skewX(-16deg)",
            filter: "blur(.5px)",
            mixBlendMode: "screen",
            opacity: .75,
            background: "linear-gradient(180deg, transparent, rgba(255,255,255,.9) 45%, rgba(255,255,255,.9) 55%, transparent)",
            transition: "left .12s cubic-bezier(.22,.61,.36,1)"
          }
        })), motion === "冰霜揭幕" && /*#__PURE__*/React.createElement("div", {
          "aria-hidden": "true",
          style: {
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backdropFilter: "blur(7px) brightness(1.1) saturate(.82)",
            WebkitBackdropFilter: "blur(7px) brightness(1.1) saturate(.82)",
            background: "rgba(222,234,238,0.18)",
            maskImage: `radial-gradient(circle ${hover ? 180 : 0}px at ${pos.px}px ${pos.py}px, transparent 0, transparent 58%, #000 100%)`,
            WebkitMaskImage: `radial-gradient(circle ${hover ? 180 : 0}px at ${pos.px}px ${pos.py}px, transparent 0, transparent 58%, #000 100%)`,
            transition: "-webkit-mask-image .08s linear, mask-image .08s linear"
          }
        }), motion === "粉雪飄移" && /*#__PURE__*/React.createElement(Snowfall, {
          variant: snowStyle
        }), /*#__PURE__*/React.createElement("div", {
          "aria-hidden": "true",
          style: {
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: "linear-gradient(180deg, rgba(28,27,25,0.40) 0%, rgba(28,27,25,0.04) 26%, rgba(28,27,25,0) 52%, rgba(28,27,25,0.10) 74%, rgba(28,27,25,0.56) 100%)"
          }
        }), /*#__PURE__*/React.createElement("div", {
          className: "hero-mag"
        }, /*#__PURE__*/React.createElement("div", {
          className: "hero-mag__frame",
          "aria-hidden": "true"
        }), /*#__PURE__*/React.createElement("div", {
          className: "hero-edge hero-mag__top"
        }, /*#__PURE__*/React.createElement("span", {
          className: "hero-kicker"
        }, "FREELANCE SKI IMAGERY"), /*#__PURE__*/React.createElement("span", {
          className: "hero-issue"
        }, "\u5317\u6D77\u9053 / \u4E8C\u4E16\u8C37 \u2014 ", /*#__PURE__*/React.createElement("b", null, "VOL.26"))), /*#__PURE__*/React.createElement("h1", {
          className: "hero-mag__title"
        }, /*#__PURE__*/React.createElement("span", {
          className: "hl-line hl-1"
        }, "\u6BCF\u4E00\u5E40\u96EA\u570B\u5F71\u50CF\uFF0C"), /*#__PURE__*/React.createElement("span", {
          className: "hl-line hl-2"
        }, "\u8A18\u9304\u8457", /*#__PURE__*/React.createElement("span", {
          className: "hl-accent"
        }, "\u7F8E\u597D"), "\u7684\u56DE\u61B6")), /*#__PURE__*/React.createElement("div", {
          className: "hero-mag__vert",
          "aria-hidden": "true"
        }, "\xA9 HENRY ZHU \xB7 NISEKO HOKKAIDO \xB7 f/2.8 \xB7 1/2000s \xB7 ISO100"), /*#__PURE__*/React.createElement("div", {
          className: "hero-edge hero-mag__bottom"
        }, /*#__PURE__*/React.createElement("p", {
          className: "hero-lede"
        }, "\u5FEB\u9580\u80CC\u5F8C\u7684\u773C\u775B\uFF0C\u8207\u4F60\u4E26\u80A9\u5728\u98A8\u96EA\u4E2D\u524D\u884C\u3002", /*#__PURE__*/React.createElement("br", null), "\u8A18\u9304\u6311\u6230\u7684\u6C57\u6C34\uFF0C\u4E5F\u5B9A\u683C\u767B\u9802\u7684\u7B11\u5BB9\u3002"), /*#__PURE__*/React.createElement("div", {
          className: "hero-cta"
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "inverse",
          size: "lg",
          iconRight: /*#__PURE__*/React.createElement(Icon, {
            name: "arrow-right"
          }),
          onClick: () => onNav && onNav("work")
        }, "\u700F\u89BD\u4F5C\u54C1\u96C6"), /*#__PURE__*/React.createElement(Button, {
          variant: "ghost",
          size: "lg",
          style: {
            color: "var(--snow)"
          },
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "play"
          }),
          onClick: () => setVideoOpen(true)
        }, "\u89C0\u770B\u5F71\u7247")))), /*#__PURE__*/React.createElement(HeroVideoModal, {
          open: videoOpen,
          onClose: () => setVideoOpen(false)
        }));
      }
      window.Hero = Hero;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/Hero.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/Services.jsx
  try {
    (() => {
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
          icon: "camera",
          name: "攝影紀錄（照片）",
          price: "NT$ 8,500",
          unit: "/ 1 小時",
          desc: "精選最佳畫面，確保您獲得豐富的留念影像",
          feat: ["實拍 1 小時", "照片張數不設上限", "約 5 個工作天雲端交付"],
          tone: "brand",
          featured: true
        }, {
          icon: "video",
          name: "雪地跟拍（影片）",
          price: "NT$ 11,000",
          unit: "/ 1 小時",
          desc: "跟拍你的滑行，精選最佳畫面成影像記憶。",
          feat: ["實拍 1 小時", "精選影片", "約 5 個工作天雲端交付"],
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
        }, "\u4EE5\u300C\u7D00\u9304\u65C5\u7A0B\u300D\u70BA\u6982\u5FF5\uFF0C\u5B8C\u6574\u6355\u6349\u96EA\u4E0A\u7CBE\u5F69\u77AC\u9593")), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
            gap: 22,
            maxWidth: 760,
            margin: "0 auto"
          }
        }, packs.map(p => /*#__PURE__*/React.createElement(Card, {
          key: p.name,
          elevation: p.featured ? "lg" : "sm",
          padding: "28px",
          interactive: true,
          style: {
            cursor: "default",
            ...(p.featured ? {
              border: "1.5px solid var(--ice-300)"
            } : {})
          }
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
        }, /*#__PURE__*/React.createElement(Icon, {
          name: p.icon
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
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "check",
          size: 16,
          style: {
            color: "var(--brand)"
          }
        }), f))), /*#__PURE__*/React.createElement(Button, {
          variant: p.featured ? "primary" : "secondary",
          fullWidth: true,
          onClick: () => onNav && onNav("book")
        }, "\u9078\u64C7\u65B9\u6848")))));
      }
      window.Services = Services;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/Services.jsx",
      error: String(e && e.message || e)
    });
  }

  // ui_kits/website/SiteNav.jsx
  try {
    (() => {
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
        const IG_URL = "https://www.instagram.com/henryzjun/";
        const links = [{
          id: "work",
          label: "作品集"
        }, {
          id: "services",
          label: "拍攝方案"
        }, {
          id: "about",
          label: "關於亨利",
          href: IG_URL
        }];
        const go = (e, id) => {
          const link = links.find(l => l.id === id);
          if (link && link.href) {
            setOpen(false);
            window.open(link.href, "_blank", "noopener");
            return;
          }
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
          href: l.href || `#${l.id}`,
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
          iconLeft: /*#__PURE__*/React.createElement(Icon, {
            name: "calendar"
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
          href: l.href || `#${l.id}`,
          className: active === l.id ? "is-active" : "",
          onClick: e => go(e, l.id)
        }, l.label))));
      }
      window.SiteNav = SiteNav;
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "ui_kits/website/SiteNav.jsx",
      error: String(e && e.message || e)
    });
  }

  // 後台/admin.js
  try {
    (() => {
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
          var lastGroup = null;
          window.HENRY_SLOTS.forEach(function (s) {
            var group = s.story ? "故事《" + s.story + "》" : "網站主要版位";
            if (group !== lastGroup) {
              lastGroup = group;
              var divider = document.createElement("div");
              divider.className = "ad-divider";
              divider.textContent = group;
              grid.appendChild(divider);
            }
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
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "後台/admin.js",
      error: String(e && e.message || e)
    });
  }

  // 後台/slots.js
  try {
    (() => {
      // 後台共用 — 圖片槽清單與上傳壓縮工具（僅後台使用，不會打包進上架網頁）
      window.HENRY_SLOTS = [
      // ===== 網站主要版位 =====
      {
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
      },
      // ===== 作品集故事（每個故事 3 張，第 1 張為封面）=====
      // 前 6 個故事的封面同時也是官網「精選作品」的圖片
      {
        id: "photo-peak-mist",
        name: "封面 ①",
        story: "霧中稜線",
        usedIn: "作品集＋官網精選",
        maxEdge: 1600
      }, {
        id: "story-mist-ridge-2",
        name: "照片 ②",
        story: "霧中稜線",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-mist-ridge-3",
        name: "照片 ③",
        story: "霧中稜線",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "photo-slope-dawn",
        name: "封面 ①",
        story: "晨光斜坡",
        usedIn: "作品集＋官網精選",
        maxEdge: 1600
      }, {
        id: "story-slope-dawn-2",
        name: "照片 ②",
        story: "晨光斜坡",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-slope-dawn-3",
        name: "照片 ③",
        story: "晨光斜坡",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "photo-powder-run",
        name: "封面 ①",
        story: "纜車時刻",
        usedIn: "作品集＋官網精選",
        maxEdge: 1600
      }, {
        id: "story-gondola-2",
        name: "照片 ②",
        story: "纜車時刻",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-gondola-3",
        name: "照片 ③",
        story: "纜車時刻",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "photo-summit-blue",
        name: "封面 ①",
        story: "企鵝",
        usedIn: "作品集＋官網精選",
        maxEdge: 1600
      }, {
        id: "story-penguin-2",
        name: "照片 ②",
        story: "企鵝",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-penguin-3",
        name: "照片 ③",
        story: "企鵝",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "photo-forest-valley",
        name: "封面 ①",
        story: "纜車風景",
        usedIn: "作品集＋官網精選",
        maxEdge: 1600
      }, {
        id: "story-gondola-view-2",
        name: "照片 ②",
        story: "纜車風景",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-gondola-view-3",
        name: "照片 ③",
        story: "纜車風景",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "photo-hero-ridge",
        name: "封面 ①",
        story: "山頂風景",
        usedIn: "作品集＋官網精選",
        maxEdge: 1600
      }, {
        id: "story-summit-view-2",
        name: "照片 ②",
        story: "山頂風景",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-summit-view-3",
        name: "照片 ③",
        story: "山頂風景",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-dawn-line-1",
        name: "封面 ①",
        story: "破曉切線",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-dawn-line-2",
        name: "照片 ②",
        story: "破曉切線",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-dawn-line-3",
        name: "照片 ③",
        story: "破曉切線",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-after-mist-1",
        name: "封面 ①",
        story: "霧散之後",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-after-mist-2",
        name: "照片 ②",
        story: "霧散之後",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-after-mist-3",
        name: "照片 ③",
        story: "霧散之後",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-first-day-1",
        name: "封面 ①",
        story: "初雪的一天",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-first-day-2",
        name: "照片 ②",
        story: "初雪的一天",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-first-day-3",
        name: "照片 ③",
        story: "初雪的一天",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-night-snow-1",
        name: "封面 ①",
        story: "雪夜燈火",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-night-snow-2",
        name: "照片 ②",
        story: "雪夜燈火",
        usedIn: "作品集",
        maxEdge: 1600
      }, {
        id: "story-night-snow-3",
        name: "照片 ③",
        story: "雪夜燈火",
        usedIn: "作品集",
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
            onError("瀏覽器儲存空間不足：請先「還原」其他圖片或先發佈，再繼續更換。");
          }
        };
        img.onerror = function () {
          URL.revokeObjectURL(url);
          onError("無法讀取此圖片，請改用 JPG 或 PNG 檔。");
        };
        img.src = url;
      };
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "後台/slots.js",
      error: String(e && e.message || e)
    });
  }
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "Github下載/ds_bundle.js", error: String((e && e.message) || e) }); }

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

  // 游標移近（或手機按下）→ 輕微浮起並加深陰影
  const baseShadow = v.boxShadow || "none";
  const hoverShadow = variant === "inverse" ? "var(--shadow-lg)" : variant === "ghost" ? "var(--shadow-sm)" : "var(--shadow-md)";
  const pressShadow = variant === "inverse" ? "var(--shadow-xl, var(--shadow-lg))" : "var(--shadow-lg)";
  const lift = el => {
    el.style.transform = "translateY(-2px)";
    el.style.boxShadow = hoverShadow;
  };
  const press = el => {
    el.style.transform = "translateY(-3px)";
    el.style.boxShadow = pressShadow;
  };
  const reset = el => {
    el.style.transform = "translateY(0)";
    el.style.boxShadow = baseShadow;
  };
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
    onMouseEnter: e => {
      if (!disabled) lift(e.currentTarget);
    },
    onMouseDown: e => {
      if (!disabled) press(e.currentTarget);
    },
    onMouseUp: e => {
      if (!disabled) lift(e.currentTarget);
    },
    onMouseLeave: e => {
      reset(e.currentTarget);
    },
    onTouchStart: e => {
      if (!disabled) press(e.currentTarget);
    },
    onTouchEnd: e => {
      reset(e.currentTarget);
    },
    onTouchCancel: e => {
      reset(e.currentTarget);
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
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
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
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
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
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
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
    "雪地跟拍（影片）": 11000,
    "完整紀錄（照片＋影片）": 19500
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
  }, price ? `NT$ ${price.toLocaleString()}` : "—"))));
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
  }, /*#__PURE__*/React.createElement(MTitle, null, "\u62CD\u651D\u6642\u9577"), /*#__PURE__*/React.createElement(MItem, null, "\u55AE\u4E00\u65B9\u6848\u62CD\u651D\u6642\u9593\u70BA ", /*#__PURE__*/React.createElement("b", null, "1 \u5C0F\u6642"), "\uFF08\u5F9E\u6307\u5B9A\u9810\u7D04\u6642\u6BB5\u958B\u59CB\u8A08\u7B97\uFF0C\u4E0D\u542B\u599D\u9AEE\u3001\u4EA4\u901A\u7B49\u6E96\u5099\u6642\u9593\uFF09\u3002"), /*#__PURE__*/React.createElement(MTitle, null, "\u62CD\u651D\u5167\u5BB9"), /*#__PURE__*/React.createElement(MItem, null, "\uD83D\uDCF8 \u4EE5\u300C\u6D3B\u52D5\u7D00\u9304\u300D\u70BA\u6982\u5FF5\uFF0C\u5B8C\u6574\u6355\u6349\u7CBE\u5F69\u77AC\u9593\uFF0C\u4E0D\u8A2D\u7167\u7247\u5F35\u6578\u4E0A\u9650\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\uD83C\uDFAC \u651D\u5F71\u5E2B\u5C07\u7CBE\u9078\u6700\u4F73\u756B\u9762\uFF0C\u78BA\u4FDD\u60A8\u7372\u5F97\u8C50\u5BCC\u7684\u7559\u5FF5\u5F71\u50CF\u3002"), /*#__PURE__*/React.createElement(MTitle, null, "\u670D\u88DD\u53CA\u599D\u9AEE\u9020\u578B"), /*#__PURE__*/React.createElement(MItem, null, "\uD83D\uDC57 \u672C\u670D\u52D9\u4E0D\u542B\u599D\u9AEE\u3001\u670D\u88DD\u3001\u9053\u5177\u53CA\u88DD\u5099\u79DF\u501F\uFF0C\u8ACB\u81EA\u5099\u9069\u5408\u96EA\u5730\u7684\u670D\u88DD\u8207\u914D\u4EF6\uFF08\u624B\u5957\u3001\u570D\u5DFE\u7B49\uFF09\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\uD83D\uDCA1 \u82E5\u6709\u7279\u6B8A\u9700\u6C42\uFF08\u5982\u9020\u578B\u5EFA\u8B70\uFF09\uFF0C\u6B61\u8FCE\u63D0\u524D\u544A\u77E5\uFF01"), /*#__PURE__*/React.createElement(MTitle, null, "\u4EA4\u901A\u8207\u5834\u5730"), /*#__PURE__*/React.createElement(MItem, null, "\uD83D\uDEA0 \u4E8C\u4E16\u53E4\u96EA\u5834\u5167\uFF1A\u60A8\u53EA\u9700\u81EA\u5099\u8A72\u96EA\u5834\u7E9C\u8ECA\u7968\uFF0C\u7121\u9700\u8CA0\u64D4\u651D\u5F71\u5E2B\u8CBB\u7528\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\uD83C\uDFD4\uFE0F \u5176\u4ED6\u96EA\u5834\uFF0F\u9060\u7A0B\u5730\u9EDE\uFF1A\u9700\u53E6\u652F\u4ED8\u651D\u5F71\u5E2B\u7684\u7E9C\u8ECA\u7968\u6216\u4EA4\u901A\u8CBB\u3002"), /*#__PURE__*/React.createElement(MItem, null, "\u23F1\uFE0F \u4E2D\u9014\u66F4\u6539\u5730\u9EDE\uFF1A\u82E5\u62CD\u651D\u958B\u59CB\u5F8C\u81E8\u6642\u66F4\u63DB\u8F03\u9060\u5834\u5730\uFF0C\u4EA4\u901A\u6642\u9593\u5C07\u8A08\u5165\u62CD\u651D\u7E3D\u6642\u9577\u5167\u3002"), /*#__PURE__*/React.createElement(MTitle, null, "\u6210\u7247\u4EA4\u4ED8"), /*#__PURE__*/React.createElement(MItem, null, "\u2705 \u96F2\u7AEF\u4E0B\u8F09\uFF1A\u62CD\u651D\u65E5\u5F8C\u7D04\u300C\u4E94\u500B\u5DE5\u4F5C\u5929\u300D\u5C07\u900F\u904E Google \u96F2\u7AEF\u63D0\u4F9B\u9AD8\u756B\u8CEA\u6210\u7247\uFF0C\u4E0B\u8F09\u9023\u7D50\u6709\u6548\u671F\u70BA 1 \u500B\u6708\uFF0C\u8ACB\u53CA\u6642\u4FDD\u5B58\uFF01"), /*#__PURE__*/React.createElement(MItem, null, "\u274C \u539F\u59CB RAW \u6A94\uFF1A\u7531\u65BC\u6A94\u6848\u904E\u5927\uFF0C\u6055\u4E0D\u63D0\u4F9B\u539F\u59CB RAW \u6A94\uFF0C\u50C5\u4EA4\u4ED8\u8ABF\u8272\u5F8C\u7684 JPG \u6A94\u6848\u3002"));
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
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "send"
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
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        borderRadius: "var(--radius-pill)",
        flexShrink: 0,
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-sm)",
        fontWeight: 700,
        background: done ? "var(--brand)" : active ? "var(--brand-soft)" : "var(--surface-sunken)",
        color: done ? "var(--snow)" : active ? "var(--brand-soft-text)" : "var(--text-subtle)",
        border: active ? "1.5px solid var(--ice-300)" : "1.5px solid transparent",
        transition: "var(--transition-base)"
      }
    }, done ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        fontWeight: active ? "var(--fw-semibold)" : "var(--fw-medium)",
        whiteSpace: "nowrap",
        color: active || done ? "var(--text-strong)" : "var(--text-subtle)"
      }
    }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 10,
        height: 2,
        margin: "0 8px",
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
    metaParts: ["照片", "1小時", "張數不設上限"],
    price: "NT$ 8,500"
  }, {
    id: "雪地跟拍（影片）",
    icon: "video",
    name: "雪地跟拍",
    metaParts: ["影片", "1小時", "精選剪輯"],
    price: "NT$ 11,000"
  }, {
    id: "完整紀錄（照片＋影片）",
    icon: "layers",
    name: "完整紀錄",
    metaParts: ["照片＋影片", "2小時", "完整方案"],
    price: "NT$ 19,500"
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
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "info"
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
    }, /*#__PURE__*/React.createElement(Icon, {
      name: p.icon
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
      className: "ds-meta",
      style: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "1px 6px"
      }
    }, p.metaParts.map((m, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: m
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        opacity: .45
      }
    }, "\xB7"), /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: "nowrap"
      }
    }, m))))), /*#__PURE__*/React.createElement("div", {
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
  }, "\u8A73\u898B\u300C\u670D\u52D9\u8AAA\u660E\u300D\u3002"), /*#__PURE__*/React.createElement(ServiceInfoModal, {
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
    }),
    min: "2026-12-05",
    max: "2027-04-10",
    hint: "\u53EF\u9810\u7D04 2026/12/5 \u2013 2027/4/10\uFF08\u96EA\u5B63\u671F\u9593\uFF09"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u6642\u9593 *",
    value: data.time,
    onChange: e => set({
      time: e.target.value
    }),
    options: ["請選擇", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"],
    hint: "\u958B\u653E 09:00\u201318:00\uFF0C\u6BCF\u534A\u5C0F\u6642\u4E00\u500B\u6642\u6BB5"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u6703\u9762\u5730\u9EDE *",
    value: data.loc,
    onChange: e => set({
      loc: e.target.value
    }),
    options: ["二世谷 Hirafu雪場", "二世谷 Annupuri雪場", "二世谷 Hanazono雪場", "二世谷 Village雪場", "留壽都 RUSUTSU", "喜樂樂 KIRORO", "其他（請於特殊需求說明）"],
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
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "user"
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
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail"
    }),
    hint: "\u9810\u7D04\u78BA\u8A8D\u4FE1\u8207\u4ED8\u6B3E\u8CC7\u8A0A\u5C07\u5BC4\u9001\u81F3\u6B64\u4FE1\u7BB1"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u793E\u7FA4\u5A92\u9AD4\u5E33\u865F",
    value: data.social,
    onChange: e => set({
      social: e.target.value
    }),
    placeholder: "Instagram / Facebook / LINE ID",
    hint: "\u9078\u586B\uFF0C\u65B9\u4FBF\u6211\u5011\u806F\u7E6B\u8207\u5206\u4EAB\u6210\u54C1"
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
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 34
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
  }, "\u611F\u8B1D ", data.name || "你", " \u7684\u9810\u7D04\u3002JD \u767D\u91D1\u79D8\u66F8\u5C07\u4EE5 Email \u8207\u60A8\u806F\u7E6B\u4E26\u78BA\u8A8D\u9810\u7D04\u5167\u5BB9\u8207\u4ED8\u6B3E\u65B9\u5F0F \uFF08\u4FE1\u4EF6\u7F72\u540D bookings@jdnisekosss.com\uFF1B\u82E5 48 \u5C0F\u6642\u5167\u672A\u6536\u5230\u56DE\u8986\uFF0C\u8ACB\u6AA2\u67E5\u5783\u573E\u4FE1\u7BB1\uFF09\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    items: [{
      label: "預約編號",
      value: data.bookingId || "HP-2606-0148"
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
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-plus"
    })
  }, "\u52A0\u5165\u884C\u4E8B\u66C6"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "image"
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
// Gallery — masonry grid：每個故事的「封面＋全部照片」都各自成為一張可點的圖卡
// 點任一張 → 開啟該故事燈箱（行為不變，仍是完整故事）
function GalleryGrid({
  items,
  onOpen
}) {
  const {
    Badge,
    IconButton
  } = window.HenryStudioRemix_704588;
  // 展平：每個故事的每一張 shot 都是一個 tile（si 為該故事內的索引，0 為封面）
  const tiles = [];
  items.forEach(it => it.shots.forEach((shot, si) => tiles.push({
    it,
    shot,
    si
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: "gallery-masonry",
    style: {
      columnWidth: 300,
      columnGap: 18,
      padding: "0 clamp(20px, 4vw, 40px) 80px"
    }
  }, tiles.map(({
    it,
    shot,
    si
  }) => /*#__PURE__*/React.createElement("figure", {
    key: it.id + "-" + shot + "-" + si,
    onClick: () => onOpen(it, si),
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
    id: shot,
    src: `../../assets/slots/${shot}.jpg`,
    alt: it.title,
    imgStyle: {
      aspectRatio: si === 0 && it.span === 2 ? "4 / 5" : "4 / 3",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
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
  }, it.loc, " \xB7 \u7B2C ", si + 1, " / ", it.shots.length, " \u5F35")), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "images"
    }),
    label: "\u6253\u958B\u6545\u4E8B",
    variant: "frost",
    size: "sm"
  }))))));
}
window.GalleryGrid = GalleryGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gallery/GalleryGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/gallery/Lightbox.jsx
try { (() => {
// Gallery — 故事燈箱：主圖 + 故事內縮圖列；左右鍵切換同故事照片
function Lightbox({
  item,
  onClose,
  onPrevStory,
  onNextStory,
  initialShot
}) {
  const {
    IconButton,
    Badge,
    Button
  } = window.HenryStudioRemix_704588;
  const [shotIdx, setShotIdx] = React.useState(0);
  React.useEffect(() => {
    setShotIdx(initialShot || 0);
  }, [item && item.id, initialShot]);
  React.useEffect(() => {
    if (!item) return;
    const h = e => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setShotIdx(i => (i - 1 + item.shots.length) % item.shots.length);
      if (e.key === "ArrowRight") setShotIdx(i => (i + 1) % item.shots.length);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [item]);
  if (!item) return null;
  const shots = item.shots;
  const cur = shots[Math.min(shotIdx, shots.length - 1)];
  const src = id => window.henryImg(id, `../../assets/slots/${id}.jpg`);
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
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      padding: "32px 40px 24px"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      minHeight: 0,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-left"
    }),
    label: "\u4E0A\u4E00\u5F35",
    variant: "frost",
    size: "lg",
    onClick: () => setShotIdx(i => (i - 1 + shots.length) % shots.length),
    style: {
      position: "absolute",
      left: 0,
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: src(cur),
    alt: item.title,
    style: {
      maxWidth: "calc(100% - 96px)",
      maxHeight: "100%",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-xl)"
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right"
    }),
    label: "\u4E0B\u4E00\u5F35",
    variant: "frost",
    size: "lg",
    onClick: () => setShotIdx(i => (i + 1) % shots.length),
    style: {
      position: "absolute",
      right: 0,
      zIndex: 2
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "lb-strip",
    style: {
      display: "flex",
      gap: 10,
      flexShrink: 0
    }
  }, shots.map((id, i) => /*#__PURE__*/React.createElement("button", {
    key: id,
    type: "button",
    onClick: () => setShotIdx(i),
    "aria-label": `第 ${i + 1} 張`,
    style: {
      width: 76,
      height: 56,
      padding: 0,
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      cursor: "pointer",
      border: i === shotIdx ? "2px solid var(--snow)" : "2px solid transparent",
      opacity: i === shotIdx ? 1 : 0.55,
      transition: "opacity var(--dur-base) var(--ease-out)",
      background: "transparent"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src(id),
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }))))), /*#__PURE__*/React.createElement("aside", {
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
    tone: "brand"
  }, "\u6545\u4E8B"), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "x"
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
  }, item.loc, " \xB7 2026 \u96EA\u5B63")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      lineHeight: 1.75,
      borderTop: "1px solid var(--divider)",
      paddingTop: 16
    }
  }, item.desc), /*#__PURE__*/React.createElement("div", {
    className: "ds-meta",
    style: {
      color: "var(--text-muted)"
    }
  }, shotIdx + 1, " / ", shots.length), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left"
    }),
    onClick: onPrevStory
  }, "\u4E0A\u4E00\u500B\u6545\u4E8B"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    }),
    onClick: onNextStory
  }, "\u4E0B\u4E00\u500B\u6545\u4E8B"))));
}
window.Lightbox = Lightbox;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gallery/Lightbox.jsx", error: String((e && e.message) || e) }); }

// ui_kits/gallery/data.jsx
try { (() => {
// Gallery — 故事資料集（每個故事含多張照片，shots[0] 為封面）
// 所有 shots 的字串都是「圖片槽 id」，對應 assets/slots/<id>.jpg，可在媒體管理後台更換
window.GALLERY_STORIES = [{
  id: 1,
  slug: "niseko-yotei",
  title: "二世谷・羊蹄山",
  loc: "NISEKO",
  cat: "portrait",
  span: 2,
  desc: "白色雪衣、HEAD雙板，羊蹄山在身後清晰矗立。藍天無雲，新雪還沒有腳印——這樣的早晨，最適合出發。",
  shots: ["photo-peak-mist", "story-mist-ridge-2", "story-mist-ridge-3", "niseko-yotei-xmqex3hbq", "niseko-yotei-xmqex3k66", "niseko-yotei-xmqp3xlyn", "niseko-yotei-xmqp3ymll", "niseko-yotei-xmqp3yxtx"]
}, {
  id: 2,
  slug: "chairlift-pair",
  title: "雪場合影",
  loc: "Annupuri",
  cat: "portrait",
  span: 1,
  desc: "大雪紛飛的纜椅上，兩個人靠在一起。雪打在護目鏡上，但沒有人想撐傘。這段上山的路，比山頂更值得記住。",
  shots: ["photo-slope-dawn", "story-slope-dawn-2", "story-slope-dawn-3", "chairlift-pair-xmqp40c49", "chairlift-pair-xmqp40z4w", "chairlift-pair-xmqp41lqf", "chairlift-pair-xmqp42rl2", "chairlift-pair-xmqp4332r", "chairlift-pair-xmqp43f7a"]
}, {
  id: 3,
  slug: "gondola-yotei",
  title: "山頂纜車時刻",
  loc: "Hirafu",
  cat: "portrait",
  span: 2,
  desc: "纜車鋼索拉成一條斜線，羊蹄山在遠方展開。單板懸在空中，人也懸在空中——這是屬於Hirafu的一張照片。",
  shots: ["photo-powder-run", "story-gondola-2", "story-gondola-3", "gondola-yotei-xmqp448g5", "gondola-yotei-xmqp44o5s", "gondola-yotei-xmqp44utf"]
}, {
  id: 4,
  slug: "sb-jump",
  title: "單板・跳台時刻",
  loc: "Hanazono",
  cat: "powder",
  span: 1,
  desc: "橘色Capita板飛離地面，纜車箱在左下角靜靜駛過。跳台旁的樹還掛著雪，按下快門的瞬間，一切都定格了。",
  shots: ["photo-summit-blue", "story-penguin-2", "story-penguin-3", "sb-jump-xmqp4hehu", "sb-jump-xmqp4j8id", "sb-jump-xmqp4jtqi", "sb-jump-xmqp4kmoa"]
}, {
  id: 5,
  slug: "sb-ride-yotei",
  title: "單板・滑行時刻",
  loc: "NISEKO",
  cat: "portrait",
  span: 1,
  desc: "Cosmic Surf板豎在身邊，羊蹄山佔滿了整個天空。這個位置，是二世谷最容易找到、最難忘記的地方。",
  shots: ["photo-forest-valley", "story-gondola-view-2", "story-gondola-view-3", "sb-ride-yotei-xmqp490k9", "sb-ride-yotei-xmqp4d1np", "sb-ride-yotei-xmqp4dh6u", "sb-ride-yotei-xmqp4dqbr", "sb-ride-yotei-xmqp4ebr2", "sb-ride-yotei-xmqp4eqzq", "sb-ride-yotei-xmqp4f195"]
}, {
  id: 6,
  slug: "portrait-snow",
  title: "人像特寫",
  loc: "Rusutsu",
  cat: "portrait",
  span: 2,
  desc: "粉色雪衣、Burton板躺在旁邊，她閉上眼睛攤在雪地裡。是摔了，還是累了，還是兩者都有——答案不重要，這一刻才是。",
  shots: ["photo-hero-ridge", "story-summit-view-2", "story-summit-view-3", "portrait-snow-xmqp4nzus", "portrait-snow-xmqp4o8zn", "portrait-snow-xmqp4omuj", "portrait-snow-xmqp4pt3t", "portrait-snow-xmqp4q24s", "portrait-snow-xmqp4qi60", "portrait-snow-xmqp4rd2l", "portrait-snow-xmqp4rrep", "portrait-snow-xmqp4s1rn", "portrait-snow-xmqp4t68h", "portrait-snow-xmqp4tntx", "portrait-snow-xmqp4wef8", "portrait-snow-xmqp4wjmo", "portrait-snow-xmqp4ws7a", "portrait-snow-xmqp4wz6a", "portrait-snow-xmqp4x2wi"]
}, {
  id: 7,
  slug: "ski-jump",
  title: "雙板・跳台時刻",
  loc: "Hanazono",
  cat: "powder",
  span: 1,
  desc: "雙板壓上鐵欄，滑桿在腳下一閃而過。雪場燈光、纜車、霧氣全在後面——跳台的這一秒，什麼都有了。",
  shots: ["story-dawn-line-1", "story-dawn-line-2", "story-dawn-line-3", "ski-jump-xmqp4g8y2", "ski-jump-xmqp4gtwr"]
}, {
  id: 8,
  slug: "ski-ride-mist",
  title: "雙板・滑行時刻",
  loc: "NISEKO",
  cat: "powder",
  span: 1,
  desc: "霧裡的山只剩輪廓，灰色壓著灰色。看不清前方的時候，反而更專注腳下的每一個轉彎。",
  shots: ["ski-ride-mist-xmqex256k", "ski-ride-mist-xmqp3vxi4", "ski-ride-mist-xmqp4l07v", "ski-ride-mist-xmqp4lpq5", "ski-ride-mist-xmqp4m00y", "ski-ride-mist-xmqp4mih3"]
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

// ui_kits/shared/Icon.jsx
try { (() => {
// Shared — React 安全版 Lucide 圖示
// 問題：lucide.createIcons() 會把 <i data-lucide> 直接換成 <svg>。若那個 <i> 是 React（JSX）
// 渲染的，React 之後要移除/更新節點時會找不到原本的 <i>，丟出
// "removeChild ... is not a child of this node" 錯誤（多步驟表單按上一步時最常見）。
// 解法：React 只管理外層 <span>；內部的 <i>→<svg> 由命令式 DOM 操作處理，兩者互不干擾。
function Icon({
  name,
  size,
  style,
  className
}) {
  const ref = React.useRef(null);
  React.useLayoutEffect(() => {
    const span = ref.current;
    if (!span || !name) return;
    span.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    span.appendChild(i);
    if (window.lucide && window.lucide.createIcons) {
      try {
        window.lucide.createIcons();
      } catch (e) {}
    }
    const svg = span.querySelector("svg");
    if (svg) {
      svg.style.display = "block";
      if (size) {
        svg.setAttribute("width", size);
        svg.setAttribute("height", size);
      }
    }
    return () => {
      try {
        span.innerHTML = "";
      } catch (e) {}
    };
  }, [name, size]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: className,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shared/Icon.jsx", error: String((e && e.message) || e) }); }

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
    Button
  } = window.HenryStudioRemix_704588;
  const items = [{
    slot: "photo-peak-mist",
    title: "二世谷・羊蹄山",
    loc: "NISEKO",
    kind: "山景"
  }, {
    slot: "photo-slope-dawn",
    title: "雪場合影",
    loc: "Annupuri",
    kind: "情侶"
  }, {
    slot: "photo-powder-run",
    title: "山頂纜車時刻",
    loc: "Hirafu",
    kind: "山景"
  }, {
    slot: "photo-hero-ridge",
    title: "人像特寫",
    loc: "Rusutsu",
    kind: "人像"
  }, {
    slot: "photo-forest-valley",
    title: "單板・滑行時刻",
    loc: "NISEKO",
    kind: "人像"
  }, {
    slot: "photo-summit-blue",
    title: "單板・跳台時刻",
    loc: "Hanazono",
    kind: "人像"
  }, {
    slot: "story-dawn-line-1",
    title: "雙板・跳台時刻",
    loc: "Hanazono",
    kind: "人像"
  }, {
    slot: "ski-ride-mist-xmqex256k",
    title: "雙板・滑行時刻",
    loc: "NISEKO",
    kind: "人像"
  }];
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
  }, "\u96EA\u5730\u7684\u6545\u4E8B\uFF0C\u9010\u683C\u6536\u85CF"))), /*#__PURE__*/React.createElement("div", {
    className: "fw-grid",
    style: {
      display: "grid",
      gap: 22
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    coverHeight: 230,
    interactive: true,
    onClick: () => onNav && onNav("work"),
    cover: /*#__PURE__*/React.createElement(EditableImage, {
      id: it.slot,
      src: `../../assets/slots/${it.slot}.jpg`,
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
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
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
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 40,
    style: {
      color: "var(--ice-300)",
      margin: "0 auto 20px",
      pointerEvents: "none"
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
  }, "\u300C\u6700\u61C2\u6ED1\u96EA\u8005\u7684\u651D\u5F71\u5E2B\uFF0C\u5448\u73FE\u4F60\u6700\u771F\u5BE6\u7684\u96EA\u5730\u6545\u4E8B\u3002\u300D"), /*#__PURE__*/React.createElement("p", {
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
  }, "\u6ED1\u96EA\u6559\u7DF4 x \u5F71\u50CF\u81EA\u7531\u5DE5\u4F5C\u8005", /*#__PURE__*/React.createElement("br", null), "\u8207\u4F60\u4E26\u80A9\u5728\u98A8\u96EA\u4E2D\u524D\u884C\u7684\u5925\u4F34")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: "var(--snow)",
      fontSize: "var(--text-base)",
      marginBottom: 14
    }
  }, "\u6E96\u5099\u597D\u51FA\u767C\u4E86\u55CE\uFF1F"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
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

// 雪況預設：每種雪況的密度、大小、速度、雪花字符與飄移幅度
function buildHeroFlakes(variant) {
  const PRESETS = {
    "冰晶": {
      n: 46,
      sz: [10, 22],
      glyph: ["❄", "❅", "❆"],
      dur: [7, 13],
      amp: [8, 22],
      sway: [2.5, 5],
      blur: [0, 0.6],
      op: [.55, .95]
    },
    "細雪": {
      n: 84,
      sz: [6, 12],
      glyph: ["❄", "❅", "•", "·"],
      dur: [5, 9],
      amp: [4, 12],
      sway: [1.8, 3.6],
      blur: [0, 0.4],
      op: [.4, .8]
    },
    "鵝毛大雪": {
      n: 30,
      sz: [18, 38],
      glyph: ["❄", "❆"],
      dur: [9, 16],
      amp: [10, 30],
      sway: [3, 6],
      blur: [.3, 1.5],
      op: [.5, .9]
    },
    "薄霧飄雪": {
      n: 40,
      sz: [9, 20],
      glyph: ["❄", "❅", "❆"],
      dur: [8, 14],
      amp: [8, 22],
      sway: [3, 5.5],
      blur: [.5, 1.3],
      op: [.45, .85]
    }
  };
  const c = PRESETS[variant] || PRESETS["冰晶"];
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const mobile = typeof window !== "undefined" && window.matchMedia("(max-width: 820px)").matches;
  const n = mobile ? Math.round(c.n * 0.45) : c.n; // fewer flakes on phones
  const maxBlur = mobile ? 0.3 : Infinity; // blur is paint-heavy on mobile
  return Array.from({
    length: n
  }, (_, i) => ({
    id: i,
    x: rnd(0, 100),
    sz: rnd(c.sz[0], c.sz[1]),
    dur: rnd(c.dur[0], c.dur[1]),
    delay: -rnd(0, c.dur[1]),
    amp: rnd(c.amp[0], c.amp[1]),
    sway: rnd(c.sway[0], c.sway[1]),
    swayDelay: -rnd(0, 3),
    blur: Math.min(rnd(c.blur[0], c.blur[1]), maxBlur),
    op: rnd(c.op[0], c.op[1]),
    rot: (Math.random() < .5 ? -1 : 1) * rnd(40, 170),
    glyph: pick(c.glyph)
  }));
}
function Snowfall({
  variant
}) {
  const flakes = React.useMemo(() => buildHeroFlakes(variant), [variant]);
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "hero-snowfall",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      overflow: "hidden"
    }
  }, variant === "薄霧飄雪" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(125% 80% at 50% 0%, rgba(233,245,250,0.20), transparent 62%)"
    }
  }), flakes.map(f => /*#__PURE__*/React.createElement("span", {
    key: f.id,
    style: {
      position: "absolute",
      left: f.x + "%",
      top: 0,
      animation: `heroFlakeFall ${f.dur}s linear ${f.delay}s infinite`,
      willChange: "transform, opacity",
      backfaceVisibility: "hidden",
      "--rot": f.rot + "deg",
      "--op": f.op
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      fontSize: f.sz + "px",
      lineHeight: 1,
      color: "#ffffff",
      filter: f.blur ? `blur(${f.blur}px)` : "none",
      textShadow: "0 0 6px rgba(255,255,255,.4)",
      animation: `heroFlakeSway ${f.sway}s ease-in-out ${f.swayDelay}s infinite alternate`,
      "--amp": f.amp + "px"
    }
  }, f.glyph))));
}
function Hero({
  onNav,
  motion = "滑刃光痕",
  snowStyle = "冰晶"
}) {
  const {
    Button,
    MetaRow
  } = window.HenryStudioRemix_704588;
  const [videoOpen, setVideoOpen] = React.useState(false);
  const secRef = React.useRef(null);
  const [hover, setHover] = React.useState(false);
  const [pos, setPos] = React.useState({
    x: 0.5,
    y: 0.5,
    px: 0,
    py: 0
  });
  const onMove = e => {
    const el = secRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height,
      px: e.clientX - r.left,
      py: e.clientY - r.top
    });
  };

  // 依模式計算圖片本身的位移/縮放（滑行、推近感）
  let imgTransform = "none";
  let imgTransition = "transform .55s cubic-bezier(.22,.61,.36,1)";
  if (motion === "視差滑行") {
    const dx = pos.x - 0.5,
      dy = pos.y - 0.5;
    imgTransform = hover ? `scale(1.09) translate(${dx * -26}px, ${dy * -18}px)` : "scale(1.02)";
    imgTransition = "transform .4s cubic-bezier(.22,.61,.36,1)";
  } else if (motion === "粉雪飄移") {
    imgTransform = hover ? "scale(1.06)" : "scale(1)";
    imgTransition = "transform 1.3s ease-out";
  } else if (motion === "滑刃光痕") {
    imgTransform = hover ? "scale(1.03)" : "scale(1)";
    imgTransition = "transform .7s ease-out";
  }
  const leftPct = (pos.x * 100).toFixed(2) + "%";
  return /*#__PURE__*/React.createElement("section", {
    ref: secRef,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPos({
        x: 0.5,
        y: 0.5,
        px: 0,
        py: 0
      });
    },
    onMouseMove: onMove,
    style: {
      position: "relative",
      minHeight: "var(--hero-h, min(728px, 92svh))",
      display: "block",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes heroFlakeFall {
          0%   { transform: translate3d(0, -14vh, 0) rotate(0deg); opacity: 0; }
          8%   { opacity: var(--op); }
          90%  { opacity: var(--op); }
          100% { transform: translate3d(0, 116vh, 0) rotate(var(--rot)); opacity: 0; }
        }
        @keyframes heroFlakeSway {
          from { transform: translateX(calc(var(--amp) * -1)); }
          to   { transform: translateX(var(--amp)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-snowfall { display: none; }
        }

        /* ===== Editorial magazine cover layout ===== */
        .hero-mag { position: absolute; inset: 0; pointer-events: none; }
        .hero-mag__frame {
          position: absolute; inset: clamp(14px, 2vw, 26px);
          border: 1px solid rgba(251,251,250,0.30);
          mix-blend-mode: screen;
        }
        .hero-mag__frame::before, .hero-mag__frame::after {
          content: ""; position: absolute; width: 12px; height: 12px;
          border: 1px solid rgba(251,251,250,0.55);
        }
        .hero-mag__frame::before { top: -1px; left: -1px; border-right: 0; border-bottom: 0; }
        .hero-mag__frame::after  { bottom: -1px; right: -1px; border-left: 0; border-top: 0; }

        .hero-edge {
          position: absolute; left: clamp(30px, 4.4vw, 60px); right: clamp(30px, 4.4vw, 60px);
          display: flex; align-items: baseline; justify-content: space-between; gap: 18px;
        }
        .hero-mag__top { top: clamp(28px, 3.6vw, 46px); }
        .hero-mag__bottom {
          bottom: clamp(28px, 3.6vw, 46px); align-items: flex-end;
        }
        .hero-kicker {
          font-family: var(--font-mono); font-size: var(--text-2xs);
          letter-spacing: 0.3em; text-transform: uppercase; color: var(--snow);
          display: inline-flex; align-items: center; gap: 12px;
        }
        .hero-kicker::before {
          content: ""; width: 26px; height: 1px; background: var(--ice-200); display: inline-block;
        }
        .hero-issue {
          font-family: var(--font-mono); font-size: var(--text-2xs);
          letter-spacing: 0.18em; color: var(--ice-100); white-space: nowrap;
        }
        .hero-issue b { color: var(--snow); font-weight: 700; }

        .hero-mag__title {
          position: absolute; inset: 0; margin: 0; color: var(--snow);
          font-family: var(--font-display); font-weight: 600;
        }
        .hl-line {
          position: absolute; margin: 0;
          font-size: clamp(36px, 6.6vw, 86px); line-height: 1.0;
          letter-spacing: var(--tracking-tight);
          text-shadow: 0 2px 34px rgba(28,27,25,0.42);
        }
        .hl-1 { left: clamp(30px, 4.4vw, 60px); top: clamp(96px, 17%, 210px); }
        .hl-2 { right: clamp(44px, 6vw, 92px); bottom: clamp(168px, 27%, 280px); text-align: right; }
        .hl-accent { position: relative; white-space: nowrap; }
        .hl-accent::after {
          content: ""; position: absolute; left: 0; right: 0; bottom: -0.14em;
          height: 4px; border-radius: 4px;
          background: linear-gradient(90deg, var(--ice-300), var(--ice-100));
        }

        .hero-mag__vert {
          position: absolute; right: clamp(9px, 1.4vw, 18px); top: 50%;
          writing-mode: vertical-rl; transform: translateY(-50%);
          font-family: var(--font-mono); font-size: var(--text-2xs);
          letter-spacing: 0.24em; text-transform: uppercase;
          color: rgba(251,251,250,0.78);
          text-shadow: 0 1px 10px rgba(28,27,25,0.5);
        }

        .hero-lede {
          max-width: 380px; margin: 0; color: var(--stone-100);
          font-size: var(--text-base); line-height: 1.66; font-weight: 400;
          text-shadow: 0 1px 18px rgba(28,27,25,0.55);
        }
        .hero-cta { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; justify-content: flex-end; pointer-events: auto; }

        /* keep the text directly clickable/editable while open areas pass through to the image */
        .hero-kicker, .hero-issue, .hero-lede, .hl-line, .hero-mag__vert { pointer-events: auto; }

        @media (max-width: 820px) {
          .hero-mag__vert { display: none; }
          /* 手機：封面放大並上移，讓羊蹄山山頂靠近標題、縮小空隙 */
          .ei-wrap > img { transform: scale(1.2) translateY(-9%); transform-origin: center 40%; }
          .hero-kicker { font-size: var(--text-2xs); letter-spacing: 0.24em; gap: 9px; }
          .hero-kicker::before { width: 20px; }
          .hero-issue { font-size: var(--text-2xs); letter-spacing: 0.14em; }
          /* anchor headline high in the sky so the central subject (羊蹄山) stays clear */
          .hero-mag__title {
            inset: auto clamp(24px, 6vw, 40px); top: clamp(94px, 14vh, 150px); transform: none;
          }
          .hl-line { position: static; right: auto; bottom: auto; left: auto; text-align: left; display: block; }
          .hl-2 { margin-top: 0.16em; }
          .hero-mag__top { flex-direction: column; align-items: flex-start; gap: 6px; }
          .hero-mag__bottom { flex-direction: column; align-items: flex-start; gap: 16px; }
          .hero-cta { justify-content: flex-start; }
        }
        @media (max-width: 480px) {
          .hl-line { font-size: clamp(30px, 9vw, 44px); }
        }
      `), /*#__PURE__*/React.createElement(EditableImage, {
    id: "cover-hero",
    src: "../../assets/slots/cover-hero.jpg",
    alt: "",
    maxEdge: 1920,
    label: "\u66F4\u63DB Cover",
    style: {
      position: "absolute",
      inset: 0,
      transform: imgTransform,
      transition: imgTransition,
      willChange: "transform"
    }
  }), motion === "滑刃光痕" && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      overflow: "hidden",
      opacity: hover ? 1 : 0,
      transition: "opacity .35s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "-20%",
      height: "140%",
      width: 170,
      left: `calc(${leftPct} - 85px)`,
      transform: "skewX(-16deg)",
      filter: "blur(7px)",
      mixBlendMode: "screen",
      background: "linear-gradient(90deg, transparent, rgba(233,245,250,0) 18%, rgba(233,245,250,.5) 50%, rgba(255,255,255,0) 82%, transparent)",
      transition: "left .2s cubic-bezier(.22,.61,.36,1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "-20%",
      height: "140%",
      width: 3,
      left: `calc(${leftPct} - 1.5px)`,
      transform: "skewX(-16deg)",
      filter: "blur(.5px)",
      mixBlendMode: "screen",
      opacity: .75,
      background: "linear-gradient(180deg, transparent, rgba(255,255,255,.9) 45%, rgba(255,255,255,.9) 55%, transparent)",
      transition: "left .12s cubic-bezier(.22,.61,.36,1)"
    }
  })), motion === "冰霜揭幕" && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backdropFilter: "blur(7px) brightness(1.1) saturate(.82)",
      WebkitBackdropFilter: "blur(7px) brightness(1.1) saturate(.82)",
      background: "rgba(222,234,238,0.18)",
      maskImage: `radial-gradient(circle ${hover ? 180 : 0}px at ${pos.px}px ${pos.py}px, transparent 0, transparent 58%, #000 100%)`,
      WebkitMaskImage: `radial-gradient(circle ${hover ? 180 : 0}px at ${pos.px}px ${pos.py}px, transparent 0, transparent 58%, #000 100%)`,
      transition: "-webkit-mask-image .08s linear, mask-image .08s linear"
    }
  }), motion === "粉雪飄移" && /*#__PURE__*/React.createElement(Snowfall, {
    variant: snowStyle
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "linear-gradient(180deg, rgba(28,27,25,0.40) 0%, rgba(28,27,25,0.04) 26%, rgba(28,27,25,0) 52%, rgba(28,27,25,0.10) 74%, rgba(28,27,25,0.56) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-mag"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-mag__frame",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-edge hero-mag__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-kicker"
  }, "FREELANCE SKI IMAGERY"), /*#__PURE__*/React.createElement("span", {
    className: "hero-issue"
  }, "\u5317\u6D77\u9053 / \u4E8C\u4E16\u8C37 \u2014 ", /*#__PURE__*/React.createElement("b", null, "VOL.26"))), /*#__PURE__*/React.createElement("h1", {
    className: "hero-mag__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hl-line hl-1"
  }, "\u6BCF\u4E00\u5E40\u96EA\u570B\u5F71\u50CF\uFF0C"), /*#__PURE__*/React.createElement("span", {
    className: "hl-line hl-2"
  }, "\u8A18\u9304\u8457", /*#__PURE__*/React.createElement("span", {
    className: "hl-accent"
  }, "\u7F8E\u597D"), "\u7684\u56DE\u61B6")), /*#__PURE__*/React.createElement("div", {
    className: "hero-mag__vert",
    "aria-hidden": "true"
  }, "\xA9 HENRY ZHU \xB7 NISEKO HOKKAIDO \xB7 f/2.8 \xB7 1/2000s \xB7 ISO100"), /*#__PURE__*/React.createElement("div", {
    className: "hero-edge hero-mag__bottom"
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, "\u5FEB\u9580\u80CC\u5F8C\u7684\u773C\u775B\uFF0C\u8207\u4F60\u4E26\u80A9\u5728\u98A8\u96EA\u4E2D\u524D\u884C\u3002", /*#__PURE__*/React.createElement("br", null), "\u8A18\u9304\u6311\u6230\u7684\u6C57\u6C34\uFF0C\u4E5F\u5B9A\u683C\u767B\u9802\u7684\u7B11\u5BB9\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    }),
    onClick: () => onNav && onNav("work")
  }, "\u700F\u89BD\u4F5C\u54C1\u96C6"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: "var(--snow)"
    },
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "play"
    }),
    onClick: () => setVideoOpen(true)
  }, "\u89C0\u770B\u5F71\u7247")))), /*#__PURE__*/React.createElement(HeroVideoModal, {
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
    icon: "camera",
    name: "攝影紀錄（照片）",
    price: "NT$ 8,500",
    unit: "/ 1 小時",
    desc: "精選最佳畫面，確保您獲得豐富的留念影像",
    feat: ["實拍 1 小時", "照片張數不設上限", "Google雲端交付成品"],
    tone: "brand",
    badge: "最受歡迎"
  }, {
    icon: "layers",
    name: "完整紀錄（照片＋影片）",
    price: "NT$ 19,500",
    unit: "/ 2 小時",
    desc: "照片與影片一次擁有，静態畫面與動態滑行完整收藏。",
    feat: ["實拍 2 小時", "照片不設上限 ＋ 精選影片", "Google雲端交付成品"],
    tone: "brand",
    featured: true,
    badge: "最完整"
  }, {
    icon: "video",
    name: "雪地跟拍（影片）",
    price: "NT$ 11,000",
    unit: "/ 1 小時",
    desc: "跟拍你的滑行，精選最佳畫面成影像記憶。",
    feat: ["實拍 1 小時", "精選影片", "Google雲端交付成品"],
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
  }, "\u4EE5\u300C\u7D00\u9304\u65C5\u7A0B\u300D\u70BA\u6982\u5FF5\uFF0C\u5B8C\u6574\u6355\u6349\u96EA\u4E0A\u7CBE\u5F69\u77AC\u9593")), /*#__PURE__*/React.createElement("div", {
    className: "packages-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
      gap: 22,
      maxWidth: 1160,
      margin: "0 auto"
    }
  }, packs.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    elevation: p.featured ? "lg" : "sm",
    padding: "28px",
    interactive: true,
    style: {
      cursor: "default",
      ...(p.featured ? {
        border: "1.5px solid var(--ice-300)"
      } : {})
    }
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
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon
  })), p.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, p.badge)), /*#__PURE__*/React.createElement("h3", {
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
      fontSize: "var(--text-sm)",
      whiteSpace: "nowrap"
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
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    style: {
      color: "var(--brand)"
    }
  }), f))), /*#__PURE__*/React.createElement(Button, {
    variant: p.featured ? "primary" : "secondary",
    fullWidth: true,
    onClick: () => onNav && onNav("book", p.name)
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
  const IG_URL = "https://www.instagram.com/henryzjun/";
  const links = [{
    id: "work",
    label: "作品集"
  }, {
    id: "services",
    label: "拍攝方案"
  }, {
    id: "about",
    label: "關於亨利",
    href: IG_URL
  }];
  const go = (e, id) => {
    const link = links.find(l => l.id === id);
    if (link && link.href) {
      e.preventDefault();
      setOpen(false);
      window.open(link.href, "_blank", "noopener");
      return;
    }
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
    href: l.href || `#${l.id}`,
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
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar"
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
    href: l.href || `#${l.id}`,
    className: active === l.id ? "is-active" : "",
    onClick: e => go(e, l.id)
  }, l.label))));
}
window.SiteNav = SiteNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteNav.jsx", error: String((e && e.message) || e) }); }

// 後台/admin.js
try { (() => {
// 後台 — 媒體管理頁邏輯（僅後台使用，不會打包進上架網頁）
//
// 「新增照片」機制：使用者在某個故事按「＋ 新增照片」上傳的圖片，會以新的圖片槽 id
// （storyId + "-x" + 時戳）存進 localStorage，並把這個 id 記在 localStorage 的
// "henry-added" 清單裡（{ storyId: [{id,name}] }）。這些都屬於「待發佈」；發佈時
// Claude 會把圖片寫進 assets/slots/、把槽位加進 slots.js、把 id 接到 data.jsx 對應故事的
// shots 陣列，然後重新打包。發佈成功後按「清除暫存」會一併清掉這些新增暫存與清單。
(function () {
  var grid = document.getElementById("grid");
  var fileInput = document.getElementById("file");
  var banner = document.getElementById("pendingBanner");
  var slotCount = document.getElementById("slotCount");
  var ADDED_KEY = "henry-added";
  var currentSlot = null; // 「更換圖片」目標（既有槽或已新增的暫存）
  var addStory = null; // 「新增照片」目標故事

  function publishedSrc(id) {
    return "../assets/slots/" + id + ".jpg";
  }

  // ===== 新增暫存清單 =====
  function addedMap() {
    try {
      return JSON.parse(localStorage.getItem(ADDED_KEY) || "{}") || {};
    } catch (e) {
      return {};
    }
  }
  function setAddedMap(obj) {
    try {
      localStorage.setItem(ADDED_KEY, JSON.stringify(obj));
    } catch (e) {}
  }
  function addedFor(storyId) {
    return addedMap()[storyId] || [];
  }
  function allAdded() {
    var m = addedMap(),
      out = [];
    Object.keys(m).forEach(function (k) {
      (m[k] || []).forEach(function (a) {
        out.push(a);
      });
    });
    return out;
  }

  // ===== 待發佈統計 =====
  function pendingCount() {
    var n = 0;
    window.HENRY_SLOTS.forEach(function (s) {
      if (window.henryPending(s.id)) n++;
    });
    n += allAdded().length; // 新增的照片本身就是待發佈
    return n;
  }
  function bytesUsed() {
    var tot = 0;
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.indexOf("henry-img-") === 0) tot += (localStorage.getItem(k) || "").length;
    }
    return tot;
  }
  function clearAllPending() {
    if (!confirm("將清除所有「待發佈」暫存圖片（含新增的照片）以釋放瀏覽器空間。\n\n" + "請先確認你已經請 Claude「發佈圖片」且發佈成功 —— 已發佈的圖片都已存進網站檔案，不會遺失。\n\n" + "尚未發佈的變更會消失。要繼續嗎？")) return;
    window.HENRY_SLOTS.forEach(function (s) {
      try {
        localStorage.removeItem(window.henrySlotKey(s.id));
      } catch (e) {}
    });
    allAdded().forEach(function (a) {
      try {
        localStorage.removeItem(window.henrySlotKey(a.id));
      } catch (e) {}
    });
    try {
      localStorage.removeItem(ADDED_KEY);
    } catch (e) {}
    refresh();
  }
  function renderBanner() {
    var n = pendingCount();
    if (n === 0) {
      banner.innerHTML = "目前沒有待發佈的變更 — 訪客看到的就是下方「已發佈」的圖片。";
      return;
    }
    var mb = (bytesUsed() / 1048576).toFixed(2);
    banner.innerHTML = "<strong>有 " + n + " 項待發佈（更換／新增）。</strong> 確認預覽沒問題後，在對話中跟 Claude 說「<strong>發佈圖片</strong>」，即會寫入網站檔案並重新打包上架網頁。" + '<div style="margin-top:11px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">' + '<span style="font-family:var(--font-mono);font-size:12px;color:var(--text-muted)">瀏覽器暫存用量：約 ' + mb + ' MB（上限約 5 MB）</span>' + '<button id="clearPending" class="ad-btn" style="flex:0 0 auto;height:30px;padding:0 14px;border-color:#d97706;color:#b45309">發佈後清除暫存（釋放空間）</button>' + "</div>" + '<p style="margin:8px 0 0;font-size:12px;color:var(--text-muted);line-height:1.55">新增的照片要等發佈後才會出現在作品集；空間不足時請先「發佈圖片」，<strong>發佈成功後</strong>再按此鍵清除暫存。</p>';
    var cb = document.getElementById("clearPending");
    if (cb) cb.addEventListener("click", clearAllPending);
  }

  // ===== 卡片 =====
  // kind: "slot"（既有已發佈槽）｜"added"（新增的待發佈照片）
  function makeCard(opts) {
    var id = opts.id,
      pending = window.henryPending(id);
    var card = document.createElement("div");
    card.className = "ad-card";
    var badge = opts.kind === "added" ? '<span class="ad-badge pend">新增・待發佈</span>' : '<span class="ad-badge ' + (pending ? "pend" : "pub") + '">' + (pending ? "待發佈" : "已發佈") + "</span>";
    var actions = opts.kind === "added" ? '<button class="ad-btn primary" data-act="swap">更換</button><button class="ad-btn" data-act="remove">移除</button>' : '<button class="ad-btn primary" data-act="swap">更換圖片</button>' + (pending ? '<button class="ad-btn" data-act="reset">還原</button>' : "");
    card.innerHTML = '<div class="ad-thumb"><img alt="">' + badge + "</div>" + '<div class="ad-body"><h3></h3><span class="ad-loc"></span><div class="ad-actions">' + actions + "</div></div>";
    var img = card.querySelector("img");
    if (opts.kind === "added") img.src = pending || "";else img.src = pending || publishedSrc(id);
    card.querySelector("h3").textContent = opts.name;
    card.querySelector(".ad-loc").textContent = opts.sub || "";
    card.querySelector('[data-act="swap"]').addEventListener("click", function () {
      currentSlot = {
        id: id,
        maxEdge: opts.maxEdge || 1600
      };
      addStory = null;
      fileInput.click();
    });
    var resetBtn = card.querySelector('[data-act="reset"]');
    if (resetBtn) resetBtn.addEventListener("click", function () {
      try {
        localStorage.removeItem(window.henrySlotKey(id));
      } catch (e) {}
      refresh();
    });
    var removeBtn = card.querySelector('[data-act="remove"]');
    if (removeBtn) removeBtn.addEventListener("click", function () {
      var m = addedMap();
      Object.keys(m).forEach(function (k) {
        m[k] = (m[k] || []).filter(function (a) {
          return a.id !== id;
        });
      });
      setAddedMap(m);
      try {
        localStorage.removeItem(window.henrySlotKey(id));
      } catch (e) {}
      refresh();
    });
    return card;
  }
  function addButtonCard(story) {
    var card = document.createElement("button");
    card.className = "ad-addcard";
    card.innerHTML = '<span class="ad-plus">＋</span><span>新增照片到此故事</span>';
    card.addEventListener("click", function () {
      currentSlot = null;
      addStory = story;
      fileInput.click();
    });
    return card;
  }
  function divider(text) {
    var d = document.createElement("div");
    d.className = "ad-divider";
    d.textContent = text;
    return d;
  }
  function render() {
    var added = allAdded().length;
    var siteSlots = window.HENRY_SLOTS.filter(function (s) {
      return !s.storyId;
    });
    var storyCommitted = window.HENRY_SLOTS.filter(function (s) {
      return s.storyId;
    });
    slotCount.textContent = siteSlots.length + storyCommitted.length + added + " 張";
    grid.innerHTML = "";

    // 網站主要版位
    grid.appendChild(divider("網站主要版位"));
    siteSlots.forEach(function (s) {
      grid.appendChild(makeCard({
        id: s.id,
        name: s.name,
        sub: "使用於：" + s.usedIn,
        maxEdge: s.maxEdge,
        kind: "slot"
      }));
    });

    // 每個故事
    window.HENRY_STORIES.forEach(function (story) {
      var mine = storyCommitted.filter(function (s) {
        return s.storyId === story.id;
      });
      var mineAdded = addedFor(story.id);
      var total = mine.length + mineAdded.length;
      grid.appendChild(divider("故事《" + story.name + "》" + (total === 0 ? "（尚無照片）" : "（" + total + " 張）")));
      mine.forEach(function (s) {
        grid.appendChild(makeCard({
          id: s.id,
          name: s.name,
          sub: "使用於：" + s.usedIn,
          maxEdge: s.maxEdge,
          kind: "slot"
        }));
      });
      mineAdded.forEach(function (a, i) {
        grid.appendChild(makeCard({
          id: a.id,
          name: "新增照片 " + (i + 1),
          sub: "發佈後才會進故事",
          maxEdge: 1600,
          kind: "added"
        }));
      });
      grid.appendChild(addButtonCard(story));
    });
    renderBanner();
  }
  fileInput.addEventListener("change", function (e) {
    var f = e.target.files && e.target.files[0];
    e.target.value = "";
    if (!f) return;
    if (addStory) {
      // 新增一張照片到該故事
      var story = addStory;
      addStory = null;
      var newId = story.id + "-x" + Date.now().toString(36);
      window.henryStoreFile(f, {
        id: newId,
        maxEdge: 1600
      }, function () {
        var m = addedMap();
        if (!m[story.id]) m[story.id] = [];
        m[story.id].push({
          id: newId,
          name: "新增照片"
        });
        setAddedMap(m);
        refresh();
      }, function (msg) {
        alert(msg);
      });
      return;
    }
    if (currentSlot) {
      window.henryStoreFile(f, currentSlot, function () {
        refresh();
      }, function (msg) {
        alert(msg);
      });
    }
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
  window.addEventListener("storage", function (e) {
    if (e.key && (e.key.indexOf("henry-img-") === 0 || e.key === ADDED_KEY)) render();
  });
  render();
  renderStage();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "後台/admin.js", error: String((e && e.message) || e) }); }

// 後台/slots.js
try { (() => {
// 後台共用 — 圖片槽清單與上傳壓縮工具（僅後台使用，不會打包進上架網頁）
//
// HENRY_STORIES：作品集「可見」的故事清單（依作品集顯示順序）。
//   即使某故事目前 0 張真實照片（例如剛建立、還沒上傳），仍列在這裡，
//   後台會顯示它的「＋ 新增照片」按鈕讓你補圖。id 必須與 data.jsx 的 slug 一致。
// HENRY_SLOTS：目前「真實存在」的圖片槽（網站版位 + 各故事已上傳的照片）。
//   預設插圖、暫時隱藏的故事都不列在這裡。每個故事照片槽帶 storyId 連到 HENRY_STORIES。
window.HENRY_STORIES = [{
  id: "niseko-yotei",
  name: "二世谷・羊蹄山"
}, {
  id: "chairlift-pair",
  name: "雪場合影"
}, {
  id: "gondola-yotei",
  name: "山頂纜車時刻"
}, {
  id: "sb-jump",
  name: "單板・跳台時刻"
}, {
  id: "sb-ride-yotei",
  name: "單板・滑行時刻"
}, {
  id: "portrait-snow",
  name: "人像特寫"
}, {
  id: "ski-jump",
  name: "雙板・跳台時刻"
}, {
  id: "ski-ride-mist",
  name: "雙板・滑行時刻"
}];
window.HENRY_SLOTS = [
// ===== 網站主要版位 =====
{
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
},
// ===== 作品集故事照片（只列已上傳的真實照片；第 ① 張為封面）=====
// 前 7 個故事的封面同時也是官網「精選作品」的圖片
{
  id: "photo-peak-mist",
  name: "封面 ①",
  story: "二世谷・羊蹄山",
  storyId: "niseko-yotei",
  usedIn: "作品集＋官網精選",
  maxEdge: 1600
}, {
  id: "story-mist-ridge-2",
  name: "照片 ②",
  story: "二世谷・羊蹄山",
  storyId: "niseko-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "story-mist-ridge-3",
  name: "照片 ③",
  story: "二世谷・羊蹄山",
  storyId: "niseko-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "niseko-yotei-xmqex3hbq",
  name: "照片 ④",
  story: "二世谷・羊蹄山",
  storyId: "niseko-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "niseko-yotei-xmqex3k66",
  name: "照片 ⑤",
  story: "二世谷・羊蹄山",
  storyId: "niseko-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "niseko-yotei-xmqp3xlyn",
  name: "照片 ⑥",
  story: "二世谷・羊蹄山",
  storyId: "niseko-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "niseko-yotei-xmqp3ymll",
  name: "照片 ⑦",
  story: "二世谷・羊蹄山",
  storyId: "niseko-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "niseko-yotei-xmqp3yxtx",
  name: "照片 ⑧",
  story: "二世谷・羊蹄山",
  storyId: "niseko-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "photo-slope-dawn",
  name: "封面 ①",
  story: "雪場合影",
  storyId: "chairlift-pair",
  usedIn: "作品集＋官網精選",
  maxEdge: 1600
}, {
  id: "story-slope-dawn-2",
  name: "照片 ②",
  story: "雪場合影",
  storyId: "chairlift-pair",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "story-slope-dawn-3",
  name: "照片 ③",
  story: "雪場合影",
  storyId: "chairlift-pair",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "chairlift-pair-xmqp40c49",
  name: "照片 ④",
  story: "雪場合影",
  storyId: "chairlift-pair",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "chairlift-pair-xmqp40z4w",
  name: "照片 ⑤",
  story: "雪場合影",
  storyId: "chairlift-pair",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "chairlift-pair-xmqp41lqf",
  name: "照片 ⑥",
  story: "雪場合影",
  storyId: "chairlift-pair",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "chairlift-pair-xmqp42rl2",
  name: "照片 ⑦",
  story: "雪場合影",
  storyId: "chairlift-pair",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "chairlift-pair-xmqp4332r",
  name: "照片 ⑧",
  story: "雪場合影",
  storyId: "chairlift-pair",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "chairlift-pair-xmqp43f7a",
  name: "照片 ⑨",
  story: "雪場合影",
  storyId: "chairlift-pair",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "photo-powder-run",
  name: "封面 ①",
  story: "山頂纜車時刻",
  storyId: "gondola-yotei",
  usedIn: "作品集＋官網精選",
  maxEdge: 1600
}, {
  id: "story-gondola-2",
  name: "照片 ②",
  story: "山頂纜車時刻",
  storyId: "gondola-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "story-gondola-3",
  name: "照片 ③",
  story: "山頂纜車時刻",
  storyId: "gondola-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "gondola-yotei-xmqp448g5",
  name: "照片 ④",
  story: "山頂纜車時刻",
  storyId: "gondola-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "gondola-yotei-xmqp44o5s",
  name: "照片 ⑤",
  story: "山頂纜車時刻",
  storyId: "gondola-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "gondola-yotei-xmqp44utf",
  name: "照片 ⑥",
  story: "山頂纜車時刻",
  storyId: "gondola-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "photo-summit-blue",
  name: "封面 ①",
  story: "單板・跳台時刻",
  storyId: "sb-jump",
  usedIn: "作品集＋官網精選",
  maxEdge: 1600
}, {
  id: "story-penguin-2",
  name: "照片 ②",
  story: "單板・跳台時刻",
  storyId: "sb-jump",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "story-penguin-3",
  name: "照片 ③",
  story: "單板・跳台時刻",
  storyId: "sb-jump",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "sb-jump-xmqp4hehu",
  name: "照片 ④",
  story: "單板・跳台時刻",
  storyId: "sb-jump",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "sb-jump-xmqp4j8id",
  name: "照片 ⑤",
  story: "單板・跳台時刻",
  storyId: "sb-jump",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "sb-jump-xmqp4jtqi",
  name: "照片 ⑥",
  story: "單板・跳台時刻",
  storyId: "sb-jump",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "sb-jump-xmqp4kmoa",
  name: "照片 ⑦",
  story: "單板・跳台時刻",
  storyId: "sb-jump",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "photo-forest-valley",
  name: "封面 ①",
  story: "單板・滑行時刻",
  storyId: "sb-ride-yotei",
  usedIn: "作品集＋官網精選",
  maxEdge: 1600
}, {
  id: "story-gondola-view-2",
  name: "照片 ②",
  story: "單板・滑行時刻",
  storyId: "sb-ride-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "story-gondola-view-3",
  name: "照片 ③",
  story: "單板・滑行時刻",
  storyId: "sb-ride-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "sb-ride-yotei-xmqp490k9",
  name: "照片 ④",
  story: "單板・滑行時刻",
  storyId: "sb-ride-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "sb-ride-yotei-xmqp4d1np",
  name: "照片 ⑤",
  story: "單板・滑行時刻",
  storyId: "sb-ride-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "sb-ride-yotei-xmqp4dh6u",
  name: "照片 ⑥",
  story: "單板・滑行時刻",
  storyId: "sb-ride-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "sb-ride-yotei-xmqp4dqbr",
  name: "照片 ⑦",
  story: "單板・滑行時刻",
  storyId: "sb-ride-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "sb-ride-yotei-xmqp4ebr2",
  name: "照片 ⑧",
  story: "單板・滑行時刻",
  storyId: "sb-ride-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "sb-ride-yotei-xmqp4eqzq",
  name: "照片 ⑨",
  story: "單板・滑行時刻",
  storyId: "sb-ride-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "sb-ride-yotei-xmqp4f195",
  name: "照片 ⑩",
  story: "單板・滑行時刻",
  storyId: "sb-ride-yotei",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "photo-hero-ridge",
  name: "封面 ①",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集＋官網精選",
  maxEdge: 1600
}, {
  id: "story-summit-view-2",
  name: "照片 ②",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "story-summit-view-3",
  name: "照片 ③",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4nzus",
  name: "照片 ④",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4o8zn",
  name: "照片 ⑤",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4omuj",
  name: "照片 ⑥",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4pt3t",
  name: "照片 ⑦",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4q24s",
  name: "照片 ⑧",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4qi60",
  name: "照片 ⑨",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4rd2l",
  name: "照片 ⑩",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4rrep",
  name: "照片 ⑪",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4s1rn",
  name: "照片 ⑫",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4t68h",
  name: "照片 ⑬",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4tntx",
  name: "照片 ⑭",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4wef8",
  name: "照片 ⑮",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4wjmo",
  name: "照片 ⑯",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4ws7a",
  name: "照片 ⑰",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4wz6a",
  name: "照片 ⑱",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "portrait-snow-xmqp4x2wi",
  name: "照片 ⑲",
  story: "人像特寫",
  storyId: "portrait-snow",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "story-dawn-line-1",
  name: "封面 ①",
  story: "雙板・跳台時刻",
  storyId: "ski-jump",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "story-dawn-line-2",
  name: "照片 ②",
  story: "雙板・跳台時刻",
  storyId: "ski-jump",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "story-dawn-line-3",
  name: "照片 ③",
  story: "雙板・跳台時刻",
  storyId: "ski-jump",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "ski-jump-xmqp4g8y2",
  name: "照片 ④",
  story: "雙板・跳台時刻",
  storyId: "ski-jump",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "ski-jump-xmqp4gtwr",
  name: "照片 ⑤",
  story: "雙板・跳台時刻",
  storyId: "ski-jump",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "ski-ride-mist-xmqex256k",
  name: "封面 ①",
  story: "雙板・滑行時刻",
  storyId: "ski-ride-mist",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "ski-ride-mist-xmqp3vxi4",
  name: "照片 ②",
  story: "雙板・滑行時刻",
  storyId: "ski-ride-mist",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "ski-ride-mist-xmqp4l07v",
  name: "照片 ③",
  story: "雙板・滑行時刻",
  storyId: "ski-ride-mist",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "ski-ride-mist-xmqp4lpq5",
  name: "照片 ④",
  story: "雙板・滑行時刻",
  storyId: "ski-ride-mist",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "ski-ride-mist-xmqp4m00y",
  name: "照片 ⑤",
  story: "雙板・滑行時刻",
  storyId: "ski-ride-mist",
  usedIn: "作品集",
  maxEdge: 1600
}, {
  id: "ski-ride-mist-xmqp4mih3",
  name: "照片 ⑥",
  story: "雙板・滑行時刻",
  storyId: "ski-ride-mist",
  usedIn: "作品集",
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
      onError("瀏覽器儲存空間不足：請先「還原」其他圖片或先發佈，再繼續更換。");
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
