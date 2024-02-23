/**
 * object /객체
 */
 

let samwon = {
    name: '삼원',
    group: '삼원컴',
    dance: function(){
        return `${this.name}이 춤을 춥니다...`;
    }
};

console.log(samwon);
console.log(samwon.name);
console.log(samwon['name']);

console.log(samwon.dance());

const key = 'name';

console.log(samwon[key]);

const nameKey = 'name';
const nameValue = '삼원';

const groupKey = 'group';
const groupValue = '삼원컴';

const samwon2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다..`;
    }
}
console.log(samwon2);
console.log(samwon2.dance());

samwon2['group'] = '코드팩토리';
console.log(samwon2);

samwon2['English name'] = 'sam won com';
console.log(samwon2);

delete samwon2['English name'];
console.log(samwon2);

/**
 * 객체의 특징
 * 
 * 1) const로 선언할경우 객체 자체를 변경  할수는 없다.
 * 2)객체 안의 프로퍼티나 메서드는 변경 할 수 있다....
 * 
 * 
 */
const samWon = {
    name : '삼삼',
    group: '삼원컴',
}    
console.log(samWon);

//samWon = {};
//console.log(samWon);  에러

samWon['group']= '코드팩토리';
console.log(samWon);

console.log('-----------------------------');



console.log(Object.keys(samWon));


console.log(Object.values(samWon));
