

// Задание 1


function solution(arr) {
    let emptyOdj = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in emptyOdj) {
            emptyOdj[arr[i]] += 1;
        } else {
            emptyOdj[arr[i]] = 1;
        }
    }
    let ArrResult = [];
    for (let num in emptyOdj) {
        if (emptyOdj[num] % 2 !== 0) {
            ArrResult.push(parseInt(num));
        }
    }
    return ArrResult;
}

console.log(solution([12, 23, 34, 12, 12, 23, 12, 45]));
console.log(solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100]));
console.log(solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]));
console.log(solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]));
console.log(solution([2, 2, 44, 44]));


// Задание 2


function EzjQuery(tag) {
    this.html = `<${tag}></${tag}>`;

    this.add = function (tag, content) {
        if (content) {
            this.html += `<${tag}>${content}</${tag}>`;
        } else {
            this.html += `<${tag}></${tag}>`;
        }
        return this;
    };

    this.render = function () {
        const result = this.html;
        this.html = `<${tag}></${tag}>`;
        return result;
    };
}

const helloList = new EzjQuery('body')
    .add('div')
    .add('ul')
    .add('li', 'Hello')
    .render();
console.log(helloList);

let bodyDiv = new EzjQuery('body')
    .add('div')
    .render();
console.log(bodyDiv);

document.write(helloList)



/*function ezjQuery(tag) {
    let stack = [{tag, content: ""}];

    function add(newTag, newContent = "") {
        stack.push({tag: newTag, content: newContent});
        return this;
    }

    function render() {
        let result = "";
        stack.reverse().forEach(({tag, content}) => {
            result = `<${tag}>${content}${result}</${tag}>`;
        });
        stack = [{tag, content: ""}];
        return result;
    }

    return {add, render};
}

// example

const helloList = ezjQuery('body')
    .add('div')
    .add('ul')
    .add('li', 'Hello')
    .render();
console.log(helloList);

const bodyDiv = ezjQuery('body')
    .add('div')
    .render();
console.log(bodyDiv);*/
