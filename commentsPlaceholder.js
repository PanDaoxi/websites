var texts = [
	"发表神评妙论",
	"万水千山总是情，留条评论行不行~",
	"发表一条友善的评论",
	"留下一条评论，发表你的看法",
	"觉得内容不错？快来发表评论吧！",
];

document.getElementById("commentsPlaceholder").innerHTML = texts[parseInt(Math.random() * texts.length)];

