(self.webpackChunkMovies_finder=self.webpackChunkMovies_finder||[]).push([[398],{7398:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return P}});var t,s,i,a,p,c,o,l=r(9439),f=r(2791),d=r(7689),u=r(7596),x=(r(5462),r(5275)),h=r(2007),m=r.n(h),v=r(8977),y=r(168),g=r(7402),S=g.Z.ul(t||(t=(0,y.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ","px;\n  margin-top: ","px;\n  padding-left: ","px;\n  list-style: none;\n"])),x.rS.space[4],x.rS.space[4],x.rS.space[7]),j=g.Z.li(s||(s=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n  padding: ","px;\n  padding-left: ","px;\n"])),x.rS.space[4],x.rS.space[2],x.rS.space[3]),b=g.Z.div(i||(i=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  gap: ","px;\n"])),x.rS.space[4]),Z=g.Z.img(a||(a=(0,y.Z)(["\n  display: block;\n  max-width: ","px;\n  height: 100%;\n"])),x.rS.sizes[1]),w=g.Z.p(p||(p=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n  font-size: ","px;\n  margin: 0;\n"])),x.rS.space[4],x.rS.fontSizes[2]),_=g.Z.p(c||(c=(0,y.Z)(["\n  font-size: ","px;\n  margin: 0;\n"])),x.rS.fontSizes[0]),T=g.Z.div(o||(o=(0,y.Z)(["\n  font-size: ","px;\n  margin: 0;\n  margin-top: ","px;\n  padding-left: ","px;\n"])),x.rS.fontSizes[4],x.rS.space[4],x.rS.space[7]),k=r(3942),O=r(184),I=function(e){var n=e.reviews,r=n.results;return n.total_results?(0,O.jsx)(S,{children:r.map((function(e){var n=e.id,r=e.author,t=e.author_details.avatar_path,s=e.content,i=e.updated_at;return(0,O.jsxs)(j,{children:[(0,O.jsxs)(b,{children:[t&&(0,O.jsx)(Z,{src:"".concat(x.r1).concat(t),alt:r}),!t&&(0,O.jsx)(Z,{src:k,alt:r}),(0,O.jsxs)(w,{children:[(0,O.jsxs)("span",{children:[(0,O.jsx)("b",{children:"Author: "})," ",r]}),(0,O.jsxs)("span",{children:[(0,O.jsx)("b",{children:"Updated at: "})," ",(0,v.Z)(new Date(i),"PPpp")]})]})]}),(0,O.jsx)(_,{children:s})]},n)}))}):(0,O.jsx)(T,{children:"We don't have any reviews of this movie"})};I.porTypes={reviews:m().object.isRequired};var P=function(){var e=(0,d.UO)().movieId,n=(0,f.useState)(),r=(0,l.Z)(n,2),t=r[0],s=r[1];return(0,f.useEffect)((function(){x.bl.fetchReviewsById(e).then((function(e){return s(e)})).catch((function(){return u.Am.error("Sorry, there are not reviews of this movie")}))}),[e]),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(f.Suspense,{fallback:(0,O.jsx)(x.aN,{}),children:t&&(0,O.jsx)(I,{reviews:t})}),(0,O.jsx)(u.Ix,{autoClose:3e3})]})}},888:function(e,n,r){"use strict";var t=r(9047);function s(){}function i(){}i.resetWarningCache=s,e.exports=function(){function e(e,n,r,s,i,a){if(a!==t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}function n(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:s};return r.PropTypes=r,r}},2007:function(e,n,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3942:function(e,n,r){"use strict";e.exports=r.p+"static/media/defaultImage.e43b0f064afcf4def33c.webp"}}]);
//# sourceMappingURL=398.dcb392c0.chunk.js.map