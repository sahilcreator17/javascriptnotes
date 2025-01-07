// Data Object Model = DOM

/*
simple commands to test -- 

01. console.log(document.links[2])

02. document.getElementById("firstheading").innerHTML = "<h1>AVINASH</h1>"

03. document.getElementById("firstheading").class  --- This will never work as class is a reserve keyword. You have to use className.

04. document.getElementById("firsheading").className.

05. document.getElementById("firstheading").getAttribute('id') -- Output will be ID

06. document.getElementById("firstheading").getAttribute('class') -- Output will be class

07. You can also pass style with getElementById and change it.

08. Difference between innertext and textContent -- 

  a. innertext -- This  will display the text node of the element.
  b. innerContent -- This will display everything even when the text is hidden by any CSS property.

09. const h2 = document.querySelector('h2') -- This will always pick the first element from the list if you have multiple h2.

10. const newUl = document.queryselectorAll('ul') -- This will give you all the items inside UL and the type is NODELIST.

11. Nodelist -- When you check the property you will see that you get forEach for Nodelist but not for HTMLCollection.

12. But you can not run all the features of Array in Nodelist as well. 

13. When you use querrySelectorAll -- always remember to run it on the li not on the ul if you want to modify the li.

14. When you get HTMLCollection -- document.getElementByClassName() than you will not be able to run any array methods. 

To do that you have to convert it into an array. Example -- 

  const newLi = document.getElementByClassName('items')
  newArr = Array.from(newLi)
  newArr.forEach(function(l){ l.style.color = 'green'})

This is how you can convert an HTMLcollection to a pure array and than perform all the functions.


// How to get input tag in Query Selector -- 

document.querySelectorAll('input[type="password"]')

*/