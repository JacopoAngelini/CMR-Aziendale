"use strict";(self.webpackChunkProgettoFinale=self.webpackChunkProgettoFinale||[]).push([[592],{606:(h,c,e)=>{e.d(c,{C:()=>n});var t=e(5e3),s=e(4594),_=e(7423),u=e(1083);const r=function(){return["/"]},o=function(){return["/signup"]};let n=(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(m){return new(m||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-auth-shared"]],decls:9,vars:4,consts:[["id","background"],["color","primary"],[1,"spacer"],["mat-raised-button","","routerLinkActive","active",1,"mx-3",3,"routerLink"],["mat-raised-button","","routerLinkActive","active",3,"routerLink"]],template:function(m,v){1&m&&(t._UZ(0,"div",0),t.TgZ(1,"mat-toolbar",1)(2,"span"),t._uU(3,"Gestione clienti e fatture"),t.qZA(),t._UZ(4,"span",2),t.TgZ(5,"a",3),t._uU(6,"Login"),t.qZA(),t.TgZ(7,"a",4),t._uU(8,"Sign Up"),t.qZA()()),2&m&&(t.xp6(5),t.Q6J("routerLink",t.DdM(2,r)),t.xp6(2),t.Q6J("routerLink",t.DdM(3,o)))},directives:[s.Ye,_.zs,u.yS,u.Od],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}.background[_ngcontent-%COMP%]{width:100%;height:100%;background-color:red}"]}),a})()},3917:(h,c,e)=>{e.d(c,{p:()=>r});var t=e(9808),s=e(7110),_=e(1083),u=e(5e3);let r=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({imports:[[t.ez,s.q,_.Bz]]}),o})()},4936:(h,c,e)=>{e.d(c,{k:()=>U});var t=e(5e3),s=e(1083),_=e(2638),u=e(4594),r=e(7423),o=e(9808),n=e(288);function a(i,l){1&i&&(t.TgZ(0,"h2",22),t._uU(1,"Lista Utenti"),t.qZA())}function g(i,l){1&i&&(t.TgZ(0,"h2",22),t._uU(1,"Lista Clienti"),t.qZA())}function m(i,l){1&i&&(t.TgZ(0,"h2",22),t._uU(1,"Nuovo Cliente"),t.qZA())}function v(i,l){1&i&&(t.TgZ(0,"h2",22),t._uU(1,"Lista Fatture"),t.qZA())}function M(i,l){1&i&&(t.TgZ(0,"h2",22),t._uU(1,"Nuova Fattura"),t.qZA())}function A(i,l){1&i&&(t.TgZ(0,"h2",22),t._uU(1,"Fatture Del Cliente"),t.qZA())}const f=["*","*","*","*","*","*","*"],L=function(){return["/home"]},C=function(){return["/"]},E=function(){return["/users"]},O=function(){return["/customers"]},P=function(){return["/customers",0]},T=function(){return["/invoices"]};let U=(()=>{class i{constructor(d){this.router=d,this.showFiller=!1,this.userList=!1,this.customersList=!1,this.NewCustomersList=!1,this.invoicesList=!1,this.Newinvoices=!1,this.InvoicesCustomerList=!1}ngOnInit(){}logout(){confirm("sicuro di voler uscire ?")&&(localStorage.removeItem("user"),this.router.navigate(["/"]))}goUsers(){this.router.navigate(["/users"])}}return i.\u0275fac=function(d){return new(d||i)(t.Y36(s.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-sidebar"]],inputs:{userList:"userList",customersList:"customersList",NewCustomersList:"NewCustomersList",invoicesList:"invoicesList",Newinvoices:"Newinvoices",InvoicesCustomerList:"InvoicesCustomerList"},ngContentSelectors:f,decls:51,vars:18,consts:[["autosize","",1,"s-container","background-home"],["id","background"],["color","primary"],[1,"sidenav-content"],["type","button","mat-raised-button","",3,"click"],[1,"bi","bi-list","fs-4"],["mat-raised-button","","routerLinkActive","active",1,"mx-3",3,"routerLink"],[1,"bi","bi-house"],["class","text-white border border-2 border-white rounded px-1",4,"ngIf"],[1,"spacer"],["mat-raised-button","","routerLinkActive","active",1,"mx-3",3,"routerLink","click"],[1,"bi","bi-box-arrow-left"],["mode","side",1,"sidenav"],["drawer",""],[1,"content"],[1,"text-primary"],[1,"bi","bi-people"],["mat-raised-button","","routerLinkActive","active",1,"",3,"routerLink"],[1,"bi","bi-activity"],["mat-raised-button","","routerLinkActive","active",1,"me-3",3,"routerLink"],["mat-raised-button","","routerLinkActive","active",3,"routerLink"],[1,"bi","bi-receipt-cutoff"],[1,"text-white","border","border-2","border-white","rounded","px-1"]],template:function(d,p){if(1&d){const D=t.EpF();t.F$t(f),t.TgZ(0,"mat-drawer-container",0),t._UZ(1,"div",1),t.TgZ(2,"mat-toolbar",2)(3,"div",3)(4,"button",4),t.NdJ("click",function(){return t.CHM(D),t.MAs(20).toggle()}),t._UZ(5,"i",5),t.qZA()(),t.TgZ(6,"a",6),t._UZ(7,"i",7),t._uU(8," Home"),t.qZA(),t.YNc(9,a,2,0,"h2",8),t.YNc(10,g,2,0,"h2",8),t.YNc(11,m,2,0,"h2",8),t.YNc(12,v,2,0,"h2",8),t.YNc(13,M,2,0,"h2",8),t.YNc(14,A,2,0,"h2",8),t._UZ(15,"span",9),t.TgZ(16,"a",10),t.NdJ("click",function(){return p.logout()}),t._UZ(17,"i",11),t._uU(18," Logout"),t.qZA()(),t.TgZ(19,"mat-drawer",12,13)(21,"mat-expansion-panel",14)(22,"mat-expansion-panel-header")(23,"mat-panel-title",15),t._UZ(24,"i",16),t._uU(25," Utenti "),t.qZA()(),t.TgZ(26,"a",17),t._uU(27,"Tutti gli utenti"),t.qZA()(),t.TgZ(28,"mat-expansion-panel",14)(29,"mat-expansion-panel-header")(30,"mat-panel-title",15),t._UZ(31,"i",18),t._uU(32," Clienti "),t.qZA()(),t.TgZ(33,"a",19),t._uU(34,"Tutti i clienti"),t.qZA(),t.TgZ(35,"a",20),t._uU(36,"Nuovo cliente"),t.qZA()(),t.TgZ(37,"mat-expansion-panel",14)(38,"mat-expansion-panel-header")(39,"mat-panel-title",15),t._UZ(40,"i",21),t._uU(41," Fatture "),t.qZA()(),t.TgZ(42,"a",19),t._uU(43,"Tutte le fatture"),t.qZA()()(),t.Hsn(44,0,["#home",""]),t.Hsn(45,1,["#users",""]),t.Hsn(46,2,["#customers",""]),t.Hsn(47,3,["#newcustomers",""]),t.Hsn(48,4,["#invoices",""]),t.Hsn(49,5,["#newinvoice",""]),t.Hsn(50,6,["#ivoicesbycustomer",""]),t.qZA()}2&d&&(t.xp6(6),t.Q6J("routerLink",t.DdM(12,L)),t.xp6(3),t.Q6J("ngIf",p.userList),t.xp6(1),t.Q6J("ngIf",p.customersList),t.xp6(1),t.Q6J("ngIf",p.NewCustomersList),t.xp6(1),t.Q6J("ngIf",p.invoicesList),t.xp6(1),t.Q6J("ngIf",p.Newinvoices),t.xp6(1),t.Q6J("ngIf",p.InvoicesCustomerList),t.xp6(2),t.Q6J("routerLink",t.DdM(13,C)),t.xp6(10),t.Q6J("routerLink",t.DdM(14,E)),t.xp6(7),t.Q6J("routerLink",t.DdM(15,O)),t.xp6(2),t.Q6J("routerLink",t.DdM(16,P)),t.xp6(7),t.Q6J("routerLink",t.DdM(17,T)))},directives:[_.kh,u.Ye,r.lW,r.zs,s.yS,s.Od,o.O5,_.jA,n.ib,n.yz,n.yK],styles:[".s-container[_ngcontent-%COMP%]{width:100%;height:100%}.sidenav-content[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:center}.sidenav[_ngcontent-%COMP%]{padding:20px}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.content[_ngcontent-%COMP%]{display:contents}.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#00f}"]}),i})()},5253:(h,c,e)=>{e.d(c,{l:()=>r});var t=e(9808),s=e(7110),_=e(1083),u=e(5e3);let r=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({imports:[[t.ez,s.q,_.Bz]]}),o})()},1792:(h,c,e)=>{e.d(c,{x:()=>u});var t=e(2340),s=e(5e3),_=e(520);let u=(()=>{class r{constructor(n){this.http=n,this.pathApi=t.N.pathApi}getAllInvoices(n){return this.http.get(this.pathApi+`/api/fatture?page=${n}&size=20&sort=id,ASC`)}getInvoicesByCustomer(n,a){return this.http.get(this.pathApi+`/api/fatture/cliente/${a}?page=${n}&size=20&sort=id,ASC`)}deleteInvoice(n){return this.http.delete(this.pathApi+`/api/fatture/${n}`)}addInvoice(n){return this.http.post(this.pathApi+"/api/fatture",n)}editInvoice(n,a){return this.http.put(this.pathApi+`/api/fatture/${n}`,a)}}return r.\u0275fac=function(n){return new(n||r)(s.LFG(_.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);