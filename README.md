# rnSaleProject
### 遇到的一些问题
  * 在使用@react-navigation/bottom-tabs时遇到很多的问题，有@react-navigation/bottom-tabs使用了一些依赖为安装的问题，有安装了几个还是报错问题，
  * 一开始我以为的是安装了@react-navigation/bottom-tabs就可以了，事实上是不行的，@react-navigation/bottom-tabs本身还依赖一些东西也需要安装一下，所以建议使用
  ```npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view```
  * 在编写tabbar过程中也遇到很多乱七八糟的问题，比如：TypeError: undefined is not an object (evaluating '_$$_REQUIRE(_dependencyMap[6], "@react-navigation/elements").ResourceSavingView，后面找到了[这个bug记录](https://github.com/react-navigation/react-navigation/issues/9995)，经过一番折腾实现了tabbar与navigationBar（这两个东西是iOS的叫法，与Android的有差异），最后实现后安装的依赖如下图所示：![依赖截图](https://github.com/fshmjl/rnSaleProject/blob/qa/others/%E4%BE%9D%E8%B5%96%E6%88%AA%E5%9B%BE1.png)
  * 

"TypeError: undefined is not an object (evaluating '_$$_REQUIRE(_dependencyMap[6], "@react-navigation/elements").ResourceSavingView')" #9995
