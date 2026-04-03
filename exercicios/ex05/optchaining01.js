const response = {
    data: {
        usuario: {
            nome: "Ana",
            endereco: {
                cidade: "São Paulo"
            }
        }
    }
};

const { data } = response ?? {};

const cidade = data?.usuario?.endereco?.cidade ?? "Desconhecida";

console.log(cidade);

// -----------------------------------------------------
const usuarios = [
    {
        nome: "Ana",
        idade: 25,
        endereco: {
            cidade: "São Paulo"
        }
    },
    {
        nome: "Carlos",
        idade: 0,
        endereco: null
    },
    {
        nome: "",
        idade: 30
    },
    {}
];

function formatarUsuario(usuario){
    const nome = usuario?.nome || "Usuario sem nome"
    const idade = usuario?.idade ?? "Não informada"
    const cidade = usuario?.endereco?.cidade ??  "Cidade desconhecida"

    return {
        nome,
        idade,
        cidade
    }
}

const resultado = usuarios.map(usuario => formatarUsuario(usuario))

console.log(resultado)
