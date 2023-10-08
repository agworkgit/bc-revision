var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
  }

function selectTopic() {
    if (randomTopic === 'HTML') {
    console.log("Let's revise HTML!");
    } else if (randomTopic === 'CSS') {
    console.log("Let's revise CSS!");
    } else if (randomTopic === 'Git') {
    console.log("Let's revise Git!");
    } else if (randomTopic === 'JavaScript') {
    console.log("Let's revise JavaScript!");
    } else {
    console.log('Please try again!');
    }
}

console.log('Here are the topics I revised through my bootcamp:');
console.log('Which topic should I revise first?');
listTopics();

selectTopic();