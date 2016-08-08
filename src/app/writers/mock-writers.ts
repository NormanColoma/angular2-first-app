/**
 * Created by Norman on 05/08/2016.
 */
import { Writer } from './writer';

export const WRITERS : Writer [] = [
  {id: 1, name: 'Stephen King', about: 'Stephen Edwin King (born September 21, 1947) is an American author of contemporary ' +
  'horror, supernatural fiction, suspense, science fiction, and fantasy. His books have sold more than 350 million copies,' +
  ' many of which have been adapted into feature films, miniseries, television shows, and comic books.',
    short_desc: 'Stephen King is an American author of contemporary horror, supernatural fiction, suspense, science fiction, and fantasy.'
    ,total_books: 5, books: [{id: 1, title: 'The Shining',synopsis: 'The Shining centers on the life of Jack Torrance,' +
  ' an aspiring writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic ' +
  'Overlook Hotel in the Colorado Rockies. His family accompanies him on this job, including his young son ' +
  'Danny Torrance, who possesses "the shining", an array of psychic abilities that allow Danny to see the'+
  " hotel's"+' horrific past. Soon, after a winter storm leaves them snowbound, the supernatural ' +
  'forces inhabiting the hotel influence'+" Jack's"+'sanity, leaving his wife and son in incredible danger.', genre: 'horror'},
    {id: 2, title: 'The Dead Zone', synopsis: 'By 1970, Johnny is now a high school teacher in eastern Maine. ' +
    'After visiting a county fair with his girlfriend Sarah, and eerily winning repeatedly at the wheel of fortune,' +
    ' Johnny is involved in a car accident on his way home that lands him in a coma for four and a half years. ' +
    'On waking, Johnny finds that he has suffered neural injury, but on touching people and objects he is able ' +
    'to tell them things they did not know - in this way he knows a'+" nurse's "+ 'son would have successful surgery,' +
    ' states that his'+ " doctor's "+ 'mother, long believed dead, is living in Carmel, California, tells Sarah' +
    ' that her lost wedding ring was in her suitcase pocket, and later recounts the story behind a St. ' +
    'Christopher medallion owned by a skeptical reporter. Johnny shrugs off local media reports of his supposed psychic ' +
    'talents and accepts an offer to resume teaching, but begins to suffer from severe headaches. A reporter for Inside ' +
    'View, a national tabloid, maliciously prints a story denouncing his clairvoyance as phony, but this brings Johnny ' +
    'relief and the hope he can resume a normal life - a hope broken when he is contacted by a local sheriff ' +
    'desperate to solve a series of murders, including that of a child.'+ " Johnny's "+'extra sense provides enough ' +
    'detail to identify the killer, who commits suicide and leaves a confession.', genre: 'horror'},
    {id: 3, title: 'Mr. Mercedes', synopsis: 'Many jobless people are standing in line for a job fair, but then a ' +
    'Mercedes plows into the crowd killing 8 people and severely injuring many. Bill Hodges, a ' +
    'recently retired detective from the local police department living the life of a retiree, receives a letter ' +
    'from an individual claiming to be the person responsible for the job fair incident, referring to himself as ' +
    '"Mr. Mercedes." Hodges is divorced, lonely and fed up with his life, occasionally considering suicide. ' +
    'The incident had taken place at the end of'+ " Hodge's "+ 'career and was still unresolved when he retired. ' +
    'Mr. Mercedes knows details of the murder and also mentions Olivia Trelawney, from whom he had stolen the Mercedes. ' +
    'Olivia had committed suicide soon after the massacre out of guilt. Hodges is intrigued and starts to investigate ' +
    'the case instead of turning the letter over to his former police colleague, Pete Huntley.', genre: 'Mystery'}]},
  {id: 2, name: 'Agatha Cristie', about: 'Dame Agatha Mary Clarissa Christie, Lady Mallowan, DBE ' +
  'was an English crime novelist, short story writer and playwright. She also wrote six romances under ' +
  'the name Mary Westmacott including Giants Bread, but she is best known for the 66 detective novels' +
  ' and 14 short story collections that she wrote under her own name, most of which revolve around ' +
  'the investigative work of such characters as Hercule Poirot, Jane Marple, Parker Pyne, ' +
  'Ariadne Oliver, Harley Quin/Mr Satterthwaite and Tommy and Tuppence Beresford',
    short_desc: 'Agatha Christie, was an English crime novelist, short story writer and playwright',total_books: 7, books: []},
  {id: 3, name: 'George R. R. Martin', about: 'George Raymond Richard Martin (born George Raymond Martin; September 20, 1948),' +
  ' often referred to as GRRM,[2] is an American novelist and short-story writer in the fantasy, ' +
  'horror, and science fiction genres, a screenwriter, and television producer. He is best known ' +
  'for his international bestselling series of epic fantasy novels, A Song of Ice and Fire, which ' +
  'was later adapted into the HBO dramatic series Game of Thrones.',
    short_desc:'R.R. Martin is an American novelist and short-story writer in the fantasy, horror, and science fiction genres',
    total_books: 6, books:[]},
  {id: 4, name:'J. R. R. Tolkien', about: 'John Ronald Reuel Tolkien CBE, FRSL' +
  ', known by his pen name J. R. R. Tolkien, was an English writer, poet, philologist, ' +
  'and university professor who is best known as the author of the classic high-fantasy ' +
  'works The Hobbit, The Lord of the Rings, and The Silmarillion.',
    short_desc:'J. R. R. Tolkien, was an English writer, poet, philologist, and university professor',total_books: 5, books: [
      {id: 1, title: 'The Hobbit', synopsis: 'Set in a time "Between the Dawn of Færie and the Dominion of Men",The Hobbit ' +
      'follows the quest of home-loving hobbit Bilbo Baggins to win a share of the treasure guarded by the dragon, Smaug. ' +
      "Bilbo's" + 'journey takes him from light-hearted, rural surroundings into more sinister territory.The story is told ' +
      'in the form of an episodic quest, and most chapters introduce a specific creature, or type of creature, of'+ " Tolkien's " +
      'geography. By accepting the disreputable, romantic, fey and adventurous sides of his nature and applying his wits ' +
      'and common sense, Bilbo gains a new level of maturity, competence and wisdom.The story reaches its climax in ' +
      'the Battle of the Five Armies, where many of the characters and creatures from earlier chapters re-emerge to engage' +
      ' in conflict.', genre: 'Fantasy'},{id: 2, title: 'The Fellowship of the Ring', synopsis: 'The first chapter in the ' +
    'book begins in a light vein, following the tone of The Hobbit. Bilbo Baggins celebrates his 111th ' +
    '(or eleventy-first, as it is called in Hobbiton) birthday on the same day, 22 September, that his younger ' +
    'cousin and adopted heir Frodo Baggins celebrates his coming of age at 33. At the birthday party, Bilbo ' +
    'departs from the Shire, the land of the Hobbits, for what he calls a permanent holiday. Bilbo does so by using' +
    ' the magic ring (that he had found on his journey) to disappear and is aided by Gandalf with a flash and puff of smoke,' +
    ' leading many in the Shire to believe he has gone mad. He leaves Frodo his remaining belongings, including his home, ' +
    'Bag End, and (after some persuasion by the wizard Gandalf) the Ring. Gandalf leaves on his own business, warning Frodo ' +
    'to keep the Ring secret.', genre: 'Fantasy'},{id: 15, title: 'The Two Towers',synopsis: "As Aragorn searches for Frodo, he" +
    " suddenly hears Boromir's horn. Aragorn finds Boromir mortally wounded by arrows and his assailants are gone. Before " +
    "Boromir dies, Aragorn learns that Saruman's Uruk-hai have kidnapped some of the hobbits, in spite of his efforts to defend" +
    " them, and that Frodo had vanished after Boromir had attempted to take the Ring from him and that he truly regretted his" +
    " actions. In his last moments, Boromir charges Aragorn to defend Minas Tirith from Sauron. With Legolas and Gimli, " +
    "who had been fighting Orcs by themselves, Aragorn pays his last tributes to Boromir and sends him down the " +
    "Great River Anduin on a funeral boat, the usual methods of burial being impractical. Aragorn, Legolas, and Gimli later" +
    " resolve to follow the Uruk-hai captors and save Merry and Pippin. Meanwhile, after some hardship, Merry and Pippin " +
    "escape when the Uruk-hai are attacked by the horsemen of Rohan, called the Rohirrim or Riders of Rohan. " +
    "Merry and Pippin escape into the nearby Fangorn Forest, where they encounter the giant treelike Ents. " +
    "The Ents resemble actual trees, except they are able to see, talk, and move. These guardians of the forest " +
    "generally keep to themselves, but after a long contemplation on whether or not the Hobbits were friends, " +
    "or foes, their leader Treebeard persuades the Ent council to oppose the menace posed to the forest by the wizard " +
    "Saruman, as suggested by Merry and Pippin, as Treebeard realizes that Saruman's minions have been cutting down " +
    "large numbers of their trees to fuel the furnaces needed for Saruman's arming of his dark army.", genre: 'Fantasy'},
    {id: 22, title: 'The Return of the King', synopsis: "Gandalf and Pippin arrive at Minas Tirith " +
    "in the kingdom of Gondor, delivering the news to Denethor, the Lord and Steward of Gondor, that a " +
    "devastating attack on his city by Sauron, the Dark Lord of Mordor is imminent. Pippin then enters the service of" +
    " the Steward as repayment of a debt he owes to Boromir, Denethor's dead son and preferred heir. Now clad in the uniform" +
    " of the tower guard, Pippin watches the fortunes of war unfold, while Denethor descends into madness as the hosts" +
    " of Mordor press ever closer to Gondor's capital city of Minas Tirith. Faramir, Boromir's younger brother, " +
    "returns from his campaign with the shattered remnants of his company and is soon ordered to ride out and continue" +
    " the hopeless defence of Osgiliath against a horde of orcs. Osgiliath is soon overrun and a gravely wounded " +
    "Faramir is carried back to Denethor. His people seemingly lost and his only remaining son all but dead, " +
    "Denethor orders a funeral pyre built that is to claim both him and his dying son. Minas Tirith stands " +
    "encircled and besieged by Sauron's main host, composed of well over 200,000 orcs.", genre: 'Fantasy'}]
  },
  {id: 5, name: 'Gabriel García Márquez', about: 'Gabriel José de la Concordia García Márquez ' +
  '6 March 1927 – 17 April 2014) was a Colombian novelist, short-story writer, screenwriter and journalist,' +
  ' known affectionately as Gabo or Gabito throughout Latin America. Considered one of the most significant ' +
  'authors of the 20th century and one of the best in the Spanish language, he was awarded the 1972 Neustadt ' +
  'International Prize for Literature and the 1982 Nobel Prize in Literature.',
    short_desc:'Gabriel García Márquez was a Colombian novelist, short-story writer, screenwriter and journalist, ' +
    'known affectionately as Gabo or Gabito throughout Latin America.',total_books: 6, books: []}
];
