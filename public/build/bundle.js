var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function a(){return t=" ",document.createTextNode(t);var t}let i;function l(t){i=t}const d=[],$=[],p=[],h=[],m=Promise.resolve();let g=!1;function y(t){p.push(t)}const _=new Set;let b=0;function x(){const t=i;do{for(;b<d.length;){const t=d[b];b++,l(t),k(t.$$)}for(l(null),d.length=0,b=0;$.length;)$.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];_.has(n)||(_.add(n),n())}p.length=0}while(d.length);for(;h.length;)h.pop()();g=!1,_.clear(),l(t)}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(y)}}const v=new Set;function w(t,n){-1===t.$$.dirty[0]&&(d.push(t),g||(g=!0,m.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function E(c,u,f,a,d,$,p,h=[-1]){const m=i;l(c);const g=c.$$={fragment:null,ctx:null,props:$,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(m?m.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:u.target||m.$$.root};p&&p(g.root);let _=!1;if(g.ctx=f?f(c,u.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&d(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),_&&w(c,t)),n})):[],g.update(),_=!0,o(g.before_update),g.fragment=!!a&&a(g.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);g.fragment&&g.fragment.l(t),t.forEach(s)}else g.fragment&&g.fragment.c();u.intro&&((b=c.$$.fragment)&&b.i&&(v.delete(b),b.i(k))),function(t,e,c,u){const{fragment:s,on_mount:f,on_destroy:a,after_update:i}=t.$$;s&&s.m(e,c),u||y((()=>{const e=f.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(y)}(c,u.target,u.anchor,u.customElement),x()}var b,k;l(m)}function j(n){let e,o,r;return{c(){e=f("h1"),e.textContent=`Hello ${C}!`,o=a(),r=f("p"),r.textContent="Hey :)"},m(t,n){u(t,e,n),u(t,o,n),u(t,r,n)},p:t,i:t,o:t,d(t){t&&s(e),t&&s(o),t&&s(r)}}}let C="world";return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),E(this,t,null,j,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
