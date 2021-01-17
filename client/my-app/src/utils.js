export const templateTitle = () => (
    {
        "id": new Date().getTime(),
        "tipo":"Titulo",
        "titulo": "## TÍTULO",
        "descripcion": "### Descripción",
        "capitulos" : [],
        "multimedia" : []
      }
);

export const templateChapter = () => (
    {
        "id": new Date().getTime(),
        "tipo":"Capitulo",
        "titulo":"### CAPÍTULO XX",
        "descripcion": "### DESCRIPCIÓN CAPÍTULO XX.",
        "articulos" : [],
        "multimedia" : [],    
        "keywords":[]
    }
);

export const templateArticle = () => (
    {
        "id": new Date().getTime()+"",
        "tipo":"Articulo",
        "titulo": "### NUEVO ARTÍCULO",
        "descripcion": "### Descripcion articulo ejemplo \n Puedes usar Markdown \n **Ejemplo:** ~~texto inexequible~~",
        "literales" : [],
        "paragrafos" : [],
        "multimedia" : [],
        "keywords":[]
    }
);

export const templateItem = (value) => (
    {
        "id":new Date().getTime(),
        "titulo" : value,
        "descripcion": "Ejemplo de descripción...",
        "notas":[],
        "keywords":[]
    }
);