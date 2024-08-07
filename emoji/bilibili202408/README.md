这是我寻找到的 2024 年夏季 bilibili 的表情包，共 290 张图片，可用于 valine 评论系统的自定义表情。

具体映照关系见本文件夹下的 `emojiMaps.json` 文件。

这个或许能帮到你：

```js
function fetchLocalJson(file) {
	return new Promise((resolve, reject) => {
		fetch(file)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

var emojiMap;
fetchLocalJson("../media/").then((data) => {
	emojiMap = data;
});
```

当然，你可以将 `emojiCDN` 设置为 `https://i0.hdslb.com/bfs/emote/`，也可以利用 Github Pages，使用 `https://pandaoxi.github.io/websites/emoji/bilibili202408/`。

使用愉快！~

<!--

至于是从哪里找到 bilibili 表情的，我是从
直播间、评论
的 “标签” 按钮中，找到的。
-->
