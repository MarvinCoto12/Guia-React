type ListaNombresProps = {
    Deportes: string[];
};

export function DeportesFav({ Deportes }: ListaNombresProps) {
    return (
        <ul>
            {Deportes.map((Deportes, index) => (
                <li key={index}>{Deportes}</li>
            ))}
        </ul>
    );
}
