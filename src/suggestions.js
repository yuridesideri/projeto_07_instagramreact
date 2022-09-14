export default function Suggestions() {
    function suggestionCreator (name, image, status) {
        this.name = name;
        this.image = `assets/img/${image}`;
        this.status = status;
    }

    const suggestions = [
        new suggestionCreator('bad.vibes.memes','bad.vibes.memes.svg', 'Segue você'),
        new suggestionCreator('chibirdart','chibirdart.svg', 'Segue você'),
        new suggestionCreator('razoesparaacreditar','razoesparaacreditar.svg', 'Novo no Instagram'),
        new suggestionCreator('adorable_animals','adorable_animals.svg', 'Segue você'),
        new suggestionCreator('smallcutecats','smallcutecats.svg', 'Segue você'),
    ]

    return (
    <div className="sugestoes">
        <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
        {suggestions.map(suggestion => {return (
            <div key={suggestion.name} className="sugestao">
            <div className="usuario">
                <img alt="" src={suggestion.image} />
                <div className="texto">
                    <div className="nome">{suggestion.name}</div>
                    <div className="razao">{suggestion.status}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>)
        })}
    </div>)
}