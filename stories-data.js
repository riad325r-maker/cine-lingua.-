// stories-data.js
const STORIES_DATA = {
    beginner: [
        {
            id: 1,
            title: "My Daily Routine",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400",
            content: "I wake up at 6:30 every morning. I wash my face and brush my teeth. Then I eat breakfast with my family. I usually have bread and cheese. After breakfast, I go to school. My school is near my house, so I walk there. I study English, Math, and Science. I like English class the most. After school, I come home and do my homework. In the evening, I play with my brother. I go to bed at 9 o'clock.",
            arabic: "أستيقظ الساعة 6:30 كل صباح. أغسل وجهي وأفرك أسناني. ثم أتناول الفطور مع عائلتي. عادةً آكل خبزاً وجبناً. بعد الفطور، أذهب إلى المدرسة. مدرستي قريبة من منزلي، لذا أمشي إليها. أدرس الإنجليزية والرياضيات والعلوم. أحب حصة الإنجليزية أكثر شيء. بعد المدرسة، أعود للمنزل وأقوم بواجباتي. في المساء، ألعب مع أخي. أذهب للنوم الساعة 9.",
            difficulty: "مبتدئ",
            words: ["wake up", "breakfast", "school", "homework", "bed"],
            questions: [
                {
                    question: "What time does he wake up?",
                    options: ["6:00", "6:30", "7:00", "7:30"],
                    correct: 1,
                    explanation: "He wakes up at 6:30."
                },
                {
                    question: "What is his favorite subject?",
                    options: ["Math", "Science", "English", "Arabic"],
                    correct: 2,
                    explanation: "He likes English class the most."
                },
                {
                    question: "What time does he go to bed?",
                    options: ["8:00", "9:00", "10:00", "11:00"],
                    correct: 1,
                    explanation: "He goes to bed at 9 o'clock."
                }
            ]
        },
        {
            id: 2,
            title: "The Brave Rabbit",
            image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400",
            content: "Rosie was a small rabbit. She lived in the forest with her family. One day, she heard a baby bird crying. The bird fell from its nest. The nest was high in a tree. Rosie could not climb. She asked her friend Mr. Squirrel for help. Mr. Squirrel climbed the tree and put the bird back. The mother bird was very happy. All the animals said Rosie was brave.",
            arabic: "روزي كانت أرنبة صغيرة. عاشت في الغابة مع عائلتها. في يوم، سمعت عصفوراً صغيراً يبكي. سقط العصفور من عشه. العش كان عالياً في الشجرة. روزي لم تستطع التسلق. طلبت المساعدة من صديقها السيد سنجاب. تسلق السيد سنجاب الشجرة وأعاد العصفور. كانت العصفورة الأم سعيدة جداً. جميع الحيوانات قالت إن روزي شجاعة.",
            difficulty: "مبتدئ",
            words: ["rabbit", "forest", "bird", "help", "brave"],
            questions: [
                {
                    question: "Who was crying?",
                    options: ["Rosie", "A baby bird", "Mr. Squirrel", "The mother bird"],
                    correct: 1,
                    explanation: "A baby bird was crying."
                },
                {
                    question: "Who helped Rosie?",
                    options: ["The mother bird", "Mr. Squirrel", "The baby bird", "No one"],
                    correct: 1,
                    explanation: "Mr. Squirrel helped."
                },
                {
                    question: "What did the animals say about Rosie?",
                    options: ["She was scared", "She was tall", "She was brave", "She was small"],
                    correct: 2,
                    explanation: "They said she was brave."
                }
            ]
        },
        {
            id: 3,
            title: "The Lost Kitten",
            image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
            content: "Maya found a white kitten in her garden. The kitten looked scared and alone. Maya took it to her mother. They gave the kitten milk and made a soft bed. They made posters with the kitten's picture. Two days later, a girl named Lily came. It was her kitten, Snowball. Maya was sad to see it go, but happy it found its home.",
            arabic: "وجدت مايا قطة بيضاء في حديقتها. بدت القطة خائفة ووحيدة. أخذتها مايا إلى أمها. أعطوا القطة حليباً وصنعوا لها سريراً ناعماً. صنعوا ملصقات عليها صورة القطة. بعد يومين، جاءت فتاة اسمها ليلي. كانت قطتها، سنوبول. حزنت مايا لفراقها، لكنها سعيدة لأنها وجدت بيتها.",
            difficulty: "مبتدئ",
            words: ["kitten", "garden", "milk", "posters", "owner"],
            questions: [
                {
                    question: "Where did Maya find the kitten?",
                    options: ["At school", "In the garden", "At the park", "On the street"],
                    correct: 1,
                    explanation: "She found it in her garden."
                },
                {
                    question: "What did they give the kitten?",
                    options: ["Water", "Juice", "Milk", "Bread"],
                    correct: 2,
                    explanation: "They gave it milk."
                },
                {
                    question: "What was the kitten's name?",
                    options: ["Maya", "Lily", "Snowball", "Whiskers"],
                    correct: 2,
                    explanation: "Its name was Snowball."
                }
            ]
        },
        {
            id: 4,
            title: "The Kind Farmer",
            image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400",
            content: "Farmer Hassan found a hurt bird in his farm. Its wing was broken. He took it inside and made a small nest. He gave it food and water. Weeks later, the bird healed. It flew away. One day, the bird returned with a seed. Hassan planted it. A beautiful flower grew. Hassan remembered the bird's kindness.",
            arabic: "وجد المزارع حسن عصفوراً مصاباً في مزرعته. جناحه كان مكسوراً. أخذه إلى الداخل وصنع له عشاً صغيراً. أعطاه طعاماً وماءً. بعد أسابيع، شفي العصفور. طار بعيداً. في يوم، عاد العصفور ومع بذرة. زرعها حسن. نمت زهرة جميلة. تذكر حسن لطف العصفور.",
            difficulty: "مبتدئ",
            words: ["farmer", "bird", "hurt", "seed", "flower"],
            questions: [
                {
                    question: "What was wrong with the bird?",
                    options: ["It was lost", "Its wing was broken", "It was hungry", "It was old"],
                    correct: 1,
                    explanation: "Its wing was broken."
                },
                {
                    question: "What did the bird bring back?",
                    options: ["A flower", "A seed", "A leaf", "A worm"],
                    correct: 1,
                    explanation: "It brought a seed."
                },
                {
                    question: "What grew from the seed?",
                    options: ["A tree", "A flower", "Grass", "Vegetables"],
                    correct: 1,
                    explanation: "A beautiful flower grew."
                }
            ]
        },
        {
            id: 5,
            title: "The Honest Woodcutter",
            image: "https://images.unsplash.com/photo-1542601098-8fc114e148e2?w=400",
            content: "Karim was a poor woodcutter. His axe fell into the river. He was sad. A fairy appeared. She brought a golden axe. Karim said it wasn't his. She brought a silver axe. Karim said no. She brought his iron axe. Karim was happy. The fairy gave him all three axes for his honesty.",
            arabic: "كريم كان حطاباً فقيراً. سقط فأسه في النهر. كان حزيناً. ظهرت جنية. أحضرت فأساً من ذهب. قال كريم إنه ليس له. أحضرت فأساً من فضة. قال كريم لا. أحضرت فأسه الحديدي. كان كريم سعيداً. أعطته الجنية الفؤوس الثلاثة لصدقه.",
            difficulty: "مبتدئ",
            words: ["woodcutter", "axe", "river", "fairy", "honest"],
            questions: [
                {
                    question: "What did Karim lose?",
                    options: ["His money", "His axe", "His food", "His shoes"],
                    correct: 1,
                    explanation: "His axe fell into the river."
                },
                {
                    question: "What was the first axe the fairy brought?",
                    options: ["Iron", "Silver", "Golden", "Wooden"],
                    correct: 2,
                    explanation: "The first axe was golden."
                },
                {
                    question: "Why did the fairy give him all three axes?",
                    options: ["Because he was poor", "Because he was honest", "Because he cried", "Because he was kind"],
                    correct: 1,
                    explanation: "She rewarded his honesty."
                }
            ]
        }
    ],
    intermediate: [
        {
            id: 6,
            title: "A Trip to London",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400",
            content: "Last summer, my family and I visited London. We flew by plane for five hours. We stayed in a small hotel. We saw Big Ben and rode the London Eye. The view was amazing. We also visited the Tower of London and learned about its history. We tried fish and chips, which was delicious. I bought souvenirs for my friends. It was a wonderful trip.",
            arabic: "الصيف الماضي، زرت أنا وعائلتي لندن. سافرنا بالطائرة لمدة خمس ساعات. مكثنا في فندق صغير. رأينا بيغ بن وركبنا عين لندن. كان المنظر رائعاً. زرنا أيضاً برج لندن وتعلمنا عن تاريخه. جربنا السمك والبطاطا المقلية، وكان لذيذاً. اشتريت هدايا لأصدقائي. كانت رحلة رائعة.",
            difficulty: "متوسط",
            words: ["trip", "plane", "view", "history", "souvenirs"],
            questions: [
                {
                    question: "How did they travel to London?",
                    options: ["By car", "By train", "By plane", "By ship"],
                    correct: 2,
                    explanation: "They flew by plane."
                },
                {
                    question: "What did they ride?",
                    options: ["Big Ben", "London Eye", "Tower Bridge", "A bus"],
                    correct: 1,
                    explanation: "They rode the London Eye."
                },
                {
                    question: "What food did they try?",
                    options: ["Pizza", "Fish and chips", "Burger", "Sushi"],
                    correct: 1,
                    explanation: "They tried fish and chips."
                }
            ]
        },
        {
            id: 7,
            title: "Hard Work Pays Off",
            image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=400",
            content: "Ali wanted to be a doctor. He studied hard every day. He never gave up, even when he was tired. He prepared well for his exams. After many years, he succeeded. Now he is a doctor and helps sick people. His brother learned that hard work leads to success.",
            arabic: "أراد علي أن يصبح طبيباً. درس بجد كل يوم. لم يستسلم أبداً، حتى عندما كان متعباً. استعد جيداً لامتحاناته. بعد سنوات عديدة، نجح. الآن هو طبيب ويساعد المرضى. تعلم أخوه أن العمل الجاد يؤدي للنجاح.",
            difficulty: "متوسط",
            words: ["doctor", "study", "success", "hard work", "goal"],
            questions: [
                {
                    question: "What did Ali want to become?",
                    options: ["A teacher", "A doctor", "An engineer", "A lawyer"],
                    correct: 1,
                    explanation: "He wanted to be a doctor."
                },
                {
                    question: "What did Ali do every day?",
                    options: ["Played games", "Studied hard", "Watched TV", "Slept"],
                    correct: 1,
                    explanation: "He studied hard every day."
                },
                {
                    question: "What did his brother learn?",
                    options: ["Success is easy", "Hard work pays off", "Don't study", "Friends are important"],
                    correct: 1,
                    explanation: "He learned that hard work leads to success."
                }
            ]
        },
        {
            id: 8,
            title: "Healthy Habits",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400",
            content: "To stay healthy, eat fruits and vegetables every day. Avoid too much sugar and fast food. Exercise for 30 minutes daily. You can walk, run, or play sports. Get 8-10 hours of sleep. Drink plenty of water. Small changes can make a big difference.",
            arabic: "لتبقى صحياً، كل الفواكه والخضروات كل يوم. تجنب الكثير من السكر والوجبات السريعة. تمرن لمدة 30 دقيقة يومياً. يمكنك المشي أو الركض أو ممارسة الرياضة. احصل على 8-10 ساعات من النوم. اشرب الكثير من الماء. التغييرات الصغيرة تصنع فرقاً كبيراً.",
            difficulty: "متوسط",
            words: ["healthy", "exercise", "sleep", "water", "habits"],
            questions: [
                {
                    question: "How much exercise is recommended?",
                    options: ["10 minutes", "20 minutes", "30 minutes", "60 minutes"],
                    correct: 2,
                    explanation: "Exercise for 30 minutes daily."
                },
                {
                    question: "How many hours of sleep do you need?",
                    options: ["5-6", "6-7", "8-10", "10-12"],
                    correct: 2,
                    explanation: "Get 8-10 hours of sleep."
                },
                {
                    question: "What should you drink plenty of?",
                    options: ["Soda", "Juice", "Water", "Coffee"],
                    correct: 2,
                    explanation: "Drink plenty of water."
                }
            ]
        },
        {
            id: 9,
            title: "Technology and Life",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
            content: "Technology helps us learn and communicate. We can watch videos and read online. We can video call friends far away. But too much screen time is bad. It can cause eye strain and headaches. It's important to find a balance. Spend time outside and talk to people face to face.",
            arabic: "التكنولوجيا تساعدنا على التعلم والتواصل. يمكننا مشاهدة فيديوهات والقراءة عبر الإنترنت. يمكننا الاتصال المرئي مع الأصدقاء البعيدين. لكن وقت الشاشة الطويل ضار. يمكن أن يسبب إجهاد العين والصداع. من المهم إيجاد توازن. اقض وقتاً في الخارج وتحدث مع الناس وجهاً لوجه.",
            difficulty: "متوسط",
            words: ["technology", "communicate", "screen time", "balance", "online"],
            questions: [
                {
                    question: "What can technology help us do?",
                    options: ["Sleep more", "Learn and communicate", "Eat more", "Run faster"],
                    correct: 1,
                    explanation: "It helps us learn and communicate."
                },
                {
                    question: "What problem can too much screen time cause?",
                    options: ["Stronger eyes", "Better sleep", "Eye strain", "More energy"],
                    correct: 2,
                    explanation: "It can cause eye strain and headaches."
                },
                {
                    question: "What should we find?",
                    options: ["More apps", "A balance", "Longer screen time", "More games"],
                    correct: 1,
                    explanation: "It's important to find a balance."
                }
            ]
        },
        {
            id: 10,
            title: "Protect the Environment",
            image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400",
            content: "Our planet is in danger from pollution. People throw trash everywhere. Factories and cars make the air dirty. We can help by recycling. Reduce, reuse, and recycle. Save energy by turning off lights. Plant trees. Walk or bike for short trips. Small actions help protect the Earth.",
            arabic: "كوكبنا في خطر من التلوث. يرمي الناس القمامة في كل مكان. المصانع والسيارات تجعل الهواء قذراً. يمكننا المساعدة بإعادة التدوير. قلل، أعد الاستخدام، وأعد التدوير. وفر الطاقة بإطفاء الأنوار. ازرع الأشجار. امش أو اركب الدراجة للرحلات القصيرة. الأفعال الصغيرة تساعد في حماية الأرض.",
            difficulty: "متوسط",
            words: ["pollution", "recycle", "energy", "protect", "Earth"],
            questions: [
                {
                    question: "What is the biggest problem mentioned?",
                    options: ["Traffic", "Pollution", "Noise", "Population"],
                    correct: 1,
                    explanation: "Pollution is a big problem."
                },
                {
                    question: "What does 'reduce, reuse, recycle' mean?",
                    options: ["Create more trash", "Waste resources", "Create less waste", "Burn trash"],
                    correct: 2,
                    explanation: "It means creating less waste."
                },
                {
                    question: "How can we save energy?",
                    options: ["Leave lights on", "Turn off lights", "Use more electricity", "Watch more TV"],
                    correct: 1,
                    explanation: "Turn off lights when you leave a room."
                }
            ]
        }
    ],
    advanced: [
        {
            id: 11,
            title: "Economic Cycles",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400",
            content: "Economies have cycles of growth and recession. During growth, people spend more and companies hire. During recession, people spend less and unemployment rises. Factors like politics, disasters, and technology cause these changes. Countries with diverse economies are more resilient and recover faster.",
            arabic: "الاقتصادات لها دورات من النمو والركود. أثناء النمو، ينفق الناس أكثر وتوظف الشركات. أثناء الركود، ينفق الناس أقل وترتفع البطالة. عوامل مثل السياسة والكوارث والتكنولوجيا تسبب هذه التغييرات. الدول ذات الاقتصادات المتنوعة أكثر مرونة وتتعافى أسرع.",
            difficulty: "متقدم",
            words: ["economy", "growth", "recession", "resilient", "diverse"],
            questions: [
                {
                    question: "What happens during economic growth?",
                    options: ["Unemployment rises", "People spend less", "Companies hire more", "Businesses struggle"],
                    correct: 2,
                    explanation: "Companies hire more during growth."
                },
                {
                    question: "What can cause economic changes?",
                    options: ["Only weather", "Politics and disasters", "Only technology", "Only consumer choice"],
                    correct: 1,
                    explanation: "Politics, disasters, and technology cause changes."
                },
                {
                    question: "What makes a country more resilient?",
                    options: ["One industry", "A diverse economy", "Isolation", "Less trade"],
                    correct: 1,
                    explanation: "A diverse economy makes a country more resilient."
                }
            ]
        },
        {
            id: 12,
            title: "The Scientific Method",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400",
            content: "Science begins with curiosity. Scientists observe and ask questions. They form a hypothesis, an educated guess. Then they test it with experiments. They collect data and analyze results. If evidence supports the hypothesis, it may become a theory. This careful process ensures knowledge is based on proof.",
            arabic: "يبدأ العلم بالفضول. يلاحظ العلماء ويطرحون أسئلة. يشكلون فرضية، تخميناً مدروساً. ثم يختبرونها بالتجارب. يجمعون البيانات ويحللون النتائج. إذا دعمت الأدلة الفرضية، قد تصبح نظرية. هذه العملية الدقيقة تضمن أن المعرفة مبنية على الإثبات.",
            difficulty: "متقدم",
            words: ["hypothesis", "experiment", "data", "theory", "proof"],
            questions: [
                {
                    question: "What is a hypothesis?",
                    options: ["A proven fact", "An educated guess", "A scientific law", "A random idea"],
                    correct: 1,
                    explanation: "A hypothesis is an educated guess."
                },
                {
                    question: "What do scientists do after forming a hypothesis?",
                    options: ["Publish it", "Test it", "Accept it", "Forget it"],
                    correct: 1,
                    explanation: "They test it with experiments."
                },
                {
                    question: "What may a hypothesis become if supported?",
                    options: ["A question", "A theory", "A guess", "An observation"],
                    correct: 1,
                    explanation: "It may become a theory."
                }
            ]
        },
        {
            id: 13,
            title: "Understanding Cultures",
            image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400",
            content: "In a globalized world, understanding different cultures is essential. Gestures and customs vary. What is polite in one culture may be rude in another. Cultural awareness helps avoid misunderstandings. It builds stronger relationships. Embracing diversity broadens our view and fosters empathy.",
            arabic: "في عالم معولم، فهم الثقافات المختلفة ضروري. الإيماءات والعادات تختلف. ما هو مهذب في ثقافة قد يكون وقحاً في أخرى. الوعي الثقافي يساعد في تجنب سوء الفهم. يبني علاقات أقوى. احتضان التنوع يوسع نظرتنا ويعزز التعاطف.",
            difficulty: "متقدم",
            words: ["culture", "diverse", "awareness", "empathy", "customs"],
            questions: [
                {
                    question: "Why is cultural awareness important?",
                    options: ["It's not important", "It avoids misunderstandings", "It makes things harder", "It's only for travelers"],
                    correct: 1,
                    explanation: "It helps avoid misunderstandings."
                },
                {
                    question: "What varies across cultures?",
                    options: ["Only language", "Gestures and customs", "Only food", "Only clothing"],
                    correct: 1,
                    explanation: "Gestures and customs vary."
                },
                {
                    question: "What does embracing diversity do?",
                    options: ["Limits our view", "Broadens our view", "Creates conflict", "Makes us less empathetic"],
                    correct: 1,
                    explanation: "It broadens our view and fosters empathy."
                }
            ]
        },
        {
            id: 14,
            title: "Infrastructure Matters",
            image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400",
            content: "Infrastructure includes roads, power grids, and internet. Good infrastructure helps businesses and attracts investment. Poor infrastructure causes traffic and slow growth. Investing in infrastructure creates jobs and improves life. It is essential for sustainable development.",
            arabic: "البنية التحتية تشمل الطرق وشبكات الكهرباء والإنترنت. البنية التحتية الجيدة تساعد الشركات وتجذب الاستثمار. البنية التحتية السيئة تسبب الازدحام وبطء النمو. الاستثمار في البنية التحتية يخلق فرص عمل ويحسن الحياة. إنه ضروري للتنمية المستدامة.",
            difficulty: "متقدم",
            words: ["infrastructure", "investment", "development", "sustainable", "growth"],
            questions: [
                {
                    question: "What does infrastructure include?",
                    options: ["Only roads", "Roads, power, and internet", "Only schools", "Only hospitals"],
                    correct: 1,
                    explanation: "It includes roads, power grids, and internet."
                },
                {
                    question: "What does good infrastructure attract?",
                    options: ["Pollution", "Investment", "Traffic", "Unemployment"],
                    correct: 1,
                    explanation: "It attracts investment."
                },
                {
                    question: "What does investing in infrastructure create?",
                    options: ["Problems", "Jobs", "Pollution", "Traffic"],
                    correct: 1,
                    explanation: "It creates jobs."
                }
            ]
        },
        {
            id: 15,
            title: "Resilience in Adversity",
            image: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?w=400",
            content: "Communities face challenges like disasters or crises. How they respond defines them. Good leaders promote unity and cooperation. Working together helps overcome obstacles. This shows human resilience. Shared struggles can make communities stronger and more united.",
            arabic: "تواجه المجتمعات تحديات مثل الكوارث أو الأزمات. كيف يستجيبون يحددهم. القادة الجيدون يعززون الوحدة والتعاون. العمل معاً يساعد في التغلب على العقبات. هذا يظهر الصمود البشري. النضالات المشتركة يمكن أن تجعل المجتمعات أقوى وأكثر اتحاداً.",
            difficulty: "متقدم",
            words: ["adversity", "resilience", "unity", "cooperation", "challenge"],
            questions: [
                {
                    question: "What defines communities in adversity?",
                    options: ["Their wealth", "How they respond", "Their size", "Their location"],
                    correct: 1,
                    explanation: "How they respond defines them."
                },
                {
                    question: "What do good leaders promote?",
                    options: ["Division", "Unity and cooperation", "Fear", "Isolation"],
                    correct: 1,
                    explanation: "They promote unity and cooperation."
                },
                {
                    question: "What does working together show?",
                    options: ["Weakness", "Human resilience", "Dependence", "Fear"],
                    correct: 1,
                    explanation: "It shows human resilience."
                }
            ]
        }
    ]
};
