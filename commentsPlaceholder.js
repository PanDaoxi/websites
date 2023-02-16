var texts = [
	"发表神评妙论",
	"万水千山总是情，留条评论行不行~",
	"发表一条友善的评论",
	"留下一条评论，发表你的看法",
	"觉得内容不错？快来发表评论吧！",
	"评论千万条，友善第一条",
	"有什么想说的吗？",
	"要吐槽些什么呢？",
	"如果有疑问，请尽快留言哦~",
	"想要去评论些什么吗？",
	"要说点什么吗？",
	"觉得博客不错？快来留言和主人交流吧！",
	"评论没有审核，要对自己的发言负责哦~",
];

document.getElementById("commentsPlaceholder").innerHTML = texts[parseInt(Math.random() * texts.length)];

