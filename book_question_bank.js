// Research-backed Battle of the Books question bank.
// Structured so the quiz app can later filter by selected books.

const bookCatalog = [
  { id: "the-very-very-far-north", title: "The Very, Very Far North", author: "Dan Bar-El" },
  { id: "the-terrible-two", title: "The Terrible Two", author: "Mac Barnett and Jory John" },
  {
    id: "whoosh-lonnie-johnsons-super-soaking-stream-of-inventions",
    title: "Whoosh! Lonnie Johnson's Super Soaking Stream of Inventions",
    author: "Chris Barton"
  },
  { id: "el-deafo", title: "El Deafo", author: "Cece Bell" },
  { id: "book-scavenger", title: "Book Scavenger", author: "Jennifer Chambliss Bertman" },
  { id: "seven-wonders-of-sassafras-springs", title: "The Seven Wonders of Sassafras Springs", author: "Betty G. Birney" },
  { id: "gregor-the-overlander", title: "Gregor the Overlander", author: "Suzanne Collins" },
  { id: "the-way-to-rio-luna", title: "The Way to Rio Luna", author: "Zoraida Córdova" },
  { id: "ruby-holler", title: "Ruby Holler", author: "Sharon Creech" },
  { id: "bud-not-buddy", title: "Bud, Not Buddy", author: "Christopher Paul Curtis" },
  { id: "dragons-in-a-bag", title: "Dragons in a Bag", author: "Zetta Elliott" },
  { id: "dog-squad", title: "Dog Squad", author: "Chris Grabenstein" },
  { id: "the-million-dollar-shot", title: "The Million Dollar Shot", author: "Dan Gutman" },
  { id: "found", title: "Found", author: "Margaret Peterson Haddix" },
  { id: "the-detectives-assistant", title: "The Detective's Assistant", author: "Kate Hannigan" },
  { id: "full-of-beans", title: "Full of Beans", author: "Jennifer L. Holm" },
  {
    id: "regarding-the-fountain",
    title: "Regarding the Fountain: A Tale, in Letters, of Liars and Leaks",
    author: "Kate Klise and M. Sarah Klise"
  },
  { id: "restart", title: "Restart", author: "Gordon Korman" },
  { id: "pie-in-the-sky", title: "Pie in the Sky", author: "Remy Lai" },
  { id: "savvy", title: "Savvy", author: "Ingrid Law" },
  { id: "where-the-mountain-meets-the-moon", title: "Where the Mountain Meets the Moon", author: "Grace Lin" },
  { id: "glitch", title: "Glitch", author: "Laura Martin" },
  { id: "snow-treasure", title: "Snow Treasure", author: "Marie McSwigan" },
  { id: "becoming-muhammad-ali", title: "Becoming Muhammad Ali", author: "James Patterson and Kwame Alexander" },
  { id: "the-camping-trip-that-changed-america", title: "The Camping Trip That Changed America", author: "Barb Rosenstock" },
  { id: "harry-potter-and-the-sorcerers-stone", title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
  { id: "night-of-the-twisters", title: "Night of the Twisters", author: "Ivy Ruckman" },
  { id: "dealing-with-dragons", title: "Dealing with Dragons", author: "Patricia C. Wrede" }
];

function makeBookQuestions({ bookId, answer, author, sources, evidenceLevel = "high", questions }) {
  return questions.map(([question, explanation, customEvidenceLevel, customSources], index) => ({
    id: `${bookId}-${index + 1}`,
    bookId,
    question,
    answer,
    author,
    explanation,
    evidenceLevel: customEvidenceLevel || evidenceLevel,
    sources: customSources || sources
  }));
}

const storyQuestionBank = [
  ...makeBookQuestions({
    bookId: "the-very-very-far-north",
    answer: "The Very, Very Far North",
    author: "Dan Bar-El",
    sources: [
      "https://www.simonandschuster.com/books/The-Very-Very-Far-North/Dan-Bar-el/The-Very-Very-Far-North/9781534433427",
      "https://www.kirkusreviews.com/book-reviews/dan-bar-el/the-very-very-far-north/"
    ],
    questions: [
      [
        "In which book does a curious bear learn from a scholarly owl that he is a polar bear after exploring a wrecked ship?",
        "Duane meets C.C. inside the shipwreck and first learns what kind of animal he is."
      ],
      [
        "In which book does a new home turn out to be a rock cave that already has a mattress in it?",
        "C.C. guides Duane to a cave near the beach, and its mattress becomes one of the funniest comforts of his new home."
      ],
      [
        "In which book does a handless grandfather clock get hauled out of a wreck to decorate a cave?",
        "Duane furnishes his cave with strange shipwreck treasures, including a grandfather clock that no longer tells time."
      ],
      [
        "In which book does a vain musk ox receive the perfect new name after admiring his own reflection?",
        "Duane names the self-absorbed musk ox Handsome, and the name fits exactly as intended."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "the-terrible-two",
    answer: "The Terrible Two",
    author: "Mac Barnett and Jory John",
    sources: [
      "https://www.macbarnett.com/the-terrible-two",
      "https://www.commonsensemedia.org/book-reviews/the-terrible-two-book-1"
    ],
    questions: [
      [
        "In which book does a famous prankster move to a valley known mostly for cows and expect to rule a new school?",
        "Miles Murphy arrives in Yawnee Valley expecting to be the best prankster there, but the town has surprises waiting for him."
      ],
      [
        "In which book does a new student discover that his school already has a prank mastermind?",
        "Miles is stunned to find out that someone at his new school can out-prank him."
      ],
      [
        "In which book does a prank war between rivals slowly turn into a partnership?",
        "The early battle of practical jokes eventually leads Miles and his rival to work together."
      ],
      [
        "In which book do school pranks and a cow-filled town help create a legendary comic duo?",
        "The book tells the origin story of the prank pair who become known as the Terrible Two."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "whoosh-lonnie-johnsons-super-soaking-stream-of-inventions",
    answer: "Whoosh! Lonnie Johnson's Super Soaking Stream of Inventions",
    author: "Chris Barton",
    sources: [
      "https://books.apple.com/us/audiobook/whoosh-lonnie-johnsons-super-soaking-stream-of-inventions/id1641130076",
      "https://www.slj.com/review/whoosh-lonnie-johnsons-super-soaking-stream-of-inventions"
    ],
    questions: [
      [
        "In which book does a burst of water from a sink turn a serious experiment into a toy idea?",
        "While testing one of his inventions, Lonnie Johnson sees water blast across a room and realizes it could become an amazing water gun."
      ],
      [
        "In which book does a child who once built rockets later build a robot from scratch as a teenager?",
        "The biography follows Lonnie Johnson's inventing life from childhood rockets to a homemade robot in his teen years."
      ],
      [
        "In which book does an inventor work on the Galileo mission before making a giant splash with a toy?",
        "Before the Super Soaker, Lonnie Johnson worked as an engineer on the Galileo orbiter and probe."
      ],
      [
        "In which book does first place at a science fair foreshadow a life full of invention?",
        "School Library Journal highlights Johnson's early science fair success as part of the path that led to his later inventions."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "el-deafo",
    answer: "El Deafo",
    author: "Cece Bell",
    sources: [
      "https://www.penguinrandomhouse.com/books/735614/el-deafo-by-cece-bell/",
      "https://www.rif.org/sites/default/files/documents/2024/04/12/El%20Deafo%20Discussion%20Guide.pdf"
    ],
    questions: [
      [
        "In which book does a special hearing device let a student hear her teacher even outside the classroom?",
        "Cece discovers that the Phonic Ear lets her hear the teacher in places far beyond the desk rows."
      ],
      [
        "In which book does a child begin to imagine herself as a superhero called Listener for All?",
        "Cece turns the awkwardness of her hearing device into the bold superhero identity of El Deafo."
      ],
      [
        "In which book does a bulky box strapped to a child's chest become both a problem and a superpower?",
        "The Phonic Ear makes Cece feel different, but it also gives her abilities that feel almost magical."
      ],
      [
        "In which book does passing a microphone to the teacher each day make a student feel noticed in the hardest way?",
        "The discussion guide emphasizes how the school routine around Cece's device adds to her self-consciousness."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "book-scavenger",
    answer: "Book Scavenger",
    author: "Jennifer Chambliss Bertman",
    sources: [
      "https://bookscavenger.com/books/book-scavenger/",
      "https://static.macmillan.com/static/macmillan/2020-online-resources/downloads/book-scavenger-common-core-guide.pdf"
    ],
    questions: [
      [
        "In which book does a family move to a city famous for a hidden-book game built on clues and puzzles?",
        "Emily arrives in San Francisco, home of the Book Scavenger game created by her literary hero Garrison Griswold."
      ],
      [
        "In which book does the attack on a game creator derail the launch of a brand-new puzzle challenge?",
        "The guide explains that Griswold is attacked just before he can unveil an epic new game."
      ],
      [
        "In which book do two friends discover an odd clue that leads toward a valuable prize?",
        "Emily and James follow the trail of ciphers and clues left behind after Griswold's attack."
      ],
      [
        "In which book do ciphers, codes, and city landmarks send young sleuths racing ahead of dangerous adults?",
        "The novel combines cryptography, local San Francisco history, and a tense hunt for Griswold's hidden secret."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "seven-wonders-of-sassafras-springs",
    answer: "The Seven Wonders of Sassafras Springs",
    author: "Betty G. Birney",
    sources: [
      "https://bettybirney.com/sassafras.php",
      "https://www.supersummary.com/the-seven-wonders-of-sassafras-springs/summary/"
    ],
    questions: [
      [
        "In which book is a boy challenged to find seven wonders in his own town instead of traveling out West?",
        "Eben's father tells him to look for wonders in Sassafras Springs before dreaming of bigger journeys."
      ],
      [
        "In which book do wonders include a flying outhouse and an evil ship in a bottle?",
        "The official book page lists odd, story-filled local marvels instead of famous world monuments."
      ],
      [
        "In which book is the final wonder tied to woodcarvings that tell the story of a town and its future?",
        "Uncle Alf's carvings become part of the last wonder Eben uncovers."
      ],
      [
        "In which book do everyday objects and town stories become more amazing than a faraway trip?",
        "Eben learns that the biggest wonders in Sassafras Springs are hidden in plain sight."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "gregor-the-overlander",
    answer: "Gregor the Overlander",
    author: "Suzanne Collins",
    sources: [
      "https://www.kirkusreviews.com/book-reviews/suzanne-collins/gregor-the-overlander/",
      "https://www.commonsensemedia.org/book-reviews/gregor-the-overlander-underland-chronicles-book-1"
    ],
    questions: [
      [
        "In which book do a boy and his little sister tumble through a laundry-room grate into a hidden world below the city?",
        "Gregor and Boots fall into the Underland, where an enormous underground adventure begins."
      ],
      [
        "In which book does a search for a missing father become tangled with an ancient prophecy?",
        "Once Gregor reaches the Underland, he learns that finding his father is tied to a dangerous quest."
      ],
      [
        "In which book do giant bats, rats, and cockroaches fill a dangerous underground kingdom?",
        "The Underland is populated by oversized creatures that are both allies and enemies."
      ],
      [
        "In which book is a reluctant boy pulled into a war he never expected to fight beneath his own home?",
        "Gregor becomes central to the conflicts of the Underland even though he never meant to be a hero there."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "the-way-to-rio-luna",
    answer: "The Way to Rio Luna",
    author: "Zoraida Córdova",
    sources: [
      "https://www.publishersweekly.com/9781338239546",
      "https://www.kirkusreviews.com/book-reviews/zoraida-cordova/the-way-to-rio-luna/"
    ],
    questions: [
      [
        "In which book does an older sister leave behind a beloved fairy-tale volume before disappearing?",
        "Before Pili vanishes, she leaves Danny the treasured book that becomes his key to magic and hope."
      ],
      [
        "In which book does a child dig in a backyard searching for a secret portal and lose his most valuable book because of it?",
        "Danny's foster parents take away his treasured copy after he tries to reach magic by digging for an entrance."
      ],
      [
        "In which book does a school trip to a huge library lead to magic arrows and an original copy of a mysterious story?",
        "At the New York Public Library, Danny discovers the original The Way to Rio Luna with the help of strange magic."
      ],
      [
        "In which book does a new friend help a boy search a magical land for his missing sister?",
        "Glory Papillon joins Danny as he follows the path toward Rio Luna and toward Pili."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "ruby-holler",
    answer: "Ruby Holler",
    author: "Sharon Creech",
    evidenceLevel: "medium",
    sources: [
      "https://www.publishersweekly.com/9780060277321",
      "https://en.wikipedia.org/wiki/Ruby_Holler"
    ],
    questions: [
      [
        "In which book are troublesome twins rescued from a cruel home by a kind elderly couple?",
        "Dallas and Florida leave the Boxton Creek Home for Children when Tiller and Sairy take them in."
      ],
      [
        "In which book does a hidden place become the first real safe home two children can remember?",
        "Ruby Holler becomes a refuge where the twins begin to imagine a gentler life."
      ],
      [
        "In which book do two children go on separate adventures, one involving a canoe and one involving an island?",
        "Tiller and Sairy plan different journeys to help each twin grow in confidence."
      ],
      [
        "In which book does kindness from older strangers slowly teach abandoned children how to trust again?",
        "The heart of the story is how Ruby Holler changes the twins through patience, safety, and love."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "bud-not-buddy",
    answer: "Bud, Not Buddy",
    author: "Christopher Paul Curtis",
    sources: [
      "https://www.penguinrandomhouse.com/books/35773/bud-not-buddy-by-christopher-paul-curtis/9780385729956/readers-guide/",
      "https://www.teachersfirst.com/reading-treks/sites/default/files/2023_Bud_Not_Buddy_Guide.pdf"
    ],
    questions: [
      [
        "In which book does an orphaned boy head out on the road during the Depression to find the musician he believes is his father?",
        "Bud leaves Flint carrying his hopes and his suitcase, convinced that a bandleader is the key to his family."
      ],
      [
        "In which book does a boy carry a suitcase filled with treasured items and his own rules for surviving hard times?",
        "Bud's suitcase and his personal rules help him make sense of the dangers and disappointments around him."
      ],
      [
        "In which book does a flyer for a jazz band become a crucial clue in a child's search?",
        "The band flyer in Bud's belongings helps guide him toward the man he thinks he needs to find."
      ],
      [
        "In which book does a child spend time in a Hooverville before trying to keep a dangerous journey going?",
        "Bud's travels through Depression-era hardship include a stop in a Hooverville and continued searching on his own."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "dragons-in-a-bag",
    answer: "Dragons in a Bag",
    author: "Zetta Elliott",
    sources: [
      "https://www.penguinrandomhouse.com/books/561453/dragons-in-a-bag-by-zetta-elliott/",
      "https://www.commonsensemedia.org/book-reviews/dragons-in-a-bag-book-1"
    ],
    questions: [
      [
        "In which book does a boy discover that the mean old lady he has been sent to visit is actually a witch?",
        "Jaxon expects an awful day with Ma, but instead learns that she is a witch with a dangerous job."
      ],
      [
        "In which book do two simple rules about baby dragons get broken almost immediately?",
        "Ma warns Jax not to let the dragons out of the bag and not to feed them anything sweet, but the rules do not last long."
      ],
      [
        "In which book do friends race to keep magical creatures from getting lost all over Brooklyn?",
        "Once the dragons escape, Jax, Vikram, and Kavita have to keep the city from becoming their permanent home."
      ],
      [
        "In which book does delivering baby dragons to a safe magical world become a kid's impossible assignment?",
        "Ma's mission depends on Jax helping get the baby dragons somewhere safer than Brooklyn."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "dog-squad",
    answer: "Dog Squad",
    author: "Chris Grabenstein",
    sources: [
      "https://www.penguinrandomhouse.com/books/646763/dog-squad-by-chris-grabenstein/",
      "https://www.penguinrandomhouse.ca/books/646763/dog-squad-by-chris-grabenstein/9780593301739"
    ],
    questions: [
      [
        "In which book does an ordinary dog become the perfect stand-in for a famous crime-fighting canine?",
        "Fred looks so much like Duke from Dog Squad that he gets pulled into the action as a double."
      ],
      [
        "In which book is a hit streaming show about heroic dogs more than just entertainment?",
        "Dog Squad begins as a show Fred loves, but its world suddenly matters in real life too."
      ],
      [
        "In which book does real-life danger force a scrappy dog to act brave offscreen as well as on?",
        "Fred learns that courage matters most when no camera is rolling."
      ],
      [
        "In which book does helping dogs in peril turn a lovable but average pet into a true hero?",
        "The story asks whether Fred can live up to the example set by the famous Dog Squad crew."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "the-million-dollar-shot",
    answer: "The Million Dollar Shot",
    author: "Dan Gutman",
    evidenceLevel: "medium",
    sources: [
      "https://en.wikipedia.org/wiki/The_Million_Dollar_Shot",
      "https://www.supersummary.com/the-million-dollar-shot/summary/"
    ],
    questions: [
      [
        "In which book does a boy win a chance to shoot one free throw for a million dollars at an NBA Finals game?",
        "Eddie wins a contest whose grand prize is one pressure-packed shot worth a million dollars."
      ],
      [
        "In which book does an original poem for a snack-company contest lead to a giant basketball moment?",
        "Eddie's poem entry is what gives him the chance at the million-dollar shot."
      ],
      [
        "In which book does a company boss try to bribe a kid to miss an unforgettable basket?",
        "George Finkle attempts to talk Eddie into missing the shot instead of taking the risk."
      ],
      [
        "In which book does constant practice build toward a single moment at the free-throw line?",
        "Much of the novel focuses on Eddie preparing again and again for one huge shot."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "found",
    answer: "Found",
    author: "Margaret Peterson Haddix",
    evidenceLevel: "medium",
    sources: [
      "https://www.simonandschuster.com/books/Found/Margaret-Peterson-Haddix/The-Missing/9781416954217",
      "https://www.supersummary.com/found/discussion-analysis-prompt/"
    ],
    questions: [
      [
        "In which book does a plane appear from nowhere carrying thirty-six babies before vanishing again?",
        "That impossible airplane is the mystery at the center of Jonah's story."
      ],
      [
        "In which book do adopted children begin receiving sinister messages about their past?",
        "The messages push Jonah and another adopted child to investigate where they really came from."
      ],
      [
        "In which book does an investigation into adoption lead into a conspiracy that reaches across time?",
        "The official summary explains that the search goes from the far past to the distant future."
      ],
      [
        "In which book does a teenager learn that history itself may depend on the truth about his birth?",
        "Jonah discovers that his own life is tied to a much larger time-travel mystery."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "the-detectives-assistant",
    answer: "The Detective's Assistant",
    author: "Kate Hannigan",
    sources: [
      "https://www.kirkusreviews.com/book-reviews/kate-hannigan/the-detectives-assistant/",
      "https://historicalnovelsociety.org/reviews/the-detectives-assistant/"
    ],
    questions: [
      [
        "In which book does an orphaned girl try to avoid being sent away by making herself indispensable to a mysterious aunt?",
        "Nell reaches Chicago determined to prove useful so she will not be returned to an orphanage."
      ],
      [
        "In which book does a child discover that her aunt is the first female private detective working for a famous agency?",
        "Nell learns that Aunt Kitty is really Kate Warne of the Pinkerton National Detective Agency."
      ],
      [
        "In which book do disguises, false identities, and secret investigations pull a girl into detective work?",
        "Nell ends up helping with cases that depend on quick thinking and clever disguises."
      ],
      [
        "In which book does a young detective helper become involved in protecting a president from an early assassination plot?",
        "The story links Nell's adventures to the effort to keep Abraham Lincoln safe."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "full-of-beans",
    answer: "Full of Beans",
    author: "Jennifer L. Holm",
    sources: [
      "https://www.penguinrandomhouse.com/books/246482/full-of-beans-by-jennifer-l-holm/",
      "https://historicalnovelsociety.org/reviews/full-of-beans/"
    ],
    questions: [
      [
        "In which book does a movie-loving boy grow up in Florida's so-called Recovery Key during the Great Depression?",
        "Beans sees Key West through the eyes of a kid who loves the movies even while times are hard."
      ],
      [
        "In which book do friends with nicknames like Pork Chop and Too Bad help turn daily life into adventure?",
        "Beans's circle of friends is one of the most memorable parts of his Depression-era Key West world."
      ],
      [
        "In which book does a child notice a pushy girl nemesis, a fussy baby brother, and a mean grandmother all at once?",
        "The supporting cast around Beans makes his home life as lively as the town itself."
      ],
      [
        "In which book does a boy's world include hidden illness, movie houses, and a colorful slice of 1930s island life?",
        "Reviews highlight the way Holm mixes humor with real details of Depression-era Key West, including a resident living with leprosy."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "regarding-the-fountain",
    answer: "Regarding the Fountain: A Tale, in Letters, of Liars and Leaks",
    author: "Kate Klise and M. Sarah Klise",
    sources: [
      "https://www.kirkusreviews.com/book-reviews/kate-klise/regarding-the-fountain/",
      "https://www.publishersweekly.com/9780380975389"
    ],
    questions: [
      [
        "In which book does a leaky school fountain set off a chain reaction of letters and confusion?",
        "Dry Creek Middle School needs a new fountain, but the request quickly turns into comic chaos."
      ],
      [
        "In which book does a principal ask a fifth grader to write a letter about buying a new drinking fountain?",
        "That first letter is what launches the entire tangle of misunderstandings in the book."
      ],
      [
        "In which book is the story told through letters, memos, newspaper clippings, and notices instead of normal chapters?",
        "The unusual format is one of the book's signature features and helps readers piece together the mystery."
      ],
      [
        "In which book does solving a fountain problem uncover a mystery about why a town's creek dried up years before?",
        "The investigation into the fountain eventually connects to the larger history of Dry Creek itself."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "restart",
    answer: "Restart",
    author: "Gordon Korman",
    sources: [
      "https://www.commonsensemedia.org/book-reviews/restart",
      "https://gordonkorman.com/topic/restart-book-club-selection"
    ],
    questions: [
      [
        "In which book does an eighth-grade football player fall off a roof and wake up with no memory of his old life?",
        "Chase Ambrose loses his memory after the fall and has to figure out who he used to be."
      ],
      [
        "In which book does a student discover from other people's reactions that his old self had been a bully?",
        "Because Chase cannot remember his past, he has to learn about it from the fear and anger around him."
      ],
      [
        "In which book does amnesia give a kid the chance to build a very different life at school?",
        "The title points to the way Chase gets a chance to start over after the accident."
      ],
      [
        "In which book does a boy begin to see that he might be more than an athlete once his memory is gone?",
        "Common Sense notes that Chase's restart opens up new sides of him, including an interest in art and empathy."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "pie-in-the-sky",
    answer: "Pie in the Sky",
    author: "Remy Lai",
    sources: [
      "https://us.macmillan.com/books/9781250208675/pieinthesky/",
      "https://images.macmillan.com/folio-assets/discusion-guides/9781250314109DG.pdf"
    ],
    questions: [
      [
        "In which book does moving to a new country feel so strange that a boy compares it to landing on Mars?",
        "Jingwen struggles with immigration, language, and feeling completely out of place in Australia."
      ],
      [
        "In which book does a bakery menu become a secret mission after a father's death?",
        "Jingwen dreams of baking every cake on the menu of Pie in the Sky, the bakery his father wanted to open."
      ],
      [
        "In which book are two brothers strictly forbidden to use the oven while their mother is at work?",
        "Mama's rule sets up the secret baking that drives much of the plot."
      ],
      [
        "In which book do elaborate cakes require even more elaborate excuses to stay hidden?",
        "As the boys keep baking in secret, they also have to invent ways to keep Mama from finding out."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "savvy",
    answer: "Savvy",
    author: "Ingrid Law",
    evidenceLevel: "medium",
    sources: [
      "https://www.penguinrandomhouse.com/books/302846/savvy-by-ingrid-law/",
      "https://www.penguinrandomhouse.com/books/302846/savvy-by-ingrid-law/9781440634857/readers-guide"
    ],
    questions: [
      [
        "In which book does every member of one family wait for a strange power to arrive at age thirteen?",
        "The Beaumont family calls its inherited magical abilities a savvy, and each one appears at thirteen."
      ],
      [
        "In which book do family powers include moving mountains, making hurricanes, and sparking electricity?",
        "The reading guide lists the unusual savvies already shown by older members of the family."
      ],
      [
        "In which book does a terrible accident happen just two days before a birthday that should have been magical?",
        "Mibs is already anxious about her own savvy when Poppa is badly hurt."
      ],
      [
        "In which book does a child set out on an unexpected trip because waiting at home feels impossible after a family emergency?",
        "Mibs's need to help Poppa pushes the story into motion and tests what her own savvy will be."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "where-the-mountain-meets-the-moon",
    answer: "Where the Mountain Meets the Moon",
    author: "Grace Lin",
    sources: [
      "https://gracelin.com/where-the-mountain-meets-the-moon/",
      "https://www.hachettebookgroup.com/titles/grace-lin/where-the-mountain-meets-the-moon/9780316114271/"
    ],
    questions: [
      [
        "In which book does a poor girl leave home to ask the Old Man of the Moon how to change her family's fortune?",
        "Minli begins her quest because she wants to improve her parents' hard life."
      ],
      [
        "In which book does a dragon become a traveling companion on a long journey filled with stories?",
        "A dragon joins Minli and becomes one of the most important helpers on her adventure."
      ],
      [
        "In which book do red threads help show how people and events are connected?",
        "Grace Lin's activity materials spotlight the red-thread connections woven through the novel."
      ],
      [
        "In which book do stories inside the main story help guide a child toward her answer?",
        "The novel is famous for using many linked folktales and side stories as part of Minli's journey."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "glitch",
    answer: "Glitch",
    author: "Laura Martin",
    sources: [
      "https://www.kirkusreviews.com/book-reviews/laura-martin/glitch-martin/",
      "https://www.publishersweekly.com/9780062894359"
    ],
    questions: [
      [
        "In which book does a rare gene let students slide in and out of time?",
        "Glitchers are born with the ability to travel through time, which is why they attend the Academy."
      ],
      [
        "In which book does a government school train children to stop time criminals called Butterflies?",
        "Butterflies are people who try to change history, and the Academy teaches Glitchers to catch them."
      ],
      [
        "In which book do rivals have to work together after a letter arrives from a future version of one of them?",
        "Regan and Elliot are forced into a partnership when a clue from the future appears in Regan's handwriting."
      ],
      [
        "In which book does a mission involving the Triangle Shirtwaist Factory fire turn history into a race against time?",
        "Publishers Weekly notes that historical moments like the Triangle Shirtwaist fire become part of the cadets' work."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "snow-treasure",
    answer: "Snow Treasure",
    author: "Marie McSwigan",
    evidenceLevel: "medium",
    sources: [
      "https://en.wikipedia.org/wiki/Snow_Treasure",
      "https://www.supersummary.com/snow-treasure/major-character-analysis/"
    ],
    questions: [
      [
        "In which book do children in occupied Norway use their sleds to move hidden gold past enemy guards?",
        "The children of the village become the perfect couriers because sledding makes them look harmless."
      ],
      [
        "In which book must a country's treasure reach a waiting ship before the enemy discovers the plan?",
        "The gold has to get to the Cleng Peerson if it is going to escape safely."
      ],
      [
        "In which book does a winter pastime become a cover for a daring act of patriotism?",
        "The children's normal sledding becomes the disguise for one of the story's boldest operations."
      ],
      [
        "In which book does a dangerous gold-smuggling plan depend on brave children rather than soldiers?",
        "Adults turn to the village children because they have the best chance of slipping past Nazi suspicion."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "becoming-muhammad-ali",
    answer: "Becoming Muhammad Ali",
    author: "James Patterson and Kwame Alexander",
    evidenceLevel: "medium",
    sources: [
      "https://www.commonsensemedia.org/book-reviews/becoming-muhammad-ali",
      "https://en.wikipedia.org/wiki/Becoming_Muhammad_Ali"
    ],
    questions: [
      [
        "In which book does a future boxing legend grow up in Louisville before the world knows his famous name?",
        "The story follows Cassius Clay's early years before he becomes Muhammad Ali."
      ],
      [
        "In which book is a young fighter's story told with poetry as well as prose?",
        "The book uses verse and narrative passages to show the voice and growth of its young athlete."
      ],
      [
        "In which book do childhood years of training and confidence build toward one of sports' most famous lives?",
        "The focus is on Ali's boyhood and early rise rather than the later years everyone already knows."
      ],
      [
        "In which book does a young athlete's path point toward both championship fame and later activism?",
        "Common Sense notes that the epilogue connects the boyhood story to Ali's later public courage and humanitarian work."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "the-camping-trip-that-changed-america",
    answer: "The Camping Trip That Changed America",
    author: "Barb Rosenstock",
    sources: [
      "https://barbrosenstock.com/books/the-camping-trip-that-changed-america/",
      "https://www.penguinrandomhouse.com/books/529991/the-camping-trip-that-changed-america-by-barb-rosenstock-illustrated-by-mordecai-gerstein/"
    ],
    questions: [
      [
        "In which book does a president go camping in Yosemite with a famous naturalist for three days?",
        "The book tells the story of Theodore Roosevelt's trip with John Muir in the Yosemite mountains."
      ],
      [
        "In which book do two men called Teedie and Johnnie start with almost nothing in common?",
        "Barb Rosenstock frames Roosevelt and Muir as opposites whose friendship becomes powerful."
      ],
      [
        "In which book does a camping trip help change the way a country thinks about forests and wild land?",
        "Their time together becomes a turning point in the history of conservation and national parks."
      ],
      [
        "In which book does the question of saving forests 'for all the children to come' shape the whole story?",
        "That hope for future children sits at the heart of the Yosemite trip and its lasting impact."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "harry-potter-and-the-sorcerers-stone",
    answer: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    sources: [
      "https://scholasticlibrary.digital.scholastic.com/grade-level/9/978-0-590-35340-3.html",
      "https://www.rif.org/literacy-central/material/harry-potter-and-sorcerer%E2%80%99s-stone-discussion-guide"
    ],
    questions: [
      [
        "In which book does an owl-delivered letter reveal that a neglected boy belongs at a school for magic?",
        "Harry's life changes when the Hogwarts letters finally reach him."
      ],
      [
        "In which book does a hidden platform lead to a train bound for a magical school?",
        "Platform Nine and Three-Quarters is Harry's gateway into the wizarding world."
      ],
      [
        "In which book does a mirror show a child the family he wants more than anything else?",
        "The Mirror of Erised reveals Harry's deepest longing when he sees his parents there."
      ],
      [
        "In which book do three friends pass a series of magical protections to keep a powerful stone away from a villain?",
        "Harry, Ron, and Hermione work through the obstacles guarding the Sorcerer's Stone."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "night-of-the-twisters",
    answer: "Night of the Twisters",
    author: "Ivy Ruckman",
    evidenceLevel: "medium",
    sources: [
      "https://en.wikipedia.org/wiki/Night_of_the_Twisters",
      "https://www.barnesandnoble.com/w/night-of-the-twisters-ivy-ruckman/1100417979"
    ],
    questions: [
      [
        "In which book do seven tornadoes strike in a single terrifying night?",
        "The novel is based on the famous tornado outbreak that hit Grand Island, Nebraska."
      ],
      [
        "In which book does a boy begin searching for his parents after a storm destroys his home and neighborhood?",
        "Danny's coming-of-age story unfolds in the middle of a devastating natural disaster."
      ],
      [
        "In which book is a Nebraska storm disaster turned into an action-packed survival story for young readers?",
        "The book uses the tornado outbreak to tell a tense story of fear, courage, and endurance."
      ],
      [
        "In which book does surviving wild weather become a test of bravery rather than just luck?",
        "The publisher summary describes the novel as both a disaster story and a story about the courage needed to face it."
      ]
    ]
  }),

  ...makeBookQuestions({
    bookId: "dealing-with-dragons",
    answer: "Dealing with Dragons",
    author: "Patricia C. Wrede",
    evidenceLevel: "medium",
    sources: [
      "https://www.overdrive.com/media/114406/dealing-with-dragons",
      "https://en.wikipedia.org/wiki/Dealing_with_Dragons"
    ],
    questions: [
      [
        "In which book does a princess run away so she can live with a dragon instead of marrying a prince?",
        "Cimorene would rather choose adventure with Kazul than the dull future others plan for her."
      ],
      [
        "In which book do princes keep trying to rescue someone who absolutely does not want rescuing?",
        "Much of the humor comes from Cimorene having to fend off would-be heroes."
      ],
      [
        "In which book does a princess happily cook and organize a dragon's cave instead of acting properly at court?",
        "Living with Kazul suits Cimorene far better than embroidery lessons and etiquette ever did."
      ],
      [
        "In which book does a warning about dragonsbane reveal that wizards are threatening the dragons themselves?",
        "The plot eventually turns toward the wizards' poison and the danger it poses to dragon leadership."
      ]
    ]
  })
];

function getBookReferenceQuestion(bookId) {
  return storyQuestionBank.find((question) => question.bookId === bookId) || null;
}

function makeCatalogMatchQuestions() {
  return bookCatalog.flatMap((book) => {
    const referenceQuestion = getBookReferenceQuestion(book.id);
    const sources = referenceQuestion?.sources || [];
    const evidenceLevel = referenceQuestion?.evidenceLevel || "medium";

    return [
      {
        id: `${book.id}-author-match`,
        bookId: book.id,
        question: `Which author wrote ${book.title}?`,
        answer: book.author,
        author: book.author,
        answerType: "author",
        explanation: `${book.title} is paired with ${book.author} on the Standard 28 list.`,
        evidenceLevel,
        sources
      },
      {
        id: `${book.id}-title-match`,
        bookId: book.id,
        question: `Which book on the Standard 28 list was written by ${book.author}?`,
        answer: book.title,
        author: book.author,
        answerType: "book",
        explanation: `${book.author} wrote ${book.title}, which appears on the Standard 28 list.`,
        evidenceLevel,
        sources
      }
    ];
  });
}

const questionBank = [...storyQuestionBank, ...makeCatalogMatchQuestions()];

if (typeof window !== "undefined") {
  window.bookCatalog = bookCatalog;
  window.questionBank = questionBank;
}

if (typeof module !== "undefined") {
  module.exports = { bookCatalog, questionBank };
}
