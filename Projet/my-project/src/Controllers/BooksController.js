const books = [
    {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        year: 2000,
        cover: "https://www.babelio.com/couv/CVT_10230_671162.jpg",
        resume:
            "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle.",
    },
    {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        year: 2000,
        cover: "https://www.babelio.com/couv/CVT_10230_671170.jpg",
        resume:
            "Harry Potter is a wizard. He is in his second year at Hogwarts School of Witchcraft and Wizardry. Little does he know that this year will be just as eventful as the last.",
    },
    {
        id: 3,
        title: "Hunger Games: La Ballade du serpent et de l'oiseau chanteur",
        author: "Suzanne Collins",
        year: 2020,
        cover: "https://m.media-amazon.com/images/I/41s4dtGvHYL._SX195_.jpg",
        resume:
            "Ambition, pouvoir, vengeance... La Ballade du serpent et de l'oiseau chanteur met en scène la dixième édition annuelle des Hunger Games, un combat pour la vie, qui oppose uniquement des adolescents.",
    },
];

exports.getBooks = (req, res) => {
    // res.send('<h1>A propos de nous</h1>');
    res.render('pages/books/index', {
        books: books
    })
};