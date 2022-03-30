//autofill https://github.com/bitwarden/browser/blob/master/src/content/autofill.js

function isConsonne(x) {
  for (let i = 0; i < consonne.length; i++) {
    if (x == consonne[i]) {
      return true;
    }
  }
}

function newUser() {
  //Mot de passe
  let mdp = "";
  for (var i = 0; i < 7; i++) {
    nombreAleatoire = Math.floor(Math.random() * 11); //nmbr aléatoire entre 0 et 10
    mdp += nombreAleatoire;
    let uneChanceSurDeux = Math.random();
    if (uneChanceSurDeux >= 0.5) {
      mdp += caracteres[nombreAleatoire];
    }

    if (uneChanceSurDeux <= 0.5) {
      mdp += alphabet[Math.floor(Math.random() * 26)];
    }
  }

  // Nom
  let nom =
    nomCourants[Math.floor(Math.random() * nomCourants.length)].toLowerCase(); // nmbr aléatoire entre 0 et la longueur de la liste des nom Courants

  // Prénom
  let prenom =
    prenomCourants[
      Math.floor(Math.random() * prenomCourants.length)
    ].toLowerCase(); // nmbr aléatoire entre 0 et la longueur de la liste des prenom Courants

  //Sexe
  let sexe = "";
  uneChanceSurDeux = Math.random();
  if (uneChanceSurDeux >= 0.5) {
    sexe = "m";
  } else {
    sexe = "f";
  }

  //identifiant (au format prenom_consonneDuNom)
  let identifiant = "";
  identifiant += prenom;
  identifiant += "_";
  for (let i = 0; i < nom.length; i++) {
    if (isConsonne(nom[i]) == true) {
      identifiant += nom[i];
    }
  }
  //Zipcode
  //total
  return {
    mdp: mdp,
    nom: nom,
    prenom: prenom,
    sexe: sexe,
    identifiant: identifiant,
  };
}

//Tableau nécessaire

