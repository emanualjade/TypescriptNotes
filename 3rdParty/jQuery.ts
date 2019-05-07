// ======== Make jquery work
// https://www.udemy.com/understanding-typescript/learn/v4/t/lecture/12888956?start=0
declare var $: any
$('button').onClick(() => {console.log('clicked')})
