import{_,o as r,c as d,b as e,w as b,h as n,v as i,d as u,p,f as v,e as f}from"./index-1535466e.js";const h={name:"contact-component",data(){return{name:"",email:"",message:""}},methods:{submitForm(){console.log("Form submitted"),console.log("Name:",this.name),console.log("Email:",this.email),console.log("Message:",this.message)}}},l=s=>(p("data-v-40aaa75b"),s=s(),v(),s),g={class:"container contact-page d-flex justify-content-center align-items-center vh-100"},x={class:"row"},C=u('<div class="col-md-6 mr-2 align-center" data-v-40aaa75b><h1 data-v-40aaa75b>Contactos de Restaurant Campestre Rich</h1><p class="align-middle" data-v-40aaa75b> ¡Esperamos escuchar de ti pronto! Puedes ponerte en contacto con nosotros utilizando el formulario o la información de contacto a continuación: </p><ul class="list-unstyled mt-4" data-v-40aaa75b><li class="mb-3" data-v-40aaa75b><i class="bi bi-geo-alt-fill" data-v-40aaa75b></i> Dirección: Calle de la Tienda, Número 123 </li><li class="mb-3" data-v-40aaa75b><i class="bi bi-telephone-fill" data-v-40aaa75b></i> Teléfono: (123) 456-7890 </li><li class="mb-3" data-v-40aaa75b><i class="bi bi-envelope-fill" data-v-40aaa75b></i> Correo Electrónico: info@tutienda.com </li></ul></div>',1),y={class:"col-md-6"},V=l(()=>e("h2",null,"Formulario de Contacto",-1)),w={class:"mb-3"},E=l(()=>e("label",{for:"name",class:"form-label"},"Nombre:",-1)),N={class:"mb-3"},F=l(()=>e("label",{for:"email",class:"form-label"},"Correo Electrónico:",-1)),S={class:"mb-3"},I=l(()=>e("label",{for:"message",class:"form-label"},"Mensaje:",-1)),M=l(()=>e("button",{type:"submit",class:"btn btn-primary"},"Enviar",-1));function q(s,a,m,U,t,c){return r(),d("div",g,[e("div",x,[C,e("div",y,[V,e("form",{onSubmit:a[3]||(a[3]=b((...o)=>c.submitForm&&c.submitForm(...o),["prevent"]))},[e("div",w,[E,n(e("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":a[0]||(a[0]=o=>t.name=o),required:""},null,512),[[i,t.name]])]),e("div",N,[F,n(e("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":a[1]||(a[1]=o=>t.email=o),required:""},null,512),[[i,t.email]])]),e("div",S,[I,n(e("textarea",{class:"form-control",id:"message","onUpdate:modelValue":a[2]||(a[2]=o=>t.message=o),required:""},null,512),[[i,t.message]])]),M],32)])])])}const B=_(h,[["render",q],["__scopeId","data-v-40aaa75b"]]),T={class:"content"},k={__name:"ContactView",setup(s){return(a,m)=>(r(),d("div",T,[f(B)]))}};export{k as default};