//-------------------------------------------------------
let caracteres = ["@", "#", "&", "*", "+", "-", "µ", "~", "?", "!", "£"];
let nomCourants = [
  "Martin",
  "Bernard",
  "Dubois",
  "Thomas",
  "Robert",
  "Richard",
  "Petit",
  "Durand",
  "Leroy",
  "Moreau",
  "Simon",
  "Laurent",
  "Lefebvre",
  "Michel",
  "Garcia",
  "David",
  "Bertrand",
  "Roux",
  "Vincent",
  "Foumier",
  "Morel",
  "Girard",
  "Andre",
  "Lefevre",
  "Mercier",
  "Dupont",
  "Lambert",
  "Bonnet",
  "Francois",
  "Martinez",
  "Legrand",
  "Garnier",
  "Eaure",
  "Rousseau",
  "Blanc",
  "Guerin",
  "Muller",
  "Henry",
  "Roussel",
  "Nicolas",
  "Perrin",
  "Morin",
  "Mathieu",
  "Clement",
  "Gauthier",
  "Dumont",
  "Lopez",
  "Eontaine",
  "Chevalier",
  "Robin",
  "Masson",
  "Sanchez",
  "Gerard",
  "Nauyen",
  "Boyer",
  "Denis",
  "Lemaire",
  "Duval",
  "Joly",
  "Gautier",
];
let prenomCourants = [
  "ADAM",
  "MILA",
  "AYDEN",
  "GIANNI",
  "GIULIA",
  "JULIA",
  "LOU",
  "LYAM",
  "MAYA",
  "ANDREA",
  "ANNA",
  "CHARLOTTE",
  "IMRAN",
  "JULES",
  "LENNY",
  "LÉO",
  "LUCAS",
  "NINA",
  "ROMY",
  "ANAS",
  "DAVID",
  "DINA",
  "LOUKA",
  "LOUNA",
  "NATHAN",
  "SARAH",
  "ALICIA",
  "ANTONIA",
  "FARAH",
  "INÈS",
  "JAD",
  "JADE",
  "JULIETTE",
  "LISA",
  "LOLA",
  "MARGOT",
  "SIDRA",
  "SOPHIE",
  "TASNIM",
  "TOM",
  "YASSINE",
  "ALAN",
  "ALINA",
  "ANGELINA",
  "BASTIEN",
  "CALLIE",
  "CANDICE",
  "CHARLY",
  "CHIARA",
  "CÔME",
  "ELLA",
  "ESSIL",
  "EVA",
  "EYA",
  "HABIBA",
  "ISSA",
  "JENNA",
  "JESSIM",
  "KASSIM",
  "LAURA",
  "LEEROY",
  "LILOU",
  "LILY",
  "LILYA",
  "LIVIA",
  "LUCIE",
  "LYNA",
  "MAÏSSANE",
  "MARGAUX",
  "MILHAN",
  "MILLA",
  "MIRAL",
  "MYLA",
  "NAÏM",
  "NOUR",
  "PIERRE",
  "SAMUEL",
  "SASHA",
  "SORAYA",
  "THALIA",
  "WASSIM",
  "AALIYAH",
  "ABOU",
  "ABRAHAM",
  "ACELYA",
  "ACIL",
  "ADHEMAR",
  "ADRIEN",
  "ALANA",
  "ALBA",
  "ALEX",
  "ALEXIA",
  "ALISTÆR",
  "ÄLLYA",
  "ALYCE",
  "ALYSSA",
  "AMELIA",
  "AMIRA",
  "AMY",
  "ANGE",
  "ANGÉLINA",
  "ANNABEL",
  "ARIA",
  "ARIANE",
  "ARKANE",
  "AVA",
  "AWA",
  "AYAAN",
  "AYANA",
  "AYNA",
  "AYRON",
  "AYRTON",
  "AYSSEM",
  "BABA-AMADOU",
  "BADIS",
  "BASMA",
  "BAYRAM",
  "BESSA",
  "BORIS",
  "BOWEN",
  "BRYAN",
  "CALYPSO",
  "CAMILLE",
  "CARMEN",
  "CÉLIA",
  "CHANEZ",
  "CHARLINE",
  "CHARLYNE",
  "CHELY",
  "CICILIA",
  "CLARENCE",
  "CLÉMENTINE",
  "COLINE",
  "CONSTANCE",
  "CURTIS",
  "DAYEN",
  "DAYSIE",
  "DEVA",
  "DÉVA",
  "DIÉGO",
  "DJAMILSON",
  "DJAYDAN",
  "DJHANYS",
  "DJIBRIL",
  "DONYA",
  "DYLAN",
  "DYNA",
  "EDEN",
  "EILIE",
  "ELÉNA",
  "ELIOTT",
  "ELISA",
  "ELON",
  "ELSA",
  "ELYNE",
  "EMIRHAN",
  "ESTEBAN",
  "EVELINI",
  "EZRA",
  "FANNY",
  "FATOUMATA",
  "FRANCES",
  "GABRIELA",
  "GABRIELE",
  "GHALI",
  "GHASSEN",
  "GIUVAN",
  "HAIKEL",
  "HANAË",
  "HAZEM",
  "HEDY",
  "HÉLÈNA",
  "HELEONOR",
  "HENRI",
  "ILIAN",
  "ILIN",
  "ILINE",
  "ILONA",
  "ILYANA",
  "IMANY",
  "INES",
  "IRINA",
  "ISRA",
  "ISRAA",
  "ISSHAC",
  "IWEN",
  "IZ",
  "JEANNE",
  "JIMMY",
  "JORDANNE",
  "JOULIA",
  "JOYA",
  "JUNE",
  "JÙNIOR",
  "KATALINA",
  "KAYLA",
  "KAYLAN",
  "KENZ",
  "KEYAN",
  "KHALID",
  "KHALISSA",
  "KURT",
  "LAILA",
  "LAMYA",
  "LÈA",
  "LEANY",
  "LEERON",
  "LÉONARD",
  "LÉONE",
  "LÉONORE",
  "LÉYANE",
  "LÏA",
  "LILIANA",
  "LILIANE",
  "LINDA",
  "LOGAN",
  "LOÏCK",
  "LORENA",
  "LOUCA",
  "LOUISA",
  "LOUJAÏN",
  "LOUJAYNE",
  "LOWEN",
  "LYANIE",
  "LYANNA",
  "LYDIE",
  "LYES",
  "LYNNA",
  "LYSSIA",
  "MACHJA",
  "MADYA",
  "MAELIE",
  "MAKSIM",
  "MARCUS",
  "MARIE",
  "MARLEY",
  "MARLONE",
  "MARLOW",
  "MATHEUS",
  "MATTEO",
  "MATTIA",
  "MAX",
  "MEIVY",
  "MÉLANIE",
  "MERCEDES",
  "MERWANE",
  "MÉRYL",
  "MILANN",
  "MOINAECHA",
  "MYRAL",
  "NACCA",
  "NALA",
  "NALYA",
  "NAOUFEL",
  "NASSIME",
  "NATANIEL",
  "NAYA",
  "NAYANNE",
  "NEJLA",
  "NICOLAS",
  "NIL",
  "NIYAH",
  "NOHAM",
  "NOHÉ",
  "NOUH",
  "OLIANA",
  "OUSMANE",
  "OZGUR",
  "PABLO",
  "PAOLA",
  "PAULINE",
  "PENELOPE",
  "PÉNÉLOPE",
  "RAFAEL",
  "RAFAËL",
  "RASSINE",
  "RAZAN",
  "RAZANE",
  "RUBY",
  "SAÏNA",
  "SALIM",
  "SALSABIL",
  "SAMIA",
  "SARA",
  "SHELCY",
  "SHEMSEDDINE",
  "SIENA",
  "SILINE",
  "SOAN",
  "SOLINE",
  "SOUHEYLA",
  "STEPHANIE",
  "SUMMER",
  "SUZANNE",
  "SWANA",
  "SWANN",
  "TAHINA",
  "TAMARA",
  "TAYMIYAH",
  "TAYSON",
  "TAYSSIR",
  "TÉO",
  "THAÏS",
  "THEO",
  "TIARA",
  "TIMÉO",
  "TINA",
  "TONY",
  "VADIM",
  "VALENTINE",
  "VERA",
  "VICTOIRE",
  "VIKTOR",
  "VIKTORIA",
  "VITTORE",
  "WANISS",
  "WILLEM",
  "YACOUB",
  "YAYA",
  "YUNA",
  "ZAKARIA",
  "GABRIEL",
  "LÉA",
  "ADEM",
  "ENZO",
  "AARON",
  "AMBRE",
  "ETHAN",
  "LINA",
  "LOUIS",
  "RAYAN",
  "ANAÏS",
  "CHLOÉ",
  "DIEGO",
  "ROSE",
  "VALENTIN",
  "AHMED",
  "ALEXIS",
  "ALINE",
  "CÉSAR",
  "EMY",
  "FABIO",
  "KYLIAN",
  "LIA",
  "MALONE",
  "MAXENCE",
  "ROBIN",
  "SAMY",
  "SOFIA",
  "TIM",
  "VICTOR",
  "AMANDA",
  "ANASS",
  "ANDRÉA",
  "ASSIL",
  "DANIEL",
  "ELEANOR",
  "ELISE",
  "ELOÏSE",
  "GIULIAN",
  "HAROUN",
  "INAYA",
  "JANNA",
  "JAWAD",
  "JAYDEN",
  "JINÈNE",
  "KATALEYA",
  "LUCA",
  "LUKAS",
  "MAËLLE",
  "MATEI",
  "MATHIAS",
  "MEHDI",
  "NAÏA",
  "NAYLA",
  "WESLEY",
  "AALYA",
  "AARONN",
  "ABBY",
  "ABED-RAHEMEN",
  "AÉLIA",
  "AELIN",
  "AGATHE",
  "AILTON",
  "AKSEL",
  "ALAIN",
  "ALBIONA",
  "ALI",
  "ALIA",
  "ALIM",
  "ALYCIA",
  "AMALIA",
  "AMIN",
  "ANGEL",
  "ANNA-NICOL",
  "ARCHIE",
  "ARFIN",
  "ARIJ",
  "ARKENEDINE",
  "ARTUR",
  "ARWA",
  "ASHER",
  "ASMA",
  "ASMIRA",
  "ATHÉNAIS",
  "ATIYA",
  "AUDREY",
  "AURCIA",
  "AURÉLIA",
  "AXELLE",
  "AYANAH",
  "AYDIN",
  "AYLA",
  "AYMERIC",
  "BEATRICE",
  "BELLA",
  "BOGRAD",
  "BRISÉIS",
  "CAMÉLIA",
  "CESAR",
  "CHAHINE",
  "CHIARA-LUNA",
  "CHRISTOPHER",
  "CIDRAH-EL-MONTAHA",
  "CLARY",
  "CLÉMENT",
  "CLÉYA",
  "COLYN",
  "DAREEN",
  "DAYLEN",
  "DIHYA",
  "DIXON",
  "DJENNA",
  "DOÀN",
  "DORA",
  "DYLAN-KENZI",
  "EDELWEISS",
  "ELA",
  "ELENA",
  "ÉLENA",
  "ELIO",
  "ELIYAH",
  "ELOAH",
  "ELYA",
  "ENGY",
  "ENRIQUE",
  "ERICA",
  "ESMA",
  "ESSIA",
  "ESTEBANE",
  "EVA-ROSE",
  "FARES",
  "GABIN",
  "GHYSLAINE",
  "GIANI",
  "HAIWÉN",
  "HARRY",
  "HAYDEN",
  "HEÏDI",
  "HICHAM",
  "HIND",
  "HYLIANA",
  "ILARIO",
  "IMANE",
  "INSAF",
  "IRAM",
  "ISAIAH",
  "ISHAK",
  "ISMAEL",
  "IYAD-ABDESSATAR",
  "JADEN",
  "JAMES",
  "JANNAT",
  "JÉRÔME",
  "JESSE",
  "JESSY",
  "JÉSUS",
  "JHAYMIE",
  "JONAS",
  "JOONE",
  "JUCEILA",
  "JULIAN",
  "JUNA",
  "KAÏ",
  "KALLY",
  "KALVIN",
  "KALYSTA",
  "KAMERON",
  "KAMILA",
  "KATARÏNA",
  "KELVIN",
  "KENNY",
  "KHADY-SALMA",
  "KHALEESSI",
  "KINAN",
  "KINÈN",
  "LAURIS",
  "LÉANDRO",
  "LIHAM",
  "LILI",
  "LILIO",
  "LILYANE",
  "LISANDRU",
  "LIVAÏ",
  "LOHANE",
  "LORENZO",
  "LOUAI",
  "LOUNDJA",
  "LYA",
  "LYSAHÏA",
  "MACE",
  "MAEL",
  "MAËLAN",
  "MALIYAH",
  "MARIEM",
  "MARYAM",
  "MASSINISSA",
  "MATEO",
  "MATHILDA",
  "MATHYS",
  "MATISSE",
  "MATTHÉO",
  "MATTHEW",
  "MAUI",
  "MAYAN",
  "MAYLA",
  "MAYRON",
  "MEHLIKA",
  "MELLINA",
  "MÉLYNA",
  "MICKY",
  "MIMASCIA",
  "MIRA",
  "MIYA",
  "MYLAN",
  "NADINE",
  "NAWFEL",
  "NOAH",
  "NOAN",
  "NOELLY",
  "OCTAVE",
  "OLIVIA",
  "OUNS",
  "OURIEL",
  "PRUNE",
  "RAYANE",
  "REINE",
  "RIMEN",
  "RYLE",
  "SAFA",
  "SAHIN",
  "SEBASTIANO",
  "SÉLÉNA",
  "SERENA",
  "SERGUEÏ",
  "SEYHAN",
  "SHADEN",
  "SHERINE",
  "SINEN",
  "SOANN",
  "SOHANE",
  "SOULAYMANE",
  "STEVEN",
  "SYÄNA",
  "SYRINE",
  "TAYEB",
  "THAÏLYS",
  "THOM",
  "TIMAH",
  "TYLER",
  "UGO",
  "VALENTINA",
  "VITALI",
  "VITTORIA",
  "WAEL",
  "WIDAD",
  "XIA",
  "YEHIA",
  "YOHAN",
  "YOHANNA",
  "YOUANE",
  "ZÉKIA",
  "ZIANI",
  "ZINEDINE",
  "EMMA",
  "LIAM",
  "NINO",
  "ARTHUR",
  "RAPHAËL",
  "NOAM",
  "VICTORIA",
  "ALEXANDRE",
  "EVAN",
  "LILA",
  "LIVIO",
  "LOUISE",
  "MAYLON",
  "MAYLONE",
  "MOHAMED",
  "SOHAN",
  "YOUNES",
  "YOUSSEF",
  "ALESSIO",
  "ÉLISE",
  "EWA",
  "GIULIANN",
  "HAROON",
  "ILIANA",
  "ILYES",
  "JACOB",
  "JAWED",
  "JENNAH",
  "KAYDEN",
  "KIM",
  "LAYANA",
  "LÉNA",
  "MARIA",
  "PAOLO",
  "PATRICK",
  "QASSIM",
  "ROXANE",
  "SELENA",
  "SHAHIN",
  "THÉA",
  "TIMOTHÉ",
  "WARREN",
  "YASMINA",
  "ZAC",
  "AALIYA",
  "ABDALLAH",
  "ABDEL-HALIM",
  "ABED",
  "ADELYNA",
  "ADIL",
  "ADRIANO",
  "AÉLA",
  "AICHA",
  "ALBANE",
  "ALBERT",
  "ALESSIA",
  "ALIAH",
  "ALISSA",
  "ALIZÉE",
  "ALMAZ",
  "AMALYA",
  "AMILISSE",
  "AMINATA",
  "AMJÂD",
  "AMLAL",
  "ANESSYA",
  "ANGELE",
  "ANGELO",
  "ANJARA-VERA",
  "ANTONIN",
  "ANTONY",
  "AREEJ",
  "ASMIN",
  "AWS",
  "AXEL",
  "AYA",
  "AYOUB",
  "BAISSANGOUR",
  "BAPTISTE",
  "BAYA",
  "BIANCA",
  "CAMERON",
  "CATALEYA",
  "CATALINA",
  "CÉLÉNA",
  "CÉLINA",
  "CEREN",
  "CHEYENNE",
  "CHLOE",
  "DANA",
  "DEFNE",
  "DELAL",
  "DÉLIA",
  "DIANE",
  "EDEM",
  "ÉDOUARD",
  "EDYNE",
  "ÉLÉA",
  "ELÉANNA",
  "ÉLÈNA",
  "ELIA",
  "ELRICK",
  "ELYANA",
  "ELYES",
  "ÉMELINE",
  "EMILE",
  "EMRAN",
  "ENAËL",
  "EYDEN",
  "FABION",
  "FATMA",
  "FLAVIO",
  "GABRIELLA",
  "GUILLAUME",
  "HANEÏA",
  "HOANI",
  "ILARIA",
  "ILYANO",
  "ILYÈS",
  "IMEN",
  "IRIS",
  "ISAAK",
  "ISABELLA",
  "ISSIAKA",
  "IYAD",
  "IYÈD",
  "JAÏLANN",
  "JALYNE",
  "JAMILA",
  "JAYLEE",
  "JEYDEN",
  "JOÉ",
  "JUDITH",
  "JULAYBIB",
  "KALÉO",
  "KALI",
  "KAMILYA",
  "KATE",
  "KAWTAR",
  "KELINE",
  "KELLY",
  "KÉLYA",
  "KELYM",
  "KEYDEN",
  "KIARA",
  "KLEVIS",
  "KMAR",
  "KRYSTAL",
  "KRZYSZTOF",
  "KYLIE",
  "KYMAN",
  "LAËTITIA",
  "LAIDA",
  "LANA",
  "LARA",
  "LASZLO",
  "LAYEL",
  "LEA",
  "LEXIE",
  "LILY-ROSE",
  "LINA-NOOR",
  "LIYANA",
  "LOHANN",
  "LONNYE",
  "LORENZA",
  "LOUISON",
  "LUC",
  "LUCILE",
  "MAËLLYNE",
  "MAEVE",
  "MALIA",
  "MALÏA",
  "MALIK",
  "MALYA",
  "MARIAM",
  "MARLON",
  "MARQUISE",
  "MASHA",
  "MATTIAS",
  "MAXIME",
  "MAXIMILLANO",
  "MAXINE",
  "MAYLANN",
  "MAYSON",
  "MÉLUSINE",
  "MERLIN",
  "MEY",
  "MILYANA",
  "NADHIR",
  "NAËLY",
  "NAHYM",
  "NAÏ",
  "NARJESSE",
  "NASSER",
  "NÉLYA",
  "NESLY",
  "NESSA",
  "NIDHAL",
  "NIKOLA",
  "NIKOLINA",
  "NISSRINE",
  "NOA",
  "OCÉANE",
  "OLIVER",
  "PABLO",
  "PAUL",
  "RAFIKA",
  "RUARAGI",
  "SAFIYA",
  "SAJA",
  "SAJED",
  "SAM",
  "SANTANA",
  "SANTIAGO",
  "SHAM",
  "SHAYN",
  "SOULEIMAN",
  "SOULEYMEN",
  "SOUMAYA",
  "SWAAN",
  "TALINE",
  "TASNIME",
  "TESS",
  "THIÉFEUNE",
  "THIERNO",
  "THYAM",
  "THYMÉO",
  "TIÉGO",
  "TIFANY",
  "TILIO",
  "TYVEN",
  "VLAD",
  "YAHIA",
  "YAKINE",
  "YENIS",
  "YONI",
  "YUREN",
  "ZAÏNEB",
  "ZAYD",
  "ZAYN",
  "ZIA",
  "ZINA",
  "HUGO",
  "ALMA",
  "JOSEPH",
  "MIA",
  "THIAGO",
  "LÉON",
  "MARTIN",
  "MILAN",
  "MYRIAM",
  "NASSIM",
  "STELLA",
  "CAMILIA",
  "ÉLIA",
  "ELLIE",
  "IBRAHIM",
  "JOSÉPHINE",
  "JOYCE",
  "JUSTINE",
  "KAÏS",
  "KENZO",
  "KINGSLEY",
  "LAHNA",
  "LINE",
  "MAËLYS",
  "LUNA",
  "MAËL",
  "MARIUS",
  "AMIR",
  "MATTÉO",
  "NELYA",
  "CLARA",
  "SACHA",
  "ISMAËL",
  "SOFIANE",
  "LÉONIE",
  "SOULEYMAN",
  "WAËL",
  "JANA",
  "YANIS",
  "ABDERRAHMANE",
  "THÉO",
  "ABDOULAYE",
  "THOMAS",
  "ADÉLIA",
  "ADELINA",
  "ALESSANDRO",
  "ADIB",
  "AÏDEN",
  "AÏSSA",
  "CARL",
  "ALBERTO",
  "CHARLES",
  "ALDO",
  "ALEXANDRA",
  "ALEXANE",
  "ALI-KADER",
  "EMILY",
  "ALIOU",
  "EZIO",
  "ALLÉGRIA",
  "HANNAH",
  "AMEDEA",
  "ISAAC",
  "ANTONELLA",
  "ARIANA",
  "ASIM",
  "JULIE",
  "KACEM",
  "AUBIN",
  "LAYA",
  "AUGUSTE",
  "LEO",
  "AURÈLE",
  "LOANN",
  "AURORE",
  "LYNE",
  "AYLAN",
  "AYLANE",
  "MATHÉO",
  "BALKIS",
  "MYA",
  "BJORN",
  "BRYAM",
  "ROMEO",
  "ROMÉO",
  "CAPUCINE",
  "RYAN",
  "SANTINO",
  "CHARLIE",
  "CHELSSY",
  "CIARA",
  "CLIFFORD",
  "CRISTIANO",
  "DAMIA",
  "ADELINE",
  "DAVI",
  "AËLYS",
  "DEVRAN",
  "AERIS",
  "DILDA",
  "DIMITRIA",
  "ALBIE",
  "DJAY-LALL",
  "ALHANNA",
  "DJESIE",
  "DRISS-ADAM",
  "ALIX",
  "DUNJA",
  "ALPHA",
  "EDOUARD",
  "AMBROISE",
  "EÏLYNE",
  "AMEN",
  "ANAÉ",
  "ELIANA",
  "ANISSA",
  "ELLIOTT",
  "ANITA",
  "ELYAM",
  "ANTONIO",
  "ELYSSA",
  "ANY",
  "EMILIE",
  "ÉMINE",
  "EMIR",
  "ARIJE",
  "EMRYS",
  "ARMELLE\\",
  "ETTORE",
  "ASSIA",
  "EVANN",
  "EVE",
  "AZIZ",
  "EVI",
  "BALTHAZAR",
  "EZEL",
  "BASILE",
  "BAYA-ROSA",
  "FATIMA-ZAHRAA",
  "BENJAMIN",
  "FAYED",
  "BINETA",
  "FAYSSAL",
  "BRADLEY",
  "GAUTHIER",
  "BROOKE",
  "GIORGIO",
  "BRYANNA",
  "GRÂCE",
  "CALVIN",
  "GRETA",
  "CAMELIA",
  "HAFSA",
  "CAMILA",
  "HAMZA",
  "CARLA",
  "HANAÉ",
  "CASSANDRA",
  "HÉLA",
  "CHAHID",
  "HÉLOÏSE",
  "CHLOË",
  "HEYDEN",
  "CLÉA",
  "HILAL",
  "CLÉLIA",
  "ILAN",
  "CLÉMENCE",
  "ILIZANDRO",
  "CLOVIS",
  "ILLAN",
  "COLIN",
  "ILYA",
  "DANYELLA",
  "ISAC",
  "DARREN",
  "ISHAQ",
  "DARYO",
  "ISMAÏL",
  "DAYENA",
  "DELYA",
  "IZZA-LYS",
  "DIEL-AKIM",
  "JALIL",
  "DJEINA",
  "JANE",
  "JAROD",
  "DJOUNEID",
  "JASSIM",
  "DYEGO",
  "JASSOUR",
  "EDÈNE",
  "JÉRÉMY",
  "ELÉONORE",
  "JINEN",
  "ÉLIOTT",
  "JOEY",
  "JOSEFINE",
  "ELLYN",
  "JOSIANE",
  "ELYAH",
  "JOY",
  "KADEM",
  "EMA",
  "KALESEA",
  "EMMANUEL",
  "KALLISTA",
  "EMRÂN",
  "KASSILY",
  "ÉMY",
  "ENOA",
  "EYLA",
  "KELLYN",
  "KÉLYM",
  "FATIMATA",
  "KENDRA",
  "FATOU",
  "KHADIDIATOU",
  "FIRDAWS",
  "KHALIS",
  "FRANCO",
  "GAËL",
  "LATIFA-SYRINE",
  "GALIA",
  "LEELOO",
  "GEORGIA",
  "LEEN",
  "LEIA",
  "LEIYA",
  "GIULIO",
  "LENA",
  "HALIMA",
  "LIÊM",
  "HANA",
  "HAYLEN",
  "HELENA",
  "LILLIANE",
  "HOSNI",
  "LIONEL",
  "IMAËL",
  "LIYANE",
  "ISAÀC",
  "LLOYD",
  "IZAK",
  "LOAI",
  "IZIA",
  "LOUAY",
  "LOUP",
  "JAZZMÎN",
  "LUCIO",
  "LYANA",
  "JEENA",
  "LYANE",
  "JEYNA",
  "LYN-AYA",
  "JOSHUA",
  "LYO",
  "JUSTIN",
  "LYSA",
  "KALYSSA",
  "LYSIA",
  "MADDIE",
  "MADDY",
  "MAELI",
  "KEMIL",
  "MAHÉ",
  "KENAAN",
  "MAÏ",
  "KESSY",
  "MALAK",
  "KEYLEEN",
  "KILIAN",
  "MALO",
  "KIRAH",
  "KLARA",
  "MARAM",
  "KOSAI",
  "MARC-AURÈLE",
  "KYARA",
  "MARCEL",
  "KYRA",
  "MARK",
  "LAURIANE",
  "MATTHIEU",
  "LAURIANY",
  "LÉANE",
  "MAYRONE",
  "LÉONARDO",
  "MELYE",
  "LÉON-MAËL",
  "MERYAM",
  "LÉONORA",
  "MIA-MARIA",
  "LÉTIMY",
  "MIKAÏL",
  "LEYA",
  "MILLA-ROSELYNE",
  "LEYLA-AMINA",
  "MIRANE",
  "LILY-JANE",
  "MOHAMED-ALI",
  "LIORE",
  "MOHAMED-NEJIB",
  "LISANDRO",
  "MUHAMMED",
  "LOÏC",
  "NAËL-GABRIEL",
  "LOUANE",
  "NAIA",
  "LOUBNA",
  "NATHANAËL",
  "LUCILLE",
  "NAWAF",
  "LYAN",
  "NAYHA",
  "NEDJMA",
  "MADELEINE",
  "NEHLAN",
  "MAÉ",
  "NÉLIA",
  "MAËWENN",
  "NELLA",
  "MAGGIE",
  "NEO",
  "MAHIK",
  "MALEK",
  "NIYA",
  "MANDY",
  "MANESSA",
  "NOURHANE",
  "MARC",
  "OLÉSYA",
  "MARC-JOEY",
  "ORA",
  "MARINO",
  "OSMAN",
  "MATÉO",
  "OUMAR",
  "MATHIS",
  "OUMOU",
  "MATHIS",
  "OWEN",
  "PIA",
  "MATTÈO",
  "MATVEY",
  "PRINCESS",
  "MAYAR",
  "RAPHINA",
  "MAYRONN",
  "RAWEN",
  "MEÏ-HANNAH",
  "MELINA",
  "ROMY-ROSE",
  "MEREDITH",
  "ROSA",
  "MEYSSON",
  "ROXANNE",
  "MICHAEL",
  "SAM",
  "SELIM",
  "SÉRAPHIN",
  "MILLIE",
  "SEYANA",
  "MILLYA",
  "MILO",
  "SHAHINE",
  "MUSTAFA\\",
  "SHAILOH",
  "MYLES",
  "SHAYNEZ",
  "NADIM",
  "SHEMSY",
  "NAHYAN",
  "SILA",
  "NANS",
  "SIWAR",
  "SLAVKO",
  "NATHAËL",
  "SOFYA",
  "NAYAH",
  "NESS",
  "SOUHAIL",
  "NEVIN",
  "SOUKAÏNA",
  "NÉVINE",
  "STÉPHANIE",
  "NICOLETA",
  "SYLIO",
  "NILS",
  "TAHAR",
  "TAISIYA",
  "NOHA",
  "TEYM",
  "OLYMPE",
  "TOMMY",
  "ORIANE",
  "TYANA",
  "OSCAR",
  "ULYSSE",
  "OSKAR",
  "WAHEL",
  "OUMAÏMA",
  "XAVI",
  "OWAYSS",
  "YASSMINE",
  "PHOEBE",
  "YONAS",
  "ZAKARYA",
  "QUENTIN",
  "ZAYDENE",
  "RACIM",
  "ZLATAN",
  "RAYLIE-TAYSIANE",
  "RIFEL",
  "RÏLEY",
  "ROSEA",
  "SABRI",
  "SAKINA",
  "SAMI",
  "SAMIRA",
  "SANAYA",
  "SAYAN",
  "SELEM",
  "SEYDINA-SALIOU",
  "SHEMS",
  "SHERYNE",
  "SKENDER",
  "SOA",
  "SOLWENE",
  "SOULEYMANE",
  "SPARTAK",
  "SYBILLE",
  "TAHER",
  "TAO",
  "TARA",
  "TAYANNA",
  "TEYSSA",
  "THËA",
  "TIBOU",
  "VAKO-BRAYAN",
  "VIVIANE",
  "XENA",
  "YANZO",
  "YARA",
  "YAZID",
  "ZAYAN",
  "ZAYED",
  "ZILIA",
  "NAËL",
  "ILYAN",
  "NOLAN",
  "YASMINE",
  "ALICE",
  "EMNA",
  "SANDRO",
  "SIANA",
  "ZOÉ",
  "AMÉLIA",
  "ASSILE",
  "BRUNA",
  "CRISTIAN",
  "ELINE",
  "FARÈS",
  "HARPER",
  "LÉANDRE",
  "LEYNA",
  "LIV",
  "MALONN",
  "NAOMI",
  "ROMANE",
  "ROSALIE",
  "SELMA",
  "YUSUF",
  "AALYAH",
  "AHLEM",
  "AIYANA",
  "ALAYNA",
  "ALEA",
  "ALLAN",
  "ALPARSLAN",
  "ALY",
  "ALYA",
  "AMANI",
  "AMARA",
  "ANAËLLE",
  "ANASTASIA",
  "ANDRÉ",
  "ANGÈLE",
  "ANIS",
  "ANNA-DEA",
  "ANTOINE",
  "ARWEN",
  "ATTILIO",
  "AURELE",
  "AYAZ",
  "AYLAAN",
  "AYLINE",
  "BENOÎT",
  "BILAL",
  "CAMRON",
  "CÉCILE",
  "CHAKER",
  "CHELSEA",
  "CHRIS",
  "COLETTE",
  "DASTÀN",
  "DAYANE",
  "DÉLYA",
  "DJELYSSA",
  "DOUGLAS",
  "EDOARDO",
  "EDRASIN",
  "ELÉANE",
  "ELIAM",
  "ELODIE-ROSE",
  "ELYNNA",
  "ELYO",
  "ESENIIA",
  "ESRAA",
  "ÉVA",
  "EVANNA",
  "EVY",
  "FAËL",
  "FALLOU",
  "FARÉS",
  "FEDERICO\\",
  "FÉLIX",
  "FILIMOKAILAGI",
  "FIRAS",
  "FRED-AYDEN",
  "GAEL",
  "GHAITH",
  "GIACOMO",
  "GIAN",
  "GIORGIA",
  "GIOVANNI",
  "GUZMAN",
  "HANNA",
  "HARVEY",
  "HECTOR",
  "HEDI",
  "HÉLÉNA",
  "ILYAS",
  "ILYNA",
  "ILYNE",
  "IMRÂN",
  "ÎMRAN",
  "IOACHIM",
  "ISHMAEL",
  "IVANN",
  "IZAYA",
  "IZHAK",
  "IZY",
  "JANET",
  "JASMINE",
  "JOË",
  "JORDANE",
  "JOUDIA",
  "KAMELIA",
  "KARL",
  "KAYAN",
  "KAYNA",
  "KELYANE",
  "KENZI",
  "KEYLAN",
  "KEYSI",
  "KIM-LINE",
  "KLEYDEN",
  "LAÏANNAH",
  "LEANA",
  "LEANNA",
  "LEYAN",
  "LEYANE",
  "LINON",
  "LIOR",
  "LÏYAH",
  "LIYAM",
  "LOJAIN",
  "LOUYSE",
  "LUCIEN",
  "LUCY",
  "LYVIO",
  "MADANI",
  "MAËNA",
  "MAHÉZIA",
  "MAÏSSA",
  "MALICIA",
  "MAMEBOUBOU",
  "MANEL",
  "MANON",
  "MARIN",
  "MARIYAH",
  "MARTHA",
  "MAXANCE",
  "MAXIMILIAN",
  "MAY",
  "MAYANN",
  "MAYLIN",
  "MAYLIS",
  "MEHREZ",
  "MELVIN",
  "MELYSSE",
  "MEYLI",
  "MILANA",
  "MOHAMED-YASSINE",
  "MYLANA",
  "NADA",
  "NAHIL",
  "NATHALIA",
  "NEIL",
  "NEYLA",
  "NOÉLYA",
  "NOÉMIE",
  "NORA",
  "NYMAR",
  "PEYO",
  "RACHEL",
  "RADU-NICOLAS",
  "RAHEEM",
  "RASSILE",
  "RESUL",
  "ROCCO-ANGUS",
  "ROKYA",
  "ROXANA-MARIA",
  "SAÏDA",
  "SHAÏ",
  "SHARELLE",
  "SHAYINN",
  "SIMÃO",
  "SIYA",
  "SYLIA",
  "TAÏM",
  "TESSNIM",
  "TIMAE",
  "TIMEO",
  "TINO",
  "TOBIAS",
  "TYNA",
  "TYRON",
  "VICKY",
  "YAKOUB",
  "YASIN",
  "YLIÈS",
  "ZAYANN",
  "WILLIAM",
  "MATHILDE",
  "EWEN",
  "KENZA",
  "KEVIN",
  "ROMAIN",
  "TESSA",
  "ANA",
  "ARON",
  "ARYA",
  "DARELL",
  "ELÉA",
  "ELYNA",
  "LORIS",
  "MÉLINE",
  "RIYAD",
  "SONIA",
  "TIMOTHÉE",
  "YASSER",
  "AEDEN",
  "AHLIYA",
  "AÏCHA",
  "AÏVY",
  "ALEK",
  "ALEKSEJ",
  "ALEXANDER",
  "ALLY",
  "ALYAH",
  "AMADOU",
  "AMAURY",
  "AMEL",
  "AMYR",
  "ANDREW",
  "ANGÈLA",
  "ANNABELLA",
  "ANTON",
  "ARIELLA",
  "ASEEL",
  "ASHLEY",
  "ASSYA",
  "AUGUSTINE",
  "AUSTIN",
  "AYCKEL",
  "AYSEM",
  "BARTHOLOMEW",
  "BASSIROU",
  "BILLIE",
  "BILLY",
  "BOUCHRA",
  "CASSY",
  "CHARLIZE",
  "CHAYLIE",
  "CLEA",
  "CYNDA",
  "DALIA",
  "DANA-ROSE",
  "DANIA",
  "DATCHI",
  "DAYVON",
  "DILKEN",
  "DIRAR",
  "DJENAÉ",
  "DORESS",
  "EILYNE",
  "ELAISA",
  "ELÉANA",
  "ÉLIE",
  "ELINA",
  "ÉLINE",
  "ELIYA",
  "ELODIE",
  "ELOUAN",
  "ELYAS",
  "ELYELSON",
  "ERIC",
  "ESAD",
  "ÉWEN",
  "FAUSTINE",
  "GHJULIA",
  "GIOIA",
  "GULSIMA",
  "HASSEN",
  "HEYA",
  "HINATA",
  "HUSSAÏN",
  "ILEANA",
  "INÉS",
  "ISHABELLE",
  "IZZA",
  "JACQUES",
  "JANELLYA",
  "JASON",
  "JEAN",
  "JIBRIL",
  "JOAN",
  "JOHAN",
  "JOHANNA",
  "JOHN",
  "JUBA",
  "JUDICAËL",
  "JULIANE",
  "KAHIL",
  "KAMÉLIA",
  "KASIJA",
  "KEANU",
  "KEMYLTON",
  "KHYLIAN",
  "KIÊN",
  "KRYZALIA",
  "LAINA",
  "LEANDRO",
  "LEIAH",
  "LEONARDO",
  "LEV",
  "LIANA",
  "LILIAN",
  "LINO",
  "LINOÏ",
  "LIORA",
  "LIYAH",
  "LIZ",
  "LOUKAS",
  "LUCIANO",
  "LUIS",
  "LUKA",
  "LUZ",
  "LYLIA",
  "MAELLY",
  "MAËLYA",
  "MAÏAR",
  "MALCOLM",
  "MARIANNA",
  "MARLYATOU",
  "MATIAS",
  "MAYSSA",
  "MAZEN",
  "MELANIA",
  "MELANNA",
  "MÉLINA",
  "MELODY",
  "MELYNA",
  "MERYEM",
  "MILHANE",
  "MIRAN",
  "MORGAN",
  "MOUNIB",
  "MULAN",
  "NAHIA",
  "NATHAEL",
  "NERMINE",
  "NEYAN",
  "NIKITA",
  "NOÉMIA",
  "NOREY",
  "OHANA",
  "OLIVIER",
  "OMNIYA",
  "PALOMA",
  "PIERRE-LOUIS",
  "PIO",
  "PURITY",
  "RAWENE",
  "RIHANE",
  "ROSIE",
  "ROZA",
  "SAJID",
  "SALMA",
  "SAN",
  "SAVANNA",
  "SAYANN",
  "SELYAN",
  "SEMY",
  "SHAÏLY",
  "SHAYLIE",
  "SIRYNE",
  "SOUNA",
  "STAN",
  "SUREN",
  "SWAN",
  "TALI",
  "TALIYA",
  "TALYA",
  "TAYANA",
  "THÉODORE",
  "THERGHAM",
  "TOMAS",
  "TRISTAN",
  "TYLAN",
  "VANINA",
  "VINCENZO",
  "YAHYA",
  "YNNA",
  "YONA",
  "YOUNA",
  "YOUNESS",
  "YU",
  "YURI",
  "ZAÏM",
  "ZAYANE",
  "ZAYON",
  "TIAGO",
  "LILIA",
  "NOOR",
  "RAPHAEL",
  "RUBEN",
  "ALIYAH",
  "DORON",
  "ELI",
  "GABRIELLE",
  "GASPARD",
  "ILEF",
  "LEÏNA",
  "LYVIA",
  "MARINA",
  "SABRINA",
  "ABD RAHMAN",
  "ADAN",
  "ADEL",
  "ADEN",
  "AIMY",
  "AIYRA",
  "ALEXIE",
  "ALEYA",
  "ALIYA",
  "AMÉLIE",
  "AMNA",
  "ANATOLE",
  "ANTHONY",
  "ANYA",
  "APOLLINE",
  "AREV",
  "ARY",
  "ARYANA",
  "ASLAN",
  "AWESS",
  "AYLIN",
  "BAYENE",
  "BIRDY",
  "CASSANDRE",
  "CASSIE",
  "CHAÏMA",
  "CHEMS",
  "CLAY",
  "COUMBA",
  "DARIO",
  "DESIDERIA",
  "DESMOND",
  "DINIS",
  "DIOR-TARA",
  "DJÈNNAH",
  "DRISS",
  "ELAYANN",
  "ELYASS",
  "EMMY",
  "ENES",
  "ERIKA",
  "ESTHER",
  "EUNA",
  "FABIEN",
  "FARAH-YAMINA",
  "FIONA",
  "FRANCISCO",
  "GARANCE",
  "GINA",
  "GLEB",
  "HACÈNE",
  "HARLEY",
  "HÉLINE",
  "HORMANCE",
  "ISMAIL",
  "IVAN",
  "IZÏA",
  "JADA",
  "JAKE",
  "JASSEM",
  "JÉRÉMIE",
  "JEREMY",
  "JILL",
  "JONAYD",
  "JORDAN",
  "JORGE",
  "KAÏLY",
  "KAÏLYS",
  "KAÏSS",
  "KAMIL",
  "KASSY",
  "KETIB",
  "KHALD",
  "KINEM",
  "KYLE",
  "LAÏNA",
  "LALIE",
  "LAMISS",
  "LAUREL",
  "LAURIE",
  "LAURYN",
  "LAYANE",
  "LÉOPOLD",
  "LEZIO",
  "LISE",
  "LISSANDRO",
  "LISY",
  "LUCENZO",
  "LYLOU",
  "MAÉVA",
  "MAHÉRI",
  "MAÏTENA",
  "MAJD",
  "MANUEL",
  "MAREVA",
  "MARYA",
  "MASSANDJE",
  "MATT",
  "MATTHIAS",
  "MEDINN",
  "MÉLODIE",
  "MÉLYA",
  "MICKEL",
  "MIKAELA",
  "MIKAHYL",
  "MIKHAÏL",
  "MOUHAMED",
  "MYLHAN",
  "NAHYL",
  "NAÏMA",
  "NAJIOULLAH",
  "NALEYA",
  "NEIDY",
  "NEÏL",
  "NNEKA",
  "NOLA",
  "NOUHA",
  "OLAYA",
  "OMER",
  "PACO",
  "PATRICIA",
  "PAULO",
  "PEDRO",
  "RAFAELA",
  "RAFFAËLLE",
  "RAPHAËLLE",
  "REILA",
  "RÉMI",
  "RÉMY",
  "REVAN",
  "RIMESSE",
  "ROGER",
  "ROLLINSEY",
  "ROSALIA",
  "RYM",
  "SALAH",
  "SALVADOR",
  "SAMIR",
  "SEAN",
  "SELINA",
  "SELYANN",
  "SHADÉ",
  "SHAYNA",
  "SHEMS-DINE",
  "SOLAL",
  "SOULAIMANE",
  "SOULAYMEN",
  "SOYA",
  "TAIRA",
  "TAYTE",
  "TEHANA",
  "TESNIME",
  "THIBAUD",
  "THYAGO",
  "TILIAN",
  "TILO",
  "TOUNAROUZ",
  "VICTORINE",
  "XAVIER",
  "YANELLA",
  "YASSIR",
  "YI",
  "YLAN",
  "YOUMNA",
  "YOUSRA",
  "ZAHINN",
  "ZAYNEB",
  "ZEYNEP",
  "ZIYAD",
  "DIANA",
  "MARCEAU",
  "ADRIAN",
  "AMAYA",
  "AMINE",
  "GIULIANA",
  "LÉANA",
  "MAYRA",
  "MEDINA",
  "MÉLISSA",
  "NAEL",
  "NAHËL",
  "NOHAN",
  "ABDU\\",
  "ADÈM",
  "AÏSSEM",
  "AMAL-ELOÏM",
  "AMJED",
  "ANGÉLIQUE",
  "ANNAËLLE",
  "ANTONE",
  "ARMEL",
  "ARYEM",
  "AYLEEN",
  "AZALÉE",
  "BARTHÉLEMY",
  "BÉYÉZID",
  "BIJED",
  "CATALYA",
  "CHANA",
  "CLAIRE",
  "DAMIANE",
  "DANEEN",
  "DANNY",
  "DELYAH",
  "DÉSIDERIA",
  "DJAD",
  "DJANÂA",
  "DOMINIK",
  "DONIA",
  "DONNA",
  "ELIJAH",
  "ELISÉA",
  "ÉMIE",
  "ÉMILE",
  "EVELINA",
  "FA",
  "FLAVYO",
  "FLETCHER",
  "FLEUR",
  "FREYA",
  "GHALIA",
  "GRACE",
  "GUS",
  "HALEY",
  "HALINE",
  "HÈDI",
  "HILLEL",
  "HÜMEYRA",
  "IAN",
  "IHSAN",
  "ILLYAN",
  "INNA",
  "IZAO",
  "JAROLD",
  "JOCELINE",
  "JOHANNES",
  "KALY",
  "KATALIYA",
  "KATRINE",
  "KAYLIA",
  "KÉMYL",
  "KEREN",
  "KEZAIAH",
  "KHALY",
  "KINANE",
  "KINEN",
  "KYM",
  "LAYEN",
  "LAZARE",
  "LEÏA",
  "LËNAÉ",
  "LÉONTINE",
  "LEYANA",
  "LEYDEN",
  "LONDON",
  "LOUNAH",
  "LYSANDRE",
  "MAÉLIE",
  "MAHANA",
  "MALLORY",
  "MANAL",
  "MANAR",
  "MARIA-MONIRA",
  "MASSIMO",
  "MAXIMILIEN",
  "MAYAH",
  "MAYEUL",
  "MAYSSEN",
  "MELYA",
  "MENDEL",
  "MINA",
  "MIRAS",
  "MOHAMED-GHALI",
  "MOUTASSIM-BILLAH",
  "MYHRAN",
  "NAYARA",
  "NIKOL",
  "NINON",
  "ODELL",
  "OLGA",
  "ÖMER",
  "OWEIS",
  "OYANA",
  "PRISQUE",
  "RAHMA",
  "RAUL",
  "RAYHANA",
  "RAYSSA",
  "RHÉMISSIE",
  "RILEY",
  "RINED",
  "SALOMÉ",
  "SÉLENA",
  "SÉRÉNA",
  "SEYDINA",
  "SHARONE",
  "SIANNA",
  "SOUHAIB",
  "STANISLAS",
  "STANY",
  "SULTANA",
  "SYANA",
  "SYDNEY",
  "THÉLYA",
  "TIMMY",
  "UMUT",
  "VICENTE",
  "WANIS",
  "WAYATT",
  "YAEL",
  "YOUSSEF-SHEINE",
  "ZAHORA-JHANCY",
  "ZAHRA",
  "ZUZANNA",
  "MARLONN",
  "NOÉ",
  "AUGUSTIN",
  "BELLA",
  "BROOKLYN",
  "ELIAS",
  "IDRISS",
  "JOUD",
  "JOURY",
  "LEWIS",
  "MARVIN",
  "SHAHEEN",
  "SHAWN",
  "SOUJOUD",
  "ADÈLE",
  "AËLA",
  "AFNANE",
  "AÏSSATA",
  "ALARA",
  "ALESIO",
  "ALYSSIA",
  "AMÉDÉE",
  "AMINA",
  "ANASTHASIA",
  "ANEYA",
  "ANIL",
  "APOLLONIA",
  "APRYLE",
  "ARKAN",
  "ARMAND",
  "AYANE",
  "AYET",
  "BEATRIZ",
  "BELVINE",
  "BONNIE",
  "BOUBAKER",
  "CALISTA",
  "CASEY",
  "CATERINA",
  "CLARYS",
  "CLOÉ",
  "DAISSY",
  "DAMIAN",
  "DAPHNÉ",
  "DAYLENE",
  "DENYA",
  "DJANNA",
  "DJEBRIL",
  "ECHO",
  "ÉDEN",
  "ELIAN",
  "ELIE",
  "ELISABETH",
  "ELORA",
  "EMEL",
  "ÉMILIA",
  "EMÎN",
  "EMINE",
  "ENZO-HUNTER",
  "ERINE",
  "ERON",
  "ÉVAN",
  "ÈVE",
  "FRANCESCO",
  "FRANCISCA",
  "FRENZER",
  "GAIA",
  "GHITA",
  "GINO",
  "HABY",
  "HELIOS",
  "HELWEN",
  "HIND\\",
  "HYND",
  "INÊS",
  "INESS",
  "IRMA",
  "ISALIE",
  "ISSLEM",
  "JACK",
  "JAHID",
  "JANILSON",
  "JANNAH",
  "JASMEEN",
  "JESSICA",
  "JIHANE",
  "JNINA",
  "JUDY",
  "JULIANA",
  "KACY",
  "KAËLAN",
  "KÂMIL",
  "KATHLYNE",
  "KAYSAAN",
  "KAYSAN",
  "KELIA",
  "KETLYNE",
  "KHADIDJA",
  "KHADIJA",
  "KOSTA",
  "KYNAN",
  "LAURINA",
  "LEMMY",
  "LEVY-STAN",
  "LEYLA",
  "LINDSAY",
  "LOEVEN",
  "LOUCIA",
  "LUKE",
  "LYDIA",
  "LYNDA",
  "MAHYNA",
  "MAIA",
  "MALEA",
  "MARIA-PIA",
  "MARIO",
  "MATHIEU",
  "MEDHY",
  "MEÏ",
  "MÉLISSANDE",
  "MÉRIYA",
  "MERVAN",
  "MITZA\\",
  "MORGANE",
  "MURAD",
  "NAËLIA",
  "NAÏLA",
  "NASTIA",
  "NATEO",
  "NDÉYE\\",
  "NEILLY",
  "NELLYA",
  "NESSMA",
  "NÉTANEL",
  "NEYRINE",
  "NIVINE",
  "NOËLIA",
  "NOUSSAYBA",
  "ORION",
  "PAYTON",
  "PHARELL",
  "RIHANA",
  "RITA",
  "RITEG",
  "ROLLANDA",
  "ROMIE",
  "ROSE-ALYA",
  "SAPHIA",
  "SÉLINA",
  "SENA",
  "SHARVIN",
  "TAÏS",
  "TAYMA",
  "TAYRON",
  "TEAGAN",
  "TEHANI",
  "THÉANA",
  "TIANA",
  "TIJAN",
  "TIMOTÉE",
  "TRÉCY",
  "VAIANA",
  "VAÏANA",
  "YAAKOUB",
  "YOMNA",
  "YOUNÈS",
  "YOUSSOUF",
  "YUGO",
  "ZACHARIE",
  "ZACK",
  "ZAINEB",
  "ZÉLIE",
  "ZEYNAB",
  "ISSAM",
  "CORENTIN",
  "FRANCESCA",
  "GAÏA",
  "IYED",
  "LIYA",
  "MARIYA",
  "SKANDER",
  "VLADIMIR",
  "YASSIN",
  "ABDELKADER",
  "AFONSO",
  "AÏDA",
  "AISHA",
  "ALVARO",
  "ALYNE",
  "AMIRA-VICTORIA",
  "ANDY",
  "ANGELA",
  "ANGÉLO",
  "ANIQÄ",
  "ARAM",
  "ARIS",
  "ASSYM",
  "ATHÉNA",
  "AURE",
  "AZUR",
  "AZURE",
  "BAHOZ",
  "BILEL",
  "CAELINA",
  "CALIE",
  "CÉLESTE",
  "CÉLIE",
  "CIDRA",
  "CINDY",
  "CLÉO",
  "DALI",
  "DARCY",
  "DARIA",
  "DIMITRI",
  "EITHAN",
  "ÉLÉONORE",
  "ELHÉE-AMEL",
  "ELIOR",
  "ELLIOT",
  "ELYJAH",
  "EMILIA",
  "EOWYN",
  "ESSYA",
  "EYDEM",
  "GALIEN",
  "GERSON",
  "HAÏLIE",
  "HARRISON",
  "HARUN",
  "HYLEL",
  "JACER",
  "JANNETTE",
  "JASIM",
  "JAYLINE",
  "JENA",
  "JIM",
  "JOUDE",
  "KATIÉNÉ",
  "KATY",
  "KEMI",
  "KEMILY",
  "LAYLA",
  "LAYSSA",
  "LEILA",
  "LEONARD",
  "LILAS",
  "LILIE",
  "LUAN",
  "LUANA",
  "LUISAO",
  "LYSSANDRE",
  "MADELINE",
  "MADY",
  "MAÏLYA",
  "MAO",
  "MARCELO",
  "MARWAN",
  "MAXINE-ROSE",
  "MAYLONNE",
  "MÉDINE",
  "MIKE",
  "MIRAÇ",
  "MÎRAZ",
  "MOHAMED-AMINE",
  "MOHAMED-WASSIM",
  "NAËLIE",
  "NAELLE",
  "NAËLLE",
  "NATHANE",
  "NAZIM",
  "NOLANN",
  "NOVAK",
  "ODAYA",
  "OTITIÉ",
  "PAPA-GALLO",
  "RAHIM",
  "RAMATA",
  "ROMAN",
  "SAFINA",
  "SAFWAN",
  "SAKALÉ",
  "SALVATORE",
  "SANAH",
  "SAYDEN",
  "SELMAN",
  "SILAS",
  "SIRINE",
  "SOPHIA",
  "TAIM",
  "THALYA",
  "TRAVIS",
  "VINNY",
  "WENDY",
  "YAKOUT",
  "YAZAN",
  "YAZANE",
  "YÜNA",
  "ZAÏAN",
  "ZAINAB",
  "ZAYLAN",
  "ZOEY",
  "MARWA",
  "OMAR",
  "YACINE",
  "AAHRON",
  "ABDEL-HAKIM",
  "ABDUL-MALIK",
  "ABOUBAKRY",
  "ADALINE",
  "AHLAN",
  "AHMADOU",
  "AKASIO",
  "ALAEDDINE",
  "ALIÉNOR",
  "ALISSON",
  "ALISTAIR",
  "ANAIS",
  "ANIYA",
  "ANNA-FATIMA",
  "AYDENN",
  "BASSAM",
  "BAYRHAM",
  "BEYAZID",
  "BILLAL",
  "BOGOYA",
  "BRISEÏS",
  "CÉLYA",
  "CIRÉ",
  "DALYA",
  "DAYVIS",
  "DJIBRINE",
  "DONFLAVIO",
  "EDDY",
  "EILA",
  "ÉLÉNA",
  "ÉMIR",
  "ENEA",
  "EYTHAN",
  "EYÜB",
  "FAHD",
  "FLORENCE",
  "FRENÇI",
  "GAUVAIN",
  "GHASSANE",
  "GIANNA",
  "GINNY",
  "HARON",
  "HIBA",
  "IKBEL",
  "ILEFE",
  "IRENE",
  "ISCIANÉE",
  "IZEL",
  "JANIS",
  "JASSER",
  "JED",
  "JELAN",
  "JOANNA",
  "JOYSSY",
  "KANYÉ",
  "KAYLEEN",
  "KÉLYAN",
  "KENDRICK",
  "KEYLANY",
  "KEYLIA",
  "KEYLIANNE",
  "KIRA",
  "KYMANI",
  "LANAH",
  "LARINA",
  "LAYANNA",
  "LÉOH",
  "LEXANE",
  "LIZA",
  "LLORIS",
  "LOANE",
  "LOHAN",
  "LOUANA",
  "MACEO",
  "MAËLIO",
  "MAËLYNN",
  "MAELYS",
  "MAIRA",
  "MAISSA",
  "MAÏSY",
  "MALOU",
  "MARCELLE",
  "MARLINA",
  "MARY",
  "MATTY",
  "MAVERICK",
  "MAYS",
  "MAYSAA",
  "MËA",
  "MICAELA",
  "MINH",
  "MOTAZ",
  "NADIA",
  "NAJET",
  "NEELA",
  "NEÏLA",
  "NELSON",
  "NESRINE",
  "NGUYEN",
  "NICOLO",
  "NISRINE",
  "NOÉLIA",
  "NUNO",
  "ORNELIA",
  "PARID",
  "PÉLINE",
  "RAHIMA",
  "RAZÈNE",
  "REBECCA",
  "REJEP",
  "RUANA",
  "RYIMAS",
  "SERIGNE-BABACAR",
  "SHAHD",
  "SHMOUEL",
  "SILAN",
  "SOËN",
  "TÉA",
  "THIBAULT",
  "THYLANE",
  "TIFENN",
  "TIMI",
  "TIWENN",
  "TUITELOTU",
  "TYA",
  "VALINA",
  "WAHEB",
  "WILLIAMS",
  "YLLANA",
  "YOLANIE",
  "YOSSEF",
  "YOSSRY",
  "YUEWEI",
  "ZAÏD",
  "ZAOUR",
];
let consonne = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "z",
];
let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let user1 = newUser();
console.log(user1);
console.log(user1.identifiant);
console.log(typeof user1.identifiant);

console.log(document.getElementById("champIdentifiant"));
