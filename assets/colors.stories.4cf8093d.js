var J=Object.defineProperty;var a=(r,e)=>J(r,"name",{value:e,configurable:!0});import"./index.fb6b0de3.js";import{c as w,A as Q,M as Y}from"./Props.345f6a3b.js";import{j as N,a as D}from"./jsx-runtime.b3cc8cb4.js";import"./iframe.16247353.js";import{c as Z}from"./index.95cd7776.js";import"./string.e64eb47e.js";import"./index.9cb209fb.js";import"./es.map.constructor.0ddf9176.js";import"./es.number.to-fixed.d9218e94.js";function d(){return d=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},d.apply(this,arguments)}a(d,"_extends$1");function V(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}a(V,"_assertThisInitialized");function O(r,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():a(function(n,f){return n.__proto__=f,n},"_setPrototypeOf"),O(r,e)}a(O,"_setPrototypeOf");function ee(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,O(r,e)}a(ee,"_inheritsLoose");function C(r){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():a(function(t){return t.__proto__||Object.getPrototypeOf(t)},"_getPrototypeOf"),C(r)}a(C,"_getPrototypeOf");function re(r){return Function.toString.call(r).indexOf("[native code]")!==-1}a(re,"_isNativeFunction");function te(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}a(te,"_isNativeReflectConstruct");function M(r,e,t){return te()?M=Reflect.construct.bind():M=a(function(f,i,o){var u=[null];u.push.apply(u,i);var s=Function.bind.apply(f,u),p=new s;return o&&O(p,o.prototype),p},"_construct"),M.apply(null,arguments)}a(M,"_construct");function A(r){var e=typeof Map=="function"?new Map:void 0;return A=a(function(n){if(n===null||!re(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,f)}function f(){return M(n,arguments,C(this).constructor)}return a(f,"Wrapper"),f.prototype=Object.create(n.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),O(f,n)},"_wrapNativeSuper"),A(r)}a(A,"_wrapNativeSuper");var h=function(r){ee(e,r);function e(t){var n;return n=r.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,V(n)}return a(e,"PolishedError"),e}(A(Error));function R(r){return Math.round(r*255)}a(R,"colorToInt");function ne(r,e,t){return R(r)+","+R(e)+","+R(t)}a(ne,"convertToInt");function _(r,e,t,n){if(n===void 0&&(n=ne),e===0)return n(t,t,t);var f=(r%360+360)%360/60,i=(1-Math.abs(2*t-1))*e,o=i*(1-Math.abs(f%2-1)),u=0,s=0,p=0;f>=0&&f<1?(u=i,s=o):f>=1&&f<2?(u=o,s=i):f>=2&&f<3?(s=i,p=o):f>=3&&f<4?(s=o,p=i):f>=4&&f<5?(u=o,p=i):f>=5&&f<6&&(u=i,p=o);var g=t-i/2,b=u+g,l=s+g,k=p+g;return n(b,l,k)}a(_,"hslToRgb");var L={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function ae(r){if(typeof r!="string")return r;var e=r.toLowerCase();return L[e]?"#"+L[e]:r}a(ae,"nameToHex");var fe=/^#[a-fA-F0-9]{6}$/,ie=/^#[a-fA-F0-9]{8}$/,oe=/^#[a-fA-F0-9]{3}$/,ue=/^#[a-fA-F0-9]{4}$/,P=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,se=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,pe=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,de=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function x(r){if(typeof r!="string")throw new h(3);var e=ae(r);if(e.match(fe))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(ie)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(oe))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(ue)){var n=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:n}}var f=P.exec(e);if(f)return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10)};var i=se.exec(e.substring(0,50));if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10),alpha:parseFloat(""+i[4])>1?parseFloat(""+i[4])/100:parseFloat(""+i[4])};var o=pe.exec(e);if(o){var u=parseInt(""+o[1],10),s=parseInt(""+o[2],10)/100,p=parseInt(""+o[3],10)/100,g="rgb("+_(u,s,p)+")",b=P.exec(g);if(!b)throw new h(4,e,g);return{red:parseInt(""+b[1],10),green:parseInt(""+b[2],10),blue:parseInt(""+b[3],10)}}var l=de.exec(e.substring(0,50));if(l){var k=parseInt(""+l[1],10),K=parseInt(""+l[2],10)/100,U=parseInt(""+l[3],10)/100,z="rgb("+_(k,K,U)+")",j=P.exec(z);if(!j)throw new h(4,e,z);return{red:parseInt(""+j[1],10),green:parseInt(""+j[2],10),blue:parseInt(""+j[3],10),alpha:parseFloat(""+l[4])>1?parseFloat(""+l[4])/100:parseFloat(""+l[4])}}throw new h(5)}a(x,"parseToRgb");function le(r){var e=r.red/255,t=r.green/255,n=r.blue/255,f=Math.max(e,t,n),i=Math.min(e,t,n),o=(f+i)/2;if(f===i)return r.alpha!==void 0?{hue:0,saturation:0,lightness:o,alpha:r.alpha}:{hue:0,saturation:0,lightness:o};var u,s=f-i,p=o>.5?s/(2-f-i):s/(f+i);switch(f){case e:u=(t-n)/s+(t<n?6:0);break;case t:u=(n-e)/s+2;break;default:u=(e-t)/s+4;break}return u*=60,r.alpha!==void 0?{hue:u,saturation:p,lightness:o,alpha:r.alpha}:{hue:u,saturation:p,lightness:o}}a(le,"rgbToHsl");function m(r){return le(x(r))}a(m,"parseToHsl");var ce=a(function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},"reduceHexValue"),q=ce;function v(r){var e=r.toString(16);return e.length===1?"0"+e:e}a(v,"numberToHex");function $(r){return v(Math.round(r*255))}a($,"colorToHex");function be(r,e,t){return q("#"+$(r)+$(e)+$(t))}a(be,"convertToHex");function T(r,e,t){return _(r,e,t,be)}a(T,"hslToHex");function he(r,e,t){if(typeof r=="number"&&typeof e=="number"&&typeof t=="number")return T(r,e,t);if(typeof r=="object"&&e===void 0&&t===void 0)return T(r.hue,r.saturation,r.lightness);throw new h(1)}a(he,"hsl");function ge(r,e,t,n){if(typeof r=="number"&&typeof e=="number"&&typeof t=="number"&&typeof n=="number")return n>=1?T(r,e,t):"rgba("+_(r,e,t)+","+n+")";if(typeof r=="object"&&e===void 0&&t===void 0&&n===void 0)return r.alpha>=1?T(r.hue,r.saturation,r.lightness):"rgba("+_(r.hue,r.saturation,r.lightness)+","+r.alpha+")";throw new h(2)}a(ge,"hsla");function S(r,e,t){if(typeof r=="number"&&typeof e=="number"&&typeof t=="number")return q("#"+v(r)+v(e)+v(t));if(typeof r=="object"&&e===void 0&&t===void 0)return q("#"+v(r.red)+v(r.green)+v(r.blue));throw new h(6)}a(S,"rgb");function H(r,e,t,n){if(typeof r=="string"&&typeof e=="number"){var f=x(r);return"rgba("+f.red+","+f.green+","+f.blue+","+e+")"}else{if(typeof r=="number"&&typeof e=="number"&&typeof t=="number"&&typeof n=="number")return n>=1?S(r,e,t):"rgba("+r+","+e+","+t+","+n+")";if(typeof r=="object"&&e===void 0&&t===void 0&&n===void 0)return r.alpha>=1?S(r.red,r.green,r.blue):"rgba("+r.red+","+r.green+","+r.blue+","+r.alpha+")"}throw new h(7)}a(H,"rgba");var me=a(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isRgb"),ye=a(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},"isRgba"),ve=a(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isHsl"),we=a(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"},"isHsla");function y(r){if(typeof r!="object")throw new h(8);if(ye(r))return H(r);if(me(r))return S(r);if(we(r))return ge(r);if(ve(r))return he(r);throw new h(8)}a(y,"toColorString");function B(r,e,t){return a(function(){var f=t.concat(Array.prototype.slice.call(arguments));return f.length>=e?r.apply(this,f):B(r,e,f)},"fn")}a(B,"curried");function c(r){return B(r,r.length,[])}a(c,"curry");function xe(r,e){if(e==="transparent")return e;var t=m(e);return y(d({},t,{hue:t.hue+parseFloat(r)}))}a(xe,"adjustHue");c(xe);function F(r,e,t){return Math.max(r,Math.min(e,t))}a(F,"guard");function Fe(r,e){if(e==="transparent")return e;var t=m(e);return y(d({},t,{lightness:F(0,1,t.lightness-parseFloat(r))}))}a(Fe,"darken");c(Fe);function ke(r,e){if(e==="transparent")return e;var t=m(e);return y(d({},t,{saturation:F(0,1,t.saturation-parseFloat(r))}))}a(ke,"desaturate");c(ke);function X(r){if(r==="transparent")return 0;var e=x(r),t=Object.keys(e).map(function(o){var u=e[o]/255;return u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4)}),n=t[0],f=t[1],i=t[2];return parseFloat((.2126*n+.7152*f+.0722*i).toFixed(3))}a(X,"getLuminance");function Ie(r,e){var t=X(r),n=X(e);return parseFloat((t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)).toFixed(2))}a(Ie,"getContrast");function Oe(r,e){if(e==="transparent")return e;var t=m(e);return y(d({},t,{lightness:F(0,1,t.lightness+parseFloat(r))}))}a(Oe,"lighten");c(Oe);function _e(r,e,t){if(e==="transparent")return t;if(t==="transparent")return e;if(r===0)return t;var n=x(e),f=d({},n,{alpha:typeof n.alpha=="number"?n.alpha:1}),i=x(t),o=d({},i,{alpha:typeof i.alpha=="number"?i.alpha:1}),u=f.alpha-o.alpha,s=parseFloat(r)*2-1,p=s*u===-1?s:s+u,g=1+s*u,b=(p/g+1)/2,l=1-b,k={red:Math.floor(f.red*b+o.red*l),green:Math.floor(f.green*b+o.green*l),blue:Math.floor(f.blue*b+o.blue*l),alpha:f.alpha*parseFloat(r)+o.alpha*(1-parseFloat(r))};return H(k)}a(_e,"mix");var je=c(_e),G=je;function Me(r,e){if(e==="transparent")return e;var t=x(e),n=typeof t.alpha=="number"?t.alpha:1,f=d({},t,{alpha:F(0,1,(n*100+parseFloat(r)*100)/100)});return H(f)}a(Me,"opacify");c(Me);function Te(r,e){if(e==="transparent")return e;var t=m(e);return y(d({},t,{saturation:F(0,1,t.saturation+parseFloat(r))}))}a(Te,"saturate");c(Te);function He(r,e){return e==="transparent"?e:y(d({},m(e),{hue:parseFloat(r)}))}a(He,"setHue");c(He);function Re(r,e){return e==="transparent"?e:y(d({},m(e),{lightness:parseFloat(r)}))}a(Re,"setLightness");c(Re);function Pe(r,e){return e==="transparent"?e:y(d({},m(e),{saturation:parseFloat(r)}))}a(Pe,"setSaturation");c(Pe);function $e(r,e){return e==="transparent"?e:G(parseFloat(r),"rgb(0, 0, 0)",e)}a($e,"shade");c($e);function Ce(r,e){return e==="transparent"?e:G(parseFloat(r),"rgb(255, 255, 255)",e)}a(Ce,"tint");c(Ce);function Ae(r,e){if(e==="transparent")return e;var t=x(e),n=typeof t.alpha=="number"?t.alpha:1,f=d({},t,{alpha:F(0,1,+(n*100-parseFloat(r)*100).toFixed(2)/100)});return H(f)}a(Ae,"transparentize");c(Ae);function qe(){return Object.entries(Z).map(([r,e])=>N("div",{style:{backgroundColor:e,padding:"2rem"},children:D("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"monospace",color:Ie(e,"#FFF")<3.5?"#000":"#FFF"},children:[D("strong",{children:["$",r]}),N("span",{children:e})]})},r))}a(qe,"ColorsGrid");function E(){return E=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},E.apply(this,arguments)}a(E,"_extends");const Se={},Ee="wrapper";function W({components:r,...e}){return w(Ee,E({},Se,e,{components:r,mdxType:"MDXLayout"}),w(Y,{title:"Tokens/Colors",mdxType:"Meta"}),w("h1",null,"Colors"),w("p",null,"Essas s\xE3o as cores utilizadas no Ignite UI."),w(qe,{mdxType:"ColorsGrid"}))}a(W,"MDXContent");W.isMDXComponent=!0;const ze=a(()=>{throw new Error("Docs-only story")},"__page");ze.parameters={docsOnly:!0};const I={title:"Tokens/Colors",includeStories:["__page"]},Ne={};I.parameters=I.parameters||{};I.parameters.docs={...I.parameters.docs||{},page:()=>w(Q,{mdxStoryNameToKey:Ne,mdxComponentAnnotations:I},w(W,null))};const Ye=["__page"];export{Ye as __namedExportsOrder,ze as __page,I as default};
//# sourceMappingURL=colors.stories.4cf8093d.js.map
