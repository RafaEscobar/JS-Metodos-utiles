export const arrayWith = () => {
    const state = [
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

    let index = 1;
    const newAnime = 'Kimetsu';

    //! Problema
    // const newState = state.map( (hero, i) => {
    //     if ( i == index ) {
    //         hero.name = newAnime;
    //     }
    //     return hero;
    // });

    const newState = structuredClone(state).with(index, {
        ...state.at(index),
        name: newAnime,
    });

    state[0].name = 'Oregairu';

    console.table(state);
    console.table(newState);

}