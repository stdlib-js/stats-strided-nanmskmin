"use strict";var y=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(n){throw (a=0, n)}};};var p=y(function(K,l){
var w=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/math-base-assert-is-negative-zero/dist');function A(e,a,n,x,o,s,b){var u,t,c,q,f,r,i,v,m;for(u=a.data,c=o.data,t=a.accessors[0],q=o.accessors[0],r=x,i=b,m=0;m<e&&(v=t(u,r),!(v===v&&q(c,i)===0));m++)r+=n,i+=s;if(m===e)return NaN;for(f=v,m+=1,m;m<e;m++)r+=n,i+=s,!q(c,i)&&(v=t(u,r),!w(v)&&(v<f||v===f&&z(v))&&(f=v));return f}l.exports=A
});var g=y(function(L,Z){
var B=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/math-base-assert-is-negative-zero/dist'),P=require('@stdlib/array-base-arraylike2object/dist'),D=p();function E(e,a,n,x,o,s,b){var u,t,c,q,f,r,i;if(e<=0)return NaN;if(q=P(a),f=P(o),q.accessorProtocol||f.accessorProtocol)return D(e,q,n,x,f,s,b);for(t=x,c=b,i=0;i<e&&(r=a[t],!(r===r&&o[c]===0));i++)t+=n,c+=s;if(i===e)return NaN;for(u=r,i+=1,i;i<e;i++)t+=n,c+=s,!o[c]&&(r=a[t],!B(r)&&(r<u||r===u&&C(r))&&(u=r));return u}Z.exports=E
});var R=y(function(N,O){
var j=require('@stdlib/strided-base-stride2offset/dist'),F=g();function G(e,a,n,x,o){var s=j(e,o),b=j(e,n);return F(e,a,n,b,x,o,s)}O.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),I=g();H(h,"ndarray",I);module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
