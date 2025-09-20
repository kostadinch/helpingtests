// src/data/questions.js

export const QUESTION_BANK = [

    // ---------------- 2006 MCQs ---------------- 
    {
        id: '2006-01', year: 2006, marks: 1,
        stemParts: [
            'In the equation ', { math: 'x = ut + \\tfrac{1}{2}at^2' }, ' the term ', { math: 'ut' }, ' represents:'
        ],
        options: [
            { text: 'a speed' },
            { text: 'an acceleration' },
            { text: 'a displacement' },
            { text: 'an impulse' }
        ],
        correct: 'C',
        tags: ['kinematics']
    },

    {
        id: '2006-02', year: 2006, marks: 1,
        stemParts: [
            'A block of Niobium, density ', { math: '8570\\,\\text{kg m}^{-3}' }, ', has sides ',
            { math: '3\\,\\text{cm}' }, ', ', { math: '4\\,\\text{cm}' }, ', ', { math: '5\\,\\text{cm}' }, '. ',
            'What is the maximum pressure it can exert when stood upright on one of its faces?'
        ],
        options: [
            { math: '4.3\\,\\text{kPa}' },
            { math: '430\\,\\text{Pa}' },
            { math: '2.6\\,\\text{kPa}' },
            { math: '510\\,\\text{kPa}' }
        ],
        correct: 'A',
        tags: ['statics', 'maths']
    },

    {
        "id": "2006-03",
        "year": 2006,
        "marks": 1,
        "stemHtml": "The diagram shows the approximate orbit of the dwarf planet Eris (X) around the Sun (S). Which of the following statements is <b>false</b>?",
        "image": "/graphs/2006-3.png",
        "options": [
            { "text": "Eris moves fastest at point D." },
            { "text": "Eris moves at the same speed at points A and C." },
            { "text": "Eris moves in an ellipse with the Sun at one focus." },
            { "text": "The potential energy of Eris changes during the orbit." }
        ],
        "correct": "A",
        tags: ['astronomy', 'gravity', 'circular motion']
    },

    {
        id: '2006-04', year: 2006, marks: 1,
        stem: 'A hollow toy boat is floating in a bath. If you take a teaspoon of water out of the bath and put it in the boat, what happens to the water level in the bath?',
        options: [
            { text: 'The level goes down.' },
            { text: 'The level goes up.' },
            { text: 'The level stays the same.' },
            { text: 'There isn’t enough information to say.' }
        ],
        correct: 'C',
        tags: ['hydrostatics']
    },

    {
        "id": "2006-05",
        "year": 2006,
        "marks": 1,
        "stemParts": [
            "In quantum mechanics the de Broglie wavelength of an object depends on its momentum according to ",
            { "math": "\\lambda = h/p" }, " where h is Planck's constant. ",
            "Protons of charge ", { "math": "e" }, " and mass ", { "math": "m" },
            " are accelerated from rest through a potential ", { "math": "V" }, ". ",
            "What is their de Broglie wavelength?"
        ],
        "options": [
            { "math": "\\tfrac{2h}{\\sqrt{meV}}" },
            { "math": "\\tfrac{h}{\\sqrt{2meV}}" },
            { "math": "h\\sqrt{meV}" },
            { "math": "\\tfrac{h}{eV}" }
        ],
        "correct": "B",
        tags: ['electricity', 'maths']
    },

    {
        id: '2006-06', year: 2006, marks: 1,
        stemParts: [
            'A car accelerates steadily from ', { math: '0\\,\\text{m s}^{-1}' }, ' to ', { math: '20\\,\\text{m s}^{-1}' },
            ' in distance ', { math: 'd' }, ' and time ', { math: 't' }, '. ',
            'Another car takes time ', { math: '2t' }, ' to reach the same final velocity. ',
            'What distance does the second car cover?'
        ],
        options: [
            { math: '\\tfrac{d}{4}' },
            { math: '\\tfrac{d}{2}' },
            { math: 'd' },
            { math: '2d' }
        ],
        correct: 'D',
        tags: ['kinematics', 'maths']
    },

    {
        "id": "2006-07",
        "year": 2006,
        "marks": 1,
        "stemParts": [
            "An alien civilization is in the business of building custom solar systems. Their basic model has five planets in circular orbits at distances ",
            { "math": "D" }, " that are perfect square multiples of a basic length, so that they are in the ratio ",
            { "math": "1:4:9:16:25" }, ". ",
            "The year lengths ", { "math": "Y" }, " of the planets are in ratios ",
            { "math": "1:8:27:64:125" }, ". ",
            "How are ", { "math": "D" }, " and ", { "math": "Y" }, " related?"
        ],
        "options": [
            { "math": "\\tfrac{Y}{D} = k" },
            { "math": "D = k\\sqrt{Y}" },
            { "math": "Y = kD^{3/2}" },
            { "math": "\\tfrac{Y^3}{D^2} = k" }
        ],
        "correct": "C",
        tags: ['astronomy', 'gravity', 'maths']
    },

    {
        "id": "2006-08",
        "year": 2006,
        "marks": 1,
        "stemParts": [
            "A Martian attempts to measure his mass using a set of bathroom scales in his house on Mars, and gets a reading of ",
            { "math": "93\\,\\text{kg}" }, ". ",
            "Unfortunately his scales were designed for use on Venus. Given that the gravitational strengths at the surface of Mars and Venus are  ",
            { "math": "3.8\\,\\text{N kg}^{-1}" }, " and ", { "math": "8.8\\,\\text{N kg}^{-1}" }, " respectively, ",
            "what is his true mass?"
        ],
        "options": [
            { "math": "40\\,\\text{kg}" },
            { "math": "106\\,\\text{kg}" },
            { "math": "215\\,\\text{kg}" },
            { "math": "245\\,\\text{kg}" }
        ],
        "correct": "C",
        tags: ['gravity', 'maths']
    },

    {
        id: '2006-09', year: 2006, marks: 1,
        stem: 'When a metal bar is cooled it contracts. Which of the following is true?',
        options: [
            { text: 'The density and mass increase.' },
            { text: 'The density increases and the mass remains constant.' },
            { text: 'The density and mass are unchanged.' },
            { text: 'The mass remains constant and the density decreases.' }
        ],
        correct: 'B',
        tags: ['heat']
    },

    {
        "id": "2006-10",
        "year": 2006,
        "marks": 1,
        "stemParts": [
            "A hot air balloon descends steadily at a speed of ",
            { "math": "11\\,\\text{m s}^{-1}" }, ". ",
            "The pilot drops a sandbag, which takes ",
            { "math": "7\\,\\text{s}" }, " to hit the ground. ",
            "What was the balloon’s height when it was released?"
        ],
        "options": [
            { "math": "168\\,\\text{m}" },
            { "math": "245\\,\\text{m}" },
            { "math": "322\\,\\text{m}" },
            { "math": "528\\,\\text{m}" }
        ],
        "correct": "C",
        tags: ['kinematics', 'gravity']
    },

    // ---------------- 2007 MCQs ----------------
    {
        id: '2007-01', year: 2007, marks: 1,
        stemParts: [
            'A cube of metal has sides of length ', { math: 'x' },
            '. The electrical resistance between opposite faces of the cube is:'
        ],
        options: [
            { text: 'directly proportional to x' },
            { math: '\\text{directly proportional to }x^2' },
            { text: 'inversely proportional to x' },
            { text: 'independent of x' }
        ],
        correct: 'C',
        tags: ['electricity', 'maths']
    },

    {
        id: '2007-02', year: 2007, marks: 1,
        stem: 'An astronaut in the International Space Station experiences weightlessness because',
        options: [
            { text: 'She is outside the Earth\'s gravitational field' },
            { text: 'The attractive force of the Moon cancels that of the Earth' },
            { text: 'She is moving' },
            { text: 'She is accelerating at the same rate as the space station' }
        ],
        correct: 'D',
        tags: ['gravity', 'circular motion', 'astronomy']
    },

    {
        "id": "2007-03",
        "year": 2007,
        "marks": 1,
        "stemParts": [
            "A ", { "math": "9" }, { "math": "V" }, " battery is connected across a ",
            { "math": "100" }, { "math": "\\Omega" }, " resistor. ",
            "Given electron charge ", { "math": "1.6\\times10^{-19}" }, { "math": "C" },
            ", what is the number of electrons passing through the resistor every second?"
        ],
        "options": [
            { "math": "5.6\\times10^{17}" },
            { "math": "6.9\\times10^{19}" },
            { "math": "5.6\\times10^{21}" },
            { "math": "6.9\\times10^{15}" }
        ],
        "correct": "A",
        tags: ['electricity', 'maths']
    },

    {
        "id": "2007-04",
        "year": 2007,
        "marks": 1,
        "stemParts": [
            "A drop slide has a very steep initial slope that gradually curves into a gentler slope. ",
            "As a child drops down, what happens to speed ", { "math": "v" },
            " the magnitude of his acceleration ", { "math": "a" }, "?"
        ],
        "options": [
            { "math": "v \\text{ and } a \\text{ both increase}" },
            { "math": "v \\text{ increases and } a \\text{ stays the same}" },
            { "math": "v \\text{ increases and } a \\text{ decreases}" },
            { "math": "v \\text{ decreases and }a \\text{ increases}" }
        ],
        "correct": "C",
        tags: ['dynamics', 'kinematics']
    },

    {
        "id": "2007-05",
        "year": 2007,
        "marks": 1,
        "stemParts": [
            "A spring that obeys Hookes law has a spring constant ",
            { "math": "k" },
            ". Two such springs are linked to form a spring of twice the length. What is the spring constant of the new longer spring?"
        ],
        "options": [
            { "math": "\\tfrac{k}{2}" },
            { "math": "\\tfrac{k}{\\sqrt{2}}" },
            { "math": "\\sqrt{2}k" },
            { "math": "2k" }
        ],
        "correct": "A",
        tags: ['simple harmonic motions', 'maths']
    },

    {
        "id": "2007-06",
        "year": 2007,
        "marks": 1,
        "stemParts": [
            "Two resistors ", { "math": "R_1" }, " and ", { "math": "R_2" },
            " are in parallel with potential difference ", { "math": "V" }, " across them. ",
            "The total power dissipated in this circuit is"
        ],
        "options": [
            { "math": "V^2\\,(\\tfrac{1}{R_1} + \\tfrac{1}{R_2})" },
            { "math": "\\tfrac{V^2}{R_1+R_2}" },
            { "math": "\\tfrac{V^2}{(\\tfrac{1}{R_1+R_2})}" },
            { "math": "V^2(R_1+R_2)" }
        ],
        "correct": "A",
        tags: ['electricity', 'maths']
    },

    {
        "id": "2007-07",
        "year": 2007,
        "marks": 1,
        "stemParts": [
            "Positron Emission Tomography (PET) scanners frequently operate using the radioactive isotope ",
            { "math": "^{18}\\text{F}" },
            ", which has a half life of about two hours. The isotope is incorporated into a drug, half of which is excreted by the body every two hours. How long will it take before the quantity of radioactive drug in the body halves?"
        ],
        "options": [
            { "math": "0.5\\,\\text{h}" },
            { "math": "1\\,\\text{h}" },
            { "math": "1.5\\,\\text{h}" },
            { "math": "2\\,\\text{h}" }
        ],
        "correct": "C",
        tags: ['maths']
    },

    {
        "id": "2007-08",
        "year": 2007,
        "marks": 1,
        "stemParts": [
            "A 125 g weight rests on a circular hole of radius ", { "math": "1\\,\\text{mm}" },
            " in a pressure cooker valve. ", "What pressure will lift the weight of the hole?"
        ],
        "options": [
            { "math": "400\\,\\text{Pa}" },
            { "math": "40\\,\\text{kPa}" },
            { "math": "400\\,\\text{kPa}" },
            { "math": "400\\,\\text{MPa}" }
        ],
        "correct": "C",
        tags: ['hydrostatics', 'maths']
    },

    {
        "id": "2007-09",
        "year": 2007,
        "marks": 2,
        "stemParts": [
            "A car of mass ", { "math": "1500\\,\\text{kg}" },
            " tows a trailer of mass ", { "math": "1000\\,\\text{kg}" },
            " at a steady speed.  The driver decides to overtake another car and accelerates at ",
            { "math": "4\\,\\text{m s}^{-2}" }, ". ",
            "Friction on trailer is ", { "math": "2500\\,\\text{N}" }, ". ",
            "What is the force on the towbar during the manoeuvre?"
        ],
        "options": [
            { "math": "6500\\,\\text{N}" },
            { "math": "8500\\,\\text{N}" },
            { "math": "10000\\,\\text{N}" },
            { "math": "12500\\,\\text{N}" }
        ],
        "correct": "B",
        tags: ['dynamics', 'maths']
    },

    // ---------------- 2008 MCQs ----------------
    {
        "id": "2008-13",
        "year": 2008,
        "marks": 1,
        "stemParts": [
            "A symmetric seesaw is ", { "math": "3\\,\\text{m}" }, " long from end to end. If a boy of mass ",
            { "math": "20\\,\\text{kg}" }, " sits on one end, how far away from him should a girl of mass ",
            { "math": "30\\,\\text{kg}" }, " sit to balance the seesaw?"
        ],
        "options": [
            { "math": "0.5\\,\\text{m}" }, { "math": "1.0\\,\\text{m}" },
            { "math": "2.0\\,\\text{m}" }, { "math": "2.5\\,\\text{m}" }
        ],
        "correct": "D",
        tags: ['statics', 'maths']
    },
    {
        "id": "2008-14",
        "year": 2008,
        "marks": 1,
        "stemParts": [
            "When nuclear fission occurs in a commercial nuclear reactor the mass of the products compared with the mass of the reactants is"
        ],
        "options": [
            { "text": " increased" }, { "text": " decreased" },
            { "text": "stays the same" }, { "text": "it depends on the reaction" }
        ],
        "correct": "B",
        tags: ['maths']
    },
    {
        "id": "2008-15", "year": 2008, "marks": 1, "stemParts": ["The visible universe contains about ", { "math": "400\\,\\text{billion}" }, " galaxies (where ", { "math": "1\\,\\text{billion} = 10^9" }, "). Our galaxy contains about ", { "math": "250\\,\\text{billion}" }, " stars. The mass of our sun is about ", { "math": "2 \\times 10^{30}\\,\\text{kg}" }, ". NASA estimates that dark matter out-masses stars by about ", { "math": "20:1" }, ". Use this data to estimate the total mass of the visible universe."], "options": [{ "math": "4.2 \\times 10^{36}\\,\\text{kg}" }, { "math": "9.5 \\times 10^{51}\\,\\text{kg}" }, { "math": "2.0 \\times 10^{53}\\,\\text{kg}" }, { "math": "4.2 \\times 10^{54}\\,\\text{kg}" }], "correct": "D",
        tags: ['astronomy', 'estimation', 'maths']
    },
    {
        "id": "2008-16",
        "year": 2008,
        "marks": 1,
        "stemParts": ["A solar eclipse can only occur when the moon’s phase is"],
        "options": [
            { "text": "new moon" }, { "text": "full moon" }, { "text": " waning" }, { "text": " waxing" }
        ],
        "correct": "A",
        tags: ['astronomy']
    },
    {
        "id": "2008-17",
        "year": 2008,
        "marks": 1,
        "stemParts": ["When an ideal gas is heated in a container of fixed volume then"],
        "options": [
            { "text": "the pressure and density both rise" },
            { "text": "the pressure rises and the density falls" },
            { "text": "the pressure rises and the density stays the same" },
            { "text": "the pressure stays the same and the density falls" }
        ],
        "correct": "C",
        tags: ['heat']
    },
    {
        "id": "2008-18",
        "year": 2008,
        "marks": 1,
        "stemParts": [
            "A physics lecture theatre is situated ", { "math": "3\\,\\text{m}" }, " east and ",
            { "math": "4\\,\\text{m}" }, " above reception. Calculate the minimum energy a ",
            { "math": "60\\,\\text{kg}" }, " receptionist would have to expend to reach the lecture theatre."
        ],
        "options": [
            { "math": "1800\\,\\text{J}" }, { "math": "2400\\,\\text{J}" },
            { "math": "3000\\,\\text{J}" }, { "math": "4200\\,\\text{J}" }
        ],
        "correct": "B",
        tags: ['gravity', 'maths']
    },
    {
        "id": "2008-19", "year": 2008, "marks": 1, "stemParts": ["A ", { "math": "3.6\\,\\text{V}" }, " mobile phone battery can produce ", { "math": "0.7\\,\\text{A}" }, " of current for ", { "math": "1\\,\\text{hour}" }, ". This can be charged using a square solar panel ", { "math": "25\\,\\text{cm}" }, " on each side. Assuming an efficiency of ", { "math": "10\\%" }, " and an incident solar power of ", { "math": "1\\,\\text{kWm}^{-2}" }, " what time is needed to charge the battery?"], "options": [{ "math": "0.10\\,\\text{hours}" }, { "math": "0.28\\,\\text{hours}" }, { "math": "0.40\\,\\text{hours}" }, { "math": "1.5\\,\\text{hours}" }], "correct": "C",
        tags: ['electricity', 'estimation', 'maths']
    },
    {
        "id": "2008-20",
        "year": 2008,
        "marks": 1,
        "stemParts": [
            "A light dependent resistor is connected across an ideal ",
            { "math": "12\\,\\text{V}" },
            " source and placed in the open in the middle of a desert. When is the power dissipated in the resistor highest?"
        ],
        "options": [
            { "text": " dawn" }, { "text": "mid morning" }, { "text": " noon" }, { "text": " midnight" }
        ],
        "correct": "C",
        tags: ['electricity', 'optics']
    },
    {
        "id": "2008-21", "year": 2008, "marks": 1, "stemParts": ["A bullet with a mass of ", { "math": "10\\,\\text{g}" }, " is fired at a velocity of ", { "math": "400\\,\\text{m s}^{-1}" }, " into a cubical tank of water ", { "math": "2\\,\\text{m}" }, " on each side and is brought to a halt by friction. Given that the heat capacity of water is ", { "math": "4.2\\,\\text{kJ K}^{-1}\\,\\text{kg}^{-1}" }, ", and its density is ", { "math": "1000\\,\\text{kg m}^{-3}" }, ", calculate the temperature rise of the water in the tank"], "options": [{ "math": "2.4 \\times 10^{-5}\\,\\text{K}" }, { "math": "4.8 \\times 10^{-5}\\,\\text{K}" }, { "math": "1.9 \\times 10^{-4}\\,\\text{K}" }, { "math": "2.4 \\times 10^{-2}\\,\\text{K}" }], "correct": "A",
        tags: ['heat', 'maths']
    },
    {
        "id": "2008-22", "year": 2008, "marks": 1, "stemParts": ["When using Einstein’s formula ", { "math": "E = mc^2" }, " a student enters the mass ", { "math": "m" }, " in grams. If he uses a value of ", { "math": "c = 3.0 \\times 10^{8}\\,\\text{m s}^{-1}" }, " for the speed of light, what are the units of the energy ", { "math": "E" }, "?"], "options": [{ "math": "mJ" }, { "math": "J" }, { "math": "kJ" }, { "math": "MJ" }], "correct": "A",
        tags: ['maths']
    },

    // ---------------- 2009 MCQs ----------------
    {
        "id": "2009-13", "year": 2009, "marks": 1,
        "stemParts": [
            "The sun produces ", { "math": "3.8 \\times 10^{26}\\,\\text{W}" },
            " through fusion. How much mass is it losing every second?"
        ],
        "options": [
            { "math": "4.2 \\times 10^{9}\\,\\text{kg s}^{-1}" },
            { "math": "4.2 \\times 10^{12}\\,\\text{kg s}^{-1}" },
            { "math": "3.4 \\times 10^{8}\\,\\text{kg s}^{-1}" },
            { "math": "1.3 \\times 10^{7}\\,\\text{kg s}^{-1}" }
        ],
        "correct": "A",
        tags: ['astronomy', 'estimation', 'maths']
    },
    {
        "id": "2009-14", "year": 2009, "marks": 1,
        "stemParts": ["A battery is replaced by two identical batteries connected in parallel. The combination can deliver"],
        "options": [
            { "text": "the same maximum voltage and the same maximum current" },
            { "text": "the same maximum voltage and a lower maximum current" },
            { "text": "the same maximum voltage and a higher maximum current" },
            { "text": "a higher maximum voltage and a lower maximum current" }
        ],
        "correct": "C",
        tags: ['electricity']
    },
    {
        "id": "2009-15", "year": 2009, "marks": 1, "stemParts": ["The moon Titan has an angular diameter of ", { "math": "4.4\\,\\text{mrad}" }, " as seen from the surface of Saturn. The Sun has an angular diameter of ", { "math": "9.3\\,\\text{mrad}" }, " as seen from the surface of the Earth. Which of the following eclipses cannot be seen from the surface of Saturn?"], "options": [{ "text": "A lunar eclipse of Titan by Saturn." }, { "text": "A partial solar eclipse due to Titan." }, { "text": "A total solar eclipse due to Titan." }, { "text": "An annular solar eclipse due to Titan" }], "correct": "C",
        tags: ['astronomy', 'optics', 'maths']
    },
    {
        "id": "2009-16", "year": 2009, "marks": 1,
        "stemParts": ["A yacht on a lake drops its anchor overboard. What happens to the water level in the lake?"],
        "options": [
            { "text": "It rises very slightly." },
            { "text": "It stays exactly the same." },
            { "text": "It falls very slightly." },
            { "text": "It’s impossible to say." }
        ],
        "correct": "C",
        tags: ['hydrostatics']
    },
    {
        "id": "2009-17", "year": 2009, "marks": 1, "stemParts": ["Estimate the change in temperature of the water in Fell Beck before and after it falls into the Gaping Gill pothole (depth ", { "math": "105\\,\\text{m}" }, "). The specific heat capacity of water is ", { "math": "4.2\\,\\text{kJ kg}^{-1}\\,\\text{K}^{-1}" }, "."], "options": [{ "math": "4\\,^{\\circ}\\text{C}" }, { "math": "0.25\\,^{\\circ}\\text{C}" }, { "math": "0.025\\,^{\\circ}\\text{C}" }, { "math": "9.2 \\times 10^{-4}\\,^{\\circ}\\text{C}" }], "correct": "B",
        tags: ['heat', 'gravity', 'estimation', 'maths']
    },
    {
        "id": "2009-18", "year": 2009, "marks": 1, "stemParts": ["A time-of-flight mass spectrometer can be used to determine the mass of charged molecules through the equation ", { "math": "t = d\\sqrt{\\frac{m}{2qU}}" }, ", where ", { "math": "t" }, " is the time-of-flight, ", { "math": "d = 1.5\\,\\text{m}" }, " is the length of the tube, ", { "math": "m" }, " is the mass of the molecule, ", { "math": "q" }, " is its charge, and ", { "math": "U = 16\\,\\text{kV}" }, " is the accelerating voltage. Assuming that ", { "math": "q" }, " is a single elementary charge (", { "math": "1.6 \\times 10^{-19}\\,\\text{C}" }, ") what is the mass that corresponds with a time-of-flight of ", { "math": "30\\,\\mu\\text{s}" }, "?"], "options": [{ "math": "1.4 \\times 10^{-12}\\,\\text{kg}" }, { "math": "1.0 \\times 10^{-23}\\,\\text{kg}" }, { "math": "1.0 \\times 10^{-24}\\,\\text{kg}" }, { "math": "2.0 \\times 10^{-24}\\,\\text{kg}" }], "correct": "D",
        tags: ['electricity', 'maths']
    },
    {
        "id": "2009-19", "year": 2009, "marks": 1, "stemParts": ["When an object moves at high velocity in a fluid the drag force on it is given by ", { "math": "F = K v^{2} A" }, ", where ", { "math": "v" }, " is the object’s velocity and ", { "math": "A" }, " its area. What sort of quantity is ", { "math": "K" }, "?"], "options": [{ "text": "A mass" }, { "text": "An acceleration" }, { "text": "A length" }, { "text": "A density" }], "correct": "D",
        tags: ['dynamics', 'maths']
    },
    {
        "id": "2009-20", "year": 2009, "marks": 1,
        "stemParts": [
            "A battery is connected across two identical resistors in series. If one of the resistors is instantaneously replaced by an uncharged capacitor, what happens to the current in the circuit?"
        ],
        "options": [
            { "text": "It rises" }, { "text": "It falls" },
            { "text": "It initially rises, but then falls" },
            { "text": "It initially falls, but then rises" }
        ],
        "correct": "C",
        tags: ['electricity']
    },
    {
        "id": "2009-21", "year": 2009, "marks": 1,
        "stemParts": [
            "A triangular glass prism ... What happens to the light beam at the prism?"
        ],
        "image": "/graphs/2009-21.png",
        "options": [
            { "text": "It is bent up" },
            { "text": "It is bent down" },
            { "text": "It continues horizontally" },
            { "text": "It depends on the colour" }
        ],
        "correct": "B",
        tags: ['optics']
    },
    {
        "id": "2009-22", "year": 2009, "marks": 1,
        "stemParts": [
            "The moon orbits the earth at a distance of ", { "math": "400{,}000\\,\\text{km}" },
            " with a period of ", { "math": "2.4 \\times 10^{6}\\,\\text{s}" }, ". What is its acceleration towards the earth?"
        ],
        "options": [
            { "math": "2.7 \\times 10^{-3}\\,\\text{m s}^{-2}" },
            { "math": "2.7 \\times 10^{-6}\\,\\text{m s}^{-2}" },
            { "math": "10\\,\\text{m s}^{-2}" },
            { "math": "6.6 \\times 10^{3}\\,\\text{m s}^{-2}" }
        ],
        "correct": "A",
        tags: ['gravity', 'circular motion', 'astronomy', 'maths']
    },

    // ---------------- 2010 MCQs ----------------
    {
        "id": "2010-12", "year": 2010, "marks": 1, "stemParts": ["A rock sample contains two radioactive elements A and B, with half lives of ", { "math": "8000\\,\\text{y}" }, " and ", { "math": "16000\\,\\text{y}" }, " respectively. If the relative proportion of A:B is initially 1:1, what is their relative proportion after ", { "math": "16000\\,\\text{y}" }, "?"], "options": [{ "text": "2:1" }, { "text": "1:2" }, { "text": "3:1" }, { "text": "1:3" }], "correct": "B",
        tags: ['maths']
    },
    {
        "id": "2010-13", "year": 2010, "marks": 1,
        "stemParts": [
            "Two resistors ", { "math": "R_1" }, " and ", { "math": "R_2" },
            " are connected in series with a potential difference ", { "math": "V" }, " across them. The power dissipated by ",
            { "math": "R_1" }, " is:"
        ],
        "options": [
            { "math": "\\tfrac{V^2R_1}{(R_1+R_2)^2}" },
            { "math": "\\tfrac{V^2R_2^2}{R_1(R_1+R_2)^2}" },
            { "math": "V^2R_1 \\times (R_1+R_2)^2" },
            { "math": "V^2R_2^2 \\times (R_1(R_1+R_2)^2)" }
        ],
        "correct": "A",
        tags: ['electricity', 'maths']
    },
    {
        "id": "2010-14", "year": 2010, "marks": 1, "stemParts": ["A block of concrete, of mass ", { "math": "100\\,\\text{kg}" }, ", lies on a ", { "math": "2\\,\\text{m}" }, "-long plank of wood at a distance ", { "math": "0.5\\,\\text{m}" }, " from one end. If a builder lifts up the other end of the plank, how much force must he apply to lift the block?"], "options": [{ "math": "125\\,\\text{N}" }, { "math": "12.5\\,\\text{N}" }, { "math": "250\\,\\text{N}" }, { "math": "25\\,\\text{N}" }], "correct": "C",
        tags: ['statics', 'gravity', 'maths']
    },
    {
        "id": "2010-15", "year": 2010, "marks": 1, "stemParts": ["A plane flies in a direction NW (according to the plane’s internal compass) at an airspeed of ", { "math": "141\\,\\text{km h}^{-1}" }, ". If the wind at the plane’s cruise altitude is blowing with a speed of ", { "math": "100\\,\\text{km h}^{-1}" }, " directly from the north, what is the plane’s actual speed and direction relative to the ground?"], "options": [{ "text": "141 km/hr, SW" }, { "text": "100 km/hr, W" }, { "text": "141 km/hr, S" }, { "text": "223 km/hr, NNW" }], "correct": "B",
        tags: ['kinematics', 'maths']
    },
    {
        "id": "2010-16", "year": 2010, "marks": 1, "stemParts": ["A teacher wants to listen to a programme on his favourite radio station, broadcasting at a frequency of ", { "math": "1000\\,\\text{kHz}" }, ", but his radio only indicates the wavelength of the station. To what wavelength must the teacher tune his radio to hear the programme?"], "options": [{ "math": "300\\,\\text{m}" }, { "math": "300000\\,\\text{m}" }, { "math": "0.0033\\,\\text{m}" }, { "math": "50\\,\\text{m}" }], "correct": "A",
        tags: ['optics', 'maths']
    },
    {
        "id": "2010-17", "year": 2010, "marks": 1, "stemParts": ["Two mirrors are set at right angles to each other. A beam of light, which is perpendicular to the line of intersection of the two mirrors is incident on the first mirror M1 at an angle ", { "math": "A" }, " with respect to its normal. The light reflected by M1 is then reflected by M2. What is the angle through which the resultant beam is turned with respect to the incident beam direction?"], "options": [{ "text": "Greater than 180°" }, { "text": "Exactly 180°" }, { "text": "Less than 180°" }, { "text": "It depends on the wavelength" }], "correct": "B",
        tags: ['optics']
    },
    {
        "id": "2010-18", "year": 2010, "marks": 1,
        "stemParts": [
            "A capacitor, of capacitance ", { "math": "3\\,\\text{nF}" },
            ", is charged to ", { "math": "10\\,\\text{V}" }, ". What is the charge?"
        ],
        "options": [
            { "math": "3.3 \\times 10^{9}\\,\\text{C}" },
            { "math": "3 \\times 10^{-10}\\,\\text{C}" },
            { "math": "3 \\times 10^{-8}\\,\\text{C}" },
            { "math": "3 \\times 10^{-9}\\,\\text{C}" }
        ],
        "correct": "C",
        tags: ['electricity', 'maths']
    },
    {
        "id": "2010-19", "year": 2010, "marks": 1, "stemParts": ["The suspension spring of a car, which has a spring constant of ", { "math": "k = 8.0 \\times 10^4\\,\\text{N m}^{-1}" }, ", is sat on by a person weighing ", { "math": "80\\,\\text{kg}" }, ". By how much is the spring compressed?"], "options": [{ "math": "1\\,\\text{mm}" }, { "math": "10\\,\\text{mm}" }, { "math": "5\\,\\text{mm}" }, { "math": "20\\,\\text{mm}" }], "correct": "B",
        tags: ['simple harmonic motions', 'maths']
    },
    {
        "id": "2010-20", "year": 2010, "marks": 1, "stemParts": ["A comet orbits a star. At its closest approach to the star at a distance of ", { "math": "4\\times 10^{10}\\,\\text{km}" }, ", the comet has a speed of ", { "math": "50\\,\\text{km s}^{-1}" }, ". How fast is it travelling when it is at its maximum distance from the star of ", { "math": "1.0 \\times 10^{11}\\,\\text{km}" }, "?"], "options": [{ "math": "50\\,\\text{km s}^{-1}" }, { "math": "30\\,\\text{km s}^{-1}" }, { "math": "20\\,\\text{km s}^{-1}" }, { "math": "10\\,\\text{km s}^{-1}" }], "correct": "C",
        tags: ['astronomy', 'gravity', 'maths']
    },
    {
        "id": "2010-21", "year": 2010, "marks": 1, "stemParts": ["A fisherman sees a fish in a river at an apparent depth below the surface of the water of ", { "math": "0.75\\,\\text{m}" }, ". Given that the refractive index of water is ", { "math": "1.33" }, ", is the true depth of the fish below the water’s surface:"], "options": [{ "text": "0.75 m" }, { "text": "Less than 0.75 m" }, { "text": "1 m" }, { "text": "More than 1 m" }], "correct": "C",
        tags: ['optics', 'maths']
    },

    // ---------------- 2011 MCQs ----------------
    {
        id: '2011-12', year: 2011, marks: 1, stemParts: ['A boy sitting on a harbour wall observes waves on the water’s surface. He ', 'sees that the waves have a period of ', { math: '2\\,\\text{s}' }, ' and that a single wave travels the ', 'length of the harbour wall in ', { math: '25\\,\\text{s}' }, '. If the harbour wall is of length ', { math: '45\\,\\text{m}' }, ', what is the wavelength of the wave?'], options: [{ math: '4.0\\,\\text{m}' }, { math: '1.8\\,\\text{m}' }, { math: '3.6\\,\\text{m}' }, { math: '1.0\\,\\text{m}' }], correct: 'C',
        tags: ['optics', 'maths']
    },
    {
        id: '2011-13', year: 2011, marks: 1, stemParts: ['The contents of a refrigerator, which are kept at a temperature ', { math: 'T = 6^{\\circ}\\text{C}' }, ', ', 'has to be cooled at a rate of ', { math: '\\alpha(T_S - T)' }, ', where ', { math: 'T_S' }, ' is the temperature of the surroundings and ', { math: '\\alpha = 15\\,\\text{W/K}' }, '. If the refrigerator has an efficiency of 30%, ', 'what is its power consumption on a day when ', { math: 'T_S = 26^{\\circ}\\text{C}' }, '?'], options: [{ text: '1 kW' }, { text: '2 kW' }, { text: '3 kW' }, { text: '4 kW' }], correct: 'A',
        tags: ['heat', 'maths']
    },
    {
        id: '2011-14', year: 2011, marks: 1,
        stem: 'A lunar eclipse can only occur when the moon’s phase is',
        options: [
            { text: 'New moon.' }, { text: 'Full moon.' },
            { text: 'First quarter.' }, { text: 'Last quarter.' }
        ],
        correct: 'B',
        tags: ['astronomy']
    },
    {
        id: '2011-15', year: 2011, marks: 1, stemParts: ['Two stars in the night sky are observed to have the same apparent brightness, ', 'but one is known to be at a distance of 10 light years and the other at a ', 'distance of 20 light years. What is the ratio of the total power radiated by ', 'the more distant star to that radiated by the nearer star?'], options: [{ math: '1.0' }, { math: '2.0' }, { math: '3.0' }, { math: '4.0' }], correct: 'D',
        tags: ['astronomy', 'maths']
    },
    {
        id: '2011-16', year: 2011, marks: 1, stemParts: ['An exoplanet is observed to orbit a nearby star at a distance of ', { math: '0.4\\,\\text{A.U.}' }, ' with a period of ', { math: '3\\,\\text{days}' }, '. ', 'If a second exoplanet is observed to orbit the same star with a period of ', { math: '24\\,\\text{days}' }, ', what must be its orbital radius? (N.B. 1 A.U. is an Astronomical Unit ', 'and is the distance the Earth orbits the Sun (', { math: '1\\,\\text{A.U.} = 1.49\\times 10^{8}\\,\\text{km}' }, ')).'], options: [{ math: '1.6\\,\\text{A.U.}' }, { math: '3.2\\,\\text{A.U.}' }, { math: '1\\,\\text{A.U.}' }, { math: '16\\,\\text{A.U.}' }], correct: 'A',
        tags: ['astronomy', 'gravity', 'maths']
    },
    {
        id: '2011-17', year: 2011, marks: 1,
        stem: 'What is the resistance of the following network of resistors between points A and B?',
        image: '/graphs/2011-17.png',
        options: [
            { math: '\\tfrac{R}{2}' }, { math: '\\tfrac{5R}{3}' },
            { math: 'R' }, { math: '\\tfrac{3R}{5}' }
        ],
        correct: 'D',
        tags: ['electricity', 'maths']
    },
    {
        id: '2011-18', year: 2011, marks: 1, stemParts: ['The primary coil of a transformer is connected to an alternating voltage ', 'supply of ', { math: '240\\,\\text{V}' }, ' and draws a current of ', { math: '1\\,\\text{A}' }, '. ', 'The secondary coil is connected to a resistor and delivers a voltage of ', { math: '120\\,\\text{V}' }, '. If there are ', { math: '50' }, ' turns in the primary coil, how many turns are there in the secondary coil?'], options: [{ math: '240' }, { math: '100' }, { math: '25' }, { math: '50' }], correct: 'C',
        tags: ['electricity', 'maths']
    },
    {
        id: '2011-19', year: 2011, marks: 1, stemParts: ['An electric motor is driven by a battery of voltage ', { math: '6\\,\\text{V}' }, ' and draws a current of ', { math: '1\\,\\text{A}' }, '. If the motor is used to lift vertically a block of mass ', { math: '100\\,\\text{g}' }, ', what is the vertical velocity of the mass?'], options: [{ math: '12\\,\\text{m s}^{-1}' }, { math: '6\\,\\text{m s}^{-1}' }, { math: '10\\,\\text{m s}^{-1}' }, { math: '0.6\\,\\text{m s}^{-1}' }], correct: 'B',
        tags: ['electricity', 'gravity', 'maths']
    },
    {
        id: '2011-20', year: 2011, marks: 1,
        stemParts: [
            'A toy car of mass 10 g rests on a slope of inclination 30°. Neglecting friction, What is its acceleration down the slope?'
        ],
        options: [
            { math: '10\\,\\text{m s}^{-2}' }, { math: '2.5\\,\\text{m s}^{-2}' },
            { math: '8.7\\,\\text{m s}^{-2}' }, { math: '5.0\\,\\text{m s}^{-2}' }
        ],
        correct: 'D',
        tags: ['dynamics', 'gravity', 'maths']
    },
    {
        id: '2011-21', year: 2011, marks: 1, stemParts: ['A boat crosses a river of width ', { math: '100\\,\\text{m}' }, ' and flowing in the east-west direction. ', 'The water in the river flows from east to west at a speed of ', { math: '5\\,\\text{m s}^{-1}' }, '. ', 'The boat can travel at a speed of ', { math: '10\\,\\text{m s}^{-1}' }, '. ', 'The boat leaves one bank and the skipper wants to reach the point directly on the opposite bank. ', 'What course must she steer?'], options: [{ text: '30° W' }, { text: '20° W' }, { text: '30° E' }, { text: '60° E' }], correct: 'C',
        tags: ['kinematics', 'maths']
    },

    // ---------------- 2012 MCQs ----------------
    {
        id: '2012-13', year: 2012, marks: 2, stemParts: ['A vintage steam locomotive made of iron has a mass of ', { math: '6.5\\times 10^4\\,\\text{kg}' }, ' and is ', { math: '10\\,\\text{m}' }, ' long. How long is its scale model which is also made out of iron and ', 'has a mass of ', { math: '1\\,\\text{kg}' }, '?'], options: [{ math: '\\approx 4\\,\\text{cm}' }, { math: '\\approx 20\\,\\text{cm}' }, { math: '\\approx 25\\,\\text{cm}' }, { math: '\\approx 30\\,\\text{cm}' }], correct: 'C',
        tags: ['maths', 'estimation']
    },
    {
        id: '2012-14', year: 2012, marks: 2, stemParts: ['A gas cylinder has a volume of ', { math: '0.02\\,\\text{m}^3' }, ' and contains ', { math: '88\\,\\text{g}' }, ' of carbon dioxide at a temperature of ', { math: '27^{\\circ}\\text{C}' }, '. The molar gas constant ', { math: 'R \\approx 8.3\\,\\text{J mol}^{-1}\\text{K}^{-1}' }, '. What is the gas pressure?'], options: [{ math: '\\approx 101\\,\\text{kPa}' }, { math: '\\approx 149\\,\\text{kPa}' }, { math: '\\approx 201\\,\\text{kPa}' }, { math: '\\approx 249\\,\\text{kPa}' }], correct: 'D',
        tags: ['heat', 'maths']
    },
    {
        "id": "2012-15", "year": 2012, "marks": 2, "stemParts": ["An electric car has a battery pack delivering ", { "math": "160\\,\\text{V}" }, " and ", { "math": "100\\,\\text{A}" }, " of steady current when moving at ", { "math": "36\\,\\text{km h}^{-1}" }, ". What is the air resistance, assuming ", "100% efficiency?"], "options": [{ "math": "\\approx 440\\,\\text{N}" }, { "math": "\\approx 1600\\,\\text{N}" }, { "math": "\\approx 2000\\,\\text{N}" }, { "math": "\\approx 3200\\,\\text{N}" }], "correct": "B",
        tags: ['electricity', 'dynamics', 'maths']
    },
    {
        id: '2012-16', year: 2012, marks: 2,
        stem: 'A cube painted black is cut into 125 identical cubes. How many of them are not painted at all?',
        options: [
            { math: '21' }, { math: '25' }, { math: '27' }, { math: '30' }
        ],
        correct: 'C',
        tags: ['maths']
    },
    {
        id: '2012-17', year: 2012, marks: 2, stem: 'A massive slider starts from rest from a point S (which is at the same height as a point T at the top of the track) and slides along a frictionless circular track as sketched in figure below. The slider', image: '/graphs/2012-17.png', options: [{ text: 'does not get to T.' }, { text: 'gets to T and falls straight down.' }, { text: 'gets to T but then, leaves the track and falls down following a parabola trajectory to the left.' }, { text: 'passes T staying on the track all the way through.' }], correct: 'A',
        tags: ['circular motion', 'dynamics', 'gravity']
    },

    // ---------------- 2013 MCQs ----------------
    {
        id: '2013-11', year: 2013, marks: 2, stemParts: ["An ideal transformer has ", { math: "100" }, " turns on the primary coil. It is connected to an alternating supply of ", { math: "100\\,\\text{V},\\,2.4\\,\\text{A}" }, ". How many turns are required on the secondary coil to supply ", { math: "4.8\\,\\text{A}" }, "?"], options: [{ text: "25 turns" }, { text: "50 turns" }, { text: "75 turns" }, { text: "200 turns" }], correct: "B",
        tags: ['electricity', 'maths']
    },
    {
        id: '2013-12', year: 2013, marks: 2, stemParts: ["A radioactive sample contains two different isotopes, A and B. A has a half-life of ", { math: "3\\,\\text{days}" }, ", B has a half-life of ", { math: "6\\,\\text{days}" }, ". Initially in the sample there are twice as many atoms of A as of B. At what time will the ratio of the number of atoms of A to B be reversed?"], options: [{ text: "3 days" }, { text: "6 days" }, { text: "12 days" }, { text: "ratio will never be reversed" }], correct: "C",
        tags: ['maths']
    },
    {
        "id": "2013-13",
        "year": 2013,
        "marks": 2,
        "stem": "Consider the resistor network shown below. What is the overall resistance between A and B?",
        "image": "/graphs/2013-13.png",
        "options": [
            { "math": "\\tfrac{2R}{7}" },
            { "math": "\\tfrac{R}{2}" },
            { "math": "\\tfrac{3R}{2}" },
            { "math": "\\tfrac{7R}{2}" }
        ],
        "correct": "A",
        tags: ['electricity', 'maths']
    },
    {
        id: '2013-14', year: 2013, marks: 2, stemParts: ["Two satellites are in orbit around the Earth. The first is in a geostationary orbit, the second satellite orbits at a radius half that of the first. What is the period of the second satellite?"], options: [{ text: "approx. 4.3 hours" }, { text: "approx. 8.5 hours" }, { text: "approx. 17.0 hours" }, { text: "approx. 72.0 hours" }], correct: "B",
        tags: ['astronomy', 'gravity', 'circular motion', 'maths']
    },
    {
        "id": "2013-15", "year": 2013, "marks": 2, "stemParts": ["You are in a desert and discover a radio mast. 100 m from the mast you measure ", { "math": "20\\,\\text{W}" }, " of power from the transmitter. If you require a minimum power level of ", { "math": "1\\,\\text{mW}" }, ", how far can you go away from the mast and still obtain the minimum power? You may assume the transmitter acts like a point source."], "options": [{ "math": "\\tfrac{1}{10√2} km" }, { "text": "√20 km" }, { "text": "10√2 km" }, { "text": "20 km" }], "correct": "C",
        tags: ['optics', 'estimation', 'maths']
    },

    // ---------------- 2014 MCQs ----------------
    {
        id: '2014-10', year: 2014, marks: 2,
        stemParts: [
            "Excluding Pluto, for the planets in our solar system, in order of increasing mean distance from the Sun, which of the following statements is/are correct?\n",
        ],
        image: '/graphs/2014-10.png',
        options: [
            { text: "i, ii and v" },
            { text: "ii only" },
            { text: "iii and iv" },
            { text: "ii and v" }
        ],
        correct: "D",
        tags: ['astronomy']
    },
    {
        "id": "2014-11",
        "year": 2014,
        "marks": 2,
        "stem": "In which part of the Electromagnetic Spectrum do waves have a frequency of approx. 100 GHz?",
        "options": [
            { "text": "X rays" }, { "text": "visible light" }, { "text": " microwave" }, { "text": "radio wave" }
        ],
        "correct": "C",
        tags: ['optics']
    },
    {
        id: '2014-12', year: 2014, marks: 2, stemParts: ["An object with small mass becomes detached from the International Space Station (ISS) while it orbits the Earth. Its relative velocity with respect to the ISS can be neglected. Would the object:"], options: [{ text: "Follow ISS in its orbit" }, { text: "Go straight tangentially to ISS orbit" }, { text: "Fall straight down towards Earth" }, { text: "Stay still with respect to Earth" }], correct: "A",
        tags: ['astronomy', 'gravity', 'circular motion']
    },


    // ---------------- 2017 MCQs ----------------
    {
        id: '2017-01', year: 2017, marks: 2,
        stem: 'Differentiate y = 2x cosx with respect to x:',
        options: [
            { math: '-2\\sin x' },
            { math: '2\\cos x' },
            { math: '2\\cos x + 2x\\sin x' },
            { math: '2\\cos x - 2x\\sin x' },
            { math: '-2x\\sin x' }
        ],
        correct: 'D',
        tags: ['maths']
    },
    {
        id: '2017-02', year: 2017, marks: 2,
        stemParts: ['Which equation has the same solutions as ', { math: '2x^{2} - 2x - 12 = 0' }, '?'],
        options: [
            { math: '(x+2)(x-3)=0' },
            { math: '2(x-2)(x+3)=0' },
            { math: '(x-6)(x+1)=0' },
            { math: '(x-1-2\\sqrt{10})(x-1+2\\sqrt{10})=0' },
            { math: '(x-2-\\sqrt{10})(x-2+\\sqrt{10})=0' }
        ],
        correct: 'A',
        tags: ['maths']
    },
    {
        id: '2017-03', year: 2017, marks: 2,
        stemParts: ['Evaluate the following sum:', { math: '\\sum_{n=0}^{10} (−e^{−1})^n' }],
        options: [
            { math: '\\tfrac{1}{1+e^{−1}}' },
            { math: '\\tfrac{1-e^{−10}}{1-e^{−1}}' },
            { math: '\\tfrac{1+e^{−10}}{1+e^{−1}}' },
            { math: '\\tfrac{1+e^{−9}}{1-e^{−1}}' },
            { math: '\\tfrac{1+e^{−11}}{1+e^{-1}}' }
        ],
        correct: 'E',
        tags: ['maths']
    },
    {
        id: '2017-04', year: 2017, marks: 2,
        stemParts: ['If ', { math: 'a^{3−x}b^{5x} = a^{x+5}b^{3x}' }, ' with a and b both real and positive, and a not equal to b, what is x?'],
        options: [
            { math: '\\tfrac{2\\log(a−b)}{\\log b}' },
            { math: '2\\log a−\\log b' },
            { math: '\\tfrac{2\\log b}{\\log a−\\log b}' },
            { math: '\\tfrac{\\log a}{\\log b−\\log a}' },
            { math: '\\tfrac{\\log a+\\log b}{\\log a}' }
        ],
        correct: 'D',
        tags: ['maths']
    },
    {
        id: '2017-05', year: 2017, marks: 2,
        stemParts: ['Which of the following integrals are equal to zero?'],
        image: '/graphs/2017-5.png',
        options: [
            { text: 'None of these' },
            { math: 'I_1 \\text{ and } I_4' },
            { math: 'I_1,\\text{ } I_2, \\text{ and } I_4' },
            { math: 'I_2, \\text{ } I_3, \\text{ and } I_4' },
            { text: 'All of these' }
        ],
        correct: 'B',
        tags: ['maths']
    },
    {
        id: '2017-06', year: 2017, marks: 2,
        stem: 'The graph below could represent which of the following functions?',
        image: '/graphs/2017-6.png',
        options: [
            { math: '\\tfrac{1}{x−1}+\\tfrac{2}{x+3}' },
            { math: '-\\tfrac{1}{x^2−2x+3}' },
            { math: '\\tfrac{1}{x^2+2x−3}' },
            { math: '\\tfrac{1}{x^2−1}+\\tfrac{2}{x+3}' },
            { math: '\\tfrac{3}{x^2−9}' }
        ],
        correct: 'C',
        tags: ['maths']
    },
    {
        id: '2017-07', year: 2017, marks: 2,
        stem: 'An astronaut on the surface of the Moon lightly tosses a ball of mass m upward. What happens to the ball?',
        options: [
            { text: 'The ball enters an orbit around the Earth.' },
            { text: 'The ball eventually falls toward the Earth, burning up in the atmosphere.' },
            { text: 'The ball falls to the surface of the Moon.' },
            { text: 'The ball rises slowly until it hovers above the astronaut.' },
            { text: 'The ball enters an orbit around the Moon.' }
        ],
        correct: 'C',
        tags: ['gravity', 'kinematics', 'astronomy']
    },
    {
        id: '2017-08', year: 2017, marks: 2,
        stem: 'In which of the following lists are the parts of the electromagnetic spectrum ordered correctly from shortest wavelength (left) to longest wavelength (right)?',
        options: [
            { text: 'ultraviolet, X-ray, visible, radio, infrared' },
            { text: 'X-ray, ultraviolet, visible, radio, infrared' },
            { text: 'ultraviolet, X-ray, visible, infrared, radio' },
            { text: 'infrared, radio, visible, ultraviolet, X-ray' },
            { text: 'X-ray, ultraviolet, visible, infrared, radio' }
        ],
        correct: 'E',
        tags: ['optics']
    },
    {
        id: '2017-09', year: 2017, marks: 2,
        stem: 'What is the value of the current I in the circuit below?',
        image: '/graphs/2017-9.png',
        options: [
            { math: '\\tfrac{V}{4R}' },
            { math: '\\tfrac{3V}{5R}' },
            { math: '\\tfrac{4V}{3R}' },
            { math: '\\tfrac{5V}{3R}' },
            { math: '\\tfrac{3V}{4R}' }
        ],
        correct: 'B',
        tags: ['electricity', 'maths']
    },
    {
        id: '2017-10', year: 2017, marks: 2,
        stemParts: [
            'A capacitor is constructed with two conducting plates of equal area ', { math: 'A' },
            ' separated by an insulator. The capacitance is measured to be ', { math: 'C' }, '. The conducting plates are then shrunk to half the original area. What is the capacitance now?'
        ],
        options: [
            { math: '\\tfrac{C}{2}' }, { math: 'C' }, { math: '2C' }, { math: 'C^2' }, { math: '\\tfrac{1}{C^2}' }
        ],
        correct: 'A',
        tags: ['electricity', 'maths']
    },
    {
        id: '2017-11', year: 2017, marks: 2,
        stemParts: [
            'Consider the pulley system below supporting an object with mass ', { math: 'm' }, '. Assume gravitational acceleration ', { math: 'g' },
            ', pulleys massless/frictionless, string massless/inextensible. With how much force ', { math: 'F' }, ' must the string be pulled to keep the mass at the same height?'
        ],
        image: '/graphs/2017-11.png',
        options: [
            { math: '\\tfrac{mg}{3}' }, { math: '\\tfrac{mg}{2}' }, { math: 'mg' }, { math: '2mg' }, { math: '3mg' }
        ],
        correct: 'B',
        tags: ['statics', 'gravity', 'maths']
    },
    {
        id: '2017-12', year: 2017, marks: 2,
        stemParts: [
            'A particle with charge ', { math: 'q' }, ' and initial speed ', { math: 'v' },
            ' is stopped by a potential difference ', { math: 'V' }, ' in a distance ', { math: 'd' }, ' and time ', { math: 't' }, '. What was its initial momentum?'
        ],
        options: [
            { math: '\\tfrac{qVt}{d}' },
            { math: '\\tfrac{qV}{v}' },
            { math: '\\tfrac{qVd}{t}' },
            { math: '2qVv' },
            { math: '\\tfrac{qV}{2v}' }
        ],
        correct: 'A',
        tags: ['electricity', 'dynamics', 'maths']
    },

    // ---------------- 2018 MCQs ----------------
    {
        id: '2018-01', year: 2018, marks: 2,
        stem: 'What is the next number in the sequence? 4, 5, 9, 14, 23',
        options: [{ text: '28' }, { text: '34' }, { text: '37' }, { text: '39' }, { text: '42' }],
        correct: 'C',
        tags: ['maths']
    },
    {
        id: '2018-02', year: 2018, marks: 2, stem: 'Which of the curves shown in the figure is not a trajectory in the gravitational field of a central star at the point (x=0, y=0) marked by the star symbol?', image: '/graphs/2018-2.png', options: [{ text: 'All are trajectories' }, { text: 'none of these is a trajectory' }, { text: '5 is not a trajectory' }, { text: '4 and 5 are not trajectories' }, { text: '3 is not a trajectory' }], correct: 'E',
        tags: ['gravity', 'astronomy', 'dynamics']
    },
    {
        id: '2018-03', year: 2018, marks: 2,
        stem: 'Which combination of units is the odd one out?',
        options: [
            { math: 'CV\\,\\text{m}^{−1}' },
            { math: 'A\\,\\text{T}\\,\\text{m}' },
            { math: '\\text{kg}\\,\\text{m}\\,\\text{s}^{−2}' },
            { math: 'J\\,\\text{m}^{−1}' },
            { math: 'C\\,\\text{m}\\,\\text{s}^{−1}' }
        ],
        correct: 'E',
        tags: ['maths']
    },
    {
        id: '2018-04', year: 2018, marks: 2, stemParts: ['90 people enter a maze. At each junction ', { math: '\\tfrac{1}{3}' }, ' will go left and ', { math: '\\tfrac{2}{3}' }, ' will go right. After three such junctions, what is the most likely combination of turns people will have taken?'], options: [{ text: 'Gone right three times' }, { text: 'Gone left three times' }, { text: 'Gone right twice and once left' }, { text: 'Gone twice left and once right' }, { text: 'It is impossible to tell' }], correct: 'C',
        tags: ['maths']
    },
    {
        id: '2018-05', year: 2018, marks: 2, stemParts: ['A person drinks many cups of tea. The first cup the person drinks is filled completely. They don’t want to drink too much tea in total so the second cup is filled with only a fraction (', { math: '\\alpha' }, ') of the tea in the first cup, the third cup contains the same fraction ', { math: '\\alpha' }, ' of the second cup and so on. What is the maximum value of ', { math: '\\alpha' }, ' so that the person drinks no more than 3 times the amount of tea in the first cup however many drinks they take?'], options: [{ math: '\\alpha=\\tfrac{1}{3}' }, { math: '\\alpha=\\tfrac{1}{2}' }, { math: '\\alpha=\\tfrac{2}{3}' }, { math: '\\alpha=\\tfrac{1}{4}' }, { math: '\\alpha=\\tfrac{3}{4}' }], correct: 'C',
        tags: ['maths']
    },
    {
        id: '2018-06', year: 2018, marks: 2, stemParts: ['A stationary wave is set up on a string of length ', { math: 'L' }, '. If the centre and the ends of the string are held fixed with zero displacement, what wavelengths (', { math: '\\lambda_m' }, ') can this stationary wave have? In the answers below ', { math: 'm' }, ' denotes any positive non zero integer.'], options: [{ math: '\\lambda_m = \\tfrac{2L}{m}' }, { math: '\\lambda_m = \\tfrac{L}{m}' }, { math: '\\lambda_m = \\tfrac{L}{2m}' }, { math: '\\lambda_m = mL' }, { math: '\\lambda_m = 2mL' }], correct: 'B',
        tags: ['simple harmonic motions', 'maths']
    },
    {
        id: '2018-07', year: 2018, marks: 2, stemParts: ['A car of mass ', { math: 'm' }, ' is traveling along a straight and narrow road at speed ', { math: 'u' }, '. A cat walks into the road a distance ', { math: 'd' }, ' in front of the car and stops in the middle of the road. What constant force must be applied to the car so that it does not hit the cat? The road is too narrow for the car to drive past the cat without hitting it.'], options: [{ math: 'F = -\\tfrac{mu^2}{2d}' }, { math: 'F = -\\tfrac{u^2}{2d}' }, { math: 'F = -\\tfrac{mu^2}{2}' }, { math: 'F = -\\tfrac{mu^2}{d}' }, { text: 'the car cannot avoid hitting the cat' }], correct: 'A',
        tags: ['dynamics', 'kinematics', 'maths']
    },
    {
        "id": "2018-08", "year": 2018, "marks": 2, "stemParts": ["What is the value of x for which y has a minimum in the function ", { "math": " y = (x−3)(x+1)?" }], "options": [{ "math": "x=1" }, { "math": "x=−1" }, { "math": "x=3" }, { "math": "x=0" }, { "math": "x=−3" }], "correct": "A",
        tags: ['maths']
    },
    {
        "id": "2018-09", "year": 2018, "marks": 2, "stemParts": ["What is the equation of the line which intersects ", { "math": " y = 2x − 2" }, " at right angles and at position x = 1?"], "options": [{ "math": "y = -\\tfrac{1}{2}x" }, { "math": "y = -\\tfrac{1}{2}x + \\tfrac{1}{2}" }, { "math": "y = \\tfrac{1}{2}x - \\tfrac{1}{2}" }, { "math": "y = x" }, { "math": "y = 2x" }], "correct": "B",
        tags: ['maths']
    },
    {
        "id": "2018-10", "year": 2018, "marks": 2, "stemParts": ["For which range of ", { "math": "x" }, " is the inequality ", { "math": "x^3 − x^2 − x + 1 ≥ 0" }, " satisfied ?"], "options": [{ "text": "x ≥ 1" }, { "text": "x ≤ 1" }, { "text": "x ≥ 1 and x ≤ −1" }, { "text": "−1 ≤ x ≤ 1" }, { "text": "x ≥ −1" }], "correct": "E",
        tags: ['maths']
    },
    {
        id: '2018-12', year: 2018, marks: 2, stemParts: ['A light ray passes through an infinite stack of thin transparent plates. The refractive index of these plates increases slightly by a constant factor from one plate to the next. The ray enters the first plate making an angle ', { math: '\\theta_0' }, ' with the surface normal. The ray’s angle to the normal changes at each new interface. At the ', { math: 'i^{\\text{th}}' }, ' interface between plates the ray makes an angle ', { math: '\\theta_i' }, ' to the normal. Find the limiting value ', { math: '\\theta_{\\infty}' }, ' for the angle ', { math: '\\theta_i' }, ' when the ray has traversed an infinite number of plates.'], options: [{ math: '\\theta_{\\infty} = \\theta_0' }, { math: '\\theta_{\\infty} = -\\theta_0' }, { math: '\\theta_{\\infty} = 0^\\circ' }, { math: '\\theta_{\\infty} = 90^\\circ' }, { math: '\\theta_{\\infty} = 180^\\circ' }], correct: 'C',
        tags: ['optics', 'maths']
    },

    // ---------------- 2019 MCQs ----------------
    {
        id: '2019-01', year: 2019, marks: 2,
        stem: 'What is the next number in the sequence? -972, 324, -108, 36, -12',
        options: [{ text: '-4' }, { text: '-3' }, { text: '3' }, { text: '4' }, { text: '9' }],
        correct: 'D',
        tags: ['maths']
    },
    {
        id: '2019-02', year: 2019, marks: 2, stemParts: ['Which values of ', { math: 'x' }, ' and ', { math: 'y' }, ' solve the following equations simultaneously:'], image: '/graphs/2019-2.png', options: [{ text: 'x = 2; y = 4' }, { text: 'x = −2; y = −4' }, { text: 'x = 2; y = −4' }, { text: 'x = −2; y = 4' }, { text: 'no solution exists' }], correct: 'A',
        tags: ['maths']
    },
    {
        id: '2019-03', year: 2019, marks: 2, stemParts: ['Consider a system of many interacting particles. Let each particle have a potential energy ', { math: 'V(r) \\propto r^n' }, ' with respect to any other particle, where ', { math: 'r' }, ' is the distance to another particle and ', { math: 'n' }, ' is an integer. For such systems the Virial Theorem relates the time averaged total kinetic energy of all particles ', { math: '\\langle T_{\\text{tot}}\\rangle' }, ' to the time averaged total potential energy ', { math: '\\langle V_{\\text{tot}}\\rangle' }, ' as follows: ', { math: '2\\langle T_{\\text{tot}}\\rangle = n\\langle V_{\\text{tot}}\\rangle' }, '. If the particles in our system interact only via gravity, what is the time averaged total energy ', { math: '\\langle E_{\\text{tot}}\\rangle' }, ' of the system?'], options: [{ math: '\\langle E_{\\text{tot}}\\rangle = 0' }, { math: '\\langle E_{\\text{tot}}\\rangle = 2\\langle V_{\\text{tot}}\\rangle' }, { math: '\\langle E_{\\text{tot}}\\rangle = \\tfrac{\\langle V_{\\text{tot}}\\rangle}{2}' }, { math: '\\langle E_{\\text{tot}}\\rangle = -\\langle V_{\\text{tot}}\\rangle' }, { math: '\\langle E_{\\text{tot}}\\rangle = -2\\langle V_{\\text{tot}}\\rangle' }], correct: 'C',
        tags: ['gravity', 'astronomy', 'maths']
    },
    {
        "id": "2019-04", "year": 2019, "marks": 2, "stemParts": ["The acceleration ", { "math": "g" }, " due to gravity on a spherical planet in any universe is given by: ", { "math": "g = \\tfrac{GM}{R^2}" }, ", where ", { "math": "M" }, " is the mass, ", { "math": "R" }, " the radius of the planet and ", { "math": "G" }, " is the gravitational constant in that planet’s universe. In a different universe the gravitational constant is ", { "math": "G\\prime" }, " and has twice the value of the gravitational constant in our Universe ", { "math": "G" }, ". Find the ratio ", { "math": "\\tfrac{g_{\\text{planet}}}{g_{\\text{Earth}}}" }, " for a planet in the different universe which has half the radius and twice the density of the Earth."], "options": [{ "math": "2" }, { "math": "1" }, { "math": "\\tfrac{1}{2}" }, { "math": "4" }, { "math": "\\tfrac{1}{4}" }], "correct": "A",
        tags: ['gravity', 'astronomy', 'maths']
    },
    {
        id: '2019-05', year: 2019, marks: 2, stemParts: ['In which range of α does the following equation have real solutions?', { math: '\\quad \\sec^{2}\\theta + \\alpha\\tan\\theta = 0' }], options: [{ text: 'α ≤ −2 or α ≥ 2' }, { text: 'α ≤ −2' }, { text: 'α ≥ 2' }, { text: 'α ≥ −0' }, { text: 'α ≤ 0' }], correct: 'A',
        tags: ['maths']
    },
    {
        id: '2019-06', year: 2019, marks: 2, stemParts: ['A bag contains ', { math: 'b' }, ' blue balls and ', { math: 'r' }, ' red balls. If two balls are picked at random and removed from the bag, what is the probability ', { math: 'P' }, ' that they are different colours?'], options: [{ math: '\\tfrac{2br}{(b+r)(b+r−1)}' }, { math: '\\tfrac{br}{(b+r)(b+r−1)}' }, { math: '\\tfrac{br}{(b+r)^2}' }, { math: '\\tfrac{2br}{(b+r)^2}' }, { math: '2br' }], correct: 'A',
        tags: ['maths']
    },
    {
        id: '2019-07', year: 2019, marks: 2, stem: 'We wish to represent integer numbers by using our ten fingers. A finger is assumed to be either stretched out or curled up. How many different integers can we represent with our fingers?', options: [{ text: '10' }, { text: '512' }, { text: '1000' }, { text: '20' }, { text: '1024' }], correct: 'E',
        tags: ['maths']
    },
    {
        "id": "2019-08", "year": 2019, "marks": 2, "stem": "Without explicit calculation state which integrals are non-zero.", "image": "/graphs/2019-8.png", "options": [{ "text": "2 and 3" }, { "text": "1 and 4" }, { "text": "1 and 3" }, { "text": "2 and 4" }, { "text": " all" }], "correct": "A",
        tags: ['maths']
    },
    {
        id: '2019-09', year: 2019, marks: 2, stemParts: ['A long, thin, straight wire carrying an electric current ', { math: 'I' }, ' causes a magnetic field of flux density ', { math: 'B' }, ' at a perpendicular distance ', { math: 'r' }, ' from the wire. The magnitude of this flux density is ', { math: 'B = \\tfrac{\\alpha I}{r}' }, '. The magnetic field points circumferentially around the wire. A second, identical wire is placed parallel to the first one at a distance ', { math: 'D' }, '. Find the current ', { math: 'I_2' }, ' that has to flow in the second wire if the flux density at a line half way between and parallel to the wires is to double, compared to the flux density from only one wire at current ', { math: 'I' }, '.'], options: [{ math: 'I_2 = I' }, { math: 'I_2 = 2I' }, { math: 'I_2 = −2I' }, { math: 'I_2 = −I' }, { math: 'I_2 = −\\tfrac{I}{2}' }], correct: 'D',
        tags: ['electricity', 'maths']
    },
    {
        id: '2019-10', year: 2019, marks: 2, stem: 'When the phase of the Moon as seen from the Earth is Full, what phase of the Earth is seen by an observer on the Moon?', image: '/graphs/2019-10.png', options: [{ text: 'A' }, { text: 'B' }, { text: 'C' }, { text: 'D' }, { text: 'E' }], correct: 'E',
        tags: ['astronomy']
    },
    {
        id: '2019-11', year: 2019, marks: 2, stem: 'In the circuit shown below all resistors have the same resistance R and the light bulb has a fixed resistance. You wish to change the state of the switches so that the brightness of the bulb increases from its minimum to its maximum. Which sequence of switch states will achieve this?', image: '/graphs/2019-11.png', options: [{ text: 'both closed → only A closed → only B closed' }, { text: 'both closed → only B closed → only A closed' }, { text: 'only B closed → only A closed → both closed' }, { text: 'only A closed → only B closed → both closed' }, { text: 'all states give the same brightness' }], correct: 'C',
        tags: ['electricity']
    },
    {
        id: '2019-12', year: 2019, marks: 2, stemParts: ['An organ pipe is open at one end and closed at the other. The lowest note you can play on this pipe has frequency ', { math: 'f_{\\min}' }, '. If the speed of sound in the pipe is ', { math: 'v' }, ', what is the length ', { math: 'L' }, ' of the pipe?'], options: [{ math: 'L = \\tfrac{v}{2f_{\\min}}' }, { math: 'L = \\tfrac{v}{4f_{\\min}}' }, { math: 'L = \\tfrac{v}{f_{\\min}}' }, { math: 'L = \\tfrac{2v}{f_{\\min}}' }, { math: 'L = \\tfrac{4v}{f_{\\min}}' }], correct: 'B',
        tags: ['simple harmonic motions', 'maths']
    },

    // ---------------- 2020 MCQs (updated) ----------------
    {
        id: '2020-01', year: 2020, marks: 2, stemParts: ['The stable isotopes of carbon, nitrogen and oxygen are represented symbolically below:\n', { math: '{}^{12}_{6}\\mathrm{C},\\ {}^{13}_{6}\\mathrm{C},\\ {}^{14}_{7}\\mathrm{N},\\ {}^{15}_{7}\\mathrm{N},\\ {}^{16}_{8}\\mathrm{O},\\ {}^{17}_{8}\\mathrm{O},\\ {}^{18}_{8}\\mathrm{O}' }, '\nWhich of the following statements are true?'], image: '/graphs/2020-1.png', options: [{ text: '1, 3, 4' }, { text: '3, 4, 5' }, { text: '2, 3, 4' }, { text: '1, 2, 3' }, { text: '2, 3, 5' }], correct: 'C',
        tags: ['maths']
    },
    {
        id: '2020-02', year: 2020, marks: 2, stem: 'A triangle ABC has vertices at points in two-dimensional Cartesian co-ordinates A : (0, 1), B : (1, 2), and C : (−1, 2). It is reflected in the line y = x and then rotated around the origin by 90 degrees in a clockwise direction. Which single transformation maps the initial triangle to the final state of the above transformations?', options: [{ text: 'reflection in x = 0' }, { text: 'reflection in y = 0' }, { text: 'rotation by 180° anti-clockwise around the origin' }, { text: 'rotation by 90° anti-clockwise around (2, 0)' }, { text: 'scale factor of −1' }], correct: 'B',
        tags: ['maths']
    },
    {
        id: '2020-03', year: 2020, marks: 2, stem: 'Which ammeter A, B, C, D, E gives the highest reading?', image: '/graphs/2020-3.png', options: [{ text: 'A' }, { text: 'B' }, { text: 'C' }, { text: 'D' }, { text: 'E' }], correct: 'D',
        tags: ['electricity']
    },
    {
        id: '2020-04', year: 2020, marks: 2, stemParts: ['Solve ', { math: '\\log_{2}x + \\log_{2}(2x+3) = 1' }, ' for ', { math: 'x' }, '.'], options: [{ math: 'x=-2' }, { math: 'x=\\tfrac{1}{2}' }, { math: 'x=1' }, { math: 'x=-2\\ \\text{and}\\ \\tfrac{1}{2}' }, { math: 'x=0' }], correct: 'B',
        tags: ['maths']
    },
    {
        id: '2020-05', year: 2020, marks: 2, stemParts: ['If the gravitational field strength at the Earth’s surface is ', { math: 'g_E = 10\\,\\text{N}\\,\\text{kg}^{-1}' }, ', and at a distance ', { math: 'R>R_E' }, ' from its centre the field strength is ', { math: 'g_R = 2\\,\\text{N}\\,\\text{kg}^{-1}' }, ', what is the radius of the Earth ', { math: 'R_E' }, ' in terms of ', { math: 'R' }, '?'], options: [{ math: '\\tfrac{R}{25}' }, { math: '\\tfrac{R}{5}' }, { math: '\\tfrac{R}{\\sqrt{10}}' }, { math: '\\tfrac{R}{\\sqrt{5}}' }, { math: '\\tfrac{R}{\\sqrt{2}}' }], correct: 'D',
        tags: ['gravity', 'astronomy', 'maths']
    },
    {
        "id": "2020-06", "year": 2020, "marks": 2, "stemParts": ["Consider the function ", { "math": "y(x) = \\sin(\\tfrac{100}{x})" }, ". ", "The angle is in degrees, so that ", { "math": "\\sin(180) = 0" }, ". ", "How many maxima of ", { "math": "y(x)" }, " occur for ", { "math": "x>0.1" }, "?"], "options": [{ "text": "0" }, { "text": "1" }, { "text": "3" }, { "text": "14" }, { "text": "∞" }], "correct": "C",
        tags: ['maths']
    },
    {
        id: '2020-07', year: 2020, marks: 2, stemParts: ['What is the order, from shortest to longest, of the wavelengths of the peak electromagnetic emission from each of the following objects?\n', '1. an electric torch\n', '2. a microwave oven\n', '3. a radioactive source\n', '4. a hot cooking stove\n', '5. a short-wave radio transmitter.'], options: [{ text: '31425' }, { text: '52413' }, { text: '34152' }, { text: '31245' }, { text: '54213' }], correct: 'A',
        tags: ['optics', 'heat']
    },
    {
        id: '2020-08', year: 2020, marks: 2, stemParts: ['A particle of type X decays with equal probability either to a pair of particles of type Y or a pair of particles of type Z. Both Y and Z particles are stable.\n\n', 'The decays of two X particles are observed. A pair of Y particles is found among the decay products. What is the probability that a pair of Z particles is among these decay products?'], options: [{ math: '\\tfrac{1}{4}' }, { math: '\\tfrac{1}{3}' }, { math: '\\tfrac{1}{2}' }, { math: '\\tfrac{2}{3}' }, { math: '1' }], correct: 'D',
        tags: ['maths']
    },
    {
        id: '2020-10', year: 2020, marks: 2, stem: 'What is the next number in the sequence? 37, 41, 43, 47, 53, 59', options: [{ text: '61' }, { text: '62' }, { text: '64' }, { text: '65' }, { text: '67' }], correct: 'A',
        tags: ['maths']
    },
    {
        id: '2020-11', year: 2020, marks: 2, stem: 'A stone of average diameter 10 cm is hit with a hammer and splits into pieces. Every time the stone or one of its pieces is hit, it splits into three further pieces of equal volume and similar shape. How many hits will it take before a piece reaches the size of a typical atom?', options: [{ text: '9' }, { text: '12' }, { text: '22' }, { text: '56' }, { text: '81' }], correct: 'D',
        tags: ['estimation', 'maths']
    },

    // ---------------- 2021 MCQs ----------------
    {
        id: '2021-01', year: 2021, marks: 2, stem: 'What is the next number in the sequence? 1, 32, 243, 1024, 3125', options: [{ text: '5040' }, { text: '6225' }, { text: '7164' }, { text: '7776' }, { text: '8192' }], correct: 'D',
        tags: ['maths']
    },
    {
        id: '2021-02', year: 2021, marks: 2, stem: 'What is the effective spring constant of the combination of springs shown (each spring has constant k)?', image: '/graphs/2021-2.png', options: [{ math: '\\tfrac{5}{6}k' }, { math: 'k' }, { math: '\\tfrac{6}{5}k' }, { math: '2k' }, { math: '5k' }], correct: 'C',
        tags: ['simple harmonic motions', 'maths']
    },
    {
        id: '2021-03', year: 2021, marks: 2, stemParts: ['Evaluate ', { math: '\\sum_{n=1}^{10}\\Bigl(2-\\tfrac{n}{2}+2^{n}\\Bigr)' }], options: [{ math: '2^{10}-\\tfrac{11}{2}' }, { math: '2^{12}-\\tfrac{19}{2}' }, { math: '2^{11}-\\tfrac{19}{2}' }, { math: '2^{10}-\\tfrac{11}{4}' }, { math: '2^{11}-\\tfrac{11}{2}' }], correct: 'C',
        tags: ['maths']
    },
    {
        "id": "2021-04", "year": 2021, "marks": 2, "stem": "Five different ions are accelerated from rest by the same potential difference. Which will have the smallest final velocity?", "options": [{ "math": "{}^{6}_{3}\\mathrm{Li}^{2+}" }, { "math": "{}^{7}_{3}\\mathrm{Li}^{2+}" }, { "math": "{}^{7}_{3}\\mathrm{Li}^{3+}" }, { "math": "{}^{9}_{4}\\mathrm{Be}^{3+}" }, { "math": "{}^{9}_{4}\\mathrm{Be}^{4+}" }], "correct": "B",
        tags: ['electricity', 'maths']
    },
    {
        id: '2021-05', year: 2021, marks: 2, stemParts: ['Gravity on the Moon satisfies ', { math: 'g_{\\text{Moon}}=\\tfrac{1}{6}g_{\\text{Earth}}' }, '. ', 'A ball dropped on Earth from height ', { math: 'h' }, ' takes time ', { math: 't' }, '. ', 'From what height should it be dropped on the Moon to take the same time?'], options: [{ math: '\\tfrac{1}{36}h' }, { math: '\\tfrac{1}{6}h' }, { math: '\\tfrac{1}{\\sqrt{6}}h' }, { math: 'h' }, { math: '6h' }], correct: 'B',
        tags: ['gravity', 'kinematics', 'maths']
    },
    {
        id: '2021-06', year: 2021, marks: 2, stemParts: ['Two fair dice are rolled; let ', { math: 'P(S)' }, ' be the probability the sum is ', { math: 'S' }, '. ', 'Which statements are true?'], image: '/graphs/2021-6.png', options: [{ text: '1,2,4' }, { text: '3,4,5' }, { text: '2,3,4' }, { text: '1,3,5' }, { text: '1,4,5' }], correct: 'E',
        tags: ['maths']
    },
    {
        id: '2021-07', year: 2021, marks: 2, stem: 'A ray passes through three media with refractive indices n₁, n₂, n₃ as in the diagram. Order n₁, n₂, n₃ by increasing value.', image: '/graphs/2021-7.png', options: [{ math: 'n_1,\\,n_2,\\,n_3' }, { math: 'n_2,\\,n_1,\\,n_3' }, { math: 'n_1,\\,n_3,\\,n_2' }, { math: 'n_3,\\,n_1,\\,n_2' }, { math: 'n_3,\\,n_2,\\,n_1' }], correct: 'D',
        tags: ['optics']
    },
    {
        id: '2021-08', year: 2021, marks: 2, stemParts: ['If ', { math: 'f(x)=x^2' }, ' and ', { math: 'g(x)=x+3' }, ', find ', { math: '\\tfrac{dy}{dx}' }, ' for ', { math: 'y=f(g(x)) - g(f(x))' }], options: [{ math: '6' }, { math: '2x+5' }, { math: '2x-1' }, { math: '6x+6' }, { math: '2' }], correct: 'A',
        tags: ['maths']
    },
    {
        id: '2021-09', year: 2021, marks: 2, stem: 'In the circuit shown, what is the current at point P?', image: '/graphs/2021-9.png', options: [{ math: '\\tfrac{2V}{13R}' }, { math: '\\tfrac{2V}{11R}' }, { math: '\\tfrac{V}{9R}' }, { math: '\\tfrac{6V}{13R}' }, { math: '\\tfrac{6V}{11R}' }], correct: 'A',
        tags: ['electricity', 'maths']
    },
    {
        id: '2021-10', year: 2021, marks: 2, stemParts: ['Which of these is a simpler form for ', { math: '\\cos(\\sin^{-1}x)' }, '?'], options: [{ math: '\\sqrt{1-x^2}' }, { math: '\\sqrt{1+x^2}' }, { math: '\\sqrt{1-x}' }, { math: '1-x^2' }, { math: '\\sqrt{x-1}' }], correct: 'A',
        tags: ['maths']
    },
    {
        id: '2021-11', year: 2021, marks: 2, stemParts: ["Consider the following five graphs. For which graphs could the are under the graph potentially be a measurement of energy?"], image: '/graphs/2021-11.png', options: [{ text: '1, 4, 5' }, { text: '1, 5' }, { text: '1, 4' }, { text: '1, 3, 4' }, { text: 'All of them' }], correct: 'A',
        tags: ['dynamics']
    },
    {
        id: '2021-12', year: 2021, marks: 2, stem: 'Which of the following integrals are equal to zero (no need to evaluate explicitly)?', image: '/graphs/2021-12.png', options: [{ text: '1, 2' }, { text: '3, 4' }, { text: '1' }, { text: '1, 2, 5' }, { text: '1, 5' }], correct: 'D',
        tags: ['maths']
    },

    // ---------------- 2022 MCQs ----------------
    {
        id: '2022-01', year: 2022, marks: 2, stem: 'What is the total resistance of the circuit?', image: '/graphs/2022-1.png', options: [{ math: '\\tfrac{11R}{6}' }, { math: '6R' }, { math: '\\tfrac{6R}{11}' }, { math: '3R' }, { math: '\\tfrac{R}{3}' }], correct: 'A',
        tags: ['electricity', 'maths']
    },
    {
        "id": "2022-02", "year": 2022, "marks": 2, "stemParts": ["For which values of ", { "math": "x" }, " is ", { "math": "(24 - 14x - 3x^2)^{-1}" }, " positive?"], "options": [{ "math": "x < -\\tfrac{4}{3} \\;\\text{and}\\; x > 6" }, { "math": "x < -6 \\;\\text{and}\\; x > \\tfrac{4}{3}" }, { "math": "-\\tfrac{4}{3} < x < 6" }, { "math": "-6 < x < \\tfrac{4}{3}" }, { "math": "-∞ < x < ∞" }], "correct": "D",
        tags: ['maths']
    },
    {
        id: '2022-03', year: 2022, marks: 2, stemParts: ['Molecules of oxygen in the atmosphere absorb solar radiation in bands centred at about ', { math: '80\\,\\text{nm}' }, ', ', { math: '650\\,\\text{nm}' }, ' and ', { math: '1000\\,\\text{nm}' }, '. ', 'In which parts of the electromagnetic spectrum are these absorption bands?'], options: [{ text: 'Visible, Infrared and Microwave' }, { text: 'Visible and Infrared' }, { text: 'Ultraviolet and Infrared' }, { text: 'Ultraviolet, Visible and Infrared' }, { text: 'X-ray, Ultraviolet and Visible' }], correct: 'D',
        tags: ['optics']
    },
    {
        id: '2022-04', year: 2022, marks: 2, stem: 'Which of these polynomial functions has the largest second derivative at x = 0?', options: [{ math: '5x^{5} - x^{3} + 4x' }, { math: '3x^{4} + x^{2} + 16' }, { math: '4x^{6} + x^{2} - 1' }, { math: 'x^{3} + 2x^{2} - 5x + 10' }, { math: '10x^{5} + 3x^{3} - 7x + 2' }], correct: 'D',
        tags: ['maths']
    },
    {
        id: '2022-05', year: 2022, marks: 2, stemParts: ['An asteroid of mass ', { math: '10^{3}\\,\\text{kg}' }, ' is moving towards a space station at ', { math: '1\\,\\text{m s}^{-1}' }, '. It is proposed to stop it by firing a ', { math: '1\\,\\text{MW}' }, ' laser at it. For how long must the laser be fired? You may assume that the surface of the asteroid is perfectly reflective, all photons are incident perpendicular to the surface of the asteroid, and a photon’s momentum is related to its energy by ', { math: 'p = \\tfrac{E}{c}' }, ', where ', { math: 'c = 3\\times 10^{8}\\,\\text{m s}^{-1}' }, ' is the speed of light.'], options: [{ math: '3\\times 10^{-3}\\,\\text{s}' }, { math: '7.5\\times 10^{4}\\,\\text{s}' }, { math: '1.5\\times 10^{5}\\,\\text{s}' }, { math: '3\\times 10^{5}\\,\\text{s}' }, { math: '3\\times 10^{11}\\,\\text{s}' }], correct: 'C',
        tags: ['dynamics', 'astronomy', 'estimation', 'maths']
    },
    {
        "id": "2022-06", "year": 2022, "marks": 2, "stemParts": ["Which expression correctly represents the sum ", { "math": "\\sum_{k=0}^{n} a r^{2k}" }, "?"], "options": [{ "math": "\\tfrac{ak}{1 - r^{2}}" }, { "math": "\\tfrac{a(1 - r^{2n})}{1 - r}" }, { "math": "\\tfrac{a(1 - r^{2n})}{1 - r^{2}}" }, { "math": "\\tfrac{a(1 - r^{2n+2})}{1 - r}" }, { "math": "\\tfrac{a(1 - r^{2n+2})}{1 - r^{2}}" }], "correct": "E",
        tags: ['maths']
    },
    {
        id: '2022-07', year: 2022, marks: 2, stemParts: ['In a cathode ray tube, an electron (mass ', { math: '9.1\\times 10^{-31}\\,\\text{kg}' }, ', charge ', { math: '-1.6\\times 10^{-19}\\,\\text{C}' }, ') is accelerated from rest by a uniform electric field of strength ', { math: '20\\,\\text{kV m}^{-1}' }, '. How much time does it take to travel ', { math: '50\\,\\text{cm}' }, '?'], options: [{ math: '1.1\\times 10^{-18}\\,\\text{s}' }, { math: '2.8\\times 10^{-16}\\,\\text{s}' }, { math: '1.7\\times 10^{-8}\\,\\text{s}' }, { math: '5.3\\times 10^{-7}\\,\\text{s}' }, { math: '3.2\\times 10^{-5}\\,\\text{s}' }], correct: 'C',
        tags: ['electricity', 'kinematics', 'maths']
    },
    {
        "id": "2022-08", "year": 2022, "marks": 2, "stemParts": ["If a function ", { "math": "y = f(x)" }, " has a stationary point at ", { "math": "(x_{0}, y_{0})" }, ", what are the co-ordinates of the corresponding stationary point of the function ", { "math": "y = a f(bx + c)" }, "?"], "options": [{ "math": "\\bigl(\\tfrac{x_{0}}{b} - c,\\; a y_{0}\\bigr)" }, { "math": "\\bigl(bx_{0} + c,\\; a y_{0}\\bigr)" }, { "math": "\\bigl(\\tfrac{x_{0} - c}{b},\\; a y_{0}\\bigr)" }, { "math": "\\bigl(x_{0}- \\tfrac{ c}{b},\\; a y_{0}\\bigr)" }, { "math": "\\bigl(\\tfrac{x_{0} + c}{b},\\; a y_{0}\\bigr)" }], "correct": "C",
        tags: ['maths']
    },
    {
        id: '2022-09', year: 2022, marks: 2, stemParts: ['As it appears to move across the sky, the Sun moves through an angle equal to that subtended by its diameter in about two minutes, as in the diagram. In a solar eclipse, the Moon covers the Sun almost exactly in the sky. Using this, what is the approximate ratio of the Moon’s radius to its orbital distance from Earth?'], image: '/graphs/2022-9.png', options: [{ math: '0.0014' }, { math: '0.0022' }, { math: '0.0028' }, { math: '0.0044' }, { math: '0.0056' }], correct: 'D',
        tags: ['astronomy', 'estimation', 'maths']
    },
    {
        id: '2022-10', year: 2022, marks: 2, stemParts: ['What is the next number in the sequence ', { math: '0,\\; \\tfrac{3}{4},\\; \\tfrac{3}{8},\\; \\tfrac{9}{16},\\; \\tfrac{15}{32},\\; \\tfrac{33}{64}' }, '?'], options: [{ math: '\\tfrac{51}{128}' }, { math: '\\tfrac{53}{128}' }, { math: '\\tfrac{63}{128}' }, { math: '\\tfrac{65}{128}' }, { math: '\\tfrac{71}{128}' }], correct: 'C',
        tags: ['maths']
    },
    {
        id: '2022-11', year: 2022, marks: 2, stemParts: ['Two moons occupy circular orbits around a planet. The smaller moon has mass ', { math: '1.5\\times 10^{15}\\,\\text{kg}' }, ' and orbital radius ', { math: '2.3\\times 10^{4}\\,\\text{km}' }, '. The larger moon has mass ', { math: '1.1\\times 10^{16}\\,\\text{kg}' }, ' and orbital radius ', { math: '9.4\\times 10^{3}\\,\\text{km}' }, '. If the gravitational force exerted by the planet on the smaller moon is ', { math: '10^{14}\\,\\text{N}' }, ', what force does the planet exert on the larger moon?'], options: [{ math: '2.4\\times 10^{14}\\,\\text{N}' }, { math: '6.0\\times 10^{14}\\,\\text{N}' }, { math: '7.3\\times 10^{14}\\,\\text{N}' }, { math: '1.8\\times 10^{15}\\,\\text{N}' }, { math: '4.4\\times 10^{15}\\,\\text{N}' }], correct: 'E',
        tags: ['gravity', 'astronomy', 'maths']
    },
    {
        id: '2022-12', year: 2022, marks: 2, stemParts: ['What is the derivative of ', { math: 'y = x^{6} + 6x^{5} + 12x^{4} + 8x^{3}' }, '?'], options: [{ math: '(3x+3)(x^{2}+2x)^{2}' }, { math: '(2x+2)(x^{2}+2x)^{2}' }, { math: '(6x+6)(x^{2}+2x)' }, { math: '(2x+2)(x^{2}+2x)^{3}' }, { math: '(6x+6)(x^{2}+2x)^{2}' }], correct: 'E',
        tags: ['maths']
    },

    // ---------------- 2023 MCQs ----------------
    {
        id: '2023-01', year: 2023, marks: 2, stemParts: ['What speed does a bull elephant (mass 4900 kg) have to move at to have the same kinetic energy as a cyclist (mass 100 kg) moving at ', { math: '30\\,\\text{km h}^{-1}' }, '?'], options: [{ text: '0.6 m s−1' }, { text: '1.2 m s−1' }, { text: '4.2 m s−1' }, { text: '8.3 m s−1' }, { text: '16.6 m s−1' }], correct: 'B',
        tags: ['dynamics', 'maths']
    },
    {
        id: '2023-02', year: 2023, marks: 2, stem: 'A seed packet contains 100 seeds. When planted, 75 will successfully become plants, but of these only a third will have flowers, and of these only one fifth will produce fruit. How many seeds produce fruiting plants?', options: [{ text: '5' }, { text: '10' }, { text: '15' }, { text: '20' }, { text: '25' }], correct: 'A',
        tags: ['maths']
    },
    {
        id: '2023-03', year: 2023, marks: 2, stemParts: ['Two black holes orbit each other and emit gravitational waves arising from the periodic nature of the orbit. The orbital separation is around ', { math: '10\\,\\text{km}' }, ', the relative speeds of the black holes are close to the speed of light, and gravitational waves travel at the speed of light. Which of the following would best describe the frequency of the emitted radiation?'], options: [{ math: '10^{-2}\\,\\text{Hz}' }, { math: '10\\,\\text{Hz}' }, { math: '10^{4}\\,\\text{Hz}' }, { math: '10^{7}\\,\\text{Hz}' }, { math: '10^{10}\\,\\text{Hz}' }], correct: 'C',
        tags: ['astronomy', 'gravity', 'estimation', 'maths']
    },
    {
        id: '2023-04', year: 2023, marks: 2, stemParts: ['What is the next number in the sequence ', { math: '\\tfrac{1}{5},\\; \\tfrac{3}{25},\\; \\tfrac{7}{125},\\; \\tfrac{3}{125},\\; \\tfrac{31}{3125}' }, '?'], options: [{ math: '\\tfrac{7}{125}' }, { math: '\\tfrac{27}{3125}' }, { math: '\\tfrac{59}{3125}' }, { math: '\\tfrac{59}{15625}' }, { math: '\\tfrac{63}{15625}' }], correct: 'E',
        tags: ['maths']
    },
    {
        id: '2023-05', year: 2023, marks: 2, stem: 'Consider the pulley system in the diagram, containing 4 wheels. If you pull the free end a distance y, how far will m rise by?', image: '/graphs/2023-5.png', options: [{ math: '\\tfrac{y}{16}' }, { math: '\\tfrac{y}{4}' }, { math: '\\tfrac{y}{2}' }, { math: '2y' }, { math: '4y' }], correct: 'B',
        tags: ['statics', 'maths']
    },
    {
        "id": "2023-06", "year": 2023, "marks": 2, "stemParts": ["Consider ", { "math": "f(x)=x^{2}" }, ". Construct a new function ", { "math": "g(x)" }, " that is (i) stretched vertically by a factor of ", { "math": "2" }, ", (ii) symmetric about ", { "math": "x=1" }, ", and (iii) never positive", " (i.e. ", { "math": "g(x)\\le 0" }, " for all ", { "math": "x" }, "). Which of the following is ", { "math": "g(x)" }, "?"], "options": [{ "math": "-2f(x-1)" }, { "math": "-f(x-1)" }, { "math": "-2f(x+1)" }, { "math": "-f(x+1)" }, { "math": "-f(2x-2)" }], "correct": "A",
        tags: ['maths']
    },
    {
        "id": "2023-07", "year": 2023, "marks": 2, "stemParts": ["If ", { "math": "y = \\Bigl(2+\\tfrac{x}{2}\\Bigr)^{4}" }, ", which of the following is ", { "math": "\\tfrac{dy}{dx}" }, "?"], "options": [{ "math": "4 + 2x + \\tfrac{3x^{2}}{4 }+\\tfrac{x^{3}}{4 }" }, { "math": "8 + 6x +\\tfrac{3x^{2}}{2 }+\\tfrac{x^{3}}{8 }" }, { "math": "32 + 24x + 6x^{2}+\\tfrac{x^{3}}{2}" }, { "math": "16 + 12x +3x^{2}+\\tfrac{x^{3}}{4 }" }, { "math": "2 + x + \\tfrac{3x^{2}}{8 }+\\tfrac{x^{3}}{8 }" }], "correct": "D",
        tags: ['maths']
    },
    {
        "id": "2023-07", "year": 2023, "marks": 2, "stemParts": ["If ", { "math": "y = \\Bigl(2+\\tfrac{x}{2}\\Bigr)^{4}" }, ", which of the following is ", { "math": "\\tfrac{dy}{dx}" }, "?"], "options": [{ "math": "4 + 2x + \\tfrac{3x^{2}}{4 }+\\tfrac{x^{3}}{4 }" }, { "math": "8 + 6x +\\tfrac{3x^{2}}{2 }+\\tfrac{x^{3}}{8 }" }, { "math": "32 + 24x + 6x^{2}+\\tfrac{x^{3}}{2}" }, { "math": "16 + 12x +3x^{2}+\\tfrac{x^{3}}{4 }" }, { "math": "2 + x + \\tfrac{3x^{2}}{8 }+\\tfrac{x^{3}}{8 }" }], "correct": "D",
        tags: ['electricity']
    },
    {
        "id": "2023-09", "year": 2023, "marks": 2, "stemParts": ["If ", { "math": "\\tfrac{dy}{dx} = x^{2} +\\tfrac{ 1}{x^{3}}" }, " and ", { "math": "y = 0" }, " when ", { "math": "x = 1" }, ", what is ", { "math": "\\int_{1}^{3} y\\,dx" }, "?"], "options": [{ "math": "\\tfrac{4}{3}" }, { "math": "\\tfrac{8}{3}" }, { "math": "\\tfrac{20}{3}" }, { "math": "8" }, { "math": "\\tfrac{22}{3}" }], "correct": "C",
        tags: ['maths']
    },
    {
        "id": "2023-10", "year": 2023, "marks": 2, "stemParts": ["A particle of mass ", { "math": "m" }, ", travelling freely at an initial speed ", { "math": "v" }, ", can be stopped in a distance ", { "math": "d" }, " by a constant retarding force ", { "math": "F" }, ". What magnitude of force (applied in a direction perpendicular to the motion) would be needed to change the trajectory of the same particle (at the same speed ", { "math": "v" }, ") into a circular arc of radius ", { "math": "d" }, "?"], "options": [{ "math": "\\tfrac{F}{2}" }, { "math": "\\tfrac{F}{\\sqrt{2}}" }, { "math": "F" }, { "math": "\\sqrt{2}\\,F" }, { "math": "2F" }], "correct": "E",
        tags: ['circular motion', 'dynamics', 'maths']
    },
    {
        id: '2023-11', year: 2023, marks: 2, stemParts: ['What is the (integer) ', { math: 'm' }, ' such that ', { math: '\\sum_{n=1}^{m} (3 + 2n) = 140' }, ' ?'], options: [{ math: '6' }, { math: '8' }, { math: '10' }, { math: '12' }, { math: '14' }], correct: 'C',
        tags: ['maths']
    },
    {
        id: '2023-12', year: 2023, marks: 2, stem: 'A device uses 3 kW of power at a voltage of 60 V. It is connected to a power supply via an ideal transformer. The transformer has N turns on the winding connected to the device and 20N turns on the winding connected to the power supply. What current flows in the winding connected to the power supply?', options: [{ text: '1 mA' }, { text: '0.4 A' }, { text: '2.5 A' }, { text: '50 A' }, { text: '1 kA' }], correct: 'C',
        tags: ['electricity', 'maths']
    }








    // ... (ADD: copy more items here; keep id unique; marks usually 2)
];

