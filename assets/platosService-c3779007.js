import{a as s}from"./index-55325895.js";const a="/restaurant-rich/data/platos.json",p={async getPlatos(){try{return(await s.get(a)).data.platos}catch(o){throw console.error("Error al obtener los platos:",o),o}},async obtenerPlatosEnPromocion(){try{return(await s.get(a)).data.platos.filter(t=>t.promotion===!0)}catch(o){throw o}},async buscarPlatoPorId(o){try{const t=(await s.get(a)).data.platos.find(n=>n.id===o);if(t)return t;throw error}catch(r){throw r}}};export{p};
