export const arrayStructuredClone = () => {
    const animes = [
        {
            id: 1,
            name: 'Jujutsu Kaisen',
        },
        {
            id: 2,
            name: 'FMAB',
        },
        {
            id: 3,
            name: 'SNK',
        }
    ];

    const animesCopy = structuredClone(animes);

    animesCopy[0].name = 'Jujutsu Kaise 2';

    console.table(animes);
    console.table(animesCopy);

}