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
的 “标签” 按钮中，开发者工具，HTML 元素中找到的。

div.emoji-wrap 一类的。
-->

用 python 实现下载到本地。这是源代码：

```python
# Author:PanDaoxi
from bs4 import BeautifulSoup
from requests import get
emoji_ = """
获取到的表情包 HTML
"""
soup = BeautifulSoup(emoji_, 'html.parser')
image_dict = {}
img_tags = soup.find_all('img')
for img in img_tags:
    title = img.get('title', '').split("[")[1].split("]")[0]
    src = img.get('src', '').split("@")[0]
    if src[0] != "h":
        src = "https:" + src
    if title and src:
        with open(f"folder/{(_:=src.split("/"))[len(_)-1]}", "wb") as f:
            f.write(get(src).content)
        image_dict[title] = _[len(_)-1]
with open("folder/emojiMaps.json", "w", encoding = "utf-8") as f:
    f.write(str(image_dict))
```
