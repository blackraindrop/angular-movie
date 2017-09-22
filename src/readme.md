

```ts

http://43.225.158.120:3000/api/
catalogs
albums?path=/movie/喜剧片 专辑
movies?path 视频
episodes?path 播放地址

```

### catalogs
```json
{"code":0,"message":"","result":[{"path":"/movie/喜剧片","name":"喜剧片","empty":1},{"path":"/movie/动作片","name":"动作片","empty":0},{"path":"/movie/爱情片","name":"爱情片","empty":1},{"path":"/movie/科幻片","name":"科幻片","empty":0},{"path":"/movie/恐怖片","name":"恐怖片","empty":0},{"path":"/movie/战争片","name":"战争片","empty":1},{"path":"/movie/纪录片","name":"纪录片","empty":1}]}
```

### albums

```json
{"code":0,"message":"","result":[{"path":"/movie/动作片/鸳鸯劫","name":"鸳鸯劫","cover":"http://d.pcs.baidu.com/file/2c3bef73dc9d70512d1564f970f1b28f?fid=2550312961-250528-893065872604606&time=1506113729&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-49hFybQbjxmhsfghmkfFXikGYtY%3d&expires=8h&chkbd=0&chkv=0&dp-logid=6150857039406369773&dp-callid=0&r=292323124"},{"path":"/movie/动作片/银魂真人版","name":"银魂真人版","cover":"http://d.pcs.baidu.com/file/67c54401e61d9cbf774b8aa63f58e797?fid=2550312961-250528-470615613939842&time=1506113729&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-C5KGbzx8HQK0hsyzbnI%2fjx9SsgU%3d&expires=8h&chkbd=0&chkv=0&dp-logid=6150857094946058645&dp-callid=0&r=574724932"}]}
```

### movies

```json
{"code":0,"message":"","result":[{"name":"鸳鸯劫1080pHD国语中字","path":"/movie/动作片/鸳鸯劫/鸳鸯劫.1080p.HD国语中字.mkv","size":1378832853}]}
```

### episodes

```json
{"code":0,"message":"","result":[]}
```