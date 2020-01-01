let busTimes = [
  {
    name: "C1 Blue",
    days: [1, 2, 3, 4, 5],
    "Granville Apartments": [
      [5, 45],
      [7, 4],
      [8, 43],
      [10, 2],
      [11, 21],
      [13, 0],
      [14, 19],
      [15, 58],
      [17, 17],
      [18, 36],
      [20, 15],
      [21, 34],
      [23, 28],
      [24, 47]
    ],
    "Meadows Ave & Olivewood Dr. (Food Maxx)": [
      [5, 52],
      [6, 49],
      [7, 11],
      [8, 28],
      [8, 50],
      [9, 47],
      [10, 9],
      [11, 6],
      [11, 28],
      [12, 45],
      [13, 7],
      [14, 4],
      [14, 26],
      [15, 43],
      [16, 5],
      [17, 2],
      [17, 24],
      [18, 21],
      [18, 43],
      [20, 0],
      [20, 22],
      [21, 19],
      [21, 41],
      [23, 13],
      [23, 35],
      [24, 32]
    ],
    'G St. & W. Alexander Ave. (Bus Stop On "G" by Gas Station)': [
      [6, 1],
      [6, 41],
      [7, 20],
      [8, 20],
      [8, 59],
      [9, 39],
      [10, 18],
      [10, 58],
      [11, 37],
      [12, 37],
      [13, 16],
      [13, 56],
      [14, 35],
      [15, 35],
      [16, 14],
      [16, 54],
      [17, 33],
      [18, 13],
      [18, 52],
      [19, 52],
      [20, 31],
      [21, 11],
      [21, 50],
      [23, 5],
      [23, 44],
      [24, 24]
    ],
    "Rite Aid/Walgreens on G St.": [
      [6, 3],
      [7, 22],
      [9, 1],
      [10, 20],
      [11, 39],
      [13, 18],
      [14, 37],
      [16, 16],
      [17, 35],
      [18, 54],
      [20, 33],
      [21, 52],
      [23, 46]
    ],
    'El Portal Plaza & "G" Street (Bus Stop On "G")': [
      [6, 5],
      [6, 39],
      [7, 24],
      [8, 18],
      [9, 3],
      [9, 37],
      [10, 22],
      [10, 56],
      [11, 41],
      [12, 35],
      [13, 20],
      [13, 54],
      [14, 39],
      [15, 33],
      [16, 18],
      [16, 52],
      [17, 37],
      [18, 11],
      [18, 56],
      [19, 50],
      [20, 35],
      [21, 9],
      [21, 54],
      [23, 3],
      [23, 48],
      [24, 22]
    ],
    "Mercy Hospital/Tri-College": [
      [6, 8],
      [7, 27],
      [9, 6],
      [10, 25],
      [11, 44],
      [13, 23],
      [14, 42],
      [16, 21],
      [17, 40],
      [18, 59],
      [20, 38],
      [21, 57],
      [23, 51]
    ],
    "Bellevue Ranch on Arrow Wood Dr.": [
      [6, 15],
      [7, 34],
      [9, 13],
      [10, 32],
      [11, 51],
      [13, 30],
      [14, 49],
      [16, 28],
      [17, 47],
      [19, 6],
      [20, 45],
      [22, 4],
      [23, 58]
    ],
    "Student Activities & Athletics Center": [
      [6, 27],
      [8, 6],
      [9, 25],
      [10, 44],
      [12, 23],
      [13, 42],
      [15, 21],
      [16, 40],
      [17, 59],
      [19, 38],
      [20, 57],
      [22, 51],
      [24, 10]
    ],
    "Emigrant Pass at Scholars Lane": [
      [6, 29],
      [8, 8],
      [9, 27],
      [10, 46],
      [12, 25],
      [13, 44],
      [15, 23],
      [16, 42],
      [18, 1],
      [19, 40],
      [20, 59],
      [22, 53],
      [24, 12]
    ],
    'Tri-College/Mercy (Bus stop On "G" Next To Tri College)': [
      [6, 36],
      [8, 15],
      [9, 34],
      [10, 53],
      [12, 32],
      [13, 51],
      [15, 30],
      [16, 49],
      [18, 8],
      [19, 47],
      [21, 6],
      [23, 0],
      [24, 19]
    ],
    "Walmart on Loughborough": [
      [5, 50],
      [6, 51],
      [7, 9],
      [8, 30],
      [8, 48],
      [9, 49],
      [10, 7],
      [11, 8],
      [11, 26],
      [12, 47],
      [13, 5],
      [14, 6],
      [14, 24],
      [15, 45],
      [16, 3],
      [17, 4],
      [17, 22],
      [18, 23],
      [18, 41],
      [20, 2],
      [20, 20],
      [21, 21],
      [21, 39],
      [23, 15],
      [23, 33],
      [24, 34]
    ]
  },
  {
    name: "C1 Gold",
    days: [1, 2, 3, 4, 5],
    "Granville Apartments": [
      [6, 25],
      [7, 44],
      [9, 23],
      [10, 42],
      [12, 1],
      [13, 40],
      [14, 59],
      [16, 38],
      [17, 57],
      [19, 16],
      [20, 55],
      [22, 14]
    ],
    "Meadows Ave & Olivewood Dr. (Food Maxx)": [
      [6, 32],
      [7, 29],
      [7, 51],
      [9, 8],
      [9, 30],
      [10, 27],
      [10, 49],
      [11, 46],
      [12, 8],
      [13, 25],
      [13, 47],
      [14, 44],
      [15, 6],
      [16, 23],
      [16, 45],
      [17, 42],
      [18, 4],
      [19, 1],
      [19, 23],
      [20, 40],
      [21, 2],
      [21, 59],
      [22, 21]
    ],
    'G St. & W. Alexander Ave. (Bus Stop On "G" by Gas Station)': [
      [6, 41],
      [7, 21],
      [8, 0],
      [9, 0],
      [9, 39],
      [10, 19],
      [10, 58],
      [11, 38],
      [12, 17],
      [13, 17],
      [13, 56],
      [14, 36],
      [15, 15],
      [16, 15],
      [16, 54],
      [17, 34],
      [18, 13],
      [18, 53],
      [19, 32],
      [20, 32],
      [21, 11],
      [21, 51],
      [22, 30]
    ],
    "Rite Aid/Walgreens on G St.": [
      [6, 43],
      [8, 2],
      [9, 41],
      [11, 0],
      [12, 19],
      [13, 58],
      [15, 17],
      [16, 56],
      [18, 15],
      [19, 34],
      [21, 13],
      [22, 32]
    ],
    'El Portal Plaza & "G" Street (Bus Stop On "G")': [
      [6, 45],
      [7, 19],
      [8, 4],
      [8, 58],
      [9, 43],
      [10, 17],
      [11, 2],
      [11, 36],
      [12, 21],
      [13, 15],
      [14, 0],
      [14, 34],
      [15, 19],
      [16, 13],
      [16, 58],
      [17, 32],
      [18, 17],
      [18, 51],
      [19, 36],
      [20, 30],
      [21, 15],
      [21, 49],
      [22, 34]
    ],
    "Mercy Hospital/Tri-College": [
      [6, 48],
      [8, 7],
      [9, 46],
      [11, 5],
      [12, 24],
      [14, 3],
      [15, 22],
      [17, 1],
      [18, 20],
      [19, 39],
      [21, 18],
      [22, 37]
    ],
    "Bellevue Ranch on Arrow Wood Dr.": [
      [6, 55],
      [8, 14],
      [9, 53],
      [11, 12],
      [12, 31],
      [14, 10],
      [15, 29],
      [17, 8],
      [18, 27],
      [19, 46],
      [21, 25],
      [22, 44]
    ],
    "Student Activities & Athletics Center": [
      [7, 7],
      [8, 46],
      [10, 5],
      [11, 24],
      [13, 3],
      [14, 22],
      [16, 1],
      [17, 20],
      [18, 39],
      [20, 18],
      [21, 37],
      [22, 56]
    ],
    "Emigrant Pass at Scholars Lane": [
      [7, 9],
      [8, 48],
      [10, 7],
      [11, 26],
      [13, 5],
      [14, 24],
      [16, 3],
      [17, 22],
      [18, 41],
      [20, 20],
      [21, 39]
    ],
    'Tri-College/Mercy (Bus stop On "G" Next To Tri College)': [
      [7, 16],
      [8, 55],
      [10, 14],
      [11, 33],
      [13, 12],
      [14, 31],
      [16, 10],
      [17, 29],
      [18, 48],
      [20, 27],
      [21, 46]
    ],
    "Walmart on Loughborough": [
      [6, 30],
      [7, 31],
      [7, 49],
      [9, 10],
      [9, 28],
      [10, 29],
      [10, 47],
      [11, 48],
      [12, 6],
      [13, 27],
      [13, 45],
      [14, 46],
      [15, 4],
      [16, 25],
      [16, 43],
      [17, 44],
      [18, 2],
      [19, 3],
      [19, 21],
      [20, 42],
      [21, 0],
      [22, 1],
      [22, 19]
    ]
  },
  {
    name: "C2",
    days: [1, 2, 3, 4, 5],
    '"R" Street Village Apts.': [
      [5, 25],
      [6, 25],
      [7, 45],
      [8, 45],
      [9, 45],
      [11, 5],
      [12, 5],
      [13, 5],
      [14, 25],
      [15, 25],
      [16, 25],
      [17, 45],
      [18, 45],
      [19, 45],
      [20, 45],
      [22, 5],
      [23, 5]
    ],
    "El Redondo Dr. (Across from Jenner Dr.)": [
      [5, 28],
      [6, 28],
      [7, 48],
      [8, 48],
      [9, 48],
      [11, 8],
      [12, 8],
      [13, 8],
      [14, 28],
      [15, 28],
      [16, 28],
      [17, 48],
      [18, 48],
      [19, 48],
      [20, 48],
      [22, 8]
    ],
    "Compass Pointe Apts(Bus stop on Pacific Dr. in front)": [
      [5, 30],
      [6, 30],
      [7, 50],
      [8, 50],
      [9, 50],
      [11, 10],
      [12, 10],
      [13, 10],
      [14, 30],
      [15, 30],
      [16, 30],
      [17, 50],
      [18, 50],
      [19, 50],
      [20, 50],
      [22, 10]
    ],
    "Buena Vista Dr.": [
      [5, 38],
      [6, 38],
      [7, 58],
      [8, 58],
      [9, 58],
      [11, 18],
      [12, 18],
      [13, 18],
      [14, 38],
      [15, 38],
      [16, 38],
      [17, 58],
      [18, 58],
      [19, 58],
      [20, 58],
      [22, 18]
    ],
    "Merced Mall Target": [
      [5, 45],
      [6, 45],
      [8, 5],
      [9, 5],
      [10, 5],
      [11, 25],
      [12, 25],
      [13, 25],
      [14, 45],
      [15, 45],
      [16, 45],
      [18, 5],
      [19, 5],
      [20, 5],
      [21, 5],
      [22, 25]
    ],
    'Villages Apts. "M" Street': [
      [5, 47],
      [6, 47],
      [8, 7],
      [9, 7],
      [10, 7],
      [11, 27],
      [12, 27],
      [13, 27],
      [14, 47],
      [15, 47],
      [16, 47],
      [18, 7],
      [19, 7],
      [20, 7],
      [21, 7],
      [22, 27]
    ],
    "Merced College The Bus Terminal": [
      [5, 51],
      [6, 51],
      [8, 11],
      [9, 11],
      [10, 11],
      [11, 31],
      [12, 31],
      [13, 31],
      [14, 51],
      [15, 51],
      [16, 51],
      [18, 11],
      [19, 11],
      [20, 11],
      [21, 11],
      [22, 31]
    ],
    "Ironstone Dr.": [
      [5, 53],
      [6, 53],
      [8, 13],
      [9, 13],
      [10, 13],
      [11, 33],
      [12, 33],
      [13, 33],
      [14, 53],
      [15, 53],
      [16, 53],
      [18, 13],
      [19, 13],
      [20, 13],
      [21, 13],
      [22, 33]
    ],
    "Bellevue Ranch on Arrow Wood Dr.": [
      [5, 57],
      [6, 57],
      [8, 17],
      [9, 17],
      [10, 17],
      [11, 37],
      [12, 37],
      [13, 37],
      [14, 57],
      [15, 57],
      [16, 57],
      [18, 17],
      [19, 17],
      [20, 17],
      [21, 17],
      [22, 37]
    ],
    "Student Activities & Athletics Center": [
      [6, 9],
      [7, 29],
      [8, 29],
      [9, 29],
      [10, 49],
      [11, 49],
      [12, 49],
      [14, 9],
      [15, 9],
      [16, 9],
      [17, 29],
      [18, 29],
      [19, 29],
      [20, 29],
      [21, 49],
      [22, 49]
    ],
    "Emigrant Pass at Scholars Lane": [
      [6, 11],
      [7, 31],
      [8, 31],
      [9, 31],
      [10, 51],
      [11, 51],
      [12, 51],
      [14, 11],
      [15, 11],
      [16, 11],
      [17, 31],
      [18, 31],
      [19, 31],
      [20, 31],
      [21, 51],
      [22, 51]
    ]
  },
  {
    name: "CampusTrax",
    days: [1, 2, 3, 4, 5],
    "Student Activities & Athletics Center": [
      [7, 30],
      [8, 20],
      [9, 10],
      [10, 0],
      [11, 30],
      [12, 20],
      [13, 10],
      [16, 30],
      [17, 20],
      [18, 10]
    ],
    "Castle Air Park": [
      [7, 55],
      [8, 45],
      [9, 35],
      [10, 25],
      [11, 55],
      [12, 45],
      [13, 35],
      [16, 55],
      [17, 45],
      [18, 35]
    ]
  },
  {
    name: "E1",
    days: [0, 6],
    "Student Activities & Athletics Center": [
      [11, 5],
      [12, 38],
      [13, 51],
      [15, 24],
      [16, 57],
      [18, 10],
      [19, 23],
      [20, 56],
      [22, 9]
    ],
    "Emigrant Pass at Scholars Lane": [
      [11, 7],
      [12, 40],
      [13, 53],
      [15, 26],
      [16, 59],
      [18, 12],
      [19, 25],
      [20, 58],
      [22, 11]
    ],
    "Moraga Subdivision": [
      [11, 11],
      [12, 44],
      [13, 57],
      [15, 30],
      [17, 3],
      [18, 16],
      [19, 29],
      [21, 2],
      [22, 15],
      [12, 8],
      [13, 41],
      [14, 54],
      [16, 27],
      [18, 0],
      [19, 13],
      [20, 26],
      [21, 59],
      [23, 9]
    ],
    "Starbucks/Promenade Center": [
      [11, 15],
      [12, 48],
      [14, 1],
      [15, 34],
      [17, 7],
      [18, 20],
      [19, 33],
      [21, 6],
      [22, 19]
    ],
    "Merced College The Bus Terminal": [
      [11, 18],
      [12, 51],
      [14, 4],
      [15, 37],
      [17, 10],
      [18, 23],
      [19, 36],
      [21, 9],
      [22, 22]
    ],
    "Merced Mall Target": [
      [11, 25],
      [12, 58],
      [14, 11],
      [15, 44],
      [17, 17],
      [18, 30],
      [19, 43],
      [21, 16],
      [22, 29]
    ],
    "Amtrak Station": [
      [11, 35],
      [13, 8],
      [14, 21],
      [15, 54],
      [17, 27],
      [18, 40],
      [19, 53],
      [21, 26],
      [22, 36]
    ],
    "K St. Between 18th & 19th (The Bus Stop)": [
      [11, 37],
      [13, 10],
      [14, 23],
      [15, 56],
      [17, 29],
      [18, 42],
      [19, 55],
      [21, 28],
      [22, 38]
    ],
    "Granville Apartments": [
      [11, 49],
      [13, 22],
      [14, 35],
      [16, 8],
      [17, 41],
      [18, 54],
      [20, 7],
      [21, 40],
      [22, 50]
    ],
    "Walmart on Loughborough": [
      [11, 54],
      [13, 27],
      [14, 40],
      [16, 13],
      [17, 46],
      [18, 59],
      [20, 12],
      [21, 45],
      [22, 55]
    ],
    "Meadows Ave & Olivewood Dr. (Food Maxx)": [
      [11, 56],
      [13, 29],
      [14, 42],
      [16, 15],
      [17, 48],
      [19, 1],
      [20, 14],
      [21, 47],
      [22, 57]
    ],
    "Rite Aid/Walgreens on G St.": [
      [12, 0],
      [13, 33],
      [14, 46],
      [16, 19],
      [17, 52],
      [19, 5],
      [20, 18],
      [21, 51],
      [23, 1]
    ],
    "Yosemite & Cordova (Physicians Care)": [
      [12, 5],
      [13, 38],
      [14, 51],
      [16, 24],
      [17, 57],
      [19, 10],
      [20, 23],
      [21, 56],
      [23, 6]
    ]
  },
  {
    name: "E2",
    days: [0, 6],
    "Student Activities & Athletics Center": [
      [11, 5],
      [12, 22],
      [13, 19],
      [14, 16],
      [15, 33],
      [16, 50],
      [17, 47],
      [18, 44],
      [20, 1],
      [20, 58]
    ],
    "Emigrant Pass at Scholars Lane": [
      [11, 7],
      [12, 24],
      [13, 21],
      [14, 18],
      [15, 35],
      [16, 52],
      [17, 49],
      [18, 46],
      [20, 3],
      [21, 0]
    ],
    "Moraga Subdivision": [
      [11, 12],
      [12, 29],
      [13, 26],
      [14, 23],
      [15, 40],
      [16, 57],
      [17, 54],
      [18, 51],
      [20, 8],
      [21, 5]
    ],
    "Starbucks/Promenade Center": [
      [11, 16],
      [12, 33],
      [13, 30],
      [14, 27],
      [15, 44],
      [17, 1],
      [17, 58],
      [18, 55],
      [20, 12],
      [21, 9]
    ],
    "R Street Village Apartments": [
      [11, 22],
      [12, 39],
      [13, 36],
      [14, 33],
      [15, 50],
      [17, 7],
      [18, 4],
      [19, 1],
      [20, 18],
      [21, 15]
    ],
    "El Redondo Dr. (Across from Jenner Dr.)": [
      [11, 24],
      [12, 41],
      [13, 38],
      [14, 35],
      [15, 52],
      [17, 9],
      [18, 6],
      [19, 3],
      [20, 20],
      [21, 17]
    ],
    "Compass Pointe Apts(Bus stop on Pacific Dr. in front)": [
      [11, 26],
      [12, 43],
      [13, 40],
      [14, 37],
      [15, 54],
      [17, 11],
      [18, 8],
      [19, 5],
      [20, 22],
      [21, 19]
    ],
    "Buena Vista Dr.": [
      [11, 34],
      [12, 51],
      [13, 48],
      [14, 45],
      [16, 2],
      [17, 19],
      [18, 16],
      [19, 13],
      [20, 30],
      [21, 27]
    ],
    "Merced Mall Target": [
      [11, 39],
      [12, 56],
      [13, 53],
      [14, 50],
      [16, 7],
      [17, 24],
      [18, 21],
      [19, 18],
      [20, 35],
      [21, 32]
    ],
    "M Street Village Apartments": [
      [11, 40],
      [12, 57],
      [13, 54],
      [14, 51],
      [16, 8],
      [17, 25],
      [18, 22],
      [19, 19],
      [20, 36],
      [21, 33]
    ],
    "Merced College The Bus Terminal": [
      [11, 44],
      [13, 1],
      [13, 58],
      [14, 55],
      [16, 12],
      [17, 29],
      [18, 26],
      [19, 23],
      [20, 40],
      [21, 37]
    ],
    "Ironstone Dr.": [
      [11, 46],
      [13, 3],
      [14, 0],
      [14, 57],
      [16, 14],
      [17, 31],
      [18, 28],
      [19, 25],
      [20, 42],
      [21, 39]
    ],
    "Bellevue Ranch on Arrow Wood Dr.": [
      [11, 50],
      [13, 7],
      [14, 4],
      [15, 1],
      [16, 18],
      [17, 35],
      [18, 32],
      [19, 29],
      [20, 46],
      [21, 43]
    ]
  },
  {
    name: "FastCat",
    days: [1, 2, 3, 4, 5],
    "Moraga Subdivision": [
      [5, 55],
      [7, 2],
      [8, 29],
      [9, 36],
      [10, 43],
      [11, 50],
      [13, 17],
      [14, 24],
      [15, 51],
      [16, 58],
      [18, 25],
      [19, 32],
      [20, 39],
      [21, 46],
      [23, 13],
      [6, 45],
      [8, 12],
      [9, 19],
      [10, 26],
      [11, 33],
      [13, 0],
      [14, 7],
      [15, 34],
      [16, 41],
      [18, 8],
      [19, 15],
      [20, 22],
      [21, 29],
      [23, 56]
    ],
    "University Surgery Center": [
      [5, 57],
      [7, 4],
      [8, 31],
      [9, 38],
      [10, 45],
      [11, 52],
      [13, 19],
      [14, 26],
      [15, 53],
      [17, 0],
      [18, 27],
      [19, 34],
      [20, 41],
      [21, 48],
      [23, 15],
      [6, 43],
      [8, 10],
      [9, 17],
      [10, 24],
      [11, 31],
      [12, 58],
      [14, 5],
      [15, 32],
      [16, 39],
      [18, 6],
      [19, 13],
      [20, 20],
      [21, 27],
      [22, 54]
    ],
    "Starbucks/Promenade Center": [
      [6, 1],
      [7, 8],
      [8, 35],
      [9, 42],
      [10, 49],
      [11, 56],
      [13, 23],
      [14, 30],
      [15, 57],
      [17, 4],
      [18, 31],
      [19, 38],
      [20, 45],
      [21, 52],
      [23, 19]
    ],
    "Mercy Hospital/Tri-College": [
      [6, 4],
      [7, 11],
      [8, 38],
      [9, 45],
      [10, 52],
      [11, 59],
      [13, 26],
      [14, 33],
      [16, 0],
      [17, 7],
      [18, 34],
      [19, 41],
      [20, 48],
      [21, 55],
      [23, 22],
      [6, 37],
      [8, 4],
      [9, 11],
      [10, 18],
      [11, 25],
      [12, 52],
      [13, 59],
      [15, 26],
      [16, 33],
      [18, 0],
      [19, 7],
      [20, 14],
      [21, 21],
      [22, 48]
    ],
    "Bellevue Ranch on Arrow Wood Dr.": [
      [6, 11],
      [7, 18],
      [8, 45],
      [9, 52],
      [10, 59],
      [12, 6],
      [13, 33],
      [14, 40],
      [16, 7],
      [17, 14],
      [18, 41],
      [19, 48],
      [20, 55],
      [22, 2],
      [23, 29],
      [6, 32],
      [7, 59],
      [9, 6],
      [10, 13],
      [11, 20],
      [12, 47],
      [13, 54],
      [15, 21],
      [16, 28],
      [17, 55],
      [19, 2],
      [20, 9],
      [21, 16],
      [22, 43]
    ],
    "Student Activities & Athletics Center": [
      [6, 23],
      [7, 50],
      [8, 57],
      [10, 4],
      [11, 11],
      [12, 38],
      [13, 45],
      [15, 12],
      [16, 19],
      [17, 46],
      [18, 53],
      [20, 0],
      [21, 7],
      [22, 34],
      [23, 41],
      [6, 55],
      [8, 22],
      [9, 29],
      [10, 36],
      [11, 43],
      [13, 10],
      [14, 17],
      [15, 44],
      [16, 51],
      [18, 18],
      [19, 25],
      [20, 32],
      [21, 39],
      [23, 6]
    ],
    "Emigrant Pass at Scholars Lane": [
      [6, 25],
      [7, 52],
      [8, 59],
      [10, 6],
      [11, 13],
      [12, 40],
      [13, 47],
      [15, 14],
      [16, 21],
      [17, 48],
      [18, 55],
      [20, 2],
      [21, 9],
      [22, 36],
      [6, 57],
      [8, 24],
      [9, 31],
      [10, 38],
      [11, 45],
      [13, 12],
      [14, 19],
      [15, 46],
      [16, 53],
      [18, 20],
      [19, 27],
      [20, 34],
      [21, 41],
      [23, 8]
    ],
    "Yosemite & Cordova (Physicians Care)": [
      [6, 40],
      [8, 7],
      [9, 14],
      [10, 21],
      [11, 28],
      [12, 55],
      [14, 2],
      [15, 29],
      [16, 36],
      [18, 3],
      [19, 10],
      [20, 17],
      [21, 24],
      [22, 51]
    ]
  },
  {
    name: "G",
    days: [1, 2, 3, 4, 5],
    '"R" Street Village Apts.': [
      [5, 40],
      [6, 47],
      [8, 14],
      [9, 21],
      [10, 28],
      [11, 55],
      [13, 2],
      [14, 9],
      [15, 36],
      [16, 43],
      [17, 50],
      [19, 17],
      [20, 24]
    ],
    "El Redondo Dr. (Across from Jenner Dr.)": [
      [5, 43],
      [6, 50],
      [8, 17],
      [9, 24],
      [10, 31],
      [11, 58],
      [13, 5],
      [14, 12],
      [15, 39],
      [16, 46],
      [17, 53],
      [19, 20],
      [20, 27]
    ],
    "Compass Pointe Apts(Bus stop on Pacific Dr. in front)": [
      [5, 45],
      [6, 52],
      [8, 19],
      [9, 26],
      [10, 33],
      [12, 0],
      [13, 7],
      [14, 14],
      [15, 41],
      [16, 48],
      [17, 55],
      [19, 22],
      [20, 29]
    ],
    "Merced College The Bus Terminal": [
      [5, 50],
      [6, 57],
      [8, 24],
      [9, 31],
      [10, 38],
      [12, 5],
      [13, 12],
      [14, 19],
      [15, 46],
      [16, 53],
      [18, 0],
      [19, 27],
      [20, 34]
    ],
    "Ironstone Dr.": [
      [5, 52],
      [6, 59],
      [8, 26],
      [9, 33],
      [10, 40],
      [12, 7],
      [13, 14],
      [14, 21],
      [15, 48],
      [16, 55],
      [18, 2],
      [19, 29],
      [20, 36]
    ],
    "Bellevue Ranch on Arrow Wood Dr.": [
      [5, 56],
      [7, 3],
      [8, 30],
      [9, 37],
      [10, 44],
      [12, 11],
      [13, 18],
      [14, 25],
      [15, 52],
      [16, 59],
      [18, 6],
      [19, 33],
      [20, 40]
    ],
    "Student Activities & Athletics Center": [
      [6, 8],
      [7, 35],
      [8, 42],
      [9, 49],
      [11, 16],
      [12, 23],
      [13, 30],
      [14, 57],
      [16, 4],
      [17, 11],
      [18, 38],
      [19, 45],
      [20, 52]
    ],
    "Emigrant Pass at Scholars Lane": [
      [6, 10],
      [7, 37],
      [8, 44],
      [9, 51],
      [11, 18],
      [12, 25],
      [13, 32],
      [14, 59],
      [16, 6],
      [17, 13],
      [18, 40],
      [19, 47],
      [20, 54]
    ],
    "Amtrak Station": [
      [6, 25],
      [7, 52],
      [8, 59],
      [10, 6],
      [11, 33],
      [12, 40],
      [13, 47],
      [15, 14],
      [16, 21],
      [17, 28],
      [18, 55],
      [20, 2],
      [21, 9]
    ],
    "K St. Between 18th & 19th (The Bus Stop)": [
      [6, 26],
      [7, 53],
      [9, 0],
      [10, 7],
      [11, 34],
      [12, 41],
      [13, 48],
      [15, 15],
      [16, 22],
      [17, 29],
      [18, 56],
      [20, 3]
    ]
  }
];