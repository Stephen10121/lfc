import { c as create_ssr_component, l as add_attribute, o as escape } from './exports-C4PoPgez.js';

const css = {
  code: "div.svelte-1thcmz6{width:100%;height:217px;padding:24px;-webkit-box-shadow:0px 4px 4px 0px rgba(0,0,0,0.25);-moz-box-shadow:0px 4px 4px 0px rgba(0,0,0,0.25);box-shadow:0px 4px 4px 0px rgba(0,0,0,0.25);border-radius:10px;background-color:#ffffff;display:flex;flex-direction:column;justify-content:space-evenly}h3.svelte-1thcmz6{font-weight:700;color:#000000;font-size:21px;line-height:35px}p.svelte-1thcmz6{font-weight:normal;color:#6B7280;font-size:14px;line-height:20px}",
  map: '{"version":3,"file":"Card.svelte","sources":["Card.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let icon;\\nexport let iconAlt = \\"Icon of a card.\\";\\nexport let title;\\nexport let p;\\n<\/script>\\n\\n<div>\\n    <img src={icon} alt={iconAlt} width=\\"40\\" height=\\"40\\" />\\n    <h3 class=\\"arimo\\">{title}</h3>\\n    <p class=\\"arimo\\">{p}</p>\\n</div>\\n\\n<style>\\n    div {\\n        width: 100%;\\n        height: 217px;\\n        padding: 24px;\\n        -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);\\n        -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);\\n        box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);\\n        border-radius: 10px;\\n        background-color: #ffffff;\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: space-evenly;\\n    }\\n\\n    h3 {\\n        font-weight: 700;\\n        color: #000000;\\n        font-size: 21px;\\n        line-height: 35px;\\n    }\\n\\n    p {\\n        font-weight: normal;\\n        color: #6B7280;\\n        font-size: 14px;\\n        line-height: 20px;\\n    }\\n</style>"],"names":[],"mappings":"AAaI,kBAAI,CACA,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACpD,eAAe,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACjD,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC5C,aAAa,CAAE,IAAI,CACnB,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,YACrB,CAEA,iBAAG,CACC,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACjB,CAEA,gBAAE,CACE,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACjB"}'
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { iconAlt = "Icon of a card." } = $$props;
  let { title } = $$props;
  let { p } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.iconAlt === void 0 && $$bindings.iconAlt && iconAlt !== void 0) $$bindings.iconAlt(iconAlt);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.p === void 0 && $$bindings.p && p !== void 0) $$bindings.p(p);
  $$result.css.add(css);
  return `<div class="svelte-1thcmz6"><img${add_attribute("src", icon, 0)}${add_attribute("alt", iconAlt, 0)} width="40" height="40"> <h3 class="arimo svelte-1thcmz6">${escape(title)}</h3> <p class="arimo svelte-1thcmz6">${escape(p)}</p> </div>`;
});

export { Card as C };
//# sourceMappingURL=Card-DFzjTtIZ.js.map
