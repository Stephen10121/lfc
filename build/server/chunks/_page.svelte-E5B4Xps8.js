import { c as create_ssr_component, v as validate_component, l as add_attribute } from './exports-C4PoPgez.js';
import { T as Toast, G as GetInTouchSection } from './Toast-Q0jAt-Cb.js';
import { C as Card } from './Card-DFzjTtIZ.js';
import { h as hammer } from './hammer-CY0KkBvA.js';
import { d as dollar } from './dollar-B2YmeJLQ.js';
import { c as clock } from './clock-DlplJt74.js';
import './client-bXB23ZCE.js';

const css$3 = {
  code: "section.svelte-1wl73bk{width:100%;height:100vh;position:relative;display:flex;align-items:center;padding:20px}.text.svelte-1wl73bk{display:flex;flex-direction:column;gap:10px;width:100%}h1.svelte-1wl73bk{font-weight:600;color:#ffffff;font-size:29px;line-height:35px}p.svelte-1wl73bk{font-weight:normal;color:#ffffff;font-size:15px;line-height:20px}.bg-image.svelte-1wl73bk{position:absolute;top:50%;left:50%;transform:translate(-50.1%, -50.1%);width:100%;height:auto;z-index:-1}@media screen and (max-width: 820px){.bg-image.svelte-1wl73bk{min-width:100%;width:auto;min-height:100%;object-fit:cover}}.cover.svelte-1wl73bk{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.445);z-index:-1}@media screen and (min-width: 800px){section.svelte-1wl73bk{padding:150px}.text.svelte-1wl73bk{align-items:center;gap:30px}h1.svelte-1wl73bk{text-align:center;line-height:clamp(3.125rem, 0rem + 6.25vw, 4.6875rem);font-size:clamp(2.1875rem, -1.4375rem + 7.25vw, 4rem)}p.svelte-1wl73bk{font-size:clamp(0.9375rem, 0.3125rem + 1.25vw, 1.25rem)}}",
  map: '{"version":3,"file":"AboutSection1.svelte","sources":["AboutSection1.svelte"],"sourcesContent":["<script context=\\"module\\">\\tconst __DECLARED_ASSET_0__ = \\"/_app/immutable/assets/fence13.C9dZOPwz.avif 540w, /_app/immutable/assets/fence13.wnWRMIIV.avif 768w, /_app/immutable/assets/fence13.BJd7icM2.avif 1080w, /_app/immutable/assets/fence13.BC4GIY5b.avif 1366w, /_app/immutable/assets/fence13.yHS71Ujs.avif 1536w, /_app/immutable/assets/fence13.Co2KRWcF.avif 1920w, /_app/immutable/assets/fence13.DzjZzPt_.avif 2388w\\";\\n\\tconst __DECLARED_ASSET_1__ = \\"/_app/immutable/assets/fence13.88EzMzCU.webp 540w, /_app/immutable/assets/fence13.BW6Sn99z.webp 768w, /_app/immutable/assets/fence13.BQGJnLOk.webp 1080w, /_app/immutable/assets/fence13.B9quBH-d.webp 1366w, /_app/immutable/assets/fence13.24S77jXF.webp 1536w, /_app/immutable/assets/fence13.BGYosF9c.webp 1920w, /_app/immutable/assets/fence13.jXgrfcsi.webp 2388w\\";\\n\\tconst __DECLARED_ASSET_2__ = \\"/_app/immutable/assets/fence13.CMOQiGo_.png 540w, /_app/immutable/assets/fence13.P8UTO81I.png 768w, /_app/immutable/assets/fence13.ByZ2WG_P.png 1080w, /_app/immutable/assets/fence13.BsekYcNb.png 1366w, /_app/immutable/assets/fence13.CWtSir19.png 1536w, /_app/immutable/assets/fence13.CMWcvw55.png 1920w, /_app/immutable/assets/fence13.CP6jhp-B.png 2388w\\";\\n\\tconst __DECLARED_ASSET_3__ = \\"/_app/immutable/assets/fence13.CP6jhp-B.png\\";\\n<\/script>\\n<section>\\n    <picture><source srcset={__DECLARED_ASSET_0__} sizes=\\"(min-width:1920px) 1280px, (min-width: 1080px) 940px, (min-width:250px) 300px\\" type=\\"image/avif\\" /><source srcset={__DECLARED_ASSET_1__} sizes=\\"(min-width:1920px) 1280px, (min-width: 1080px) 940px, (min-width:250px) 300px\\" type=\\"image/webp\\" /><source srcset={__DECLARED_ASSET_2__} sizes=\\"(min-width:1920px) 1280px, (min-width: 1080px) 940px, (min-width:250px) 300px\\" type=\\"image/png\\" /><img loading=\\"lazy\\" role=\\"presentation\\" src={__DECLARED_ASSET_3__} alt=\\"Background fence for the website.\\" decoding=\\"async\\" class=\\"bg-image\\" width=2388 height=3479 /></picture>\\n    <div class=\\"cover\\" />\\n    <div class=\\"text\\">\\n        <h1 class=\\"arimo\\">About Us</h1>\\n        <p class=\\"arimo\\">Empowering Excellence, Every Step of the Way!</p>\\n    </div>\\n</section>\\n\\n<style>\\n    section {\\n        width: 100%;\\n        height: 100vh;\\n        position: relative;\\n        display: flex;\\n        align-items: center;\\n        padding: 20px;\\n    }\\n\\n    .text {\\n        display: flex;\\n        flex-direction: column;\\n        gap: 10px;\\n        width: 100%;\\n    }\\n\\n    h1 {\\n        font-weight: 600;\\n        color: #ffffff;\\n        font-size: 29px;\\n        line-height: 35px;\\n    }\\n\\n    p {\\n        font-weight: normal;\\n        color: #ffffff;\\n        font-size: 15px;\\n        line-height: 20px;\\n    }\\n\\n    .bg-image {\\n        position: absolute;\\n        top: 50%;\\n        left: 50%;\\n        transform: translate(-50.1%, -50.1%);\\n        width: 100%;\\n        height: auto;\\n        z-index: -1;\\n    }\\n\\n    @media screen and (max-width: 820px) {\\n        .bg-image {\\n            min-width: 100%;\\n            width: auto;\\n            min-height: 100%;\\n            object-fit: cover;\\n        }\\n    }\\n\\n    .cover {\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        width: 100%;\\n        height: 100%;\\n        background-color: rgba(0, 0, 0, 0.445);\\n        z-index: -1;\\n    }\\n\\n    @media screen and (min-width: 800px) {\\n        section {\\n            padding: 150px;\\n        }\\n\\n        .text {\\n            align-items: center;\\n            gap: 30px;\\n        }\\n\\n        h1 {\\n            text-align: center;\\n            line-height: clamp(3.125rem, 0rem + 6.25vw, 4.6875rem);\\n            font-size: clamp(2.1875rem, -1.4375rem + 7.25vw, 4rem);\\n        }\\n\\n        p {\\n            font-size: clamp(0.9375rem, 0.3125rem + 1.25vw, 1.25rem);\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAeI,sBAAQ,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IACb,CAEA,oBAAM,CACF,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IACX,CAEA,iBAAG,CACC,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACjB,CAEA,gBAAE,CACE,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACjB,CAEA,wBAAU,CACN,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,MAAM,CAAC,CAAC,MAAM,CAAC,CACpC,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,EACb,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACjC,wBAAU,CACN,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,KAChB,CACJ,CAEA,qBAAO,CACH,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CACtC,OAAO,CAAE,EACb,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACjC,sBAAQ,CACJ,OAAO,CAAE,KACb,CAEA,oBAAM,CACF,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACT,CAEA,iBAAG,CACC,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,MAAM,QAAQ,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,CACtD,SAAS,CAAE,MAAM,SAAS,CAAC,CAAC,UAAU,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,IAAI,CACzD,CAEA,gBAAE,CACE,SAAS,CAAE,MAAM,SAAS,CAAC,CAAC,SAAS,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,OAAO,CAC3D,CACJ"}'
};
const __DECLARED_ASSET_0__$1 = "/_app/immutable/assets/fence13.C9dZOPwz.avif 540w, /_app/immutable/assets/fence13.wnWRMIIV.avif 768w, /_app/immutable/assets/fence13.BJd7icM2.avif 1080w, /_app/immutable/assets/fence13.BC4GIY5b.avif 1366w, /_app/immutable/assets/fence13.yHS71Ujs.avif 1536w, /_app/immutable/assets/fence13.Co2KRWcF.avif 1920w, /_app/immutable/assets/fence13.DzjZzPt_.avif 2388w";
const __DECLARED_ASSET_1__$1 = "/_app/immutable/assets/fence13.88EzMzCU.webp 540w, /_app/immutable/assets/fence13.BW6Sn99z.webp 768w, /_app/immutable/assets/fence13.BQGJnLOk.webp 1080w, /_app/immutable/assets/fence13.B9quBH-d.webp 1366w, /_app/immutable/assets/fence13.24S77jXF.webp 1536w, /_app/immutable/assets/fence13.BGYosF9c.webp 1920w, /_app/immutable/assets/fence13.jXgrfcsi.webp 2388w";
const __DECLARED_ASSET_2__$1 = "/_app/immutable/assets/fence13.CMOQiGo_.png 540w, /_app/immutable/assets/fence13.P8UTO81I.png 768w, /_app/immutable/assets/fence13.ByZ2WG_P.png 1080w, /_app/immutable/assets/fence13.BsekYcNb.png 1366w, /_app/immutable/assets/fence13.CWtSir19.png 1536w, /_app/immutable/assets/fence13.CMWcvw55.png 1920w, /_app/immutable/assets/fence13.CP6jhp-B.png 2388w";
const __DECLARED_ASSET_3__$1 = "/_app/immutable/assets/fence13.CP6jhp-B.png";
const AboutSection1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="svelte-1wl73bk"><picture><source${add_attribute("srcset", __DECLARED_ASSET_0__$1, 0)} sizes="(min-width:1920px) 1280px, (min-width: 1080px) 940px, (min-width:250px) 300px" type="image/avif"><source${add_attribute("srcset", __DECLARED_ASSET_1__$1, 0)} sizes="(min-width:1920px) 1280px, (min-width: 1080px) 940px, (min-width:250px) 300px" type="image/webp"><source${add_attribute("srcset", __DECLARED_ASSET_2__$1, 0)} sizes="(min-width:1920px) 1280px, (min-width: 1080px) 940px, (min-width:250px) 300px" type="image/png"><img loading="lazy" role="presentation"${add_attribute("src", __DECLARED_ASSET_3__$1, 0)} alt="Background fence for the website." decoding="async" class="bg-image svelte-1wl73bk" width="2388" height="3479"></picture> <div class="cover svelte-1wl73bk"></div> <div class="text svelte-1wl73bk" data-svelte-h="svelte-11on9wp"><h1 class="arimo svelte-1wl73bk">About Us</h1> <p class="arimo svelte-1wl73bk">Empowering Excellence, Every Step of the Way!</p></div> </section>`;
});
const css$2 = {
  code: "section.svelte-s5tcgq{width:100%;padding:20px;background-color:#F3F4F6;padding-bottom:40px;display:flex;flex-direction:column-reverse;gap:40px}.p1.svelte-s5tcgq{gap:15px;display:flex;flex-direction:column;align-items:center}.p2.svelte-s5tcgq{width:100%;display:flex;justify-content:center}h2.svelte-s5tcgq{font-weight:700;color:#000000;font-size:29px;line-height:35px}p.svelte-s5tcgq{font-weight:normal;color:#5b5f68;font-size:15px;line-height:30px;max-width:84ch;text-indent:4em}.image-box.svelte-s5tcgq{width:100%;max-width:540px;aspect-ratio:1;overflow:hidden;border-radius:10px;position:relative}@media screen and (min-width: 1200px){section.svelte-s5tcgq{display:grid;grid-template-columns:2fr 3fr;align-items:center;justify-content:center;padding:70px}.p1.svelte-s5tcgq{gap:20px}}",
  map: '{"version":3,"file":"AboutSection2.svelte","sources":["AboutSection2.svelte"],"sourcesContent":["<script context=\\"module\\">\\tconst __DECLARED_ASSET_0__ = \\"/_app/immutable/assets/fence2.8cN3A7H7.avif 540w, /_app/immutable/assets/fence2.3sIkl2_Z.avif 768w, /_app/immutable/assets/fence2.CR893Sj1.avif 1080w, /_app/immutable/assets/fence2.DhF7kMPR.avif 1366w, /_app/immutable/assets/fence2.DtIoahhU.avif 1536w, /_app/immutable/assets/fence2.Bv-s7dg7.avif 1920w, /_app/immutable/assets/fence2.CZ42gD8b.avif 2560w, /_app/immutable/assets/fence2.CrzWPlh3.avif 3000w, /_app/immutable/assets/fence2.dFfoGZTy.avif 4000w\\";\\n\\tconst __DECLARED_ASSET_1__ = \\"/_app/immutable/assets/fence2.DWQF4wif.webp 540w, /_app/immutable/assets/fence2.Bp7F_8tb.webp 768w, /_app/immutable/assets/fence2.BlH3WP_h.webp 1080w, /_app/immutable/assets/fence2.BLmpLjMR.webp 1366w, /_app/immutable/assets/fence2.Bz0TAGtU.webp 1536w, /_app/immutable/assets/fence2.B0TA8A0i.webp 1920w, /_app/immutable/assets/fence2.DYhLXSRz.webp 2560w, /_app/immutable/assets/fence2.D4rspvDu.webp 3000w, /_app/immutable/assets/fence2.B58mWKYu.webp 4000w\\";\\n\\tconst __DECLARED_ASSET_2__ = \\"/_app/immutable/assets/fence2.DjFq682j.png 540w, /_app/immutable/assets/fence2.CkcrfP4t.png 768w, /_app/immutable/assets/fence2.Cl4W5pzm.png 1080w, /_app/immutable/assets/fence2.CZNEBi_r.png 1366w, /_app/immutable/assets/fence2.CxQAaoA1.png 1536w, /_app/immutable/assets/fence2._5vXc4jt.png 1920w, /_app/immutable/assets/fence2.CqDmnari.png 2560w, /_app/immutable/assets/fence2.nM1Tb7e7.png 3000w, /_app/immutable/assets/fence2.CQYUA_H2.png 4000w\\";\\n\\tconst __DECLARED_ASSET_3__ = \\"/_app/immutable/assets/fence2.CQYUA_H2.png\\";\\n<\/script>\\n<section>\\n    <div class=\\"p2\\">\\n        <div class=\\"image-box\\">\\n            <picture><source srcset={__DECLARED_ASSET_0__} sizes=\\"min(700px, 100vw)\\" type=\\"image/avif\\" /><source srcset={__DECLARED_ASSET_1__} sizes=\\"min(700px, 100vw)\\" type=\\"image/webp\\" /><source srcset={__DECLARED_ASSET_2__} sizes=\\"min(700px, 100vw)\\" type=\\"image/png\\" /><img loading=\\"lazy\\" class=\\"image-box-image\\" src={__DECLARED_ASSET_3__} alt=\\"A very nice looking fence.\\" width=4000 height=3000 /></picture>\\n        </div>\\n    </div>\\n    <div class=\\"p1\\">\\n        <h2 class=\\"arimo\\">Who Are We?</h2>\\n        <p class=\\"arimo\\">Local Fence Co is your premier fence contractor in Vancouver, WA, dedicated to transforming your property into a safe and stylish sanctuary. As your trusted local partner, we specialize in fence installation, gate installation, and fence repair services, ensuring that your perimeter is as secure as it is aesthetically pleasing. We understand the importance of a well-crafted fence. It not only enhances the curb appeal of your property but also provides the security and privacy you deserve. Our team of experienced professionals is committed to delivering top-notch fence services tailored to your specific needs.</p>\\n    </div>\\n</section>\\n\\n<style>\\n    section {\\n        width: 100%;\\n        padding: 20px;\\n        background-color: #F3F4F6;\\n        padding-bottom: 40px;\\n        display: flex;\\n        flex-direction: column-reverse;\\n        gap: 40px;\\n    }\\n\\n    .p1 {\\n        gap: 15px;\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n    }\\n\\n    .p2 {\\n        width: 100%;\\n        display: flex;\\n        justify-content: center;\\n    }\\n\\n    h2 {\\n        font-weight: 700;\\n        color: #000000;\\n        font-size: 29px;\\n        line-height: 35px;\\n    }\\n\\n    p {\\n        font-weight: normal;\\n        color: #5b5f68;\\n        font-size: 15px;\\n        line-height: 30px;\\n        max-width: 84ch;\\n        text-indent: 4em;\\n    }\\n\\n    .image-box {\\n        width: 100%;\\n        max-width: 540px;\\n        aspect-ratio: 1;\\n        overflow: hidden;\\n        border-radius: 10px;\\n        position: relative;\\n    }\\n\\n    @media screen and (min-width: 1200px) {\\n        section {\\n            display: grid;\\n            grid-template-columns: 2fr 3fr;\\n            align-items: center;\\n            justify-content: center;\\n            padding: 70px;\\n        }\\n\\n        .p1 {\\n            gap: 20px;\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAkBI,qBAAQ,CACJ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,OAAO,CACzB,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,cAAc,CAC9B,GAAG,CAAE,IACT,CAEA,iBAAI,CACA,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACjB,CAEA,iBAAI,CACA,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACrB,CAEA,gBAAG,CACC,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACjB,CAEA,eAAE,CACE,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GACjB,CAEA,wBAAW,CACP,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,YAAY,CAAE,CAAC,CACf,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,IAAI,CACnB,QAAQ,CAAE,QACd,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAE,CAClC,qBAAQ,CACJ,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,OAAO,CAAE,IACb,CAEA,iBAAI,CACA,GAAG,CAAE,IACT,CACJ"}'
};
const __DECLARED_ASSET_0__ = "/_app/immutable/assets/fence2.8cN3A7H7.avif 540w, /_app/immutable/assets/fence2.3sIkl2_Z.avif 768w, /_app/immutable/assets/fence2.CR893Sj1.avif 1080w, /_app/immutable/assets/fence2.DhF7kMPR.avif 1366w, /_app/immutable/assets/fence2.DtIoahhU.avif 1536w, /_app/immutable/assets/fence2.Bv-s7dg7.avif 1920w, /_app/immutable/assets/fence2.CZ42gD8b.avif 2560w, /_app/immutable/assets/fence2.CrzWPlh3.avif 3000w, /_app/immutable/assets/fence2.dFfoGZTy.avif 4000w";
const __DECLARED_ASSET_1__ = "/_app/immutable/assets/fence2.DWQF4wif.webp 540w, /_app/immutable/assets/fence2.Bp7F_8tb.webp 768w, /_app/immutable/assets/fence2.BlH3WP_h.webp 1080w, /_app/immutable/assets/fence2.BLmpLjMR.webp 1366w, /_app/immutable/assets/fence2.Bz0TAGtU.webp 1536w, /_app/immutable/assets/fence2.B0TA8A0i.webp 1920w, /_app/immutable/assets/fence2.DYhLXSRz.webp 2560w, /_app/immutable/assets/fence2.D4rspvDu.webp 3000w, /_app/immutable/assets/fence2.B58mWKYu.webp 4000w";
const __DECLARED_ASSET_2__ = "/_app/immutable/assets/fence2.DjFq682j.png 540w, /_app/immutable/assets/fence2.CkcrfP4t.png 768w, /_app/immutable/assets/fence2.Cl4W5pzm.png 1080w, /_app/immutable/assets/fence2.CZNEBi_r.png 1366w, /_app/immutable/assets/fence2.CxQAaoA1.png 1536w, /_app/immutable/assets/fence2._5vXc4jt.png 1920w, /_app/immutable/assets/fence2.CqDmnari.png 2560w, /_app/immutable/assets/fence2.nM1Tb7e7.png 3000w, /_app/immutable/assets/fence2.CQYUA_H2.png 4000w";
const __DECLARED_ASSET_3__ = "/_app/immutable/assets/fence2.CQYUA_H2.png";
const AboutSection2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="svelte-s5tcgq"><div class="p2 svelte-s5tcgq"><div class="image-box svelte-s5tcgq"><picture><source${add_attribute("srcset", __DECLARED_ASSET_0__, 0)} sizes="min(700px, 100vw)" type="image/avif"><source${add_attribute("srcset", __DECLARED_ASSET_1__, 0)} sizes="min(700px, 100vw)" type="image/webp"><source${add_attribute("srcset", __DECLARED_ASSET_2__, 0)} sizes="min(700px, 100vw)" type="image/png"><img loading="lazy" class="image-box-image"${add_attribute("src", __DECLARED_ASSET_3__, 0)} alt="A very nice looking fence." width="4000" height="3000"></picture></div></div> <div class="p1 svelte-s5tcgq" data-svelte-h="svelte-1cyq74v"><h2 class="arimo svelte-s5tcgq">Who Are We?</h2> <p class="arimo svelte-s5tcgq">Local Fence Co is your premier fence contractor in Vancouver, WA, dedicated to transforming your property into a safe and stylish sanctuary. As your trusted local partner, we specialize in fence installation, gate installation, and fence repair services, ensuring that your perimeter is as secure as it is aesthetically pleasing. We understand the importance of a well-crafted fence. It not only enhances the curb appeal of your property but also provides the security and privacy you deserve. Our team of experienced professionals is committed to delivering top-notch fence services tailored to your specific needs.</p></div> </section>`;
});
const css$1 = {
  code: "section.svelte-1c966fs{width:100%;position:relative;display:flex;flex-direction:column;align-items:center;padding:20px;gap:15px;background-color:#000000;padding-bottom:40px}h2.svelte-1c966fs{font-weight:700;color:#ffffff;font-size:29px;line-height:35px}p.svelte-1c966fs{font-weight:normal;color:#9CA3A5;font-size:15px;line-height:20px;text-align:center}.cards.svelte-1c966fs{width:100%;display:flex;flex-direction:column;gap:30px;margin-top:15px}@media screen and (min-width: 800px){section.svelte-1c966fs{padding:20px 70px}}@media screen and (min-width: 1200px){section.svelte-1c966fs{padding:20px 150px}}@media screen and (min-width: 1300px){.cards.svelte-1c966fs{flex-direction:row;gap:20px}}",
  map: `{"version":3,"file":"AboutSection3.svelte","sources":["AboutSection3.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Card from \\"$lib/Card.svelte\\";\\nimport hammer from \\"../assets/hammer.svg\\";\\nimport dollar from \\"../assets/dollar.svg\\";\\nimport clock from \\"../assets/clock.svg\\";\\n<\/script>\\n\\n<section>\\n    <h2 class=\\"arimo\\">Why Choose Us</h2>\\n    <p class=\\"arimo\\">Your Success, Our Priority!</p>\\n    <div class=\\"cards\\">\\n        <Card icon={hammer} title=\\"Experience\\" p=\\"With our extensive industry experience, we've consistently delivered outstanding results for clients. Let us demonstrate our expertise for you!\\" />\\n        <Card icon={dollar} title=\\"Affordability\\" p=\\"Our competitive pricing ensures you get exceptional value without compromising quality. Discover affordability with us today!\\" />\\n        <Card icon={clock} title=\\"Efficiency\\" p=\\"Our streamlined processes and quick turnaround times ensure you achieve your goals faster. Experience efficiency with us today!\\" />\\n    </div>\\n</section>\\n\\n<style>\\n    section {\\n        width: 100%;\\n        position: relative;\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        padding: 20px;\\n        gap: 15px;\\n        background-color: #000000;\\n        padding-bottom: 40px;\\n    }\\n\\n    h2 {\\n        font-weight: 700;\\n        color: #ffffff;\\n        font-size: 29px;\\n        line-height: 35px;\\n    }\\n\\n    p {\\n        font-weight: normal;\\n        color: #9CA3A5;\\n        font-size: 15px;\\n        line-height: 20px;\\n        text-align: center;\\n    }\\n\\n    .cards {\\n        width: 100%;\\n        display: flex;\\n        flex-direction: column;\\n        gap: 30px;\\n        margin-top: 15px;\\n    }\\n\\n    @media screen and (min-width: 800px) {\\n        section {\\n            padding: 20px 70px;\\n        }\\n    }\\n\\n    @media screen and (min-width: 1200px) {\\n        section {\\n            padding: 20px 150px;\\n        }\\n    }\\n\\n    @media screen and (min-width: 1300px) {\\n        .cards {\\n            flex-direction: row;\\n            gap: 20px;\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAiBI,sBAAQ,CACJ,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,gBAAgB,CAAE,OAAO,CACzB,cAAc,CAAE,IACpB,CAEA,iBAAG,CACC,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACjB,CAEA,gBAAE,CACE,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,MAChB,CAEA,qBAAO,CACH,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,CACT,UAAU,CAAE,IAChB,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACjC,sBAAQ,CACJ,OAAO,CAAE,IAAI,CAAC,IAClB,CACJ,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAE,CAClC,sBAAQ,CACJ,OAAO,CAAE,IAAI,CAAC,KAClB,CACJ,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAE,CAClC,qBAAO,CACH,cAAc,CAAE,GAAG,CACnB,GAAG,CAAE,IACT,CACJ"}`
};
const AboutSection3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="svelte-1c966fs"><h2 class="arimo svelte-1c966fs" data-svelte-h="svelte-1q3n3hk">Why Choose Us</h2> <p class="arimo svelte-1c966fs" data-svelte-h="svelte-b8ew1a">Your Success, Our Priority!</p> <div class="cards svelte-1c966fs">${validate_component(Card, "Card").$$render(
    $$result,
    {
      icon: hammer,
      title: "Experience",
      p: "With our extensive industry experience, we've consistently delivered outstanding results for clients. Let us demonstrate our expertise for you!"
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      icon: dollar,
      title: "Affordability",
      p: "Our competitive pricing ensures you get exceptional value without compromising quality. Discover affordability with us today!"
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      icon: clock,
      title: "Efficiency",
      p: "Our streamlined processes and quick turnaround times ensure you achieve your goals faster. Experience efficiency with us today!"
    },
    {},
    {}
  )}</div> </section>`;
});
const css = {
  code: "main.svelte-se0q54{isolation:isolate}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import GetInTouchSection from \\"$lib/GetInTouchSection.svelte\\";\\nimport Toast from \\"$lib/Toast.svelte\\";\\nimport AboutSection1 from \\"$lib/about/AboutSection1.svelte\\";\\nimport AboutSection2 from \\"$lib/about/AboutSection2.svelte\\";\\nimport AboutSection3 from \\"$lib/about/AboutSection3.svelte\\";\\nexport let form;\\n<\/script>\\n\\n<svelte:head>\\n    <link rel=\\"canonical\\" href=\\"https://thelocalfenceco.com/about\\" />\\n    <title>About Us - Local Fence Co</title>\\n    <meta name=\\"title\\" content=\\"About Us - Local Fence Co\\" />\\n\\t<meta name=\\"description\\" content=\\"Fence installation and repair business servicing the Clark County area. It's our dedication to provide a quality, affordable service, and 100% satisfaction.\\" />\\n\\n    <!-- Open Graph / Facebook -->\\n    <meta property=\\"og:type\\" content=\\"website\\" />\\n    <meta property=\\"og:url\\" content=\\"https://thelocalfenceco.com/about\\" />\\n    <meta property=\\"og:title\\" content=\\"About Us - Local Fence Co\\" />\\n    <meta property=\\"og:description\\" content=\\"Fence installation and repair business servicing the Clark County area. It's our dedication to provide a quality, affordable service, and 100% satisfaction.\\" />\\n    <meta property=\\"og:image\\" content=\\"https://thelocalfenceco.com/logo.png\\" />\\n\\n    <!-- Twitter -->\\n    <meta property=\\"twitter:card\\" content=\\"summary_large_image\\" />\\n    <meta property=\\"twitter:url\\" content=\\"https://thelocalfenceco.com/about\\" />\\n    <meta property=\\"twitter:title\\" content=\\"About Us - Local Fence Co\\" />\\n    <meta property=\\"twitter:description\\" content=\\"Fence installation and repair business servicing the Clark County area. It's our dedication to provide a quality, affordable service, and 100% satisfaction.\\" />\\n    <meta property=\\"twitter:image\\" content=\\"https://thelocalfenceco.com/logo.png\\" />\\n</svelte:head>\\n\\n{#if form?.success}\\n    <Toast message=\\"Form Sent Successfully\\" />\\n{:else if form && !form.success}\\n    <Toast borderColor=\\"#af3636\\" message=\\"Failed to send form.\\" />\\n{/if}\\n\\n<main>\\n    <AboutSection1 />\\n    <AboutSection2 />\\n    <AboutSection3 />\\n    <GetInTouchSection whereFrom=\\"about-section\\" />\\n</main>\\n\\n<style>\\n    main {\\n        isolation: isolate;\\n    }\\n</style>"],"names":[],"mappings":"AA2CI,kBAAK,CACD,SAAS,CAAE,OACf"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1wtc84t_START --><link rel="canonical" href="https://thelocalfenceco.com/about">${$$result.title = `<title>About Us - Local Fence Co</title>`, ""}<meta name="title" content="About Us - Local Fence Co"><meta name="description" content="Fence installation and repair business servicing the Clark County area. It's our dedication to provide a quality, affordable service, and 100% satisfaction."><meta property="og:type" content="website"><meta property="og:url" content="https://thelocalfenceco.com/about"><meta property="og:title" content="About Us - Local Fence Co"><meta property="og:description" content="Fence installation and repair business servicing the Clark County area. It's our dedication to provide a quality, affordable service, and 100% satisfaction."><meta property="og:image" content="https://thelocalfenceco.com/logo.png"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url" content="https://thelocalfenceco.com/about"><meta property="twitter:title" content="About Us - Local Fence Co"><meta property="twitter:description" content="Fence installation and repair business servicing the Clark County area. It's our dedication to provide a quality, affordable service, and 100% satisfaction."><meta property="twitter:image" content="https://thelocalfenceco.com/logo.png"><!-- HEAD_svelte-1wtc84t_END -->`, ""} ${form?.success ? `${validate_component(Toast, "Toast").$$render($$result, { message: "Form Sent Successfully" }, {}, {})}` : `${form && !form.success ? `${validate_component(Toast, "Toast").$$render(
    $$result,
    {
      borderColor: "#af3636",
      message: "Failed to send form."
    },
    {},
    {}
  )}` : ``}`} <main class="svelte-se0q54">${validate_component(AboutSection1, "AboutSection1").$$render($$result, {}, {}, {})} ${validate_component(AboutSection2, "AboutSection2").$$render($$result, {}, {}, {})} ${validate_component(AboutSection3, "AboutSection3").$$render($$result, {}, {}, {})} ${validate_component(GetInTouchSection, "GetInTouchSection").$$render($$result, { whereFrom: "about-section" }, {}, {})} </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-E5B4Xps8.js.map
