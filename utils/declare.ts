// https://www.udemy.com/course/react-with-typescript/learn/lecture/14461188#overview
// ======= DECLARE
// declare is used to tell TypeScript that the variable has been 
// created elsewhere. If you use declare, nothing is added to the 
// JavaScript that is generated - it is simply a hint to the compiler.
// Declare things that don't exist but perhaps do in global scope
declare var $; // declare that jquery exists
declare class ComponentYo<P> {
    props: P
}