export const STANDARD_TAGS = [
    'maths', 'statics', 'dynamics', 'kinematics', 'circular motion',
    'simple harmonic motion', 'electricity', 'gravity', 'optics',
    'heat', 'hydrostatics', 'estimation', 'astronomy', 'forces'
]

// Utility: shuffle in-place (Fisher–Yates)
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

// NEW: ensure unique IDs before sampling
function uniqueById(items) {
    const seen = new Set()
    const out = []
    for (const q of items) {
        if (!q || !q.id || seen.has(q.id)) continue
        seen.add(q.id)
        out.push(q)
    }
    return out
}


// Utility: sample n items from array (without replacement)
function sample(arr, n) {
    return shuffle(arr.slice()).slice(0, n)
}

export function buildRandomPaper(n = 40, opts = {}) {
    const { includeTags = [], excludeTags = [] } = opts
    let pool = QUESTION_BANK

    if (includeTags.length) {
        pool = pool.filter(q => (q.tags || []).some(t => includeTags.includes(t)))
    }
    if (excludeTags.length) {
        pool = pool.filter(q => !((q.tags || []).some(t => excludeTags.includes(t))))
    }

    // ensure unique ids, then sample
    const clean = uniqueById(pool)
    const chosen = sample(clean, Math.min(n, clean.length))
    const totalMarks = chosen.reduce((s, q) => s + (q.marks || 2), 0)
    return { questions: chosen, totalMarks }
}



