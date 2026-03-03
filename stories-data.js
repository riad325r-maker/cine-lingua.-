// stories-data.js
const STORIES = [
    {
        id: 1,
        title: "Ahmed's Day",
        arabicTitle: "يوم أحمد",
        level: "مبتدئ",
        image: "https://images.unsplash.com/photo-1503676596287-62081e8d3b1c?w=400",
        content: "Ahmed is a student. He wakes up at 6:00 AM every day. He washes his face and brushes his teeth. Then he eats breakfast with his family. He goes to school at 7:30 AM. He studies math, science, and English. After school, he plays football with his friends. He returns home at 5:00 PM. He does his homework and watches TV. He goes to bed at 9:00 PM.",
        arabicContent: "أحمد طالب. يستيقظ الساعة 6:00 صباحاً كل يوم. يغسل وجهه ويفرك أسنانه. ثم يتناول الفطور مع عائلته. يذهب إلى المدرسة الساعة 7:30 صباحاً. يدرس الرياضيات والعلوم والإنجليزية. بعد المدرسة، يلعب كرة القدم مع أصدقائه. يعود للمنزل الساعة 5:00 مساءً. يؤدي واجباته المنزلية ويشاهد التلفاز. يذهب للنوم الساعة 9:00 مساءً.",
        words: ["wakes up", "brushes", "breakfast", "school", "plays", "homework"],
        newWords: [
            { word: "wakes up", arabic: "يستيقظ" },
            { word: "brushes", arabic: "يفرك" },
            { word: "breakfast", arabic: "فطور" }
        ],
        questions: [
            { question: "What time does Ahmed wake up?", options: ["5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM"], correct: 1, explanation: "Ahmed wakes up at 6:00 AM" },
            { question: "What does Ahmed do after breakfast?", options: ["Watches TV", "Goes to school", "Plays football", "Sleeps"], correct: 1, explanation: "After breakfast, he goes to school" },
            { question: "What time does Ahmed go to bed?", options: ["8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"], correct: 1, explanation: "He goes to bed at 9:00 PM" }
        ]
    },
    {
        id: 2,
        title: "The Lost Cat",
        arabicTitle: "القطة الضائعة",
        level: "مبتدئ",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
        content: "Sara has a white cat named Snowy. One day, Snowy went outside and didn't come back. Sara looked everywhere. She asked her neighbors, 'Have you seen my cat?' Nobody saw Snowy. Sara was very sad. The next day, she heard a sound from the garden. It was Snowy! She was with three small kittens. Sara was very happy.",
        arabicContent: "سارة لديها قطة بيضاء اسمها سنوي. في يوم من الأيام، خرجت سنوي ولم تعد. بحثت سارة في كل مكان. سألت جيرانها: 'هل رأيتم قطتي؟' لم ير أحد سنوي. كانت سارة حزينة جداً. في اليوم التالي، سمعت صوتاً من الحديقة. كانت سنوي! كانت مع ثلاث قطط صغيرة. كانت سارة سعيدة جداً.",
        words: ["cat", "outside", "looked", "neighbors", "sound", "kittens"],
        newWords: [
            { word: "cat", arabic: "قطة" },
            { word: "outside", arabic: "خارج" },
            { word: "neighbors", arabic: "جيران" }
        ],
        questions: [
            { question: "What is the cat's name?", options: ["Sara", "Snowy", "White", "Kitty"], correct: 1, explanation: "The cat's name is Snowy" },
            { question: "Where did Sara find Snowy?", options: ["In the house", "In the garden", "At school", "At the park"], correct: 1, explanation: "She found Snowy in the garden" },
            { question: "How many kittens did Snowy have?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "Snowy had three kittens" }
        ]
    }
];

function getStoryById(id) {
    return STORIES.find(story => story.id === parseInt(id));
}
