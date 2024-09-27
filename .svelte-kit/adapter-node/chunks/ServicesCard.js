import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: ".card.svelte-lq4eu3{width:100%;height:355px;-webkit-box-shadow:0px 4px 4px 0px rgba(0,0,0,0.25);-moz-box-shadow:0px 4px 4px 0px rgba(0,0,0,0.25);box-shadow:0px 4px 4px 0px rgba(0,0,0,0.25);border-radius:10px;overflow:hidden}.image-box.svelte-lq4eu3{width:100%;height:100%;position:relative}@media screen and (min-width: 800px){.card.svelte-lq4eu3{height:355px}}",
  map: '{"version":3,"file":"ServicesCard.svelte","sources":["ServicesCard.svelte"],"sourcesContent":["<div class=\\"card\\">\\n    <div class=\\"image-box\\">\\n        <slot />\\n    </div>\\n</div>\\n\\n<style>\\n    .card {\\n        width: 100%;\\n        /* max-width: 450px; */\\n        height: 355px;\\n        -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);\\n        -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);\\n        box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);\\n        border-radius: 10px;\\n        overflow: hidden;\\n    }\\n\\n    .image-box {\\n        width: 100%;\\n        height: 100%;\\n        /* max-width: 540px; */\\n        /* aspect-ratio: 1; */\\n        /* overflow: hidden; */\\n        position: relative;\\n    }\\n\\n    @media screen and (min-width: 800px) {\\n        .card {\\n            height: 355px;\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAOI,mBAAM,CACF,KAAK,CAAE,IAAI,CAEX,MAAM,CAAE,KAAK,CACb,kBAAkB,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACpD,eAAe,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACjD,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC5C,aAAa,CAAE,IAAI,CACnB,QAAQ,CAAE,MACd,CAEA,wBAAW,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CAIZ,QAAQ,CAAE,QACd,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACjC,mBAAM,CACF,MAAM,CAAE,KACZ,CACJ"}'
};
const ServicesCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="card svelte-lq4eu3"><div class="image-box svelte-lq4eu3">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
export {
  ServicesCard as S
};
