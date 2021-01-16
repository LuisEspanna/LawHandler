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