var names = [
	"panipuri",
	"garok",
	"riski",
	"abdul",
	"pearl",
	"dena",
	"Gavin",
	"roweII",
	"haileeaumbach",
	"brunner",
	"carter",
	"powlowski",
	"prince",
	"lysanessh",
	"heakis",
	"erick",
	"damon",
	"luliz",
	"derrick",
	"machelin",
	"noelia",
	"katelin",
	"walters",
	"hesteni",
	"loraine",
	"sasha",
	"brenner",
	"jannie",
	"waelchi",
	"malinda",
	"yolanda",
	"gusikowski",
	"lizahns",
	"jayne",
	"oswaldo",
	"luella",
	"rylee",
	"cassandra",
	"davion",
	"eliza "
];

const lastname = ["samantha",
					"purdy",
					"stracke",
					"marvin",
					"langosh",
					"schroeder",
					"tremblay",
					"schumacher",
					"jason",
					"grant",
					"kocak",
					"handuk",
					"lueilwitz",];

const random = () => {
  const randomIndex = Math.floor(Math.random() * Math.floor(names.length));
  return names[randomIndex];
};

const randlast = () => { 
	const randomType = Math.floor(Math.random() * Math.floor(lastname.length));
	return lastname[randomType];
};

const oll = () => {
	return lastname;
}
const all = () => {
  return names;
};

module.exports = {
  randlast,
  oll,
  random,
  all
};