
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
                //  task 01/19/2020
// 1.1 ///////////////////////////////////////////////

// the way № 1 //

// let a = 2.4
// let b = 3.3
// let result = a * b
// result =  result.toFixed(1)
// let c = 1
// let d = c * result
// console.log(d, typeof d)

// the way № 2 //

// let a = 2.4
// let b = 3.3
// let result = a * b
// result =  result.toFixed(1)
// let d = Number(result)
// console.log(d, typeof d)

// the way № 3 //

// let a = 2.4
// let b = 3.3
// let result = a * b
// result = parseFloat(result.toFixed(1))
// console.log(result, typeof result)

/////////////////////////////////////////////////////////
// 1.2 /////////////////////////////////////////////////

// let name = "Polina"
// let age = 25
// let thisyear = 2020
// let text1 = "My name is"
// let text2 = "I was born in"
// let text3 = "and I'm"
// let text4 = "years old"
// let birthyear = thisyear - age
// birthyear = String(birthyear)
// age = String(age)
// let textbig =  text1 + " " + name + "." + " " + text2 + " " + birthyear + " " + text3 + " " + age + " " + text4
// console.log(textbig)

/////////////////////////////////////////////////////////
// 1.3 /////////////////////////////////////////////////

// let radius = "5.67cm";
// let text = "Circle square is";
// let pi = Math.PI;
// let radiusnum = (radius.substr(0, radius.length-2));
// let textcm = radius.substring(radius.indexOf("cm"));
// radiusnum = Number(radiusnum)
// let area = Math.pow(radiusnum,2) * pi
// area = Math.floor(area)
// let result = text + " " + area + "(" + textcm + "^2" + ")"
// console.log(result)



///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// 2.1 ////////////////////////////////////////////////

// the way № 1 //


// let isUserConfirm = confirm('ХОТИТЕ УЗНАТЬ ЧЕТНОСТЬ ЧИСЛА?')
// if (isUserConfirm) 
// {
//     let input_data = +prompt("ВВЕДИТЕ ЧИСЛО")
//     if ( isNaN(input_data))
//     {
//         document.write('Это не чиcло')
//     } else {   
//         if (input_data > 0) 
//         {
//             const isNumberEven = input_data % 2 == 0
//             if (isNumberEven) 
//             {
//             document.write('Четное')    
//             } else {    
//             document.write('Не четное')
//             } 
//         }
//     }
 
// } 



////////////////////////////////////////////////////////////////
// the way № 2 //



// let isUserConfirm = confirm('ХОТИТЕ УЗНАТЬ ЧЕТНОСТЬ ЧИСЛА?')
// if (isUserConfirm) {
//   let input_data = +prompt("ВВЕДИТЕ ЧИСЛО")
//   if ( isNaN(input_data)) {
//     document.write('Это не чиcло')
//     alert('Это не чиcло')
//   } else {   
//     if (input_data > 0) {
//       const isNumberEven = input_data % 2 == 0
//       if (isNumberEven) {
//         document.write('Четное')
//         alert('Четное')    
//       } else {    
//         document.write('Не четное')
//         alert('Не четное')
//       } 
//     }
//   } 
// } 


////////////////////////////////////////////////////////////////
// 2.2 /////////////////////////////////////////////////////////


// let isUserConfirm = confirm('test')
// if (isUserConfirm) {
//   let input_datax = +prompt("ВВИДИТЕ ЧИСЛО")
//   if ( isNaN(input_datax)) {
//     document.write('Это не чиcло')
//   } else {   
//     if (input_datax < 0) {
//       const isNumberEven = Math.abs(input_datax) % 3 == 0
//       if (isNumberEven) {
//         input_datay1a = input_datax * input_datax
//         console.log(input_datay1a)    
//       } else {
//         // input_datay1b = input_datax % 8
//         input_datay1b = (Math.ceil(Math.abs(input_datax / 8)) * 8) + (input_datax)
//         console.log(input_datay1b)
//       } 
//     }
//     if (input_datax == 0) {
//     input_datay2a = String(input_datax)
//     console.log(input_datay2a, typeof input_datay2a)
//     } 
//     if (input_datax > 0) {
//       input_datay3a = Math.ceil(Math.sqrt(input_datax))  
//       if (input_datay3a > 1) {
//         input_datay3b = Math.pow(input_datay3a, 2)
//         console.log(input_datay3b)
//       } else {
//         input_datay3c = input_datay3a - 0.5
//         console.log(input_datay3c)
//       }
//     }
//   } 
// } 

////////////////////////////////////////////////////////////////
// 2.3 /////////////////////////////////////////////////////////


// let isUserConfirm = confirm('Вам исполнилось 18 лет ?');
// if (isUserConfirm == true) {
//   let number = Math.floor(Math.random() * 11);
//   console.log(number)
//   let guess = +prompt("ВВЕДИТЕ ЧИСЛО от 0 до 10");
//   let numberOfGuesses = 0; 
//   while (guess != number) {
//     if (guess > number) {
//       guess = prompt(" БОЛЬШОЕ ЧИСЛО \n\ попробуйте ещё раз");
//       numberOfGuesses = numberOfGuesses + 1;
//     } 
//     if (guess < number) {
//       guess = prompt(" МАЛЕНЬКОЕ ЧИСЛО \n\ попробуйте ещё раз");
//       numberOfGuesses = numberOfGuesses + 1;
//     }
//   }
//   alert(" ВЫ УГАДАЛИ ЧИСЛО \n\ число - " + number + ".\n\ попыток - " + numberOfGuesses + '.');   
// } else {
//   alert(" Вам не исполнилось 18 лет.\n\ ИГРА ЗАВЕРШЕНА.");
// } 
     













