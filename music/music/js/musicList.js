/**************************************************
 * MKOnlinePlayer v2.32
 * 播放列表配置模块
 * 编写：mengkun(http://mkblog.cn)
 * 时间：2017-9-15
 *************************************************/
// 建议修改前先备份一下
// 获取 歌曲的网易云音乐ID 或 网易云歌单ID 的方法：
// 先在 js/player.js 中开启调试模式，然后按 F12 打开浏览器的控制台。播放歌曲或点开歌单即可看到相应信息

var musicList = [
    // 以下三个系统预留列表请勿更改，否则可能导致程序无法正常运行！
    // 预留列表：搜索结果
    {
        name: "搜索结果",   // 播放列表名字
        cover: "",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: []
    },
    // 预留列表：正在播放
    {
        name: "正在播放",   // 播放列表名字
        cover: "",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: []
    },
    // 预留列表：播放历史
    {
        name: "播放历史",   // 播放列表名字
        cover: "images/history.png",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: []
    },  
    // 以上三个系统预留列表请勿更改，否则可能导致程序无法正常运行！
    //*********************************************
    // 自定义列表开始，您可以自由添加您的自定义列表

    // 自定义列表教程开始！
    // 方式一：手动创建列表并添加歌曲信息
    // 温馨提示：各大音乐平台获取到的外链有效期均较短，因此 url 值应该设置为空，以让程序临时抓取
 
    // 方式二：直接提供网易云歌单ID
    {
        id: 119223759
    },    
    {    
        id: 387359964
    },    
    {    
        id: 601326333
    },    
    {    
        id: 429366546
    },    
    {    
        id: 98905936
    },    
    {    
        id: 30845567
    },    
    {   
        id: 2204417163
    },    
    {    
        id: 913908853
    },    
    {     
        id: 322341598
    },    
    {    
        id: 2342914705
    },    
        
    {    id: 2152471962// 网易云歌单ID
    }   // 播放列表的最后一项大括号后面不要加逗号
];