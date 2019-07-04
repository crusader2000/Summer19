(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{169:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(177),i=a(176),c=a(178),l=a(199),s=a(194),m=a(450),d=a(236),p=a(196),h=(a(529),a(82),a(70)),u=a.n(h),g=Object(r.default)(i.Box).withConfig({displayName:"SearchInput__Relative",componentId:"sc-1veq6vr-0"})(["position:relative;"]),f=Object(r.default)(i.Flex).withConfig({displayName:"SearchInput__Absolute",componentId:"sc-1veq6vr-1"})(["align-items:center;position:absolute;top:0;bottom:0;left:0;height:100%;"]),b=Object(r.default)(i.Input).attrs({bg:"white",py:2,pr:3}).withConfig({displayName:"SearchInput__Search",componentId:"sc-1veq6vr-2"})(["padding-left:48px;line-height:48px;max-width:100%;border:0;border-radius:",";font-size:","px;box-shadow:",",0 16px 32px rgba(0,0,0,0.0625);transition:"," box-shadow;&:hover,&:focus{box-shadow:",",0 16px 48px rgba(0,0,0,0.125);}","{font-size:","px;}::placeholder{color:",";}"],i.theme.radii[2],i.theme.fontSizes[3],i.theme.boxShadows[1],i.theme.transition,i.theme.boxShadows[1],i.theme.mediaQueries.md,i.theme.fontSizes[4],i.theme.colors.muted),w=function(e){var t=e.value,a=e.placeholder,n=e.label,r=e.onChange,c=u()(e,["value","placeholder","label","onChange"]);return o.a.createElement(g,c,o.a.createElement(f,{color:"muted",px:2},o.a.createElement(i.Icon,{glyph:"search",size:36})),o.a.createElement(b,{value:t,placeholder:a,onChange:r,type:"search","aria-label":n}))},k=(a(29),a(180),a(247)),x=Object(r.default)(i.Box.section).withConfig({displayName:"Track__Root",componentId:"r2bn5v-0"})(["background-image:linear-gradient( to bottom,",","," );"],i.theme.colors.white,i.theme.colors.snow),y=Object(r.default)(i.Container).attrs({px:3,mt:[3,4]}).withConfig({displayName:"Track__Grid",componentId:"r2bn5v-1"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(14rem,1fr));grid-auto-rows:1fr;grid-gap:","px;counter-reset:li;list-style:none;a{text-decoration:none;}"],i.theme.space[3]),E=Object(r.default)(i.Card).attrs({bg:"primary",p:3}).withConfig({displayName:"Track__Item",componentId:"r2bn5v-2"})(["text-align:left;background-size:cover;background-position:center;background-repeat:no-repeat;height:100%;position:relative;text-shadow:0 1px 2px rgba(0,0,0,0.25);border-radius:",";will-change:transform;box-shadow:",";transition:0.1875s ease-in-out all;&:hover,&:focus{box-shadow:0 4px 8px rgba(0,0,0,0.125),0 8px 24px rgba(0,0,0,0.125),0 16px 32px rgba(0,0,0,0.125);transform:scale(1.125);z-index:4;","{transform:scale(1.25);}}&:before{content:counter(li);counter-increment:li;position:absolute;right:","px;top:","px;width:1.125rem;line-height:1.125rem;border-radius:0.75rem;background-color:",";color:",";font-size:","px;text-align:center;text-shadow:none;font-weight:bold;}h3{line-height:1.125;margin-bottom:0.125rem;}p{line-height:1.25;}"],i.theme.radii[2],i.theme.boxShadows[0],i.theme.mediaQueries.md,i.theme.space[3],i.theme.space[3],i.theme.colors.white,i.theme.colors.black,i.theme.fontSizes[0]),v=function(e){var t=e.data,a=t.fields,n=a.slug,r=a.bg,l=t.frontmatter,s=l.name,m=l.description,d=u()(e,["data"]);return o.a.createElement(c.a,Object.assign({to:n},d),o.a.createElement(E,{style:{backgroundImage:"url('"+r+"')"}},o.a.createElement(i.Heading.h3,{color:"white",fontSize:3,mb:[null,3],children:s}),o.a.createElement(i.Text,{color:"snow",fontSize:2,children:m})))},C={arduino:"Bring projects from cyberspace to the real world with this small hardware platform.",challenge:"Supplemental material for Hack Club Challenges.",club:"Launching your own Hack Club? Here are a few pointers.",experimental:"As is/no warranty. These workshops haven’t been fully tested yet, so we don’t know just will happen if you try building things with them.",misc:"The odd ones out. Workshops not yet properly categorized.",pi:"Start building projects on the coolest credit card-sized computer.",retired:"These workshops are no longer maintained. They may contain errors and are not recommended for club use. Here be dragons.",start:"Set out on your journey by building your own website, then move on to multiplayer games and collaborative web apps."},j=function(e){var t=e.name,a=e.data,n=u()(e,["name","data"]);return o.a.createElement(x,Object.assign({id:t,py:[3,4]},n),o.a.createElement(i.Container,{maxWidth:32,align:"center",px:3},t&&o.a.createElement(i.Heading.h2,{color:"black",fontSize:4,children:Object(k.capitalize)(t)}),C[t]&&o.a.createElement(i.Text,{color:"slate",fontSize:2,children:C[t]})),o.a.createElement(y,null,Object(k.map)(a,function(e,a){return o.a.createElement(v,{data:e.node,key:"workshops-"+t+"-"+a})})))},O=Object(r.default)(i.Flex).withConfig({displayName:"NoResults__Rounded",componentId:"sc-9bmxd8-0"})(["border-radius:",";"],i.theme.radii[1]),_=Object(r.default)(i.Text).withConfig({displayName:"NoResults__BreakWord",componentId:"sc-9bmxd8-1"})([""]),S=function(e){var t=e.value;return o.a.createElement(O,{direction:"column",justify:"center",align:"center",bg:"gray.1",px:4,py:5},o.a.createElement(_,{fontSize:3,lineHeight:"normal",color:"black"},"No results found ",t&&'for "'+t+'"'))},z=a(830),I=a.n(z),N=["start","club","challenges","pi","react","arduino","experimental","misc","retired"],B=["node.frontmatter.name","node.frontmatter.description"],H=function(e){var t=e.workshops,a=Object(n.useState)(""),r=a[0],c=a[1],l=new I.a(t,{threshold:.4,keys:B}),s=""===r?t:l.search(r),m=Object(k.groupBy)(s,"node.frontmatter.group"),d=Object(k.toPairs)(m).sort(function(e,t){return-1===N.indexOf(e[0])?1:-1===N.indexOf(t[0])?-1:N.indexOf(e[0])-N.indexOf(t[0])});return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.Container,{maxWidth:48,mt:-36,px:3,style:{zIndex:2}},o.a.createElement(w,{placeholder:"Search workshops",label:"Search",value:r,onChange:function(e){return c(e.target.value)}})),0!==d.length?o.a.createElement(o.a.Fragment,null,d.map(function(e){return o.a.createElement(j,{key:"workshops-"+e[0],name:e[0],data:e[1]})})):o.a.createElement(S,{value:r}))};a.d(t,"pageQuery",function(){return P});var T=Object(r.default)(i.Box.main).withConfig({displayName:"workshops__Base",componentId:"sc-11qf0cw-0"})(["position:relative;"]),q=Object(r.default)(i.Section).withConfig({displayName:"workshops__Background",componentId:"sc-11qf0cw-1"})(["background-color:",";background-image:url('/pattern.svg'),linear-gradient( -64deg,",",",","," );"],i.theme.colors.indigo[5],i.theme.colors.indigo[5],i.theme.colors.violet[5],i.theme.colors.violet[6]),R={is:i.LargeButton.withComponent(c.a),m:2,scale:!0,py:3,px:4,fontSize:2},F=Object(r.default)(d.a).attrs(R).withConfig({displayName:"workshops__SubmitButton",componentId:"sc-11qf0cw-2"})(["text-transform:uppercase;background-image:linear-gradient( to bottom,",","," );"],i.theme.colors.cyan[6],i.theme.colors.blue[6]),W=Object(r.default)(d.a).attrs({is:i.LargeButton.withComponent(c.a),m:2,scale:!0,py:3,px:4,fontSize:2}).withConfig({displayName:"workshops__PhilosophyButton",componentId:"sc-11qf0cw-3"})(["text-transform:uppercase;background-image:linear-gradient( to bottom,",","," );"],i.theme.colors.orange[5],i.theme.colors.red[5]),P=(t.default=function(e){var t=e.data.allMarkdownRemark.edges;return o.a.createElement(l.a,{title:"Workshops – Hack Club",desc:"Get free coding tutorials, project ideas, and programming club activities from Hack Club, a community of high school developers.",img:"/cards/workshops.png",path:"/workshops/"},o.a.createElement(s.b,null),o.a.createElement(T,null,o.a.createElement(q,{px:3,pt:4},o.a.createElement(i.Box.header,{align:"center",pt:[4,5,6],pb:3},o.a.createElement(m.a,{fontSize:6},"Workshops"),o.a.createElement(i.Text,{color:"violet.0",fontSize:[3,4],mt:2,bold:!0,caps:!0},"By Hack Club"),o.a.createElement(i.Text,{fontSize:[3,4],color:"white",mx:"auto",mt:[2,3],mb:3,style:{lineHeight:"1.25",maxWidth:"36rem"}},"Learn to code with this collection of community-contributed, self-guided coding tutorials + ideas."),o.a.createElement(F,{glyph:"post",to:"/workshops/drafts",children:"Submit your own",bg:"cyan.6"}),o.a.createElement(W,{glyph:"quote",to:"/philosophy",children:"Our philosophy"}))),o.a.createElement(H,{workshops:t}),o.a.createElement(p.a,null)))},"3892880556")},178:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(4),i=a.n(r),c=a(28),l=a.n(c);a.d(t,"a",function(){return l.a});a(182),o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},182:function(e,t,a){var n;e.exports=(n=a(189))&&n.default||n},189:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),c=a(53),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?o.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},190:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(176);t.a=function(e){var t=e.color;return o.a.createElement("style",{children:"body{background:"+Object(r.cx)(t)+";}"})}},194:function(e,t,a){"use strict";var n=a(70),o=a.n(n),r=a(6),i=a.n(r),c=(a(29),a(180),a(197),a(0)),l=a.n(c),s=a(4),m=a.n(s),d=a(177),p=a(176),h=a(178),u=Object(d.default)(h.a).withConfig({displayName:"Flag",componentId:"sc-5ikopp-0"})(["background:url(/orpheus_flag.svg) no-repeat;background-position:top center;flex-shrink:0;width:112px;height:48px;transition:"," transform;transform-origin:top left;","{width:144px;height:72px;}",";"],p.theme.transition,p.theme.mediaQueries.md,function(e){return e.scrolled&&Object(d.css)(["transform:scale(0.75);height:44px !important;","{height:54px !important;}"],p.theme.mediaQueries.md)});u.defaultProps={to:"/","aria-label":"Homepage"};var g=u,f=a(198),b=a.n(f);a.d(t,"a",function(){return x});var w=function(e,t){return"rgba(\n    "+e.bgColor[0]+",\n    "+e.bgColor[1]+",\n    "+e.bgColor[2]+",\n    "+t+"\n  )"},k=Object(d.default)(p.Box.withComponent("header")).withConfig({displayName:"Nav__Root",componentId:"sc-1601ob-0"})(["",";width:100%;z-index:1000;"," @media print{display:none;}"],function(e){return!e.unfixed&&Object(d.css)(["position:absolute;top:0;"])},function(e){return(e.scrolled||e.toggled||e.fixed)&&Object(d.css)(["position:fixed;background-color:",";border-bottom:1px solid rgba(48,48,48,0.125);@supports (-webkit-backdrop-filter:none) or (backdrop-filter:none){background-color:",";",";}","{-webkit-backdrop-filter:auto !important;}"],w(e,.96875),e.transparent?"transparent":w(e,.75),e.dark?Object(d.css)(["-webkit-backdrop-filter:saturate(90%) blur(20px);"]):Object(d.css)(["-webkit-backdrop-filter:saturate(180%) blur(20px);"]),p.theme.mediaQueries.reduceTransparency)}),x=Object(d.default)(p.Container).withConfig({displayName:"Nav__Content",componentId:"sc-1601ob-1"})(["display:flex;align-items:center;justify-content:space-between;position:relative;padding-left:","px;","{padding:0 ","px;}"],p.theme.space[3],p.theme.mediaQueries.md,p.theme.space[4]),y=Object(d.default)(p.Box.withComponent("nav")).withConfig({displayName:"Nav__NavBar",componentId:"sc-1601ob-2"})(["display:none;a{color:",";margin-left:","px;padding:","px;text-decoration:none;}",";"],function(e){return Object(p.cx)(e.color)},p.theme.space[2],p.theme.space[2],function(e){return e.isMobile?Object(d.css)(["display:",";flex-direction:column;overflow-y:auto;text-align:left;height:100vh;a{padding:0;margin:0 auto;height:64px;line-height:64px;font-weight:bold;width:100%;max-width:18rem;&:not(:last-child){border-bottom:1px solid rgba(48,48,48,0.125);}@media screen and (max-width:22em){max-width:16rem;}}"],e.toggled?"flex":"none"):Object(d.css)(["@media (min-width:56em){display:flex;position:absolute;left:50%;transform:translateX(-50%);}a{font-size:","px;text-transform:uppercase;&:hover{color:",";}}"],p.theme.fontSizes[1],p.theme.cx({white:"smoke",smoke:"muted",muted:"slate",slate:"black",black:"slate",primary:"error"}[e.color]||"black"))}),E=function(e){return l.a.createElement(y,Object.assign({role:"navigation"},e),l.a.createElement(h.a,{to:"/start/",children:"Clubs"}),l.a.createElement(h.a,{to:"/workshops/",children:"Workshops"}),l.a.createElement("a",{href:"https://hackathons.hackclub.com/",children:"Hackathons",target:"_blank",rel:"noopener noreferrer"}),l.a.createElement(h.a,{to:"/bank/",children:"Bank"}),l.a.createElement(h.a,{to:"/camp/",children:"Camp"}),l.a.createElement(h.a,{to:"/donate/",children:"Donate"}))},v=Object(d.default)(p.Flex).withConfig({displayName:"Nav__ToggleContainer",componentId:"sc-1601ob-3"})(["align-items:center;justify-content:center;min-width:64px;min-height:44px;cursor:pointer;user-select:none;margin-left:auto;","{display:none;}"],p.theme.mediaQueries.md),C=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={scrolled:!1,toggled:!1},t.componentWillUnmount=function(){t.bindScroll(!1)},t.bindScroll=function(e){"undefined"==typeof window||t.props.unfixed||window[e?"addEventListener":"removeEventListener"]("scroll",t.onScroll)},t.onScroll=function(){var e=window.scrollY>=16;e!==t.state.scrolled&&t.setState({scrolled:e})},t.handleToggleMenu=function(){t.setState(function(e){return{toggled:!e.toggled}})},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;(this.bindScroll(!0),"undefined"!=typeof window)&&window.matchMedia("(max-width: 48em)").addListener(function(){e.setState({toggled:!1})})},a.render=function(){var e=this.props,t=e.color,a=e.dark,n=e.fixed,r=e.bgColor,i=o()(e,["color","dark","fixed","bgColor"]),c=this.state,s=c.scrolled,m=c.toggled,d=a?t||"white":"white"===t&&s?"black":t,h=a?t||"snow":m||"white"===t&&s?"slate":t;return l.a.createElement(k,Object.assign({},i,{fixed:n,scrolled:s,toggled:m,dark:a,bgColor:r||(a?[32,34,36]:[255,255,255])}),l.a.createElement(x,null,l.a.createElement(g,{scrolled:s||n}),l.a.createElement(E,{color:d,dark:a}),l.a.createElement(v,{color:h,onClick:this.handleToggleMenu},l.a.createElement(p.Icon,{glyph:m?"view-close":"menu",toggled:m}))),l.a.createElement(E,{isMobile:!0,toggled:m,color:d,dark:a}),m&&l.a.createElement(b.a,null))},t}(c.Component);C.defaultProps={dark:!1,color:"white"},C.propTypes={color:m.a.string,bgColor:m.a.arrayOf(m.a.number),dark:m.a.bool,transparent:m.a.bool,fixed:m.a.bool,unfixed:m.a.bool};t.b=C},195:function(e){e.exports={name:"Hack Club",title:"Hack Club: Teenagers with superpowers",description:"Hack Club is a global nonprofit network of high school programming clubs. Start a coding club with our guidance, activities, ideas, curriculum, and community.",url:"https://hackclub.com",twitter:"@hackclub",img:"/social-photo_2.jpg",stats:{percentage_of_us_high_schools:"2%",school_count:315,state_count:35,country_count:17,slack_count:3809,approximate_members:"3K+"},springPromo:{currentApplications:0,applicationSlots:100,deadline:"2019-04-26"},org:{"@context":"http://schema.org","@type":"Organization",name:"Hack Club",url:"https://hackclub.com",logo:"https://hackclub.com/social.png",sameAs:["https://twitter.com/hackclub","https://github.com/hackclub","https://www.instagram.com/starthackclub","https://www.facebook.com/Hack-Club-741805665870458","https://www.youtube.com/channel/UCQzO0jpcRkP-9eWKMpJyB0w"],contactPoint:[{"@type":"ContactPoint",email:"team@hackclub.com",contactType:"customer support",url:"https://hackclub.com"}]}}},196:function(e,t,a){"use strict";a(29);var n=a(70),o=a.n(n),r=a(0),i=a.n(r),c=a(177),l=a(176),s=a(178),m=function(){var e=Object(r.useState)(0),t=e[0],a=e[1];return Object(r.useEffect)(function(){window.document.onkeypress=function(e){var n=e.key==="pi"[t];a(n?t+1:0)}}),t==="pi".length?i.a.createElement("iframe",{title:"pi",width:560,height:315,src:"https://www.youtube.com/embed/knIfoQW_mZg?autoplay=1",frameborder:0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{display:"none"}}):null},d=Object(c.default)(l.Box.withComponent("footer")).withConfig({displayName:"Footer__Base",componentId:"sc-1qqkcow-0"})(["background:",";"," @media print{display:none;}"],function(e){return e.dark?l.theme.colors.darker+" radial-gradient("+Object(l.hexa)(l.theme.colors.black,.5)+" 1px, transparent 1px)":l.theme.colors.snow+" url('/pattern.svg') repeat"},function(e){return e.dark&&Object(c.css)(["background-size:","px ","px;h2{color:",";}","{border-color:",";}"],l.theme.space[4],l.theme.space[4],l.theme.colors.gray[4],f,l.theme.colors.black)}),p=Object(c.default)(l.Container).withConfig({displayName:"Footer__Columns",componentId:"sc-1qqkcow-1"})(["display:grid;grid-template-columns:repeat(2,1fr);grid-gap:","px;","{grid-gap:","px;grid-template-columns:repeat(4,1fr);}"],l.theme.space[2],l.theme.mediaQueries.md,l.theme.space[4]),h=Object(c.default)(l.Flex).withConfig({displayName:"Footer__Services",componentId:"sc-1qqkcow-2"})(["a{line-height:0;}svg{fill:currentColor;width:32px;height:32px;}","{max-width:12rem;}"],l.theme.mediaQueries.md);h.defaultProps={align:"center",mb:3,wrap:!0};var u=function(e){var t=e.href,a=e.icon,n=o()(e,["href","icon"]);return i.a.createElement(l.Link,Object.assign({target:"_blank",rel:"noopener",href:t,mr:2,mb:2,color:"muted","aria-label":"hack club on "+a,children:i.a.createElement(l.Icon,{glyph:a})},n))},g=Object(c.default)(l.Box).withConfig({displayName:"Footer__Pages",componentId:"sc-1qqkcow-3"})(["a{display:block;color:inherit;margin-bottom:","px;}"],l.theme.space[2]),f=Object(c.default)(l.Box).withConfig({displayName:"Footer__BottomLine",componentId:"sc-1qqkcow-4"})(["border-top:1px solid ",";"],l.theme.colors.smoke);t.a=function(e){var t=e.dark,a=void 0!==t&&t,n=e.children,r=o()(e,["dark","children"]);return i.a.createElement(d,Object.assign({color:a?"muted":"slate",py:[4,5,6],dark:a,align:"left"},r),n,i.a.createElement(m,null),i.a.createElement(p,{px:3},i.a.createElement(l.Box,null,i.a.createElement(l.Heading.h2,{fontSize:3,mb:3},"Hack Club"),i.a.createElement(g,null,i.a.createElement(s.a,{to:"/",children:"Home"}),i.a.createElement(s.a,{to:"/donate/",children:"Donate"}),i.a.createElement(s.a,{to:"/team/",children:"Team"}),i.a.createElement(s.a,{to:"/community/",children:"Community"}),i.a.createElement(s.a,{to:"/philosophy/",children:"Philosophy"}))),i.a.createElement(l.Box,null,i.a.createElement(l.Heading.h2,{fontSize:3,mb:3},"For Clubs"),i.a.createElement(g,null,i.a.createElement(s.a,{to:"/start/",children:"Start a Club"}),i.a.createElement("a",{href:"https://apply.hackclub.com/",children:"Apply"}),i.a.createElement(s.a,{to:"/challenge/",children:"Challenge"}),i.a.createElement(s.a,{to:"/workshops/",children:"Workshops"}),i.a.createElement("a",{href:"https://finder.hackclub.com/",children:"Find Clubs"}))),i.a.createElement(l.Box,null,i.a.createElement(l.Heading.h2,{fontSize:3,mb:3},"Resources"),i.a.createElement(g,null,i.a.createElement(s.a,{to:"/conduct/",children:"Code of Conduct"}),i.a.createElement(s.a,{to:"/night/",children:"Hack Night"}),i.a.createElement("a",{href:"https://hackathons.hackclub.com/",children:"Hackathons"}),i.a.createElement("a",{href:"https://shop.hackclub.com/",children:"Shop"}),i.a.createElement(s.a,{to:"/bank/",children:"Bank"}))),i.a.createElement(l.Box,null,i.a.createElement(l.Heading.h2,{fontSize:3,mb:3},"Join the Club"),i.a.createElement(h,null,i.a.createElement(u,{href:"/community/",icon:"slack-fill",target:"_self"}),i.a.createElement(u,{href:"https://twitter.com/hackclub",icon:"twitter"}),i.a.createElement(u,{href:"https://github.com/hackclub",icon:"github"}),i.a.createElement(u,{href:"https://www.facebook.com/Hack-Club-741805665870458",icon:"facebook"}),i.a.createElement(u,{href:"https://medium.com/hackclub",icon:"medium"}),i.a.createElement(u,{href:"https://www.youtube.com/channel/UCQzO0jpcRkP-9eWKMpJyB0w",icon:"youtube"}),i.a.createElement(u,{href:"https://www.instagram.com/starthackclub",icon:"instagram"}),i.a.createElement(u,{href:"mailto:team@hackclub.com",icon:"email"})),i.a.createElement(l.Text,{my:2},i.a.createElement("a",{href:"tel:1-855-625-HACK"},"1-855-625-HACK"),i.a.createElement("br",null),i.a.createElement(l.Text.span,{color:"muted",children:"(call toll-free)"})))),i.a.createElement(l.Container,{px:3,mt:[3,4]},i.a.createElement(l.Box,{fontSize:2},i.a.createElement(l.Text,null,"Office: 576 Natoma St, San Francisco, CA 94103"),i.a.createElement(l.Text,null,"Mail: 8605 Santa Monica Blvd #86294, West Hollywood, CA 90069")),i.a.createElement(f,{mt:3},i.a.createElement(l.Text,{fontSize:1,mt:2,color:"muted"},"© ",(new Date).getFullYear()," Hack Club. 501(c)(3) nonprofit (EIN: 81-2908499)"))))}},199:function(e,t,a){"use strict";a(193),a(31),a(180),a(29);var n=a(0),o=a.n(n),r=a(223),i=a.n(r),c=a(195),l=a(176),s=a(190),m=a(200),d=a.n(m);t.a=function(e){var t=e.title,a=void 0===t?c.title:t,n=e.desc,r=void 0===n?c.description:n,m=e.path,p=void 0===m?"/":m,h=e.img,u=void 0===h?c.img:h,g=e.bg,f=e.children;return o.a.createElement(l.ThemeProvider,{webfonts:!0},o.a.createElement(i.a,{title:a},o.a.createElement("html",{lang:"en"}),o.a.createElement("meta",{charSet:"UTF-8"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),o.a.createElement("meta",{name:"format-detection",content:"telephone=no"}),o.a.createElement("meta",{name:"theme-color",content:l.theme.colors.primary}),[{name:"description",content:r},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"@hackclub"},{name:"twitter:domain",content:c.url+"/"},{name:"twitter:title",content:a},{name:"twitter:description",content:r},{name:"twitter:image",content:c.url+u},{property:"og:site_name",content:c.name},{property:"og:title",content:a},{property:"og:description",content:r},{property:"og:image",content:c.url+u},{property:"og:locale",content:"en_US"},{property:"og:type",content:"website"},{property:"og:url",content:c.url+p}].map(function(e,t){return o.a.createElement("meta",Object.assign({},e,{key:t}))}),o.a.createElement("script",{children:d.a.toString()+"; serviceWorkerKiller()"}),o.a.createElement("script",{type:"application/ld+json",children:JSON.stringify(c.org)})),g&&o.a.createElement(s.a,{color:g}),f)}},200:function(e,t,a){a(201),a(202),a(72),"object"==typeof window&&!window.swkillerRun&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(e){if(e.length>0){console.log("Unregistering service workers");var t=e,a=Array.isArray(t),n=0;for(t=a?t:t[Symbol.iterator]();;){var o;if(a){if(n>=t.length)break;o=t[n++]}else{if((n=t.next()).done)break;o=n.value}o.unregister()}window.swkillerRun=!0,window.location.reload()}else console.log("No service workers found")})},236:function(e,t,a){"use strict";var n=a(70),o=a.n(n),r=a(0),i=a.n(r),c=a(4),l=a.n(c),s=a(177),m=a(176),d=function(e){var t=e.is,a=void 0===t?m.Button:t,n=e.glyph,r=e.size,c=void 0===r?24:r,l=e.children,d=o()(e,["is","glyph","size","children"]),p=Object(s.default)(a).withConfig({displayName:"IconButton__Component",componentId:"k2g6jz-0"})(["display:inline-flex;align-items:center;justify-content:center;"]);return i.a.createElement(p,d,i.a.createElement(m.Icon,{glyph:n,size:c}),l&&i.a.createElement(m.Text.span,{ml:2,children:l}))};t.a=d,d.propTypes={is:l.a.oneOfType([l.a.element,l.a.func]),glyph:l.a.string.isRequired,size:l.a.number,children:l.a.oneOfType([l.a.element,l.a.string]).isRequired}},450:function(e,t,a){"use strict";var n=a(177),o=a(176),r=Object(n.default)(o.Heading.h1).attrs({px:3}).withConfig({displayName:"Name",componentId:"jm29b5-0"})(["mix-blend-mode:screen;background-color:",";color:black;display:inline-block;clip-path:polygon(4% 0%,100% 0%,96% 100%,0% 100%);box-shadow:0 2px 4px rgba(0,0,0,0.125);"],o.theme.colors.white);t.a=r}}]);
//# sourceMappingURL=component---src-pages-workshops-index-js-313af5a98ae136f689e2.js.map