"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[150],{1150:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var o,s,i,t,a,c,d,l,p,x,h=r(9439),u=r(7689),S=r(2791),f=r(7596),g=(r(5462),r(5275)),m=r(8977),j=r(168),v=r(7402),b=v.Z.section(o||(o=(0,j.Z)(["\n  display: flex;\n  gap: ","px;\n  margin-top: ","px;\n  padding-left: ","px;\n"])),g.rS.space[4],g.rS.space[4],g.rS.space[7]),Z=v.Z.img(s||(s=(0,j.Z)(["\n  display: block;\n  max-width: ","px;\n  height: 100%;\n"])),g.rS.sizes[4]),w=v.Z.div(i||(i=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n  padding-left: ","px;\n"])),g.rS.space[4],g.rS.space[7]),k=v.Z.h1(t||(t=(0,j.Z)(["\n  margin: 0;\n"]))),y=v.Z.h2(a||(a=(0,j.Z)(["\n  color: inherit;\n  margin: 0;\n"]))),_=v.Z.p(c||(c=(0,j.Z)(["\n  font-size: ","px;\n  font-weight: 400;\n  padding-top: ","px;\n  margin: 0;\n"])),g.rS.fontSizes[1],g.rS.space[0]),z=v.Z.h2(d||(d=(0,j.Z)(["\n  color: inherit;\n  margin: 0;\n  padding-top: ","px;\n  padding-left: ","px;\n"])),g.rS.space[6],g.rS.space[7]),B=r(2905),M=r(184),C=function(n){var e=n.movieDetails,r=e.poster_path,o=e.genres,s=e.overview,i=e.release_date,t=e.title,a=e.vote_average,c=o.map((function(n){return n.name})).join(", ");return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(b,{children:[r&&(0,M.jsx)(Z,{src:"".concat(g.r1).concat(r),alt:t}),!r&&(0,M.jsx)(Z,{src:B,alt:t}),(0,M.jsxs)(w,{children:[(0,M.jsxs)(k,{children:[" ",t," "]}),(0,M.jsxs)(y,{children:["Released by:",(0,M.jsx)(_,{children:(0,m.Z)(new Date(i),"yyyy MMM dd")})]}),(0,M.jsxs)(y,{children:["User Score: ",Math.round(10*a),"%"]}),(0,M.jsxs)(y,{children:["OverView:",(0,M.jsx)(_,{children:s})]}),(0,M.jsxs)(y,{children:["Genres:",(0,M.jsx)(_,{children:c})]})]})]}),(0,M.jsx)(z,{children:"Additional information"})]})},D=r(1087),I=function(n){var e=n.to,r=n.children;return(0,M.jsx)(O,{to:e,children:r})},O=(0,v.Z)(D.rU)(l||(l=(0,j.Z)(["\n  font-size: ","px;\n  text-decoration: none;\n  text-align: center;\n  display: inline-block;\n  color: inherit;\n  background-color: ",";\n\n  width: ","px;\n  margin-top: ","px;\n  margin-left: ","px;\n  padding: ","px ","px;\n\n  border-radius: ","px;\n  border: none;\n  box-shadow: ",";\n  transition: ",";\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n"])),g.rS.fontSizes[1],g.rS.colors.secondBg,g.rS.sizes[3],g.rS.space[2],g.rS.space[7],g.rS.space[0],g.rS.space[1],g.rS.radii[1],g.rS.shadows.prime,g.rS.transitions.all,g.rS.colors.otherBg,g.rS.colors.second),R=v.Z.div(p||(p=(0,j.Z)(["\n  display: flex;\n  gap: ","px;\n  padding-left: ","px;\n  margin-top: ","px;\n"])),g.rS.space[4],g.rS.space[7],g.rS.space[2]),U=(0,v.Z)(D.OL)(x||(x=(0,j.Z)(["\n  font-size: ","px;\n  text-decoration: none;\n  text-align: center;\n  color: inherit;\n  background-color: ",";\n  padding: ","px ","px;\n  width: ","px;\n  margin: 0;\n\n  border-radius: ","px;\n  border: none;\n  box-shadow: ",";\n  transition: ",";\n\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n"])),g.rS.fontSizes[2],g.rS.colors.secondBg,g.rS.space[0],g.rS.space[1],g.rS.sizes[2],g.rS.radii[1],g.rS.shadows.prime,g.rS.transitions.all,g.rS.colors.otherBg,g.rS.colors.second),A=function(){var n,e,r=(0,u.UO)().movieId,o=(0,S.useState)(),s=(0,h.Z)(o,2),i=s[0],t=s[1],a=(0,u.TH)(),c="";return c="/"===(0,S.useRef)((null===a||void 0===a||null===(n=a.state)||void 0===n||null===(e=n.from)||void 0===e?void 0:e.pathname)||null).current?"/":"/movies",(0,S.useEffect)((function(){g.bl.fetchMovieById(r).then((function(n){return t(n)})).catch((function(){return f.Am.error("Sorry, there are not details of this movie")}))}),[r]),(0,M.jsxs)(M.Fragment,{children:[i&&(0,M.jsxs)(S.Suspense,{fallback:(0,M.jsx)(g.aN,{}),children:[(0,M.jsx)(I,{to:c,children:"\u2b05 Go back"}),(0,M.jsx)(C,{movieDetails:i}),(0,M.jsxs)(R,{children:[(0,M.jsx)(U,{to:"/movies/".concat(r,"/cast"),children:"Cast"}),(0,M.jsx)(U,{to:"/movies/".concat(r,"/reviews"),children:"Reviews"})]})]}),i&&(0,M.jsx)(S.Suspense,{fallback:(0,M.jsx)(g.aN,{}),children:(0,M.jsx)(u.j3,{})}),(0,M.jsx)(f.Ix,{autoClose:3e3})]})}},2905:function(n,e,r){n.exports=r.p+"static/media/noPoster.b395a938b257abca478f.jpg"}}]);
//# sourceMappingURL=150.c9595357.chunk.js.map