

function wordCount(sentence) {
    return sentence.split(' ').length;
  }
  
  function hasLetter(sentence, letter) {
    return sentence.indexOf(letter) !== -1;
  }
  
  function letterCount(sentence, letter) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === letter) {
        count++;
      }
    }
    return count;
  }
  
  function stats(sentence) {
    const obj = {};
    const words = sentence.split(' ');
    words.forEach(word => {
      if (obj[word] === undefined) {
        obj[word] = 0;
      }
      obj[word]++;
    });
    return obj;
  }
  
  const userSentence = window.prompt('Enter a sentence', 'the quick brown fox jumped over the fence');
  
  console.log('Word Count:', wordCount(userSentence));
  console.log('Has Letter X:', hasLetter(userSentence, 'X'));
  console.log('Has Letter q:', hasLetter(userSentence, 'q'));
  console.log('Letter Count e:', letterCount(userSentence, 'e'));
  console.log('Letter Count (space):', letterCount(userSentence, ' '));
  console.log('Statistics:', stats(userSentence));
  