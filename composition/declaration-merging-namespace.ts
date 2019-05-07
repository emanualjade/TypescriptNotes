// 1)
//// assume this is in some other file
namespace MyNameSpace {
  export const x: number = 10;
  export interface SomeInterface {
    y: number;
  }
}

// 2) 
/// assume this in a different file
namespace MyNameSpace {
  export const getX = () => x;
  export interface SomeInterface {
    x: number;
  }
}

MyNameSpace.x
MyNameSpace.getX()
const someInterface: MyNameSpace.SomeInterface = {
  x: 1,
  y: 2
}
