(window.webpackJsonpapp_store=window.webpackJsonpapp_store||[]).push([[21],{mIMz:function(e,t,a){e.exports={"radio-group":"radio-group___2cvO1",localtimeText:"localtimeText___1hI8H",datepickerContainer:"datepickerContainer___3icip",utcTime:"utcTime___3WQ8g",datepicker:"datepicker___2CIPJ"}},uw6t:function(e,t,a){"use strict";a.r(t),a.d(t,"VersionRelease",function(){return S});var r=a("cDcd"),i=a.n(r),n=a("uDfI"),l=a("4a4m"),o=a("gXpX"),s=a("mIMz"),c=a.n(s),u=a("wq62"),m=a("70fN"),d=a("hqKg"),p=a("itJ/"),f=a("FGxw"),b=a("wgY5"),E=a.n(b),y=a("U4hN"),v=a("1aRR");function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,i=!1,n=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(s){i=!0,n=s}finally{try{r||null==o.return||o.return()}finally{if(i)throw n}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){T(e,t,a[t])})}return e}function T(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var g={sectionName:"versionRelease",provider:u.Ec},D=Object(d.createSelector)(y.p,function(e){var t=e||{};return{releaseType:t.releaseType||"AFTER_APPROVAL",earliestReleaseDate:t.earliestReleaseDate}}),O=Object(y.D)({sectionName:g.sectionName});var h={onEdit:Object(m.l)({sectionPath:g.sectionName,provider:g.provider})},w="SCHEDULED";function S(e){var t=e.versionRelease,a=void 0===t?{}:t,n=e.edits,s=e.manualReleaseEditability,u=e.autoReleaseEditability,m=e.scheduledReleaseEditability,d=e.releaseDateEditability,b=e.headerSuffix,y=e.showDivider,T=void 0===y||y,g=_({},a,n),D=E()().startOf("hour").toISOString(),O=new Date(D),h=R(Object(r.useState)(O),2),S=h[0],A=h[1],I=E()(O).utc(),V=R(Object(r.useState)(I),2),j=V[0],C=V[1],N=Object(l.a)({mode:"onChange",submitFocusError:!1,defaultValues:g,originalState:a,onUpdate:function(t){var a=t.formState,r=t.originalState;e.onEdit({formState:a,originalState:r})},debounceTime:100}),F=N.register;return Object(r.useEffect)(function(){F({name:"earliestReleaseDate"})},[]),Object(r.useEffect)(function(){if(a.earliestReleaseDate){var e=new Date(a.earliestReleaseDate);A(e),C(E()(e).utc())}},[a]),Object(r.useEffect)(function(){g.releaseType!==w||g.earliestReleaseDate?g.releaseType!==w&&g.earliestReleaseDate&&N.setValue("earliestReleaseDate",a.earliestReleaseDate):N.setValue("earliestReleaseDate",S)},[g.releaseType]),i.a.createElement("div",null,T&&i.a.createElement(p.n,{style:{margin:"30px 0"}}),i.a.createElement("div",{style:{display:"flex",marginBottom:"24px",alignItems:"flex-end",fontWeight:"500"}},i.a.createElement("h3",{style:{marginBottom:"0",marginRight:"10px"}},i.a.createElement(o.c,{id:"ITC.AppVersion.SubmitForReview.ReleaseVersion.SectionTitle"})),b),i.a.createElement("p",null,i.a.createElement(o.b,{id:"ITC.AppVersion.SubmitForReview.ReleaseVersion.info"})),i.a.createElement("div",null,i.a.createElement("div",{className:"radio-group___2cvO1"},i.a.createElement("input",{type:"radio",id:"manualRelease",ref:F,name:"releaseType",value:"MANUAL",disabled:s!==v.r.EDITABLE}),i.a.createElement("label",{htmlFor:"manualRelease"},i.a.createElement(o.c,{id:"ITC.AppVersion.SubmitForReview.buttons.manualrelease"}))),i.a.createElement("div",{className:"radio-group___2cvO1"},i.a.createElement("input",{type:"radio",id:"automaticRelease",ref:F,name:"releaseType",value:"AFTER_APPROVAL",disabled:u!==v.r.EDITABLE}),i.a.createElement("label",{htmlFor:"automaticRelease"},i.a.createElement(o.c,{id:"ITC.AppVersion.SubmitForReview.buttons.autorelease"}))),i.a.createElement("div",{className:"radio-group___2cvO1"},i.a.createElement("input",{type:"radio",id:"automaticReleaseAfter",ref:F,name:"releaseType",value:"SCHEDULED",disabled:m!==v.r.EDITABLE}),i.a.createElement("label",{htmlFor:"automaticReleaseAfter"},i.a.createElement(o.c,{id:"ITC.AppVersion.SubmitForReview.buttons.autoReleaseAfter"})))),i.a.createElement("p",{className:"localtimeText___1hI8H"},i.a.createElement(o.c,{id:"ITC.pricing.label.localDateTime"})),i.a.createElement("div",{className:"datepickerContainer___3icip"},i.a.createElement(f.a,{selected:S,onChange:function(e){var t=E()(e).utc(),a=t.toISOString();N.setValue("earliestReleaseDate",a),A(e),C(t)},disabled:g.releaseType!==w||d!==v.r.EDITABLE,showTimeSelect:!0,timeIntervals:60,minDate:new Date,timeCaption:i.a.createElement(o.c,{id:"ITC.Time"}),dateFormat:"MMMM d, yyyy h:mm aa",calendarClassName:c.a.datepicker})),i.a.createElement("p",{className:"utcTime___3WQ8g"},j&&"function"===typeof j.format?j.format("MMM D, YYYY h:mm A [(GMT)]"):null))}S.displayName="VersionRelease",t.default=Object(n.connect)(function(e,t){return _({manualReleaseEditability:Object(y.S)(e.storeVersions),autoReleaseEditability:Object(y.d)(e.storeVersions),scheduledReleaseEditability:Object(y.gb)(e.storeVersions),releaseDateEditability:Object(y.ab)(e.storeVersions),versionRelease:D(e.storeVersions),edits:O(e.storeVersions)},t)},h)(S)}}]);