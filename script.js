const quotes = [
    { quote: "La vie est ce que nous en faisons.", author: "Virginia Woolf" },
    { quote: "Le succès, c'est de se coucher chaque soir avec l'âme en paix.", author: "Paulo Coelho" },
    { quote: "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions.", author: "Dalai Lama" },
    { quote: "La seule chose que nous ayons à craindre est la peur elle-même.", author: "Franklin D. Roosevelt" },
    { quote: "Ne pleurez pas parce que c'est fini, souriez parce que c'est arrivé.", author: "Dr. Seuss" },
    { quote: "L'avenir appartient à ceux qui croient en la beauté de leurs rêves.", author: "Eleanor Roosevelt" },
    { quote: "Le plus grand risque est de ne prendre aucun risque.", author: "Mark Zuckerberg" },
    { quote: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès.", author: "Albert Schweitzer" },
    { quote: "La simplicité est la sophistication suprême.", author: "Leonardo da Vinci" },
    { quote: "Il faut toujours viser la lune, car même en cas d'échec, on atterrit dans les étoiles.", author: "Oscar Wilde" },
    { quote: "La meilleure façon de prédire l'avenir est de le créer.", author: "Peter Drucker" },
    { quote: "La créativité, c'est l'intelligence qui s'amuse.", author: "Albert Einstein" },
    { quote: "Rien n'est permanent, sauf le changement.", author: "Héraclite" },
    { quote: "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.", author: "Confucius" },
    { quote: "La sagesse commence dans l'émerveillement.", author: "Socrate" },
    { quote: "Croyez que vous le pouvez et vous serez à mi-chemin.", author: "Theodore Roosevelt" },
    { quote: "La véritable sagesse est de savoir que l'on ne sait rien.", author: "Socrate" },
    { quote: "Ne rêvez pas votre vie, vivez vos rêves.", author: "Unknown" },
    { quote: "Il n'y a qu'un bonheur dans la vie, c'est d'aimer et d'être aimé.", author: "George Sand" },
    { quote: "Le plus grand échec est de ne pas avoir le courage d'oser.", author: "Abbée Pierre" },
    { quote: "Chaque jour est une nouvelle vie.", author: "Dale Carnegie" },
    { quote: "L'éducation est l'arme la plus puissante pour changer le monde.", author: "Nelson Mandela" },
    { quote: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein" },
    { quote: "Le bonheur est parfois caché dans l'inconnu.", author: "Victor Hugo" },
    { quote: "Il n'y a qu'une seule façon d'échouer, c'est d'abandonner avant d'avoir réussi.", author: "Georges Clemenceau" },
];

document.getElementById('new-quote').addEventListener('click', generateQuote);

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById('quote').textContent = selectedQuote.quote;
    document.getElementById('author').textContent = `- ${selectedQuote.author}`;
}

// Générer une citation au chargement initial
generateQuote();
     
