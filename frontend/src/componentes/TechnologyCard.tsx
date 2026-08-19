type TecnologyCardProps = {
    nome: string;
    descricao: string;
    idade: number;
};

function TecnologyCard({ nome, descricao, idade }: TecnologyCardProps) {
    return (
        <div>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <p>{idade}</p>
        </div>
    );
}

export default TecnologyCard;