(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+l+s+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=d.default.createElement(k,(0,o.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,i(r),s):s})),k=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,w=e.loading,I=e.draggable,R=g||h;if(!R)return null;var j=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,o.default)({opacity:j?1:0,transition:V?"opacity "+b+"ms":"none"},s),H="boolean"==typeof y?"lightgray":y,N={transitionDelay:b+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},V&&N,s,f),P={title:t,alt:this.state.isVisible?"":a,style:T,className:m,itemProp:E},W=this.state.isHydrated?p(R):R[0];if(g)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),H&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&N)}),W.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:P,imageVariants:R,generateSources:L}),W.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:P,imageVariants:R,generateSources:O}),this.state.isVisible&&d.default.createElement("picture",null,S(R),d.default.createElement(k,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:w},W,{imageVariants:R}))}}));if(h){var q=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete q.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},H&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:H,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},V&&N)}),W.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:P,imageVariants:R,generateSources:L}),W.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:P,imageVariants:R,generateSources:O}),this.state.isVisible&&d.default.createElement("picture",null,S(R),d.default.createElement(k,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:w},W,{imageVariants:R}))}}))}return null},t}(d.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function H(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}j.propTypes={resolutions:V,sizes:C,fixed:H(c.default.oneOfType([V,c.default.arrayOf(V)])),fluid:H(c.default.oneOfType([C,c.default.arrayOf(C)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=j;t.default=N},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("q1tI"),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=r.createContext&&r.createContext(i),l=function(){return(l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(a[r[i]]=e[r[i]])}return a};function o(e){return function(t){return r.createElement(d,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,l({key:a},t.attr),e(t.child))}))}(e.child))}}function d(e){var t=function(t){var a,i=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var n=e.attr,o=e.title,d=s(e,["attr","title"]);return r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,d,{className:a,style:l({color:e.color||t.color},t.style,e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==n?r.createElement(n.Consumer,null,(function(e){return t(e)})):t(i)}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("dI71"),i=a("q1tI"),n=a.n(i),l=a("Wbzz"),s=a("IdFE"),o=a("p3AD"),d={color:"black",background:"none"};var c="531505784",u=function(){return n.a.createElement(l.a,{query:c,render:function(e){var t=e.site.siteMetadata.social,a=t.twitter,r=t.linkedin,i=t.github;return n.a.createElement("div",null,n.a.createElement("div",{style:{display:"flex",fontSize:Object(o.a)(1)}},n.a.createElement("a",{style:d,href:a,rel:"noopener noreferrer",target:"_blank"},n.a.createElement(s.c,null)),n.a.createElement("a",{style:d,href:r,rel:"noopener noreferrer",target:"_blank"},n.a.createElement(s.b,null)),n.a.createElement("a",{style:d,href:i,rel:"noopener noreferrer",target:"_blank"},n.a.createElement(s.a,null))))}})};var f="3720880194",m=function(){return n.a.createElement(l.a,{query:f,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.description;return n.a.createElement("div",{style:{marginTop:Object(o.a)(5),marginBottom:Object(o.a)(10)}},n.a.createElement("p",null,n.a.createElement("h1",{style:{fontSize:Object(o.a)(2),fontFamily:"Quicksand, sans-serif"}}," ",a," "),n.a.createElement("h3",null," ",r," ")),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(u,null)))}})},p=a("Bl7J"),g=a("vrFN"),h=a("9eSz"),y=a.n(h);var b=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(y.a,{fluid:e.image}))},v=(a("lE3a"),function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.portfolio.edges,a=e.projects.edges;return n.a.createElement(p.a,{location:this.props.location},n.a.createElement(g.a,{title:"Aniruddha Mysore's Website",keywords:["aniruddha","mysore","blog","bangalore","pesit","pesu","pes","stride","gsoc"]}),n.a.createElement(m,null),t.map((function(e){var t=e.node;return n.a.createElement("div",{key:t.frontmatter.section},n.a.createElement("h3",{style:{marginBottom:Object(o.a)(1/4)}}),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))})),n.a.createElement("h1",null,"Projects"),n.a.createElement("div",{className:"columns"},a.map((function(e){var t=e.node,a=t.frontmatter.image.childImageSharp.fluid;return n.a.createElement("div",{key:t.frontmatter.title,className:"column is-one-third"},n.a.createElement(b,{image:a}),n.a.createElement("h3",{style:{marginBottom:Object(o.a)(1/4)}}," ",t.frontmatter.title),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))}))))},t}(n.a.Component));t.default=v},lE3a:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-5ab53ec37de6213a2307.js.map