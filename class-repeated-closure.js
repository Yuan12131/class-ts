function Pokemon(name, type) {
  let privateName = name;
  let privateType = type;

  return {
    getName: function() {
      return privateName;
    },
    getType: function() {
      return privateType;
    },
    setType: function(newType) {
      privateType = newType;
    }
  };
}

const pikachu = Pokemon('피카츄', '전기');
console.log(pikachu.getName());
console.log(pikachu.getType());

pikachu.setType('노말');
console.log(pikachu.getType());
