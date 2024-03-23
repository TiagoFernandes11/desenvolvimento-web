const tecnologias = new Map();

tecnologias.set("React", { framework: false });
tecnologias.set("Angular", { framework: true });

console.log(tecnologias.React)
console.log(tecnologias.get("React").framework)
