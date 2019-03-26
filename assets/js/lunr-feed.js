var hostname = "https://gx761.github.io";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "leetcode",
      category: ["docs"],
      content: "前言\n\n算法作为程序员的基本功。相信每一个有经验的工程师，无论是前端，还是后端终端，随着工作的深入，慢慢都会发现，比起学新的类库，框架，基本功才是真正体现你个人价值的本钱。\n我本人的算法本身较弱，如果只是去看算法书的话又觉得空洞乏味。从实践出发，直接来leetcode刷题到是涨了我不少知识，相信当做题做出感觉之后，再回头研究算法书会更得心应手。\n\nEasy难度题目\n\n1 Two Sum\n\n题目描述\n\n给定一个数组与一个target值，从数组中找出两个数，相加后等于target值。每个元素只会被用一次，且数组有且只有一个解。\n\n解题思路\n\n\n  穷举\n    \n      实现简单，从第一位开始往后遍历，直到找到最终target值，时间复杂度为O(n*n). 空间复杂度为O(1)。\n    \n  \n  两次遍历\n    \n      空间换时间，先整体遍历一次，以值为key，存到map中。再次便利，用target-num[i]找出差值，之后从map的key中，查找差值是否存在。\n      时间复杂度为O(n), 空间复杂度为O(n)。\n    \n  \n  单次便利\n    \n      同方法二类似，只不过在一次遍历的时候，一边将当前值做为key，当前index作为值，存到map中。一边从历史记录中查找差值。\n    \n  \n\n\n算法实现\n\nvar twoSum = function(nums, target) {\n    let map = new Map();\n    for(let i = 0; i&lt; nums.length; i++) {\n        let sub = target - nums[i];\n        if(map.has(sub)) {\n            return [\n                map.get(sub),\n                i\n            ];\n        }\n        map.set(nums[i], i);\n    }\n};\n\n7 Reverse Integer\n\n题目描述\n\n反转一个32位整数\n\n解题思路\n\n\n  原数123通过%10来得到最后一位数a=3，然后用过/10得到b=12，此时得到new result = result * 10 + a === 3 检测（new result-a）/ 10 === result\n  对于12通过%10来得到最后一位c=2，然后用过/10得倒d=1，此时得倒new result = result *10 + c === 32\n  对于剩下的数字1，通过%10得到e=1， 然后通过 /10得倒0， 此时new result = result * 10 + e === 321\n  每一步都需要检测新生成的数字有没有超出范围。对与32位数字，直接还原新的结果，跟微乘以10之前的结果比对，如果overflow，那就会还原失败。\n  对于javascript，由于数字默认都是64位的有符号整形，所以通过Math.pow(2, 31) 与 Math.pow(-2, 31)来作为边界测试。\n\n\n算法实现\n\nvar reverse = function(x) {\n    var res = 0;\n    while(x) {\n        let tmp = res;\n        res = res * 10 +  x % 10;\n        if (parseInt(res / 10) !== tmp || res &gt; Math.pow(2,31) -1 || res &lt; Math.pow(-2,31) + 1 ) {    \n            return 0;\n        }\n        x = parseInt(x / 10);\n    }\n    return res;\n};\n\n8 Palindrome Number\n\n题目描述\n\n判断数字是否回文，121，2332是回文\n\n解题思路\n\n\n  这里可以整个反转数字，然后判断与原数字是否相等。\n  更有效率的方式，是只反转数字的后半部分。\b\b逐个数字反转，在还没有反转到中间数字之前，反转的数字是一定小于未反转数的。\n  所以最终判断的时候，两个数要么就是完全相等，要么就是反转后的数字多一位，所以需要用 revertedNum / 10来移除那一位。\n\n\n算法实现\n\nvar isPalindrome = function(x) {\n    if(x &lt; 0 || x % 10 === 0 &amp;&amp; x !== 0) {\n        return false;\n    }\n    let revertedNum = 0;\n    while(x &gt; revertedNum) {\n        revertedNum = revertedNum * 10 + x % 10;\n        x = parseInt(x / 10);\n    }\n    return x === revertedNum || x === parseInt(revertedNum / 10);\n}\n\n",
      tags: [],
      id: 0
    });
    


var store = [{
    "title": "leetcode",
    "link": "/docs/leetcode-easy.html",
    "image": null,
    "date": "March 23, 2019",
    "category": ["docs"],
    "excerpt": "前言 算法作为程序员的基本功。相信每一个有经验的工程师，无论是前端，还是后端终端，随着工作的深入，慢慢都会发现，比起学新的类库，框架，基本功才是真正体现你个人价值的本钱。 我本人的算法本身较弱，如果只是去看算法书的话又觉得空洞乏味。从实践出发，直接来leetcode刷题到是涨了我不少知识，相信当做题做出感觉之后，再回头研究算法书会更得心应手。 Easy难度题目 1 Two Sum 题目描述 给定一个数组与一个target值，从数组中找出两个数，相加后等于target值。每个元素只会被用一次，且数组有且只有一个解。 解题思路 穷举 实现简单，从第一位开始往后遍历，直到找到最终target值，时间复杂度为O(n*n). 空间复杂度为O(1)。 两次遍历 空间换时间，先整体遍历一次，以值为key，存到map中。再次便利，用target-num[i]找出差值，之后从map的key中，查找差值是否存在。 时间复杂度为O(n), 空间复杂度为O(n)。 单次便利 同方法二类似，只不过在一次遍历的时候，一边将当前值做为key，当前index作为值，存到map中。一边从历史记录中查找差值。 算法实现..."
}]

$(document).ready(function() {
    $('#search-input').on('keyup', function () {
        var resultdiv = $('#results-container');
        if (!resultdiv.is(':visible'))
            resultdiv.show();
        var query = $(this).val();
        var result = index.search(query);
        resultdiv.empty();
        $('.show-results-count').text(result.length + ' Results');
        for (var item in result) {
            var ref = result[item].ref;
            var searchitem = '<li><a href="'+ hostname + store[ref].link+'">'+store[ref].title+'</a></li>';
            resultdiv.append(searchitem);
        }
    });
});