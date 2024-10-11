//filter

const coding = ["js", "ruby", "java", "python", "cpp"]


coding.forEach((i)=>{//ata kono kisu return kore nah
    // console.log(i);
})

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                //call back        //arrow finction
// myNums.filter(   (num)                 =>{//value return kore ata

// })

let new_num = myNums.filter( (i) =>(i>4))//arra te 4 ar thake broro value return korbe
// console.log(new_num);

 new_num = myNums.filter( (i) =>{
    return (i<4)
})
// console.log(new_num);

const a = []

myNums.forEach( (i) => {
    if(i>4){
        a.push(i)
    }
})
// console.log(a);


const books = [//array type ar object
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];




const  b = books.filter( (i) => i.genre==="History" && i.edition>2000)
console.log(b);










