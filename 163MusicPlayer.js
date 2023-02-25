var songs = [
	1479199734,
	32477986,
	33166666,
	29534449,
	427142146,
	29947420,
	505449407,
	440353010,
	32166628,
	3932159,
	1973141817,
	1372188635,
	1377642003,
	467164552,
	29774609,
	1297742167,
	455502171,
	30854966,
	41653419,
	418602744,
	451126088,
	32098431,
	30987703,
	30064263,
	34040716,
];
function getMusic(){
	return "https://music.163.com/outchain/player?type=2&id=" + songs[parseInt(Math.random() * songs.length)] + "&auto=0&height=32";
}
document.getElementById("my163musicplayer").src = getMusic();
