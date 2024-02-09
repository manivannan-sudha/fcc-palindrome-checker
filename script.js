function isPalindrome() {
    let txt = document.querySelector('.text-input').value;
    let a = txt;
    txt=txt.toLowerCase();
    let reversedString = txt.split("").reverse().join("");

    let res = document.getElementById('result');


    reversedString = reversedString.replace(/[^a-zA-Z0-9]/g, '');
    txt = txt.replace(/[^a-zA-Z0-9]/g, '');
    console.log(reversedString);
    if(txt.length==0)
    { 
      alert('Please input a value');
    }
    else if(txt == reversedString)
    {
        res.innerHTML = a + ' is a Palindrome';
        console.log(a + " is a palindrome");
        res.style.display = 'block';
        // res.innerHTML = "<div>is a palindrome</div>"
    }
    else
    {
        res.innerHTML = a + ' is not a Palindrome';
        res.style.display = 'block';
        console.log(a+ " is not a palindrome");
    }
}

