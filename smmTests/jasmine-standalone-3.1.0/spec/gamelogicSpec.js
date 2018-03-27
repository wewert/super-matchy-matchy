describe('gamelogic', function() {
  it("is defined", function () {
    var source = "#boxcard";
    expect(name).toBeDefined();
  });

  it("is defined", function () {
    var imgSource = "assets/img/IMG3.jpg";
    expect(name).toBeDefined();
  });

  it("should contain img1", function () {
    expect(['assets/img/IMG1.jpg',
  	'assets/img/IMG2.jpg',
  	'assets/img/IMG3.jpg',
  	'assets/img/IMG4.jpg',
  	'assets/img/IMG5.jpg',
  	'assets/img/IMG6.jpg',
  	'assets/img/IMG7.jpg',
  	'assets/img/IMG8.jpg']).toContain("assets/img/IMG1.jpg");
  });

  it("should contain img7", function () {
    expect(['assets/img/IMG1.jpg',
  	'assets/img/IMG2.jpg',
  	'assets/img/IMG3.jpg',
  	'assets/img/IMG4.jpg',
  	'assets/img/IMG5.jpg',
  	'assets/img/IMG6.jpg',
  	'assets/img/IMG7.jpg',
  	'assets/img/IMG8.jpg']).toContain("assets/img/IMG7.jpg");
  });
});

describe('game_level', function() {
  it("is defined", function () {
    var easy = "words.slice(0, 4)";
    expect(name).toBeDefined();
  });

  it("is defined", function () {
    var moderate = "words.slice(0, 8)";
    expect(name).toBeDefined();
  });

  it("is defined", function () {
    var hard = "words.slice(words.length < 1)";
    expect(name).toBeDefined();
  });

  it("should contain img3", function () {
    expect(['assets/img/IMG1.jpg',
  	'assets/img/IMG2.jpg',
  	'assets/img/IMG3.jpg',
  	'assets/img/IMG4.jpg',
  	'assets/img/IMG5.jpg',
  	'assets/img/IMG6.jpg',
  	'assets/img/IMG7.jpg',
  	'assets/img/IMG8.jpg']).toContain("assets/img/IMG3.jpg");
  });

  it("should contain img8", function () {
    expect(['assets/img/IMG1.jpg',
  	'assets/img/IMG2.jpg',
  	'assets/img/IMG3.jpg',
  	'assets/img/IMG4.jpg',
  	'assets/img/IMG5.jpg',
  	'assets/img/IMG6.jpg',
  	'assets/img/IMG7.jpg',
  	'assets/img/IMG8.jpg']).toContain("assets/img/IMG8.jpg");
  });
});

describe('leaderboard', function() {
  it("is defined", function () {
    var tBody = "$('tbody')";
    expect(name).toBeDefined();
  });
});

describe('summary', function() {
  it("is defined", function () {
    var playerScore = localStorage.getItem("score");
    var difficultyLevel = localStorage.getItem("difficulty");
    expect(name).toBeDefined();
  });
});
