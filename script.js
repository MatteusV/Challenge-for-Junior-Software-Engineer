const courses = {
  "espanhol": {
    "iniciante": {
      "manha": [
        {
          "id": 1
        },
        {
          "id": 2
        }
      ],
      "noite": [
        {
          "id": 3
        },
        {
          "id": 4
        }
      ]
    },
    "avancado": {
      "manha": [
        {
          "id": 5
        },
        {
          "id": 6
        }
      ]
    }
  },
  "ingles": {
    "avancado": {
      "manha": [
        {
          "id": 11
        },
        {
          "id": 21
        }
      ]
    }
  }
};


function search(courses, filters) {
  let result = [];

  function recursiveSearch(obj, filters, level) {
    for (let key in obj) {
      if (filters.length > level && obj.hasOwnProperty(filters[level])) {
        recursiveSearch(obj[filters[level]], filters, level + 1);
      } else {
        if (Array.isArray(obj[key])) {
          result = result.concat(obj[key]);
        } else {
          recursiveSearch(obj[key], filters, level);
        }
      }
    }
  }

  recursiveSearch(courses, filters, 0);

  return result;
}


console.log(search(courses, []));
console.log(search(courses, ['espanhol']));
console.log(search(courses, ['espanhol', 'iniciante']));
console.log(search(courses, ['espanhol', 'iniciante', 'manha']));