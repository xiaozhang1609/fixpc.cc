import{c as q,u as et,r as w,j as o,T as rt,m as N}from"./index-B0_DPwqT.js";import{B as F}from"./react-toastify.esm-BZITD8b4.js";import{C as at}from"./copy-37lExMwP.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=q("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=q("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"bpx1uq"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",key:"1pd0s7"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",key:"zq5xbz"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=q("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);var it=Object.defineProperty,dt=(e,t,r)=>t in e?it(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t,r)=>(dt(e,typeof t!="symbol"?t+"":t,r),r);const A=class c{constructor(t){b(this,"_date"),t instanceof c?this._date=new Date(t.toDate()):t instanceof Date?this._date=new Date(t):typeof t=="string"||typeof t=="number"?(this._date=new Date(t),typeof t=="string"&&isNaN(this._date.getTime())&&(this._date=new Date(t.replace(/-/g,"/")))):this._date=new Date}toDate(){return this._date}isValid(){return!isNaN(this._date.getTime())}diff(t,r="day"){const a=new c(t).toDate(),n=this._date.getTime()-a.getTime();switch(r){case"year":return this._date.getFullYear()-a.getFullYear();case"month":return(this._date.getFullYear()-a.getFullYear())*12+(this._date.getMonth()-a.getMonth());case"day":default:return Math.floor(n/(1e3*60*60*24))}}startOf(t){const r=new Date(this._date);switch(t){case"year":r.setMonth(0),r.setDate(1),r.setHours(0,0,0,0);break;case"month":r.setDate(1),r.setHours(0,0,0,0);break;case"day":r.setHours(0,0,0,0);break}return new c(r)}endOf(t){const r=new Date(this._date);switch(t){case"year":r.setMonth(11),r.setDate(31),r.setHours(23,59,59,999);break;case"month":r.setDate(new Date(r.getFullYear(),r.getMonth()+1,0).getDate()),r.setHours(23,59,59,999);break;case"day":r.setHours(23,59,59,999);break}return new c(r)}add(t,r){const a=new Date(this._date);switch(r){case"year":a.setFullYear(a.getFullYear()+t);break;case"month":a.setMonth(a.getMonth()+t);break;case"day":a.setDate(a.getDate()+t);break}return new c(a)}subtract(t,r){return this.add(-t,r)}format(t){const r={YYYY:this._date.getFullYear(),MM:(this._date.getMonth()+1).toString().padStart(2,"0"),DD:this._date.getDate().toString().padStart(2,"0"),HH:this._date.getHours().toString().padStart(2,"0"),mm:this._date.getMinutes().toString().padStart(2,"0"),ss:this._date.getSeconds().toString().padStart(2,"0"),dddd:c.daysOfWeek[this._date.getDay()]};return t.replace(/YYYY|MM|DD|HH|mm|ss|dddd/g,a=>r[a].toString())}year(t){if(t===void 0)return this._date.getFullYear();const r=new Date(this._date);return r.setFullYear(t),new c(r)}month(t){if(t===void 0)return this._date.getMonth();const r=new Date(this._date);return r.setMonth(t),new c(r)}date(t){if(t===void 0)return this._date.getDate();const r=new Date(this._date);return r.setDate(t),new c(r)}day(t){if(t===void 0)return this._date.getDay();{const r=this._date.getDay(),a=t-r,n=new Date(this._date);return n.setDate(this._date.getDate()+a),new c(n)}}isBefore(t){const r=new c(t).toDate();return this._date.getTime()<r.getTime()}isAfter(t){const r=new c(t).toDate();return this._date.getTime()>r.getTime()}isSame(t,r="day"){const a=new c(t).toDate();switch(r){case"year":return this._date.getFullYear()===a.getFullYear();case"month":return this._date.getFullYear()===a.getFullYear()&&this._date.getMonth()===a.getMonth();case"day":default:return this._date.getFullYear()===a.getFullYear()&&this._date.getMonth()===a.getMonth()&&this._date.getDate()===a.getDate()}}isBetween(t,r,a){const n=new c(t).startOf(a).toDate(),i=new c(r).endOf(a).toDate(),s=this.toDate();return s>=n&&s<=i}};b(A,"daysOfWeek",["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]);let lt=A;const y=e=>new lt(e),f=e=>y(e).startOf("day"),j=(e,t)=>{e=f(e),t=f(t);const r=t.diff(e,"day");return Array.from({length:r+1},(a,n)=>e.add(n,"day"))};class ht{constructor(){b(this,"dayDetails",{}),b(this,"holidays",{}),b(this,"workdays",{}),b(this,"inLieuDays",{})}y(t){return this.dayDetails.year=t,this}mark(t){return this.dayDetails.holiday=t,this}save(t,r,a){if(!this.dayDetails.year)throw new Error("should set year before saving holiday");if(!this.dayDetails.holiday)throw new Error("should set holiday before saving holiday");this.dayDetails.dayType=a;const n=y(`${this.dayDetails.year}-${t}-${r}`);return a===2?this.holidays[n.format("YYYY-MM-DD")]=this.dayDetails.holiday:a===1?this.workdays[n.format("YYYY-MM-DD")]=this.dayDetails.holiday:a===3&&(this.inLieuDays[n.format("YYYY-MM-DD")]=this.dayDetails.holiday),this.dayDetails.month=t,this.dayDetails.day=r,this}to(t,r){if(!this.dayDetails.year||!this.dayDetails.month||!this.dayDetails.day)throw new Error("should set year/month/day before saving holiday range");const a=y(`${this.dayDetails.year}-${this.dayDetails.month}-${this.dayDetails.day}`),n=y(`${this.dayDetails.year}-${t}-${r}`);if(n.isBefore(a)||n.isSame(a))throw new Error("end date should be after start date");const i=n.diff(a,"day");for(let s=1;s<=i;s++){const l=a.add(s,"day");this.dayDetails.dayType===2?this.holidays[l.format("YYYY-MM-DD")]=this.dayDetails.holiday:this.dayDetails.dayType===1?this.workdays[l.format("YYYY-MM-DD")]=this.dayDetails.holiday:this.dayDetails.dayType===3&&(this.inLieuDays[l.format("YYYY-MM-DD")]=this.dayDetails.holiday)}return this}w(t,r){return this.save(t,r,1)}r(t,r){return this.save(t,r,2)}i(t,r){return this.save(t,r,3)}ny(){return this.mark("New Year's Day,元旦,1")}s(){return this.mark("Spring Festival,春节,3")}t(){return this.mark("Tomb-sweeping Day,清明,1")}l(){return this.mark("Labour Day,劳动节,1")}d(){return this.mark("Dragon Boat Festival,端午,1")}n(){return this.mark("National Day,国庆节,3")}m(){return this.mark("Mid-autumn Festival,中秋,1")}a(){return this.mark("Anti-Fascist 70th Day,中国人民抗日战争暨世界反法西斯战争胜利70周年纪念日,1")}}const ct=()=>{const e=new ht;return e.y(2024).ny().r(1,1).s().r(2,10).to(2,17).w(2,4).w(2,18).i(2,15).to(2,16).t().r(4,4).to(4,6).w(4,7).i(4,5).l().r(5,1).to(5,5).w(4,28).w(5,11).i(5,2).to(5,3).d().r(6,10).m().r(9,15).to(9,17).w(9,14).i(9,16).n().r(10,1).to(10,7).w(9,29).w(10,12).i(10,4).i(10,7),e.y(2023).ny().r(1,1).to(1,2).s().r(1,21).to(1,27).w(1,28).to(1,29).i(1,26).to(1,27).t().r(4,5).l().r(4,29).to(5,3).w(4,23).w(5,6).i(5,2).to(5,3).d().r(6,22).to(6,24).w(6,25).i(6,23).m().r(9,29).n().r(9,30).to(10,6).w(10,7).to(10,8).i(10,5).to(10,6),e.y(2022).ny().r(1,1).to(1,3).s().r(1,31).to(2,6).w(1,29).w(1,30).i(2,3).to(2,4).t().r(4,3).to(4,5).w(4,2).i(4,4).l().r(4,30).to(5,4).w(4,24).w(5,7).i(5,3).to(5,4).d().r(6,3).to(6,5).m().r(9,10).to(9,12).n().r(10,1).to(10,7).w(10,8).w(10,9).i(10,6).to(10,7).ny().r(12,31),e.y(2021).ny().r(1,1).to(1,3).s().r(2,11).to(2,17).w(2,7).w(2,20).i(2,16).to(2,17).t().r(4,3).to(4,5).l().r(5,1).to(5,5).w(4,25).w(5,8).i(5,4).to(5,5).d().r(6,12).to(6,14).m().r(9,19).to(9,21).w(9,18).i(9,20).n().r(10,1).to(10,7).w(9,26).w(10,9).i(10,6).to(10,7),e.y(2020).ny().r(1,1).s().r(1,24).to(2,2).w(1,19).i(1,29).t().r(4,4).to(4,6).l().r(5,1).to(5,5).w(4,26).w(5,9).i(5,4).to(5,5).d().r(6,25).to(6,27).w(6,28).i(6,26).n().r(10,1).to(10,8).w(9,27).w(10,10).i(10,7).to(10,8),e.y(2019).ny().r(1,1).s().r(2,4).to(2,10).w(2,2).to(2,3).i(2,4).i(2,8).t().r(4,5).to(4,7).l().r(5,1).to(5,4).w(4,28).w(5,5).i(5,2).i(5,3).d().r(6,7).to(6,9).m().r(9,13).to(9,15).n().r(10,1).to(10,7).w(9,29).w(10,12).i(10,4).i(10,7),e.y(2018).ny().r(1,1).s().r(2,15).to(2,21).w(2,11).w(2,24).i(2,19).to(2,21).t().r(4,5).to(4,7).w(4,8).i(4,6).l().r(4,29).to(5,1).w(4,28).i(4,30).d().r(6,18).n().r(10,1).to(10,7).w(9,29).to(9,30).i(10,4).to(10,5).m().r(9,24).ny().r(12,30).to(12,31).w(12,29).i(12,31),e.y(2017).ny().r(1,1).to(1,2).s().r(1,27).to(2,2).w(1,22).w(2,4).i(2,1).to(2,2).t().r(4,2).to(4,4).w(4,1).i(4,3).l().r(5,1).d().r(5,28).to(5,30).w(5,27).i(5,29).n().r(10,1).to(10,8).w(9,30).i(10,6).m().r(10,4),e.y(2016).ny().r(1,1).s().r(2,7).to(2,13).w(2,6).w(2,14).i(2,11).to(2,12).t().r(4,4).l().r(5,1).to(5,2).d().r(6,9).to(6,11).w(6,12).i(6,10).m().r(9,15).to(9,17).w(9,18).i(9,16).n().r(10,1).to(10,7).w(10,8).to(10,9).i(10,6).to(10,7),e.y(2015).ny().r(1,1).to(1,3).w(1,4).i(1,2).s().r(2,18).to(2,24).w(2,15).w(2,28).i(2,23).to(2,24).t().r(4,5).to(4,6).l().r(5,1).d().r(6,20).r(6,22).m().r(9,27).n().r(10,1).to(10,7).w(10,10).i(10,7).a().r(9,3).to(9,4).w(9,6).i(9,4),e.y(2014).ny().r(1,1).s().r(1,31).to(2,6).w(1,26).w(2,8).i(2,5).to(2,6).t().r(4,5).to(4,7).l().r(5,1).to(5,3).w(5,4).i(5,2).d().r(6,2).m().r(9,8).n().r(10,1).to(10,7).w(9,28).w(10,11).i(10,6).to(10,7),e.y(2013).ny().r(1,1).to(1,3).w(1,5).to(1,6).i(1,2).to(1,3).s().r(2,9).to(2,15).w(2,16).to(2,17).i(2,14).to(2,15).t().r(4,4).to(4,6).w(4,7).i(4,5).l().r(4,29).to(5,1).w(4,27).to(4,28).i(4,29).to(4,30).d().r(6,10).to(6,12).w(6,8).to(6,9).i(6,10).to(6,11).m().r(9,19).to(9,21).w(9,22).i(9,20).n().r(10,1).to(10,7).w(9,29).w(10,12).i(10,4).i(10,7),e.y(2012).ny().r(1,1).to(1,3).i(1,3).s().r(1,22).to(1,28).w(1,21).w(1,29).i(1,26).to(1,27).t().r(4,2).to(4,4).w(3,31).w(4,1).i(4,2).to(4,3).l().r(4,29).to(5,1).w(4,28).i(4,30).d().r(6,22).r(6,24).m().r(9,30).n().r(10,1).to(10,7).w(9,29).i(10,5),e.y(2011).ny().r(1,1).to(1,3).s().r(2,2).to(2,8).w(1,30).w(2,12).i(2,7).to(2,8).t().r(4,3).to(4,5).w(4,2).i(4,4).l().r(4,30).to(5,2).d().r(6,4).r(6,6).m().r(9,10).to(9,12).n().r(10,1).to(10,7).w(10,8).to(10,9).i(10,6).to(10,7).ny().w(12,31),e.y(2010).ny().r(1,1).to(1,3).s().r(2,13).to(2,19).w(2,20).to(2,21).i(2,18).to(2,19).t().r(4,3).to(4,5).l().r(5,1).to(5,3).d().r(6,14).to(6,16).w(6,12).to(6,13).i(6,14).to(6,15).m().r(9,22).to(9,24).w(9,19).w(9,25).i(9,23).to(9,24).n().r(10,1).to(10,7).w(9,26).w(10,9).i(10,6).to(10,7),e.y(2009).ny().r(1,1).to(1,3).w(1,4).i(1,2).s().r(1,25).to(1,31).w(1,24).w(2,1).i(1,29).to(1,30).t().r(4,4).to(4,6).l().r(5,1).to(5,3).d().r(5,28).to(5,30).w(5,31).i(5,29).n().r(10,1).to(10,8).w(9,27).w(10,10).i(10,7).to(10,8).m().r(10,3),e.y(2008).ny().r(1,1).s().r(2,6).to(2,12).w(2,2).to(2,3).i(2,11).to(2,12).t().r(4,4).to(4,6).l().r(5,1).to(5,3).w(5,4).i(5,2).d().r(6,7).to(6,9).m().r(9,13).to(9,15).n().r(9,29).to(10,5).w(9,27).to(9,28).i(9,29).to(9,30),e.y(2007).ny().r(1,1).to(1,3).i(1,2).to(1,3).s().r(2,18).to(2,24).w(2,17).w(2,25).i(2,22).to(2,23).l().r(5,1).to(5,7).w(4,28).to(4,29).i(5,4).i(5,7).n().r(10,1).to(10,7).w(9,29).to(9,30).i(10,4).to(10,5).ny().r(12,30).to(12,31).w(12,29).i(12,31),e.y(2006).ny().r(1,1).to(1,3).s().r(1,29).to(2,4).w(1,28).w(2,5).i(2,2).to(2,3).l().r(5,1).to(5,7).w(4,29).to(4,30).i(5,4).to(5,5).n().r(10,1).to(10,7).w(9,30).w(10,8).i(10,5).to(10,6).ny().w(12,30).to(12,31),e.y(2005).ny().r(1,1).to(1,3).s().r(2,9).to(2,15).w(2,5).to(2,6).i(2,14).to(2,15).l().r(5,1).to(5,7).w(4,30).w(5,8).i(5,5).to(5,6).n().r(10,1).to(10,7).w(10,8).to(10,9).i(10,6).to(10,7),e.y(2004).ny().r(1,1).s().r(1,22).to(1,28).w(1,17).to(1,18).i(1,27).to(1,28).l().r(5,1).to(5,7).w(5,8).to(5,9).i(5,6).to(5,7).n().r(10,1).to(10,7).w(10,9).to(10,10).i(10,6).to(10,7),{holidays:e.holidays,workdays:e.workdays,inLieuDays:e.inLieuDays}},{holidays:S,workdays:H,inLieuDays:ut}=ct(),p=(...e)=>{if(e.length!==1)return e.map(r=>p(r));const t=f(e[0]);if(!t.isValid())throw new Error(`unsupported type ${typeof t}, expected type is Date or Dayjs`);return t},V=e=>!Y(e),Y=e=>{const t=p(e),r=t.day(),a=t.format("YYYY-MM-DD");return!!(H[a]||r>=1&&r<=5&&!S[a])},yt=e=>(e=p(e),!!ut[e.format("YYYY-MM-DD")]),mt=e=>{e=p(e);const t=e.format("YYYY-MM-DD");if(H[t])return{date:t,work:!0,name:H[t]};if(S[t])return{date:t,work:!1,name:S[t]};{const r=e.day();return{date:t,work:r!==0&&r!==6,name:e.format("dddd")}}},gt=(e,t,r=!0)=>(e=p(e),t=p(t),r?j(e,t).filter(V).map(a=>a.format("YYYY-MM-DD")):j(e,t).filter(a=>S[a.format("YYYY-MM-DD")]).map(a=>a.format("YYYY-MM-DD"))),wt=(e,t,r=!0)=>(e=p(e),t=p(t),r?j(e,t).filter(Y).map(a=>a.format("YYYY-MM-DD")):j(e,t).filter(a=>Y(a)&&a.day()>=1&&a.day()<=5).map(a=>a.format("YYYY-MM-DD"))),_t=(e=0,t=y())=>{if(t=f(t),e===0){if(Y(t))return t.format("YYYY-MM-DD");e=1}const r=e>0?1:-1;let a=Math.abs(e);for(;a>0;)t=t.add(r,"day"),Y(t)&&a--;return t.format("YYYY-MM-DD")},ft=Object.freeze(Object.defineProperty({__proto__:null,findWorkday:_t,getDayDetail:mt,getHolidaysInRange:gt,getWorkdaysInRange:wt,isHoliday:V,isInLieu:yt,isWorkday:Y},Symbol.toStringTag,{value:"Module"})),pt={the_beginning_of_spring:[4.6295,3.87],rain_water:[19.4599,18.73],the_waking_of_insects:[6.3926,5.63],the_spring_equinox:[21.4155,20.646],pure_brightness:[5.59,4.81],grain_rain:[20.888,20.1],the_beginning_of_summer:[6.318,5.52],lesser_fullness_of_grain:[21.86,21.04],grain_in_beard:[6.5,5.678],the_summer_solstice:[22.2,21.37],lesser_heat:[7.928,7.108],greater_heat:[23.65,22.83],the_beginning_of_autumn:[28.35,7.5],the_end_of_heat:[23.95,23.13],white_dew:[8.44,7.646],the_autumn_equinox:[23.822,23.042],code_dew:[9.098,8.318],frost_descent:[24.218,23.438],the_beginning_of_winter:[8.218,7.438],lesser_snow:[23.08,22.36],greater_snow:[7.9,7.18],the_winter_solstice:[22.6,21.94],lesser_cold:[6.11,5.4055],greater_cold:[20.84,20.12]},Z={1:["lesser_cold","greater_cold"],2:["the_beginning_of_spring","rain_water"],3:["the_waking_of_insects","the_spring_equinox"],4:["pure_brightness","grain_rain"],5:["the_beginning_of_summer","lesser_fullness_of_grain"],6:["grain_in_beard","the_summer_solstice"],7:["lesser_heat","greater_heat"],8:["the_beginning_of_autumn","the_end_of_heat"],9:["white_dew","the_autumn_equinox"],10:["code_dew","frost_descent"],11:["the_beginning_of_winter","lesser_snow"],12:["greater_snow","the_winter_solstice"]},xt={"2026_rain_water":-1,"2084_the_spring_equinox":1,"1911_the_beginning_of_summer":1,"2008_lesser_fullness_of_grain":1,"1902_grain_in_beard":1,"1928_the_summer_solstice":1,"1925_lesser_heat":1,"2016_lesser_heat":1,"1922_greater_heat":1,"2002_the_beginning_of_autumn":1,"1927_white_dew":1,"1942_the_autumn_equinox":1,"2089_frost_descent":1,"2089_the_beginning_of_winter":1,"1978_lesser_snow":1,"1954_greater_snow":1,"1918_the_winter_solstice":-1,"2021_the_winter_solstice":-1,"1982_lesser_cold":1,"2019_lesser_cold":-1,"2000_greater_cold":1,"2082_greater_cold":1},G={lesser_cold:"小寒",greater_cold:"大寒",the_beginning_of_spring:"立春",rain_water:"雨水",the_waking_of_insects:"惊蛰",the_spring_equinox:"春分",pure_brightness:"清明",grain_rain:"谷雨",the_beginning_of_summer:"立夏",lesser_fullness_of_grain:"小满",grain_in_beard:"芒种",the_summer_solstice:"夏至",lesser_heat:"小暑",greater_heat:"大暑",the_beginning_of_autumn:"立秋",the_end_of_heat:"处暑",white_dew:"白露",the_autumn_equinox:"秋分",code_dew:"寒露",frost_descent:"霜降",the_beginning_of_winter:"立冬",lesser_snow:"小雪",greater_snow:"大雪",the_winter_solstice:"冬至"},E=(e,t,r)=>{const a=e>=2e3?21:20,n=e%100,i=.2422,s=pt[r][a===21?1:0];let l=Math.floor(n/4);["lesser_cold","greater_cold","the_beginning_of_spring","rain_water"].includes(r)&&(l=Math.floor((n-1)/4));let d=Math.floor(n*i+s)-l;const _=xt[`${e}_${r}`];return _&&(d+=_),y(`${e}-${t}-${d}`).format("YYYY-MM-DD")},Dt=(e,t)=>{const r=[];let a=f(e);const n=f(t||e);for(;a.isBefore(n)||a.isSame(n);){const i=a.year(),s=a.month()+1;Z[s].forEach(l=>{const d=y(E(i,s,l));(d!=null&&d.isBefore(n)||d!=null&&d.isSame(n))&&(d!=null&&d.isAfter(a)||d!=null&&d.isSame(a))&&r.push({date:d.format("YYYY-MM-DD"),term:l,name:G[l],index:1})}),s===12?a=a.add(1,"year").startOf("year"):a=a.add(1,"month").startOf("month")}return r},bt=(e,t)=>{let r=f(e).subtract(1,"month");const a=f(t||e).add(1,"month"),n=[];for(;r.isBefore(a)||r.isSame(a);){const s=r.year(),l=r.month()+1;Z[l].forEach(d=>{const _=y(E(s,l,d));n.push({term:d,date:_})}),r.month()===11?r=r.add(1,"year").startOf("year"):r=r.add(1,"month").startOf("month")}const i=[];return n.forEach((s,l)=>{for(let d=s.date;n[l+1]&&d.isBefore(n[l+1].date);d=d.add(1,"day"))i.push({day:d,term:s.term,name:G[s.term],index:d.diff(s.date,"day")+1})}),t||(t=e),i.filter(s=>s.day.isBetween(e,t,"day")).map(s=>({date:s.day.format("YYYY-MM-DD"),term:s.term,name:s.name,index:s.index}))},Yt=Object.freeze(Object.defineProperty({__proto__:null,getSolarTermDate:E,getSolarTerms:Dt,getSolarTermsInRange:bt},Symbol.toStringTag,{value:"Module"})),L=[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,21952,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],J=["零","一","二","三","四","五","六","七","八","九"],kt=["正","二","三","四","五","六","七","八","九","十","冬","腊"],Mt=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],vt=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],Nt=["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],K=e=>{let t=348;for(let r=32768;r>8;r>>=1)t+=L[e-1900]&r?1:0;return t+P(e)},z=e=>L[e-1900]&15,P=e=>z(e)?L[e-1900]&65536?30:29:0,O=e=>Mt[e%10]+vt[e%12],B=(e,t)=>L[e-1900]&65536>>t?30:29,jt=e=>Nt[(e-4)%12],St=e=>{const t=["初","十","廿","三十"];if(e===10)return"初十";if(e===20)return"二十";if(e===30)return"三十";const r=Math.floor(e/10),a=e%10;return t[r]+(a?J[a]:"")},R=e=>{const t=new Array(7).fill(0);let r=0,a=0;const n=y(new Date(1900,0,31)),i=y(e);let s=i.diff(n,"day");t[5]=s+40,t[4]=14;let l=1900;for(;l<2100&&s>0;l++)r=K(l),s-=r,t[4]+=12;s<0&&(s+=r,l--,t[4]-=12),t[0]=l,t[3]=l-1864,a=z(l),t[6]=0;for(let d=1;d<13&&s>0;d++)a>0&&d===a+1&&t[6]===0?(--d,t[6]=1,r=P(l)):r=B(l,d),t[6]===1&&d===a+1&&(t[6]=0),s-=r,t[6]===0&&t[4]++,t[1]=d;return s===0&&a>0&&t[6]===1?t[6]=0:s<0&&(s+=r,t[1]--,t[4]--),t[2]=s+1,{date:i.format("YYYY-MM-DD"),lunarYear:t[0],lunarMon:t[1]+1,lunarDay:t[2],isLeap:!!t[6],zodiac:jt(t[0]),yearCyl:O(t[3]),monCyl:O(t[4]),dayCyl:O(t[5]),lunarYearCN:`${t[0].toString().split("").map(d=>J[Number(d)]).join("")}`,lunarMonCN:`${kt[t[1]]}月`,lunarDayCN:St(t[2])}},Q=(e,t)=>{const r=y(e),a=y(t),n=[];for(let i=r;i.isBefore(a)||i.isSame(a,"day");i=i.add(1,"day"))n.push(R(i));return n},U=e=>{const t=y(e),r=t.year(),a=t.month()+1,n=t.date();let i=0;for(let g=1900;g<r;g++)i+=K(g);let s=z(r);for(let g=1;g<a;g++)i+=B(r,g),g===s&&(i+=P(r));i+=n-1;const l=y(new Date(1900,0,31)),d=l.add(i,"day").format("YYYY-MM-DD");let _=i,M;return s===a&&(_+=B(r,a),M=l.add(_,"day").format("YYYY-MM-DD")),{date:d,leapMonthDate:M}},Lt={getLunarDate:R,getLunarDatesInRange:Q,getSolarDateFromLunar:U},Tt=Object.freeze(Object.defineProperty({__proto__:null,default:Lt,getLunarDate:R,getLunarDatesInRange:Q,getSolarDateFromLunar:U},Symbol.toStringTag,{value:"Module"})),I={...ft,...Yt,...Tt};function It(){const{t:e}=et(),[t,r]=w.useState(""),[a,n]=w.useState(""),[i,s]=w.useState({days:"00",hours:"00",minutes:"00",seconds:"00"}),[l,d]=w.useState(""),[_,M]=w.useState(!0),g=w.useCallback(()=>{const h=new Date,u=h.getFullYear();for(let m=u;m<=u+2;m++)for(let x=1;x<=2;x++)for(let D=1;D<=31;D++){const C=`${m}-${x.toString().padStart(2,"0")}-${D.toString().padStart(2,"0")}`;try{const k=I.getLunarDate(C);if(k.lunarMon===1&&k.lunarDay===1){const v=new Date(m,x-1,D);if(v>h)return v}}catch{continue}}return null},[]),T=w.useCallback(()=>{try{const h=new Date,u={year:"numeric",month:"long",day:"numeric",weekday:"long"};r(h.toLocaleDateString("zh-CN",u));const m=I.getLunarDate(h.toISOString().split("T")[0]);n(`农历${m.lunarYear}年${m.lunarMonCN}${m.lunarDayCN}`)}catch{F.error("日期更新失败",{position:"top-right",autoClose:2e3,theme:"dark"})}},[]),$=w.useCallback(()=>{try{const h=new Date,u=g();if(!u)return;const m=u.getTime()-h.getTime(),x=Math.floor(m/(1e3*60*60*24)),D=Math.floor(m%(1e3*60*60*24)/(1e3*60*60)),C=Math.floor(m%(1e3*60*60)/(1e3*60)),k=Math.floor(m%(1e3*60)/1e3);s({days:x.toString().padStart(2,"0"),hours:D.toString().padStart(2,"0"),minutes:C.toString().padStart(2,"0"),seconds:k.toString().padStart(2,"0")});const v=u.toLocaleDateString("zh-CN"),tt=I.getLunarDate(u.toISOString().split("T")[0]);d(`下一个农历新年：${v} (农历${tt.lunarYear}年正月初一)`)}catch{F.error("倒计时更新失败",{position:"top-right",autoClose:2e3,theme:"dark"})}},[g]),X=w.useCallback(()=>{const h=`距离${l}
还有 ${i.days}天 ${i.hours}时 ${i.minutes}分 ${i.seconds}秒`;navigator.clipboard.writeText(h).then(()=>{F.success("复制成功",{position:"top-right",autoClose:2e3,theme:"dark"})})},[i,l]);return w.useEffect(()=>{const h=setInterval(T,1e3),u=setInterval($,1e3);return T(),$(),M(!1),()=>{clearInterval(h),clearInterval(u)}},[T,$]),w.useMemo(()=>(h,u)=>o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("div",{className:"text-2xl font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 w-full text-center",children:u}),o.jsx("span",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:h})]}),[]),_?o.jsx("div",{className:"w-full max-w-2xl mx-auto p-4",children:o.jsxs("div",{className:"text-center",children:[o.jsx(rt,{className:"w-8 h-8 mx-auto mb-4 animate-spin text-blue-500"}),o.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"加载中..."})]})}):o.jsxs("div",{className:"relative w-full min-h-[calc(100vh-4rem)] bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-red-900/30 dark:to-orange-900/20 p-4 md:p-8",children:[o.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[o.jsx("div",{className:"absolute top-0 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"}),o.jsx("div",{className:"absolute bottom-1/4 right-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"}),o.jsx("div",{className:"absolute top-1/3 right-1/4 w-48 h-48 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-500"})]}),o.jsxs("div",{className:"relative max-w-6xl mx-auto",children:[o.jsxs(N.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-12",children:[o.jsx("div",{className:"inline-flex items-center justify-center p-4 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 dark:from-red-500/20 dark:via-orange-500/20 dark:to-yellow-500/20 rounded-full mb-6 group hover:scale-110 transition-transform duration-300",children:o.jsx(st,{className:"w-12 h-12 text-red-600 dark:text-red-400 group-hover:rotate-12 transition-transform duration-300"})}),o.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent",children:e("newYearCountdown")}),o.jsx("p",{className:"mt-4 text-lg text-gray-600 dark:text-gray-400",children:"倒数春节，共迎新年"})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[o.jsx(N.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"lg:col-span-1",children:o.jsxs("div",{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl dark:shadow-red-900/20 border border-red-100/50 dark:border-red-900/20",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[o.jsx(ot,{className:"w-6 h-6 text-red-500"}),o.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-gray-50",children:"今日时间"})]}),o.jsxs("div",{className:"space-y-6",children:[o.jsx(W,{label:"公历",value:t}),o.jsx(W,{label:"农历",value:a})]})]})}),o.jsx(N.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"lg:col-span-2",children:o.jsxs("div",{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl dark:shadow-red-900/20 border border-red-100/50 dark:border-red-900/20",children:[o.jsxs("div",{className:"flex items-center justify-between mb-6",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(nt,{className:"w-6 h-6 text-red-500"}),o.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-gray-50",children:"春节倒计时"})]}),o.jsx("button",{onClick:X,className:"p-2 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-colors",children:o.jsx(at,{className:"w-5 h-5 text-red-500"})})]}),o.jsx("div",{className:"grid grid-cols-4 gap-4 mb-6",children:["天","时","分","秒"].map((h,u)=>o.jsx($t,{label:h,value:[i.days,i.hours,i.minutes,i.seconds][u]},h))}),o.jsx("div",{className:"text-center text-gray-600 dark:text-gray-400",children:l})]})})]})]})]})}const W=({label:e,value:t})=>o.jsxs("div",{className:"relative group",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity"}),o.jsx("div",{className:"relative p-4 bg-red-50/50 dark:bg-red-900/10 rounded-2xl",children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:e}),o.jsx("span",{className:"text-lg font-medium text-gray-900 dark:text-gray-50",children:t})]})})]}),$t=({label:e,value:t})=>o.jsxs(N.div,{whileHover:{scale:1.05},className:"relative group",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"}),o.jsxs("div",{className:"relative bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-4 text-center",children:[o.jsx("div",{className:"text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent",children:t}),o.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:e})]})]});export{It as default};