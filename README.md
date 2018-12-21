# sw-api 前端仓库

## 1.How-To


### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## 2 Using Docker

### build a image from DockerFile

``` shell
# 位于项目的根目录下
docker build -t my-swapi-vue:v1 .
```

### run contrainer

``` shell

docker run -it -p 8080:8080 my-swapi-vue:v1

```

## 3协作方式

[参考网站](https://github.com/SYSUMonkeyEye/MonkeyEye-FE)

### 3.1  准备工作

在github上fork本仓库到你自己的github，将你fork之后的远程仓库克隆到本地，并在你的本地仓库上添加上游仓库，即源仓库。fork一般是fork了仓库的master分支，所以可能还需要自己去切出dev分支然后拉取源仓库dev分支上的内容。

``` bash
git clone https://github.com/{你的github仓库}
# 上游的源仓库地址只需添加一次
git remote add upstream https://github.com/{组织仓库}
# 切出dev分支并拉取源仓库dev分支上的内容
git checkout -b dev
git pull upstream dev
```
### 3.2 方式-1

要开发某个模块的时候，在你的本地仓库创建一个分支，例如mydev。

```bash

git checkout -b mydev

```

切换之后你的本地仓库上就有3个分支了，如下所示。checkout之后会自动切换到mydev分支。

```txt
├─master
├─dev
└─mydev
```

在mydev分支上进行开发和测试，完成相应的功能或者模块，完成之后再切回到dev分支将mydev的内容合并到dev。

```bash
# mydev分支上提交你的更新
git add *
git commit -m "add something"
# 切换到dev分支
git checkout dev
```

由于在你开发过程中，我也可能在开发并且更新了仓库，为了避免冲突，在合并分支之前你还需要更新你本地仓库的dev分支。先在本地仓库上添加上游仓库upstream，上游仓库即我的仓库，然后使用pull命令从上游仓库拉取更新。

```bash
# 拉取上游的源仓库dev分支上的更新
git pull upstream dev
```

更新完dev之后，将mydev分支合并到dev分支并提交到你自己的远程仓库。完成之后，mydev分支就可以删除了，你也可以继续留着。

```bash
# 将mydev分支合并到dev，可能会有冲突需要自行解决
git merge mydev
# 推送到你自己的远程仓库，注意这里是push到origin dev，不是upstream dev
git push origin dev
# 删除mydev分支
git branch -d mydev
```

推送到自己的远程仓库后，就可以到github上面给我发Pull Request了，然后等待我合并你的代码。

#### 2.3 方式-2

嫌上面太麻烦？你也可以直接在fork之后的的dev分支上面进行开发，然后在发送PR之前先从源仓库拉取更新。

```bash
# 提交你的代码
git add *
git commit -m "add something"
# 拉取上游的源仓库dev分支上的更新，可能会有冲突需要自行解决
git pull upstream dev
# 推送到你自己的远程仓库，注意这里是push到origin dev，不是upstream dev
git push origin dev
```