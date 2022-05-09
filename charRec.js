function correct(string)
{
	let arr = string.split('')
  let newArr = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === '5'){
      newArr.push('S')
    }else if (arr[i] ==='0'){
      newArr.push('O')
    }else if (arr[i] === '1'){
      newArr.push('I')
    }else{
      newArr.push(arr[i])
    }
  }
  return newArr.join('')
}
