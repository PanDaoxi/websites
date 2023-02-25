var songs = [
	1479199734,
	32477986,
	
];
function getMusic(){
	return "https://music.163.com/outchain/player?type=2&id=" + songs[parseInt(Math.random() * songs.length)] + "&auto=0&height=32";
}
document.getElementById("my163musicplayer").src = getMusic();
