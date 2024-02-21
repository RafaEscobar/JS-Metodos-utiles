export const toMethods = () => {
    const animes = [
        'Oregairu',
        'FMAB',
        'Tokyo Revengers'
    ];
    //! Ordenado ascendente
    // const animesCopy = animes.toSorted();

    //! Ordenado descendente
    // const animesCopy = animes.toReversed();

    //! Cambia uno o más elementos por otro
    // const animesCopy = animes.toSpliced(0, 1, 'Jujutsu Kaisen');

    console.table(animes);
    console.table(animesCopy);
}