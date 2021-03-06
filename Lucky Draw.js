// 🎄 以下为用 JavaScript 编写的简易抽奖演示代码，都是最基础的 JS 知识，将作为 圣诞活动 开奖使用 🎄

// 所有参与者的 id （以下用名称做演示，开奖时为 Telegram user id）
var idList = ["Neurogram", "Ryan", "Nicked", "Junian", "Linger", "lco lok", "Fndroid", "JunM", "AbleCats", "Eva1ent", "wind", "Axel", "Mu Wei", "anton.j", "Hhd°"]

// 奖品名称及对应的数量
var giftAmount = {
    "JSBox 兑换码": 2,
    "Stiiitch 兑换码": 1,
    "Dler Cloud 充值码": 2,
    "Notion 账户": 2,
    "熊猫吃短信 兑换码": 2,
    "隔壁西站邀请码": 2,
    "印象笔记 兑换码": 1,
    "Grape for Github 兑换码": 1
}

// 获取 giftAmount 的所有 Key 值，即 奖品名称
var giftName = Object.keys(giftAmount)

// 最终输出获奖者名单，先设置好这个变量
var winners = ""

var n = 0;

// 一个条件循环，条件满足时，就会不断循环运行，直到不满足条件时退出循环，这里的条件是变量 n 小于 giftName（奖品名称） 的个数（数组长度），因为我们顺着奖品名称，将当前奖品抽完，再抽下一个奖品，直到所有奖品抽完
while (n < giftName.length) {

    // 这里做了一个条件判断，判断当前抽取的奖品是否没有了，即是否为 0
    if (giftAmount[giftName[n]] != 0) {

        // 当前奖品还有时，我们在参与者个数中随机抽取一个数字
        var index = Math.floor((Math.random() * idList.length))

        // 通过上面抽取的数字，找到对应的参与者
        var winner = idList[index]

        // 将参与者和获得的奖品对应上，并赋值/添加给获奖名单 winners 这个变量
        winners += winner + " 获得 " + giftName[n] + " *1" + "\n\n"

        // 从参与者里去掉当前奖品获奖者，避免重复抽到
        idList.splice(index, 1)

        // 抽走一个奖品后，再将对应奖品的数量减去一个
        giftAmount[giftName[n]] = giftAmount[giftName[n]] - 1

    } else {

        // 当前奖品抽取完了，通过将 n 加 1 的方式，抽取下一个奖品
        n++
    }

    //进行下一次循环
}

// 展示 获奖名单
console.log(winners)